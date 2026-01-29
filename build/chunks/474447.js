/** Chunk was on 47995 **/
/** chunk id: 474447, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk573648 = require("./573648.js"),
  Chunk855511 = require("./855511.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  var t;
  let n = null != (t = (0, l.A)(e)) ? t : "";
  switch (n) {
    case i.yTV.PS4:
    case i.yTV.PS5:
      return a.intl.formatToPlainString(a.t.A17aM8, {
        platform: n.toUpperCase()
      });
    case i.yTV.XBOX:
    case i.yTV.SAMSUNG:
      return a.intl.formatToPlainString(a.t.A17aM8, {
        platform: r.A.get(n).name
      });
    default:
      return a.intl.string(a.t["2TbM/G"])
  }
}