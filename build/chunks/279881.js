/** Chunk was on 64523 **/
/** chunk id: 279881, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  I: () => a
}), require("./388685.js");
var Chunk879690 = require("./879690.js"),
  Chunk731965 = require("./731965.js"),
  Chunk699553 = require("./699553.js");
let s = new Map,
  a = (0, Chunk879690.U)((e, t) => ({
    topGames: new Map,
    tryFetchTopGames: async n => {
      let r = t().topGames,
        a = s.get(n);
      if (null != a && Date.now() - a < 36e5) {
        var o;
        return null != (o = r.get(n)) ? o : {}
      }
      let c = await (0, l.MA)(n),
        d = new Map(r);
      return d.set(n, c), (0, i.j)(() => {
        e({
          topGames: d
        })
      }), s.set(n, Date.now()), c
    }
  }))