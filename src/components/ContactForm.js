"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.reason.trim()) newErrors.reason = "This field is required.";
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "This field is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null); 

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        console.log("Form submitted successfully:", formData);
        setSubmitStatus('success');
        
        setFormData({
          name: "", phone: "", email: "", reason: "", preferredTime: "", agree: false,
        });
        setErrors({});

      } catch (error) {
        console.error("Submission failed:", error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <div className="text-center">
        <h3 className="text-3xl font-serif text-dark-teal">Get In Touch</h3>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Simply fill out the brief fields below and Dr. Blake will be in touch
          with you soon, usually within one business day. This form is safe, private,
          and completely free.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
        {submitStatus === 'success' && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-800 rounded-md text-sm">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-800 rounded-md text-sm">
            Something went wrong. Please try again later.
          </div>
        )}
      
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
            value={formData.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="(555) 123-4567"
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">What brings you here?</label>
          <textarea
            name="reason"
            id="reason"
            rows="4"
            placeholder="How can I help you?"
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 ${errors.reason ? "border-red-500" : "border-gray-300"}`}
            value={formData.reason}
            onChange={handleChange}
            aria-invalid={!!errors.reason}
            aria-describedby={errors.reason ? "reason-error" : undefined}
          ></textarea>
          {errors.reason && <p id="reason-error" className="mt-1 text-sm text-red-600">{errors.reason}</p>}
        </div>
        
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Preferred time to reach you</label>
          <input
            type="text"
            name="preferredTime"
            id="preferredTime"
            placeholder="e.g., Weekday afternoons"
            className={`mt-1 block w-full rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500 ${errors.preferredTime ? "border-red-500" : "border-gray-300"}`}
            value={formData.preferredTime}
            onChange={handleChange}
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? "time-error" : undefined}
          />
          {errors.preferredTime && <p id="time-error" className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
        </div>

        <div className="relative">
          <div className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                className={`h-4 w-4 rounded focus:ring-teal-500 ${errors.agree ? "border-red-500 text-red-600" : "border-gray-300 text-teal-600"}`}
                checked={formData.agree}
                onChange={handleChange}
                aria-invalid={!!errors.agree}
                aria-describedby={errors.agree ? "agree-error" : undefined}
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="agree" className="font-medium text-gray-700">I agree to be contacted</label>
            </div>
          </div>
          {errors.agree && <p id="agree-error" className="text-sm text-red-600">{errors.agree}</p>}
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        <div className="flex items-start gap-3 text-xs text-gray-500 pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <p>
            By submitting, you confirm you are 18+ and agree to our{" "}
            <Link href="/privacy-policy" className="underline hover:text-gray-800">Privacy Policy</Link>
            {" & "}
            <Link href="/terms-of-service" className="underline hover:text-gray-800">TOS</Link>{" "}
            and to receive emails & texts from Dr. Serena Blake.
          </p>
        </div>
      </form>
    </div>
  );
}