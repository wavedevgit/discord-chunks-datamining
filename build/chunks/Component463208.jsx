/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => A,
  o: () => S
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk841878 = require("./841878.jsx"),
  Chunk74655 = require("./74655.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430490 = require("./430490.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e, t) {
  let n = i.useContext(c.q3);
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

function I(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(s.xvT, {
    variant: "text-md/normal",
    color: "input-placeholder-text",
    className: h.leadingText,
    children: t
  });
  if ("icon" in t) {
    let {
      tooltip: e
    } = t, a = y(t, ["tooltip"]), o = "md" === n ? "sm" : "xs", l = (0, r.jsx)(s.HLj, b(g({}, a), {
      size: o,
      variant: "input-accessory"
    }));
    return null != e ? (0, r.jsx)(u.u, {
      asContainer: true,
      text: e,
      shouldShow: !i,
      children: l
    }) : l
  }
  if ("button" in t) return (0, r.jsx)("div", {
    className: h.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = y(t, ["type"]);
    return (0, r.jsx)(s.QSK, b(g({}, n), {
      layout: "inline"
    }))
  }
  if ("type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: h.image
  });
  let a = t,
    o = "md" === n ? "xs" : "xxs";
  return (0, r.jsx)("div", {
    className: h.icon,
    children: (0, r.jsx)(a, {
      size: o,
      color: l.Z.colors.ICON_PRIMARY
    })
  })
}

function T(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(s.P3F, {
    className: h.clearButton,
    onClick: n,
    "aria-label": p.intl.string(p.t.VkKicX),
    children: (0, r.jsx)(s.k$p, {
      size: i,
      color: "currentColor"
    })
  })
}

function S(e) {
  var t;
  let {
    disabled: n = false,
    editable: a,
    inputRef: l,
    focusProps: c,
    name: u = "",
    type: p = "text",
    placeholder: m = "",
    maxLength: E,
    value: O,
    defaultValue: S,
    minLength: C,
    error: N,
    defaultDirty: R = false,
    leading: P,
    trailing: w,
    validateOn: D = "change",
    size: L = "md",
    fullWidth: x = false,
    clearable: M = false,
    helperText: j,
    showCharacterCount: k = false,
    successMessage: U,
    label: G,
    description: B,
    hideLabel: Z,
    required: F,
    id: V
  } = e, H = y(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage", "label", "description", "hideLabel", "required", "id"]), Y = (0, _.m)({
    validateOn: D,
    error: N,
    value: O,
    minLength: C,
    maxLength: E,
    defaultDirty: R
  }), {
    setShouldValidate: W
  } = Y, K = v(O, S), z = "object" == typeof P && "type" in P && "tags" === P.type, q = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = H.onChange) || t.call(H, r, u), W(true), null == (n = K.setHasValue) || n.call(K, "" !== r)
  }, X = e => {
    var t, n;
    null == (t = H.onFocus) || t.call(H, e), null == (n = K.setIsFocused) || n.call(K, true)
  }, Q = e => {
    var t, n;
    null == (t = H.onBlur) || t.call(H, e), null == (n = K.setIsFocused) || n.call(K, false)
  }, J = e => {
    if (null != H.onClear) H.onClear(e);
    else {
      var t;
      null == (t = H.onChange) || t.call(H, "", u)
    }
  }, $ = i.useRef(null), ee = H.readOnly;
  null == ee && false === a && (ee = true);
  let et = null;
  ("boolean" == typeof M ? M && null != O && "" !== O && !ee : M.show) ? et = (0, r.jsx)(T, {
    inputSize: L,
    onClick: J
  }): null != w && (et = (0, r.jsx)(I, {
    accessory: w,
    inputSize: L
  }));
  let en = null;
  null != P && (en = (0, r.jsx)(I, {
    accessory: P,
    inputSize: L
  }));
  let er = k ? (0, r.jsx)(d.H, {
    value: O,
    maxLength: E
  }) : null;
  return (0, r.jsx)(s.gNt, {
    id: V,
    label: G,
    required: F,
    description: B,
    hideLabel: Z,
    helperText: j,
    errorMessage: Y.hasError && null != (t = Y.errorMessage) ? t : true,
    successMessage: U,
    trailingContent: er,
    children: (0, r.jsxs)(f.U, {
      ref: $,
      disabled: n,
      validation: Y,
      fullWidth: x,
      readOnly: ee,
      className: o()(h.container, h[L], {
        [h.hasLeading]: null != en,
        [h.hasTrailing]: null != et,
        [h.hasTags]: z
      }),
      children: [en, (0, r.jsx)(s.tEY, b(g({
        ringTarget: $
      }, c), {
        children: (0, r.jsx)(A, b(g({
          name: u,
          className: h.input,
          disabled: n,
          readOnly: ee,
          "aria-required": F,
          type: p,
          placeholder: m,
          maxLength: E,
          minLength: C,
          value: O,
          defaultValue: S,
          "data-mana-component": "text-input"
        }, H), {
          onChange: q,
          onBlur: Q,
          onFocus: X,
          ref: l
        }))
      })), et]
    })
  })
}

function A(e) {
  var {
    value: t,
    defaultValue: n,
    "aria-labelledby": a
  } = e, o = y(e, ["value", "defaultValue", "aria-labelledby"]);
  let l = v(t, n),
    c = i.useContext(s.zbb);
  return (0, r.jsx)("input", b(g({}, o), {
    value: t,
    defaultValue: n,
    id: null == c ? true : c.controlId,
    "aria-labelledby": null != a ? a : l.titleId,
    "aria-describedby": null == c ? true : c.describedById,
    "aria-errormessage": null == c ? true : c.errorMessageId,
    "aria-invalid": (null == c ? true : c.errorMessageId) != null
  }))
}