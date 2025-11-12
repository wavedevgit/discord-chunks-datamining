/** Chunk was on web.js **/
/** chunk id: 921227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk897037 = require("./897037.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979712 = require("./979712.js");

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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
      inputClassName: a,
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
      error: C,
      defaultDirty: N = false
    } = e,
    R = m(e, ["className", "inputClassName", "disabled", "editable", "inputRef", "prefixElement", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty"]);
  let [P, D] = i.useState(N), w = E(T, S), x = e => {
    var t, n;
    null == (t = R.onChange) || t.call(R, e.currentTarget.value, y), D(true), null == (n = w.setHasValue) || n.call(w, "" !== e.currentTarget.value)
  }, L = e => {
    var t, n;
    null == (t = R.onFocus) || t.call(R, e, y), null == (n = w.setIsFocused) || n.call(w, true)
  }, M = e => {
    var t, n;
    null == (t = R.onBlur) || t.call(R, e, y), null == (n = w.setIsFocused) || n.call(w, false)
  }, j = i.useMemo(() => {
    var e, t;
    return null === C || "" === C ? null : null != C ? C : P ? null != A && (null != (e = null == T ? true : T.length) ? e : 0) < A ? u.intl.formatToPlainString(u.t["62rk1K"], {
      minLength: A
    }) : null != I && (null != (t = null == T ? true : T.length) ? t : 0) > I ? u.intl.formatToPlainString(u.t.ICT5S6, {
      maxLength: I
    }) : null : null
  }, [C, P, A, I, null == T ? true : T.length]), k = null != C && "" !== C || null != j;
  return (0, r.jsxs)("div", {
    className: o()(d.inputWrapper, n),
    children: [null != g && g, (0, r.jsx)(s.tEY, h(_({}, b), {
      children: (0, r.jsx)("input", h(_({
        name: y,
        className: o()(d.input, a, {
          [d.error]: k,
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
        "aria-labelledby": null != (t = R["aria-labelledby"]) ? t : w.titleId,
        onChange: x,
        onBlur: M,
        onFocus: L,
        ref: p
      }))
    })), (0, r.jsx)(c.V, {
      error: j
    })]
  })
}