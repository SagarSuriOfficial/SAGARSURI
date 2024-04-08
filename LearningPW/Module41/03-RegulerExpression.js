let pattern = 'pw'  // this word are searching

let regExOne = new RegExp(pattern)

let flag = 'gi'             //Globle ,Incensitiv case Search
let regExTwo = new RegExp(pattern, flag)


let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create a skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);  //output - true

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult); //output- [ 'pw', 'pw', 'pw' ]

const oneMoreResult = strToCheck.replace(regExThree, 'PW')
console.log(oneMoreResult); // output - PW is growing at a rapid speed and recently they are working on PWskills to create a skills based PWcontent

//------------------------------------------------------------------//


const webUrl = "https://pwskills.com/Sagar%20Suri"

const useableUrl = webUrl.replace(/%20/gi , '-')
console.log(useableUrl); //output - https://pwskills.com/Sagar-Suri

const useableUrl2 = webUrl.replace(/%\d/gi , '-') // "\d" a number like 1
console.log(useableUrl); //output - https://pwskills.com/Sagar-Suri

const useableUrl3 = webUrl.replace(/%\d\d/gi , '-') // "\d\d" two number like 11
console.log(useableUrl); //output - https://pwskills.com/Sagar-Suri


// Explore more about regEx - https:regexr.com