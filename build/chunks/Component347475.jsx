/** Chunk was on 66181 **/
/** chunk id: 347475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let b = e => {
  let {
    className: t,
    location: n,
    analyticsLocation: r
  } = e, b = (0, c.ZP)({
    location: "GiftNitro"
  }), {
    analyticsLocations: x
  } = (0, o.ZP)(n), _ = b ? g : p;
  return (0, i.jsx)(o.Gt, {
    value: x,
    children: (0, i.jsxs)("div", {
      className: s()(_.container, t),
      children: [(0, i.jsxs)("div", {
        className: _.textContainer,
        children: [(0, i.jsx)(l.X6q, {
          variant: "heading-lg/extrabold",
          className: _.heading,
          children: m.intl.string(m.t.Ve9Ge3)
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/medium",
          children: m.intl.string(m.t.yQ06u7)
        }), b ? (0, i.jsx)("div", {
          className: g.giftButtonContainer,
          children: (0, i.jsx)(u.Z, {
            buttonTextOverride: m.intl.string(m.t.Ve9Ge3),
            premiumModalAnalyticsLocation: r,
            variant: "secondary"
          })
        }) : (0, i.jsx)(d.Z, {
          className: p.giftCardButton,
          textOptions: {
            textOverride: m.intl.string(m.t.Ve9Ge3),
            textClassName: p.giftButtonCTA
          },
          color: a.zx.Colors.CUSTOM,
          premiumModalAnalyticsLocation: r
        })]
      }), (0, i.jsx)("img", {
        src: b ? f.Z : h,
        className: _.bannerImage,
        alt: "gift nitro banner"
      })]
    })
  })
}