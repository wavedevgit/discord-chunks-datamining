/** Chunk was on web.js **/
/** chunk id: 930958, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => o
}), require("./747238.js"), require("./812715.js"), require("./733351.js");
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
  i = /(\n|\t|\s)/g,
  a = e => e.replace(r, "").replace(i, " "),
  o = e => null == e ? [] : a(e).trim().split(" ")