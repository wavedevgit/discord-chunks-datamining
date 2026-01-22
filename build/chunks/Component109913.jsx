/** Chunk was on web.js **/
/** chunk id: 109913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk665273 = require("./665273.js");

function c(e) {
  let {
    breadcrumb: t,
    isActiveBreadcrumb: n,
    isFinalBreadcrumb: i,
    separatorClassName: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.hj, {
      [l.jQ]: i
    }),
    children: [(0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: n ? "text-strong" : "text-muted",
      children: t.label
    }), i ? null : (0, r.jsx)(o.A, {
      className: a()(l.LJ, c),
      direction: o.A.Directions.RIGHT
    })]
  }, t.id)
}
let u = function(e) {
  let {
    breadcrumbs: t,
    activeId: n,
    className: i,
    separatorClassName: s
  } = e;
  return (0, r.jsx)("div", {
    className: a()(l.jD, i),
    children: t.map((e, i) => (0, r.jsx)(c, {
      breadcrumb: e,
      isActiveBreadcrumb: e.id === n,
      isFinalBreadcrumb: i === t.length - 1,
      separatorClassName: s
    }, e.id))
  })
}