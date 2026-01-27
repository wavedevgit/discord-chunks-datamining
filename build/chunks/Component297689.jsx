/** Chunk was on web.js **/
/** chunk id: 297689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $m: () => m,
  nD: () => i.EN,
  vr: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk386181 = require("./386181.js"),
  Chunk825913 = require("./825913.js"),
  Chunk650682 = require("./650682.js"),
  Chunk397927 = require("./397927.js"),
  Chunk507773 = require("./507773.js");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)(i.kS, {
    className: l.nd,
    children: t
  })
}

function m(e) {
  let {
    children: t
  } = e, n = p(e, ["children"]), {
    isDisabled: i
  } = (0, a.CC)(o.k, "trigger");
  return (0, r.jsx)(s.vN3, {
    children: (0, r.jsx)(o.$, {
      slot: "trigger",
      className: l.hZ,
      children: (0, r.jsxs)(s.Text, f(u({}, n), {
        className: l.aQ,
        children: [t, !i && (0, r.jsx)(s.abt, {
          size: "xs",
          color: "currentColor",
          className: l.ai
        })]
      }))
    })
  })
}