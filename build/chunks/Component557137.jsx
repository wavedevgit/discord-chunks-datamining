/** Chunk was on 38663 **/
/** chunk id: 557137, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk961350 = require("./961350.js"),
  Chunk296227 = require("./296227.jsx"),
  Chunk582153 = require("./582153.js");

function d(e) {
  let {
    userId: t,
    headingId: n,
    widget: l,
    disableInteraction: a = false,
    title: s,
    subtitle: c,
    actionButtons: d = [],
    className: p
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(u.U1, p),
    children: [(0, r.jsxs)("div", {
      className: u.DD,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-sm/medium",
        color: "text-default",
        id: n,
        children: s
      }), null != c && (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: "text-subtle",
        children: c
      })]
    }), (0, r.jsx)(f, {
      widget: l,
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
    disabledInteraction: l,
    userId: i
  } = e, o = (0, a.bG)([s.default], () => s.default.getId());
  return l ? null : null != n && n.length > 0 ? (0, r.jsx)("div", {
    className: u.o1,
    children: n
  }) : o !== i ? (0, r.jsx)("div", {
    className: u.o1,
    children: (0, r.jsx)(c.A, {
      widget: t,
      userId: i,
      className: u.AQ
    })
  }) : null
}