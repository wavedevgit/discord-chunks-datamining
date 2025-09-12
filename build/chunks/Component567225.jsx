/** Chunk was on 85683 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk720534 = require("./720534.js");

function d(e) {
  let {
    className: t,
    game: n,
    onClick: i,
    imageClassName: d,
    disabled: u = false
  } = e;
  return (0, r.jsxs)(o.P3F, {
    "aria-disabled": u,
    className: a()(c.game, {
      [c.disabled]: u
    }, t),
    onClick: u ? true : () => i(n),
    children: [(0, r.jsx)("img", {
      className: a()(c.image, d),
      alt: ""
    }), (0, r.jsxs)("div", {
      className: c.textContainer,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-sm/semibold",
        children: n.name
      }), (0, r.jsxs)("div", {
        className: c.boostContainer,
        children: [(0, r.jsx)(o.$Eu, {
          size: "sm",
          color: o.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: l.intl.formatToPlainString(n.plans.length > 1 ? s.default.Vf4vwM : s.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}