var emptyArray = [];
var empty_Array = [];
var stringArray = ["Ayan" , "Usman" , "Hamza" , "Saad"];
var numberArray = [1 , 2 , 3 , 4];
var booleanArray = [true , false];
var mixedArray = ["Ayan" , 2 , true];
var mobileNetworks = ["U-fone" , "Zong" , "Telenor" , "Jazz"];

var result_1 = document.querySelector ("#result_1");
var result_2 = document.querySelector ("#result_2");

result_1.innerHTML = "Qualifications"
var educationQualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil." , "PHD"];

result_2.innerHTML = "1) " + educationQualification[0] + "<br />" + 
"2) " +  educationQualification[1] + "<br />" + 
"3) " +  educationQualification[2] + "<br />" + 
"4) " +  educationQualification[3] + "<br />" + 
"5) " +  educationQualification[4] + "<br />" + 
"6) " +  educationQualification[5] + "<br />" + 
"7) " +  educationQualification[6] + "<br />" + 
"8) " +  educationQualification[7] + "<br />"; 

console.log(educationQualification);

var result_3 = document.querySelector ("#result_3");
var result_4 = document.querySelector ("#result_4");

result_3.innerHTML = "Top Movies Of 2015";

var movies = [];
movies[0] = "1) " + "Avengers: Age Of Ultron" + "<br />"; 
movies[1] = "2) " + "Spectre" + "<br />";
movies[2] = "3) " + "Jurrasic World" + "<br />"; 
movies[3] = "4) " + "Inside Out" + "<br />";
result_4.innerHTML += movies;
result_4.innerHTML += "Length of The Array is " + +movies.length;

console.log(movies);

var result_5 = document.querySelector ("#result_5");
var result_6 = document.querySelector ("#result_6");

result_5.innerHTML = "Favourite Cars";
var cars = ["Audi" , "Volvo" , "Ford" , "Lamborgini"];

result_6.innerHTML += "First Index of the Array: " + cars.indexOf("Audi") + "<br />";
result_6.innerHTML += "Car at First Index of the Array: " + cars[0] + "<br />";
result_6.innerHTML += "Last Index of the Array: " + cars.indexOf("Lamborgini") + "<br />";
result_6.innerHTML += "Car at Last Index of the Array: " + cars[3] + "<br />";

var result_7 = document.querySelector("#result_7");
var result_8 = document.querySelector("#result_8");
var studentsName = ["Ayan" , "Usman" , "Hamza"];
var scores = [420 , 350, 480];
var total = 500;

var percentage1 = scores[0] / 500 * 100;
var percentage2 = scores[1] / 500 * 100;
var percentage3 = scores[2] / 500 * 100;
result_8.innerHTML += "Score of " + studentsName[0] + " is " + scores[0] +". Percantage is " + percentage1 + "% <br />";
result_8.innerHTML += "Score of " + studentsName[1] + " is " + scores[1] +". Percantage is " + percentage2 + "% <br />";
result_8.innerHTML += "Score of " + studentsName[2] + " is " + scores[2] +". Percantage is " + percentage3 + "% <br />";

var color_1 = document.querySelector("#color_1");
var color_2 = document.querySelector("#color_2");
var color_3 = document.querySelector("#color_3");
var color_4 = document.querySelector("#color_4");
var color_5 = document.querySelector("#color_5");
var color_6 = document.querySelector("#color_6");
var colors = [" Black " , " Yellow " , " Orange "];
color_1.innerHTML = colors;

var userColor = prompt("Enter Any Color that you want to Edit First in your Array");
colors.unshift(userColor);
color_2.innerHTML = colors;

var userColor1 = prompt("Enter Any Color that you want to Edit Last in your Array");
colors.push(userColor1);
color_3.innerHTML = colors;

var userColor2 =  prompt("Enter Two more Colors that you want to Edit First in your Array");
var userColor3 =  prompt("Enter One more Colors that you want to Edit First in your Array");
colors.splice(0 , 0 , userColor2 , userColor3);
color_4.innerHTML = colors;

colors.shift();
color_5.innerHTML = colors;

colors.pop();
color_6.innerHTML = colors;

var userColor4 =  prompt("Enter Index of the color that you want to Edit in your a Array");
var userColor5 =  prompt("Enter One Color that you want to Edit in a Array");
colors.splice(userColor4 , 0 , userColor5);
color_7.innerHTML = colors;

var userColor6 =  prompt("Enter Index of the color that you want to Delete from your Array");
var userColor7 =  prompt("Enter how many Color do you want to Delete from your Array");
colors.splice(userColor6 , userColor7);
color_8.innerHTML = colors;

var result_9 = document.querySelector("#result_9");
var result_10 = document.querySelector("#result_10");
var studentsScores = [320 , 410 , 225 , 745 , 532];

result_9.innerHTML +=`Scores of Students:- ${studentsScores}`;
studentsScores.sort();
result_10.innerHTML +=`Ordered Scores of Students:- ${studentsScores}`;

var result_11 = document.querySelector ("#result_11");
var result_12 = document.querySelector ("#result_12");
var result_13 = document.querySelector ("#result_13");
var result_14 = document.querySelector ("#result_14");
var fruits = ["Strawberry" , "Apple" , "Orange" , "Banana"];

result_11.innerHTML = "Fruit List:";
result_12.innerHTML = fruits;
result_13.innerHTML = "Ordered Fruit List:";
fruits.sort();
result_14.innerHTML = fruits;

var result_15 = document.querySelector ("#result_15");
var result_16 = document.querySelector ("#result_16");
var cityList = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];

result_15.innerHTML = "Cities List:";
result_16.innerHTML = cityList;
result_17.innerHTML = "Selected Cities List:";
var selectedCities = cityList.slice(2 , 4);
result_18.innerHTML = selectedCities;

var result_19 = document.querySelector ("#result_19");
var result_20 = document.querySelector ("#result_20");
var result_21 = document.querySelector ("#result_21");
var result_22 = document.querySelector ("#result_22");
var joinArray = ["This" , "is" , "my" , "Cat"];

result_19.innerHTML = "Array:";
result_20.innerHTML = joinArray;
result_21.innerHTML = "String:";
var joinArrayAfter = joinArray.join(" ");
result_22.innerHTML = joinArrayAfter;

var result_23 = document.querySelector ("#result_23");
var result_24 = document.querySelector ("#result_24");
var result_25 = document.querySelector ("#result_25");
var result_26 = document.querySelector ("#result_26");
var result_27 = document.querySelector ("#result_27");
var result_28 = document.querySelector ("#result_28");
var result_29 = document.querySelector ("#result_29");
var result_30 = document.querySelector ("#result_30");
var result_31 = document.querySelector ("#result_31");
var result_32 = document.querySelector ("#result_32");

var devicesArray = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
result_23.innerHTML = "Devices:";
result_24.innerHTML = devicesArray;

var devicesOut = devicesArray.shift();
result_25.innerHTML = "Out:";
result_26.innerHTML = devicesOut;
var devicesOut = devicesArray.shift();
result_27.innerHTML = "Out:";
result_28.innerHTML = devicesOut;
var devicesOut = devicesArray.shift();
result_29.innerHTML = "Out:";
result_30.innerHTML = devicesOut;
var devicesOut = devicesArray.shift();
result_31.innerHTML = "Out:";
result_32.innerHTML = devicesOut;

var result_33 = document.querySelector ("#result_33");
var result_34 = document.querySelector ("#result_34");
var result_35 = document.querySelector ("#result_35");
var result_36 = document.querySelector ("#result_36");
var result_37 = document.querySelector ("#result_37");
var result_38 = document.querySelector ("#result_38");
var result_39 = document.querySelector ("#result_39");
var result_40 = document.querySelector ("#result_40");
var result_41 = document.querySelector ("#result_41");
var result_42 = document.querySelector ("#result_42");

var devicesArray2 = ["Keyboard" , "Mouse" , "Printer" , "Monitor"];
result_33.innerHTML = "Devices:";
result_34.innerHTML = devicesArray2;

var devicesOut2 = devicesArray2.pop();
result_35.innerHTML = "Out:";
result_36.innerHTML = devicesOut2;
var devicesOut2 = devicesArray2.pop();
result_37.innerHTML = "Out:";
result_38.innerHTML = devicesOut2;
var devicesOut2 = devicesArray2.pop();
result_39.innerHTML = "Out:";
result_40.innerHTML = devicesOut2;
var devicesOut2 = devicesArray2.pop();
result_41.innerHTML = "Out:";
result_42.innerHTML = devicesOut2;

var result_43 = document.querySelector ("#result_43");
var option_1 = document.querySelector ("#option-1");
var option_2 = document.querySelector ("#option-2");
var option_3 = document.querySelector ("#option-3");
var option_4 = document.querySelector ("#option-4");
var option_5 = document.querySelector ("#option-5");
var option_6 = document.querySelector ("#option-6");

var mobile_Array = ["Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
option_1.innerHTML = mobile_Array[0];
option_2.innerHTML = mobile_Array[1];
option_3.innerHTML = mobile_Array[2];
option_4.innerHTML = mobile_Array[3];
option_5.innerHTML = mobile_Array[4];
option_6.innerHTML = mobile_Array[5];

var multi_Array = [[] , [] , []];

var multiArray = document.querySelector ("#multiArray");
var multiArray = [[0 , 1 , 2 , 3] , [1 , 0 , 1 , 2] , [2 , 1 , 0 , 1]];

multi_Array.innerHTML = "Matrix:";
multiArray1.innerHTML = multiArray[0][0] + " " + multiArray[0][1] + " " + multiArray[0][2] + " " + multiArray[0][3];
multiArray2.innerHTML = multiArray[1][0] + " " + multiArray[1][1] + " " + multiArray[1][2] + " " + multiArray[1][3];
multiArray3.innerHTML = multiArray[2][0] + " " + multiArray[2][1] + " " + multiArray[2][2] + " " + multiArray[2][3];