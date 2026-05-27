type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kalpavriksha Advance Ventures",
    fullName: "Kalpavriksha Advance Ventures",
    email: "avkalpavriksha@gmail.com",
  },
  hero: {
    name: "Kalpavriksha Advance Ventures",
    p: [
      "Delivering trusted trading, investment, real estate, and import-export solutions for private and government partners.",
    ],
  },
  contact: {
    p: "Get in touch with our",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `At Kalpavriksha Advance Ventures, we provide comprehensive trading, investment, real\u2011estate, and import-export solutions to ensure profitable and secure business opportunities. Our expertise extends to government tenders, making us a reliable partner for both private and public sector projects.`,
    },
    experience: {
      p: "What We have done so far",
      h2: "Our Services.",
      content: `Kalpavriksha Advance Ventures offers a variety of services tailored to meet the needs of our clients. From trading and investment to real estate and government tenders, we provide solutions that drive growth and success.`,
    },
    feedbacks: {
      p: "Why work with Us?",
      h2: "Key Benefits.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Ready to grow your business or invest securely? Partner with Kalpavriksha Advance Ventures today and let us take your vision to the next level.`,
    },
  },
};
