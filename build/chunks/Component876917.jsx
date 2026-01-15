/** Chunk was on web.js **/
/** chunk id: 876917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk119837 = require("./119837.js"),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk585258 = require("./585258.js"),
  Chunk241822 = require("./241822.js");
let f = e => {
  let {
    skuId: t,
    isHighlighted: n,
    removeSetHeight: a = false,
    withScaleAnimation: f = false,
    delayProfileEffectIntro: p = false
  } = e, [_, h] = i.useState(true);
  return (i.useEffect(() => {
    if (true !== f) h(false);
    else {
      let e = setTimeout(() => {
        h(false)
      }, s.JH);
      return () => {
        clearTimeout(e)
      }
    }
  }, [f]), null == t) ? null : (0, r.jsxs)("div", {
    className: o()(u.previewContainer, {
      [u.previewContainerAnimation]: f,
      [u.previewContainerSetHeight]: !a
    }),
    children: [(0, r.jsx)("img", {
      src: d,
      alt: "",
      className: u.preview,
      "aria-hidden": true,
      draggable: false
    }), !_ && (0, r.jsx)(c.Z, {
      skuId: t,
      useThumbnail: true,
      autoPlay: f,
      restartMethod: l.Q.FromStart,
      resetOnHover: true,
      isHovering: n,
      useOpacityOnHover: false,
      delayIntro: p,
      shopPreview: true
    })]
  })
}