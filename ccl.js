function print_date() { //функция и ее название,печатает дату
    let dt = new Date(); //переменная dt с вызовом конструктора класса new Date()
    var i = 0;//переменная i равная нулю
    while (i < 2023) {
        i += 1;
        console.log(dt);//while ставит условие что i < 2023 то к переменной i будет добавленно 1.
        //console log выводит результат dt в консоль.
        
    }
}





// Функция называется calc_age, а должна печатать дату.
// Поэтому лучше её назвать печать_даты
function calc_age(year_of_birth) {  // параметр у нее есть, но не нужен
    let dt = new Date();  // Создали переменную dt и сохранили в неё текущую дату, созданную конструктором Date
    var i = 0; // создали счётчик цикла. Вернее "просто 0"
    while (i < dt) {  // пока счетчик меньше.... ДАТЫ? 1.7МЛРД???
        i += 1; // прибавляем единичку, тут все ок
        console.log(i); // печатаем счетчик цикла. А должны что? dt
    }
}