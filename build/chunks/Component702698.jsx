/** Chunk was on 65975 **/
/** chunk id: 702698, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk832946 = require("./832946.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx");

function m(t) {
  let {
    subscription: n,
    renewalMutations: a,
    transitionState: e,
    onClose: m,
    analyticsLocation: C
  } = t, {
    analyticsLocations: I
  } = (0, o.Ay)(c.A.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), A = p.A.get(n.planId);
  r()(null != A, "Missing subscriptionPlan");
  let k = (0, u.y8)(n.planId, false, false, {
      paymentSourceId: n.paymentSourceId,
      currency: n.currency
    }),
    v = (0, y.CE)((0, y.$g)(k.amount, k.currency), A.interval, A.intervalCount);
  async function x() {
    await (0, s.ge)(n, n.planId, {
      amount: 0,
      currency: k.currency
    }, (0, u.UC)(n.items, k.currency, n.paymentSourceId), I, C), await m()
  }
  return (0, i.jsx)(l.Modal, {
    "aria-label": g.intl.string(g.t.E9kB45),
    title: g.intl.string(g.t.E9kB45),
    subtitle: (0, d.m1)(n.planId) ? g.intl.format(g.t.GMp54C, {
      downgradedPlan: u.Ay.getDisplayName(a.planId),
      existingRate: v
    }) : g.intl.format(g.t["vx/NZ0"], {
      existingPlan: u.Ay.getDisplayName(n.planId),
      downgradedPlan: u.Ay.getDisplayName(a.planId),
      existingRate: v
    }),
    actions: [{
      text: g.intl.string(g.t.oEAioF),
      onClick: m,
      variant: "secondary"
    }, {
      text: g.intl.string(g.t.frE8KO),
      onClick: x,
      variant: "primary"
    }],
    onClose: m,
    transitionState: e
  })
}