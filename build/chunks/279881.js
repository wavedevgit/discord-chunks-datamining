/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  I: () => l
}), n(47120);
var r = n(230383),
  i = n(731965),
  s = n(699553);
let a = new Map,
  l = (0, r.U)((e, t) => ({
    topGames: new Map,
    tryFetchTopGames: async n => {
      let r = t().topGames,
        l = a.get(n);
      if (null != l && Date.now() - l < 36e5) {
        var o;
        return null !== (o = r.get(n)) && void 0 !== o ? o : {}
      }
      let A = await (0, s.MA)(n),
        c = new Map(r);
      return c.set(n, A), (0, i.j)(() => {
        e({
          topGames: c
        })
      }), a.set(n, Date.now()), A
    }
  }))