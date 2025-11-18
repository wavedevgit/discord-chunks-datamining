/** Chunk was on 27978 **/
/** chunk id: 80206, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk926882 = require("./926882.js");

function c(e) {
  let {
    title: t,
    subtitle: n,
    buttonText: c,
    image: u,
    onButtonClick: d,
    loading: h
  } = e;
  return (0, r.jsx)(a.ZP, {
    className: o.container,
    children: (0, r.jsxs)(i.Kqy, {
      align: "center",
      justify: "center",
      gap: 24,
      children: [(0, r.jsxs)(i.Kqy, {
        gap: 8,
        align: "center",
        children: [(0, r.jsxs)(i.Kqy, {
          gap: 24,
          align: "center",
          children: [null != u && (0, r.jsx)(i.Kqy, {
            align: "center",
            justify: "center",
            className: o.image,
            children: u
          }), h && (0, r.jsx)(l.$jN, {
            type: l.$jN.Type.SPINNING_CIRCLE
          }), (0, r.jsx)(i.X6q, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            children: t
          })]
        }), null != n && "" !== n && (0, r.jsx)(i.xvT, {
          variant: "text-md/normal",
          color: "header-secondary",
          className: o.subtitle,
          children: n
        })]
      }), !h && (0, r.jsx)(s.zxk, {
        onClick: d,
        text: c,
        variant: "overlay-primary"
      })]
    })
  })
}