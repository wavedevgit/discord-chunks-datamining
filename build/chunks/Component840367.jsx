/** Chunk was on 74449 **/
/** chunk id: 840367, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk86419 = require("./86419.js"),
  Chunk881410 = require("./881410.jsx"),
  Chunk825354 = require("./825354.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk635318 = require("./635318.js");

function f(e) {
  let {
    userId: t,
    headingId: r,
    widget: c,
    disableInteraction: s = false
  } = e, f = (0, i.e7)([a.default], () => a.default.getId() === t), b = (0, o.kQ)(c), p = (0, o.Nc)(c.type), m = f && c.games.length > 0 ? function(e) {
    let t = (0, o.Gv)(e);
    return 1 === t ? u.intl.string(u.t.wiXdER) : u.intl.format(u.t["zR1+09"], {
      numGames: t
    })
  }(c.type) : true;
  return (0, n.jsxs)("div", {
    className: d.headerRow,
    children: [(0, n.jsxs)("div", {
      className: d.title,
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: r,
        children: p
      }), null != m && (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        children: m
      })]
    }), (0, n.jsx)(g, {
      widget: c,
      disabled: b,
      disabledInteraction: s,
      userId: t
    })]
  })
}

function g(e) {
  let {
    widget: t,
    disabled: r,
    disabledInteraction: l,
    userId: u
  } = e, f = (0, i.e7)([a.default], () => a.default.getId() === u), g = (0, o.vI)(t.type) && t.games.some(e => null != e.comment);
  return l ? null : f ? (0, n.jsx)("div", {
    className: d.actions,
    children: (0, n.jsx)(c.Z, {
      disabled: r,
      widgetType: t.type,
      widget: t
    })
  }) : g ? (0, n.jsx)("div", {
    className: d.actions,
    children: (0, n.jsx)(s.Z, {
      widget: t,
      userId: u,
      className: d.menuButton
    })
  }) : null
}