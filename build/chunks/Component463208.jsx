/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk440562 = require("./440562.js"),
  Chunk753450 = require("./753450.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk841878 = require("./841878.jsx"),
  Chunk74655 = require("./74655.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430490 = require("./430490.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e, t) {
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

function S(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(f.Text, {
    variant: "text-md/normal",
    color: "input-placeholder-text",
    className: g.leadingText,
    children: t
  });
  let a = "md" === n ? "sm" : "xs";
  if ("icon" in t) {
    let {
      icon: e,
      onClick: n,
      "aria-label": o
    } = t;
    return (0, r.jsx)(f.P3F, {
      className: g.iconButton,
      onClick: n,
      "aria-label": o,
      "aria-disabled": i,
      children: (0, r.jsx)(e, {
        size: a,
        color: "currentColor"
      })
    })
  }
  if ("button" in t) return (0, r.jsx)("div", {
    className: g.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = v(t, ["type"]);
    return (0, r.jsx)(d.Q, O(b({}, n), {
      layout: "inline"
    }))
  }
  let o = t;
  return (0, r.jsx)("div", {
    className: g.icon,
    children: (0, r.jsx)(o, {
      size: a,
      color: f.TVs.colors.ICON_PRIMARY
    })
  })
}

function A(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(f.P3F, {
    className: g.clearButton,
    onClick: n,
    "aria-label": m.intl.string(m.t.VkKicX),
    children: (0, r.jsx)(f.k$p, {
      size: i,
      color: "currentColor"
    })
  })
}

function C(e) {
  var t;
  let {
    disabled: n = false,
    editable: a,
    inputRef: l,
    focusProps: u,
    name: d = "",
    type: f = "text",
    placeholder: m = "",
    maxLength: E,
    value: y,
    defaultValue: I,
    minLength: C,
    error: R,
    defaultDirty: P = false,
    leading: w,
    trailing: D,
    validateOn: x = "change",
    size: L = "md",
    fullWidth: j = false,
    clearable: M = false,
    helperText: k,
    showCharacterCount: U = false,
    successMessage: G,
    label: B,
    description: Z,
    hideLabel: F,
    required: V,
    id: H
  } = e, Y = v(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage", "label", "description", "hideLabel", "required", "id"]), W = (0, h.m)({
    validateOn: x,
    error: R,
    value: y,
    minLength: C,
    maxLength: E,
    defaultDirty: P
  }), {
    setShouldValidate: K
  } = W, z = T(y, I), q = "object" == typeof w && "type" in w && "tags" === w.type, X = e => {
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
  ("boolean" == typeof M ? M && null != y && "" !== y && !et : M.show) ? en = (0, r.jsx)(A, {
    inputSize: L,
    onClick: $
  }): null != D && (en = (0, r.jsx)(S, {
    accessory: D,
    inputSize: L
  }));
  let er = null;
  null != w && (er = (0, r.jsx)(S, {
    accessory: w,
    inputSize: L
  }));
  let ei = U ? (0, r.jsx)(_.H, {
    value: y,
    maxLength: E
  }) : null;
  return (0, r.jsx)(c.N, {
    id: H,
    label: B,
    required: V,
    description: Z,
    hideLabel: F,
    helperText: k,
    errorMessage: W.hasError && null != (t = W.errorMessage) ? t : true,
    successMessage: G,
    trailingContent: ei,
    children: (0, r.jsxs)(p.U, {
      ref: ee,
      disabled: n,
      validation: W,
      fullWidth: j,
      readOnly: et,
      className: o()(g.container, g[L], {
        [g.hasLeading]: null != er,
        [g.hasTrailing]: null != en,
        [g.hasTags]: q
      }),
      children: [er, (0, r.jsx)(s.t, O(b({
        ringTarget: ee
      }, u), {
        children: (0, r.jsx)(N, O(b({
          name: d,
          className: g.input,
          disabled: n,
          readOnly: et,
          "aria-required": V,
          type: f,
          placeholder: m,
          maxLength: E,
          minLength: C,
          value: y,
          defaultValue: I
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

function N(e) {
  var {
    value: t,
    defaultValue: n,
    "aria-labelledby": a
  } = e, o = v(e, ["value", "defaultValue", "aria-labelledby"]);
  let s = T(t, n),
    l = i.useContext(u.U);
  return (0, r.jsx)("input", O(b({}, o), {
    value: t,
    defaultValue: n,
    id: null == l ? true : l.controlId,
    "aria-labelledby": null != a ? a : s.titleId,
    "aria-describedby": null == l ? true : l.describedById,
    "aria-errormessage": null == l ? true : l.errorMessageId,
    "aria-invalid": (null == l ? true : l.errorMessageId) != null
  }))
}