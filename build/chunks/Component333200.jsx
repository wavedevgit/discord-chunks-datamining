/** Chunk was on web.js **/
/** chunk id: 333200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk496600 = require("./496600.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk680765 = require("./680765.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  var {
    label: t,
    hideLabel: n,
    required: l,
    description: u,
    helperText: _,
    errorMessage: p,
    successMessage: h,
    wrapTags: m,
    maxOptionsVisible: g = 5
  } = e, E = f(e, ["label", "hideLabel", "required", "description", "helperText", "errorMessage", "successMessage", "wrapTags", "maxOptionsVisible"]);
  let {
    disabled: b
  } = E, {
    isOpen: y,
    setIsOpen: O,
    refs: v,
    floatingStyles: I,
    getFloatingProps: T,
    getReferenceProps: S
  } = (0, i.ON0)({
    placement: "bottom",
    matchReferenceWidth: true,
    setHeight: () => 40 * g
  });
  return (0, r.jsxs)(a.uz, d(c({}, E), {
    isCollapsible: true,
    isOpen: y,
    setIsOpen: O,
    children: [(0, r.jsx)(a.Ct, c({
      label: t,
      hideLabel: n,
      required: l,
      disabled: b,
      description: u,
      helperText: _,
      errorMessage: p,
      successMessage: h,
      wrapTags: m,
      showChevronButton: true,
      ref: v.setReference
    }, S())), y && (0, r.jsx)(i.w0Z, d(c({
      ref: v.setFloating,
      className: s.selectDropdown,
      style: I
    }, T()), {
      children: (0, r.jsx)(a.px, {
        renderListItem: e => (0, r.jsx)(o.W, c({}, e))
      })
    }))]
  }))
}