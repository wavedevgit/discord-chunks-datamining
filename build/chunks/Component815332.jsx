/** Chunk was on 60667 **/
/** chunk id: 815332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk599941 = require("./599941.js"),
  Chunk322092 = require("./322092.jsx"),
  Chunk985018 = require("./985018.jsx");

function p(e) {
  let {
    groupListingId: t,
    subscription: n,
    className: l
  } = e, {
    analyticsLocations: p
  } = (0, c.Ay)(o.A.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: m,
    submitting: g,
    error: A
  } = (e => {
    let [t, n] = i.useState(false), [r, l] = i.useState(null);
    return {
      resetRenewalMutation: async t => {
        n(true), l(null);
        try {
          await (0, a.ZK)(t, e)
        } catch (e) {
          l(e)
        } finally {
          n(false)
        }
      },
      submitting: t,
      error: r
    }
  })(p), f = (0, d.cY)(t, {
    includeSoftDeleted: true
  }), {
    currentListing: h,
    nextListing: b
  } = i.useMemo(() => {
    if ((null == n ? true : n.renewalMutations) == null) return {
      currentListing: true,
      nextListing: true
    };
    let e = n.items[0].planId,
      t = n.renewalMutations.items[0].planId;
    return {
      currentListing: f.find(t => t.subscription_plans[0].id === e),
      nextListing: f.find(e => e.subscription_plans[0].id === t)
    }
  }, [n, f]);
  if (null == n || null == h || null == b) return null;
  let E = s()(n.currentPeriodEnd).format("MMM DD, YYYY");
  return (0, r.jsx)(u.A, {
    message: _.intl.format(_.t.chw89X, {
      currentListing: h.name,
      nextListing: b.name,
      changeDate: E
    }),
    error: null == A ? true : A.message,
    onClick: () => m(n),
    submitting: g,
    ctaMessage: _.intl.string(_.t.De4wI8),
    className: l
  })
}