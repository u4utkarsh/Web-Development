function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var prev1= 0;
        var prev2= 1;
        var output=[];
        //Write your code here:
        for ( var i=1; i<=n; i++){
            if(i===1){
                output.push(prev1);
            }
            else if (i===2){
                output.push(prev2);
            }
            else{
                var curr=prev1+prev2;
                prev1= prev2;
                prev2= curr;
                output.push(curr);
            }
        }
        //Return an array of fibonacci numbers starting from 0.
        return output;
        
    //Do NOT change any of the code below 👇
    }
    
console.log(fibonacciGenerator(7));


