/** Chunk was on web.js **/
/** chunk id: 470008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk996483 = require("./996483.js"),
  Chunk972409 = require("./972409.js");
class a extends Chunk972409.w {
  innerPatternString(e) {
    return "(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)"
  }
  innerExtract(e, t) {
    let n = t[1].toLowerCase(),
      i = e.createParsingComponents();
    switch (n) {
      case "сьогодні":
        return r.Ec(e.reference);
      case "вчора":
        return r.jI(e.reference);
      case "завтра":
        return r.uf(e.reference);
      case "післязавтра":
        return r.AV(e.reference, 2);
      case "післяпіслязавтра":
        return r.AV(e.reference, 3);
      case "позавчора":
        return r.ti(e.reference, 2);
      case "позапозавчора":
        return r.ti(e.reference, 3)
    }
    return i
  }
}