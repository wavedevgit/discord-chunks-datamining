/** Chunk was on web.js **/
/** chunk id: 474447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk573648 = require("./573648.js"),
  Chunk855511 = require("./855511.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  var t;
  let n = null != (t = (0, i.A)(e)) ? t : "";
  switch (n) {
    case a.yTV.PS4:
    case a.yTV.PS5:
      return s.intl.formatToPlainString(s.t.A17aM8, {
        platform: n.toUpperCase()
      });
    case a.yTV.XBOX:
    case a.yTV.SAMSUNG:
      return s.intl.formatToPlainString(s.t.A17aM8, {
        platform: r.A.get(n).name
      });
    default:
      return s.intl.string(s.t["2TbM/G"])
  }
}