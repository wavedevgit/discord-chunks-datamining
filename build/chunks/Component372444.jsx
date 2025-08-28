/** Chunk was on 88479 **/
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
let g = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: l = {
      color: a.Tt.BRAND_INVERTED,
      text: u.intl.string(u.t.oqweNz)
    }
  } = e, {
    color: s,
    text: o
  } = l, c = t.premiumTier + 1;
  return (0, r.jsx)(d.Z, {
    color: s,
    analyticsLocation: n,
    guild: t,
    buttonText: o,
    targetBoostedGuildTier: c,
    className: i
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
    buttonProps: h
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(o.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return (0, r.jsx)(c.Gt, {
    value: b,
    children: (0, r.jsxs)("div", {
      className: l()(m.banner, u),
      children: [(0, r.jsx)("img", {
        className: m.__invalid_headerGraphic,
        alt: "",
        src: n(322393)
      }), (0, r.jsxs)("div", {
        className: m.content,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-lg/semibold",
          color: null != f ? f : "always-white",
          className: m.header,
          children: t
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: null != p ? p : "always-white",
          children: i
        })]
      }), (0, r.jsx)("div", {
        className: m.ctaContainer,
        children: (0, r.jsx)(g, {
          guild: d,
          analyticsLocation: a,
          className: m.button,
          buttonProps: h
        })
      })]
    })
  })
}