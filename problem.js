// Write a program to print the sum of positive numbersonly in an array.

// let arr=[1,-4, 7, 12];
// let result=arr.filter(function(num){return num>0;}).reduce((sum,num)=>sum+=num)
// console.log(result);

// ==========================================================================>
// Write a program to print the max and min numbers in an array.

// let array = [1,-5, 3, 10];
// let max = Math.max(...array);
// let min = Math.min(...array);

// console.log("Maximum number:", max);
// console.log("Minimum number:", min);

// ==========================================================================>
// let array = [1, 5,-5, 6];

// function selectionSort(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         if (minIndex !== i) {
//             let temp = array[i];
//             array[i] = array[minIndex];
//             array[minIndex] = temp;
//         }
//     }
//     return array;
// }

// let sortedArray = selectionSort(array);

// console.log("Sorted array:", sortedArray);

// ==========================================================================>
// Write a program to convert a string to an array of chars.

// let name = "hello";
// let result=name.split("");
// console.log(result);

// ==========================================================================>


// function sumIntArray() {
//   // Ask the user to enter the integers, separated by commas
//   let input = prompt("Enter the integers, separated by commas:");

//   // Split the input string into an array of strings
//   let strArray = input.split(",");

//   // Convert the array of strings to an array of integers
//   let intArray = strArray.map(Number);

//   // Calculate the sum of the integers using the reduce method
//   let sum = intArray.reduce((acc, cur) => acc + cur, 0);

//   // Return the sum
//   return sum;
// }

// // Call the function to get the sum of an integer array from the user
// let sum = sumIntArray();

// // Print the sum
// console.log("Sum of the integer array:", sum);

// ==========================================================================> leetcode problems
// Build Array from Permutation ممكن استخدمها ف تبديل الاسؤله
// function buildArray(nums) {
//   var result = new Array(nums.length);

//   for (let i = 0; i < nums.length; i++) {
//     result[i]= nums[nums[i]];
//   }
//   console.log( result);
// }
// var nums =[0,2,1,5,3,4]
// buildArray(nums)
// ============================== (OR)
// function buildArray(nums) {
//   const n = nums.length;
//   const result = new Array(n);

//   for (let i = 0; i < n; i++) {
//     result[i] = nums[nums[i]];
//   }

//   return result;
// }
// const nums =[0,2,1,5,3,4];
// const array = buildArray(nums);
// console.log(array); 


// [0,2,1,5,3,4]
// result[i] = permutation[permutation[i]] 
// result[0] = permutation[0]  == 0
// result[1] = permutation[2]  == 1
// result[2] = permutation[1]  == 2
// result[3] = permutation[5]  == 4
// result[4] = permutation[3]  == 5
// result[5] = permutation[4]  == 3

// ==========================================================================>

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     for (let j = 0; j <= nums.length; j++) {
//       if (i !== j) { this line to handel this case ([3, 2, 4], 6) beacause without this will return wrong answer
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
// };
// console.log(twoSum([3, 2, 4], 6));

// ==========================================================================>  concate two arrays

// var getConcatenation = function(nums) {
//   const result = [];
//   for(let i= 0;  i< nums.length; i++) {
//       result[i] = nums[i];
//       result [i + nums.length] = nums[i]
//     }
//     console.log(result);
// };
// getConcatenation([1,2,1])

// ====== Merge using the spread operator

// var getConcatenation = function () {
//   const arr=[1,2,3,4];
//   const arr2=[1,2,3,4,5];
//   const all =[...arr,...arr2];
//   console.log(all);
// }
// getConcatenation()
// ====== OR
// var getConcatenation = function (nums) {
//   return [...nums,...nums];
// }
// console.log( getConcatenation([1,2,1]));

// ==========================================================================> shuffle array  & put the items like (x,y)


// var shuffle = function(nums, n) {
//   const result = []
//   for (let i = 0; i < n; i++) {
//       result.push("(" + nums[i],nums[n+i]+ ")")
//   }
//   return result
// };
// //                  x1,x2,x3,y1,y2,y3
// console.log(shuffle([1,2,3,4,5,6],3));  // ['(1', '4)', '(2', '5)', '(3', '6)']

// ==========================================================================> handel x++ & ++x  & x-- & --x

// var finalValueAfterOperations = function (operations) {
//   var x = 0;
//   for (var i = 0; i < operations.length; i++) {
//     if (operations[i] === "++X" || operations[i] === "X++") {
//       x++;
//     } else {
//       x--;
//     }
//   }
//   return x;
// };

// console.log(finalValueAfterOperations(["++X","++X","X++"]));


// ==========================================================================>

// const shoppingCart = [
//   {name: 'Apple', price: 1.99, quantity: 3},
//   {name: 'Apple', price: 1.99, quantity: 3},
//   {name: 'Xiomi', price: 2.99, quantity: 2},
//   {name: 'Samsung', price: 3.99, quantity: 1},
//   {name: 'Tesla', price: 3.99, quantity: 1},
//   {name: 'Tesla', price: 4.99, quantity: 4},
//   {name: 'Nokia', price: 4.99, quantity: 4},
// ]

// const products = shoppingCart.reduce((productGroup, product) => {
//   const name = product.name;
//   if(productGroup[name] == null) {
//       productGroup[name] = [];
//   }
//   productGroup[name].push(product);

//   return productGroup;
// }, {});

// console.log(products);

// try {
//   try {
//     throw new Error("oops");
//   } catch (ex) {
//     console.error("inner", ex.message);
//     throw ex;
//   } finally {
//     console.log("finally");
//   }
// } catch (ex) {
//   console.error("outer", ex.message);
// }


// ==========================================================================>get common value of array

// var getCommon = function (arr1 ,arr2) {
// const result = arr1.filter(value => arr2.includes(value))
// console.log(result);
// }
// getCommon([1,2,3,4,5,6],[4,5,6,7,8])

// =======================================================================> put array in pair  ['(1, 2)', '(3, 4)', '(5, 6)']

// var getPair =function () {
// let arr1 = [1,2,3,4,5,6];
// let result = [];
// for (let i = 0; i < arr1.length -1; i+=2) {
// if (arr1[i + 1] !== undefined) {
//   result.push('(' + arr1[i] + ', ' + arr1[i + 1] + ')');
// }
// }
//   console.log(result);
// }
// getPair()

// =================================================================> num of good pair in array ==> (1,1) (2,2) (3,3) ==>3
// function countGoodPairs(arr) {
//   let count = 0;
//   let result=[];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//         result.push('(' + arr[i] + ', ' + arr[j] + ')');
//       }
//     }
//   }
//   console.log(result);
//   return count;
// }

// const array = [2, 4, 6, 3, 1, 5, 2, 3, 1, 4];
// console.log(countGoodPairs(array)); // Output: 4


// ==========================================================================> Number of Employees Who Met the Target

// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//   let employees = 0;
//   for (let i = 0; i < hours.length; i++) {
//     if (hours[i] >= target) {
//       employees++
//     }
//   }
//   console.log(employees); 
// };
// numberOfEmployeesWhoMetTarget([0,1,2,3,4],2)

// ============== (OR)

// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//   let result = hours.filter( (hour)=> hour >= target ).length
//   console.log(result);
// }
// numberOfEmployeesWhoMetTarget([0,1,2,3,4],2)

// ==========================================================================> To Be Or Not To Be


// var expect = function (val) {
//   return {
//     toBe: (val2) => {
//       if (val !== val2) throw new Error("Not Equal");
//       else return true;
//     },
//     notToBe: (val2) => {
//       if (val === val2) throw new Error("Equal");
//       else return true;
//     }
//   }
// };

// ==========================================================================> Kids With the Greatest Number of Candies


// function kidsWithCandies(candies, extraCandies) {
//   let maxCandies = Math.max(...candies);

//   let result = candies.map(  (candy)=> candy + extraCandies >= maxCandies );
//   console.log(result);
// }
// kidsWithCandies([4,2,1,1,2],1)

// ===============(OR)

// function kidsWithCandies(candies, extraCandies) {
//   let maxCandies = Math.max(...candies);
//   let result= []
//   for (let i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= maxCandies) {
//       result.push(true)
//     }else{
//       result.push(false)
//     }
//   }
//   console.log(result);
// }
// kidsWithCandies([4,2,1,1,2],1)


// ==========================================================================> Longest Substring with no repeat Characters


// var lengthOfLongestSubstring = function (s) {
//   let longest = 0;
//   let currentString = ""

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const charIndex = currentString.indexOf(char);
//     if (charIndex !== -1) {
//       currentString = currentString.slice(charIndex + 1)
//     }

//     currentString += char;


//     longest = Math.max(longest, currentString.length)

//   }
//   console.log(longest);

// }
// lengthOfLongestSubstring(Array.from("aaasssdddfff"))




// ==========================================================================> ["increment","reset","decrement"]

// var createCounter = function(init) {
//   let presentCount = init;
//   function increment() {
//     return ++presentCount;
//   }
//   function decrement() {
//       return --presentCount;
//   }
//   function reset() {
//       return (presentCount = init);
//   }
//   return { increment, decrement, reset };
// };

// ==================(OR)
// var createCounter = function(init) {
//   let presentCount = init
//   return {
//       increment:()=> ++presentCount,
//       decrement:()=> --presentCount,
//       reset:()=> presentCount = init,
//   }
// };


// ==========================================================================> most words without repeating

// var lengthOfLongestSubstring = function(s) {

//   let longest = 0 ;
//   let currentString = "";

//   for (let i = 0; i < s.length; i++) {
//     if (currentString.indexOf(s[i]) != -1) {
//       currentString = currentString.slice(currentString.indexOf(s[i]),1);
//     }else{
//       currentString += s[i]
//     }
//     longest= Math.max(longest , currentString.length);
//   }
//   console.log(longest);
// }
// lengthOfLongestSubstring(Array.from("sssdddfffddddddddddd"))
// console.log();

// ==========================================================================> the most wealth

// var maximumWealth = function(accounts) {
//   let result= 0;
//   for (let i = 0; i < accounts.length; i++) {
//     let temp = 0;
//     for (let j = 0; j < accounts.length; j++) {
//       temp += accounts[i][j];
//       console.log("temp "+temp);
//     }
//     result= Math.max(temp,result)
//     // console.log(result);
//   }
//   console.log(result);
// };
// maximumWealth([[2,8,7],[7,1,3],[1,9,5]]); 

// ===================  OR

// var maximumWealth = function(accounts) {
//   let result = Math.max( ...accounts.map( (account) => account.reduce( (sum , wealth)=> sum + wealth,0 )  ) )
//   console.log(result);
// };
// maximumWealth([[2,8,7],[7,1,3],[1,9,5]])

// ==========================================================================> Count Pairs Whose Sum is Less than Target

// var countPairs = function (nums, target) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (i < j && nums[i] + nums[j] < target) {
//         count ++
//       }
//     }
//   }
//   console.log("count " + count);
// };
// countPairs([-1, 1, 2, 3, 1], 2)

// ==========================================================================> runningSum

// var runningSum = function(nums) {
//     let sum = 0 ;
//     let result = nums.map( ( num )=> sum += num  )
//     console.log(result);
// };
// runningSum([1,2,3,4]) // [1,3,6,10]

// ==========================================================================>smaller Numbers Than Current Number

// var smallerNumbersThanCurrent = function(nums) {
//     let newaArr = []
//     for (let i = 0; i < nums.length; i++) {
//       let count =0 ; 
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[i] > nums[j]  ) {
//           count++
//         }
//       }
//       newaArr.push(count)
//     }
// };
// smallerNumbersThanCurrent([6,5,4,8])


// ==========================================================================> most Words Found

// var mostWordsFound = function(sentences) {
//     let count = 0; 
//     for (let i = 0; i < sentences.length; i++) {
//       const words =sentences[i].split(' ');
//       console.log(words);
//       if (words.length > count ) {
//         count = words.length
//       }
//       console.log(count);
//     }
// };
// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])


// ==========================================================================> create array

// var createTargetArray = function(nums, index) {
//   const target = nums.reduce((acc, num, i) => {
//     acc.splice(index[i], 0, num);
//     return acc;
//   }, []);

//   return target;
// };

// // Example usage:
// const nums = [0,1,2,3,4];
// const index = [0,1,2,2,1];
// console.log(createTargetArray(nums, index)); // Output: [0, 4, 1, 3, 2]




// ==========================================================================> shuffel array

// var restoreString = function(s, indices) {
//     let shuffel =[];
//     for (let i = 0; i < s.length; i++) {
//       shuffel[indices[i]] = s[i];
//       console.log(shuffel.join(''));
//     }
//     console.log(shuffel.join());
// };
// restoreString("codeleet", [4,5,6,7,0,2,1,3])


// ==========================================================================>  Function Composition


// var evaluateFunctions = function(functions, x) {
//   let result = x;

//   for (let i = functions.length - 1; i >= 0; i--) {
//     result = functions[i](result);
//   }

//   return result;
// };

// // Example usage:
// const functions = [
//   x => x + 1,
//   x => x * x,
//   x => 2 * x
// ];
// const x = 4;
// console.log(evaluateFunctions(functions, x)); // Output: 65


// ==========================================================================>  Count Items Matching a Rule

// var countMatches = function (items, ruleKey, ruleValue) {
//   let count = 0;

//   for (let i = 0; i < items.length; i++) {
//     const [type, color, name] = items[i];

//     if (
//       (ruleKey === 'type' && type === ruleValue) ||
//       (ruleKey === 'color' && color === ruleValue) ||
//       (ruleKey === 'name' && name === ruleValue)
//     ) {
//       count++;
//     }
//   }

//   return count;
// };

// const items = [
//   ['ball', 'red', 'foo'],
//   ['cube', 'blue', 'bar'],
//   ['ball', 'green', 'baz'],
//   ['cube', 'red', 'qux']
// ];

// const ruleKey = 'color';
// const ruleValue = 'red';

// const matchingCount = countMatches(items, ruleKey, ruleValue);
// console.log(matchingCount); // Output: 2


// ==================OR 


// var countMatches = function (items, ruleKey, ruleValue) {

// return items.filter(item => {
//   if (ruleKey === "type") {
//     return item[0] === ruleValue;
//   } else if (ruleKey === "color") {
//     return item[1] === ruleValue;
//   } else {
//     return item[2] === ruleValue;
//   }
// }).length;
// }

// const items = [
//   ['ball', 'red', 'foo'],
//   ['cube', 'blue', 'bar'],
//   ['ball', 'green', 'baz'],
//   ['cube', 'red', 'qux']
// ];

// const ruleKey = 'color';
// const ruleValue = 'red';

// const matchingCount = countMatches(items, ruleKey, ruleValue);
// console.log(matchingCount); // Output: 2



// ===========================================================================> merge two words letter by letter

// var mergeAlternately = function(word1, word2) {
//     const maxLength = Math.max(word1.length, word2.length);
//     console.log(maxLength);
//     let merged ='';

//     for (let i = 0; i < maxLength; i++) {
//       if (i < word1.length) {
//         merged += word1[i];
//         console.log(merged);
//       }
//       if (i < word2.length) {
//         merged += word2[i];
//         console.log( merged);

//       }
//     }

//     return merged;
// };
// console.log(mergeAlternately("akbadc", "pqr")); // Output: "apbqcr"



// ===========================================================================> Check If Two String Arrays are Equivalent

// var arrayStringsAreEqual = function(word1, word2) {

//   if (word1.join('')== word2.join('')) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }

// };
// arrayStringsAreEqual(["a", "bc"],["ab", "c"])

//===============> OR 

// var arrayStringsAreEqual = function(word1, word2) {
//   const joinedWord1 = word1.map((char) => char).join('');
//   const joinedWord2 = word2.map((char) => char).join('');

//   return joinedWord1 === joinedWord2;
// };


// ===========================================================================> Return Length of Arguments Passed

// var argumentsLength = function(...args) {
//   let result = args.map( (num)=> num ).length
//   return result;

// };
// console.log(argumentsLength([{}, null, "3"])); 


// ===========================================================================> fun call one time only

// function once(fn) {
//   let called = false; // متغير يُحدد ما إذا تم استدعاء `fn` بالفعل

//   return function(...args) {
//     if (!called) {
//       called = true; // تأكيد أن `fn` تم استدعاؤها بالفعل
//       return fn(...args); // إرجاع النتيجة الأولية
//     } else {
//       return undefined; // في المرات اللاحقة، قم بتجاهل استدعاء `fn` وإرجاع `undefined`
//     }
//   };
// }

// ===================================================================> Difference Between Element Sum and Digit Sum of an Array

// var differenceOfSum = function(nums) {
//     let element = nums.reduce((sum,num)=>sum+=num)
//     const digit = nums.join('').split('').reduce((sum, digit) => sum + parseInt(digit), 0);
//     console.log(digit);
//     console.log(element);
//     let result = Math.abs(element - digit) ;
//     console.log(result);
// };
// differenceOfSum([1,2,3,4]);

// =================================================================================> find Median of Sorted Arrays

// function findMedianSortedArrays(nums1, nums2) {
//   const merged = [...nums1, ...nums2].sort((a, b) => a - b);
//   const len = merged.length;
//   const mid = Math.floor(len / 2);
//   return len % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
// }
// console.log(findMedianSortedArrays([1,3] , []));

// =========================================== OR

// function findMedianSortedArrays(nums1, nums2) {

//   let result =  nums1.concat(nums2).sort();
//   console.log(result);

//   const mid = Math.floor( result.length / 2 )
//   console.log(mid);

//   if (mid % 2 == 0) {
//     let resulteven = (result[mid - 1] + result[mid] ) / 2 ;
//     console.log( " even midian : " + resulteven);
//   }else{
//     let resultOdd = result[mid];
//     console.log(resultOdd);
//   }

// }
// findMedianSortedArrays([1,3] , []); wrong in this case 



// =================================================================================>  Sum of All Odd Length Subarrays

// var sumOddLengthSubarrays = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subsum = 0;
//     for (let j = i; j < arr.length; j += 2) {
//       for (let k = i; k <= j; k++) {
//         subsum += arr[k]
//       }
//     }
//     sum += subsum;
//   }
//   return sum;
// };


// const arr = [1, 4, 2, 5, 3];
// const result = sumOddLengthSubarrays(arr);
// console.log(result); // Output: 58

// =================================================================================> Check if a String Is an Acronym of Words

// var isAcronym = function(words, s) {
//     let result = words.map( (str)=> str[0] ).join('')
//     if (result == s) {
//       console.log(true); 
//     }else{
//       console.log(false);
//     }
// };
// isAcronym(["alice","bob","charlie"],'acc')


// =================================================================================> Remove Duplicates from Sorted Array
// var removeDuplicates = function(nums) {
//   let k = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != nums[i + 1] ) {
//       nums[k] = nums[i]
//       k++
//       console.log(nums[k]);
//     }
//   }

// };
// removeDuplicates([0,0,1,1,1,2,2,3,3,4]) 

// =================================================================================> Remove Element ===============
// function removeElement(nums, val) {
//   const filteredNums = nums.filter(num => num !== val);

//   for (let i = 0; i < filteredNums.length; i++) {
//     nums[i] = filteredNums[i];
//   }

//   return filteredNums.length;
// }

// // Example usage:
// const nums = [3, 2, 2, 3];
// const val = 3;
// const newLength = removeElement(nums, val);
// console.log(newLength);  // Output: 2
// console.log(nums);  // Output: [2, 2, _, _]

// ==========================================================================> Search in Rotated Sorted Array (binary search)

// var search = function (nums, target) {
// let left = 0 ;
// let right = nums.length - 1

// while (left <= right) {
//   let mid = Math.floor( (left + right)/ 2  )

//   if (nums[mid] == target ) {
//     console.log(mid);
//     return mid
//   }

//   if (nums[left] <= nums[mid]) {
//     if (nums[left] <= target && target < nums[mid]) {
//       right = mid - 1
//     }else{
//       left = mid + 1
//     }
//   }else{
//     if (nums[mid] < target && target <= nums[right] ) {
//       left = mid + 1
//     }else{
//       right = mid - 1
//     }
//   }

// }
// return -1

// };

// search([4,5,6,7,0,1,2] , 0)



// ================================================================>Find First and Last Position of Element in Sorted Array

// var searchRange = function(nums, target) {
//   const result = [-1, -1];

//   // Find the leftmost position
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] >= target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   // Check if the target exists in the array
//   if (nums[left] !== target) {
//     return result;
//   }
//   result[0] = left;

//   // Find the rightmost position
//   right = nums.length - 1;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] <= target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   result[1] = right;

//   return result;
// };

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;
// const result = searchRange(nums, target);
// console.log(result); // Output: [3, 4]

// ==========================================================================> Search Insert Position

// let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;

// ==========================================================================>  Sort the People
// var sortPeople = function(names, heights) {
//   let sortedArr = [...heights].sort();
//   let res = [];
//   for (let i = 0; i < sortedArr.length; i++) {
//     res.push(names[heights.indexOf(sortedArr[i])]);
//   }
//   console.log(res);
// };
// sortPeople(["Mary","John","Emma"],[180,165,170])

// ==========================================================================>  
// ==========================================================================>  
// ==========================================================================>  
// ==========================================================================>  
// revision on problems  codewars

// ==========================================================================>  evenOrOdd
// function evenOrOdd(number) {
//   let num =  number %2 ==0? "even" : "odd"
//   console.log(num);
// }

// evenOrOdd(0)

// ==========================================================================>  positiveSum

// function positiveSum(arr) {
//   let sum = arr.filter( (num)=>num>=0 ).reduce( (sum , num)=> sum + num ,0);
//   console.log(sum);

// }
// positiveSum([-1, -4, -7])

// ==========================================================================>  Sum without highest and lowest number

// function sumArray(arr) {
//   let sum = arr? arr.sort((a,b)=>a-b).slice(1, -1).reduce( (sum , num)=>sum + num , 0 ): 0;
//   console.log(sum);

// }
// sumArray([6, 2, 1, 8, 10])

// ==========================================================================>  String-repeat

// function repeatStr (num, str) {
//   let result = str.repeat(num)
//   console.log(result);

// }
// repeatStr(5, "*")


// ==========================================================================> Convert number to reversed array of digits

// function digitize(num) {
//   let result = num.toString().split('').reverse().map(Number)
//   console.log(result) ;

// }
// digitize(35231)

// ==========================================================================> Counting sheep...

// function countSheeps(sheep) {
//   let initialnum = 0;

//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       initialnum ++ ;
//     }
//   }
//   ==================or

//   let result = sheep.map((item) => {
//       if (item === true )
//       return initialnum++ 
//   })
//   console.log(initialnum);

//   ==================or

//   sheep.map( item=> item ===true? initialnum ++ : '')
//   console.log(initialnum);


// }
// countSheeps([undefined, null, false, true, true, false, null, undefined]);

// ==========================================================================> Jenny's secret message

// function greet(name){

//   if(name === "Johnny"){
//     return "Hello, my love!";
//   }else{
//     return "Hello, " + name + "!";
//   }
// }
// console.log(greet('alaa'));

// ==========================================================================> A Needle in the Haystack

// function findNeedle(haystack) {
//   let result = "found the needle at position " + haystack.indexOf('needle')
//   console.log(result);

// }
// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])

// ==========================================================================>  Count-of-positives-sum-of-negatives
function countPositivesSumNegatives(input) {
  let posNum = 0;
  let negSum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posNum++;
    } else {
      negSum += input[i];
    }
  }
  return [posNum, negSum]


}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
