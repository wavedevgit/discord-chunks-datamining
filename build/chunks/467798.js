/** Chunk was on web.js **/
/** chunk id: 467798, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  v: () => i
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./781311.js");
let r = "@silent",
  i = new RegExp("^".concat(r, "(\\s|$)"));

function a(e) {
  return null == e ? [false, ""] : null == e.match(i) ? [false, e] : [true, e.substring(r.length).trim()]
}