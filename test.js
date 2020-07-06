function varTest() {
  var x = 1;
  {
    var x = 2;
    console.log(x);
  }

  console.log(x);
}

function letTest() {
  let x = 1;
  {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

varTest();
console.log("------");
letTest();
