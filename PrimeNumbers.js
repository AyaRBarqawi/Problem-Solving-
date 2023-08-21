function IsPrimeNum(num){
    let check_flag = 0;
    if (num<= 0){
        check_flag=1;
    }

    for(let i=2 ; i<(num/2) ; i++){
        if(num % i == 0){
            check_flag =0;
            break;

        }

    }

    if (check_flag == 0){
        return false;
    }
    else{
        return true ;
    }

    
}


let numbers = [-2 , 89 , 999 , 7 , 217 , 7000]

for(let j =0 ; j<(numbers.length) ; j++){

    if(IsPrimeNum(numbers[j])){
        console.log("It is a Prime number! ")
    }
    else{
        console.log("It is not a Prime number! ")
    }
    

}
