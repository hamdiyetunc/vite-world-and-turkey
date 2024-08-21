import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="mt-10 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          İletişim
        </h2>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
          <form
            action="#"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-gray-600">Adınız</span>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="text-gray-600">E-posta</span>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
            <label htmlFor="message" className="flex flex-col">
              <span className="text-gray-600">Mesajınız</span>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-[#134069] text-white py-2 px-4 rounded-md hover:bg-[#0d2b43] transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
