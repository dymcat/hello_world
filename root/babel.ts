
const hello : string = "Hello World !";
console.log(hello);

class PrinterClass {
   doPrint():void {
      console.log("父类的 doPrint() 方法。");
   }
}
 
class StringPrinter extends PrinterClass {
   doPrint():void {
      super.doPrint(); // 调用父类的函数
      console.log("子类的 doPrint()方法。");
   }
}

var p=new StringPrinter();
p.doPrint();
