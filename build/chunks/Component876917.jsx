/** Chunk was on 96910 **/
/** chunk id: 876917, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk941447 = require("./941447.js"),
  Chunk241822 = require("./241822.js");
let d = e => {
  let {
    profileEffectId: t,
    isHovering: r,
    forCollectedModal: i = false,
    isPurchased: d,
    removeSetHeight: p = false
  } = e, b = i ? 250 : .1, [h, f] = a.useState(true);
  return (a.useEffect(() => {
    if (true !== i) f(false);
    else {
      let e = setTimeout(() => {
        f(false)
      }, b);
      return () => {
        clearTimeout(e)
      }
    }
  }, [b, i]), null != t) ? (0, n.jsxs)("div", {
    className: l()(c.previewContainer, {
      [c.previewContainerAnimation]: i,
      [c.previewContainerSetHeight]: !p
    }),
    children: [(0, n.jsx)("img", {
      src: u,
      alt: " ",
      className: i ? c.previewForCollected : c.preview,
      "aria-hidden": true
    }), !h && (0, n.jsx)("div", {
      className: d ? c.purchasedEffect : true,
      children: (0, n.jsx)(s.Z, {
        profileEffectId: t,
        useThumbnail: true,
        autoPlay: i,
        restartMethod: o.j.FromStart,
        resetOnHover: true,
        isHovering: r,
        introDelay: b,
        useOpacityOnHover: false,
        shopPreview: true
      })
    })]
  }) : null
}