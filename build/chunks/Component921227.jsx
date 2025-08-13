/** Chunk was on web.js **/
/** chunk id: 921227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769255 = require("./769255.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e, t) {
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

function b(e) {
  var t, {
      className: n,
      inputClassName: o,
      disabled: l = false,
      editable: f,
      inputRef: p,
      prefixElement: g,
      focusProps: b,
      name: y = "",
      type: O = "text",
      placeholder: v = "",
      maxLength: I = 999,
      value: T,
      defaultValue: S,
      minLength: A,
      error: N,
      defaultDirty: C = false
    } = e,
    R = m(e, ["className", "inputClassName", "disabled", "editable", "inputRef", "prefixElement", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty"]);
  let [P, w] = i.useState(C), D = E(T, S), L = e => {
    var t, n;
    null == (t = R.onChange) || t.call(R, e.currentTarget.value, y), w(true), null == (n = D.setHasValue) || n.call(D, "" !== e.currentTarget.value)
  }, x = e => {
    var t, n;
    null == (t = R.onFocus) || t.call(R, e, y), null == (n = D.setIsFocused) || n.call(D, true)
  }, M = e => {
    var t, n;
    null == (t = R.onBlur) || t.call(R, e, y), null == (n = D.setIsFocused) || n.call(D, false)
  }, k = i.useMemo(() => {
    var e, t;
    return null === N || "" === N ? null : null != N ? N : P ? null != A && (null != (e = null == T ? true : T.length) ? e : 0) < A ? u.intl.formatToPlainString(u.t["62rk1N"], {
      minLength: A
    }) : null != I && (null != (t = null == T ? true : T.length) ? t : 0) > I ? u.intl.formatToPlainString(u.t.ICT5S0, {
      maxLength: I
    }) : null : null
  }, [N, P, A, I, null == T ? true : T.length]), j = null != N && "" !== N || null != k;
  return (0, r.jsxs)("div", {
    className: a()(d.inputWrapper, n),
    children: [null != g && g, (0, r.jsx)(s.t, h(_({}, b), {
      children: (0, r.jsx)("input", h(_({
        name: y,
        className: a()(d.input, o, {
          [d.error]: j,
          [d.disabled]: l,
          [d.editable]: f
        }),
        disabled: l,
        readOnly: false === f || true,
        type: O,
        placeholder: v,
        maxLength: I,
        minLength: A,
        value: T,
        defaultValue: S
      }, R), {
        "aria-labelledby": null != (t = R["aria-labelledby"]) ? t : D.titleId,
        onChange: L,
        onBlur: M,
        onFocus: x,
        ref: p
      }))
    })), (0, r.jsx)(c.V, {
      error: k
    })]
  })
}