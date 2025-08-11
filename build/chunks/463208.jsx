/** Chunk was on web.js **/
/** chunk id: 463208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk557818 = require("./557818.js"),
  Chunk897037 = require("./897037.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk953100 = require("./953100.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
    inputSize: n
  } = e;
  if ("string" == typeof t) return <c.Text variant={"text-md/normal"} color={"input-placeholder-text"} className={_.leadingText}>{t}</c.Text>;
  let i = "md" === n ? "sm" : "xs";
  if ("icon" in t) {
    let {
      icon: e,
      onClick: n,
      "aria-label": o
    } = t;
    return <c.P3F className={_.iconButton} onClick={n} aria-label={o}><e size={i} color={"currentColor"} /></c.P3F>
  }
  let o = t;
  return <div className={_.icon}><o size={i} color={c.TVs.colors.ICON_PRIMARY} /></div>
}

function v(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return <c.P3F className={_.clearButton} onClick={n} aria-label={f.intl.string(f.t.VkKicX)}><c.k$p size={i} color={"currentColor"} /></c.P3F>
}

function I(e) {
  var t, n;
  let {
    disabled: o = false,
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
    error: N,
    defaultDirty: C = false,
    leading: R,
    trailing: P,
    validateOn: w = "change",
    size: D = "md",
    fullWidth: L = false,
    clearable: x = false,
    helperText: M,
    showCharacterCount: k = false,
    successMessage: j
  } = e, U = E(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "helperText", "showCharacterCount", "successMessage"]), G = y(T, S), B = (0, d.m)({
    validateOn: w,
    error: N,
    value: T,
    minLength: A,
    maxLength: I,
    defaultDirty: C
  }), {
    setShouldValidate: Z
  } = B, F = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = U.onChange) || t.call(U, r, p), Z(true), null == (n = G.setHasValue) || n.call(G, "" !== r)
  }, V = e => {
    var t, n;
    null == (t = U.onFocus) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, true)
  }, H = e => {
    var t, n;
    null == (t = U.onBlur) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, false)
  }, Y = () => {
    var e;
    null == (e = U.onChange) || e.call(U, "", p)
  }, W = i.useRef(null), K = U.readOnly;
  null == K && false === l && (K = true);
  let z = null;
  x && null != T && "" !== T && !K ? z = <v inputSize={D} onClick={Y} /> : null != P && (z = <O accessory={P} inputSize={D} />);
  let q = null;
  return null != R && (q = <O accessory={R} inputSize={D} />), <u.J disabled={o} validation={B} fullWidth={L} readOnly={K} helperText={M} successMessage={j} characterCount={k ? null != (t = null == T ? true : T.length) ? t : 0 : true} characterCountMaxLength={I} className={a()(_.container, _[D], {
      [_.leading]: null != q,
      [_.trailing]: null != z
    })}>{q}{<s.t{...g(h({
      ringTarget: W
    }, f), {
      children: (0, r.jsx)("input", g(h({
        name: p,
        className: _.input,
        disabled: o,
        readOnly: K,
        type: m,
        placeholder: b,
        maxLength: I,
        minLength: A,
        value: T,
        defaultValue: S
      }, U), {
        "aria-labelledby": null != (n = U["aria-labelledby"]) ? n : G.titleId,
        onChange: F,
        onBlur: H,
        onFocus: V,
        ref: c
      }))
    })} />}{z}</u.J>
}