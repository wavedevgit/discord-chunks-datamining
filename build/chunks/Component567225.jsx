/** Chunk was on 60728 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk943970 = require("./943970.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720534 = require("./720534.js");

function d(e) {
  let {
    className: t,
    game: n,
    onClick: i,
    imageClassName: d,
    disabled: m = false
  } = e, v = (0, s.Z)(n.gameId, "cover");
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": m,
    className: a()(c.game, {
      [c.disabled]: m
    }, t),
    onClick: m ? true : () => i(n),
    children: [(0, l.jsx)("img", {
      className: a()(c.image, d),
      alt: "",
      src: null != v ? v : ""
    }), (0, l.jsxs)("div", {
      className: c.textContainer,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-sm/semibold",
        children: n.name
      }), (0, l.jsxs)("div", {
        className: c.boostContainer,
        children: [(0, l.jsx)(r.$Eu, {
          size: "sm",
          color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: u.intl.formatToPlainString(n.plans.length > 1 ? o.default.Vf4vwM : o.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}