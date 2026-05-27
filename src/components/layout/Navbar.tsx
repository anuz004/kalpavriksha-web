import { useEffect, useState } from "react";
import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { config } from "../../constants/config";
    <nav
      className={`$ {
        scrolled
          ? "fixed top-0 left-0 w-full z-50 shadow-lg"
          : "absolute w-full z-10"
      } flex items-center py-5 px-6 transition-all duration-500 ease-in-out backdrop-blur-md bg-opacity-80 bg-[#1a1832]`}
    >
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-colors duration-500 ${
        scrolled ? "bg-[#7b3f00]/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
      style={{
        transition:
          "background-color 0.5s cubic-bezier(0.4,0,0.2,1), backdrop-filter 0.5s cubic-bezier(0.4,0,0.2,1)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : undefined,
        backdropFilter: scrolled ? "blur(16px)" : undefined,
        backgroundColor: scrolled ? "rgba(123,63,0,0.9)" : "transparent",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo and title removed as requested */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a
                href={
                  nav.id === "home"
                    ? "#"
                    : nav.id === "services"
                    ? "#work"
                    : nav.id === "whyus"
                    ? "#feedbacks"
                    : nav.id === "about"
                    ? "#about"
                    : nav.id === "contact"
                    ? "#contact"
                    : `#${nav.id}`
                }
                onClick={
                  nav.id === "home"
                    ? (e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    : nav.id === "whyus"
                    ? (e) => {
                        e.preventDefault();
                        const el = document.getElementById("feedbacks");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    : nav.id === "services"
                    ? (e) => {
                        e.preventDefault();
                        const el = document.getElementById("work");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    : nav.id === "about"
                    ? (e) => {
                        e.preventDefault();
                        const el = document.getElementById("about");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    : nav.id === "contact"
                    ? (e) => {
                        e.preventDefault();
                        const el = document.getElementById("contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a
                    href={
                      nav.id === "home"
                        ? "#"
                        : nav.id === "services"
                        ? "#work"
                        : nav.id === "whyus"
                        ? "#feedbacks"
                        : nav.id === "about"
                        ? "#about"
                        : nav.id === "contact"
                        ? "#contact"
                        : `#${nav.id}`
                    }
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
