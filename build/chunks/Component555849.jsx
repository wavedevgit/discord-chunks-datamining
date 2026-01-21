/** Chunk was on 82124 **/
/** chunk id: 555849, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk62170 = require("./62170.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk960048 = require("./960048.js"),
  Chunk627097 = require("./627097.js"),
  Chunk805422 = require("./805422.js"),
  Chunk390551 = require("./390551.js"),
  Chunk779324 = require("./779324.js");
let f = () => {
  var e, t;
  let n = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
    f = (0, l.e7)([u.Z], () => null != n && u.Z.isUserConnected(n)),
    h = (0, c.O)(e => e.genre),
    g = (0, c.O)(e => e.songIndex),
    m = (0, c.O)(e => e.playRadio),
    b = (0, c.O)(e => e.globalMute),
    y = (0, c.O)(e => e.playNextSong),
    v = (0, c.O)(e => e.volumes),
    O = i.useRef(null),
    j = i.useRef(null),
    x = i.useRef(null),
    C = (0, p.Z)(h, g),
    E = (0, l.e7)([u.Z], () => u.Z.assets);
  return (i.useEffect(() => {
    let e = O.current;
    if (null != e && (null == C ? true : C.src) != null && (e.pause(), e.src = C.src, !b && m && f)) {
      var t;
      null == (t = e.play()) || t.catch(e => {
        s.Z.captureException(e)
      })
    }
  }, [null == C ? true : C.src, b, m, f]), i.useEffect(() => {
    var e, t;
    let n = j.current,
      r = x.current;
    null != n && (b || !f ? n.pause() : null == (e = n.play()) || e.catch(e => {
      s.Z.captureException(e)
    })), null != r && (b || !f ? r.pause() : null == (t = r.play()) || t.catch(e => {
      s.Z.captureException(e)
    }))
  }, [b, f]), f) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Z, {
      ref: O,
      onEnded: y,
      volume: b ? 0 : v.radio,
      children: (0, r.jsx)("source", {
        src: null == C ? true : C.src
      })
    }), (0, r.jsx)(a.Z, {
      ref: j,
      volume: b ? 0 : v.environment,
      children: (0, r.jsx)("source", {
        src: null == E || null == (e = E.sounds) ? true : e[d.wv.ENVIRONMENT]
      })
    }), (0, r.jsx)(a.Z, {
      ref: x,
      volume: b ? 0 : v.campfire,
      children: (0, r.jsx)("source", {
        src: null == E || null == (t = E.sounds) ? true : t[d.wv.CAMPFIRE]
      })
    })]
  }) : null
}