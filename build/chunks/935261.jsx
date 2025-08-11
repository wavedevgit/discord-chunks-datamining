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
  Chunk356849 = require("./356849.js");

function g(e) {
  let {
    platform: t
  } = e;
  return t === p.YE.XBOX ? <u.Z className={h.icon} /> : t === p.YE.PLAYSTATION ? <c.Z className={h.icon} /> : null
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
    b = m ? u === p.YE.XBOX ? f.intl.string(f.t.UjA4HR) : f.intl.string(f.t.QCw1oa) : u === p.YE.XBOX ? f.intl.format(f.t["ynEs/f"], {}) : f.intl.format(f.t.TZ17Bg, {});
  return <div className={l()(h.root, m ? h.connecting : h.connected)}>{<g platform={u} />}{<o.Text color={m ? "header-primary" : "always-white"} variant={"text-xs/medium"}>{b}</o.Text>}</div>
}