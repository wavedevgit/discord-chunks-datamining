/** Chunk was on web.js **/
/** chunk id: 602667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk451478 = require("./451478.js"),
  Chunk915750 = require("./915750.jsx");

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
let _ = e => {
    let [t, n] = i.useState(false), r = null != e ? e : t, o = r !== (0, s.Z)(r);
    return {
      visible: r,
      visibleChanged: o,
      reference: (0, a.O)(e => n(e), c.PI)
    }
  },
  m = () => {
    let e = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.isFocused()),
      t = (0, Chunk110924.Z)(module),
      n = module !== exports;
    return {
      focused: module,
      focusedChanged: require
    }
  },
  h = Chunk473749.memo(function(e) {
    let {
      focused: t,
      focusedChanged: n
    } = m(), {
      visible: i,
      visibleChanged: a,
      reference: o
    } = _(e.overrideVisibility);
    return (0, r.jsx)(c.ui, p(d({}, e), {
      focused: t,
      focusedChanged: n,
      visible: i,
      visibleChanged: a,
      reference: o
    }), (0, c.B5)(e.questOrQuests, e.questContent))
  })