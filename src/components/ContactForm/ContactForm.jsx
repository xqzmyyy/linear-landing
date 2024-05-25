import { memo, useState } from 'react';
import './ContactForm.styles.css'

const ContactForm = memo(() => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    return (
        <div className='contact-form-body'>
            <form 
                className="form-cont"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type='email'
                    placeholder='Email'
                    autoComplete='off'
                    autoFocus='off'
                    className='default-input'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <input
                    type='text'
                    placeholder='Name'
                    autoComplete='off'
                    autoFocus='off'
                    className='default-input'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <textarea
                    className="default-textarea"
                    placeholder="Your message"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    required
                />
                <button
                        disabled={!email || !name || !text}
                        className="default-btn"
                    >
                        Send Message
                    </button>
            </form>
        </div>
    )
})

export default ContactForm