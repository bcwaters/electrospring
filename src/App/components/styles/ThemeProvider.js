import config from '../../config.js'

class ThemeProviderClass {
    AppColors = {
        MainTheme: config.ColorTheme,
        TestTheme: config.TestTheme,
        SpaceTheme: config.SpaceTheme
    }

    currentColorTheme = "MainTheme"

    constructor() {
        this.defaultTheme = this.AppColors.MainTheme;
        this.styles = this.getCss("MainTheme");
    }

    getThemeColor = (choice) => {
        !!this.AppColors[choice] ? this.currentColorTheme = choice : this.currentColorTheme = this.currentColorTheme;
        return this.AppColors[this.currentColorTheme]
    }

    addColorTheme = (colorJson, themeName) => {
        this.AppColors[themeName] = colorJson;
    }

    getDefaultColor = () => {
        return this.defaultTheme;
    }

    getCss = (themeName) => {
        console.log("called for theme: " + themeName)
        var buttonCss = {
            backgroundColor: this.AppColors[themeName].primaryLight,
            top: ".3em"
        }

        var linearGradientString = 'linear-gradient(to right bottom,'
            + this.AppColors[themeName].secondaryDark +
            ', ' + this.AppColors[themeName].secondary + ')';

        var _PageHeader =
            {
                background: linearGradientString,
                minHeight: 50,
                padding: '0em 0em'
            }

        var linearGradientStringDivider = 'linear-gradient(5deg,'
            + this.AppColors[themeName].secondaryDark + ', '
            + this.AppColors[themeName].secondaryDark +
            ' 35%, ' + this.AppColors[themeName].primary + ' 36%,' + this.AppColors[themeName].primary + ')';
        var _AngleDivider = {
            background: linearGradientStringDivider,
            minHeight: '200px',
            width: '100%'
        }

        return {
            PageHeader: _PageHeader,
            AngleDivider: _AngleDivider,
            Button: buttonCss
        }

    }

    static setDefaultTheme(choice) {

        this.defaultTheme = !!this.AppColors[choice] ? this.AppColors[choice] : this.AppColors.MainTheme;
    }
}

export let ThemeProvider = new ThemeProviderClass()