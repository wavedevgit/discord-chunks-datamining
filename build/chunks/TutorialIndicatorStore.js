/** Chunk was on web.js **/
/** chunk id: 10401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {},
  h = {},
  m = true,
  g = {},
  E = false;

function b() {
  return l.Z
}

function y() {
  if (g = {}, !m)
    for (let [e, t] of Object.entries(b())) {
      let n = false !== _[e];
      if (g[e] = n, n && null != t.prerequisites)
        for (let n of t.prerequisites) false !== _[n] && (g[e] = false)
    }
}

function O(e) {
  _ = p(d({}, _), {
    [e.tutorialId]: false
  }), h = d({}, h), delete h[e.tutorialId], y()
}

function v(e) {
  h = p(d({}, h), {
    [e.tutorialId]: e.renderData
  })
}

function S(e) {
  h = d({}, h), delete h[e.tutorialId]
}

function I() {
  m = true
}

function T(e) {
  let {
    tutorial: t
  } = e;
  E = true, m = true, _ = {}, null != t && (m = t.indicators_suppressed, t.indicators_confirmed.forEach(e => _[e] = false)), y()
}

function C() {
  E = false
}

function A(e) {
  return i.tq && ["writing-messages", "organize-by-topic"].includes(e)
}
class N extends(r = Chunk442837.ZP.Store) {
  initialize() {
    y(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(s.Z)
  }
  shouldShow(e) {
    return !(!E || m || c.a || A(e)) && (g[e] || false)
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
u(N, "displayName", "TutorialIndicatorStore");
let P = new N(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  CONNECTION_CLOSED: C,
  TUTORIAL_INDICATOR_DISMISS: O,
  TUTORIAL_INDICATOR_SHOW: v,
  TUTORIAL_INDICATOR_HIDE: S,
  TUTORIAL_INDICATOR_SUPPRESS_ALL: I
})