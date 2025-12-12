/** Chunk was on 384 **/
/** chunk id: 28997, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk137510 = require("./137510.js"),
  Chunk922657 = require("./922657.js");

function c(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: c = a.q.NONE,
    selected: u = false,
    subsection: d = null,
    onClick: g,
    className: m,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(o.container, m),
    children: [(0, r.jsx)(s.P3F, {
      className: l()(o.clickableContainer, {
        [o.noAction]: null == g,
        [o.disabled]: p
      }, m),
      onClick: p ? true : g,
      children: (0, r.jsxs)("div", {
        className: l()(o.backgroundModifierContainer, o[c], {
          [o.selected]: u,
          [o.disabled]: p,
          [o.noAction]: null == g
        }),
        children: [(0, r.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: t
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            className: o.description,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: o.__invalid_action,
          children: i
        })]
      })
    }), null != d && (0, r.jsx)("div", {
      className: o.subsectionContainer,
      children: d
    })]
  })
}