/** Chunk was on web.js **/
/** chunk id: 92277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l,
  g: () => o
}), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk460288 = require("./460288.js");

function o(e) {
  return i().cloneDeepWith(e, e => (0, a.H0)(e) ? {
    __tag__: "bigflag",
    data: e.toJSON()
  } : (0, s.mg)(e) ? {
    __tag__: "uint8array",
    data: Array.from(e)
  } : true)
}

function l(e) {
  return i().cloneDeepWith(e, e => null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__ ? a.iu(e.data) : (0, s.I)(e) ? new Uint8Array(e.data) : true)
}