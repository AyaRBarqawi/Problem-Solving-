const secondMax = function(array) {
    /*
    ***********First solution --->>> the complixity is : Big O(n^2)
    // using Bubble sort to arrange the array ...
    for (let i=0 ; i<array.length ; i++){
        let flag=true;
        for(let j=0 ; j<(array.length)-i-1 ;j++){ 
            if(array[j] > array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                flag=false;
            }
        }
        if(flag){
            break;
        }
    }
     return array[array.length -2]; // take the second max
    */
    
 // *************Second solution [Optimized] --->>> the complixity : Big O(n)
     let max=-1000000;
     let SecondMax=-1000000;
    for (let i =0 ; i<array.length ; i++){
        if (array[i]>max){
            SecondMax=max;
            max= array[i];
        }
        else if (array[i] > SecondMax && array[i] < max) {
            SecondMax = array[i];
        }

    }
    return SecondMax;

  }; 
  
//Exanmples:
console.log(secondMax([1,5, 2]) );//== 2
console.log(secondMax([-1, -5, 2])) ;//== -1
console.log(secondMax([-3, -2, -7])) ;// == -3
console.log(secondMax([99 , 7 , 6, -33 , 114])) ; // ==99