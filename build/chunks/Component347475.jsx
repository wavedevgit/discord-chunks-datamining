/** Chunk was on web.js **/
/** chunk id: 347475, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk283066 = require("./283066.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk117791 = require("./117791.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk665681 = require("./665681.js"),
  Chunk821584 = require("./821584.js"),
  Chunk568147 = require("./568147.js"),
  Chunk573748 = require("./573748.js");
let g = e => {
  let {
    className: t,
    location: n,
    analyticsLocation: i
  } = e, g = (0, c.Z)({
    location: "GiftNitro"
  }), {
    analyticsLocations: E
  } = (0, l.ZP)(n);
  return g ? (0, r.jsx)(l.Gt, {
    value: E,
    children: (0, r.jsxs)(s.$1m, {
      className: a()(_.container, _.gradientBackground, t),
      color: "purple",
      children: [(0, r.jsxs)("div", {
        className: _.textContainer,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xxl/bold",
          className: _.heading,
          children: f.intl.string(f.t.Ve9Ge6)
        }), (0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          children: f.intl.string(f.t.yQ06u1)
        }), (0, r.jsx)("div", {
          className: _.giftButtonContainer,
          children: (0, r.jsx)(d.Z, {
            buttonTextOverride: f.intl.string(f.t.Ve9Ge6),
            premiumModalAnalyticsLocation: i,
            variant: "secondary"
          })
        })]
      }), (0, r.jsx)("img", {
        src: h.Z,
        className: _.bannerImage,
        alt: "gift nitro banner"
      })]
    })
  }) : (0, r.jsx)(l.Gt, {
    value: E,
    children: (0, r.jsxs)("div", {
      className: a()(p.container, t),
      children: [(0, r.jsxs)("div", {
        className: p.textContainer,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-lg/extrabold",
          className: p.heading,
          children: f.intl.string(f.t.Ve9Ge6)
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: f.intl.string(f.t.yQ06u1)
        }), (0, r.jsx)(u.Z, {
          className: p.giftCardButton,
          textOptions: {
            textOverride: f.intl.string(f.t.Ve9Ge6),
            textClassName: p.giftButtonCTA
          },
          color: o.zx.Colors.CUSTOM,
          premiumModalAnalyticsLocation: i
        })]
      }), (0, r.jsx)("img", {
        src: m,
        className: p.bannerImage,
        alt: "gift nitro banner"
      })]
    })
  })
}