/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => R
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk440562 = require("./440562.js"),
  Chunk753450 = require("./753450.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk841878 = require("./841878.jsx"),
  Chunk74655 = require("./74655.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430490 = require("./430490.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function A(e, t) {
  let n = i.useContext(l.q3);
  return i.useEffect(() => {
    var r, i;
    null == (r = n.setHasValue) || r.call(n, null != t && "" !== t || null != e && "" !== e), null == (i = n.setIsFocused) || i.call(n, false)
  }, []), i.useEffect(() => {
    if (null != e && "" !== e) {
      var t;
      null == (t = n.setHasValue) || t.call(n, true)
    }
  }, [n, e]), n
}

function C(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(p.Text, {
    variant: "text-md/normal",
    color: "input-placeholder-text",
    className: b.leadingText,
    children: t
  });
  if ("icon" in t) {
    let {
      tooltip: e
    } = t, a = T(t, ["tooltip"]), o = "md" === n ? "sm" : "xs", s = (0, r.jsx)(_.HLj, I(O({}, a), {
      size: o,
      variant: "input-accessory"
    }));
    return null != e ? (0, r.jsx)(f.u, {
      asContainer: true,
      text: e,
      shouldShow: !i,
      children: s
    }) : s
  }
  if ("button" in t) return (0, r.jsx)("div", {
    className: b.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = T(t, ["type"]);
    return (0, r.jsx)(d.Q, I(O({}, n), {
      layout: "inline"
    }))
  }
  if ("type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: b.image
  });
  let a = t,
    o = "md" === n ? "xs" : "xxs";
  return (0, r.jsx)("div", {
    className: b.icon,
    children: (0, r.jsx)(a, {
      size: o,
      color: p.TVs.colors.ICON_PRIMARY
    })
  })
}

function N(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(p.P3F, {
    className: b.clearButton,
    onClick: n,
    "aria-label": E.intl.string(E.t.VkKicX),
    children: (0, r.jsx)(p.k$p, {
      size: i,
      color: "currentColor"
    })
  })
}

function R(e) {
  var t;
  let {
    disabled: n = false,
    editable: a,
    inputRef: l,
    focusProps: u,
    name: d = "",
    type: f = "text",
    placeholder: _ = "",
    maxLength: p,
    value: E,
    defaultValue: y,
    minLength: v,
    error: S,
    defaultDirty: R = false,
    leading: w,
    trailing: D,
    validateOn: x = "change",
    size: L = "md",
    fullWidth: j = false,
    clearable: k = false,
    helperText: M,
    showCharacterCount: U = false,
    successMessage: G,
    label: B,
    description: Z,
    hideLabel: F,
    required: V,
    id: H
  } = e, Y = T(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage", "label", "description", "hideLabel", "required", "id"]), W = (0, g.m)({
    validateOn: x,
    error: S,
    value: E,
    minLength: v,
    maxLength: p,
    defaultDirty: R
  }), {
    setShouldValidate: K
  } = W, z = A(E, y), q = "object" == typeof w && "type" in w && "tags" === w.type, X = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = Y.onChange) || t.call(Y, r, d), K(true), null == (n = z.setHasValue) || n.call(z, "" !== r)
  }, Q = e => {
    var t, n;
    null == (t = Y.onFocus) || t.call(Y, e), null == (n = z.setIsFocused) || n.call(z, true)
  }, J = e => {
    var t, n;
    null == (t = Y.onBlur) || t.call(Y, e), null == (n = z.setIsFocused) || n.call(z, false)
  }, $ = e => {
    if (null != Y.onClear) Y.onClear(e);
    else {
      var t;
      null == (t = Y.onChange) || t.call(Y, "", d)
    }
  }, ee = i.useRef(null), et = Y.readOnly;
  null == et && false === a && (et = true);
  let en = null;
  ("boolean" == typeof k ? k && null != E && "" !== E && !et : k.show) ? en = (0, r.jsx)(N, {
    inputSize: L,
    onClick: $
  }): null != D && (en = (0, r.jsx)(C, {
    accessory: D,
    inputSize: L
  }));
  let er = null;
  null != w && (er = (0, r.jsx)(C, {
    accessory: w,
    inputSize: L
  }));
  let ei = U ? (0, r.jsx)(h.H, {
    value: E,
    maxLength: p
  }) : null;
  return (0, r.jsx)(c.N, {
    id: H,
    label: B,
    required: V,
    description: Z,
    hideLabel: F,
    helperText: M,
    errorMessage: W.hasError && null != (t = W.errorMessage) ? t : true,
    successMessage: G,
    trailingContent: ei,
    children: (0, r.jsxs)(m.U, {
      ref: ee,
      disabled: n,
      validation: W,
      fullWidth: j,
      readOnly: et,
      className: o()(b.container, b[L], {
        [b.hasLeading]: null != er,
        [b.hasTrailing]: null != en,
        [b.hasTags]: q
      }),
      children: [er, (0, r.jsx)(s.tEY, I(O({
        ringTarget: ee
      }, u), {
        children: (0, r.jsx)(P, I(O({
          name: d,
          className: b.input,
          disabled: n,
          readOnly: et,
          "aria-required": V,
          type: f,
          placeholder: _,
          maxLength: p,
          minLength: v,
          value: E,
          defaultValue: y
        }, Y), {
          onChange: X,
          onBlur: J,
          onFocus: Q,
          ref: l
        }))
      })), en]
    })
  })
}

function P(e) {
  var {
    value: t,
    defaultValue: n,
    "aria-labelledby": a
  } = e, o = T(e, ["value", "defaultValue", "aria-labelledby"]);
  let s = A(t, n),
    l = i.useContext(u.U);
  return (0, r.jsx)("input", I(O({}, o), {
    value: t,
    defaultValue: n,
    id: null == l ? true : l.controlId,
    "aria-labelledby": null != a ? a : s.titleId,
    "aria-describedby": null == l ? true : l.describedById,
    "aria-errormessage": null == l ? true : l.errorMessageId,
    "aria-invalid": (null == l ? true : l.errorMessageId) != null
  }))
}