/** Chunk was on 1272 **/
/** chunk id: 935261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797258 = require("./797258.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk565473 = require("./565473.js"),
  Chunk927923 = require("./927923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk528833 = require("./528833.js");

function g(e) {
  let {
    platform: t
  } = e;
  return t === p.YE.XBOX ? (0, r.jsx)(u.Z, {
    className: f.icon
  }) : t === p.YE.PLAYSTATION ? (0, r.jsx)(c.Z, {
    className: f.icon
  }) : null
}

function m(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, i = null != n ? (0, d.y)(n.type) : null, c = (0, a.e7)([s.Z], () => {
    var e, n;
    return null == (e = s.Z.getSessionById(null != (n = null == t ? true : t.sessionId) ? n : "")) ? true : e.clientInfo.os
  }), u = null != i ? i : c;
  if (null == u || !p.al.has(u)) return null;
  let m = null != n,
    b = m ? u === p.YE.XBOX ? h.intl.string(h.t.UjA4HR) : h.intl.string(h.t.QCw1oa) : u === p.YE.XBOX ? h.intl.format(h.t["ynEs/f"], {}) : h.intl.format(h.t.TZ17Bg, {});
  return (0, r.jsxs)("div", {
    className: l()(f.root, m ? f.connecting : f.connected),
    children: [(0, r.jsx)(g, {
      platform: u
    }), (0, r.jsx)(o.Text, {
      color: m ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: b
    })]
  })
}