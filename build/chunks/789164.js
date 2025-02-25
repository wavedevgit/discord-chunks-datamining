/** Chunk was on web.js **/
"use strict";
n.d(t, {
  h: () => d
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(15127),
  s = n(512983),
  l = n(84705);

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
let d = i.forwardRef(function(e, t) {
  var n, {
      children: u,
      className: d,
      titleClassName: f,
      title: _,
      icon: p,
      disabled: h,
      htmlFor: g,
      tag: m = "h5"
    } = e,
    E = c(e, ["children", "className", "titleClassName", "title", "icon", "disabled", "htmlFor", "tag"]);
  let v = i.useId(),
    b = null !== (n = E.titleId) && void 0 !== n ? n : v;
  return (0, r.jsx)("div", {
    ref: t,
    className: d,
    children: null != _ ? (0, r.jsx)(o.y5t, {
      component: (0, r.jsxs)("div", {
        className: l.sectionTitle,
        children: [p, null != _ ? (0, r.jsx)(s.v, {
          tag: m,
          id: b,
          htmlFor: g,
          disabled: h,
          className: f,
          children: _
        }) : null]
      }),
      children: (0, r.jsx)("div", {
        className: l.children,
        children: (0, r.jsx)(a.ol, {
          titleId: b,
          children: u
        })
      })
    }) : u
  })
})