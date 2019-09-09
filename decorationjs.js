window.onload = function () {
    let btn = document.getElementById('btndecorate');
    btn.onclick = function(){
        setInterval(decorate3, 500);
    }

    let blg = document.getElementById('checkbling');
    blg.onchange = bling2;

    document.getElementById('btnMalkovitch').onclick = malkovitch;
}

function decorate() {
    alert("Hello, World !");
}

function decorate2() {
    document.getElementById('textbody').style.fontSize = '24pt';
}

function decorate3() {
    let el = document.getElementById('textbody');
    let size = el.style.fontSize ? el.style.fontSize : '12pt';
    size = parseInt(size) + 2 + 'pt';
    el.style.fontSize = size;
}

function bling(){
    alert('Hy bling is ticked.');
}

function bling2() {
    let txtbody = document.getElementById('textbody');
    if (this.checked) {
        txtbody.style.fontWeight = 'bold';
        txtbody.style.color = 'green';
        txtbody.style.textDecoration = 'underline';
        document.body.style.backgroundImage = 'url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)';
    }else{
        txtbody.style.fontWeight = 'normal';
        txtbody.style.color = 'unset';
        txtbody.style.textDecoration = 'none';
    }
}

function malkovitch() {
    let str = document.getElementById('textbody').value;
    let arrwords = str.split(' ');
    let result = arrwords.map(function (item) {
        if(item.length >= 5)
            return "Malkovich";
        else
            return item;
    });
    document.getElementById('textbody').value = result.join(' ');
}
