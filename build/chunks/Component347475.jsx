/** Chunk was on 20501 **/
/** chunk id: 347475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk646476 = require("./646476.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk307146 = require("./307146.js"),
  Chunk568147 = require("./568147.js"),
  Chunk332796 = require("./332796.js");
let h = e => {
  let {
    className: t,
    location: n,
    analyticsLocation: r
  } = e, {
    analyticsLocations: h
  } = (0, o.ZP)(n), f = (0, c.rK)(), {
    enabled: b
  } = c.RO.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: f
  }), x = b && f;
  return (0, i.jsx)(o.Gt, {
    value: h,
    children: (0, i.jsxs)("div", {
      className: s()(m.container, t),
      children: [(0, i.jsxs)("div", {
        className: m.textContainer,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-lg/extrabold",
          className: m.heading,
          children: x ? u.intl.string(u.t.LB3bJC) : u.intl.string(u.t.Ve9Ge3)
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: x ? u.intl.string(u.t.u49cn5) : u.intl.string(u.t.yQ06u7)
        }), (0, i.jsx)(d.Z, {
          className: m.giftCardButton,
          textOptions: {
            textOverride: u.intl.string(u.t.Ve9Ge3),
            textClassName: m.giftButtonCTA
          },
          color: a.zx.Colors.CUSTOM,
          premiumModalAnalyticsLocation: r
        })]
      }), (0, i.jsx)("img", {
        src: x ? g : p,
        className: m.bannerImage,
        alt: "gift nitro banner"
      })]
    })
  })
}