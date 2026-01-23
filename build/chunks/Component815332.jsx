/** Chunk was on web.js **/
/** chunk id: 815332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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
let p = "MMM DD, YYYY",
  _ = e => {
    let [t, n] = i.useState(false), [r, a] = i.useState(null);
    return {
      resetRenewalMutation: async t => {
        n(true), a(null);
        try {
          await (0, o.ZK)(t, e)
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
    analyticsLocations: o
  } = (0, c.Ay)(l.A.PENDING_PLAN_CHANGE_NOTICE), {
    resetRenewalMutation: h,
    submitting: m,
    error: g
  } = _(o), E = (0, u.cY)(t, {
    includeSoftDeleted: true
  }), {
    currentListing: y,
    nextListing: b
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
  if (null == n || null == y || null == b) return null;
  let O = () => h(n),
    v = s()(n.currentPeriodEnd).format(p);
  return (0, r.jsx)(d.A, {
    message: f.intl.format(f.t.chw89X, {
      currentListing: y.name,
      nextListing: b.name,
      changeDate: v
    }),
    error: null == g ? true : g.message,
    onClick: O,
    submitting: m,
    ctaMessage: f.intl.string(f.t.De4wI8),
    className: a
  })
}