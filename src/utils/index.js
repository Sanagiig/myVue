export function processClass(cls) {
    var res = [];
    for (var i = 0, len = cls.length; i < len; i++) {
        var klass = cls[i];
        if (typeof klass === 'string') {
            res.push(klass);
        } else if (klass instanceof Array) {
            res = res.concat(processClass(klass));
        } else if (klass != null && klass instanceof Object) {
            for (var key in klass) {
                if (klass[key]) {
                    res.push(key);
                }
            }
        }
    }

    return res;
}