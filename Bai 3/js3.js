function Check(arr){
    let cnt=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="a" ||
            arr[i]=="i" ||
            arr[i]=="o" ||
            arr[i]=="u" ||
            arr[i]=="e"
    ){
            cnt++;
        }
        }
    if(cnt==0){
        cnt="false";
    }
    return cnt;
}
let newArr = ["a","b","c","d","e","f","g"];
let result = Check(newArr);
alert(result);

