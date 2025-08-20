/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk557818 = require("./557818.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430490 = require("./430490.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e, t) {
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

function O(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "input-placeholder-text",
    className: _.leadingText,
    children: t
  });
  let a = "md" === n ? "sm" : "xs";
  if ("icon" in t) {
    let {
      icon: e,
      onClick: n,
      "aria-label": o
    } = t;
    return (0, r.jsx)(c.P3F, {
      className: _.iconButton,
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
    className: _.icon,
    children: t.button
  });
  let o = t;
  return (0, r.jsx)("div", {
    className: _.icon,
    children: (0, r.jsx)(o, {
      size: a,
      color: c.TVs.colors.ICON_PRIMARY
    })
  })
}

function v(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(c.P3F, {
    className: _.clearButton,
    onClick: n,
    "aria-label": f.intl.string(f.t.VkKicX),
    children: (0, r.jsx)(c.k$p, {
      size: i,
      color: "currentColor"
    })
  })
}

function I(e) {
  var t, n;
  let {
    disabled: a = false,
    editable: l,
    inputRef: c,
    focusProps: f,
    name: p = "",
    type: m = "text",
    placeholder: b = "",
    maxLength: I,
    value: T,
    defaultValue: S,
    minLength: A,
    error: C,
    defaultDirty: N = false,
    leading: R,
    trailing: P,
    validateOn: w = "change",
    size: D = "md",
    fullWidth: x = false,
    clearable: L = false,
    helperText: j,
    showCharacterCount: M = false,
    successMessage: k
  } = e, U = E(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage"]), G = y(T, S), B = (0, d.m)({
    validateOn: w,
    error: C,
    value: T,
    minLength: A,
    maxLength: I,
    defaultDirty: N
  }), {
    setShouldValidate: Z
  } = B, V = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = U.onChange) || t.call(U, r, p), Z(true), null == (n = G.setHasValue) || n.call(G, "" !== r)
  }, F = e => {
    var t, n;
    null == (t = U.onFocus) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, true)
  }, H = e => {
    var t, n;
    null == (t = U.onBlur) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, false)
  }, Y = e => {
    if (null != U.onClear) U.onClear(e);
    else {
      var t;
      null == (t = U.onChange) || t.call(U, "", p)
    }
  }, W = i.useRef(null), K = U.readOnly;
  null == K && false === l && (K = true);
  let z = null;
  ("boolean" == typeof L ? L && null != T && "" !== T && !K : L.show) ? z = (0, r.jsx)(v, {
    inputSize: D,
    onClick: Y
  }): null != P && (z = (0, r.jsx)(O, {
    accessory: P,
    inputSize: D
  }));
  let q = null;
  return null != R && (q = (0, r.jsx)(O, {
    accessory: R,
    inputSize: D
  })), (0, r.jsxs)(u.J, {
    disabled: a,
    validation: B,
    fullWidth: x,
    readOnly: K,
    helperText: j,
    successMessage: k,
    characterCount: M ? null != (t = null == T ? true : T.length) ? t : 0 : true,
    characterCountMaxLength: I,
    className: o()(_.container, _[D], {
      [_.leading]: null != q,
      [_.trailing]: null != z
    }),
    children: [q, (0, r.jsx)(s.t, g(h({
      ringTarget: W
    }, f), {
      children: (0, r.jsx)("input", g(h({
        name: p,
        className: _.input,
        disabled: a,
        readOnly: K,
        type: m,
        placeholder: b,
        maxLength: I,
        minLength: A,
        value: T,
        defaultValue: S
      }, U), {
        "aria-labelledby": null != (n = U["aria-labelledby"]) ? n : G.titleId,
        onChange: V,
        onBlur: H,
        onFocus: F,
        ref: c
      }))
    })), z]
  })
}