/** Chunk was on web.js **/
/** chunk id: 557818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk301133 = require("./301133.js");
let c = Chunk647438.forwardRef(function(e, t) {
  let {
    readOnly: n,
    disabled: i,
    fullWidth: o = false,
    children: c,
    validation: u,
    className: d,
    helperText: f,
    characterCount: _,
    characterCountMaxLength: p,
    successMessage: h
  } = e, m = null == u ? true : u.hasError, g = (0, r.jsx)("div", {}), E = null != _;
  return null != h && "" !== h ? (E = true, g = (0, r.jsxs)("div", {
    className: l.statusMessageContainer,
    children: [(0, r.jsx)(s.owK, {
      size: "xs",
      color: s.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-positive",
      children: h
    })]
  })) : m ? (E = true, g = (0, r.jsxs)("div", {
    className: l.statusMessageContainer,
    children: [(0, r.jsx)(s.Mgn, {
      size: "xs",
      color: s.TVs.colors.TEXT_FEEDBACK_CRITICAL
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: null == u ? true : u.errorMessage
    })]
  })) : null != f && (E = true, g = (0, r.jsx)(s.Text, {
    variant: "text-xs/normal",
    color: "text-secondary",
    children: f
  })), (0, r.jsxs)("div", {
    className: l.container,
    "data-full-width": o,
    children: [(0, r.jsx)("div", {
      ref: t,
      className: a()(l.wrapper, d),
      "data-error": m,
      "data-read-only": n,
      "data-disabled": i,
      children: c
    }), E && (0, r.jsxs)("div", {
      className: l.helperTextContainer,
      children: [g, null != _ && (0, r.jsxs)(s.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        tabularNumbers: true,
        children: [_, null != p && " / ".concat(p)]
      })]
    })]
  })
})