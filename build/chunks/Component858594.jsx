/** Chunk was on 67365 **/
/** chunk id: 858594, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk578756 = require("./578756.js"),
  Chunk162190 = require("./162190.js"),
  Chunk400580 = require("./400580.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk722417 = require("./722417.js");

function m(e) {
  let {
    className: n,
    guildId: t,
    game: i,
    onClick: m,
    imageClassName: v,
    titleClassName: f,
    disabled: g = false,
    location: p
  } = e, b = (0, u.Z)(i.gameId, "cover");
  return (0, l.jsxs)(r.P3F, {
    "aria-disabled": g,
    className: a()(d.game, {
      [d.disabled]: g
    }, n),
    onClick: g ? true : () => {
      (0, s.GA)(t, i.id, i.name, p), m(i)
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
      className: a()(d.textContainer, f),
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