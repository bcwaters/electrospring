import config from '../../config.js'

const AppColors = {
    MainTheme: config.ColorTheme,
    TestTheme: config.TestTheme
}

var linearGradientString = 'linear-gradient(to right bottom,'
    + AppColors.MainTheme.secondaryDark +
    ', ' + AppColors.MainTheme.secondary + ')';

var _PageHeader =
    {
        background: linearGradientString,
        minHeight: 50,
        padding: '0em 0em'
    }

var linearGradientStringDivider = 'linear-gradient(5deg,'
    + AppColors.MainTheme.secondaryDark + ', '
    + AppColors.MainTheme.secondaryDark +
    ' 35%, ' + AppColors.MainTheme.primary + ' 36%,' + AppColors.MainTheme.primary + ')';
var _AngleDivider = {
    background: linearGradientStringDivider,
    minHeight: '200px',
    width: '100%'
}


const styles = {
    PageHeader: _PageHeader,
    AngleDivider: _AngleDivider
}

class ThemeProviderClass {

    constructor() {
        this.defaultTheme = AppColors.MainTheme;
        this.styles = styles;
    }

    getThemeColor = (choice) => {
        return !!AppColors[choice] ? AppColors[choice] : AppColors.MainTheme;
    }

    getDefaultColor = () => {
        return this.defaultTheme;
    }

    getCss = (themeName) => {

        var linearGradientString = 'linear-gradient(to right bottom,'
            + AppColors[themeName].secondaryDark +
            ', ' + AppColors[themeName].secondary + ')';

        var _PageHeader =
            {
                background: linearGradientString,
                minHeight: 50,
                padding: '0em 0em'
            }

        var linearGradientStringDivider = 'linear-gradient(5deg,'
            + AppColors[themeName].secondaryDark + ', '
            + AppColors[themeName].secondaryDark +
            ' 35%, ' + AppColors[themeName].primary + ' 36%,' + AppColors[themeName].primary + ')';
        var _AngleDivider = {
            background: linearGradientStringDivider,
            minHeight: '200px',
            width: '100%'
        }

        return {
            PageHeader: _PageHeader,
            AngleDivider: _AngleDivider
        }

    }

    static setDefaultTheme(choice) {

        this.defaultTheme = !!AppColors[choice] ? AppColors[choice] : AppColors.MainTheme;
    }
}

export {styles}
export {AppColors}
export let ThemeProvider = new ThemeProviderClass()