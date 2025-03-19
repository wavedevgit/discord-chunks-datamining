/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(477690),
  o = n(481060),
  c = n(91218),
  A = n(518738),
  d = n(208567),
  u = n(624138),
  g = n(388032),
  f = n(946792);
let m = (0, u.Mg)(l.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function p(e) {
  let {
    role: t,
    "aria-label": n = g.NW.string(g.t["MsUY/f"]),
    className: s,
    onClick: l,
    disabled: u = !1
  } = e, p = i.useRef(null), h = i.useMemo(() => null != t ? (0, A.Kz)(t, m) : null, [t]), C = null != h ? (0, r.jsx)(c.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    enableTooltip: !1,
    className: f.icon
  }, h)) : (0, r.jsx)(o.FmF, {
    size: "md",
    color: "currentColor",
    className: f.icon
  });
  return (0, r.jsx)(o.tEY, {
    ringTarget: p,
    children: (0, r.jsxs)(o.P3F, {
      "aria-label": n,
      className: a()(f.container, s, {
        [f.disabled]: u
      }),
      onClick: u ? void 0 : l,
      "aria-disabled": u,
      children: [(0, r.jsx)("div", {
        ref: p,
        className: f.preview,
        children: C
      }), null != h ? (0, r.jsx)(d.S, {
        className: f.uploaderIcon
      }) : null]
    })
  })
}