/** Chunk was on 78376 **/
/** chunk id: 899728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk311907 = require("./311907.js"),
  Chunk988506 = require("./988506.js"),
  Chunk97352 = require("./97352.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk231855 = require("./231855.js"),
  Chunk88001 = require("./88001.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let p = (e, t) => {
  let n, p = e === i.qT.MEMBER,
    m = (0, c.A)({
      useCachedData: true,
      fetch: p
    }),
    g = (0, r.bG)([s.A], () => s.A.getPremiumGroupSubscription());
  return e === i.qT.UNSPECIFIED ? null : {
    subheaderString: null == (n = e === i.qT.PRIMARY ? (e => {
      if (null == e) return null;
      let t = e.planIdFromItems;
      if (null == t) return null;
      let n = l.A.get(t);
      if (null == n) return null;
      let r = a.Ay.getPrice(t),
        i = (0, o.$g)(r.amount, r.currency),
        s = n.interval,
        c = n.intervalCount;
      return (0, o.CE)(i, s, c)
    })(g) : null == m ? null : _.intl.format(u.default.Nu9LNm, {
      primaryName: m,
      premiumGroupProductName: (0, d.DP)()
    })) ? "..." : n,
    bodyString: e === i.qT.PRIMARY ? _.intl.format(u.default["+R/K74"], {
      helpCenterLink: d.TE,
      premiumGroupProductName: (0, d.DP)()
    }) : _.intl.format(t ? u.default["xF+upx"] : u.default.qqfnOm, {
      helpCenterLink: d.TE
    })
  }
}