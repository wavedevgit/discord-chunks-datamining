/** Chunk was on 91173 **/
/** chunk id: 977683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk410030 = require("./410030.js"),
  Chunk695346 = require("./695346.js"),
  Chunk798628 = require("./798628.js"),
  Chunk275344 = require("./275344.jsx"),
  Chunk918088 = require("./918088.js"),
  Chunk562293 = require("./562293.js");

function u(e, t) {
  var n;
  let u = (0, a.v)(e),
    d = (0, o.cE)(u.getChannelId())[u.id],
    p = (0, c.Z)(null == (n = u.poll) ? true : n.expiry),
    m = l.Yk.useSetting(),
    f = (0, i.ZP)(),
    g = null != t ? t : f;
  return r.useMemo(() => (0, s.ZP)(u, d, {
    animateEmoji: m,
    theme: g,
    formattedExpirationLabel: p
  }), [m, u, d, p, g])
}