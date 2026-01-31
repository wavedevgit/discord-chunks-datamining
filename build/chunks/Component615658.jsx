/** Chunk was on 17534 **/
/** chunk id: 615658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk118019 = require("./118019.jsx"),
  Chunk383501 = require("./383501.js"),
  Chunk728458 = require("./728458.js"),
  Chunk38050 = require("./38050.js"),
  Chunk998740 = require("./998740.js"),
  Chunk572808 = require("./572808.js"),
  Chunk241080 = require("./241080.js");
let p = () => {
  var e, t;
  let n = (0, i.bG)([a.A], () => a.A.getChannelId()),
    p = (0, i.bG)([u.A], () => null != n && u.A.isUserConnected(n)),
    g = (0, c.n)(e => e.genre),
    f = (0, c.n)(e => e.songIndex),
    m = (0, c.n)(e => e.playRadio),
    b = (0, c.n)(e => e.globalMute),
    A = (0, c.n)(e => e.playNextSong),
    y = (0, c.n)(e => e.volumes),
    O = l.useRef(null),
    _ = l.useRef(null),
    j = l.useRef(null),
    x = (0, h.A)(g, f),
    v = (0, i.bG)([u.A], () => u.A.assets);
  return (l.useEffect(() => {
    let e = O.current;
    if (null != e && (null == x ? true : x.src) != null && (e.pause(), e.src = x.src, !b && m && p)) {
      var t;
      null == (t = e.play()) || t.catch(e => {
        o.A.captureException(e)
      })
    }
  }, [null == x ? true : x.src, b, m, p]), l.useEffect(() => {
    var e, t;
    let n = _.current,
      r = j.current;
    null != n && (b || !p ? n.pause() : null == (e = n.play()) || e.catch(e => {
      o.A.captureException(e)
    })), null != r && (b || !p ? r.pause() : null == (t = r.play()) || t.catch(e => {
      o.A.captureException(e)
    }))
  }, [b, p]), p) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.A, {
      ref: O,
      onEnded: A,
      volume: b ? 0 : y.radio,
      children: (0, r.jsx)("source", {
        src: null == x ? true : x.src
      })
    }), (0, r.jsx)(s.A, {
      ref: _,
      volume: b ? 0 : y.environment,
      children: (0, r.jsx)("source", {
        src: null == v || null == (e = v.sounds) ? true : e[d.qi.ENVIRONMENT]
      })
    }), (0, r.jsx)(s.A, {
      ref: j,
      volume: b ? 0 : y.campfire,
      children: (0, r.jsx)("source", {
        src: null == v || null == (t = v.sounds) ? true : t[d.qi.CAMPFIRE]
      })
    })]
  }) : null
}