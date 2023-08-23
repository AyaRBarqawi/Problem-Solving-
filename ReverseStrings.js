function reverse(Sentence){

    Reverse_Sentance = '';

    for(let i =(Sentence.length)-1 ; i>=0 ; i--){
        Reverse_Sentance +=Sentence[i];
    }
    return Reverse_Sentence;
}

const str_1="Hello, World!";
config.log(reverse(str_1));