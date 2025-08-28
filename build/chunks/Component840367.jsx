/** Chunk was on 83789 **/
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
    headingId: l,
    widget: u,
    disableInteraction: d = false
  } = e, b = (0, a.e7)([c.default], () => c.default.getId() === r), O = (0, s.kQ)(u), j = p[u.type](), y = b && u.games.length > 0 ? (t = u.type, 1 === i.k[t] ? f.intl.string(f.t.wiXdER) : f.intl.format(f.t["zR1+09"], {
    numGames: i.k[t]
  })) : true;
  return (0, n.jsxs)("div", {
    className: g.headerRow,
    children: [(0, n.jsxs)("div", {
      className: g.title,
      children: [(0, n.jsx)(o.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: l,
        children: j
      }), null != y && (0, n.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: y
      })]
    }), (0, n.jsx)(m, {
      widget: u,
      disabled: O,
      disabledInteraction: d,
      userId: r
    })]
  })
}

function m(e) {
  let {
    widget: t,
    disabled: r,
    disabledInteraction: i,
    userId: l
  } = e, o = (0, a.e7)([c.default], () => c.default.getId() === l), f = (0, s.vI)(t.type) && t.games.some(e => null != e.comment);
  return i ? null : o ? (0, n.jsx)("div", {
    className: g.actions,
    children: (0, n.jsx)(u.Z, {
      disabled: r,
      widgetType: t.type,
      widget: t
    })
  }) : f ? (0, n.jsx)("div", {
    className: g.actions,
    children: (0, n.jsx)(d.Z, {
      widget: t,
      userId: l,
      className: g.menuButton
    })
  }) : null
}