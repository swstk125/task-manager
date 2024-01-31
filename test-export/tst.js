class test_export{
    constructor(){
        this.ab = true;
    }

    getValue(val){
        if(ab)  console.log(val);
    }
}

module.exports = {
    getInst: () => {
        const x = test_export();
        return x;
    }
}