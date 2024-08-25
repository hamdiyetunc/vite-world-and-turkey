import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

type Language = "tr" | "en" | "ar" | "ru" | "fr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const navigator = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const initialLanguage = (pathSegments[0] as Language) || "en";

  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(tr|en|ar|ru|fr)/, "");

    if (!["tr", "en", "ar", "ru", "fr"].includes(language)) {
      setLanguage("en");
      navigator(`/en${pathWithoutLang}`, { replace: true });
    } else {
      navigator(`/${language}${pathWithoutLang}`, { replace: true });
    }
  }, [language, location.pathname]);

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
