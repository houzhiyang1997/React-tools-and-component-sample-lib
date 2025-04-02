import { createIntl, createIntlCache } from "react-intl";
import { useState, useEffect } from "react";
import zh from "./zh-CN";
import en from "./en-US";

const getLanguage = () => {
  const lang = localStorage.getItem("language");
  return lang || "zh-CN";
};

const createMyIntl = (lang: string) => {
  return createIntl(
    {
      locale: lang,
      messages: lang === "zh-CN" ? zh : en,
    },
    createIntlCache(),
  );
};

export const useIntl = () => {
  const lang = getLanguage();
  const [currentIntl, setCurrentIntl] = useState(createMyIntl(lang));

  useEffect(() => {
    setCurrentIntl(createMyIntl(lang));
  }, [lang]);

  const t =
    (prefix: string) =>
    (messageDescriptor: any, options = {}) => {
      if (typeof messageDescriptor === "string") {
        return currentIntl.formatMessage(
          {
            id: `${prefix}.${messageDescriptor}`,
            defaultMessage: messageDescriptor,
          },
          options,
        );
      } else {
        return currentIntl.formatMessage(
          { ...messageDescriptor, id: `${prefix}.${messageDescriptor.id}` },
          options,
        );
      }
    };

  const tt = (messageDescriptor: any, options = {}) => {
    if (typeof messageDescriptor === "string") {
      return currentIntl.formatMessage({ id: messageDescriptor }, options);
    } else {
      return currentIntl.formatMessage({ ...messageDescriptor }, options);
    }
  };

  return { t, tt, currentIntl };
};

export default useIntl;
