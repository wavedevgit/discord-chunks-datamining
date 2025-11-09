/** Chunk was on 1272 **/
/** chunk id: 935261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk981912 = require("./981912.js");

function g(e) {
  let {
    platform: t
  } = e;
  return t === p.YE.XBOX ? (0, r.jsx)(u.Z, {
    className: h.icon
  }) : t === p.YE.PLAYSTATION ? (0, r.jsx)(c.Z, {
    className: h.icon
  }) : null
}

function m(e) {
  let {
    voiceState: t,
    awaitingRemoteSessionInfo: n
  } = e, i = null != n ? (0, d.y)(n.type) : null, c = (0, a.e7)([o.Z], () => {
    var e, n;
    return null == (e = o.Z.getSessionById(null != (n = null == t ? true : t.sessionId) ? n : "")) ? true : e.clientInfo.os
  }), u = null != i ? i : c;
  if (null == u || !p.al.has(u)) return null;
  let m = null != n,
    _ = m ? u === p.YE.XBOX ? f.intl.string(f.t.UjA4HX) : f.intl.string(f.t.QCw1oW) : u === p.YE.XBOX ? f.intl.format(f.t["ynEs/Y"], {}) : f.intl.format(f.t.TZ17Bg, {});
  return (0, r.jsxs)("div", {
    className: l()(h.root, m ? h.connecting : h.connected),
    children: [(0, r.jsx)(g, {
      platform: u
    }), (0, r.jsx)(s.Text, {
      color: m ? "header-primary" : "always-white",
      variant: "text-xs/medium",
      children: _
    })]
  })
}