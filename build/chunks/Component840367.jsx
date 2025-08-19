/** Chunk was on 27069 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk825354 = require("./825354.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk635318 = require("./635318.js");
let p = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function b(e) {
  var t;
  let {
    userId: r,
    headingId: u,
    widget: d,
    disableInteraction: b = false
  } = e, m = (0, a.e7)([c.default], () => c.default.getId() === r), y = (0, s.kQ)(d), j = p[d.type](), v = m && d.games.length > 0 ? (t = d.type) === i.l.FAVORITE_GAMES ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], {
    numGames: l.k[t]
  }) : true;
  return (0, n.jsxs)("div", {
    className: g.headerRow,
    children: [(0, n.jsxs)("div", {
      className: g.title,
      children: [(0, n.jsx)(o.X6q, {
        variant: "text-xs/medium",
        color: "text-default",
        id: u,
        children: j
      }), null != v && (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: v
      })]
    }), (0, n.jsx)(O, {
      widget: d,
      disabled: y,
      disabledInteraction: b,
      userId: r
    })]
  })
}

function O(e) {
  let {
    widget: t,
    disabled: r,
    disabledInteraction: l,
    userId: o
  } = e, s = (0, a.e7)([c.default], () => c.default.getId() === o);
  return !l && (s || t.type === i.l.FAVORITE_GAMES && t.games.some(e => null != e.comment)) ? (0, n.jsxs)("div", {
    className: g.actions,
    children: [s && (0, n.jsx)(u.Z, {
      disabled: r,
      widgetType: t.type
    }), (0, n.jsx)(d.Z, {
      widget: t,
      userId: o
    })]
  }) : null
}