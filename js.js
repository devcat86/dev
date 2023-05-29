function check() {
    var x = document.getElementById("jsinput").value;
    if(x.value == "1"){
    document.getElementById('jsdiv').innerText = 2;
    }
    else{
        document.getElementById('jsdiv').innerText = x;
    }
}
