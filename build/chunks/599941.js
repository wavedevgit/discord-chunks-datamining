/** Chunk was on web.js **/
/** chunk id: 599941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KE: () => v,
  Tq: () => A,
  XE: () => S,
  Yc: () => O,
  cY: () => _,
  dB: () => h,
  dL: () => I,
  eb: () => E,
  et: () => b,
  hc: () => y,
  uP: () => g,
  uk: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk724442 = require("./724442.js"),
  Chunk608461 = require("./608461.js"),
  Chunk142120 = require("./142120.js");
require("./403362.js");
var Chunk300233 = require("./300233.jsx"),
  Chunk579908 = require("./579908.js"),
  Chunk636194 = require("./636194.js"),
  Chunk624456 = require("./624456.js");
let f = [],
  p = function(e) {
    let {
      refetchOnMount: t = false,
      includeSoftDeleted: n = true,
      countryCode: s,
      dontFetchWhileTrue: l
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, d = (0, i.bG)([o.A], () => o.A.isConnected()), f = (0, i.bG)([u.A], () => null != e ? u.A.getSubscriptionGroupListingsForGuildFetchState(e) : u.e.FETCHED), p = r.useRef(t);
    r.useEffect(() => {
      if (null == e || !d || true === l) return;
      let r = u.A.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === u.e.NOT_FETCHED) && (p.current = false, c.WA(e, {
        includeSoftDeleted: n,
        countryCode: s
      }))
    }, [d, e, n, t, s, l]);
    let _ = (0, a.A)(p);
    return {
      listingsLoaded: f === u.e.FETCHED && true !== _
    }
  },
  _ = function(e) {
    let {
      includeSoftDeleted: t = false,
      includeUnpublished: n = true
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.yK)([u.A], () => {
      if (null == e) return [];
      let r = u.A.getSubscriptionGroupListing(e);
      if (null == r) return [];
      let i = [];
      for (let e of r.subscription_listings_ids) {
        let r = u.A.getSubscriptionListing(e);
        null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r)
      }
      return i
    }, [e, t, n])
  },
  h = e => (0, i.bG)([u.A], () => null != e ? u.A.getSubscriptionListing(e) : null),
  m = e => {
    let t = (0, l.X)("useGroupListingsForGuild");
    return (0, i.bG)([u.A], () => null != e && t ? u.A.getSubscriptionGroupListingsForGuild(e) : f)
  },
  g = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: false,
      sortDeletedListingsLast: false
    };
    return p(e), (0, i.yK)([u.A], () => {
      let n = null != e ? u.A.getSubscriptionGroupListingsForGuild(e) : f,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = u.A.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  E = e => {
    let [t, n] = r.useState(false), a = r.useMemo(() => e.map(d.M), [e]), s = (0, i.yK)([u.A], () => a.filter(e => !u.A.getDidFetchListingForSubscriptionPlanId(e)), [a]);
    return r.useEffect(() => {
      !t && s.length > 0 && (n(true), Promise.all(s.map(e => c._R(e))).catch(() => {}).then(() => {
        n(false)
      }))
    }, [t, s]), {
      loading: t
    }
  },
  b = () => {
    let [e, t] = r.useState(false), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(true), i(null), await c.H7(e, n, r), true
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }
    }
  },
  y = () => {
    let [e, t] = (0, s.A)(c.mK), {
      loading: n,
      error: r
    } = t;
    return {
      error: r,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  O = () => {
    let [e, t] = r.useState(false), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: a
        } = e;
        try {
          return t(true), i(null), await c.vW({
            guildId: n,
            groupListingId: r,
            listingId: a,
            data: {
              published: true
            }
          }), true
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      },
      clearError: () => i(null)
    }
  },
  A = e => (0, i.bG)([u.A], () => null != e ? u.A.getSubscriptionSettings(e) : true),
  v = () => {
    let [e, t] = r.useState(false), [n, i] = r.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: r.useCallback(async (e, n) => {
        t(true), i(null);
        try {
          await c.DO(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: n
    }
  },
  S = () => {
    let [e, t] = r.useState(false), [n, i] = r.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: r.useCallback(async e => {
        t(true), i(null);
        try {
          await c.W5(e)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: n
    }
  },
  I = e => (0, i.bG)([u.A], () => null != e ? u.A.getSubscriptionTrial(e) : null)