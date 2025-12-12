/** Chunk was on web.js **/
/** chunk id: 11513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => a
}), require("./704826.js"), require("./35282.js"), require("./781311.js");
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
  i = /(\n|\t|\s)/g,
  o = e => e.replace(r, "").replace(i, " "),
  a = e => null == e ? [] : o(e).trim().split(" ")