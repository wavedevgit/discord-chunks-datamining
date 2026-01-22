/** Chunk was on web.js **/
/** chunk id: 704413, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  let u = (0, o.M)(e),
    d = (0, s.d$)(u.getChannelId())[u.id],
    f = (0, c.A)(null == (n = u.poll) ? true : n.expiry),
    p = a.Sf.useSetting(),
    _ = (0, i.Ay)(),
    h = null != t ? t : _;
  return r.useMemo(() => (0, l.Ay)(u, d, {
    animateEmoji: p,
    theme: h,
    formattedExpirationLabel: f
  }), [p, u, d, f, h])
}