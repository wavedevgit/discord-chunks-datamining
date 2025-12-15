/** Chunk was on web.js **/
/** chunk id: 961150, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk442837 = require("./442837.js"),
  Chunk813820 = require("./813820.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk779290 = require("./779290.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
    if (null == e) return null;
    let t = e.planIdFromItems;
    if (null == t) return null;
    let n = a.Z.get(t);
    if (null == n) return null;
    let r = s.ZP.getPrice(t),
      i = (0, l.T4)(r.amount, r.currency),
      o = n.interval,
      c = n.intervalCount;
    return (0, l.og)(i, o, c)
  },
  _ = e => null == e ? null : f.intl.format(d.default.Nu9LNm, {
    primaryName: e,
    premiumGroupProductName: (0, u.sO)()
  }),
  m = (e, t, n) => {
    let r = e === i.bF.PRIMARY ? p(n) : _(t);
    return null == r ? "..." : r
  },
  h = (e, t) => e === i.bF.PRIMARY ? f.intl.format(d.default["+R/K74"], {
    helpCenterLink: u.j3,
    premiumGroupProductName: (0, u.sO)()
  }) : f.intl.format(t ? d.default["xF+upx"] : d.default.qqfnOm, {
    helpCenterLink: u.j3
  }),
  g = (e, t) => {
    let n = e === i.bF.MEMBER,
      a = (0, c.Z)(n),
      s = (0, r.e7)([o.Z], () => o.Z.getPremiumGroupSubscription());
    return e === i.bF.UNSPECIFIED ? null : {
      subheaderString: m(e, a, s),
      bodyString: h(e, t)
    }
  }