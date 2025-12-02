/** Chunk was on web.js **/
/** chunk id: 149865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk700875 = require("./700875.js");

function c(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: c,
    variant: u = "default",
    ContextProvider: d
  } = t, f = t.layout.filter(e => {
    var t, n;
    return null == (n = null == (t = e.usePredicate) ? true : t.call(e)) || n
  }), p = n(), _ = null == c ? true : c(), m = i.useId(), h = null != _ && "" !== _, g = null != d ? d : i.Fragment;
  return (0, r.jsx)(g, {
    children: (0, r.jsxs)("fieldset", {
      "aria-describedby": h ? m : true,
      children: [(0, r.jsxs)("div", {
        className: l.header,
        children: [(0, r.jsx)(a.Text, {
          tag: "legend",
          variant: "text-md/semibold",
          color: "header-primary",
          className: l.title,
          children: p
        }), h ? (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          id: m,
          className: l.subtitle,
          children: _
        }) : null]
      }), (0, r.jsx)(a.Kqy, {
        direction: "vertical",
        gap: 8,
        children: f.map((e, t) => (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(o.Z, {
            node: e
          }), "separators" === u && t !== f.length - 1 && (0, r.jsx)(s.Z, {})]
        }, e.key))
      })]
    })
  })
}
let u = Chunk473749.memo(c)