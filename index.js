// level 1

// question 7
// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("tell me your age ");

// if(age>=18){
//     console.log("you can vote")

// }else{
//     console.log("you can't vote")
// }
// -----------------------------------------

// question 8
// 8. Print multiplication table of 5
// Use loop to print 5 × 1 to 5 × 10.

// for(let i=1 ; i<=10 ; i++){
//        console.log(`5*${i} is ${5*i}`);
// }
// ---------------------------------------------

// question 9
// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let count  = 0 ;

// for(let i = 1 ; i<=15 ; i++){
//     if(i>8){
//         count++
//     }
// }
// console.log(count)
// ----------------------------------------------------
// question 10
// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

// let password = "bhai";
// let userPass = prompt("tell me the password");
// let attempt = 1;


// if(userPass===null){
//     console.log("password cannot be null")
// }
// while(userPass !== password){
//     if(attempt>3){
//         console.error("Account block")
//         break;
//     }
//     console.log("wrong password")
 
//     userPass = prompt("tell me the password");
//     attempt++
// }
// if(userPass === password){
//         console.log("correct password")
// }
                                                                // ---------------------------------------------
                                                                // LEVEL 2
                                                                // ---------------------------------------------

// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

// Approatch
// 1) create password
// 2) take as input userpassword
// 3) run while loop until password !== userpassword
// 4)craete variable attempt and initialized as 1 
// 5)

// let password = "ashu";
// let userPass = prompt("enter password");
// let attempt = 1;

// while(password !== userPass){
//     if(attempt<3){
//         console.log("incorrect password ");
//         userPass = prompt("enter password");
       
//     }else{
//          console.error("account block");
//         break;
//     }
    
//     attempt++
// } 
// if(attempt<3 && password === userPass){
//     console.log(`correct password  your attempt ${attempt} `)
// }

// if(password === userPass){
//      console.log(`password matched and your password is  ${userPass}`)
// }

// ---------------------
// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

// let correctword = "stop";
// let count = 0;
// let userword = prompt(" Type the  word");
// while(correctword!==userword){
//     if(userword ==="yes") count++
    
//     userword = prompt(" Type the  word");
// }
// if(userword===correctword){
//     console.log(`user type yes ${count} times`)
// }

// ----------------------
// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// let i = 0;
// while(i<50){
//     if(i%7===0){
//         console.log(i);
//     }
//     i++
// }

// ----------------------------------------------------
// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;
// let i=1;
// while(i<31){
//     if(i%2!==0){
//         sum = sum +i
//         // console.log(i)
//     }
//     i++
// }
// console.log("the total sum of odds between 1 to 30 is  " + sum)

// -------------------------------------------------------------------------

// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let userinput = Number(prompt("gives the number "));

// if(isNaN(userinput )){
//       console.log("gives the number only");
// }else{
//     while(userinput%2 !== 0){
       
//         userinput = Number(prompt("gives the number "));
//     }
//     if(userinput%2 ===0){
//         console.log("you choose the right number")
//     }
// }
// --------------------------------------------------------------------------
// Print numbers between two user inputs
// Input start and end using prompt() → print all between.
// 

// approach
// 1 takes two inputs first and second 
// run while loop whitch initial value is first num
// 

// let firstinput = prompt("gives the first number");
// let secondinput  = prompt("gives the second number");

// while(firstinput<=secondinput){
//     console.log(firstinput);
//     firstinput++
// }
// -----------------------------------------------------------------
//Question -  Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.


// let i =0;
// let j = 0;
// while(i<20){
//     if(j<3){
//         if(i%2!==0){
//             console.log(i)
//             j++
//         }
      
//     }else{
//         break;
//     }

//     console.log("haha")
//     i++
// }

// ------------------------------------
// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let userinput =prompt("give the first num");

// let i = 0;
// while(i<5){
//     if(userinput%2===0){
//         console.log(`this userinput is positive and userinput is  ${userinput}`)
//     }
//     userinput =prompt("give the first num");
//     i++
// }

// --------------------------------
// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balanc
// 


let withdrawals = Number(prompt("amount to withdrowals beetween 1-1000"));
let balance = 1000;
let count = 0;

  while(count<3 ){
    if(balance>=withdrawals){
        balance = balance-withdrawals;
        count++
    }else{
        console.log("you have insufficient balance")
    }
    
    console.log(`your remaining balance is ${balance}`)
     withdrawals = Number(prompt("amount to withdrowals beetween 1-1000"));
}

if(count===3){
    console.error(`attempt exceeded and  remaining balance - ${balance}`);
    
}





