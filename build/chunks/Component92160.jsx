/** Chunk was on 49236 **/
/** chunk id: 92160, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    firstLine: m,
    secondLine: g,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(t, o.enableContainer),
    children: [n ? (0, r.jsx)(s.dz2, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.activeCircle, {
        [o.animate]: u
      })
    }) : (0, r.jsx)(s.vdY, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.editCircle, {
        [o.animate]: u
      })
    }), (0, r.jsxs)("div", {
      className: o.enableDescription,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: m
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g
      })]
    }), (0, r.jsxs)("div", {
      className: o.buttonContainer,
      children: [null == c ? null : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.previewButton,
        children: (0, r.jsx)(s.zxk, {
          variant: "secondary",
          size: "sm",
          text: null != i ? i : a.intl.string(a.t["5U0kLy"]),
          onClick: c,
          disabled: p
        })
      }), (0, r.jsx)(s.zxk, {
        variant: n ? "critical-primary" : "primary",
        size: "sm",
        disabled: null == d || !n || p,
        text: n ? a.intl.string(a.t.R9GHyc) : a.intl.string(a.t.JFfinp),
        onClick: d
      })]
    })]
  })
}