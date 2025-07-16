import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import SocialBtn from './SocialBtn';
import ArrowIcon from '../../../imgs/strelka.svg?react';


function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                form.current.reset();

                // Clear
                setTimeout(() => setSubmitStatus(''), 5000);
            }, (error) => {
                console.log('FAILED...', error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);

                // Clear
                setTimeout(() => setSubmitStatus(''), 5000);
            });
    };

    return (
        <>
            <section class="contact-me relative grey-bg-lines-darker text-center" id='contact'>

                <div className='bottom-blue'></div>


                <div className='container'>



                    <div class="contact-wrap">

                        {/* <!-- left --> */}
                        <div class="left">

                            <h2 class="font-bold">Contact Me</h2>
                            <p>
                                Whether it’s a project idea or just a quick chat, I’d love to hear from you!
                                <br />
                                <br />
                                Feel free to send me an e-mail using the form here or alternatively you can find me
                                on Discord, LinkedIn or give me a call!
                            </p>




                            {/* <!-- email --> */}
                            <a href="mailto:ognen.manevski@gmail.com" class="btn btn-white">
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                                ognen.manevski@gmail.com
                            </a>

                            {/* <!-- socials --> */}
                            <div class="socials-grid">
                                <SocialBtn type="linkedin" href="https://www.linkedin.com/in/ognen-manevski-design/" />
                                <SocialBtn type="github" href="https://github.com/ognen-manevski" />
                                <SocialBtn type="discord" href="https://discordapp.com/users/" />
                                <SocialBtn type="phone" href="tel:+123456789" />
                            </div>



                        </div>

                        {/* <!-- right --> */}
                        <div class="right">

                            <form ref={form} onSubmit={sendEmail} class="flex flex-col gap-8 contact-me-form">

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success">
                                        <p>✅ Message sent successfully! I'll get back to you soon.</p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="alert alert-error">
                                        <p>❌ Failed to send message. Please try again or contact me directly.</p>
                                    </div>
                                )}

                                {/* <!-- email--> */}
                                <div className='email-wrap polygon-clip-border'>
                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Your e-mail address"
                                        class="email-input"
                                        required
                                    />
                                </div>

                                {/* <!-- msg --> */}
                                <div className='textarea-wrap polygon-clip-border'>

                                    <div className='text-transparent'>
                                        Your<br /> Idea
                                    </div>

                                    <textarea
                                        rows="12"
                                        name="message"
                                        placeholder="Tell me about your project or idea..."
                                        class="textarea-input"
                                        required
                                    ></textarea>

                                </div>

                                {/* <!-- attach/submit --> */}
                                <div class="flex justify-between items-center attach-submit">

                                    <label class="btn cursor-pointer label-attach">
                                        <span class="material-symbols-outlined">
                                            attachment
                                        </span>
                                        Attach a file
                                        <input type="file" name="attachment" class="hidden" />
                                    </label>

                                    <button type="submit" class="btn cursor-pointer send-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                        <ArrowIcon />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Contact;