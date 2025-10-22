/** Chunk was on 29679 **/
/** chunk id: 28997, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk137510 = require("./137510.js"),
  Chunk623463 = require("./623463.js");

function c(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: c = s.q.NONE,
    selected: d = false,
    subsection: u = null,
    onClick: g,
    className: m,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(o.container, m),
    children: [(0, r.jsx)(a.P3F, {
      className: l()(o.clickableContainer, {
        [o.noAction]: null == g,
        [o.disabled]: p
      }, m),
      onClick: p ? true : g,
      children: (0, r.jsxs)("div", {
        className: l()(o.backgroundModifierContainer, o[c], {
          [o.selected]: d,
          [o.disabled]: p,
          [o.noAction]: null == g
        }),
        children: [(0, r.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: t
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            className: o.description,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: o.__invalid_action,
          children: i
        })]
      })
    }), null != u && (0, r.jsx)("div", {
      className: o.subsectionContainer,
      children: u
    })]
  })
}