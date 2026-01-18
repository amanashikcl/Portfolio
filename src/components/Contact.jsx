import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import GradientText from './GradientText';
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { CheckCircle, AlertCircle, X } from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [alertState, setAlertState] = useState({ show: false, type: 'default', title: '', message: '' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    // Auto-dismiss alert after 5 seconds
    useEffect(() => {
        if (alertState.show) {
            const timer = setTimeout(() => {
                setAlertState(prev => ({ ...prev, show: false }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alertState.show]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setAlertState({ show: false, type: 'default', title: '', message: '' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_xlwv3tx';
        const TEMPLATE_ID = 'template_33eylc1';
        const PUBLIC_KEY = 'rV81aoarPXaxLoZTA';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setAlertState({
                    show: true,
                    type: 'default', // Using default variant which we'll style as success
                    title: 'Success!',
                    message: 'Your message has been sent successfully. I\'ll get back to you soon!'
                });
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    subject: '',
                    message: ''
                });
                e.target.reset();
                setIsSending(false);
            }, (error) => {
                console.log(error.text);
                setAlertState({
                    show: true,
                    type: 'destructive',
                    title: 'Error',
                    message: 'Failed to send message. Please try again or email me directly.'
                });
                setIsSending(false);
            });
    };

    return (
        <div className="max-w-5xl mx-auto px-8 py-12 relative overflow-hidden">

            {/* Fixed Alert Toast */}
            {alertState.show && (
                <div className="fixed top-24 right-8 z-50 w-full max-w-md animate-in slide-in-from-right-full fade-in duration-300">
                    <Alert variant={alertState.type} className={`${alertState.type === 'default' ? 'border-purple-500/50 bg-purple-500/10 text-purple-200' : 'border-pink-500/50 bg-pink-500/10 text-pink-200'} backdrop-blur-md shadow-2xl border`}>
                        {alertState.type === 'default' ? <CheckCircle className="h-4 w-4 text-purple-400" /> : <AlertCircle className="h-4 w-4 text-pink-400" />}
                        <AlertTitle className={alertState.type === 'default' ? 'text-purple-400' : 'text-pink-400'}>{alertState.title}</AlertTitle>
                        <AlertDescription className="text-white/80">
                            {alertState.message}
                        </AlertDescription>
                        <button
                            onClick={() => setAlertState(prev => ({ ...prev, show: false }))}
                            className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="h-4 w-4 opacity-70" />
                        </button>
                    </Alert>
                </div>
            )}

            <div className="text-center space-y-6 mb-4 relative z-10">
                <GradientText
                    colors={['#818cf8', '#c084fc', '#f472b6', '#818cf8']}
                    animationSpeed={3}
                    className="text-6xl font-extrabold tracking-tight"
                >
                    Let's Connect
                </GradientText>
            </div>

            <div className="relative group">
                <form ref={form} onSubmit={handleSubmit} className="relative space-y-8 bg-black/40 p-10 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group/field space-y-2">
                            <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your name"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="group/field space-y-2">
                            <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group/field space-y-2">
                            <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                placeholder="Enter your phone number"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="group/field space-y-2">
                            <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                placeholder="Enter subject"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="group/field space-y-2">
                        <label className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 min-h-[150px] resize-y"
                            placeholder="Enter content"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <button
                            type="submit"
                            disabled={isSending}
                            className="btn btn-primary btn-lg px-10 rounded-full hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:scale-100"
                        >
                            {isSending ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
