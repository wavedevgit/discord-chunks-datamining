/** Chunk was on web.js **/
/** chunk id: 333200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk816529 = require("./816529.jsx"),
  Chunk496600 = require("./496600.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk747344 = require("./747344.js");

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
    required: i,
    description: o,
    helperText: s,
    errorMessage: l,
    successMessage: u,
    wrapTags: _
  } = e, p = f(e, ["label", "hideLabel", "required", "description", "helperText", "errorMessage", "successMessage", "wrapTags"]);
  let {
    disabled: m
  } = p;
  return (0, r.jsxs)(a.uz, d(c({}, p), {
    isCollapsible: true,
    children: [(0, r.jsx)(a.Ct, {
      label: t,
      hideLabel: n,
      required: i,
      disabled: m,
      description: o,
      helperText: s,
      errorMessage: l,
      successMessage: u,
      wrapTags: _,
      showChevronButton: true
    }), (0, r.jsx)(h, {})]
  }))
}

function h() {
  let {
    state: e,
    setState: t,
    inputFieldRef: n
  } = (0, Chunk747344.T)();

  function l() {
    exports(e => d(c({}, e), {
      isOpen: false
    }))
  }
  return (0, Chunk951288.jsx)(Chunk816529.L, {
    targetElementRef: require,
    dialog: false,
    isOpen: module.isOpen,
    width: module.width,
    height: module.dropDownHeight,
    onRequestClose: l,
    children: (0, Chunk951288.jsx)(Chunk496600.px, {
      renderListItem: e => (0, r.jsx)(o.W, c({}, e))
    })
  })
}