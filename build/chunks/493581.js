/** Chunk was on 39048 **/
/** chunk id: 493581, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => a
}), require("./896048.js");
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk250527 = require("./250527.js");
let s = new Map,
  a = (0, Chunk353640.v)((e, t) => ({
    topGames: new Map,
    tryFetchTopGames: async n => {
      let r = t().topGames,
        a = s.get(n);
      if (null != a && Date.now() - a < 36e5) {
        var o;
        return null != (o = r.get(n)) ? o : {}
      }
      let c = await (0, l.U7)(n),
        d = new Map(r);
      return d.set(n, c), (0, i.r)(() => {
        e({
          topGames: d
        })
      }), s.set(n, Date.now()), c
    }
  }))