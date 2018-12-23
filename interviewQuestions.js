//Diagonal difference

/*
 1 2 3
 4 5 6
 9 8 9
 The left-to-right diagonal = 1+5+9=15. The right to left diagonal =9+5+3=17 . Their absolute difference is |15-17|=2.
 */

diag=(a)=>{
    let len=a.length;
    let diag1=0,diag2=0;
    for(let i=0;i<len;i++){
        diag1+=a[i][i];
        diag2+=a[len-1-i][i];
    }
    return Math.abs(diag1-diag2);
}

console.log(diag([[1,2,3],[4,5,6],[7,8,9]]))


//sum of elements in array
sumArr=(a)=>{
    return a.reduce((sum,i)=>sum+i,0);
}

console.log(sumArr([10,20,30,4,5,6]));


//print fractionals

fraction=(a)=>{
    let len=a.length;
    let pos=0,neg=0,zero=0;
    for(let i=0;i<len;i++){
        if(a[i]>0)
            pos++;
        else if(a[i]<0)
            neg++;
        else
            zero++
    }
    console.log(pos/len);
    console.log(neg/len);
    console.log(zero/len);
}

fraction([1,1,0,0,-1,-1,-1]);

//staircase problem Consider a staircase of size=4('#' to be right aligned right aligned
//     #
//    ##
//   ###
//  ####

stairCase=(n)=>{
    let s='';
    for(let i=0;i<n;i++){
        s+=' '.repeat(n-i)+'#'.repeat(i)+'\n';
    }

    console.log(s);
}

stairCase(4);