import AppColors from  './AppColors.js'


var linearGradientString = 'linear-gradient(to right bottom,'
    +AppColors.secondaryDark+
    ', '+AppColors.secondary+')';


var _PageHeader =  
    {
        background: linearGradientString,
        minHeight: 50,
        padding: '0em 0em' 
    }

var linearGradientStringDivider = 'linear-gradient(5deg,'
    +AppColors.secondaryDark+ ', '
    +AppColors.secondaryDark+ 
    ' 35%, '+AppColors.primary+' 36%,'+AppColors.primary+')';
console.log(linearGradientStringDivider)
var _AngleDivider = {
    background: linearGradientStringDivider,
    minHeight: '200px',
    width:'100%'
}




var styles={
    PageHeader:_PageHeader,
    AngleDivider:_AngleDivider
}


export {styles}