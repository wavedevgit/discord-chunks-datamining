/** Chunk was on web.js **/
/** chunk id: 330181, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk931547 = require("./931547.jsx"),
  Chunk388032 = require("./388032.jsx");
let p = "MMM DD, YYYY",
  _ = e => {
    let [t, n] = i.useState(false), [r, a] = i.useState(null);
    return {
      resetRenewalMutation: async t => {
        n(true), a(null);
        try {
          await (0, s.qu)(t, e)
        } catch (e) {
          a(e)
        } finally {
          n(false)
        }
      },
      submitting: t,
      error: r
    }
  };

function h(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: a
  } = e, {
    analyticsLocations: s
  } = (0, c.ZP)(l.Z.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: m,
    error: g
  } = _(s), E = (0, u._k)(t, {
    includeSoftDeleted: true
  }), {
    currentListing: b,
    nextListing: y
  } = i.useMemo(() => {
    if ((null == n ? true : n.renewalMutations) == null) return {
      currentListing: true,
      nextListing: true
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId;
    return {
      currentListing: E.find(t => t.subscription_plans[0].id === e),
      nextListing: E.find(e => e.subscription_plans[0].id === t)
    }
  }, [n, E]);
  if (null == n || null == b || null == y) return null;
  let O = () => h(n),
    v = o()(n.currentPeriodEnd).format(p);
  return (0, r.jsx)(d.Z, {
    message: f.intl.format(f.t.chw89X, {
      currentListing: b.name,
      nextListing: y.name,
      changeDate: v
    }),
    error: null == g ? true : g.message,
    onClick: O,
    submitting: m,
    ctaMessage: f.intl.string(f.t.De4wI8),
    className: a
  })
}