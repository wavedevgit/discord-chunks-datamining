/** Chunk was on 952 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk943970 = require("./943970.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720534 = require("./720534.js");

function d(e) {
  let {
    className: t,
    game: n,
    onClick: a,
    imageClassName: d,
    titleClassName: m,
    disabled: v = false
  } = e, f = (0, s.Z)(n.gameId, "cover");
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": v,
    className: i()(u.game, {
      [u.disabled]: v
    }, t),
    onClick: v ? true : () => a(n),
    children: [(0, l.jsxs)("div", {
      className: i()(u.gameImageContainer, d),
      children: [(0, l.jsx)("img", {
        className: u.image,
        alt: "",
        src: null != f ? f : ""
      }), (0, l.jsx)("div", {
        className: u.gameImageBorder
      }), (0, l.jsx)("div", {
        className: u.gameImageOverlay
      })]
    }), (0, l.jsxs)("div", {
      className: i()(u.textContainer, m),
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-sm/semibold",
        lineClamp: 1,
        title: n.name,
        children: n.name
      }), (0, l.jsxs)("div", {
        className: u.boostContainer,
        children: [(0, l.jsx)(r.Ucv, {
          size: "sm",
          color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: c.intl.formatToPlainString(n.plans.length > 1 ? o.default.Vf4vwM : o.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}