function beer(n){
    while( n > 1 ){
        console.log(n+" bottles of beer on the wall, "+n +" bottles of beer.")
        n = n-1;
        console.log("Take one down and pass it around, "+n+" bottles of beer on the wall.")
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer.")
    console.log("Take one down and pass it around, no more bottles of beer on the wall.")
    console.log("No more bottles of beer on the wall, no more bottles of beer.")
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.")
}
beer(99);