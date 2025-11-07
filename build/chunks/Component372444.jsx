/** Chunk was on 64982 **/
/** chunk id: 372444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736692 = require("./736692.js");
let m = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: l = {
      color: a.Tt.BRAND_INVERTED,
      text: u.intl.string(u.t.oqweNx)
    },
    useExpressiveButton: s
  } = e, {
    color: o,
    text: c
  } = l, g = t.premiumTier + 1;
  return (0, r.jsx)(d.Z, {
    color: o,
    analyticsLocation: n,
    guild: t,
    buttonText: c,
    targetBoostedGuildTier: g,
    className: i,
    useExpressiveButton: s
  })
};

function p(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: a,
    guild: d,
    className: u,
    textColor: p,
    headerColor: f,
    buttonProps: h,
    useExpressiveButton: b
  } = e, {
    analyticsLocations: x
  } = (0, c.ZP)(o.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(c.Gt, {
    value: x,
    children: (0, r.jsxs)("div", {
      className: l()(g.banner, u),
      children: [(0, r.jsx)("img", {
        className: g.__invalid_headerGraphic,
        alt: "",
        src: n(322393)
      }), (0, r.jsxs)("div", {
        className: g.content,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-lg/semibold",
          color: null != f ? f : "always-white",
          className: g.header,
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: null != p ? p : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: g.ctaContainer,
        children: (0, r.jsx)(m, {
          guild: d,
          analyticsLocation: a,
          className: g.button,
          buttonProps: h,
          useExpressiveButton: b
        })
      })]
    })
  })
}