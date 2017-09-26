function Base(thing) {
    this.getThing = function() {
        return thing;
    };
}
Base.prototype.cappedThing = function() {
    return this.getThing().toUpperCase();
};

function Derived(thing) {
    Base.call(this, thing);
}
Derived.prototype = Object.create(Base.prototype);

var d = new Derived("foo");
console.log(d.cappedThing());
