/** Chunk was on web.js **/
/** chunk id: 482361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
}), require("./896048.js");
var r, Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk142120 = require("./142120.js"),
  Chunk253595 = require("./253595.js");

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
require("./436317.js");
let p = {},
  _ = {},
  h = true,
  m = {},
  g = false;

function E() {
  return l.A
}

function y() {
  if (m = {}, !h)
    for (let [e, t] of Object.entries(E())) {
      let n = false !== p[e];
      if (m[e] = n, n && null != t.prerequisites)
        for (let n of t.prerequisites) false !== p[n] && (m[e] = false)
    }
}

function b(e) {
  p = f(u({}, p), {
    [e.tutorialId]: false
  }), _ = u({}, _), delete _[e.tutorialId], y()
}

function O(e) {
  _ = f(u({}, _), {
    [e.tutorialId]: e.renderData
  })
}

function v(e) {
  _ = u({}, _), delete _[e.tutorialId]
}

function A() {
  h = true
}

function I(e) {
  let {
    tutorial: t
  } = e;
  g = true, h = true, p = {}, null != t && (h = t.indicators_suppressed, t.indicators_confirmed.forEach(e => p[e] = false)), y()
}

function S() {
  g = false
}

function T(e) {
  return i.Fr && ["writing-messages", "organize-by-topic"].includes(e)
}
class C extends(r = Chunk311907.Ay.Store) {
  initialize() {
    y(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A)
  }
  shouldShow(e) {
    return !(!g || h || T(e)) && (m[e] || false)
  }
  shouldShowAnyIndicators() {
    return !h
  }
  getIndicators() {
    return _
  }
  getData() {
    return E()
  }
  getDefinition(e) {
    let t = this.getData();
    return null != t ? t[e] : null
  }
}
c(C, "displayName", "TutorialIndicatorStore");
let N = new C(Chunk73153.h, {
  CONNECTION_OPEN: I,
  CONNECTION_CLOSED: S,
  TUTORIAL_INDICATOR_DISMISS: b,
  TUTORIAL_INDICATOR_SHOW: O,
  TUTORIAL_INDICATOR_HIDE: v,
  TUTORIAL_INDICATOR_SUPPRESS_ALL: A
})