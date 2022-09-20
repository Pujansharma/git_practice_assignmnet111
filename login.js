

function checkPrime(num){
    let count=0;
        for(let i=1;i<=num;i++){
            if(num%i==0){
                count++;
            }
        }
    if(count==2){
        return true;
    }else{
        return false;
    }
}

if(checkPrime(13)){
    console.log("number is prime");
}else{
    console.log("num is not prime");
}
