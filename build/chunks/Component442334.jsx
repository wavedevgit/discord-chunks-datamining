/** Chunk was on web.js **/
/** chunk id: 442334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => h,
  Q: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk441849 = require("./441849.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    title: t,
    note: n,
    children: i,
    className: a,
    id: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(l.inputItem, a),
    children: [(0, r.jsxs)("div", {
      className: l.inputItemText,
      children: [(0, r.jsx)(s.Text, {
        tag: "label",
        variant: "text-md/medium",
        className: l.inputItemTitle,
        id: c,
        children: t
      }), null != n && (0, r.jsx)(s.R94, {
        className: l.__invalid_note,
        type: s.R94.Types.DESCRIPTION,
        children: n
      })]
    }), i]
  })
}

function m(e) {
  var {
    options: t,
    value: n,
    select: a,
    selectClassName: c
  } = e, d = _(e, ["options", "value", "select", "selectClassName"]);
  let p = i.useId();
  return (0, r.jsx)(h, f(u({}, d), {
    id: p,
    children: (0, r.jsx)(s.PhF, {
      "aria-labelledby": p,
      className: o()(l.selectControl, c),
      options: t,
      isSelected: e => e === n,
      select: a,
      serialize: e => String(e)
    })
  }))
}