/** Chunk was on 20501 **/
/** chunk id: 330181, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk931547 = require("./931547.jsx"),
  Chunk388032 = require("./388032.jsx");
let p = e => {
  let [t, n] = r.useState(false), [i, s] = r.useState(null);
  return {
    resetRenewalMutation: async t => {
      n(true), s(null);
      try {
        await (0, l.qu)(t, e)
      } catch (e) {
        s(e)
      } finally {
        n(false)
      }
    },
    submitting: t,
    error: i
  }
};

function g(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: s
  } = e, {
    analyticsLocations: l
  } = (0, c.ZP)(o.Z.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: g,
    submitting: h,
    error: f
  } = p(l), b = (0, d._k)(t, {
    includeSoftDeleted: true
  }), {
    currentListing: x,
    nextListing: _
  } = r.useMemo(() => {
    if ((null == n ? true : n.renewalMutations) == null) return {
      currentListing: true,
      nextListing: true
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId;
    return {
      currentListing: b.find(t => t.subscription_plans[0].id === e),
      nextListing: b.find(e => e.subscription_plans[0].id === t)
    }
  }, [n, b]);
  if (null == n || null == x || null == _) return null;
  let j = a()(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, i.jsx)(u.Z, {
    message: m.intl.format(m.t.chw89f, {
      currentListing: x.name,
      nextListing: _.name,
      changeDate: j
    }),
    error: null == f ? true : f.message,
    onClick: () => g(n),
    submitting: h,
    ctaMessage: m.intl.string(m.t.De4wIy),
    className: s
  })
}