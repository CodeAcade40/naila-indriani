class Naila{
    constructor(BF, resident, wish){
        this.BF = BF; 
        this.resident = resident;
        this.wish = wish;
    }

    getNaila(){
        console.log(this.BF);
    }
}

let naila = new Naila('Rizwan Ansari', 'Indonesia', 'living with Rizwan');
naila.getNaila();