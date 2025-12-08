/** Chunk was on web.js **/
/** chunk id: 149865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk111161 = require("./111161.jsx"),
  Chunk662097 = require("./662097.js"),
  Chunk700875 = require("./700875.js");

function u(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useSubtitle: u,
    variant: d = "default",
    layout: f,
    initialize: p
  } = t, _ = n(), m = null == u ? true : u(), h = i.useId(), g = null != m && "" !== m;
  return (0, l.D)(p), (0, r.jsxs)("fieldset", {
    "aria-describedby": g ? h : true,
    children: [(0, r.jsxs)("div", {
      className: c.header,
      children: [(0, r.jsx)(a.Text, {
        tag: "legend",
        variant: "text-md/semibold",
        color: "header-primary",
        className: c.title,
        children: _
      }), g ? (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        id: h,
        className: c.subtitle,
        children: m
      }) : null]
    }), (0, r.jsx)(a.Kqy, {
      direction: "vertical",
      gap: 8,
      children: f.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(o.Z, {
          node: e
        }), "separators" === d && t !== f.length - 1 && (0, r.jsx)(s.Z, {})]
      }, e.key))
    })]
  })
}
let d = Chunk473749.memo(u)