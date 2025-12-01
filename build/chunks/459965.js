/** Chunk was on web.js **/
/** chunk id: 459965, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => p,
  w: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668781 = require("./668781.js"),
  Chunk509545 = require("./509545.js"),
  Chunk580130 = require("./580130.js"),
  Chunk74538 = require("./74538.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

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
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (a.Z.show({
      title: u.intl.formatToPlainString(u.t["6mIX6s"], {
        paymentGatewayName: c.Vz[e.paymentGateway]
      }),
      body: u.intl.format(u.t.EOa8ei, {
        paymentGatewayName: c.Vz[e.paymentGateway],
        subscriptionManagementLink: (0, l.JE)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: u.intl.string(u.t.BddRzS)
    }), t())
  }, [e])
}
let f = [];

function p(e, t) {
  let n = (0, i.e7)([o.Z], () => null != e ? o.Z.get(e) : null),
    a = (0, i.Wu)([s.Z], () => {
      let e = null != n ? s.Z.getForSku(n.skuId) : null;
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
    hasEntitlements: !t && null != n && null != c && c.length >= l.ZP.getIntervalMonths(n.interval, n.intervalCount),
    entitlements: c
  }
}