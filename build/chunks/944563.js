/** Chunk was on web.js **/
/** chunk id: 944563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk715870 = require("./715870.js"),
  Chunk344368 = require("./344368.js");
class a extends Chunk344368.F {
  innerPatternString(e) {
    return `(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      i = e.createParsingComponents();
    switch (n) {
      case "сьогодні":
        return r.Lg(e.reference);
      case "вчора":
        return r.Cv(e.reference);
      case "завтра":
        return r.Ro(e.reference);
      case "післязавтра":
        return r.o1(e.reference, 2);
      case "післяпіслязавтра":
        return r.o1(e.reference, 3);
      case "позавчора":
        return r.MQ(e.reference, 2);
      case "позапозавчора":
        return r.MQ(e.reference, 3)
    }
    return i
  }
}