
const bubbleSort = (array) => {

    //the outer loop is for the passes 
    for (let i=0 ; i<array.length ; i++){
        let flag=true;
        //the inner loop is for swapping 
        for(let j=0 ; j<(array.length)-i-1 ;j++){ 
            //the number of iterations is:((array.length)-i-1) --> so we don't go through the elements arranged at the end of the array again

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
    
};


const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
const b =[2, 1, 3];
bubbleSort(a);
bubbleSort(b); 

console.log("The array after sorting : ",a);
console.log("The array after sorting : ",b);

/*
-Best case--> when the array is sorted in an ascending order , and the complixity = Big O(n) .
-Worst case --> when the array is sorted in a descending order , and the complixity = Big O(n^2) .

**Note ->
  when I add the (flag) , it has been optimized the Algorithm by breaking out of the loop early if no swaps were made during the pass ,
  so this addition improve the code and save the time of sorting !

*/