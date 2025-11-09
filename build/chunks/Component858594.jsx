/** Chunk was on 63639 **/
/** chunk id: 858594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk578756 = require("./578756.js"),
  Chunk162190 = require("./162190.js"),
  Chunk97200 = require("./97200.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3804 = require("./3804.js");

function m(e) {
  let {
    className: t,
    guildId: n,
    game: i,
    onClick: m,
    imageClassName: v,
    titleClassName: g,
    disabled: f = false,
    location: p
  } = e, b = (0, u.Z)(i.gameId, "cover");
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": f,
    className: a()(d.game, {
      [d.disabled]: f
    }, t),
    onClick: f ? true : () => {
      (0, s.GA)(n, i.id, i.name, p), m(i)
    },
    children: [(0, l.jsxs)("div", {
      className: a()(d.gameImageContainer, v),
      children: [(0, l.jsx)("img", {
        className: d.image,
        alt: "",
        src: null != b ? b : ""
      }), (0, l.jsx)("div", {
        className: d.gameImageBorder
      }), (0, l.jsx)("div", {
        className: d.gameImageOverlay
      })]
    }), (0, l.jsxs)("div", {
      className: a()(d.textContainer, g),
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-sm/semibold",
        lineClamp: 1,
        title: i.name,
        children: i.name
      }), (0, l.jsxs)("div", {
        className: d.boostContainer,
        children: [(0, l.jsx)(r.Ucv, {
          size: "sm",
          color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: c.intl.formatToPlainString(i.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K, {
            boostCount: i.baseCost
          })
        })]
      })]
    })]
  })
}