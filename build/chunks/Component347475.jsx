/** Chunk was on web.js **/
/** chunk id: 347475, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk47280 = require("./47280.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602062 = require("./602062.js"),
  Chunk867038 = require("./867038.js"),
  Chunk568147 = require("./568147.js"),
  Chunk373425 = require("./373425.js");
let g = e => {
  let {
    className: t,
    location: n,
    analyticsLocation: i
  } = e, g = (0, c.ZP)({
    location: "GiftNitro"
  }), {
    analyticsLocations: E
  } = (0, l.ZP)(n), b = g ? p : _;
  return (0, r.jsx)(l.Gt, {
    value: E,
    children: (0, r.jsxs)("div", {
      className: o()(b.container, t),
      children: [(0, r.jsxs)("div", {
        className: b.textContainer,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-lg/extrabold",
          className: b.heading,
          children: f.intl.string(f.t.Ve9Ge3)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: f.intl.string(f.t.yQ06u7)
        }), g ? (0, r.jsx)("div", {
          className: p.giftButtonContainer,
          children: (0, r.jsx)(d.Z, {
            buttonTextOverride: f.intl.string(f.t.Ve9Ge3),
            premiumModalAnalyticsLocation: i,
            variant: "secondary"
          })
        }) : (0, r.jsx)(u.Z, {
          className: _.giftCardButton,
          textOptions: {
            textOverride: f.intl.string(f.t.Ve9Ge3),
            textClassName: _.giftButtonCTA
          },
          color: a.zx.Colors.CUSTOM,
          premiumModalAnalyticsLocation: i
        })]
      }), (0, r.jsx)("img", {
        src: g ? m.Z : h,
        className: b.bannerImage,
        alt: "gift nitro banner"
      })]
    })
  })
}