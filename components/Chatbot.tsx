
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { sendMessageToAI } from '../services/geminiService';
import { ChatMessageSender } from '../types';
import type { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                 setMessages([{ sender: ChatMessageSender.AI, text: "Hi! I'm ShubhamAI, your personal guide to this portfolio. Feel free to ask me anything about Shubham's skills, projects, or experience." }]);
                 setIsLoading(false);
            }, 1000);
        }
    }, [isOpen, messages.length]);


    const handleSendMessage = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading) return;

        const newMessages: ChatMessage[] = [...messages, { sender: ChatMessageSender.USER, text: userInput }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const aiResponse = await sendMessageToAI(userInput);
            setMessages([...newMessages, { sender: ChatMessageSender.AI, text: aiResponse }]);
        } catch (error) {
            setMessages([...newMessages, { sender: ChatMessageSender.AI, text: "Sorry, something went wrong." }]);
        } finally {
            setIsLoading(false);
        }
    }, [userInput, isLoading, messages]);


    const ChatBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
        const isUser = message.sender === ChatMessageSender.USER;
        return (
            <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
                <div
                    className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 text-sm ${
                        isUser
                            ? 'bg-teal-500 text-white'
                            : 'bg-slate-700 text-slate-300'
                    }`}
                >
                    {message.text}
                </div>
            </div>
        );
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-teal-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-400 z-50"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                )}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[28rem] bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-2xl flex flex-col z-40 border border-slate-700">
                    <div className="p-4 bg-slate-900 rounded-t-lg">
                        <h3 className="font-bold text-lg text-slate-200">Chat with ShubhamAI</h3>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        {messages.map((msg, index) => <ChatBubble key={index} message={msg} />)}
                        {isLoading && <ChatBubble message={{sender: ChatMessageSender.AI, text: '...'}} />}
                         <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Ask about projects..."
                                className="flex-1 bg-slate-700 text-slate-200 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 border-0"
                                disabled={isLoading}
                            />
                            <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 disabled:bg-slate-600" disabled={isLoading}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;