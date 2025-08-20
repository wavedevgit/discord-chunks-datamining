/** Chunk was on 27069 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let b = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function p(e) {
  var t;
  let {
    userId: r,
    headingId: i,
    widget: u,
    disableInteraction: d = false
  } = e, p = (0, a.e7)([c.default], () => c.default.getId() === r), m = (0, s.kQ)(u), j = b[u.type](), y = p && u.games.length > 0 ? (t = u.type, 1 === l.k[t] ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], {
    numGames: l.k[t]
  })) : true;
  return (0, n.jsxs)("div", {
    className: g.headerRow,
    children: [(0, n.jsxs)("div", {
      className: g.title,
      children: [(0, n.jsx)(o.X6q, {
        variant: "text-xs/medium",
        color: "text-default",
        id: i,
        children: j
      }), null != y && (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: y
      })]
    }), (0, n.jsx)(O, {
      widget: u,
      disabled: m,
      disabledInteraction: d,
      userId: r
    })]
  })
}

function O(e) {
  let {
    widget: t,
    disabled: r,
    disabledInteraction: l,
    userId: i
  } = e, o = (0, a.e7)([c.default], () => c.default.getId() === i);
  return !l && (o || (0, s.vI)(t.type) && t.games.some(e => null != e.comment)) ? (0, n.jsxs)("div", {
    className: g.actions,
    children: [o && (0, n.jsx)(u.Z, {
      disabled: r,
      widgetType: t.type,
      widget: t
    }), (0, n.jsx)(d.Z, {
      widget: t,
      userId: i
    })]
  }) : null
}