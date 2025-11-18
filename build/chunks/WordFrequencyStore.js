/** Chunk was on web.js **/
/** chunk id: 389458, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./642613.js"), require("./368063.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk449908 = require("./449908.js"),
  Chunk657871 = require("./657871.js"),
  Chunk240458 = require("./240458.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 5,
  _ = 250,
  p = .001,
  h = .01,
  m = 10,
  g = new Map,
  E = 0;

function b(e) {
  return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function y(e) {
  return b(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
}

function O(e) {
  return Array.from(e.entries()).sort((e, t) => t[1] - e[1])
}

function v(e, t) {
  if (e.size <= t) return;
  let n = O(e);
  e.clear();
  for (let r = 0; r < t; r++) {
    let [t, i] = n[r];
    e.set(t, i)
  }
}

function I() {
  let e = 1e3,
    t = 5e3,
    n = .05;
  return E < 1e3 || Math.random() < (1 - require) * Math.max(0, 1 - (E - module) / (exports - module)) + require
}

function T(e) {
  null == r && (r = l.t.createEstimate(p, h));
  let t = false;
  for (let n of e)
    if (I())
      for (let e of y(n.content.toLowerCase())) {
        if (0 === e.length || e.length > f) continue;
        r.update(e);
        let n = r.query(e);
        g.set(e, n), n > E && (E = n), t = true
      }
  v(g, _), t && w.emitChange()
}

function S() {
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

function A() {
  return !!Chunk353926.Z.hasLoadedExperiments && Chunk240458.V.getCurrentConfig({
    location: "WordFrequencyStore"
  }, {
    autoTrackExposure: false
  }).resetDataIfUnused
}
let C = () => {
  r = true, g.clear(), E = 0
};

function N(e) {
  return S() ? (requestIdleCallback(() => {
    T(e)
  }), false) : !!A() && g.size > 0 && (C(), true)
}
let R = e => {
    let {
      messages: t
    } = e;
    return N(t)
  },
  P = e => {
    let {
      message: t
    } = e;
    return N([t])
  };
class D extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(s.Z), null != e) {
      var t;
      if (e.wordSketchData) try {
        e.wordSketchData && (r = l.t.fromJSON(e.wordSketchData))
      } catch (e) {
        r = true
      }
      g = new Map(null != (t = e.wordCounts) ? t : [])
    }
    let n = O(g);
    if (n.length > 0) {
      let [e, t] = n[0];
      E = t
    }
  }
  getState() {
    return {
      wordCounts: O(g),
      wordSketchData: null == r ? true : r.toJSON()
    }
  }
  getMaxWordCount() {
    return E
  }
  getAllWordsSorted() {
    return O(g)
  }
  isFrequentlyUsedWord(e) {
    let t = g.get(e.toLowerCase());
    return null != t && t > m
  }
}
d(D, "displayName", "WordFrequencyStore"), d(D, "persistKey", "WordFrequencyStore");
let w = new D(Chunk570140.Z, {
    LOAD_MESSAGES_SUCCESS: R,
    MESSAGE_CREATE: P,
    DEV_TOOLS_WORD_FREQUENCY_RESET: C
  }),
  L = w