import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

// Professional Contact Details
const contactDetails = {
  managingDirectors: [],
  executiveOfficer: "",
  officeAddress: {
    chennai: "No.35A, Gopathy Villa, Santhome High Road, Mylapore, Chennai - 600004",
    coimbatore: "SF No. 313 & 314, Member Venkatachalam Road, K.K.Pudur, Saibaba Colony, Coimbatore, Tamilnadu - 641038"
  },
  
  email: "avkalpavriksha@gmail.com",
  gstin: "33JBIPS9096E1ZZ"
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col gap-8 xl:gap-10 overflow-hidden xl:mt-12 items-center xl:items-stretch">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-[#7b3f00] w-full rounded-2xl p-4 sm:p-8 md:p-10 flex flex-col justify-center"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Professional Contact Information Section */}
        <div className="mt-6 mb-6 sm:mt-8 sm:mb-8 bg-[#a0522d] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-white text-xl font-bold mb-6 sm:mb-8"></h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center">
              {/* <span className="text-[#f5deb3] font-medium mr-2">Managing Directors :</span> */}
              <span className="text-white text-base sm:text-lg">{contactDetails.managingDirectors.join(", ")}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              {/* <span className="text-[#f5deb3] font-medium mr-2">Executive Officer :</span> */}
              <span className="text-white text-base sm:text-lg">{contactDetails.executiveOfficer}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#f5deb3] font-medium text-lg">Office Address :</span>
              <div className="ml-0 sm:ml-2 mt-1 space-y-2 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[#f5deb3] text-base font-medium mr-2">Chennai Branch :</span>
                  <span className="text-white text-base sm:text-lg">{contactDetails.officeAddress.chennai}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[#f5deb3] text-base font-medium mr-2">Coimbatore Branch :</span>
                  <span className="text-white text-base sm:text-lg">{contactDetails.officeAddress.coimbatore}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#f5deb3] font-medium mr-2">Email :</span>
              <span className="text-white text-base sm:text-lg">{contactDetails.email}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <span className="text-[#f5deb3] font-medium mr-2">GSTIN :</span>
              <span className="text-white text-base sm:text-lg">{contactDetails.gstin}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");