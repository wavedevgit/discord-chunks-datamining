/** Chunk was on web.js **/
/** chunk id: 573725, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk511274 = require("./511274.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk713545 = require("./713545.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function E(e, t) {
  let n = i.useContext(l.cK);
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

function y(e) {
  var t;
  let {
    className: n,
    inputClassName: a,
    disabled: l = false,
    editable: f,
    inputRef: _,
    prefixElement: g,
    focusProps: y,
    name: b = "",
    type: O = "text",
    placeholder: v = "",
    maxLength: A = 999,
    value: I,
    defaultValue: S,
    minLength: T,
    error: C,
    defaultDirty: N = false
  } = e, w = m(e, ["className", "inputClassName", "disabled", "editable", "inputRef", "prefixElement", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty"]), [R, P] = i.useState(N), D = E(I, S), L = e => {
    var t, n;
    null == (t = w.onChange) || t.call(w, e.currentTarget.value, b), P(true), null == (n = D.setHasValue) || n.call(D, "" !== e.currentTarget.value)
  }, x = e => {
    var t, n;
    null == (t = w.onFocus) || t.call(w, e, b), null == (n = D.setIsFocused) || n.call(D, true)
  }, M = e => {
    var t, n;
    null == (t = w.onBlur) || t.call(w, e, b), null == (n = D.setIsFocused) || n.call(D, false)
  }, j = i.useMemo(() => {
    var e, t;
    return null === C || "" === C ? null : null != C ? C : R ? null != T && (null != (e = null == I ? true : I.length) ? e : 0) < T ? u.intl.formatToPlainString(u.t["62rk1K"], {
      minLength: T
    }) : null != A && (null != (t = null == I ? true : I.length) ? t : 0) > A ? u.intl.formatToPlainString(u.t.ICT5S6, {
      maxLength: A
    }) : null : null
  }, [C, R, T, A, null == I ? true : I.length]), k = null != C && "" !== C || null != j;
  return (0, r.jsxs)("div", {
    className: o()(d.I6, n),
    children: [null != g && g, (0, r.jsx)(s.vN3, h(p({}, y), {
      children: (0, r.jsx)("input", h(p({
        name: b,
        className: o()(d.hF, a, {
          [d.z3]: k,
          [d.r9]: l,
          [d.LL]: f
        }),
        disabled: l,
        readOnly: false === f || true,
        type: O,
        placeholder: v,
        maxLength: A,
        minLength: T,
        value: I,
        defaultValue: S
      }, w), {
        "aria-labelledby": null != (t = w["aria-labelledby"]) ? t : D.titleId,
        onChange: L,
        onBlur: M,
        onFocus: x,
        ref: _
      }))
    })), (0, r.jsx)(c.U, {
      error: j
    })]
  })
}