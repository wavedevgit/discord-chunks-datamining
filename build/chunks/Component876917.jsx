/** Chunk was on web.js **/
/** chunk id: 876917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk803580 = require("./803580.js"),
  Chunk241822 = require("./241822.js");
let f = e => {
  let {
    skuId: t,
    isHighlighted: n,
    isPurchased: o,
    removeSetHeight: f = false,
    withScaleAnimation: p = false,
    delayProfileEffectIntro: _ = false
  } = e, [m, h] = i.useState(true);
  return (i.useEffect(() => {
    if (true !== p) h(false);
    else {
      let e = setTimeout(() => {
        h(false)
      }, s.JH);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p]), null == t) ? null : (0, r.jsxs)("div", {
    className: a()(u.previewContainer, {
      [u.previewContainerAnimation]: p,
      [u.previewContainerSetHeight]: !f
    }),
    children: [(0, r.jsx)("img", {
      src: d,
      alt: "",
      className: u.preview,
      "aria-hidden": true,
      draggable: false
    }), !m && (0, r.jsx)("div", {
      className: o ? u.purchasedEffect : true,
      children: (0, r.jsx)(c.Z, {
        skuId: t,
        useThumbnail: true,
        autoPlay: p,
        restartMethod: l.Q.FromStart,
        resetOnHover: true,
        isHovering: n,
        useOpacityOnHover: false,
        delayIntro: _,
        shopPreview: true
      })
    })]
  })
}