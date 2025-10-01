/** Chunk was on web.js **/
/** chunk id: 753187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => _
}), require("./953529.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk903788 = require("./903788.jsx"),
  Chunk22202 = require("./22202.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk993517 = require("./993517.js"),
  Chunk211189 = require("./211189.js");

function f(e) {
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

function _(e) {
  let {
    label: t,
    hideLabel: n = false,
    required: i,
    disabled: a,
    description: s,
    helperText: l,
    children: _,
    errorMessage: h,
    successMessage: m,
    trailingContent: g,
    role: E,
    layout: b = "vertical"
  } = e, y = f(e), {
    labelId: O,
    controlId: v,
    errorMessageId: I,
    describedById: T,
    helperTextId: S,
    descriptionId: A
  } = y, C = "group" === E || "radiogroup" === E, N = C ? "span" : "label", R = C ? "fieldset" : "div", P = C ? (0, r.jsx)("legend", {
    id: O,
    children: (0, r.jsx)(o.n, {
      children: t
    })
  }) : null, w = null != t && "" !== t, D = null != s && "" !== s, L = w ? (0, r.jsxs)(c.x, {
    "aria-hidden": C,
    id: O,
    tag: N,
    variant: "text-md/medium",
    htmlFor: v,
    className: d.label,
    children: [t, i && (0, r.jsx)(c.x, {
      "aria-hidden": true,
      variant: "text-md/normal",
      color: "text-feedback-critical",
      className: d.required,
      children: "*"
    })]
  }) : null;
  return (0, r.jsx)(u.U.Provider, {
    value: y,
    children: (0, r.jsxs)(R, {
      role: E,
      className: d.container,
      "data-layout": b,
      "data-disabled": a,
      "aria-describedby": C ? T : true,
      disabled: C ? a : true,
      children: [P, w || D ? (0, r.jsxs)("div", {
        className: d.labelContainer,
        children: [n ? (0, r.jsx)(o.n, {
          children: L
        }) : L, D && (0, r.jsx)(c.x, {
          variant: "text-sm/normal",
          color: "text-secondary",
          className: d.description,
          id: A,
          children: s
        })]
      }) : null, (0, r.jsxs)("div", {
        className: d.control,
        children: ["function" == typeof _ ? _(y) : _, (0, r.jsx)(p, {
          successMessage: m,
          errorMessage: h,
          helperText: l,
          trailingContent: g,
          helperTextId: S,
          errorMessageId: I
        })]
      })]
    })
  })
}

function p(e) {
  let {
    successMessage: t,
    errorMessage: n,
    helperText: i,
    trailingContent: o,
    helperTextId: u,
    errorMessageId: f
  } = e, _ = (0, r.jsx)("div", {}), p = null != o;
  return (null != t && "" !== t ? (p = true, _ = (0, r.jsxs)("div", {
    className: d.statusMessageContainer,
    children: [(0, r.jsx)(s.o, {
      size: "xs",
      color: a.Z.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(c.x, {
      variant: "text-xs/normal",
      color: "text-feedback-positive",
      id: u,
      children: t
    })]
  })) : null != n && "" !== n ? (p = true, _ = (0, r.jsxs)("div", {
    className: d.statusMessageContainer,
    children: [(0, r.jsx)(l.M, {
      size: "xs",
      color: a.Z.colors.TEXT_FEEDBACK_CRITICAL
    }), (0, r.jsx)(c.x, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      id: f,
      children: n
    })]
  })) : null != i && (p = true, _ = (0, r.jsx)(c.x, {
    variant: "text-xs/normal",
    color: "text-secondary",
    id: u,
    children: i
  })), p) ? (0, r.jsxs)("div", {
    className: d.helperTextContainer,
    children: [_, o]
  }) : null
}