import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

type Language = "tr" | "en" | "ar" | "ru" | "fr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
});

const initLang =
  (new URLSearchParams(window.location.search).get("lang") as Language) || "en";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(initLang);
  const navigator = useNavigate();

  useEffect(() => {
    const href = window.location.href;
    const currURL = new URL(href);
    const selectedLang = currURL.searchParams.get("lang") as Language;

    if (selectedLang && ["tr", "en", "ar", "ru", "fr"].includes(selectedLang)) {
      return;
    }
    setLanguage("en");
  }, []);

  useEffect(() => {
    const href = window.location.href;
    const currURL = new URL(href);

    navigator(`${currURL.pathname}?lang=${language}`);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
