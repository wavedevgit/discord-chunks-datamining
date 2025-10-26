/** Chunk was on 63639 **/
/** chunk id: 858594, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk162190 = require("./162190.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk722417 = require("./722417.js");

function d(e) {
  let {
    className: n,
    game: t,
    onClick: a,
    imageClassName: d,
    titleClassName: m,
    disabled: v = false
  } = e, g = (0, s.Z)(t.gameId, "cover");
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": v,
    className: i()(c.game, {
      [c.disabled]: v
    }, n),
    onClick: v ? true : () => a(t),
    children: [(0, l.jsxs)("div", {
      className: i()(c.gameImageContainer, d),
      children: [(0, l.jsx)("img", {
        className: c.image,
        alt: "",
        src: null != g ? g : ""
      }), (0, l.jsx)("div", {
        className: c.gameImageBorder
      }), (0, l.jsx)("div", {
        className: c.gameImageOverlay
      })]
    }), (0, l.jsxs)("div", {
      className: i()(c.textContainer, m),
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-sm/semibold",
        lineClamp: 1,
        title: t.name,
        children: t.name
      }), (0, l.jsxs)("div", {
        className: c.boostContainer,
        children: [(0, l.jsx)(r.Ucv, {
          size: "sm",
          color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: u.intl.formatToPlainString(t.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K, {
            boostCount: t.baseCost
          })
        })]
      })]
    })]
  })
}