
class Concept extends EventEmitter {
    constructor(name, context) {
        super();

        this.name = name;

        this.models = new Map();
        this.storage = new Map();



        this.on("message", this.handleMessage.bind(this));
    }
    addModel(name) {
        if (!this.models.has(name)) {
            this.models.set(name, create(lm.Model)());
            this.storage.set(name, create(lm.Storage)());
        }
    }
    classify(string) {

        var gram = new Array(this.context).map(() => null);

        return tokenize(string).reduce((r, t, i) => {

            gram.shift();
            gram.push(t);

            this.models.forEach((m, k) => {
                r[k] = (r[k] || 1) * m.likelyhood(gram);
            });

            return r;
        }, {});
    }
    static createMap(n, ...names) {
        var o = {};
        for (var name of names) {
            o[name] = new Concept(name, n);
        }
        return o;
    }
    train(name, tokens) {
        if (!this.models.has(name)) {
            this.addModel(name);
        }
        this.models.get(name).train(this.context, tokens);
    }
    generateMessage(length) {
        return this.models.get(name).generateRandomPhrase(length);
    }
    handleMessage(k, msg) {
        this.train(k, tokenize(msg));
    }

}
