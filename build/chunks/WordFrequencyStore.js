/** Chunk was on web.js **/
/** chunk id: 389458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./642613.js"), require("./368063.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk449908 = require("./449908.js"),
  Chunk657871 = require("./657871.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 250,
  u = .001,
  d = .01,
  f = 10,
  _ = Chunk449908.t.createEstimate(u, d),
  p = new Map,
  h = 0;

function m(e) {
  return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function g(e) {
  return m(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
}

function E(e) {
  return Array.from(e.entries()).sort((e, t) => t[1] - e[1])
}

function b(e, t) {
  if (e.size <= t) return;
  let n = E(e);
  e.clear();
  for (let r = 0; r < t; r++) {
    let [t, i] = n[r];
    e.set(t, i)
  }
}

function y() {
  let e = 1e3,
    t = 5e3,
    n = .05;
  return h < 1e3 || Math.random() < (1 - require) * Math.max(0, 1 - (h - module) / (exports - module)) + require
}

function O(e) {
  let t = false;
  for (let n of e)
    if (y())
      for (let e of g(n.content.toLowerCase())) {
        if (0 === e.length || e.length > 5) continue;
        _.update(e);
        let n = _.query(e);
        p.set(e, n), n > h && (h = n), t = true
      }
  b(p, c), t && N.emitChange()
}

function v() {
  return (0, Chunk657871.kB)("WordFrequencyStore", {
    autoTrackExposure: false
  }).enabled
}

function I(e) {
  return !!v() && (requestIdleCallback(() => {
    O(e)
  }), false)
}
let T = e => {
    let {
      messages: t
    } = e;
    return I(t)
  },
  S = e => {
    let {
      message: t
    } = e;
    return I([t])
  },
  A = e => {
    _ = o.t.createEstimate(u, d), p.clear(), h = 0
  };
class C extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      if (e.wordSketchData) try {
        e.wordSketchData && (_ = o.t.fromJSON(e.wordSketchData))
      } catch (e) {
        _ = o.t.createEstimate(u, d)
      }
      p = new Map(null != (t = e.wordCounts) ? t : [])
    }
    let n = E(p);
    if (n.length > 0) {
      let [, e] = n[0];
      h = e
    }
  }
  getState() {
    return {
      wordCounts: E(p),
      wordSketchData: _.toJSON()
    }
  }
  getMaxWordCount() {
    return h
  }
  getAllWordsSorted() {
    return E(p)
  }
  isFrequentlyUsedWord(e) {
    let t = p.get(e.toLowerCase());
    return null != t && t > f
  }
}
l(C, "displayName", "WordFrequencyStore"), l(C, "persistKey", "WordFrequencyStore");
let N = new C(Chunk570140.Z, {
    LOAD_MESSAGES_SUCCESS: T,
    MESSAGE_CREATE: S,
    DEV_TOOLS_WORD_FREQUENCY_RESET: A
  }),
  R = N