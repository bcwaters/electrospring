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
            ' 35%, ' + this.AppColors[themeName].backgroundColor + ' 36%,' + this.AppColors[themeName].backgroundColor + ')';
        var _AngleDivider = {
            background: linearGradientStringDivider,
            minHeight: '200px',
            width: '100%'
        }

        var itemOverlay = {
            borderRadius: "5px",
            backgroundColor: this.AppColors[themeName].primaryLight,
            opacity: '.2',
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            position: "absolute",
            zIndex: '-100',

        }

        var productContainer = {
            borderRadius: "5px",
            cursor: "pointer"

        }

        var itemOverlayHovered = {

                    borderRadius: "5px",
                    backgroundColor: this.AppColors[themeName].primaryDark,
                    opacity: '.4',
                    width: "100%",
                    height: "100%",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    position: "absolute",
                    border: "2px solid " + this.AppColors[themeName].secondaryDark,
                    zIndex: '-100',


        }
        var thumbnailImage = {
            margin: "1%",
            marginTop: "5%",
            width: "98%",
            maxHeight: "200px"
        }

        return {
            PageHeader: _PageHeader,
            AngleDivider: _AngleDivider,
            Button: buttonCss,
            ItemOverlay: itemOverlay,
            ThumbnailImage: thumbnailImage,
            ProductContainer : productContainer,
            ItemOverlayHovered: itemOverlayHovered
        }

    }

    static setDefaultTheme(choice) {

        this.defaultTheme = !!this.AppColors[choice] ? this.AppColors[choice] : this.AppColors.MainTheme;
    }
}

export let ThemeProvider = new ThemeProviderClass()