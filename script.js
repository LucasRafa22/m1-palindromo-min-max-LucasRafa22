function isPalindrome(str){
    let frase = ""
    const strLimpo = str.replace(/\s+/g, '').toLowerCase()
    for (i = strLimpo.length - 1; i >= 0; i--){
        frase += strLimpo[i]
    }
    if(frase === strLimpo){
        return true
    }
    return false
}



function arrayMaxMin(arr){
    /* Seu código aqui */
}
