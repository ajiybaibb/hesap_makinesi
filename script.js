function toplama(a,b)
    {
        document.write(a+b);
    }
    function cıkarma(a,b)
    {
        document.write(a-b);
    }
    function carpma(a,b)
    {
        document.write(a*b);
    }
    function bolme(a,b)
    {
        document.write(a/b);
    }
    var islem=prompt("islem giriniz")
var sayı1=Number(prompt("1. sayıyı giriniz"));
var sayı2=Number(prompt("2. sayıyı giriniz"));
switch(islem)
{
case "+":toplama(sayı1,sayı2)
break;
case "-":cıkarma(sayı1,sayı2);
break;
case "*":carpma(sayı1,sayı2);
break;
case "/":bolme(sayı1, sayı2);
break;
default:alert("YANLIŞ SEÇİM");
break;
}