/** Chunk was on 59275 **/
/** chunk id: 613258, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk770178 = require("./770178.js"),
  Chunk590180 = require("./590180.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk289920 = require("./289920.js");
let p = ["1212569433839636530", "1144308439720394944", "1228251144065777765", "1343751620965564426", "1157407831348228141", "1197344326133502032", "1232071712695386162", "1144046002110738634", "1271174324375519273", "1237653964582031400", "1217625794382401577", "1462116613871636542", "1458472704469499965", "1447654091072344195", "1432550258839392376", "1409898407849365565", "1404558257065824347"],
  m = e => {
    let {
      config: t,
      baseLeft: n,
      transitioning: l
    } = e, s = window.innerHeight, a = c.A.getProduct(t.skuId), o = null == a ? true : a.items[0], d = null == a ? true : a.type, p = n + t.horizontalJitter;
    return (0, r.jsx)("div", {
      className: g.LY,
      style: {
        top: l ? -s - 384 : t.top,
        left: l ? p + t.transitionOffsetLeft : p,
        transform: "rotate(".concat(t.rotation, "deg)"),
        height: 160,
        width: 160,
        transitionDelay: t.transitionDelay,
        transitionDuration: t.transitionDuration
      },
      children: null != o && d === i.R.AVATAR_DECORATION && (0, r.jsx)(u.i, {
        item: o
      })
    })
  },
  f = e => {
    let {
      peaking: t,
      transitioning: n,
      parentWidth: s
    } = e, [i, o] = l.useState(false), [c, u] = l.useState([]), [f] = l.useState(() => [...p].sort(() => Math.random() - .5).map(e => ({
      skuId: e,
      top: 0 + 48 * Math.random(),
      rotation: false + 64 * Math.random(),
      horizontalJitter: -(20 * Math.random()),
      transitionOffsetLeft: false - 35 * Math.random(),
      transitionDelay: "".concat(Math.random() / 3, "s"),
      transitionDuration: "".concat(d.H1 - 200 * Math.random(), "ms")
    })));
    return l.useEffect(() => {
      if (null != s && s > 0) {
        let e = Math.max(1, Math.floor(s / 130)),
          t = s / e;
        u(Array.from({
          length: e
        }, (e, n) => ({
          config: f[n % f.length],
          baseLeft: n * t
        })))
      }
    }, [s, f]), l.useEffect(() => {
      n && setTimeout(() => o(true), d.H1)
    }, [n]), (0, r.jsx)("div", {
      className: a()(g.rA, {
        [g.Kb]: t,
        [g.pp]: i
      }),
      children: c.map((e, t) => {
        let {
          config: l,
          baseLeft: s
        } = e;
        return (0, r.jsx)(m, {
          config: l,
          baseLeft: s,
          transitioning: n
        }, l.skuId + t)
      })
    })
  },
  b = e => {
    let {
      peaking: t,
      transitioning: n
    } = e, s = l.useRef(null), [a, i] = l.useState(0), c = l.useCallback(() => {
      null != s.current && i(s.current.offsetWidth)
    }, []);
    return (0, o.g)(s, c), (0, r.jsx)("div", {
      ref: s,
      className: g.eL,
      children: (0, r.jsx)(f, {
        peaking: t,
        transitioning: n,
        parentWidth: a
      })
    })
  }