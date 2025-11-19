/** Chunk was on web.js **/
/** chunk id: 493572, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk825456 = require("./825456.js");

function c(e) {
  let {
    breadcrumb: t,
    isActiveBreadcrumb: n,
    isFinalBreadcrumb: i,
    separatorClassName: c
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.breadcrumbWrapper, {
      [l.breadcrumbFinalWrapper]: i
    }),
    children: [(0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: n ? "text-primary" : "text-muted",
      children: t.label
    }), i ? null : (0, r.jsx)(s.Z, {
      className: a()(l.breadcrumbArrow, c),
      direction: s.Z.Directions.RIGHT
    })]
  }, t.id)
}
let u = function(e) {
  let {
    breadcrumbs: t,
    activeId: n,
    className: i,
    separatorClassName: o
  } = e;
  return (0, r.jsx)("div", {
    className: a()(l.breadcrumbs, i),
    children: t.map((e, i) => (0, r.jsx)(c, {
      breadcrumb: e,
      isActiveBreadcrumb: e.id === n,
      isFinalBreadcrumb: i === t.length - 1,
      separatorClassName: o
    }, e.id))
  })
}