import en from "locales/English";
import ja from "locales/Japanese";
import zh from "locales/SChinese";

export default defineI18nConfig(() => ({
	legacy: false,
	locale: "en",
	messages: {
		zh,
		en,
		ja,
	},
}));
