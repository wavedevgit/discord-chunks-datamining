/** Chunk was on 60728 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720534 = require("./720534.js");

function u(e) {
  let {
    className: t,
    game: n,
    onClick: a,
    imageClassName: u,
    disabled: d = false
  } = e;
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": d,
    className: i()(c.game, {
      [c.disabled]: d
    }, t),
    onClick: d ? true : () => a(n),
    children: [(0, l.jsx)("img", {
      className: i()(c.image, u),
      alt: ""
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
          children: o.intl.formatToPlainString(n.plans.length > 1 ? s.default.Vf4vwM : s.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}