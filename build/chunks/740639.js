/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  z: () => p
});
var r = n(200651);
n(192379);
var i = n(692547),
  o = n(331595),
  a = n(267843);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = e => {
  var t, n, {
      size: s = "md",
      width: c,
      height: f,
      color: p = i.Z.colors.INTERACTIVE_NORMAL,
      colorClass: _ = ""
    } = e,
    h = d(e, ["size", "width", "height", "color", "colorClass"]);
  let m = (0, a.m)(s),
    g = null !== (t = null == m ? void 0 : m.width) && void 0 !== t ? t : c,
    E = null !== (n = null == m ? void 0 : m.height) && void 0 !== n ? n : f;
  return (0, r.jsxs)("svg", u(l({}, (0, o.Z)(h)), {
    xmlns: "http://www.w3.org/2000/svg",
    width: g,
    height: E,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("path", {
      d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM20 15a1 1 0 1 0-2 0v5.59l-1.08-1.08-1.21-1.22a1 1 0 0 0-1.42 1.42l1.85 1.84 2.15 2.16a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L20 20.6V15ZM19 12c.4 0 .94-.68.65-.95a7.47 7.47 0 0 0-4.15-1.98c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63.39.25.75.52 1.1.82.26.23.7.15.9-.14A3 3 0 0 1 19 12Z",
      fill: "string" == typeof p ? p : p.css,
      className: _
    }), (0, r.jsx)("path", {
      d: "M14.29 16.09c.44-.11.74-.67.42-.99A7.5 7.5 0 0 0 2 20.5c-.01.83.66 1.5 1.49 1.5a.2.2 0 0 0 .2-.16c.2-.96.56-1.87.88-2.54.1-.23.42-.15.42.1v2.1c0 .28.22.5.5.5h8c.1 0 .13-.13.06-.2l-.68-.68a3 3 0 0 1 1.4-5.03ZM9.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      fill: "string" == typeof p ? p : p.css,
      className: _
    })]
  }))
}