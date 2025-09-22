/** Chunk was on web.js **/
/** chunk id: 886025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk440562 = require("./440562.js"),
  Chunk163250 = require("./163250.js");

function l(e) {
  let {
    id: t,
    errorMessage: n,
    helperText: r,
    successMessage: a
  } = e, o = i.useId(), s = i.useId(), l = i.useId(), c = null != r && "" !== r || null != a && "" !== a;
  return i.useMemo(() => ({
    controlId: null != t ? t : o,
    describedById: c ? s : true,
    errorMessageId: null != n && "" !== n ? l : true
  }), [t, o, s, l, n, c])
}

function c(e) {
  let {
    label: t,
    hideLabel: n = false,
    required: i,
    description: c,
    helperText: d,
    children: f,
    errorMessage: _,
    successMessage: p,
    trailingContent: h
  } = e, m = l(e), {
    controlId: g,
    describedById: E,
    errorMessageId: b
  } = m, y = null != t && "" !== t ? (0, r.jsxs)(a.Text, {
    tag: "label",
    variant: "text-md/medium",
    htmlFor: g,
    className: s.label,
    children: [t, i && (0, r.jsx)(a.Text, {
      "aria-hidden": true,
      variant: "text-md/normal",
      color: "text-feedback-critical",
      className: s.required,
      children: "*"
    })]
  }) : null;
  return (0, r.jsx)(o.U.Provider, {
    value: m,
    children: (0, r.jsxs)("div", {
      className: s.control,
      children: [n ? (0, r.jsx)(a.nn4, {
        children: y
      }) : y, null != c && "" !== c && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        className: s.description,
        children: c
      }), "function" == typeof f ? f(m) : f, (0, r.jsx)(u, {
        successMessage: p,
        errorMessage: _,
        helperText: d,
        trailingContent: h,
        describedById: E,
        errorMessageId: b
      })]
    })
  })
}

function u(e) {
  let {
    successMessage: t,
    errorMessage: n,
    helperText: i,
    trailingContent: o,
    describedById: l,
    errorMessageId: c
  } = e, u = (0, r.jsx)("div", {}), d = null != o;
  return (null != t && "" !== t ? (d = true, u = (0, r.jsxs)("div", {
    className: s.statusMessageContainer,
    children: [(0, r.jsx)(a.owK, {
      size: "xs",
      color: a.TVs.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-positive",
      id: l,
      children: t
    })]
  })) : null != n && "" !== n ? (d = true, u = (0, r.jsxs)("div", {
    className: s.statusMessageContainer,
    children: [(0, r.jsx)(a.Mgn, {
      size: "xs",
      color: a.TVs.colors.TEXT_FEEDBACK_CRITICAL
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      id: c,
      children: n
    })]
  })) : null != i && (d = true, u = (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: "text-secondary",
    id: l,
    children: i
  })), d) ? (0, r.jsxs)("div", {
    className: s.helperTextContainer,
    children: [u, o]
  }) : null
}