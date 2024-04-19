const computerCentre = {
    teacher : 'Sir Ahtesham',
    Students : [{
        student_name : 'Vivek',
        gender: 'M',
        age : 16,
        institude : 'college',
    },{
        student_name : 'Sahil',
        gender: 'M',
        age : 18,
        institude: 'college'        
    },{
        student_name : 'Asad',
        gender: 'M',
        age : 20,
        institude : 'University',
        teachers(){
            console.log(`${this.teacher} is the teacher`)
        }
    }],
    systems : ['HP','Dell','Lenovo'],
    air_conditioned : true,
    mainWork(){
        console.log(`${this.teacher} is an full-stack engineer`)
    },
    teacherWorks : {
        kaam: 'full-stack',
        sawari: 'bike',
        sideWork(){
            console.log(`${this.}`)
        }
    }
};
computerCentre.teacherWorks.sideWork();
//de-structuring of objects and arrays
let {Students} = computerCentre;
let [vivek,second,third] = Students;
// console.log(third.teacher())
// console.log(Students[0].gender);
// computerCentre.mainWork();
for(let i of Students){
    i.vehicle = function (){
        console.log(`${i.student_name} comes on bike`)
    } 
};
// console.log(computerCentre);
// Students[0].vehicle()
// computerCentre.Students[0].vehicle = function(){
//     console.log(`${this.student_name} comes with bike`)
// };
// computerCentre.Students[0].vehicle();

// delete computerCentre.mainWork;
// console.log(computerCentre);
computerCentre.teacherWorks =  [{
    sideWork(){
        console.log(`${this.teacher} is a techZone teacher`)
    }
}
];
// console.log(computerCentre);
// computerCentre.mainWork();

computerCentre.center_name = 'TechZone';
computerCentre.center_courses = ['Web-design','Web-development','Graphic-designing,','Amazon courses'];
// console.log(computerCentre);

// console.log(computerCentre)


const constructor = new String('well');
constructor.myOwn = function(){
    console.log(`This is my own function`);
}
// console.log(constructor.myOwn());

const num = new Number(23);
num.numberFunc = function(){
    console.log(`This is num function`)
};
num.numberP = 45
// console.log(num)