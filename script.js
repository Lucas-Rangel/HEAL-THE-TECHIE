class Player {
    set name(n) {
        this._name = n;
    }
    set title(t) {
        this._name = t;
    }
    set meter(m) {
        this._meter = m;
    }
    set action(a) {
        this._action = a;
    }
    set state(s) {
        this._state = s;
    }
    get name() {
        return this._name;
    }
    get title() {
        return this._title;
    }
    get meter() {
        return this._meter;
    }
    get action() {
        return this._action;
    }
    get state() {
        return this._state;
    }
}