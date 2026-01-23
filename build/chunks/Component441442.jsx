/** Chunk was on 47841 **/
/** chunk id: 441442, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk620216 = require("./620216.js"),
  Chunk445180 = require("./445180.js");

function c(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: c = a.t.NONE,
    selected: d = false,
    subsection: u = null,
    onClick: g,
    className: m,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(o.container, m),
    children: [(0, r.jsx)(s.DUT, {
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
    }), null != u && (0, r.jsx)("div", {
      className: o.subsectionContainer,
      children: u
    })]
  })
}