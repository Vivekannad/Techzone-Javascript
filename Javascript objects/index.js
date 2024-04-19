// // /*
// // const car = {
// //     company : 'Toyota',
// //     model_Name : 'Land Cruiser',
// //     model : '2005',
// //     speciality(){
// //         console.log('High horsepwer');
// //     }
// // };
// // // console.log(car.company);
// // car.speciality();
// // // car.color = 'White';
// // // car.design = ({console.log('Tiger')})
// // car.design = function(){
// //     console.log('tiger')
// // };
// // // car.design;
// // console.log(car);
// // */
// // // const arr = [1,2,4,5,]
// // // console.log(this.arr)

// // const students = [];
// // const car = 
// //     {
// //         car_company : ['toyota',{
// //             car_name: ['Land Cruiser', {
// //                 color: 'White',
// //                 horsePower: '6060',
// //                 seatingCapacity : 7
// //             },'Yaris',{
// //                 color: 'brown',
// //                 horsePower: '4000',
// //                 seatingCapacity : 5
// //             }, 'Vitz',{
// //                 color: 'Grey',
// //                 horsePower: '3000',
// //                 seatingCapacity : 4
// //             }]
// //         }, "Suzuki",{
// //             car_name : ['Alto',{
// //                 color: 'green',
// //                 horsePower: '1000',
// //                 seatingCapacity : 4
// //             }]
// //         }]
// //     }

// //     const cars = ['toyota','Suzuki','Nissan'];
// //     const obj = {
// //         car_name : 'toyota',
// //         car_model : ['Land-Cruiser','Yaris','Vitz']
// //     }
// // // console.log(obj)

// // const nestedObj = {
// //     car_company: 'Toyota',
// //     car_model: [{
// //         car_name: 'Land-Cruiser',
// //         color: 'White',
// //         horsePower: '6060',
// //         seatingCapacity : 7
// //     },
// //     {
// //         car_name: 'Vitz',
// //         color: 'Brown',
// //         horsePower: '4000',
// //         seatingCapacity : 5
// //     }]
// // };
// // // console.log(nestedObj)

// // const nest = [{
// //     car_company: 'Toyota',
// // }];

// // const detail = [{
// //     name: 'Vivek',
// //     gender: 'M',
// //     work: function(){console.log('Study')},
// //     dress: {
// //         casual : 'jeans',
// //         formal : 'Suit'
// //     }
// // },{
// //     name: 'Anne',
// //     gender: 'F',
// //     work: function(){console.log('Job')},
// //     dress: 'Formal'
// // },{
// //     name: 'Mane',
// //     gender: 'B',
// //     work: function(){console.log('Nothing')},
// //     dress: {
// //         casual : 'pants',
// //         formal : 'shoes'
// //     },
// //     personality(){console.log(`You can say anything by ${this.gender}`)}
// // }];

// // const aanother = [{
// //     car_company: 'Toyota',
// //     car_names: [{
// //         car_name: 'Land-Cruiser',
// //         color: 'White',
// //         horsePower: '6060',
// //         seatingCapacity : 7
// //     },
// //     {
// //         car_name: 'Vitz',
// //         color: 'Brown',
// //         horsePower: '4000',
// //         seatingCapacity : 5
// //     }]
// // },{
// //     car_company: 'Suzuki',
// //     car_names: [{
// //         car_name: 'Alto',
// //         color: 'White',
// //         horsePower: '600',
// //         seatingCapacity : 4
// //     },
// //     {
// //         car_name: 'Cultus',
// //         color: 'green',
// //         horsePower: 1000,
// //         seatingCapacity : 4
// //     }]
// // }]
// // // console.log(this.aanother[1].car_names);
// // const thisObj = {
// //     v_name: 'Vivek',
// //     class : '11',
// //     city: 'Karachi',
// //     single: true,
// //     last_name: this.city,
// //     thisFun(){
// //         return this.v_name;
// //     }
// // };
// // console.log(thisObj);
// // console.log(thisObj.thisFun())


// const basket = {
//     productName: 'basketball',
//     price: 2095,
// };
// // console.log(basket)
// basket.price += 500;
// // console.log(basket)
// basket['delievery-time'] = '3 days'
// // console.log(basket)

// const product1 = {
//     Name: 'Towel',
//     price: 2095
// };
// let product2 = {
//     Name: 'Table',
//     price: 2100
// }
// function comparePrice(product1, product2) {
//     if (product1.price < product2.price) {
//         return product1;
//     };
//     return product2;
// }
// // console.log(comparePrice(product1,product2))
// // product2 = product1;
// const product3 = {
//     Name: 'Towel',
//     price: 2095
// }
// function isSameProduct(product1, product2) {
//     if (product1 === product2) {
//         return true;
//     }
//     return false;
// };
// // console.log(isSameProduct(product1,product3))

// const student = {
//     name: 'David Rayy',
//     class: 'VI',
//     rollNo: 12
// };
// // console.log(student.name)
// // console.log(student.class)
// // console.log(student.rollNo);
// // console.log(student)
// delete student.rollNo;
// // console.log(student)


const readBooks = {
    book_names: [{
        title: 'The Thousand Splendid Suns',
        Author: 'Khaled Hosseini',
        release_year: '2003',
        summary: function () {
            const summ = `${this.title} is a fictional book`;
            return summ;
        }
    },{
    title: 'The Secret',
    Author: 'Rhonda Bryne',
    release_year: '2005',
    summary: function () {
        const summ = `${this.title} is a self-help book`;
        return summ;
    }
},{
    title : 'Charlie and Chocolate Factory',
    Author : 'Roald Dahl',
    release_year : '1970',
    summary : function(){
        const summ = `${this.title} is a children book`;
        return summ;
    }
}]
};

console.log(readBooks);

const readBooks2 = [{
    title: 'The Thousand Splendid Suns',
        Author: 'Khaled Hosseini',
        release_year: '2003',
        summary() {
            const summ = `${this.title} is a fictional book`;
            return summ;
        }
    },{
    title: 'The Secret',
    Author: 'Rhonda Bryne',
    release_year: '2005',
    summary: () => {
        const summ = `${this.title} is a self-help book`;
        return summ;
    }
},{
    title : 'Charlie and Chocolate Factory',
    Author : 'Roald Dahl',
    release_year : '1970',
    summary : function(){
        const summ = `${this.title} is a children book`;
        return summ;
    }
}
];
console.log(readBooks2)

// // let {title,Author} = readBooks2;
// // console.log(title);

// let [book1,book2] = readBooks2;
// console.log(book1.summary());
// console.log(book2.summary());

// function thisCase(){
//     return this;
// };
// // console.log(thisCase());

const students = {
    name : 'Vivek anand',
    class : 12,
    work : function(){
        console.log(`${this.name} is a student`)
    },
    married : false,
    books : ['Secret','Sapiens','Matilda'],
};
console.log(students);
students['mobile'] = 'Vivo';
students.doing = function(){
    console.log(`reading ${this.books}`)
}
console.log(students.doing());

/*
// for-of loop
const string = 'vivek';
for(let i = 0; i < string.length; i++){
    // console.log(string[i]);
};
//both of these are same
for(let i of string){
    // i = 'pa';
    console.log(i)
};
const arr = ['cars','motorbikes','Airplanes','Train'];
for(let i of arr){
    console.log(i)
} 
*/

/*
//for-in loop
const obj = {
    name : 'Vivek',
    class : 12,
    course: 'Computer'
};
for(let key in obj){
    console.log(key,obj[key])
}
*/