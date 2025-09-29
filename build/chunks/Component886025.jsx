/** Chunk was on web.js **/
/** chunk id: 886025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => c
}), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk440562 = require("./440562.js"),
  Chunk813302 = require("./813302.js");

function l(e) {
  let {
    id: t,
    errorMessage: n,
    helperText: r,
    successMessage: a,
    description: o
  } = e, s = i.useId(), l = i.useId(), c = i.useId(), u = i.useId(), d = i.useId(), f = null != o && "" !== o, _ = null != r && "" !== r || null != a && "" !== a, p = [];
  f && p.push(u), _ && p.push(c);
  let h = p.length > 0 ? p.join(" ") : true;
  return i.useMemo(() => ({
    labelId: s,
    controlId: null != t ? t : l,
    describedById: h,
    errorMessageId: null != n && "" !== n ? d : true,
    helperTextId: _ ? c : true,
    descriptionId: f ? u : true
  }), [s, t, l, h, n, d, _, c, f, u])
}

function c(e) {
  let {
    label: t,
    hideLabel: n = false,
    required: i,
    disabled: c,
    description: d,
    helperText: f,
    children: _,
    errorMessage: p,
    successMessage: h,
    trailingContent: m,
    role: g,
    layout: E = "vertical"
  } = e, b = l(e), {
    labelId: y,
    controlId: O,
    errorMessageId: v,
    describedById: I,
    helperTextId: T,
    descriptionId: S
  } = b, A = "group" === g || "radiogroup" === g, C = A ? "span" : "label", N = A ? "fieldset" : "div", R = A ? (0, r.jsx)("legend", {
    id: y,
    children: (0, r.jsx)(a.nn4, {
      children: t
    })
  }) : null, P = null != t && "" !== t, w = null != d && "" !== d, D = P ? (0, r.jsxs)(a.Text, {
    "aria-hidden": A,
    id: y,
    tag: C,
    variant: "text-md/medium",
    htmlFor: O,
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
    value: b,
    children: (0, r.jsxs)(N, {
      role: g,
      className: s.container,
      "data-layout": E,
      "data-disabled": c,
      "aria-describedby": A ? I : true,
      disabled: A ? c : true,
      children: [R, P || w ? (0, r.jsxs)("div", {
        className: s.labelContainer,
        children: [n ? (0, r.jsx)(a.nn4, {
          children: D
        }) : D, w && (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-secondary",
          className: s.description,
          id: S,
          children: d
        })]
      }) : null, (0, r.jsxs)("div", {
        className: s.control,
        children: ["function" == typeof _ ? _(b) : _, (0, r.jsx)(u, {
          successMessage: h,
          errorMessage: p,
          helperText: f,
          trailingContent: m,
          helperTextId: T,
          errorMessageId: v
        })]
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
    helperTextId: l,
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