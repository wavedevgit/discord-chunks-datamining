/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk753450 = require("./753450.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk557818 = require("./557818.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430490 = require("./430490.js");

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

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e, t) {
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

function v(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "input-placeholder-text",
    className: p.leadingText,
    children: t
  });
  let a = "md" === n ? "sm" : "xs";
  if ("icon" in t) {
    let {
      icon: e,
      onClick: n,
      "aria-label": o
    } = t;
    return (0, r.jsx)(u.P3F, {
      className: p.iconButton,
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
    className: p.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = b(t, ["type"]);
    return (0, r.jsx)(c.Q, E(m({}, n), {
      layout: "inline"
    }))
  }
  let o = t;
  return (0, r.jsx)("div", {
    className: p.icon,
    children: (0, r.jsx)(o, {
      size: a,
      color: u.TVs.colors.ICON_PRIMARY
    })
  })
}

function I(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(u.P3F, {
    className: p.clearButton,
    onClick: n,
    "aria-label": _.intl.string(_.t.VkKicX),
    children: (0, r.jsx)(u.k$p, {
      size: i,
      color: "currentColor"
    })
  })
}

function T(e) {
  var t, n;
  let {
    disabled: a = false,
    editable: l,
    inputRef: c,
    focusProps: u,
    name: _ = "",
    type: h = "text",
    placeholder: g = "",
    maxLength: y,
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
  } = e, U = b(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage"]), G = O(T, S), B = (0, f.m)({
    validateOn: w,
    error: C,
    value: T,
    minLength: A,
    maxLength: y,
    defaultDirty: N
  }), {
    setShouldValidate: Z
  } = B, V = "object" == typeof R && "type" in R && "tags" === R.type, F = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = U.onChange) || t.call(U, r, _), Z(true), null == (n = G.setHasValue) || n.call(G, "" !== r)
  }, H = e => {
    var t, n;
    null == (t = U.onFocus) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, true)
  }, Y = e => {
    var t, n;
    null == (t = U.onBlur) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, false)
  }, W = e => {
    var t, n, r;
    if (V && "Backspace" === e.key && "" === T) {
      let t = null != (n = null == R ? true : R.items) ? n : [];
      if (t.length > 0) {
        let n = t[t.length - 1];
        e.preventDefault(), e.stopPropagation(), null == R || null == (r = R.onRemove) || r.call(R, new Set([n.id]))
      }
    }
    null == U || null == (t = U.onKeyDown) || t.call(U, e)
  }, K = e => {
    if (null != U.onClear) U.onClear(e);
    else {
      var t;
      null == (t = U.onChange) || t.call(U, "", _)
    }
  }, z = i.useRef(null), q = U.readOnly;
  null == q && false === l && (q = true);
  let X = null;
  ("boolean" == typeof L ? L && null != T && "" !== T && !q : L.show) ? X = (0, r.jsx)(I, {
    inputSize: D,
    onClick: K
  }): null != P && (X = (0, r.jsx)(v, {
    accessory: P,
    inputSize: D
  }));
  let Q = null;
  return null != R && (Q = (0, r.jsx)(v, {
    accessory: R,
    inputSize: D
  })), (0, r.jsxs)(d.J, {
    ref: z,
    disabled: a,
    validation: B,
    fullWidth: x,
    readOnly: q,
    helperText: j,
    successMessage: k,
    characterCount: M ? null != (t = null == T ? true : T.length) ? t : 0 : true,
    characterCountMaxLength: y,
    className: o()(p.container, p[D], {
      [p.leading]: null != Q,
      [p.trailing]: null != X,
      [p.tags]: V
    }),
    children: [Q, (0, r.jsx)(s.t, E(m({
      ringTarget: z
    }, u), {
      children: (0, r.jsx)("input", E(m({
        name: _,
        className: p.input,
        disabled: a,
        readOnly: q,
        type: h,
        placeholder: g,
        maxLength: y,
        minLength: A,
        value: T,
        defaultValue: S
      }, U), {
        "aria-labelledby": null != (n = U["aria-labelledby"]) ? n : G.titleId,
        onChange: F,
        onBlur: Y,
        onFocus: H,
        onKeyDown: W,
        ref: c
      }))
    })), X]
  })
}