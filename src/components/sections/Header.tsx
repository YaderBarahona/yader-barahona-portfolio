import { useContext } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="h-[650px] w-[100%] bg-yellow dark:bg-[#494949]">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-gray-dark"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-dark dark:text-white">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark dark:text-white"
            repeat={Infinity}
          />

          <Switch
            checked={darkTheme}
            onChange={toggleTheme}
            offColor="#baaa80"
            onColor="#353535"
            className="react-switch mx-auto"
            width={90}
            height={40}
            uncheckedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="twemoji:owl"
              />
            }
            checkedIcon={
              <Icon
                className="ml-5 h-full text-end text-[25px] text-gray-dark"
                icon="noto-v1:sun-with-face"
              />
            }
          />
        </div>
      </header>

      <div className="flex justify-center bg-yellow dark:bg-[#494949]">
        <button
          className="hover:bg-gray-700 dark:bg-gray-300 dark:hover:bg-gray-400 flex items-center gap-2 rounded-lg bg-gray-dark px-6 py-3 text-white transition-transform duration-300 hover:scale-105 dark:text-gray-dark"
          onClick={() =>
            window.open(
              `${
                import.meta.env.MODE === "dev"
                  ? ""
                  : "/yader-barahona-portfolio"
              }/resume/Yader_Barahona_CV.pdf`,
              "_blank",
            )
          }
        >
          <Icon
            icon="mdi:file-pdf-box"
            className="text-xl text-white dark:text-white"
          />
          <span className="text-white dark:text-white">Resume</span>
        </button>
      </div>

      <div className="flex justify-center gap-5 bg-yellow pb-2.5 pt-20 dark:bg-[#494949]">
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px] text-gray-dark ",
            i18n.language === "en" && "brightness-50",
          )}
          icon="twemoji-flag-for-flag-united-kingdom"
          onClick={() => i18n.changeLanguage("en")}
        />
        <Icon
          className={clsx(
            "h-full cursor-pointer text-[50px] text-gray-dark ",
            i18n.language === "es" && "brightness-50",
          )}
          icon="twemoji:flag-costa-rica"
          onClick={() => i18n.changeLanguage("es")}
        />
      </div>
    </>
  );
};

export default Header;
