module.exports = function toReadable (number) {

    let vocabulary ={
        0 : 'zero',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }

    // number converted to string
    let str=number.toString();
    // output string
    let out='';
    // how many zeroes need to multiply (rank of number)
    let rank=str.length-1;

    for(let i=0;i<str.length;i++){

        // for every next digit i check does the next number (from this digit to the end of the stringstr.slice(i)) exists
        for(key in vocabulary){

            if(key===str.slice(i)){

                //condition for first space elimination
                if(out===''){
                    return vocabulary[key]
                }
                else{
                    return out+' '+vocabulary[key]
                }

            }
        }

        // multiply found number to corresponding rank
        for(key in vocabulary){

            if(key===str[i]){

                //condition for first space elimination
                if(out===''){
                    out=vocabulary[key*(10**rank)]
                }
                else{
                    out=out+' '+ vocabulary[key*(10**rank)]
                }

                // for 401 case and so on
                if(str[i+1]==='0'){
                    i++
                    rank--
                }

                rank--
                break

            }
        }

    }

    return out
}
