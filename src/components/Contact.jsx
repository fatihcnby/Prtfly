import React from "react";
import { FiMail, FiMessageSquare, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_78d46kc", "template_7fhg6qm", form.current, {
      publicKey: "X0L0ezUM0MAi77wTG",
    });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="max-w-lg mx-auto relative">
        <div className="text-center mb-16 group">
          <h2 className="text-4xl font-bold text-green-900 inline-block relative pb-2">
            BANA ULAŞIN{" "}
            <span className="absolute bottom-0 left-0 h-1 bg-green-600 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </h2>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-md border border-gray-100"
        >
          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="" className="block text-gray-700 mb-2">
              İsim
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="user_name"
                className="w-full pl-10 pr-4 py-3 border bg-gray-100 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="İsminizi Girin"
              />
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="" className="block text-gray-700 mb-2">
              E-Posta Adresi
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                name="user_email"
                className="w-full pl-10 pr-4 py-3 border bg-gray-100 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="E-posta Adresiniz"
              />
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor="" className="block text-gray-700 mb-2">
              Mesajınız
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                rows={4}
                name="project"
                className="w-full pl-10 pr-4 py-3 border bg-gray-100 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="Mesajınızı Buraya Yazın"
              />
            </div>
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-all"
          >
            Mesajı Gönder
          </motion.button>
        </form>
      </div>
      <div className="mt-8 text-center text-gray-800">
        <p className="">
          Doğrudan Mail Yoluyla:
          <span className="text-gray-950 font-bold"> fatihcnby@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
