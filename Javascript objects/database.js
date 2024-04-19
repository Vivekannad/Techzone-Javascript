const ourCentre = {
    center_name : 'Tech Zone',
    courses: ['Web dev','Graphic designing','App Dev','Web Design'],
    faculty: [{
        teacher_name: 'Sir Ahtesham',
        subject: 'Web dev',
        test(){
            console.log(this.)
        },
        shift: function(){
           console.log(`${this.teacher_name} teaches from 7pm to 9pm`)
        },
        history(){
            console.log(`${this.teacher_name} has been teaching in this centre for about 1.5 years`)
        },
        batch: '2nd',
        days : ['Monday','Wednesday','Friday'],
        currentTp : 'Javascript',
        students: [{
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
            institude : 'University'    
        }],
        totalNum : function(){
            console.log(`${this.students.length}`)
        },
    }, {
        teacher : 'Sir Shoaib',
        subject : `App dev`,
        
    } ]
};
// console.log(ourCentre)
let {faculty} = ourCentre;
let [myTea] = faculty;
let {students} = myTea;
let [me] = students
myTea.mainWork = function() {
    console.log(`${this.teacher_name} is a full-Stack engineer`)
}
students.splice(1,0,{
    student_name : 'Rehan',
    gender: 'M',
    age : 21,
    institude : 'University'
});
// console.log(students);

for(let i of students){
    // console.log(i);
};
for(let key in me){
    // console.log(key,me[key]);
};

students.pop();
// console.log(students)

students.forEach((val) => {
    // console.log(val)
});
console.log(ourCentre)