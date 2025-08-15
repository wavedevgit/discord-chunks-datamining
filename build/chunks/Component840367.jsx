/** Chunk was on 12756 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
let m = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function g(e) {
  var t;
  let {
    userId: n,
    headingId: d,
    widget: u,
    disableInteraction: g = false
  } = e, j = (0, o.e7)([c.default], () => c.default.getId() === n), y = (0, s.kQ)(u), O = m[u.type](), h = j && u.games.length > 0 ? (t = u.type) === l.l.FAVORITE_GAMES ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], {
    numGames: i.k[t]
  }) : true;
  return (0, r.jsxs)("div", {
    className: p.headerRow,
    children: [(0, r.jsxs)("div", {
      className: p.title,
      children: [(0, r.jsx)(a.X6q, {
        variant: "text-xs/medium",
        color: "text-default",
        id: d,
        children: O
      }), null != h && (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: h
      })]
    }), (0, r.jsx)(b, {
      widget: u,
      disabled: y,
      disabledInteraction: g,
      userId: n
    })]
  })
}

function b(e) {
  let {
    widget: t,
    disabled: n,
    disabledInteraction: i,
    userId: a
  } = e, s = (0, o.e7)([c.default], () => c.default.getId() === a);
  return !i && (s || t.type === l.l.FAVORITE_GAMES && t.games.some(e => null != e.comment)) ? (0, r.jsxs)("div", {
    className: p.actions,
    children: [s && (0, r.jsx)(d.Z, {
      disabled: n,
      widgetType: t.type
    }), (0, r.jsx)(u.Z, {
      widget: t,
      userId: a
    })]
  }) : null
}