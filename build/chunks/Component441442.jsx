/** Chunk was on 47841 **/
/** chunk id: 441442, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk620216 = require("./620216.js"),
  Chunk445180 = require("./445180.js");

function o(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: o = a.t.NONE,
    selected: d = false,
    subsection: u = null,
    onClick: f,
    className: g,
    disabled: b
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(c.container, g),
    children: [(0, r.jsx)(s.DUT, {
      className: l()(c.clickableContainer, {
        [c.noAction]: null == f,
        [c.disabled]: b
      }, g),
      onClick: b ? true : f,
      children: (0, r.jsxs)("div", {
        className: l()(c.backgroundModifierContainer, c[o], {
          [c.selected]: d,
          [c.disabled]: b,
          [c.noAction]: null == f
        }),
        children: [(0, r.jsxs)("div", {
          className: c.settingsDescriptionContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "interactive-text-active",
            children: t
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "interactive-text-default",
            className: c.description,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: c.__invalid_action,
          children: i
        })]
      })
    }), null != u && (0, r.jsx)("div", {
      className: c.subsectionContainer,
      children: u
    })]
  })
}