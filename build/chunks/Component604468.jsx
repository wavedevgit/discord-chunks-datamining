/** Chunk was on 19429 **/
/** chunk id: 604468, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function m(t) {
  let {
    subscription: n,
    renewalMutations: a,
    transitionState: e,
    onClose: m,
    analyticsLocation: I
  } = t, {
    analyticsLocations: C
  } = (0, o.ZP)(s.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), P = u.Z.get(n.planId);
  r()(null != P, "Missing subscriptionPlan");
  let k = (0, p.aS)(n.planId, false, false, {
      paymentSourceId: n.paymentSourceId,
      currency: n.currency
    }),
    f = (0, g.og)((0, g.T4)(k.amount, k.currency), P.interval, P.intervalCount);
  async function v() {
    await (0, c.dP)(n, n.planId, {
      amount: 0,
      currency: k.currency
    }, (0, p.UX)(n.items, k.currency, n.paymentSourceId), C, I), await m()
  }
  return (0, i.jsx)(l.Modal, {
    "aria-label": y.intl.string(y.t.E9kB45),
    title: y.intl.string(y.t.E9kB45),
    subtitle: (0, d.Q0)(n.planId) ? y.intl.format(y.t.GMp54C, {
      downgradedPlan: p.ZP.getDisplayName(a.planId),
      existingRate: f
    }) : y.intl.format(y.t["vx/NZ0"], {
      existingPlan: p.ZP.getDisplayName(n.planId),
      downgradedPlan: p.ZP.getDisplayName(a.planId),
      existingRate: f
    }),
    actions: [{
      text: y.intl.string(y.t.oEAioF),
      onClick: m,
      variant: "secondary"
    }, {
      text: y.intl.string(y.t.frE8KO),
      onClick: v,
      variant: "primary"
    }],
    onClose: m,
    transitionState: e
  })
}