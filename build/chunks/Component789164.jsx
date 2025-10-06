/** Chunk was on web.js **/
/** chunk id: 789164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk212176 = require("./212176.js");

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let d = Chunk647438.forwardRef(function(e, t) {
  var n, {
      children: u,
      className: d,
      titleClassName: f,
      title: _,
      disabled: p,
      htmlFor: h,
      tag: m = "h5"
    } = e,
    g = c(e, ["children", "className", "titleClassName", "title", "disabled", "htmlFor", "tag"]);
  let E = i.useId(),
    b = null != (n = g.titleId) ? n : E;
  return (0, r.jsx)("div", {
    ref: t,
    className: d,
    children: null != _ ? (0, r.jsx)(a.y5t, {
      component: (0, r.jsx)("div", {
        className: l.sectionTitle,
        children: null != _ ? (0, r.jsx)(s.v, {
          tag: m,
          id: b,
          htmlFor: h,
          disabled: p,
          className: f,
          children: _
        }) : null
      }),
      children: (0, r.jsx)("div", {
        className: l.children,
        children: (0, r.jsx)(o.ol, {
          titleId: b,
          children: u
        })
      })
    }) : u
  })
})