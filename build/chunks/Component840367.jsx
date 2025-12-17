/** Chunk was on 39442 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk825354 = require("./825354.jsx"),
  Chunk378857 = require("./378857.js");

function d(e) {
  let {
    userId: t,
    headingId: n,
    widget: i,
    disableInteraction: l = false,
    title: c,
    subtitle: s,
    actionButtons: d = [],
    className: g
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(u.headerRow, g),
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
      disabledInteraction: l,
      userId: t
    })]
  })
}

function f(e) {
  let {
    widget: t,
    actionButtons: n,
    disabledInteraction: i,
    userId: a
  } = e, o = (0, l.e7)([c.default], () => c.default.getId());
  return i ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
    className: u.actions,
    children: n
  }) : o !== a ? (0, r.jsx)("div", {
    className: u.actions,
    children: (0, r.jsx)(s.Z, {
      widget: t,
      userId: a,
      className: u.menuButton
    })
  }) : null
}