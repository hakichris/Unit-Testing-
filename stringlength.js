const stringLength = (string) => {
   let count = 0;
   for(let i = 0; i<string.length; i++){
     count +=1;
   };
   return count;
}

module.exports = stringLength;