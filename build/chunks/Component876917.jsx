/** Chunk was on 96887 **/
/** chunk id: 876917, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk165216 = require("./165216.js"),
  Chunk241822 = require("./241822.js");
let u = e => {
  let {
    skuId: t,
    isHighlighted: r,
    forCollectedModal: i = false,
    isPurchased: u,
    removeSetHeight: f = false
  } = e, p = i ? 250 : .1, [v, h] = n.useState(true);
  return (n.useEffect(() => {
    if (true !== i) h(false);
    else {
      let e = setTimeout(() => {
        h(false)
      }, p);
      return () => {
        clearTimeout(e)
      }
    }
  }, [p, i]), null == t) ? null : (0, a.jsxs)("div", {
    className: l()(c.previewContainer, {
      [c.previewContainerAnimation]: i,
      [c.previewContainerSetHeight]: !f
    }),
    children: [(0, a.jsx)("img", {
      src: d,
      alt: " ",
      className: i ? c.previewForCollected : c.preview,
      "aria-hidden": true
    }), !v && (0, a.jsx)("div", {
      className: u ? c.purchasedEffect : true,
      children: (0, a.jsx)(s.Z, {
        skuId: t,
        useThumbnail: true,
        autoPlay: i,
        restartMethod: o.Q.FromStart,
        resetOnHover: true,
        isHovering: r,
        introDelay: p,
        useOpacityOnHover: false,
        shopPreview: true
      })
    })]
  })
}