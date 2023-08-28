const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {

  const new_arr=[];
  let index=0;  
  for (let i =0 ; i<arrOfNum.length ; i++){

    let flag=false;
    
    for(let j=0; j<arrOfNum.length ;j++){
      if(arrOfNum[i]== new_arr[j]){
       flag=true;//
      }
    }

    if(!flag){
        new_arr[index]=arrOfNum[i];
        index++;
      }
  }
  return new_arr;
};
console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
