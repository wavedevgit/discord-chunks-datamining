/** Chunk was on web.js **/
"use strict";
n.d(t, {
  C: () => p
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
      fill: "string" == typeof p ? p : p.css,
      d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
      className: _
    }), (0, r.jsx)("path", {
      fill: "string" == typeof p ? p : p.css,
      fillRule: "evenodd",
      d: "M19.5 15.46a13.2 13.2 0 0 0-.72-1.62 25.3 25.3 0 0 1-2.3 2.64 21.05 21.05 0 0 1-7.24 4.9c-2.24.83-4.63.98-6.12-.5-1.48-1.49-1.33-3.88-.5-6.12.33-.89.78-1.82 1.35-2.76a16.28 16.28 0 0 1-1.35-2.76c-.83-2.24-.98-4.63.5-6.12C4.61 1.64 7 1.8 9.24 2.62c.89.33 1.82.78 2.76 1.35a13.7 13.7 0 0 1 4.62-1.86c1.58-.27 3.17-.07 4.26 1.01 1.48 1.49 1.33 3.88.5 6.12-.33.89-.78 1.82-1.35 2.76.57.94 1.02 1.87 1.35 2.76.83 2.24.98 4.63-.5 6.12-1.1 1.09-2.68 1.29-4.3 1a1.5 1.5 0 0 1-2.08-1.38 1.5 1.5 0 0 1 2.9-.52c1.01.1 1.68-.14 2.06-.52.6-.6.81-1.92.04-4ZM8.54 4.5c2 .73 4.35 2.26 6.52 4.44 1 1 1.87 2.04 2.58 3.06A22.82 22.82 0 0 1 12 17.64 22.82 22.82 0 0 1 6.36 12a22.6 22.6 0 0 1 2.27-2.76 1.5 1.5 0 1 0-1.6-1.2 25 25 0 0 0-1.8 2.12c-.3-.56-.54-1.1-.73-1.62-.77-2.08-.56-3.4.04-4 .6-.6 1.92-.81 4-.04ZM4.5 15.46c.19-.52.43-1.06.72-1.62a25.3 25.3 0 0 0 4.94 4.94c-.56.29-1.1.53-1.62.72-2.08.77-3.4.56-4-.04-.6-.6-.81-1.92-.04-4ZM16.96 4.08c-.91.16-1.98.54-3.12 1.14a25.31 25.31 0 0 1 4.94 4.94c.3-.56.53-1.1.72-1.62.77-2.08.56-3.4-.04-4-.43-.43-1.23-.68-2.5-.46Z",
      clipRule: "evenodd",
      className: _
    })]
  }))
}