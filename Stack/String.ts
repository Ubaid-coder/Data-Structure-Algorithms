/* Reversing String with stack */
function reverseString(string: any) {
    string = string.split('');
    let start = 0;
    let end = string.length-1 ;
    while(start<end){
        let temp = string[start];
        string[start] = string[end];
        string[end] = temp;
        start +=1;
        end -=1;
    }
   console.log(string.join(''))

}

reverseString("ubaid");