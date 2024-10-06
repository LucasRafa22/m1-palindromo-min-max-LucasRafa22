function isPalindrome(str){
    let frase = "";
    const strLimpo = str.replace(/\s+/g, '').toLowerCase()
    for (i = strLimpo.length - 1; i >= 0; i--){
        frase += strLimpo[i];
    }
    if(frase === strLimpo){
        return true;
    }
    return false;
}



function arrayMaxMin(arr){
    let minumo = 0;
    let maximo = 0;

    for (i = 0; i < arr.length; i++){
        if(i === 0 || arr[i] < minumo){
            minumo = arr[i];
        }
        if(arr[i] > maximo){
            maximo = arr[i];
        }
    }
    return [minumo, maximo];

}
