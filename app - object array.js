var cl = console.log;
var Person = {
    fname: "jhon",
    lname: "doe",
    age: 54,
    skills: ["html", "css", "javascript", "typescript", "angular"]
};
for (var _i = 0, _a = Person.skills; _i < _a.length; _i++) {
    var i = _a[_i];
    cl(i.toUpperCase());
}
