/** Chunk was on 11868 **/
/** chunk id: 584825, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GG: () => O,
  HQ: () => m,
  JH: () => g,
  QV: () => A,
  YB: () => R,
  _1: () => S,
  _k: () => I,
  jO: () => T,
  oC: () => P,
  qi: () => p,
  r4: () => f,
  sp: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk990169 = require("./990169.js"),
  Chunk935369 = require("./935369.js"),
  Chunk38618 = require("./38618.js");
require("./823379.js");
var Chunk730647 = require("./730647.jsx"),
  Chunk423117 = require("./423117.js"),
  Chunk289393 = require("./289393.js"),
  Chunk697227 = require("./697227.js");
let _ = [],
  E = function(e) {
    let {
      refetchOnMount: t = false,
      includeSoftDeleted: n = true,
      countryCode: a,
      dontFetchWhileTrue: c
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, d = (0, i.e7)([o.Z], () => o.Z.isConnected()), _ = (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED), E = r.useRef(t);
    r.useEffect(() => {
      if (null == e || !d || true === c) return;
      let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === u.M.NOT_FETCHED) && (E.current = false, s.FP(e, {
        includeSoftDeleted: n,
        countryCode: a
      }))
    }, [d, e, n, t, a, c]);
    let I = (0, l.Z)(E);
    return {
      listingsLoaded: _ === u.M.FETCHED && true !== I
    }
  },
  I = function(e) {
    let {
      includeSoftDeleted: t = false,
      includeUnpublished: n = true
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return (0, i.Wu)([u.Z], () => {
      if (null == e) return [];
      let r = u.Z.getSubscriptionGroupListing(e);
      if (null == r) return [];
      let i = [];
      for (let e of r.subscription_listings_ids) {
        let r = u.Z.getSubscriptionListing(e);
        null != r && (!r.soft_deleted || t) && (r.published || n) && i.push(r)
      }
      return i
    }, [e, t, n])
  },
  T = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionListing(e) : null),
  O = e => {
    let t = (0, c.f)("useGroupListingsForGuild");
    return (0, i.e7)([u.Z], () => null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : _)
  },
  p = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: false,
      sortDeletedListingsLast: false
    };
    return E(e), (0, i.Wu)([u.Z], () => {
      let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : _,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = u.Z.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  N = e => {
    let [t, n] = r.useState(false), l = r.useMemo(() => e.map(d.W), [e]), a = (0, i.Wu)([u.Z], () => l.filter(e => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
    return r.useEffect(() => {
      !t && a.length > 0 && (n(true), Promise.all(a.map(e => s.vY(e))).catch(() => {}).then(() => {
        n(false)
      }))
    }, [t, a]), {
      loading: t
    }
  },
  f = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      error: require,
      submitting: module,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(true), i(null), await s._d(e, n, r), true
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }
    }
  },
  S = () => {
    let [e, t] = (0, Chunk935369.Z)(Chunk423117.AE), {
      loading: n,
      error: r
    } = exports;
    return {
      error: Chunk647438,
      submitting: require,
      archiveSubscriptionListing: module
    }
  },
  m = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      error: require,
      submitting: module,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: l
        } = e;
        try {
          return t(true), i(null), await s.O0({
            guildId: n,
            groupListingId: r,
            listingId: l,
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
      clearError: () => Chunk442837(null)
    }
  },
  R = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionSettings(e) : true),
  A = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      loading: module,
      updateSubscriptionsSettings: Chunk647438.useCallback(async (e, n) => {
        t(true), i(null);
        try {
          await s.W2(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: require
    }
  },
  g = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      loading: module,
      fetchSubscriptionsSettings: Chunk647438.useCallback(async e => {
        t(true), i(null);
        try {
          await s.Qb(e)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: require
    }
  },
  P = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionTrial(e) : null)