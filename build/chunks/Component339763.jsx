/** Chunk was on web.js **/
/** chunk id: 339763, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk475922 = require("./475922.jsx"),
  Chunk534149 = require("./534149.jsx"),
  Chunk582754 = require("./582754.js"),
  Chunk736653 = require("./736653.js"),
  Chunk796688 = require("./796688.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = {
    width: 60,
    height: 60
  },
  g = 3e3,
  E = e => {
    let {
      currentAnimationType: t,
      animationTypeRef: n,
      onSetAnimationDurationMS: r,
      play: a,
      getDuration: s
    } = e, o = s(), l = null != o ? 1e3 * o : g;
    (0, i.useEffect)(() => {
      null !== t && t !== n.current && (n.current = t, a())
    }, [t, a, n]), (0, i.useEffect)(() => {
      r(l)
    }, [r, l])
  },
  y = e => {
    let {
      currentAnimationType: t
    } = e, n = _(e, ["currentAnimationType"]), i = (0, s.N)(null != t ? t : "earn"), {
      Component: a
    } = i;
    return E(d({
      currentAnimationType: t
    }, n, _(i, ["Component"]))), (0, r.jsx)(a, p(d({}, m), {
      size: "custom",
      className: c.E$,
      useLottieDefaultColors: true
    }))
  },
  b = e => {
    let {
      currentAnimationType: t
    } = e, n = _(e, ["currentAnimationType"]), i = (0, a.q)(null != t ? t : "earn"), {
      Component: s
    } = i;
    return E(d({
      currentAnimationType: t
    }, n, _(i, ["Component"]))), (0, r.jsx)(s, p(d({}, m), {
      size: "custom",
      className: c.E$,
      useLottieDefaultColors: true
    }))
  },
  O = e => {
    let t = (0, l.Ay)();
    return (0, o.qB)(t) ? (0, r.jsx)(b, d({}, e)) : (0, r.jsx)(y, d({}, e))
  }