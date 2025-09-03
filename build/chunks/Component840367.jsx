/** Chunk was on 18877 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk624238 = require("./624238.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk825354 = require("./825354.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk635318 = require("./635318.js");

function g(e) {
  var t;
  let {
    userId: r,
    headingId: s,
    widget: u,
    disableInteraction: g = false
  } = e, p = (0, l.e7)([o.default], () => o.default.getId() === r), m = (0, c.kQ)(u), O = (0, c.Nc)(u.type), y = p && u.games.length > 0 ? (t = u.type, 1 === i.k[t] ? d.intl.string(d.t.wiXdER) : d.intl.format(d.t["zR1+09"], {
    numGames: i.k[t]
  })) : true;
  return (0, n.jsxs)("div", {
    className: f.headerRow,
    children: [(0, n.jsxs)("div", {
      className: f.title,
      children: [(0, n.jsx)(a.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: s,
        children: O
      }), null != y && (0, n.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: y
      })]
    }), (0, n.jsx)(b, {
      widget: u,
      disabled: m,
      disabledInteraction: g,
      userId: r
    })]
  })
}

function b(e) {
  let {
    widget: t,
    disabled: r,
    disabledInteraction: i,
    userId: a
  } = e, d = (0, l.e7)([o.default], () => o.default.getId() === a), g = (0, c.vI)(t.type) && t.games.some(e => null != e.comment);
  return i ? null : d ? (0, n.jsx)("div", {
    className: f.actions,
    children: (0, n.jsx)(s.Z, {
      disabled: r,
      widgetType: t.type,
      widget: t
    })
  }) : g ? (0, n.jsx)("div", {
    className: f.actions,
    children: (0, n.jsx)(u.Z, {
      widget: t,
      userId: a,
      className: f.menuButton
    })
  }) : null
}