/** Chunk was on web.js **/
/** chunk id: 389458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
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
let u = 250,
  d = .001,
  f = .01,
  _ = 10,
  p = Chunk449908.t.createEstimate(d, f),
  h = new Map,
  m = 0;

function g(e) {
  return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function E(e) {
  return g(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
}

function b(e) {
  return Array.from(e.entries()).sort((e, t) => t[1] - e[1])
}

function y(e, t) {
  if (e.size <= t) return;
  let n = b(e);
  e.clear();
  for (let r = 0; r < t; r++) {
    let [t, i] = n[r];
    e.set(t, i)
  }
}

function O() {
  let e = 1e3,
    t = 5e3,
    n = .05;
  return m < 1e3 || Math.random() < (1 - require) * Math.max(0, 1 - (m - module) / (exports - module)) + require
}

function v(e) {
  let t = false;
  for (let n of e)
    if (O())
      for (let e of E(n.content.toLowerCase())) {
        if (0 === e.length || e.length > 5) continue;
        p.update(e);
        let n = p.query(e);
        h.set(e, n), n > m && (m = n), t = true
      }
  y(h, u), t && R.emitChange()
}

function I() {
  let e = Chunk240458.V.getCurrentConfig({
      location: "WordFrequencyStore"
    }, {
      autoTrackExposure: false
    }).enabled,
    t = (0, Chunk657871.kB)("WordFrequencyStore", {
      autoTrackExposure: false
    }).enabled;
  return module || exports
}

function T(e) {
  return !!I() && (requestIdleCallback(() => {
    v(e)
  }), false)
}
let S = e => {
    let {
      messages: t
    } = e;
    return T(t)
  },
  A = e => {
    let {
      message: t
    } = e;
    return T([t])
  },
  C = e => {
    p = o.t.createEstimate(d, f), h.clear(), m = 0
  };
class N extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t;
      if (e.wordSketchData) try {
        e.wordSketchData && (p = o.t.fromJSON(e.wordSketchData))
      } catch (e) {
        p = o.t.createEstimate(d, f)
      }
      h = new Map(null != (t = e.wordCounts) ? t : [])
    }
    let n = b(h);
    if (n.length > 0) {
      let [, e] = n[0];
      m = e
    }
  }
  getState() {
    return {
      wordCounts: b(h),
      wordSketchData: p.toJSON()
    }
  }
  getMaxWordCount() {
    return m
  }
  getAllWordsSorted() {
    return b(h)
  }
  isFrequentlyUsedWord(e) {
    let t = h.get(e.toLowerCase());
    return null != t && t > _
  }
}
c(N, "displayName", "WordFrequencyStore"), c(N, "persistKey", "WordFrequencyStore");
let R = new N(Chunk570140.Z, {
    LOAD_MESSAGES_SUCCESS: S,
    MESSAGE_CREATE: A,
    DEV_TOOLS_WORD_FREQUENCY_RESET: C
  }),
  P = R