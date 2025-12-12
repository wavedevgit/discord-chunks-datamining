/** Chunk was on web.js **/
/** chunk id: 468083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk727916 = require("./727916.js");
let i = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"),
  o = 1,
  a = 2;
class s extends Chunk727916.Z {
  innerPattern() {
    return i
  }
  innerExtract(e, t) {
    let n = parseInt(t[a]),
      r = parseInt(t[o]);
    return e.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n)
  }
}