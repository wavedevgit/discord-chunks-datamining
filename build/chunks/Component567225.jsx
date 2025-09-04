/** Chunk was on 85683 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  return (0, r.jsxs)(i.P3F, {
    "aria-disabled": d,
    className: s()(l.game, {
      [l.disabled]: d
    }, t),
    onClick: d ? true : () => a(n),
    children: [(0, r.jsx)("img", {
      className: s()(l.image, u),
      alt: ""
    }), (0, r.jsxs)("div", {
      className: l.textContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-sm/semibold",
        children: n.name
      }), (0, r.jsxs)("div", {
        className: l.boostContainer,
        children: [(0, r.jsx)(i.$Eu, {
          size: "sm",
          color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: c.intl.formatToPlainString(n.plans.length > 1 ? o.default.Vf4vwM : o.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}