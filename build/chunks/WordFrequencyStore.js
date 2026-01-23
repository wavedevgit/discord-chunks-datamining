/** Chunk was on web.js **/
/** chunk id: 236899, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./638769.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk215619 = require("./215619.js"),
  Chunk968011 = require("./968011.js"),
  Chunk369487 = require("./369487.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 5,
  p = 250,
  _ = .001,
  h = .01,
  m = 10,
  g = new Map,
  E = 0;

function y(e) {
  return e.replace(/[^\w\s]|\b\d+\b/g, "")
}

function b(e) {
  return y(e).replace(/(https?:\/\/[^\s]+|ftp:\/\/[^\s]+|www\.[^\s]+|[^\s]*\.[a-z]{2,}\/[^\s]*|[^\s]*\.(?:com|org|net)[^\s]*|<a?:(\w+):(\d+)>|<@(?:!|&)?\d+>)/g, "").split(/\s+/)
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

function A() {
  let e = 1e3,
    t = 5e3,
    n = .05;
  return E < 1e3 || Math.random() < (1 - n) * Math.max(0, 1 - (E - e) / (t - e)) + n
}

function I(e) {
  null == r && (r = l.M.createEstimate(_, h));
  let t = false;
  for (let n of e)
    if (A())
      for (let e of b(n.content.toLowerCase())) {
        if (0 === e.length || e.length > f) continue;
        r.update(e);
        let n = r.query(e);
        g.set(e, n), n > E && (E = n), t = true
      }
  v(g, p), t && D.emitChange()
}

function S() {
  let e = u.R.getCurrentConfig({
      location: "WordFrequencyStore"
    }, {
      autoTrackExposure: true
    }).enabled,
    t = (0, c.sA)("WordFrequencyStore", {
      autoTrackExposure: false
    }).enabled;
  return e || t
}

function T() {
  return !!o.A.hasLoadedExperiments && u.R.getCurrentConfig({
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
    I(e)
  }), false) : !!T() && g.size > 0 && (C(), true)
}
let w = e => {
    let {
      messages: t
    } = e;
    return N(t)
  },
  R = e => {
    let {
      message: t
    } = e;
    return N([t])
  };
class P extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(o.A), null != e) {
      var t;
      if (e.wordSketchData) try {
        e.wordSketchData && (r = l.M.fromJSON(e.wordSketchData))
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
d(P, "displayName", "WordFrequencyStore"), d(P, "persistKey", "WordFrequencyStore");
let D = new P(Chunk73153.h, {
    LOAD_MESSAGES_SUCCESS: w,
    MESSAGE_CREATE: R,
    DEV_TOOLS_WORD_FREQUENCY_RESET: C
  }),
  x = D