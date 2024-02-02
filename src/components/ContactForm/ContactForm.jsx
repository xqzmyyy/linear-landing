import { useState } from "react";
import "./ContactForm.css";
import { memo } from "react";

const ContactForm = memo(({ contactRef }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    return (
        <div ref={contactRef} className="contactform_cont">
            <div className="title_contactform">Contact Us</div>
            <div className="input_cont_contactform">
                <form
                    className="form_cont"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        className="input_contactform"
                        placeholder="Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <input
                        className="input_contactform"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <textarea
                        className="textarea_contactform"
                        placeholder="Your message"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        required
                    />
                    <button
                        disabled={!email || !name || !text}
                        className="button_contactform"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
});

export default ContactForm;
