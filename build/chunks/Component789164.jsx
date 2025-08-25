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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let d = Chunk647438.forwardRef(function(e, t) {
  var n, {
      children: u,
      className: d,
      titleClassName: f,
      title: _,
      icon: p,
      disabled: h,
      htmlFor: m,
      tag: g = "h5"
    } = e,
    E = c(e, ["children", "className", "titleClassName", "title", "icon", "disabled", "htmlFor", "tag"]);
  let b = i.useId(),
    y = null != (n = E.titleId) ? n : b;
  return (0, r.jsx)("div", {
    ref: t,
    className: d,
    children: null != _ ? (0, r.jsx)(o.y5t, {
      component: (0, r.jsxs)("div", {
        className: l.sectionTitle,
        children: [p, null != _ ? (0, r.jsx)(s.v, {
          tag: g,
          id: y,
          htmlFor: m,
          disabled: h,
          className: f,
          children: _
        }) : null]
      }),
      children: (0, r.jsx)("div", {
        className: l.children,
        children: (0, r.jsx)(a.ol, {
          titleId: y,
          children: u
        })
      })
    }) : u
  })
})