/** Chunk was on web.js **/
/** chunk id: 899728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
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
let p = e => {
    if (null == e) return null;
    let t = e.planIdFromItems;
    if (null == t) return null;
    let n = a.A.get(t);
    if (null == n) return null;
    let r = o.Ay.getPrice(t),
      i = (0, l.$g)(r.amount, r.currency),
      s = n.interval,
      c = n.intervalCount;
    return (0, l.CE)(i, s, c)
  },
  _ = e => null == e ? null : f.intl.format(d.default.Nu9LNm, {
    primaryName: e,
    premiumGroupProductName: (0, u.DP)()
  }),
  h = (e, t, n) => {
    let r = e === i.qT.PRIMARY ? p(n) : _(t);
    return null == r ? "..." : r
  },
  m = (e, t) => e === i.qT.PRIMARY ? f.intl.format(d.default["+R/K74"], {
    helpCenterLink: u.TE,
    premiumGroupProductName: (0, u.DP)()
  }) : f.intl.format(t ? d.default["xF+upx"] : d.default.qqfnOm, {
    helpCenterLink: u.TE
  }),
  g = (e, t) => {
    let n = e === i.qT.MEMBER,
      a = (0, c.A)({
        useCachedData: true,
        fetch: n
      }),
      o = (0, r.bG)([s.A], () => s.A.getPremiumGroupSubscription());
    return e === i.qT.UNSPECIFIED ? null : {
      subheaderString: h(e, a, o),
      bodyString: m(e, t)
    }
  }