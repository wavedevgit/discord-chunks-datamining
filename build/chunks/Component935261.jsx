/** Chunk was on 1272 **/
/** chunk id: 935261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk479157 = require("./479157.js");

function m(e) {
  let {
    platform: t
  } = e;
  return t === p.YE.XBOX ? (0, r.jsx)(u.Z, {
    className: g.icon
  }) : t === p.YE.PLAYSTATION ? (0, r.jsx)(c.Z, {
    className: g.icon
  }) : null
}

function h(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, i = null != n ? (0, d.y)(n.type) : null, c = (0, a.e7)([s.Z], () => {
    var e, n;
    return null == (e = s.Z.getSessionById(null != (n = null == t ? true : t.sessionId) ? n : "")) ? true : e.clientInfo.os
  }), u = null != i ? i : c;
  if (null == u || !p.al.has(u)) return null;
  let h = null != n,
    b = h ? u === p.YE.XBOX ? f.intl.string(f.t.UjA4HX) : f.intl.string(f.t.QCw1oW) : u === p.YE.XBOX ? f.intl.format(f.t["ynEs/Y"], {}) : f.intl.format(f.t.TZ17Bg, {});
  return (0, r.jsxs)("div", {
    className: l()(g.root, h ? g.connecting : g.connected),
    children: [(0, r.jsx)(m, {
      platform: u
    }), (0, r.jsx)(o.Text, {
      color: h ? "text-strong" : "always-white",
      variant: "text-xs/medium",
      children: b
    })]
  })
}