class baseObject{
    width: number = 0;
    hight: number = 0;
    constructor(width:number, hight:number) {
        this.width = width;
        this.hight = hight;
    }
}
class rectangel extends baseObject{
    constructor(width:number,hight:number) {
        super(width,hight);
    }
     callsize() {
        return this.width * this.hight;
    }
}
let myobj = new rectangel(5, 2);
console.log(myobj.callsize());