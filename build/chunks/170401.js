/** Chunk was on web.js **/
/** chunk id: 170401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./539854.js"), require("./781311.js"), require("./35282.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk697497 = require("./697497.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 1,
  l = .95,
  c = .8;
class u {
  search(e) {
    return new Promise(t => {
      t(this.getMatchingSettings(e))
    })
  }
  getMatchingSettings(e) {
    let t = this.cache.get(e);
    if (null != t) return t;
    {
      let t = [];
      return this.terms.forEach(n => {
        let [r, o] = n;
        for (let n of o)
          if (i()(e.toLowerCase(), n.toLowerCase())) {
            t.push(r);
            break
          }
      }), this.cache.set(e, t), t
    }
  }
  getScoredSearchResults(e) {
    let t = e.trim().toLocaleLowerCase();
    if (0 === t.length) return [];
    let n = this.cacheScored.get(t);
    if (null != n) return n;
    let r = [];
    return this.preprocessed.forEach(e => {
      let [n, {
        normalizedTokens: i,
        normalizedSearchTerms: a
      }] = e, u = 0;
      a.some(e => e === t) ? u = s : i.some(e => e.startsWith(t)) ? u = l : a.forEach(e => {
        let n = 0,
          r = (0, o.H)(t, e);
        r >= c && (n = r), u = Math.max(u, n)
      }), u > 0 && r.push({
        setting: n,
        score: u
      })
    }), this.cacheScored.set(t, r), r
  }
  constructor(e) {
    a(this, "terms", true), a(this, "cache", true), a(this, "cacheScored", true), a(this, "preprocessed", true), this.terms = e, this.cache = new Map, this.cacheScored = new Map, this.preprocessed = [], e.forEach(e => {
      let [t, n] = e, r = [], i = [], o = new Set;
      n.forEach(e => {
        r.push(e.toLocaleLowerCase()), e.includes(" ") && e.split(/\s+/).forEach(e => {
          let t = e.toLocaleLowerCase();
          o.has(t) || (i.push(t), o.add(t))
        })
      }), this.preprocessed.push([t, {
        normalizedSearchTerms: r,
        normalizedTokens: i
      }])
    })
  }
}