/** Chunk was on web.js **/
/** chunk id: 511405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s,
  H: () => l
}), require("./368063.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk915486 = require("./915486.js");

function s(e) {
  return i().cloneDeepWith(e, e => (0, a.Bw)(e) ? {
    __tag__: "bigflag",
    data: e.toJSON()
  } : (0, o.lq)(e) ? {
    __tag__: "uint8array",
    data: Array.from(e)
  } : true)
}

function l(e) {
  return i().cloneDeepWith(e, e => null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__ ? a.vB(e.data) : (0, o.Bx)(e) ? new Uint8Array(e.data) : true)
}