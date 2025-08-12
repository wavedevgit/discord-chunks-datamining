/** Chunk was on 20501 **/
/** chunk id: 52164, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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
  Chunk13347 = require("./13347.js");

function b(e) {
  let t, {
      subscription: n,
      withOverheadSeparator: r
    } = e,
    {
      analyticsLocations: b
    } = (0, o.ZP)(),
    [x] = (0, m.ED)({
      subscriptionId: n.id,
      renewal: true,
      analyticsLocations: b,
      analyticsLocation: l.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == x) return null;
  let _ = r ? f.finePrintWithOverheadSeparator : f.finePrint,
    j = x.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, d.uZ)(t)
    });
  if (null == j) return null;
  let E = j.subscriptionPlanId,
    C = c.Z.get(E);
  s()(null != C, "Missing plan");
  let O = (0, u.T4)(x.total, x.currency);
  return C.interval === p.rV.YEAR ? t = h.intl.format(h.t["jPz/39"], {
    price: O,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY
  }) : C.interval === p.rV.MONTH && (t = 1 === C.intervalCount ? h.intl.format(h.t.m27GpK, {
    price: O,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY
  }) : h.intl.format(h.t["9xf5V1"], {
    price: O,
    termsUrl: g.EYA.TERMS,
    paidURL: g.EYA.PAID_TERMS,
    privacyUrl: g.EYA.PRIVACY,
    intervalCount: C.intervalCount
  })), (0, i.jsx)(a.Text, {
    color: "text-muted",
    className: _,
    variant: "text-xs/normal",
    children: t
  })
}

function x(e) {
  let {
    subscription: t,
    withOverheadSeparator: n
  } = e;
  return t.status === g.O0b.CANCELED || t.isPurchasedExternally ? null : (0, i.jsx)(b, {
    subscription: t,
    withOverheadSeparator: n
  })
}