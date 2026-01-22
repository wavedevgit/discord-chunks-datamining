/** Chunk was on web.js **/
/** chunk id: 159906, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk543767 = require("./543767.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk700896 = require("./700896.js");

function g(e) {
  let t, {
      subscription: n,
      withOverheadSeparator: i
    } = e,
    {
      analyticsLocations: g
    } = (0, l.Ay)(),
    [E] = (0, f.Kq)({
      subscriptionId: n.id,
      renewal: true,
      analyticsLocations: g,
      analyticsLocation: o.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == E) return null;
  let b = i ? m.r : m.a,
    y = E.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.xq)(t)
    });
  if (null == y) return null;
  let O = y.subscriptionPlanId,
    A = c.A.get(O);
  a()(null != A, "Missing plan");
  let v = (0, d.$g)(E.total, E.currency);
  return A.interval === p.WT.YEAR ? t = h.intl.format(h.t["jPz/39"], {
    price: v,
    termsUrl: _.X7G.TERMS,
    paidURL: _.X7G.PAID_TERMS,
    privacyUrl: _.X7G.PRIVACY
  }) : A.interval === p.WT.MONTH && (t = 1 === A.intervalCount ? h.intl.format(h.t.m27GpI, {
    price: v,
    termsUrl: _.X7G.TERMS,
    paidURL: _.X7G.PAID_TERMS,
    privacyUrl: _.X7G.PRIVACY
  }) : h.intl.format(h.t["9xf5Vx"], {
    price: v,
    termsUrl: _.X7G.TERMS,
    paidURL: _.X7G.PAID_TERMS,
    privacyUrl: _.X7G.PRIVACY,
    intervalCount: A.intervalCount
  })), (0, r.jsx)(s.Text, {
    color: "text-muted",
    className: b,
    variant: "text-xs/normal",
    children: t
  })
}

function E(e) {
  let {
    subscription: t,
    withOverheadSeparator: n
  } = e;
  return t.status === _.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(g, {
    subscription: t,
    withOverheadSeparator: n
  })
}