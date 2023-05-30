function plus() {
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    
    document.getElementById("out").textContent = parseInt(elem1) + parseInt(elem2);

}
function minus() {
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    
    document.getElementById("out").textContent = parseInt(elem1) - parseInt(elem2);

}
//getElementById - позволяет получить элемент страницы по его атрибуту id
//parsInt - преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение
//innerHTML - позволяет получить и изменить HTML код элемента на JavaScript
//textContent - возвращает, или задает текстовое содержимое элемента и всех его потомков
