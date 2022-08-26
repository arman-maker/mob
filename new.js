


// // // Brief Introduction(including projects)
// // // Diff between library and framework
// // // did you used redux with other library
// // // what is redux , redux thunk and saga
// // // what is useeffect()
// // // Diff types of reacthook explain usememo()
// // // what is spread operator
// // // diff between em and rem
// // // Manisha Chaudhary11:47 AM
// // // what is area hidden attribute in html
// // // 7. What is the real dom and virtual dom?
// // // Manisha Chaudhary11:50 AM
// // // Fetch Max and min from an dummy array 1,2,3,4,5

// // // let arr=[1,2,3,4,5]

// // // function maxmin(arr){
// // //     for (let i = 0; i < arr.length; ++i) {
        
       
// // //         console.log(arr[i])
// // //     }


// // // }
// // // maxmin(arr)



// // // // let arrayList = [1, 2, 3, 4, 3, 21, 0];
// // // let max = arrayList[0];
// // // // console.log(max)
// // // for (let i = 1; i < arrayList.length; i++) {
// // //   if (arrayList[i] > max) {
// // //     max = arrayList[i];
// // //   }
// // // }

// // // console.log(max);

// // // let arrayList = [1, 2, 3, 4, 3, 20, 0];
// // // let maxNum = arrayList.reduce((prev, current) => {
// // //    return Math.min(prev, current)
// // // });
// // // console.log(maxNum)


// // // let array1=[1,2,3,4,5]
// // // function maxmin(arr){
// // //     let max=arr[0]
// // //     let min=arr[0]
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i]>max){
// // //             max=arr[i]
// // //         } 
// // //     }
    
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i]<min){
// // //             min=arr[i]
// // //         } 
// // //     }
// // //     console.log(`max = ${max}`)
// // //     console.log(`min = ${min}`)

// // // }

// // // maxmin(array1)



// // // //bubbleSort
// // // function bubbleSort(arr){
// // //     for(let i = 0; i < arr.length; i++){
// // //     for(let j = 0; j < arr.length ; j++){
// // //     if(arr[j + 1] < arr[j]){
// // //     [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
// // //     }
// // //     }
// // //     };
// // //     return arr;
// // //     };
// // //     console.log(bubbleSort([5,3,8,4,6]));


// // // function bubblesort(arr){
// // //     for (let i = 0; i < arr.length; i++) {
// // //         for (let j = 0; j < arr.length; j++) {
// // //             if(arr[j+1]<arr[j]){
// // //                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
// // //             }
            
            
// // //         }
        
// // //     }
// // //     return arr

// // // }
// // // console.log(bubblesort([5,3,8,4,6]))


// // // let array1=[1,2,3,4,5]
// // // let array2=[11,2,13,4,15]
// // // let array3=[5,8,4,9]
// // // let commonArr=array1.filter((item)=>array2.includes(item))
// // // let commonArr2=commonArr.filter((item)=>array3.includes(item))
// // // console.log(commonArr); // [ 2, 4 ]
// // // console.log(commonArr2); //[ 4 ]




// // // let cmnarr1=array1.filter((elem)=>array2.includes(elem));
// // // console.log(cmnarr1)
// // // let final=cmnarr1.filter((elem)=>array3.includes(elem));
// // // console.log(final)


// // // Q ] 2. from a given array, make n elements rotate.
// // // eg. given Array:[21,54,11,35,4,18],
// // // index:3;
// // // output Array: [4,18,21,54,11,35]
// // // let arr=[21,54,11,35,4,18]
// // // function rotateElements(array , n) {
// // // let arr1=arr.filter((item,index)=>index<=n)
// // // let arr2=arr.filter((item,index)=>index>n)
// // // let arr3=[...arr2,...arr1]
// // // return arr3 
// // // }
// // // console.log(rotateElements(arr,4)); // [ 35, 4, 18, 21, 54, 11 ]

// // // function rotateelement(arr,n) {
// // //     let arr1=arr.filter((elem,ind)=>ind<=n)
// // //     // console.log(arr1)

// // //     let arr2=arr.filter((elem,ind)=>ind>n)
// // //     let arr3=[...arr2,...arr1]
// // //     console.log(arr3)
// // // }
// // // rotateelement(arr,3)


// // // const array=[2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]
// // // // const res = array.reduce(function (acc, curr) {
// // // // return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
// // // // }, {});
// // // // console.log(res)

// // // function check(arr){
// // //     let res=arr.reduce((acc,curr)=>{
// // //         return acc[curr] ? ++acc[curr] :acc[curr]=1,acc
// // //     },{})
// // //     console.log(res)

// // // }
// // // check(array);


// // // Q5. Given a sorted array and a key, find the two numbers which sum 
// // // to the given key.
// // // arr = [1, 3, 4, 5, 7, 8]
// // // key = 10
// // // output: 3 7
// // // function findSum(arr,key) {
// // // for (let i = 0; i < arr.length; i++) {
// // // for (let j = 1; j < arr.length; j++) {
// // // if(arr[j] + arr[i] === key){
// // // return console.log(`${arr[i]} , ${arr[j]} `);
// // // }
// // // }
// // // } 
// // // }
// // // findSum(arr,10)  


// // // function findsum(arr,n){
// // //     for (let i = 0; i < arr.length; i++) {
// // //         for (let j = 0; j < arr.length; j++) {
// // //             if(arr[i]+arr[j]){
// // //                 return console.log(`${arr[i]},${arr[j]} =${n} `)
// // //             }
            
// // //         }
        
// // //     }

    

// // // }

// // // findsum(arr,10)




// // // // //Q] Given an array of integers, return a new array such that each 
// // // element at index i of the new array is the product of all the numbers 
// // // in the original array except the one at i.
// // // // // For example, if our input was [7,5,6,2,4], the expected output 
// // // would be [240,336,280,840,420].
// // // function some(arr) {
// // // let tepmArr =[];
// // // for (let i = 0; i < arr.length; i++) {
// // // let arr1 = arr.filter((item) => item !== arr[i]);
// // // var sum=1
// // // for(let i=0 ;i<arr1.length;i++){
// // // sum = sum * arr1[i]
// // // }
// // // tepmArr.push(sum)
// // // }
// // // return tepmArr
// // // }
// // // let res=some([7, 5, 6, 2, 4]);
// // // console.log(res);

// // // function awsm(arr) {
// // //     let temarr=[]
// // //     for (let i = 0; i < arr.length; i++) {
// // //         let arr1=arr.filter((elem,ind)=>elem !==arr[i]);
// // //         var sum=1;
// // //             for (let i = 0; i < arr1.length; i++) {
// // //                 sum=sum *arr1[i];

                
                
// // //             }
// // //             temarr.push(sum)
        
// // //     }
// // //     console.log(temarr)
    
// // // }
// // // awsm([7, 5, 6, 2, 4])




// // // function awsm(arr){
// // //     let temparr=[]
// // //     for (let i = 0; i < arr.length; i++) {
// // //         let arr1=arr.filter((elem)=>elem !==arr[i]);
// // //         var sum=1;
// // //         for (let i = 0; i < arr1.length; i++) {
// // //             sum=sum*arr1[i]
            
// // //         }
// // //         temparr.push(sum)
        
// // //     }
// // //     console.log(temparr)

// // // }
// // // awsm([7, 5, 6, 2, 4])


// // //good afternoon  i am abdul rahman i am having 2.3 years of experiance as a react js developer 
// // //i have good hands on html css javascript react and react-redux currently i am working with mobile programming tlking about my projects i have done 2 projects first one is medisure 
// // //this project  helps people to make healthier life and to make the helth system better.this application help the user to searching updating and adding the member insurences.
// // //where my woring dependecies mostly involve in making dynamic ui components making the application responsive with use of material ui and react bootstrap 
// // //along with i have also done api intigration as well.  taling about my other project it is also health care service based projet where the  user can find out basic 
// // //as well as comprehensive plan to meet their specific need. here i have desing and develop dynamic and static component based on the requrement 
// // //and i have managed application level state by using redux. thats all about me.














// // // //Q] Find the missing number in a given integer array of 1 to 10
// // // let arr = [1,2,3,5,6,7,8,10];
// // // const findMissingNum = (arr) => {
// // // for(var i = 0; i < arr.length - 1; i++) {
// // // if(arr[i] + 1 != arr[i+1] ) {
// // // console.log( arr[i] + 1);
// // // }
// // // }
// // // return false;
// // // }
// // // console.log(findMissingNum(arr)); // Returns 4 ,9 the missing number

// // // function check(arr){
// // //     for (let i = 0; i < arr.length-1; i++) {
// // //         if(arr[i]+1 !=arr[i+1]){
// // //             console.log(arr[i]+1)
// // //         }
        
        
// // //     }
    

// // // }

// // // let arr1 = [1,2,3,5,6,7,8,10];
// // // check(arr1)



// // //good morning  i am abdul rahman bascially i belong to nanded maharashtra i am having 2.3 years of experiance as a react js developer 
// // //i have good hands on html css javascript react and react-redux currently i am working with mobile programming tlking about my projects i have done 2 projects first one is medisure 
// // //this project  helps people to make healthier life and to make the helth system better.this application help the user to searching updating and adding the member insurences.
// // //where my woring dependecies mostly involve in making dynamic ui components making the application responsive with use of material ui and react bootstrap 
// // //along with i have also done api intigration as well.  taling about my other project it is also health care service based projet where the  user can find out basic 
// // //as well as comprehensive plan to meet their specific need. here i have desing and develop dynamic and static component based on the requrement 
// // //and i have managed application level state by using redux. thats all about me.



// // // function init() {
// // //     var name = 'arman'; 
// // //     function displayName() {
      
// // //       console.log(name); 
// // //     }
// // //     displayName();
// // //   }
// // //   init();


// // //   <any component ={<child>}>






































// // // function check(arr){
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i]+1  != arr[i+1]){
            
// // //             console.log(arr[i]+1)
// // //         }
        
// // //     }
// // //     return false

// // // }
// // // let arr22=[1,3,4,6,8,9]
// // // check(arr22)


// // // // Q] Find a duplicate number in an array of integers
// // // const arr4 = [1,2,3,4,5,6,7,7,8,6,10,10];
// // // const findDupes = (arr) => {
// // // const observed = {};
// // // for(let i = 0; i < arr.length; i++) {
// // // if(!observed[arr[i]]) {
// // // observed[arr[i]] = 1;
// // // } else {
// // // console.log("this are dublicate numbers",arr[i])
// // // observed[arr[i]]++;
// // // }
// // // }
// // // // console.log(observed);
// // // return observed
// // // }
// // // console.log(findDupes(arr4)); // Returns 7 , 6



// // // let data=new Promise((res,rej)=>{
// // //     setTimeout(() => {
// // //     res("hi problem resovle")
// // //     rej()
// // //     }, 5000);
// // //     setTimeout(() => {
// // //     rej("you have some err")
// // //     }, 3000);
// // //     })
// // //     console.log(data); //Promise { <pending> }
// // //     data.then(res => console.log(res)) //hi problem resovle
// // //     data.catch(err => console.log(err)) //you have some err
// // //     // data.finally(() => console.log("finally your promise is run "))// 

    
















// // // let arr12= [3,1,5,2,7]
// // // function reverse(arr){
// // //     let qw=arr.filter((elem,ind)=>ind%2==0).reverse()
// // //     // console.log(qw)
// // //     let er=arr.filter((elem,ind)=>ind%2 !==0)
// // //     // console.log(er)
// // //     let a=qw.map((elem,ind)=>{
// // //         if(er[ind] !==undefined)
// // //         return [elem,er[ind]]
// // //     }).flat()
// // //     console.log(a)
// // [7,15,2,3]

// // // }
// // // reverse(arr12)


// // // function check(arr){
// // //     let a=arr.filter((elem,ind)=>ind%2!==0).reverse()
// // //     let b =arr.filter((elem,ind)=>ind%2==0)
// // //   var res=a.map((elem,ind)=>{
// // //     if(b[ind] !==undefined)
// // //     return [elem,b[ind]]
// // //     else return elem

    
    

// // //   }).flat()
// // //   console.log(res)

    
// // // }

// // //  let arr12= [3,1,5,2,7]
// // // check(arr12)






// // //Q] Find the largest and smallest number in an unsorted array of 
// // // integers
// // // const arr = [1, 2, 3, 4, 100];
// // // const findMaxMin = (arr) => {
// // // let max = arr[0];
// // // let min = arr[0];
// // // for(let i = 0; i < arr.length; i++) {
// // // if(arr[i] > max) {
// // // max = arr[i];
// // // } else if (arr[i] < min) {
// // // min = arr[i];
// // // }
// // // }
// // // return {
// // // "max": max,
// // // "min": min
// // // };
// // // }
// // // console.log(findMaxMin(arr)); // Returns object { "max": 100, "min": 1 



// // // const arr=[2,3,1,4,90,200]

// // // function maxmin(arr){
// // //     let max=arr[0]
// // //     let min=arr[0]
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i]>max){
// // //             max=arr[i]
            
// // //         }else if(arr[i]<min){
// // //             min=arr[i]
// // //         }
        
        
        
// // //     }
// // //     return{
// // //         "max":max,
// // //         "min":min
// // //     }

// // // }
// // // console.log(maxmin(arr))



// // // Input: [4, 1, 9, 10, 15, 22, 5, 14]
// // //Output: [4, 10, 22, 14]


// // // function remove(arr){
// // //     let result=[]
// // //     for (let i = 0; i < arr.length; i++) {
// // //         if(arr[i]%2==0){
// // //             result.push(arr[i])
// // //         }
        
    
        
// // //     }
// // //     return result

// // // }
// // // console.log(remove([4, 1, 9, 10, 15, 22, 5, 14]))

// // // Input: [1,2,4,5,6,1,3,7,9,10]

// // // Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]


// // // const arr = [1,2,3,4,5,6,7,7,8,6,10];
// // // const findDupes = (arr) => {
// // //   const observed = {};
// // //   for(let i = 0; i < arr.length; i++) {
// // //     if(observed[arr[i]]) {
// // //       return arr[i]
// // //     } else {
// // //       observed[arr[i]] = arr[i];
// // //     }
// // //   }
  
// // //   return false;
// // // }
// // // console.log(findDupes(arr)); 



// // //  let ar22r = [1,3,5,7];
// // // const cumulativeSum = list => {
// // //   let result = [list[0]];
  
// // //   for(let i = 1; i < list.length; i++) {
// // //     result.push(list[i] + result[i-1]);
// // //   } 
  
// // //   return result;
// // // }
// // // console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]


// // // function check(arr) {
// // //         let res=[arr[0]]
// // //         for (let i = 1; i < arr.length; i++) {
// // //             res.push(arr[i] +res[i-1])
            
            
// // //         }
// // //         return res
// // // }
// // // console.log(check(ar22r))

// // // const arr = [1,2,3,4,5,6,7,7,8,8,6,10];
// // // const findDupes = (arr) => {
// // //   const observed = {};
// // //   let p=[]
// // //   for(let i = 0; i < arr.length; i++) {
// // //     if(observed[arr[i]]) {
// // //       p.push( arr[i])
// // //       return p
// // //     } else {
// // //       observed[arr[i]] = arr[i];
// // //     }
// // //   }
  
// // //   return false;
// // // }
// // // console.log(findDupes(arr)); // Returns 7


// // // class hello{
// // //   find(a,b){
// // //     let c=a+b
// // //     // console.log(c)

// // //   }

// // // }
// // // let res= new hello()
// // // res.find(2,3)



// // // function fibonacci(n){
// // //   var fibo = [0, 1];
  
// // //   if (n <= 2) return 1;

// // //   for (var i = 2; i <=n; i++ ){
// // //    fibo[i] = fibo[i-1]+fibo[i-2];
// // //   }

// // //  return fibo[n];
// // // } 

// // // console.log( fibonacci(13))
  
// // ///               curvering //////////


// // // function Myfunction(a) {
// // //   return (b) => {
// // //      return (c) => {
// // //        return a * b * c
// // //        }
// // //       }
// // //    }
// // //    console.log(Myfunction(1)(2)(3))
   

// // ///// generator function ////
 
// // // function *generator(i){
// // //   yield i
// // //   yield i+1;
// // //   yield i+2

// // // }
// // // let gen=generator(1)
// // // // console.log(generator(2).next())
// // // console.log(gen.next())
// // // console.log(gen.next())
// // // console.log(gen.next())
// // // console.log(gen.next())


// // // function* genrator(i){
// // //   // console.log(i)
// // //   const j=5 * (yield(i*2))
// // //   console.log(j)
// // //   const k=yield(j*5)
// // //   // console.log(k)


// // // }
// // // var gen=genrator(2)
// // // console.log(gen.next(2))
// // // console.log(gen.next(1))



// // // program to generate fibonacci series up to n terms

// // // take input from the user
// // // for (let i = 1; i <= number; i++) {
// // //   console.log(n1);
// // //   nextTerm = n1 + n2;
// // //   n1 = n2;
// // //   n2 = nextTerm;
// // // }


// // // function reverseFibonacci(num) {
// // //   let array = [];


// // //   array[0] = 0;
// // //   array[1] = 1;

// // //   for (let i = 2; i < num; i++) {
  
// // //     array[i] = array[i - 2] + array[i - 1];
// // //   }


// // //   return array;
// // // }


// // // answer = reverseFibonacci(12);

// // // console.log("The Fibonacci series is till 5th term is: ", answer);
// // // function feb(num){
// // //   let array=[]
// // //   array[0]=0;
// // //   array[1]=1;
// // //   for (let i = 2; i < num; i++) {
// // //     array[i]=array[i-2]+array[i-1]
    
// // //   }
// // //   return array;


// // // }
// // // console.log(feb(5))


// // // function feb(num){
// // //   array=[]
// // //   array[0]=0;
// // //   array[1]=1;

// // //   for (let i = 2; i < num; i++) {
// // //     array[i]=array[i-2]+array[i-1]

    

     
// // //   }
// // //   return array;
// // // }
// // // console.log(feb(20));


// // // function fibonacci(num) {
 
// // //   var x = 0;
// // //   var y = 1;
// // //   var z;
// // //   var i = 0;
// // //   for (i = 2; i < num; i++) {
// // //     z = x + y;
// // //     x = y;
// // //     y = z;
// // //   }
// // //   return y;
// // // }

// // // var num = 7;
// // // answer = fibonacci(6);

// // // console.log("The 7th term of the Fibonacci series is: ", answer);


// // // function fab(num){
// // //   if(num==1) return 0;
// // //   if(num==2) return 1;
// // //   return fab(num-1) + fab(num-2)

// // // }
// // // console.log( fab(7))




// // ///////////  promise ///////////

// // // var ooromise = new Promise(function(resolve, reject) {
// // //   const x = "arman";
// // //   const y = "arman"
// // //   if(x === y) {
// // //     resolve();
// // //   } else {
// // //     reject();
// // //   }
// // // });
   
// // // ooromise.
// // //     then(function () {
// // //         console.log('Success');
// // //     }).
// // //     catch(function () {
// // //         console.log('Reject');
// // //     });






// // // 17 - reverse a string without inbuilt function																										
// // // input string = abcde																										
// // // output string = edcba																										


// // function reverse(str){
// //   var a=" ";
// //   // for (let i = 0; i <= str.length; i++) {
// //   //   a=str[i];
// //   //   str[i]=str[str.length-i-1];
// //   //   str[str.length-i-1]=a;

    

// //   // }
// //   // return str;

// // //   for (let i=str.length-1;i>=0;i--) {
// // //     a+=str[i]
  
    
// // //   }

// // // }
// // // var str="abcde"
// // // console.log(reverse(str))

// // // function reverse1(str){
// // //   var a = "";
// // //   for(var i = 0; i <= str.length/2; i++){
// // //     a = str[i];
// // //     str[i] = str[str.length-i-1];
// // //     str[str.length-i-1] = a;
// // //   }
// // //   return str;
// // // }
// // // var str = "abcdef";
// // // reverse1(str);


// // // function reverse1(str){
// // //   let r = "";
// // //   for(let i = str.length-1; i >= 0; i--){
// // //     r += str[i];
// // //   }
// // //   return r;
// // // }

// // // console.log(reverse1("javascript"))


// // // function reverse1(str){
// // //   var r = "";
// // //   for(var i = str.length - 1; i >= 0; i--){
// // //     r += str.charAt(i);
// // //   }
// // //   return r;
// // // }
// // // let str1="abcd"
// // // console.log(reverse1(str1))

// // // function reverse1(str){
// // //   var  len = str.length, result = "";
// // //   for(var i = 0; i <= len-1; i++){
// // //     result = result + str[len-i-1];
// // //   }
// // //   return result;
// // // }
// // // var str = "abcdef";
// // // str = reverse1(str);
// // // console.log(str);





// // function reverse1(str) {
// //   str = str.trim();
// //   var res ="";
// //      for(var i = str.length-1; i >= 0; i--){
// //         res +=str[i];
// //     }
// //     return res;
// //   }
// //   var str = "abcdef";
// //   console.log(reverse1(str))





// // let str='abcd'
// // let rev=" "
// // for (let a=str.length-1;a>=0;a--) {
// //   rev=rev+str[a]
  
  
// // }

// // console.log(rev)












// // function test2(input) {
// //   let strings = "";
// //   let numbers = "";
// //   for (let i = 0; i < input.length - 1; i++) {
// //     if (Number(input[i]) % 1 === 0) {
// //       numbers += input[i];
// //     } else {
// //       strings += input[i];
// //     }
// //   }

// //   console.log(numbers + strings);
// // }

// // test2("1b7gh6jk8");









// // function test2(input){
// //   let strings = "";
// //   let numbers = "";
// //   for(let i = 0; i < input.length - 1; i++){
// //    if(Number(input[i]) % 1 === 0) {
// //        numbers += input[i];
// //     }
// //     else{
// //       strings += input[i];
// //     }
// //   }
  
// // console.log(numbers + strings);
// // }

// // test2("1b7gh6jk8")
















// // function reverse(string){
// //   let r = "";
// //   for(let i = string.length-1; i >= 0; i--){
// //     r += string[i];
// //   }
// //   return r;
// // }

// // console.log(reverse("abcde"))

// // let newData = "1b7gh6jk8"

// // let newString = []
// // let newStingChar = []

// // for (let i = 0; i < newData.length ;i++){
// // if (newData[i]/1==newData[i]){
// // newString.push(newData[i])} else{newStingChar.push(newData[i]) }
// // } 

// // let val = [...newString , ...newStingChar ]

// // console.log(val.join(''))













// // Manisha Chaudhary3:16 PM
// // 17 - reverse a string without inbuilt function																										
// // input string = abcde																										
// // output string = edcba																										
// // 18 - sort string integers and characters																										
// // input string = 1b7gh6jk8																										
// // output string = 1768bghjk
// // 17 - reverse a string without inbuilt function																										
// // input string = abcde																										
// // output string = edcba																										
// // 18 - sort string integers and characters																										
// // input string = 1b7gh6jk8																										
// // output string = 1768bghjk
// // Manisha Chaudhary3:18 PM
// // 17 - reverse a string without inbuilt function																										
// // input string = abcde																										
// // output string = edcba																										
// // 18 - sort string integers and characters																										
// // input string = 1b7gh6jk8																										
// // output string = 1768bghjk
// // Neha Verma3:24 PM
// // let str = 'abcde',temp=''; 
// // for(let j= str.length-1; j>=0; j--) {
// //     temp +=str[j]
// // }
// // console.log(temp)
// // Manisha Chaudhary3:29 PM
// // 7 - reverse a string without inbuilt function																										
// // input string = abcde																										
// // output string = edcba																										
// // 18 - sort string integers and characters																										
// // input string = 1b7gh6jk8																										
// // output string = 1768bghjk
// // Vidhya Sagar3:37 PM



// // function reverse(string){
// //   let r = "";
// //   for(let i = string.length-1; i >= 0; i--){
// //     r += string[i];
// //   }
// //   return r;
// // }

// // console.log(reverse("abcde"))

// // let newData = "1b7gh6jk8"

// // let newString = []
// // let newStingChar = []

// // for (let i = 0; i < newData.length ;i++){
// // if (newData[i]/1==newData[i]){
// // newString.push(newData[i])} else{newStingChar.push(newData[i]) }
// // } 

// // let val = [...newString , ...newStingChar ]

// // console.log(val.join(''))
// // Shubhankar Chandra Banerjee3:38 PM
// // function test2(input){
// // 		let strings = "";
// // 	  let numbers = "";
// // 	  for(let i = 0; i < input.length - 1; i++){
// // 	   if(Number(input[i]) % 1 === 0) {
// // 	       numbers += input[i];
// // 	    }
// // 	    else{
// // 	      strings += input[i];
// // 	    }
// // 	  }
    
// //   console.log(numbers + strings);
// // }

// // test2("1b7gh6jk8");

// // function test2(input) {
// //   let strings = "";
// //   let numbers = "";
// //   for (let i = 0; i < input.length - 1; i++) {
// //     if (Number(input[i]) % 1 === 0) {
// //       numbers += input[i];
// //     } else {
// //       strings += input[i];
// //     }
// //   }

// //   console.log(numbers + strings);
// // }

// // test2("1b7gh6jk8");
// // Ramachandra Nandhakumar3:41 PM
// // function reverse(string){  
// //   let reverse = "";      
// //    for (var i = string.length - 1; i >= 0; i--){         
// //      reverse += string[i];  
// //    }     
// //   console.log(reverse);
// // }

// // reverse("abcde");
// // function sort(input){
// // 		let strings = "";
// // 	  let numbers = "";
// // 	  for(let i = 0; i < input.length - 1; i++){
// // 	   if(Number(input[i]) % 1 === 0) {
// // 	       numbers += input[i];
// // 	    }
// // 	    else{
// // 	      strings += input[i];
// // 	    }
// // 	  }
    
// //   console.log(numbers + strings);
// // }

// // sort("1b7gh6jk8");



// // input string = 1b7gh6jk8																										
// // output string = 1768bghjk

// // let a='1b7gh6jk8'

// // function check(a){
// //   let p=[]
// //   let q=[]
// //   for (let i = 0; i < a.length; i++) {
// //     if(a[i]== /^[A-Za-z]+$/) {
// //       console.log(a[i])
// //     }

  
// // }}

// // for (let i = 0; i <=a.length; i++) {
// //   if(a[i]== /^[A-Za-z]+$/) {
// //     console.log(a[i])
// //   }
// // }


// // / let ins='1b7gh6jk8'
// // let inst2='';
// // let str='';

// // for (let i = 0; i < ins.length; i++) {
// //   if((0<=parseInt(ins[i])) && (parseInt(ins[i])<=9))
// //   inst2=inst2+ins[i]

// //   else {
// //     str=str+ins[i]
// //   }
// // }
// // console.log(inst2+str)

// // let str='1b7gh6jk8'
// // function check(str){
// //   let qqq=''
// //   let ppp=''

// //   for (let i = 0; i < str.length; i++) {
// //   if((parseInt(str[i])>=0) && (parseInt(str[i]))){
// //     qqq=qqq+str[i]
    
// //   }else{
// //     ppp+=str[i]

// //   }

// // }
// // console.log(qqq+ppp)
// // }
// // check(str)


// // let str='abcd'
// // let rev=" "
// // for (let a=str.length-1;a>=0;a--) {
// //   rev=rev+str[a]
  
  
// // }

// // console.log(rev)


// //  let str=12345
// // function revstr(str){
// //   for (let i = str.length-1 ;i>=0; i--) {
// //     console.log(str[i])
    

    
    
// //   }
// // }
// // revstr(str)


// // var reA = /[^a-zA-Z]/g;
// // var reN = /[^0-9]/g;

// // function sortAlphaNum(a, b) {
// //   var aA = a.replace(reA, "");
// //   var bA = b.replace(reA, "");
// //   if (aA === bA) {
// //     var aN = parseInt(a.replace(reN, ""), 10);
// //     var bN = parseInt(b.replace(reN, ""), 10);
// //     return aN === bN ? 0 : aN > bN ? 1 : -1;
// //   } else {
// //     return aA > bA ? 1 : -1;
// //   }
// // }
// // console.log(
// // ["A1", "A10", "A11", "A12", "A2", "A3", "A4", "B10", "B2", "F1", "F12", "F3"].sort(sortAlphaNum)

// // let arr=[2,4,55,3,5,77,9,8,7,6,5,4,4,222]
// // let ssr=arr.sort((a,b)=>a-b)
// // console.log(ssr)

// // var names = ["Peter", "Emma", "Jack", "Mia", "Eric"];
// // names.sort(); // ["Emma", "Eric", "Jack", "Mia", "Peter"]

// // var objs = [
// //   {name: "Peter", age: 35},
// //   {name: "Emma", age: 21},
// //   {name: "Jack", age: 53}
// // ];
// // console.log(
// //   objs.sort(function(a, b) {
// //     return a.age - b.age;
// //   }))



// // function check(arr){
// //   for (let i = arr.length-1; i>=0; i--) {
// //     console.log(arr[i])
    
    
// //   }

// // }
// // check([2,4,2,3,2,3,2,3,2,6,67,78,8])


// // function uniq(arr){
// //   let res=[]
// //   for (let i = 0; i < arr.length; i++) {
// //       if(res.indexOf(arr[i]==-1))
// //       res.push(arr[i])

    
// //   }
// //   return res;
// // }
// // console.log(uniq(['arman','arman']))

// // function rev(str){
// // const arr=str.split('').reverse().join('')
// // console.log(arr)
// // }
// // rev("str")


// // function commonElementsOfArray(arr1, arr2, arr3) {
// //   return arr1.filter(function (n) {
// //       return arr2.indexOf(n) !== -1;
// //       return arr3.indexOf(n) !== -1;
// //   });
// // }


// // ar1 = [1, 5, 10, 20, 40, 80] 
// // ar2 = [6, 7, 20, 80, 100]
// // ar3 = [3, 4, 15, 20, 30, 70, 80, 120] 
// // console.log(commonElementsOfArray(ar1, ar2, ar3))



// // let arr=[40,30,12,25]

// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         if(arr[j]>arr[j+1]){
// //             let temp=arr[j];
// //             arr[j]=arr[j+1];
// //             arr[j+1]=temp
// //         }
        
        
// //     }
// //     console.log(arr)
    
// // }

// // function fac(num){
// //     if(num==0){
// //         return 1
// //     }
// //     return num * fac(num-1)
    

// // }

// // console.log(fac(5))
// // function febo(num){
// //     let sum=0
// //     let arr=[0,1]
// //     for (let i = 0; i < num; i++) {
// //         sum=arr[i]+arr[i+1];
// //         arr.push(sum)
        
        
        
// //     }
// //     console.log(arr)

// // }

// // febo(7)


//  //+91-22-68493476








// //  Find the median of two sorted arrays.
// //  ● Eg.
// //  arr1 = [1, 3, 5]
// //  arr2 = [2, 4, 6]
// //  median(arr1, arr2) = 3.5





// // const median = (a, b) => {

// //     let c = [...a, ...b].sort((a, b) => a - b); 
// //     const half = c.length / 2 | 0;    
// //     if (c.length % 2) return c[half];
// //     return (c[half] + c[half - 1]) / 2;
// // }

// // const arr1 =  [1, 3, 5];
// // const arr2 = [2, 4, 6];
// // console.log(median(arr1, arr2));










// // var arr=[1,2,3,4,5,6,7,8,9];

// // let p=arr.reduce((prev,curr)=>{
// //     return prev+curr
// // },0)
// // console.log(p)

// // var obj={
// //     a:20,
// //     b:10,
// //     c:40,
// //     l:55

// // }

// // for (const key in obj) {
// //    console.log(`  ${key} =${obj[key]}`)
// // }



// //[4,9,2,3,8,5];

// // [2160,960,4320,2280]


// function some(arr) {
//     let tepmArr =[];
//     for (let i = 0; i < arr.length; i++) {
//     let arr1 = arr.filter((item) => item !== arr[i]);
//     var sum=1
//     for(let i=0 ;i<arr1.length;i++){
//     sum = sum * arr1[i]
//     }
//     tepmArr.push(sum)
//     }
//     return tepmArr
//     }
//     let res=some([4,9,2,3,8,5]);
//     console.log(res)

//     Good Morning Nitin,

// I have to kindly inform you that my father is a cancer patient and he is going through chemotherapy every week and due to chemotherapy his condition is not well. His blood level is decreasing day by day and many more complications and I am the one who has been taking care of him for a long time. My younger brother is only 14 years old and he is not able to handle the situations.

// I'd like to request you to provide me with a hybrid work system so that I can watch after him.I can ensure that I could keep up with my current work remotely. 


// Thank you so much for your understanding and consideration.if you have any questions and queries please let me know.  

// CLI github git bash gitlin                   
// data structre system design
// GIT CODE CODE SHARE HACKER RANK


// let arr=[[1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]]
// let m=1;
// arr.forEach((val,ind)=>{
//     if(ind!==arr.length-1){
//         m=m*val[0];
//         console.log(val[0])
//     }else{
//         val.forEach((d)=>{
//             m=m*d;
//             console.log(d)
//         })
//     }
// })
// console.log(m)
// console.log("hello")


// From a given array, make n elements rotate.


// eg. given Array:[21,54,11,35,4,18], index:3; output Array: [4,18,21,54,11,35]





// let arr=[21,54,11,35,4,18]
//  function rotateElements(array , n) {
// let arr1=arr.filter((item,index)=>index<=n)
//  let arr2=arr.filter((item,index)=>index>n)
//  let arr3=[...arr2,...arr1]
// return arr3 
//  }
//  console.log(rotateElements(arr,3));




//  let arr = [21,54,11,35,4,18];
// let n = arr.length, d=4;
// while(d>0){
//     let temp = arr[0];
//     for(let i=0;i<n-1;i++){
//         arr[i]=arr[i+1]
//     }
//     arr[n-1]=temp;
//     d--;
// }
// console.log(arr)

//  let arr=[21,54,11,35,4,18]

//  function check(arr,n){
//     let p=[]
//     let q=[]
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i>n){
//             p.push(arr[i])

//         }else{
//             q.push(arr[i])
//         }

      
        
//     }
//     let final=[...p,...q]
//     // console.log(p)

//     // console.log(q)
//     console.log(final)

//  }
//  check(arr,3)


// function* iteratorFunc() {
//     let count = 0;
//     for (let i = 0; i < 2; i++) {
//     count++;
//     yield i;
//     }
//     return count;
//    }
//    let iterator = iteratorFunc();
//    console.log(iterator.next()); // {value:0,done:false}
//    console.log(iterator.next()); // {value:1,done:false}
//    console.log(iterator.next()); // {value:2,done:true}

// const newSet = new Set([4, 5, 6, 7]);
// console.log(newSet);// Outputs Set {4,5,6,7}
// const newSet2 = new WeakSet([3, 4, 5]); //Throws an error
// let obj1 = {message:"Hello world"};
// const newSet3 = new WeakSet([obj1]);
// console.log(newSet3.has(obj1)); // true


// var myArray = [
//     {field: 'id', operator: 'eq', value: "id"}, 
//     {field: 'cStatus', operator: 'eq', value: "cStatus"}, 
//     {field: 'money', operator: 'eq', value: "money"}
// ];

// myArray = myArray.filter(function( obj ) {
//     return obj.field !== 'money';
// });console.log(myArray)

// Virtual DOM in depth, Why we use, why it is lightweight,
// Custom reduce function javascript
// Use of bind () method?
// How does a V8 engine works?
// Event loop work?
// Error bounderies into react
// What are Synthetic events in React?
// Difference between Shadow DOM and Virtual DOM?
// What is Lifting State Up in React?
// React Mixins?
// Can I dispatch an action in reducer?
// remove array element based on object property?







// Given a boolean matrix, update it so that if any cell is true, all the cells
// in that row and column are true.
// ● Eg.
// [true,  false, false]      [true,  true,  true ]
// [false, false, false]  ‑>  [true,  false, false]
// [false, false, false]      [true,  false, false]

// let arr=[[true,  false, false] 
// ,[false, false, false],
// [false, false, false]]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[j]==)
//     }
    
// }


// var setTrue = (matrix) => {
//     var solution = [];
  
//     for (var i = 0; i < matrix.length; ++i) {
//       for (var j = 0; j < matrix[i].length; ++j) {
//         if (matrix[i][j] === true) {
//           solution.push(i);
//           solution.push(j);
//         }
//       }
//     }
  
//     for (var k = 0; k < solution.length; ++k) {
//       for (j = 0; j < matrix[solution[k]].length; ++j) {
//         matrix[solution[k]][j] = true;
//       }
//       for (i = 0; i < matrix.length; ++i) {
//         matrix[i][solution[k + 1]] = true;
//       }
//       ++k;
//     }
//   return matrix;
//   };

// console.log(  setTrue(arr))


// let arr = [
    // [true,  false, false],
    // [false, false, false],
    // [false, false, false] ]

//     let newArr = JSON.parse(JSON.stringify(arr))
//     arr.forEach((data,i)=>{
//         data.forEach((val,j)=>{
//             if(val){
//                 for(let a = 0;a < arr.length ; a++){
//                     newArr[a][j] = true
//                     newArr[i][a] = true
//                 }
//             }
//         })
//     })
    
//     console.log(newArr)
  
// arr.forEach((d,i)=>{
//     d.forEach((v,j)=>{
//         if(v==true){

//         }
//     })
// })

// function convertFunc(arr) {
  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i ==0|| j==0) {
       
//         arr[i][j] = true ;
//         // console.log(arr[i][j])
//       }
//     } 
//   }
//   return arr
// }

// console.log(convertFunc(arr));
// convertFunc(arr)


// let obj={
//   name:"arman",
//   sername:"khan",
//   check:function (){
//     console.log(this.name + " " + this.sername)
//   }
// }

// let p2={
//   name:"sameer",
//   sername:"khan"
// }
// obj.check.call(p2)



// Given two strings, write a function to determine whether they are
// anagrams.
// ● Eg.
// isAnagram("", "") = true
// isAnagram("A", "A") = true
// isAnagram("A", "B") = false
// isAnagram("ab", "ba") = true
// isAnagram("AB", "ab") = true

// function isAnagram(str1,str2) {
//   let tempStr=str2.split('').reverse().join('').toLowerCase()
//   return console.log(str1.toLowerCase() === tempStr || str1.toLowerCase() === str2);
// }
// isAnagram("", "") 
// isAnagram("A", "A") 
// isAnagram("A", "B") 
// isAnagram("ab", "ba") 
// isAnagram("AB", "ab")


// function isAnagram(str1,str2){
//   let tempstr=str2.split('').reverse().join('').toLowerCase();

//   console.log(str1.toLowerCase()===tempstr || str1.toLowerCase()=== str2)
// }
// isAnagram("", "") 
// isAnagram("A", "A") 
// isAnagram("A", "B") 
// isAnagram("ab", "ba") 
// isAnagram("AB", "ab")


// arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
// median(arr1, arr2) = 3.5


// const numbers = [1,2,3]

// const sumReducer = (initialValue, current) => initialValue + current;

// const sumOfNumbersNative = numbers.reduce(sumReducer, 0)

// console.log('Native reduce function, ' + sumOfNumbersNative)
// console.log("hello")

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);

//   const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.call(person1, "Oslo", "Norway");


//   const person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//   }
  
//   person.fullName.apply(person1, ["Oslo", "Norway"]);




// var myArray = [
//     {field: 'id', operator: 'eq', value: id}, 
//     {field: 'cStatus', operator: 'eq', value: cStatus}, 
//     {field: 'money', operator: 'eq', value: money}
// ];





// myArray = myArray.filter(function( obj ) {
//     return obj.field !== 'money';
// });

// const promiseCreator = (i, time, text) => {
//     return new Promise(resolve => setTimeout(
//         () => resolve(console.log(`${i} ${text}`)),
//         time)
//     );
// }

// // const promises = [
// //     promiseCreator(1, 1000, "parallel"),
// //     promiseCreator(2, 1000, "parallel"),
// //     promiseCreator(3, 1000, "parallel"),
// //     promiseCreator(4, 1000, "parallel"),
// //     promiseCreator(5, 1000, "parallel"),
// // ]

// const promiseFactories = [
//     () => promiseCreator(1, 1000, "sequential"),
//     () => promiseCreator(2, 1000, "sequential"),
//     () => promiseCreator(3, 1000, "sequential"),
//     () => promiseCreator(4, 1000, "sequential"),
//     () => promiseCreator(5, 1000, "sequential"),
// ]

// function executeSequentially(promiseLikeArray) {
//     var result = Promise.resolve();
//     promiseLikeArray.forEach(function (promiseLike) {
//         result = result.then(promiseLike);
//     });
//     return result;
// }

// // executeSequentially(promises)
// executeSequentially(promiseFactories)


prr1 = [3,1,6,-1,8,25,7]
prr2 = [1,-1,25,10]
//     function isValidSubsequence(array, sequence) {
//     let seqIdx = 0;
//     for (const value of array) {
//         if (sequence[seqIdx] === value) {
//         seqIdx++;
//         }
//     }
//     return seqIdx === sequence.length;
//     };
//     console.log(isValidSubsequence(prr1, prr2));




//     function check(arr1,arr2){
//         let ss=0
//             for (const iterator of arr1) {
//                 if(arr2[ss]===iterator){
//                     ss++;
//                 }
               
                
//             }
//             return ss=arr2.length
//     }
//    console.log( check(prr1,prr2))


// const square = (n) => {
//     let result = 0;

//     // Slow function
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             result += 1;
//         }
//     }
//     return result;
// }

// console.log(square(100006));
// console.log(square(40));
// console.log(square(5));

// function swap(array, index1, index2) {
//     array.splice(index1, 1, array.splice(index2, 1, array[index1])[0]);
//     }
//     swap(array, 1, 4);
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//[1, 5, 3, 4, 2, 6, 7, 8, 9, 10]

// function swap(array, index1, index2) {
//     array.splice(index1 , 1,array.splice(index2 ,1,array[index1]))
//     }
//     swap(array, 1, 4);
//     console.log(array)


// function check(arr,index1,index2){
//     arr.splice(index1,1,arr.splice(index2,1,arr[index1])[0])

// }

// check(array)
// console.log(array)


// var array1 = [-10, 0.20, 0.30, -40, -50];

// 	// Method (return element > 0).
// 	var found = array1.find(function (element) {
// 		return element > 0;
// 	});
//     console.log(found)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let p=fruits.toString();
// console.log(p)

// let arr2 = [1, 2, 3, 4, 5];

// // [ 1, 2, 5, 4, 3]

// [arr2[2] , arr2[4]]=[arr2[4] , arr2[2]];
// console.log(arr2)


// Q 3] Find the pair of numbers which will give the specific number as 
// difference in the sorted array
// arr = [1, 8, 30, 40, 100]


// function check(arr,num) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if(i !=j && arr[j]-arr[i]==num){
//                 console.log(`pair found ${arr[i]} and ${arr[j]}`)
                
//             }
            
            
            
//         }

        
        
//     }
    
// }

//     check(arr,10)

// function check(arr){
//     let p=[]
//     arr.filter((item,ind)=>{
//         if(item !=undefined && item+arr[ind-1]==0){
            
//          p.push(item)

//         }
       
        

//     })


// }
// console.log(check([1, 2, -5, 1, 2, -1]))
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b  -  a});
// console.log(points)

// function print2largest(arr) {
//     let i;
//     if (arr.length < 2) {
//     console.log(" Invalid Input ");
//     return;
//     }
//     arr.sort();
//     for (i = arr.length - 2; i >= 0; i--) {
//     console.log("The second largest element is " + arr[i] );
//     return;
//     }
//     console.log("There is no second largest element<br>");
//     }
//     let arr= [ 1,3,2,4,4,0,5];
//     print2largest(arr); 


// function check(arr){
//     if (arr.match(/^[A-Z]*$/)) {
//         console.log("capital")
        
//     } else  {
//         console.log("small")
        
//     }

// }

// check("a")
// val="";
// console.log(val.charCodeAt())


// var obj={
//     id1:{
//     name:"adf",cost:10,disc:20
//     },
//     id2:{
//     name:"lkfd",
//     cost:20,
//     disc:10,
//     items:{
//     id3:{
//     name:"sfd",
//     cost:10,
//     disc:20
//     }
//     }
//     }
//     }
    


//     let P=Object.
//     console.log(P)








// Given an array, write a function to find any subarray that sums to zero,
// if one exists.
// ● Eg.
// zeroSum({1, 2, ‑5, 1, 2, ‑1}) = [2, ‑5, 1, 2]



// function zeroSum (arr){
//     let newArr = []
//     arr.forEach((val,index)=>{
//         let sum = val
//         let newArr = [val]
//         if (index === 0 ){
//             return
//         }
//         for (let a = index + 1;a<arr.length;a++){
//             sum = sum + arr[a]
//             newArr.push(arr[a])
//             if(sum === 0){
//                 console.log(newArr)
//             }
//         }
//     })
// }

// zeroSum([1, 2, -5, 1, 2, -1])


// function check(arr){
//     let sum=0
//     let p=[]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i])
        
//     }

// }

// 

// const arr=[1,2,3,4,5,6]
// arr[0]=22;
// console.log(arr)


// arr=[1,2,3,5,6,7,8,9]
// function check(arr){
//     val=1
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i]==val){
//             val+=1
//         }else{
//             return console.log(val)
//         }
       
        
//     }

// }
// check(arr)




// arr=[1,2,3,5,6,7,8,9]
// function check(arr){
//     temp=[]
//     val=1
//     for (let i = 0; i < arr.length+1; i++) {
//         if(arr[i]==val){
//             val+=1
//             temp.push(arr[i])
//         }else{
//             temp.push(val)
//             val+=1
            
//         }
       
        
//     }
//     return temp
// }
// console.log(check(arr))




// Given two integers, write a function to sum the numbers without using
// any arithmetic operators


// function check(){

// }

// function add(a1 , b1)
// {
     
//     for (i = 1; i <= b1; i++)
//     {
//         a1++;
//     }
//     return a1;
// }

// console.log(
//     add(10, 32))

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 //[1, 5, 3, 4, 2, 6, 7, 8, 9, 10]


//  function check(array,ind1,ind2) {
//      array.splice(ind1,1,array.splice(ind2,1,array[ind1])[0])
//      return array
    
//  }
//  console.log(check(array,1,4))


let str="sameer"

// function check(str){
//     let temp=''
//     for (let i =str.length-1;i>=0;i--) {
//         temp+=str[i]
        
        
//     }
//     return temp

// }
// console.log(check(str))










// function check(str){
//     for (let i = str.length-1;i>=0;i--) {
//         console.log(str[i])
        
        
//     }

// }
// check(str)

// 11.write a function for multiples of 3 and 5 by passing n input?


// function findMultiple(val){
//     if(val%3 ===0 && val% 5===0){
//         console.log("input is multiply by both 3 & 5");
//     }else if(val%3===0){
//         console.log("input is multiply by 3");
//     }else if(val%5===0){
//         console.log("input is multiply by 5");

//     }else{
//         console.log("input is not multiply by 3 & 5");
        
//     }
// }
// findMultiple(25)


// let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]

//  sample.forEach((item) =>{
//     if(item%2===0){
//         console.log("item",item);
//         item=+5
//         console.log(item);
//     }
//     // console.log("item",item);

// })

// console.log(sample);


// From an array, find out the elements, and their repetition and print as element=count.


// eg.


// input Array: [2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]


// output:


// 2=3


// 1=1


// 3=3


// 4=5


// 6=5


// 5=5


// 7=2


// 8=1

// let a=[2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6]
// let result = {};
// for (var i = 0; i < a.length; i++) {
// // console.log(!result[a[i]]);
// if (!result[a[i]]) {
// result[a[i]]=0;
// }
// result[a[i]]++;
// }
// // console.log(result); 
// for(char in result){
// console.log(`${char}=${result[char]} `);
// }




// var arr = [2,1,3,4,6,5,4,7,5,6,8,2,3,6,2,6,4,4,7,3,4,5,6];
// var newArr = {};
// for(let i=0;i<arr.length;i++){
    
//     if(newArr[arr[i]] > 0)
//     {
//         newArr[arr[i]] = newArr[arr[i]] + 1;
//     }else if(newArr[arr[i]] === undefined)
//         newArr[arr[i]] = 1;      
// }
// console.log(JSON.stringify(newArr));