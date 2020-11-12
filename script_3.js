function quad(a,b,c) {
    if(a==0) return "false, a=0 is not applicable";
    var D = b*b-4*a*c;
    var x1,x2;
    if(D>0) {
        x1=(-b+Math.sqrt(D)/2*a);
        x2=(-b-Math.sqrt(D)/2*a);
        return "Koefficienti a="+a+", b="+b+", c="+c+"\nKorni uravnenija: X1 = "+x1+", X2 = "+x2+"\n Diskrimant (D) =" + D;
    } else if (D==0) {
        x1=-b/(2*a); 
        return "Koefficienti a="+a+", b="+b+", c="+c+"\nKorni uravnenija: X1 = "+x1+"\n Diskrimant (D) =" + D;
    } else if (D<0) return "Koefficienti a="+a+", b="+b+", c="+c+"\nKornej net:\nDiscriminant(D)=" + D;
 
}
function prog() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = quad(a,b,c);
    document.getElementById('result').textContent = result;
    document.getElementById('answer').style.display = 'block';
}
