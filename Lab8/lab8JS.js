window.onload=function () {
    //Q1
    var e1={
        text: "",
        filters: function (arr) {
            if (arr==null)
                return;

            var result="";
            var textArray=this.text.split(" ");

            var isFound=false;

            for(var i=0;i<textArray.length;i++){
                isFound=false;
                for(var j=0;j<arr.length;j++){
                    if(textArray[i]==arr[j]){
                        isFound=true;
                        break;
                    }
                }
                if (!isFound)
                    result+=textArray[i] + " ";
            }

            // output
            console.log("===Exercise 1: Filter 'banned word'===")
            console.log("text: " + this.text);
            console.log("filter: " + arr.join(","));
            console.log("output: " + result);

            return result;
        }
    };
    e1.text="this is not for testing";
    e1.filters(["not"]);

    //=== 2 ===
    var e2={
        arr: "",
        bubbleSort: function() {
            if (this.arr==null || this.arr.length==0)
                return;


            //== output ===
            console.log("===Exercise 2: Bubble Sort===")
            console.log("Array: " + this.arr);

            var len=this.arr.length;
            for(var i=0;i<len-1;i++){
                for(var j=0;j<len-i-1;j++){
                    if(this.arr[j]>this.arr[j+1]){
                        var temp=this.arr[j];
                        this.arr[j]=this.arr[j+1];
                        this.arr[j+1]=temp;
                    }
                }
            }

            console.log("output: " + this.arr);

            return this.arr;
        }
    }
    e2.arr=[6,4,0, 3,-2,1];
    e2.bubbleSort();

    //=== Exercise 3.1: Function Constructor ===
    function Person() {
        this.name="Tina1";
        this.subject="WAP1";
        /*this.testFunc= function() {
            alert("test");
        }*/
    }

    var teacher1=new Person();
    Person.prototype.teach=function () {
        console.log("===Exercise 3.1: Function Constructor")
        console.log(this.name + " is now teaching " + this.subject);
    }

    teacher1.teach();
    //teacher.testFunc();

    //=== Exercise 3.2: Object create ===
    var person2={
        name:"Tina2",
        subject:"WAP2",
        teach: function () {
            console.log("===Exercise 3.2: Object create")
            console.log(this.name + " is now teaching " + this.subject);
        }
    }

    var teacher2=Object.create(person2);
    teacher2.teach();

    //=== Exercise 4.1: Object Creation ===
    console.log("=== Exercise 4.1: Object Creation ===");
    var person={
        name:"Human",
        age:30,
        greeting:function () {
            console.log("Greetings, my name is " + this.name + " and I am " + this.age);
        },
        salute:function () {
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
        }
    }

    var student=Object.create(person);
    student.major="WAP";
    student.greeting=function(){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    }
    student.greeting();
    student.salute();

    var professor=Object.create(person);
    professor.department="IT";
    professor.salute=function () {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");
    }
    professor.greeting();
    professor.salute();



    //=== Exercise 4.2: Function Contructor ===
    console.log("=== Exercise 4.2: Function Contructor ===");
    var personFunc=function (name,age) {
        this.name=name;
        this.age=age;
    }

    personFunc.prototype.greeting=function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age);
    }
    personFunc.prototype.salute=function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
    }

    var studentCon=function (name, age) {
        personFunc.call(this,name,age);
        //personFunc.apply(this,[name,age]);
    };
    studentCon.prototype=Object.create(personFunc.prototype);
    studentCon.prototype.major="WAP";
    studentCon.prototype.greeting=function(){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    };
    const  stu1 = new studentCon();
    stu1.greeting();
    stu1.salute();

    var professorCon=function (name,age) {
        personFunc.call(this,name,age);
    };
    professorCon.prototype=Object.create(personFunc.prototype);
    professorCon.prototype.department="IT";
    professorCon.prototype.salute=function () {
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department");
    };
    var pro1=new professorCon();
    pro1.greeting();
    pro1.salute();

};