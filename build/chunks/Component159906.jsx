/** Chunk was on 60667 **/
/** chunk id: 159906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
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

function f(e) {
  let t, {
      subscription: n,
      withOverheadSeparator: i
    } = e,
    {
      analyticsLocations: f
    } = (0, o.Ay)(),
    [h] = (0, _.Kq)({
      subscriptionId: n.id,
      renewal: true,
      analyticsLocations: f,
      analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == h) return null;
  let b = i ? A.r : A.a,
    E = h.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, d.xq)(t)
    });
  if (null == E) return null;
  let x = E.subscriptionPlanId,
    O = c.A.get(x);
  l()(null != O, "Missing plan");
  let C = (0, u.$g)(h.total, h.currency);
  return O.interval === p.WT.YEAR ? t = g.intl.format(g.t["jPz/39"], {
    price: C,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY
  }) : O.interval === p.WT.MONTH && (t = 1 === O.intervalCount ? g.intl.format(g.t.m27GpI, {
    price: C,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY
  }) : g.intl.format(g.t["9xf5Vx"], {
    price: C,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY,
    intervalCount: O.intervalCount
  })), (0, r.jsx)(s.Text, {
    color: "text-muted",
    className: b,
    variant: "text-xs/normal",
    children: t
  })
}

function h(e) {
  let {
    subscription: t,
    withOverheadSeparator: n
  } = e;
  return t.status === m.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(f, {
    subscription: t,
    withOverheadSeparator: n
  })
}