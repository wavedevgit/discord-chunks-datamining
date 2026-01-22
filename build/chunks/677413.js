/** Chunk was on web.js **/
/** chunk id: 677413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a,
  U: () => i
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./733351.js");
let r = "@silent",
  i = new RegExp("^".concat(r, "(\\s|$)"));

function a(e) {
  return null == e ? [false, ""] : null == e.match(i) ? [false, e] : [true, e.substring(r.length).trim()]
}