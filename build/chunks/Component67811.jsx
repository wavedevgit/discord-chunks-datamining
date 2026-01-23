/** Chunk was on web.js **/
/** chunk id: 67811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => b
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk397927 = require("./397927.js"),
  Chunk240248 = require("./240248.js"),
  Chunk796151 = require("./796151.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = [18, 18, 16, 16, 14, 12, 10];

function E(e) {
  var t;
  return null != (t = g[e.length - 1]) ? t : g[g.length - 1]
}

function y(e, t) {
  return s()({
    [u.AN]: true,
    [u.CW]: "always" === e,
    [u._W]: "on-hover" === e && t
  })
}
let b = e => {
  let t, n, {
      backgroundStyle: a = "always",
      children: d,
      icon: p,
      name: m,
      ariaLabel: g,
      className: b,
      style: O,
      to: v,
      onClick: A,
      selected: I = false
    } = e,
    S = h(e, ["backgroundStyle", "children", "icon", "name", "ariaLabel", "className", "style", "to", "onClick", "selected"]),
    T = (0, o.W6)();
  null == p && null != m && (n = E(t = (0, c.oN)(m)));
  let C = i.useCallback(e => {
      if (null == v);
      else if ("string" == typeof v) T.push(v);
      else {
        let {
          pathname: e = "",
          state: t
        } = v;
        T.push(e, t)
      }
      null != A && A(e)
    }, [T, v, A]),
    N = (0, l.rdh)(l.LU0.modules.guildbar.AVATAR_SIZE);
  return (0, r.jsxs)(l.DUT, _(f({}, S), {
    onClick: C,
    className: s()(b, u.iE, {
      [u.wH]: I
    }),
    style: _(f({}, O), {
      fontSize: n
    }),
    focusProps: {
      enabled: false
    },
    children: [(0, r.jsx)(l.AC4, {
      children: null != g && "" !== g ? g : null != m ? m : ""
    }), null != t ? (0, r.jsx)("div", {
      className: s()(y(a, false), u.q9),
      "aria-hidden": true,
      children: t
    }) : null, null != p ? (0, r.jsx)("img", {
      className: u.Kk,
      src: p,
      alt: " ",
      width: N,
      height: N,
      "aria-hidden": true
    }) : null, null != d ? (0, r.jsx)("div", {
      className: y(a, true),
      children: d
    }) : null]
  }))
}