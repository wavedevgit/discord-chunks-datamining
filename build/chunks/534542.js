/** Chunk was on web.js **/
"use strict";
n.d(t, {
  R: () => g,
  g: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(118012),
  s = n(124952);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = {
    DEFAULT: "default",
    INPUT_PLACEHOLDER: "placeholder",
    DESCRIPTION: "description",
    LABEL_BOLD: "labelBold",
    LABEL_SELECTED: "labelSelected",
    LABEL_DESCRIPTOR: "labelDescriptor",
    ERROR: "error",
    SUCCESS: "success"
  },
  h = {
    DEFAULT: "modeDefault",
    DISABLED: "modeDisabled",
    SELECTABLE: "modeSelectable"
  };

function g(e) {
  var {
    type: t = p.DEFAULT,
    className: n,
    disabled: i,
    selectable: l,
    children: u,
    style: _
  } = e, g = f(e, ["type", "className", "disabled", "selectable", "children", "style"]);
  let m = h.DEFAULT;
  return i ? m = h.DISABLED : l && (m = h.SELECTABLE), (0, r.jsx)(a.Z, d(c({
    className: o()(s[t], n, s[m]),
    style: _
  }, g), {
    children: u
  }))
}
g.Types = p