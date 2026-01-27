/** Chunk was on web.js **/
/** chunk id: 331402, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698);
require("./216160.js");
var Chunk675100 = require("./675100.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk347064 = require("./347064.js"),
  Chunk306499 = require("./306499.js");
let d = e => {
  let {
    skuId: t,
    isHighlighted: n,
    removeSetHeight: a = false,
    withScaleAnimation: d = false,
    delayProfileEffectIntro: f = false
  } = e, [p, _] = i.useState(true);
  return (i.useEffect(() => {
    if (true !== d) _(false);
    else {
      let e = setTimeout(() => {
        _(false)
      }, 500);
      return () => {
        clearTimeout(e)
      }
    }
  }, [d]), null == t) ? null : (0, r.jsxs)("div", {
    className: o()(c.i1, {
      [c.qy]: d,
      [c.pE]: !a
    }),
    children: [(0, r.jsx)("img", {
      src: u,
      alt: "",
      className: c.VH,
      "aria-hidden": true,
      draggable: false
    }), !p && (0, r.jsx)(l.A, {
      skuId: t,
      useThumbnail: true,
      autoPlay: d,
      restartMethod: s.H.FromStart,
      resetOnHover: true,
      isHovering: n,
      useOpacityOnHover: false,
      delayIntro: f,
      shopPreview: true
    })]
  })
}