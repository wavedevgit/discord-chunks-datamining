/** Chunk was on 59275 **/
/** chunk id: 613258, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575593 = require("./575593.js"),
  Chunk331402 = require("./331402.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk929283 = require("./929283.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk289920 = require("./289920.js");
let b = {
    x: 160,
    y: 160
  },
  g = [{
    left: 0,
    top: 20,
    rotation: false,
    size: b,
    skuId: "1212569433839636530"
  }, {
    left: 110,
    top: 48,
    rotation: false,
    size: b,
    skuId: "1144308439720394944"
  }, {
    left: 230,
    top: 12,
    rotation: 8,
    size: b,
    skuId: "1228251144065777765"
  }, {
    left: 354,
    top: 44,
    rotation: false,
    size: b,
    skuId: "1343751620965564426"
  }, {
    left: 470,
    top: 52,
    rotation: 12,
    size: b,
    skuId: "1157407831348228141"
  }, {
    left: 600,
    top: 28,
    rotation: false,
    size: b,
    skuId: "1197344326133502032"
  }, {
    left: 740,
    top: 12,
    rotation: false,
    size: b,
    skuId: "1232071712695386162"
  }, {
    left: 870,
    top: 40,
    rotation: false,
    size: b,
    skuId: "1220513977683935373"
  }, {
    left: 1010,
    top: 30,
    rotation: 15,
    size: b,
    skuId: "1144046002110738634"
  }, {
    left: 1140,
    top: 52,
    rotation: false,
    size: b,
    skuId: "1271174324375519273"
  }, {
    left: 1270,
    top: 32,
    rotation: 25,
    size: b,
    skuId: "1237653964582031400"
  }, {
    left: 1400,
    top: 33,
    rotation: false,
    size: b,
    skuId: "1217625794382401577"
  }],
  p = e => {
    let {
      peaking: t,
      transitioning: l,
      style: s
    } = e, b = window.innerHeight, [p, m] = r.useState(false), h = g.map(e => {
      let {
        skuId: t
      } = e;
      return c.A.getProduct(t)
    });
    return r.useEffect(() => {
      l && setTimeout(() => {
        m(true)
      }, d.H1)
    }, [l]), (0, n.jsx)("div", {
      style: s,
      className: a()(f.rA, {
        [f.Kb]: t,
        [f.pp]: p
      }),
      children: g.map((e, t) => {
        var r, s;
        let {
          top: a,
          left: c,
          rotation: g,
          size: p,
          skuId: m
        } = e, E = null == (r = h[t]) ? true : r.items[0], v = null == (s = h[t]) ? true : s.type, A = v === i.R.AVATAR_DECORATION ? 384 : 512;
        return (0, n.jsxs)("div", {
          className: f.LY,
          style: {
            top: l ? -b - A : a,
            left: l ? "".concat(c - 75 - 350 * Math.random()) : c,
            transform: "rotate(".concat(g, "deg)"),
            height: p.y,
            width: p.x,
            transitionDelay: "".concat(Math.random() / 3, "s"),
            transitionDuration: "".concat(d.H1 - 200 * Math.random(), "ms")
          },
          children: [null != E && v === i.R.AVATAR_DECORATION && (0, n.jsx)(u.i, {
            item: E
          }), null != E && v === i.R.PROFILE_EFFECT && (0, n.jsx)(o.A, {
            skuId: E.skuId,
            isHighlighted: true
          })]
        }, m + t)
      })
    })
  }