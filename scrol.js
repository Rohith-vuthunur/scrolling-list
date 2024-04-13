const reviews=[{
    name:"Hari",
    image:"https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
    text:"Hari is a dedicated and enthusiastic student pursuing a Bachelor's degree in Computer Science at XYZ University. Born and raised in a small town, Jessica developed a passion for technology at a young age. Her curiosity and eagerness to learn led her to explore various programming languages and software development tools even before entering university.",
    maxi:"Throughout her academic journey, Hari has consistently demonstrated excellence in his studies. He has maintained a high GPA and has been recognized on the Dean's List multiple times for his outstanding academic performance. His dedication to mastering complex programming concepts and problem-solving skills has earned his praise from professors and peers alike.",


},
{
name:"Prasanna",
image:"https://www.shutterstock.com/image-photo/young-brunette-businesswoman-student-girl-260nw-488205880.jpg",
text:"Prasanna is a highly skilled and motivated individual with a background in computer science. Growing up in Bangalore, India, a hub for technology and innovation, Prasanna developed a keen interest in computers and technology from a young age. His passion for coding and problem-solving led him to pursue a degree in Computer Science Engineering from a prestigious university in Bangalore.",
maxi:"After completing his education, Prasanna embarked on his career as a software engineer. He has gained valuable experience working for several years in the tech industry, specializing in backend development and cloud computing. Prasanna has a strong command of programming languages such as Java, Python, and JavaScript, and is proficient in utilizing various frameworks and tools to build scalable and robust software solutions.",
},
{
    name:"Rahul",
    image:"https://images.picxy.com/cache/2019/7/25/66a9431902e222c2aabfd4e3e08ea31c.jpg",
    text:"Rahul is a dynamic and ambitious individual with a background in marketing and business administration. Born and raised in Mumbai, India, Rahul developed a passion for marketing and communication from a young age. He pursued a Bachelor's degree in Business Administration with a focus on marketing from a renowned university in Mumbai.",
    maxi:"After completing his education, Rahul embarked on his career in the field of marketing. He has gained valuable experience working for several years in the marketing industry, specializing in digital marketing strategies and brand management. Rahul has a proven track record of developing and executing successful marketing campaigns that drive brand awareness, engagement, and revenue growth.",
},
{
name:"smitha",
image:"https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg",
text:"Smitha is a talented and creative individual with a background in graphic design. Originally from Bangalore, India, Smitha discovered her passion for art and design at a young age. She pursued her passion by studying Graphic Design at a renowned art school in New York City, where she honed her skills in digital art, typography, and visual communication.",
maxi:"After completing her education, Smitha embarked on her career as a graphic designer. She has gained valuable experience working for various design agencies and freelance clients, specializing in branding, logo design, and user interface (UI) design. Smitha is known for her innovative and visually stunning designs that effectively communicate the client's message and resonate with the target audience.",
}
]
let images = document.getElementById("person-img");
let data = document.getElementById("names");
let info = document.getElementById("min");
let person = 0;
let prev_btn=document.getElementById("prevcont");
let next_btn= document.getElementById("nextcont");
let surprise_btn = document.getElementById("surprise");
let max_=document.getElementById("max");
window.addEventListener("DOMContentLoaded",function(){
    // person = currentperson;
    changing(person);

})
function changing(person){
    let item = reviews[person];
    images.src=item.image;
    data.textContent = item.name.toUpperCase();
    info.textContent = item.text;
    max_.textContent=item.maxi;
}
next_btn.addEventListener("click",function (){
    if (person<reviews.length-1){
        person++;
        
    }
    else{
        person=0;
        // changing(person);
    }
    changing(person);
})
prev_btn.addEventListener("click",function (){
if (person<=0){
    person = reviews.length-1;
    // changing(person);
}
else{
    person--;
    // changing(person);

}
changing(person);
})

let n = 0;
function surprise(){
    let cur=0;
    if(n%2==0){
         cur = 0;
        n++;
       
    }
    else{
   cur = reviews.length-1;
        n++;
    
    }
    changing(cur);
}

surprise_btn.addEventListener("click",surprise);