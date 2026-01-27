/** Chunk was on web.js **/
/** chunk id: 344159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => p,
  s: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk157559 = require("./157559.js"),
  Chunk97352 = require("./97352.js"),
  Chunk469778 = require("./469778.js"),
  Chunk927578 = require("./927578.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t, n) {
  let i = {
      closeModal: t,
      isGift: n
    },
    o = r.useRef(i);
  r.useEffect(() => {
    o.current = i
  }), r.useEffect(() => {
    let {
      closeModal: t,
      isGift: n
    } = o.current;
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (a.A.show({
      title: u.intl.formatToPlainString(u.t["6mIX6s"], {
        paymentGatewayName: c.qm[e.paymentGateway]
      }),
      body: u.intl.format(u.t.EOa8ei, {
        paymentGatewayName: c.qm[e.paymentGateway],
        subscriptionManagementLink: (0, l.tW)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: u.intl.string(u.t.BddRzS)
    }), t())
  }, [e])
}
let f = [];

function p(e, t) {
  let n = (0, i.bG)([o.A], () => null != e ? o.A.get(e) : null),
    a = (0, i.yK)([s.A], () => {
      let e = null != n ? s.A.getForSku(n.skuId) : null;
      return null != e ? Array.from(e) : f
    }),
    c = r.useMemo(() => a.filter(e => {
      let {
        parentId: t,
        consumed: n
      } = e;
      return null != t && !n
    }), [a]);
  return {
    hasEntitlements: !t && null != n && null != c && c.length >= l.Ay.getIntervalMonths(n.interval, n.intervalCount),
    entitlements: c
  }
}