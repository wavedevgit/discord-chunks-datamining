/** Chunk was on web.js **/
/** chunk id: 302914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk35215 = require("./35215.jsx"),
  Chunk879048 = require("./879048.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function d(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    applications: s,
    popoutTargetElementRef: c,
    onGameSheetOpened: d,
    onGameSheetClosed: f
  } = e;
  return e => (0, r.jsx)(a.Z, {
    quest: t,
    sourceQuestContent: n,
    applications: null != s ? s : [],
    targetElementRef: c,
    onGameSheetOpened: d,
    onGameSheetClosed: f,
    children: (t, n) => (0, r.jsx)(i.P3F, u(l({}, t), {
      style: {
        display: "inline-block",
        cursor: "pointer"
      },
      innerRef: n,
      children: (0, r.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-link",
        className: o.instructionsLink,
        children: e
      })
    }))
  }, t.id)
}