export type Language = "tr" | "en" | "ar" | "ru" | "fr";

export type ContentType = {
  [key in Language]: {
    title?: string;
    subtitle?: string;
    description?: string;
    text?: string;
    [key: string]: any;
  };
};
