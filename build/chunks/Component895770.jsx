/** Chunk was on 91284 **/
/** chunk id: 895770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk397400 = require("./397400.js"),
  Chunk225180 = require("./225180.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk667760 = require("./667760.js");

function m(e) {
  let {
    className: t,
    guildId: n,
    game: i,
    onClick: m,
    imageClassName: v,
    titleClassName: f,
    disabled: g = false,
    location: b
  } = e, p = (0, u.A)(i.gameId, "cover");
  return (0, l.jsxs)(r.DUT, {
    "aria-disabled": g,
    className: a()(c.LO, {
      [c.r9]: g
    }, t),
    onClick: g ? true : () => {
      (0, s.oT)(n, i.id, i.name, b), m(i)
    },
    children: [(0, l.jsxs)("div", {
      className: a()(c.Rf, v),
      children: [(0, l.jsx)("img", {
        className: c.Sl,
        alt: "",
        src: null != p ? p : ""
      }), (0, l.jsx)("div", {
        className: c.Gj
      }), (0, l.jsx)("div", {
        className: c.Uf
      })]
    }), (0, l.jsxs)("div", {
      className: a()(c.FS, f),
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-sm/semibold",
        lineClamp: 1,
        title: i.name,
        children: i.name
      }), (0, l.jsxs)("div", {
        className: c.PW,
        children: [(0, l.jsx)(r._Jp, {
          size: "sm",
          color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, l.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: d.intl.formatToPlainString(i.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K, {
            boostCount: i.baseCost
          })
        })]
      })]
    })]
  })
}