/** Chunk was on 85683 **/
/** chunk id: 567225, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk114162 = require("./114162.js");

function d(e) {
  let {
    className: t,
    game: n,
    onClick: a,
    imageClassName: d,
    disabled: u = false
  } = e;
  return (0, r.jsxs)(s.P3F, {
    "aria-disabled": u,
    className: i()(l.game, {
      [l.disabled]: u
    }, t),
    onClick: u ? true : () => a(n),
    children: [(0, r.jsx)("img", {
      className: i()(l.image, d),
      alt: ""
    }), (0, r.jsxs)("div", {
      className: l.textContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        children: n.name
      }), (0, r.jsxs)("div", {
        className: l.boostContainer,
        children: [(0, r.jsx)(s.$Eu, {
          size: "sm",
          color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          children: o.intl.formatToPlainString(n.plans.length > 1 ? c.default.Vf4vwM : c.default.ZzpD5u, {
            boostCount: n.baseCost
          })
        })]
      })]
    })]
  })
}