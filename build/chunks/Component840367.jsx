/** Chunk was on 44097 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk635318 = require("./635318.js");

function d(e) {
  let {
    userId: t,
    headingId: n,
    widget: i,
    disableInteraction: a = false,
    title: c,
    subtitle: s,
    actionButtons: d = [],
    className: g
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(u.headerRow, g),
    children: [(0, r.jsxs)("div", {
      className: u.title,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: n,
        children: c
      }), null != s && (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: s
      })]
    }), (0, r.jsx)(f, {
      widget: i,
      actionButtons: d,
      disabledInteraction: a,
      userId: t
    })]
  })
}

function f(e) {
  let {
    widget: t,
    actionButtons: n,
    disabledInteraction: i,
    userId: l
  } = e, o = (0, a.e7)([c.default], () => c.default.getId());
  return i ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
    className: u.actions,
    children: n
  }) : o !== l ? (0, r.jsx)("div", {
    className: u.actions,
    children: (0, r.jsx)(s.Z, {
      widget: t,
      userId: l,
      className: u.menuButton
    })
  }) : null
}