/** Chunk was on 45620 **/
/** chunk id: 531864, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk979554 = require("./979554.js"),
  Chunk876917 = require("./876917.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk616066 = require("./616066.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk980800 = require("./980800.js");
let g = {
    x: 160,
    y: 160
  },
  f = [{
    left: 0,
    top: 20,
    rotation: false,
    size: g,
    skuId: "1212569433839636530"
  }, {
    left: 110,
    top: 48,
    rotation: false,
    size: g,
    skuId: "1144308439720394944"
  }, {
    left: 230,
    top: 12,
    rotation: 8,
    size: g,
    skuId: "1228251144065777765"
  }, {
    left: 354,
    top: 44,
    rotation: false,
    size: g,
    skuId: "1343751620965564426"
  }, {
    left: 470,
    top: 52,
    rotation: 12,
    size: g,
    skuId: "1157407831348228141"
  }, {
    left: 600,
    top: 28,
    rotation: false,
    size: g,
    skuId: "1197344326133502032"
  }, {
    left: 740,
    top: 12,
    rotation: false,
    size: g,
    skuId: "1232071712695386162"
  }, {
    left: 870,
    top: 40,
    rotation: false,
    size: g,
    skuId: "1220513977683935373"
  }, {
    left: 1010,
    top: 30,
    rotation: 15,
    size: g,
    skuId: "1144046002110738634"
  }, {
    left: 1140,
    top: 52,
    rotation: false,
    size: g,
    skuId: "1271174324375519273"
  }, {
    left: 1270,
    top: 32,
    rotation: 25,
    size: g,
    skuId: "1237653964582031400"
  }, {
    left: 1400,
    top: 33,
    rotation: false,
    size: g,
    skuId: "1217625794382401577"
  }],
  h = e => {
    let {
      peaking: t,
      transitioning: n,
      style: i
    } = e, g = window.innerHeight, [h, C] = l.useState(false), m = f.map(e => {
      let {
        skuId: t
      } = e;
      return c.Z.getProduct(t)
    });
    return l.useEffect(() => {
      n && setTimeout(() => {
        C(true)
      }, d.lb)
    }, [n]), (0, r.jsx)("div", {
      style: i,
      className: a()(p.jumbleWrapper, {
        [p.peaking]: t,
        [p.transitioned]: h
      }),
      children: f.map((e, t) => {
        var l, i;
        let {
          top: a,
          left: c,
          rotation: f,
          size: h,
          skuId: C
        } = e, _ = null == (l = m[t]) ? true : l.items[0], b = null == (i = m[t]) ? true : i.type, v = b === o.Z.AVATAR_DECORATION ? 384 : 512;
        return (0, r.jsxs)("div", {
          className: p.asset,
          style: {
            top: n ? -g - v : a,
            left: n ? "".concat(c - 75 - 350 * Math.random()) : c,
            transform: "rotate(".concat(f, "deg)"),
            height: h.y,
            width: h.x,
            transitionDelay: "".concat(Math.random() / 3, "s"),
            transitionDuration: "".concat(d.lb - 200 * Math.random(), "ms")
          },
          children: [null != _ && b === o.Z.AVATAR_DECORATION && (0, r.jsx)(u.R, {
            item: _
          }), null != _ && b === o.Z.PROFILE_EFFECT && (0, r.jsx)(s.Z, {
            skuId: _.skuId,
            isPurchased: false,
            isHighlighted: true
          })]
        }, C + t)
      })
    })
  }