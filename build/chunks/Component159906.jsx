/** Chunk was on 2827 **/
/** chunk id: 159906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
    [b] = (0, _.Kq)({
      subscriptionId: n.id,
      renewal: true,
      analyticsLocations: f,
      analyticsLocation: a.A.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
    });
  if (null == b) return null;
  let h = i ? A.r : A.a,
    E = b.invoiceItems.find(e => {
      let {
        subscriptionPlanId: t
      } = e;
      return (0, d.xq)(t)
    });
  if (null == E) return null;
  let O = E.subscriptionPlanId,
    C = c.A.get(O);
  l()(null != C, "Missing plan");
  let x = (0, u.$g)(b.total, b.currency);
  return C.interval === p.WT.YEAR ? t = g.intl.format(g.t["jPz/39"], {
    price: x,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY
  }) : C.interval === p.WT.MONTH && (t = 1 === C.intervalCount ? g.intl.format(g.t.m27GpI, {
    price: x,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY
  }) : g.intl.format(g.t["9xf5Vx"], {
    price: x,
    termsUrl: m.X7G.TERMS,
    paidURL: m.X7G.PAID_TERMS,
    privacyUrl: m.X7G.PRIVACY,
    intervalCount: C.intervalCount
  })), (0, r.jsx)(s.Text, {
    color: "text-muted",
    className: h,
    variant: "text-xs/normal",
    children: t
  })
}

function b(e) {
  let {
    subscription: t,
    withOverheadSeparator: n
  } = e;
  return t.status === m.Dmq.CANCELED || t.isPurchasedExternally ? null : (0, r.jsx)(f, {
    subscription: t,
    withOverheadSeparator: n
  })
}