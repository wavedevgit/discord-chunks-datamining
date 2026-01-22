/** Chunk was on web.js **/
/** chunk id: 843959, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk355418 = require("./355418.js");
let i = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i"),
  a = 1,
  s = 2;
class o extends Chunk355418.c {
  innerPattern() {
    return i
  }
  innerExtract(e, t) {
    let n = parseInt(t[s]),
      r = parseInt(t[a]);
    return e.createParsingComponents().imply("day", 1).assign("month", r).assign("year", n)
  }
}