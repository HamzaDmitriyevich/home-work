function animalsYear(){
    var year = year;
    
    var animals = ["Обезьяна ", "Петух" , "Собака" , "Свинья" , "Крыса" , "Бык" , "Тигр"
, "Кролик" , "Дракон" , "Змея" , "Лошадь" , "Овца"];

var anumal = animals[(year - 4) % 12];

var image = "<img src='" + anumal + "byk.jpg'>";

document.getElementById("animal").innerHTML = image;


}