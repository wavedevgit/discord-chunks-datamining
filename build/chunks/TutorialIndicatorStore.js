/** Chunk was on web.js **/
/** chunk id: 10401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var r, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk268967 = require("./268967.js"),
  Chunk188785 = require("./188785.js");

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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {},
  h = {},
  m = true,
  g = {},
  E = false;

function b() {
  return Chunk268967.Z
}

function y() {
  if (g = {}, !m)
    for (let [e, t] of Object.entries(b())) {
      let n = false !== p[module];
      if (g[module] = require, require && null != exports.prerequisites)
        for (let n of exports.prerequisites) false !== p[require] && (g[module] = false)
    }
}

function O(e) {
  p = _(d({}, p), {
    [e.tutorialId]: false
  }), h = d({}, h), delete h[e.tutorialId], y()
}

function v(e) {
  h = _(d({}, h), {
    [e.tutorialId]: e.renderData
  })
}

function I(e) {
  h = d({}, h), delete h[e.tutorialId]
}

function T() {
  m = true
}

function S(e) {
  let {
    tutorial: t
  } = e;
  E = true, m = true, p = {}, null != t && (m = t.indicators_suppressed, t.indicators_confirmed.forEach(e => p[e] = false)), y()
}

function A() {
  E = false
}

function N(e) {
  return i.tq && ["writing-messages", "organize-by-topic"].includes(e)
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    y(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(Chunk38618.Z)
  }
  shouldShow(e) {
    return !(!E || m || c.a || N(e)) && (g[e] || false)
  }
  shouldShowAnyIndicators() {
    return !m
  }
  getIndicators() {
    return h
  }
  getData() {
    return b()
  }
  getDefinition(e) {
    let t = this.getData();
    return null != t ? t[e] : null
  }
}
u(C, "displayName", "TutorialIndicatorStore");
let R = new C(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  CONNECTION_CLOSED: A,
  TUTORIAL_INDICATOR_DISMISS: O,
  TUTORIAL_INDICATOR_SHOW: v,
  TUTORIAL_INDICATOR_HIDE: I,
  TUTORIAL_INDICATOR_SUPPRESS_ALL: T
})