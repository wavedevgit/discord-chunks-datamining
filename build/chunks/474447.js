/** Chunk was on 88474 **/
/** chunk id: 474447, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk573648 = require("./573648.js"),
  Chunk153331 = require("./153331.jsx"),
  Chunk855511 = require("./855511.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  var s;
  let c = null != (s = (0, l.A)(e)) ? s : "",
    u = t === i.O.VOICE_CHANNEL && n;
  switch (c) {
    case a.yTV.PS4:
    case a.yTV.PS5:
      return o.intl.formatToPlainString(o.t.A17aM8, {
        platform: c.toUpperCase()
      });
    case a.yTV.XBOX:
    case a.yTV.SAMSUNG:
      return o.intl.formatToPlainString(o.t.A17aM8, {
        platform: r.A.get(c).name
      });
    default:
      return o.intl.string(u ? o.t.J4MQFX : o.t["2TbM/G"])
  }
}