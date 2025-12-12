/** Chunk was on web.js **/
/** chunk id: 977683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk410030 = require("./410030.js"),
  Chunk695346 = require("./695346.js"),
  Chunk798628 = require("./798628.js"),
  Chunk275344 = require("./275344.jsx"),
  Chunk918088 = require("./918088.js"),
  Chunk562293 = require("./562293.js");

function u(e, t) {
  var n;
  let u = (0, s.v)(e),
    d = (0, o.cE)(u.getChannelId())[u.id],
    f = (0, c.Z)(null == (n = u.poll) ? true : n.expiry),
    p = a.Yk.useSetting(),
    _ = (0, i.ZP)(),
    m = null != t ? t : _;
  return r.useMemo(() => (0, l.ZP)(u, d, {
    animateEmoji: p,
    theme: m,
    formattedExpirationLabel: f
  }), [p, u, d, f, m])
}