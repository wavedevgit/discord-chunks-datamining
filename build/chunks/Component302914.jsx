/** Chunk was on web.js **/
/** chunk id: 302914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js"), require("./952265.js");
var Chunk481060 = require("./481060.js"),
  Chunk35215 = require("./35215.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  let {
    applications: t,
    popoutTargetElementRef: n,
    onGameSheetOpened: o,
    onGameSheetClosed: l
  } = e;
  return e => (0, r.jsx)(a.Z, {
    applications: null != t ? t : [],
    targetElementRef: n,
    onGameSheetOpened: o,
    onGameSheetClosed: l,
    children: (t, n) => (0, r.jsx)(i.P3F, c(s({}, t), {
      style: {
        display: "inline-block",
        cursor: "pointer"
      },
      innerRef: n,
      children: (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-link",
        style: {
          display: "inline-block",
          fontSize: "inherit"
        },
        children: e
      })
    }))
  })
}