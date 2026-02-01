/** Chunk was on web.js **/
/** chunk id: 292666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => I,
  p: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk823607 = require("./823607.jsx"),
  Chunk511274 = require("./511274.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk100624 = require("./100624.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e, t) {
  let n = i.useContext(c.cK);
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

function v(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(s.EYj, {
    variant: "text-md/normal",
    color: "input-placeholder-text-default",
    className: _.leadingText,
    children: t
  });
  if ("icon" in t) {
    let {
      tooltip: e
    } = t, a = y(t, ["tooltip"]), o = "md" === n ? "sm" : "xs", l = (0, r.jsx)(s.TVs, E(m({}, a), {
      size: o,
      variant: "input-accessory"
    }));
    return null != e ? (0, r.jsx)(u.m_, {
      asContainer: true,
      text: e,
      shouldShow: !i,
      children: l
    }) : l
  }
  if ("button" in t) return (0, r.jsx)("div", {
    className: _.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = y(t, ["type"]);
    return (0, r.jsx)(s.CR_, E(m({}, n), {
      layout: "inline"
    }))
  }
  if ("type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: _.image
  });
  let a = t,
    o = "md" === n ? "xs" : "xxs";
  return (0, r.jsx)("div", {
    className: _.icon,
    children: (0, r.jsx)(a, {
      size: o,
      color: l.A.colors.ICON_STRONG
    })
  })
}

function A(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(s.DUT, {
    className: _.clearButton,
    onClick: n,
    "aria-label": p.intl.string(p.t.VkKicb),
    children: (0, r.jsx)(s.aXh, {
      size: i,
      color: "currentColor"
    })
  })
}

function I(e) {
  var t;
  let {
    disabled: n = false,
    editable: a,
    inputRef: l,
    focusProps: c,
    name: u = "",
    type: p = "text",
    placeholder: h = "",
    maxLength: g,
    value: b,
    defaultValue: I,
    minLength: T,
    error: C,
    defaultDirty: N = false,
    leading: w,
    trailing: R,
    validateOn: P = "change",
    size: D = "md",
    fullWidth: L = false,
    clearable: x = false,
    showCharacterCount: M = false
  } = e, j = y(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "showCharacterCount"]), {
    fieldProps: k
  } = (0, s.ndh)(j), U = (0, f.Y)({
    validateOn: P,
    error: C,
    value: b,
    minLength: T,
    maxLength: g,
    defaultDirty: N
  }), {
    setShouldValidate: G
  } = U, V = O(b, I), F = "object" == typeof w && "type" in w && "tags" === w.type, B = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = j.onChange) || t.call(j, r, u), G(true), null == (n = V.setHasValue) || n.call(V, "" !== r)
  }, H = e => {
    var t, n;
    null == (t = j.onFocus) || t.call(j, e), null == (n = V.setIsFocused) || n.call(V, true)
  }, Y = e => {
    var t, n;
    null == (t = j.onBlur) || t.call(j, e), null == (n = V.setIsFocused) || n.call(V, false)
  }, W = e => {
    if (null != j.onClear) j.onClear(e);
    else {
      var t;
      null == (t = j.onChange) || t.call(j, "", u)
    }
  }, K = i.useRef(null), z = j.readOnly;
  null == z && false === a && (z = true);
  let q = null;
  ("boolean" == typeof x ? x && null != b && "" !== b && !z : x.show) ? q = (0, r.jsx)(A, {
    inputSize: D,
    onClick: W
  }): null != R && (q = (0, r.jsx)(v, {
    accessory: R,
    inputSize: D
  }));
  let Z = null;
  null != w && (Z = (0, r.jsx)(v, {
    accessory: w,
    inputSize: D
  }));
  let Q = M ? (0, r.jsx)(d.n, {
    value: b,
    maxLength: g
  }) : null;
  return (0, r.jsx)(s.D0$, E(m({}, k), {
    errorMessage: U.hasError && null != (t = U.errorMessage) ? t : true,
    trailingAuxiliaryContent: Q,
    children: (0, r.jsxs)(s.FON, {
      ref: K,
      disabled: n,
      validation: U,
      fullWidth: L,
      readOnly: z,
      className: o()(_.container, _[D], {
        [_.hasLeading]: null != Z,
        [_.hasTrailing]: null != q,
        [_.hasTags]: F
      }),
      children: [Z, (0, r.jsx)(s.vN3, E(m({
        ringTarget: K
      }, c), {
        children: (0, r.jsx)(S, E(m({
          name: u,
          className: _.input,
          disabled: n,
          readOnly: z,
          "aria-required": k.required,
          type: p,
          placeholder: h,
          maxLength: g,
          minLength: T,
          value: b,
          defaultValue: I,
          "data-mana-component": "text-input"
        }, j), {
          onChange: B,
          onBlur: Y,
          onFocus: H,
          ref: l
        }))
      })), q]
    })
  }))
}

function S(e) {
  let {
    value: t,
    defaultValue: n,
    "aria-labelledby": a
  } = e, o = y(e, ["value", "defaultValue", "aria-labelledby"]), l = O(t, n), c = i.useContext(s._zY);
  return (0, r.jsx)("input", E(m({}, o), {
    value: t,
    defaultValue: n,
    id: null == c ? true : c.controlId,
    "aria-labelledby": null != a ? a : l.titleId,
    "aria-describedby": null == c ? true : c.describedById,
    "aria-errormessage": null == c ? true : c.errorMessageId,
    "aria-invalid": (null == c ? true : c.errorMessageId) != null
  }))
}