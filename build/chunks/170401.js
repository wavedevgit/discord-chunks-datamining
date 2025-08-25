/** Chunk was on web.js **/
/** chunk id: 170401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722);

function o(e, t, n) {
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
        let [r, o] = n;
        for (let n of o)
          if (i()(e.toLowerCase(), n.toLowerCase())) {
            t.push(r);
            break
          }
      }), this.cache[e] = t, t
    }
  }
  constructor(e) {
    o(this, "terms", true), o(this, "cache", true), this.terms = e, this.cache = {}
  }
}