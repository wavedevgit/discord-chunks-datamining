/** Chunk was on web.js **/
/** chunk id: 890346, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk715870 = require("./715870.js"),
  Chunk522677 = require("./522677.js");
class o extends Chunk522677.F {
  innerPatternString(e) {
    return `(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)`
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      i = e.createParsingComponents();
    switch (n) {
      case "сегодня":
        return r.Lg(e.reference);
      case "вчера":
        return r.Cv(e.reference);
      case "завтра":
        return r.Ro(e.reference);
      case "послезавтра":
        return r.o1(e.reference, 2);
      case "послепослезавтра":
        return r.o1(e.reference, 3);
      case "позавчера":
        return r.MQ(e.reference, 2);
      case "позапозавчера":
        return r.MQ(e.reference, 3)
    }
    return i
  }
}