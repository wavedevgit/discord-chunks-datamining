/** Chunk was on 384 **/
/** chunk id: 92160, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289086 = require("./289086.js");

function c(e) {
  let {
    className: t,
    enabled: n,
    previewCTA: i,
    onPreview: c,
    onToggle: d,
    animateStatus: u,
    firstLine: g,
    secondLine: m,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(t, o.enableContainer),
    children: [n ? (0, r.jsx)(a.dz2, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.activeCircle, {
        [o.animate]: u
      })
    }) : (0, r.jsx)(a.vdY, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.editCircle, {
        [o.animate]: u
      })
    }), (0, r.jsxs)("div", {
      className: o.enableDescription,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: g
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: m
      })]
    }), (0, r.jsxs)("div", {
      className: o.buttonContainer,
      children: [null == c ? null : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.previewButton,
        children: (0, r.jsx)(a.Button, {
          variant: "secondary",
          size: "sm",
          text: null != i ? i : s.intl.string(s.t["5U0kL8"]),
          onClick: c,
          disabled: p
        })
      }), (0, r.jsx)(a.Button, {
        variant: n ? "critical-primary" : "primary",
        size: "sm",
        disabled: null == d || !n || p,
        text: n ? s.intl.string(s.t.R9GHya) : s.intl.string(s.t.JFfins),
        onClick: d
      })]
    })]
  })
}