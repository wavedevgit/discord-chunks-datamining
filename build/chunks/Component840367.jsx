/** Chunk was on 11776 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk825354 = require("./825354.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196880 = require("./196880.js");
let m = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function p(e) {
  var t;
  let {
    userId: n,
    headingId: p,
    widget: g,
    reachedMaxGamesLimit: b,
    showHeaderActionButtons: j
  } = e, h = (0, o.e7)([c.default], () => c.default.getId() === n), x = m[g.type](), y = h ? (t = g.type) === i.l.FAVORITE_GAMES ? u.intl.string(u.t.wiXdER) : u.intl.format(u.t["zR1+09"], {
    numGames: l.k[t]
  }) : true;
  return (0, r.jsxs)("div", {
    className: f.headerRow,
    children: [(0, r.jsxs)("div", {
      className: f.title,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: p,
        children: x
      }), null != y && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: y
      })]
    }), h && j && (0, r.jsxs)("div", {
      className: f.actions,
      children: [(0, r.jsx)(s.Z, {
        disabled: b,
        widgetType: g.type
      }), (0, r.jsx)(d.Z, {
        widget: g
      })]
    })]
  })
}