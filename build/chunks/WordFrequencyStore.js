/** Chunk was on web.js **/
/** chunk id: 389458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./642613.js"), require("./368063.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk449908 = require("./449908.js"),
  Chunk657871 = require("./657871.js"),
  Chunk240458 = require("./240458.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 5,
  d = 250,
  f = .001,
  _ = .01,
  p = 10,
  h = Chunk449908.t.createEstimate(f, _),
  m = new Map,
  g = 0;

function E(e) {
  return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function b(e) {
  return E(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
}

function y(e) {
  return Array.from(e.entries()).sort((e, t) => t[1] - e[1])
}

function O(e, t) {
  if (e.size <= t) return;
  let n = y(e);
  e.clear();
  for (let r = 0; r < t; r++) {
    let [t, i] = n[r];
    e.set(t, i)
  }
}

function v() {
  let e = 1e3,
    t = 5e3,
    n = .05;
  return g < 1e3 || Math.random() < (1 - require) * Math.max(0, 1 - (g - module) / (exports - module)) + require
}

function I(e) {
  let t = false;
  for (let n of e)
    if (v())
      for (let e of b(n.content.toLowerCase())) {
        if (0 === e.length || e.length > u) continue;
        h.update(e);
        let n = h.query(e);
        m.set(e, n), n > g && (g = n), t = true
      }
  O(m, d), t && P.emitChange()
}

function T() {
  let e = Chunk240458.V.getCurrentConfig({
      location: "WordFrequencyStore"
    }, {
      autoTrackExposure: true
    }).enabled,
    t = (0, Chunk657871.kB)("WordFrequencyStore", {
      autoTrackExposure: false
    }).enabled;
  return module || exports
}

function S(e) {
  return !!T() && (requestIdleCallback(() => {
    I(e)
  }), false)
}
let A = e => {
    let {
      messages: t
    } = e;
    return S(t)
  },
  C = e => {
    let {
      message: t
    } = e;
    return S([t])
  },
  N = e => {
    h = o.t.createEstimate(f, _), m.clear(), g = 0
  };
class R extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      if (e.wordSketchData) try {
        e.wordSketchData && (h = o.t.fromJSON(e.wordSketchData))
      } catch (e) {
        h = o.t.createEstimate(f, _)
      }
      m = new Map(null != (t = e.wordCounts) ? t : [])
    }
    let n = y(m);
    if (n.length > 0) {
      let [, e] = n[0];
      g = e
    }
  }
  getState() {
    return {
      wordCounts: y(m),
      wordSketchData: h.toJSON()
    }
  }
  getMaxWordCount() {
    return g
  }
  getAllWordsSorted() {
    return y(m)
  }
  isFrequentlyUsedWord(e) {
    let t = m.get(e.toLowerCase());
    return null != t && t > p
  }
}
c(R, "displayName", "WordFrequencyStore"), c(R, "persistKey", "WordFrequencyStore");
let P = new R(Chunk570140.Z, {
    LOAD_MESSAGES_SUCCESS: A,
    MESSAGE_CREATE: C,
    DEV_TOOLS_WORD_FREQUENCY_RESET: N
  }),
  D = P