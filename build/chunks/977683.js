/** Chunk was on 66866 **/
/** chunk id: 977683, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk73800 = require("./73800.js"),
  Chunk410030 = require("./410030.js"),
  Chunk695346 = require("./695346.js"),
  Chunk798628 = require("./798628.js"),
  Chunk275344 = require("./275344.jsx"),
  Chunk918088 = require("./918088.js"),
  Chunk562293 = require("./562293.js");

function u(e, t) {
  var n;
  let u = (0, o.v)(e),
    d = (0, a.cE)(u.getChannelId())[u.id],
    p = (0, c.Z)(null == (n = u.poll) ? true : n.expiry),
    m = l.Yk.useSetting(),
    f = (0, i.ZP)(),
    _ = null != t ? t : f;
  return r.useMemo(() => (0, s.ZP)(u, d, {
    animateEmoji: m,
    theme: _,
    formattedExpirationLabel: p
  }), [m, u, d, p, _])
}