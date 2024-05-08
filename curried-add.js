function curriedAdd(total) {
    if(total === undefined) return 0;
    return function add(y){
        if(y === undefined) return total
        total+=y
        return add
    }
}

module.exports = { curriedAdd };
