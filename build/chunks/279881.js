/** Chunk was on 9536 **/
/** chunk id: 279881, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => s
}), require("./388685.js");
var Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk699553 = require("./699553.js");
let a = new Map,
  s = (0, Chunk663042.U)((e, t) => ({
    topGames: new Map,
    tryFetchTopGames: async n => {
      let r = t().topGames,
        s = a.get(n);
      if (null != s && Date.now() - s < 36e5) {
        var o;
        return null != (o = r.get(n)) ? o : {}
      }
      let c = await (0, l.MA)(n),
        d = new Map(r);
      return d.set(n, c), (0, i.j)(() => {
        e({
          topGames: d
        })
      }), a.set(n, Date.now()), c
    }
  }))