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
  Chunk803580 = require("./803580.js"),
  Chunk241822 = require("./241822.js");
let u = e => {
  let {
    profileEffectId: t,
    isHovering: r,
    forCollectedModal: n = false,
    isPurchased: u,
    removeSetHeight: v = false
  } = e, f = n ? 250 : .1, [p, h] = i.useState(true);
  return (i.useEffect(() => {
    if (true !== n) h(false);
    else {
      let e = setTimeout(() => {
        h(false)
      }, f);
      return () => {
        clearTimeout(e)
      }
    }
  }, [f, n]), null != t) ? (0, a.jsxs)("div", {
    className: l()(c.previewContainer, {
      [c.previewContainerAnimation]: n,
      [c.previewContainerSetHeight]: !v
    }),
    children: [(0, a.jsx)("img", {
      src: d,
      alt: " ",
      className: n ? c.previewForCollected : c.preview,
      "aria-hidden": true
    }), !p && (0, a.jsx)("div", {
      className: u ? c.purchasedEffect : true,
      children: (0, a.jsx)(s.Z, {
        profileEffectId: t,
        useThumbnail: true,
        autoPlay: n,
        restartMethod: o.Q.FromStart,
        resetOnHover: true,
        isHovering: r,
        introDelay: f,
        useOpacityOnHover: false,
        shopPreview: true
      })
    })]
  }) : null
}