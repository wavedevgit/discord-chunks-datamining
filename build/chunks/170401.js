/** Chunk was on web.js **/
/** chunk id: 170401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
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
        let [r, a] = n;
        for (let n of a)
          if (i()(e.toLowerCase(), n.toLowerCase())) {
            t.push(r);
            break
          }
      }), this.cache[e] = t, t
    }
  }
  constructor(e) {
    a(this, "terms", true), a(this, "cache", true), this.terms = e, this.cache = {}
  }
}