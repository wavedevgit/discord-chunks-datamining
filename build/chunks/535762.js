/** Chunk was on web.js **/
/** chunk id: 535762, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./321073.js"), require("./733351.js"), require("./747238.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk18108 = require("./18108.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 1,
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
        let [r, a] = n;
        for (let n of a)
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
        normalizedSearchTerms: s
      }] = e, u = 0;
      s.some(e => e === t) ? u = o : i.some(e => e.startsWith(t)) ? u = l : s.forEach(e => {
        let n = 0,
          r = (0, a.g)(t, e);
        r >= c && (n = r), u = Math.max(u, n)
      }), u > 0 && r.push({
        setting: n,
        score: u
      })
    }), this.cacheScored.set(t, r), r
  }
  constructor(e) {
    s(this, "terms", true), s(this, "cache", true), s(this, "cacheScored", true), s(this, "preprocessed", true), this.terms = e, this.cache = new Map, this.cacheScored = new Map, this.preprocessed = [], e.forEach(e => {
      let [t, n] = e, r = [], i = [], a = new Set;
      n.forEach(e => {
        r.push(e.toLocaleLowerCase()), e.includes(" ") && e.split(/\s+/).forEach(e => {
          let t = e.toLocaleLowerCase();
          a.has(t) || (i.push(t), a.add(t))
        })
      }), this.preprocessed.push([t, {
        normalizedSearchTerms: r,
        normalizedTokens: i
      }])
    })
  }
}