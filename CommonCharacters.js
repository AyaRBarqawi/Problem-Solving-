
const commonCharacters = (str1, str2) => {

    //First: remove the spaces and convert the letters into lower case .
    newStr1=str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    newStr2=str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    let newAnswer="";

    for(let i=0 ;i<newStr1.length; i++){
        let flag=false;

        for(let j=0 ;j<newStr2.length ;j++){
          if(newStr1[i] == newStr2 [j]){
            flag=true;
            break;
          }
       }

      if(flag){
        newAnswer+=newStr1[i];
      }
    }
    return newAnswer;
  };

console.log("'"+commonCharacters('acexivou', 'aegihobu') +"'");