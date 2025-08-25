import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")  //verifica se ja tem o tema no local storage, se nn, vazio

    useEffect(() => {
        localStorage.setItem("theme", theme)        //acessa o localstorage e seta a var theme, com o theme que tiver la
        const tagHtml = document.documentElement    //a var "tagHtml" se torna realmente a tag html do index.html
        tagHtml.classList.remove("dark")            //remove caso tenha a classe dark, tem outra forma mas foi essa que ele quis

        if (theme === "dark") {                     //se o tema for dark
            tagHtml.classList.add(theme)            // ele adiciona a tag html a classe dark
        }
    }, [theme])                                     //agora ele so executa quando a tag theme mudar


    const themeProps = {                            // o que sera compartilhado
        theme,                                      //a tag theme
        toggle: () => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")            //um toogle, troca o tema, inverte o tema.
    }

    return (
        <ThemeContext.Provider value={themeProps} >
            {children}
        </ThemeContext.Provider>
    )
}