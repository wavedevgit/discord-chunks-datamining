/** Chunk was on web.js **/
/** chunk id: 52164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk374649 = require("./374649.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk257053 = require("./257053.js");

function g(e) {
  let t, {
      subscription: n,
      withOverheadSeparator: i
    } = e,
    {
      analyticsLocations: g
    } = (0, l.ZP)(),
    [E] = (0, f.ED)({
      subscriptionId: n.id,
      renewal: true,
      analyticsLocations: g,
      analyticsLocation: s.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == E) return null;
  let b = i ? m.finePrintWithOverheadSeparator : m.finePrint,
    y = E.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, u.uZ)(t)
    });
  if (null == y) return null;
  let O = y.subscriptionPlanId,
    v = c.Z.get(O);
  a()(null != v, "Missing plan");
  let I = (0, d.T4)(E.total, E.currency);
  return v.interval === _.rV.YEAR ? t = h.intl.format(h.t["jPz/39"], {
    price: I,
    termsUrl: p.EYA.TERMS,
    paidURL: p.EYA.PAID_TERMS,
    privacyUrl: p.EYA.PRIVACY
  }) : v.interval === _.rV.MONTH && (t = 1 === v.intervalCount ? h.intl.format(h.t.m27GpI, {
    price: I,
    termsUrl: p.EYA.TERMS,
    paidURL: p.EYA.PAID_TERMS,
    privacyUrl: p.EYA.PRIVACY
  }) : h.intl.format(h.t["9xf5Vx"], {
    price: I,
    termsUrl: p.EYA.TERMS,
    paidURL: p.EYA.PAID_TERMS,
    privacyUrl: p.EYA.PRIVACY,
    intervalCount: v.intervalCount
  })), (0, r.jsx)(o.Text, {
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
  return t.status === p.O0b.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(g, {
    subscription: t,
    withOverheadSeparator: n
  })
}