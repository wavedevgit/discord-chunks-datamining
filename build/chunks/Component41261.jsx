/** Chunk was on 21738 **/
/** chunk id: 41261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk528767 = require("./528767.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk30529 = require("./30529.js"),
  Chunk544105 = require("./544105.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk839549 = require("./839549.js");

function A(e) {
  let {
    platform: t
  } = e;
  return t === p.f$.XBOX ? (0, r.jsx)(u.A, {
    className: h.Kk
  }) : t === p.f$.PLAYSTATION ? (0, r.jsx)(c.A, {
    className: h.Kk
  }) : null
}

function g(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, i = null != n ? (0, d.X)(n.type) : null, c = (0, a.bG)([o.A], () => {
    var e, n;
    return null == (n = o.A.getSessionById(null != (e = null == t ? true : t.sessionId) ? e : "")) ? true : n.clientInfo.os
  }), u = null != i ? i : c;
  if (null == u || !p.hv.has(u)) return null;
  let g = null != n,
    m = g ? u === p.f$.XBOX ? f.intl.string(f.t.UjA4HX) : f.intl.string(f.t.QCw1oW) : u === p.f$.XBOX ? f.intl.format(f.t["ynEs/Y"], {}) : f.intl.format(f.t.TZ17Bg, {});
  return (0, r.jsxs)("div", {
    className: l()(h.zr, g ? h.jI : h.aW),
    children: [(0, r.jsx)(A, {
      platform: u
    }), (0, r.jsx)(s.Text, {
      color: g ? "text-strong" : "always-white",
      variant: "text-xs/medium",
      children: m
    })]
  })
}