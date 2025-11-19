/** Chunk was on web.js **/
/** chunk id: 876917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk802433 = require("./802433.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk803580 = require("./803580.js"),
  Chunk241822 = require("./241822.js");
let d = .1,
  f = 250,
  _ = e => {
    let {
      skuId: t,
      isHighlighted: n,
      forCollectedModal: a = false,
      isPurchased: _,
      removeSetHeight: p = false
    } = e, h = a ? f : d, [m, g] = i.useState(true);
    return (i.useEffect(() => {
      if (true !== a) g(false);
      else {
        let e = setTimeout(() => {
          g(false)
        }, h);
        return () => {
          clearTimeout(e)
        }
      }
    }, [h, a]), null == t) ? null : (0, r.jsxs)("div", {
      className: o()(c.previewContainer, {
        [c.previewContainerAnimation]: a,
        [c.previewContainerSetHeight]: !p
      }),
      children: [(0, r.jsx)("img", {
        src: u,
        alt: " ",
        className: c.preview,
        "aria-hidden": true
      }), !m && (0, r.jsx)("div", {
        className: _ ? c.purchasedEffect : true,
        children: (0, r.jsx)(l.Z, {
          skuId: t,
          useThumbnail: true,
          autoPlay: a,
          restartMethod: s.Q.FromStart,
          resetOnHover: true,
          isHovering: n,
          introDelay: h,
          useOpacityOnHover: false,
          shopPreview: true
        })
      })]
    })
  }