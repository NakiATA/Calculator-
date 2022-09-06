// display of signs and numbers 
function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}

//screen cleanup function 
function clean() {
    document.form.textview.value = "";
}
// selective cleaning function
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
//  result calculation function
function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}
