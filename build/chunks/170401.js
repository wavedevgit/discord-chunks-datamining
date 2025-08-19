/** Chunk was on 66181 **/
/** chunk id: 170401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class a {
  search(e) {
    return new Promise(t => {
      t(this.getMatchingSettings(e))
    })
  }
  getMatchingSettings(e) {
    let t = this.cache[e];
    if (null != t) return t;
    {
      let t = [];
      return this.terms.forEach(n => {
        let [i, s] = n;
        for (let n of s)
          if (r()(e.toLowerCase(), n.toLowerCase())) {
            t.push(i);
            break
          }
      }), this.cache[e] = t, t
    }
  }
  constructor(e) {
    s(this, "terms", true), s(this, "cache", true), this.terms = e, this.cache = {}
  }
}