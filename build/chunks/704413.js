/** Chunk was on 9753 **/
/** chunk id: 704413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk736653 = require("./736653.js"),
  Chunk253932 = require("./253932.js"),
  Chunk862780 = require("./862780.js"),
  Chunk21878 = require("./21878.jsx"),
  Chunk951727 = require("./951727.js"),
  Chunk708676 = require("./708676.js");

function u(e, t) {
  var n;
  let u = (0, s.M)(e),
    d = (0, a.d$)(u.getChannelId())[u.id],
    p = (0, c.A)(null == (n = u.poll) ? true : n.expiry),
    m = l.Sf.useSetting(),
    f = (0, i.Ay)(),
    g = null != t ? t : f;
  return r.useMemo(() => (0, o.Ay)(u, d, {
    animateEmoji: m,
    theme: g,
    formattedExpirationLabel: p
  }), [m, u, d, p, g])
}