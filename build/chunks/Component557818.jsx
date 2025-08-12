/** Chunk was on web.js **/
/** chunk id: 557818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk250303 = require("./250303.js");

function l(e) {
  let {
    readOnly: t,
    disabled: n,
    fullWidth: i = false,
    children: l,
    validation: c,
    className: u,
    helperText: d,
    characterCount: f,
    characterCountMaxLength: _,
    successMessage: p
  } = e, h = null == c ? true : c.hasError, m = (0, r.jsx)("div", {}), g = null != f;
  return null != p && "" !== p ? (g = true, m = (0, r.jsxs)("div", {
    className: s.statusMessageContainer,
    children: [(0, r.jsx)(a.owK, {
      size: "xs",
      color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-positive",
      children: p
    })]
  })) : h ? (g = true, m = (0, r.jsxs)("div", {
    className: s.statusMessageContainer,
    children: [(0, r.jsx)(a.Mgn, {
      size: "xs",
      color: a.TVs.colors.TEXT_FEEDBACK_CRITICAL
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: null == c ? true : c.errorMessage
    })]
  })) : null != d && (g = true, m = (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: "text-secondary",
    children: d
  })), (0, r.jsxs)("div", {
    className: s.container,
    "data-full-width": i,
    children: [(0, r.jsx)("div", {
      className: o()(s.wrapper, u),
      "data-error": h,
      "data-read-only": t,
      "data-disabled": n,
      children: l
    }), g && (0, r.jsxs)("div", {
      className: s.helperTextContainer,
      children: [m, null != f && (0, r.jsxs)(a.Text, {
        variant: "text-xs/normal",
        color: "text-secondary",
        tabularNumbers: true,
        children: [f, null != _ && " / ".concat(_)]
      })]
    })]
  })
}