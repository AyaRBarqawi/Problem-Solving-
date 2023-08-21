function isPalindrome(Sentence){
    Sentence=Sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
/*First : Reversing the sentece */
    Reverse_Sentance = '';

    for(let i =(Sentence.length)-1 ; i>=0 ; i--){
        Reverse_Sentance +=Sentence[i];

    }
/*Second : Check if they are the same ! */    
    for (let j=0 ; j<Sentence.length ; j++){
        if (Sentence[j] !== Reverse_Sentance [j]){
            return false;
        }
    }

    return true ;
}



console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
console.log(isPalindrome('Race car')); // Output: true
console.log(isPalindrome('Hello, world!')); // Output: false