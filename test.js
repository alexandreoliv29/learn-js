/* let obj = {
    get prop() {
        return 'valor';
    }
};

console.log("obj.prop: ", obj.prop)
 */
const obj = {
    prop: '',

    set prop(value) {
        this.prop = value;
    }
};

obj.prop = 'novo valor';

console.log(obj.prop);