/** Chunk was on web.js **/
/** chunk id: 483566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => h,
  g: () => g
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk313666 = require("./313666.jsx"),
  Chunk635041 = require("./635041.jsx"),
  Chunk903788 = require("./903788.jsx"),
  Chunk22202 = require("./22202.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk590154 = require("./590154.js"),
  Chunk877222 = require("./877222.js");

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    id: t,
    errorMessage: n,
    helperText: r,
    successMessage: a,
    description: o
  } = e, [s, l] = i.useState(false), c = i.useId(), u = i.useId(), d = i.useId(), f = i.useId(), p = i.useId(), _ = null != o && "" !== o, m = null != r && "" !== r || null != a && "" !== a, h = [];
  _ && h.push(f), m && h.push(d);
  let g = h.length > 0 ? h.join(" ") : true;
  return i.useMemo(() => ({
    labelId: c,
    controlId: null != t ? t : u,
    describedById: g,
    errorMessageId: null != n && "" !== n ? p : true,
    helperTextId: m ? d : true,
    descriptionId: _ ? f : true,
    isLabelHovered: s,
    setIsLabelHovered: l
  }), [c, t, u, g, n, p, m, d, _, f, s, l])
}

function h(e) {
  let {
    label: t,
    hideLabel: n,
    badge: r,
    icon: i,
    required: a,
    disabled: o,
    description: s,
    helperText: l,
    id: c,
    errorMessage: u,
    successMessage: d,
    layout: f,
    layoutConfig: _
  } = e;
  return {
    fieldProps: {
      label: t,
      hideLabel: n,
      badge: r,
      icon: i,
      required: a,
      disabled: o,
      description: s,
      helperText: l,
      id: c,
      errorMessage: u,
      successMessage: d,
      layout: f,
      layoutConfig: _
    },
    props: p(e, ["label", "hideLabel", "badge", "icon", "required", "disabled", "description", "helperText", "id", "errorMessage", "successMessage", "layout", "layoutConfig"])
  }
}

function g(e) {
  let {
    label: t,
    hideLabel: n = false,
    required: i,
    disabled: a,
    description: l,
    helperText: c,
    children: p,
    errorMessage: _,
    successMessage: h,
    role: g,
    layout: b = "vertical",
    layoutConfig: y,
    badge: O,
    icon: v = null,
    interactiveLabel: S = false,
    auxiliaryContentPosition: I = "under-control",
    trailingAuxiliaryContent: T,
    ref: C
  } = e, A = m(e), {
    labelId: N,
    controlId: P,
    errorMessageId: R,
    describedById: D,
    helperTextId: w,
    descriptionId: x
  } = A, L = null == y ? true : y.horizontalControlColumnWidth, j = "group" === g || "radiogroup" === g, M = j ? "span" : "label", k = j ? "fieldset" : "div", U = j ? (0, r.jsx)("legend", {
    id: N,
    children: (0, r.jsx)(s.n, {
      children: t
    })
  }) : null, G = null != t && "" !== t, Z = null != l && "" !== l, B = G ? (0, r.jsxs)(u.x, {
    "aria-hidden": j,
    "data-interactive": S,
    id: N,
    tag: M,
    variant: "text-md/medium",
    color: "text-strong",
    htmlFor: P,
    className: f.label,
    children: [null != v ? (0, r.jsx)(v, {
      "aria-hidden": true,
      size: "xs",
      className: f.icon
    }) : null, t, i && (0, r.jsx)(u.x, {
      "aria-hidden": true,
      variant: "text-md/normal",
      color: "text-feedback-critical",
      className: f.required,
      children: "*"
    }), null != O ? (0, r.jsx)("span", {
      className: f.badgeContainer,
      children: (0, r.jsx)(o.C, {
        type: O
      })
    }) : null]
  }) : null, F = (0, r.jsx)(E, {
    successMessage: h,
    errorMessage: _,
    helperText: c,
    trailing: T,
    helperTextId: w,
    errorMessageId: R
  });
  return (0, r.jsx)(d.z.Provider, {
    value: A,
    children: (0, r.jsxs)(k, {
      role: g,
      ref: C,
      className: f.container,
      "data-layout": b,
      style: null != L ? {
        "--custom-field-horizontal-control-width": L
      } : true,
      "data-disabled": a,
      "aria-describedby": j ? D : true,
      disabled: j ? a : true,
      children: [U, G && n ? (0, r.jsx)(s.n, {
        children: B
      }) : null, G && !n || Z ? (0, r.jsxs)("div", {
        className: f.labelContainer,
        children: [n ? null : B, Z && (0, r.jsx)(u.x, {
          variant: "text-sm/normal",
          color: "text-subtle",
          className: f.description,
          id: x,
          children: l
        }), "under-label" === I ? F : null]
      }) : null, (0, r.jsxs)("div", {
        className: f.control,
        children: ["function" == typeof p ? p(A) : p, "under-control" === I ? F : null]
      })]
    })
  })
}

function E(e) {
  let {
    successMessage: t,
    errorMessage: n,
    helperText: i,
    trailing: o,
    helperTextId: s,
    errorMessageId: d
  } = e, p = (0, r.jsx)("div", {}), _ = null != o;
  return (null != n && "" !== n ? (_ = true, p = (0, r.jsxs)("div", {
    className: f.statusMessageContainer,
    children: [(0, r.jsx)(c.M, {
      size: "xs",
      color: a.Z.colors.TEXT_FEEDBACK_CRITICAL
    }), (0, r.jsx)(u.x, {
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      id: d,
      children: n
    })]
  })) : null != t && "" !== t ? (_ = true, p = (0, r.jsxs)("div", {
    className: f.statusMessageContainer,
    children: [(0, r.jsx)(l.o, {
      size: "xs",
      color: a.Z.colors.TEXT_FEEDBACK_POSITIVE
    }), (0, r.jsx)(u.x, {
      variant: "text-xs/normal",
      color: "text-feedback-positive",
      id: s,
      children: t
    })]
  })) : null != i && (_ = true, p = (0, r.jsx)(u.x, {
    variant: "text-xs/normal",
    color: "text-subtle",
    id: s,
    children: i
  })), _) ? (0, r.jsxs)("div", {
    className: f.helperTextContainer,
    children: [p, o]
  }) : null
}