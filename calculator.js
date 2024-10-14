function add()
 {
    var x = Number(document.getElementById("a").value);
    var y = Number(document.getElementById("b").value);

    var z = x+y;
    document.getElementById("answer").value=z;
    console.log(z);
};

function minus  ()
 {
    var x = Number(document.getElementById("a").value);
    var y = Number(document.getElementById("b").value);

    var z = x-y;
    document.getElementById("answer").value=z;
    console.log(z);
};

function multiply()
 {
    var x = Number(document.getElementById("a").value);
    var y = Number(document.getElementById("b").value);

    var z = x*y;
    document.getElementById("answer").value=z;
    console.log(z);
};

function divide()
 {
    var x = Number(document.getElementById("a").value);
    var y = Number(document.getElementById("b").value);

    var z = x/y;
    document.getElementById("answer").value=z;
    console.log(z);
};



