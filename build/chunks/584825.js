/** Chunk was on web.js **/
/** chunk id: 584825, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GG: () => m,
  HQ: () => O,
  JH: () => T,
  QV: () => I,
  YB: () => v,
  _1: () => y,
  _k: () => p,
  jO: () => h,
  oC: () => S,
  qi: () => g,
  r4: () => b,
  sp: () => E
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
let f = [],
  _ = function(e) {
    let {
      refetchOnMount: t = false,
      includeSoftDeleted: n = true,
      countryCode: o,
      dontFetchWhileTrue: l
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, d = (0, i.e7)([s.Z], () => s.Z.isConnected()), f = (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED), _ = r.useRef(t);
    r.useEffect(() => {
      if (null == e || !d || true === l) return;
      let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === u.M.NOT_FETCHED) && (_.current = false, c.FP(e, {
        includeSoftDeleted: n,
        countryCode: o
      }))
    }, [d, e, n, t, o, l]);
    let p = (0, a.Z)(_);
    return {
      listingsLoaded: f === u.M.FETCHED && true !== p
    }
  },
  p = function(e) {
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
  h = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionListing(e) : null),
  m = e => {
    let t = (0, l.f)("useGroupListingsForGuild");
    return (0, i.e7)([u.Z], () => null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : f)
  },
  g = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: false,
      sortDeletedListingsLast: false
    };
    return _(e), (0, i.Wu)([u.Z], () => {
      let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : f,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = u.Z.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  E = e => {
    let [t, n] = r.useState(false), a = r.useMemo(() => e.map(d.W), [e]), o = (0, i.Wu)([u.Z], () => a.filter(e => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [a]);
    return r.useEffect(() => {
      !t && o.length > 0 && (n(true), Promise.all(o.map(e => c.vY(e))).catch(() => {}).then(() => {
        n(false)
      }))
    }, [t, o]), {
      loading: t
    }
  },
  b = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      error: require,
      submitting: module,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(true), i(null), await c._d(e, n, r), true
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }
    }
  },
  y = () => {
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
  O = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      error: require,
      submitting: module,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: a
        } = e;
        try {
          return t(true), i(null), await c.O0({
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
      clearError: () => Chunk442837(null)
    }
  },
  v = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionSettings(e) : true),
  I = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      loading: module,
      updateSubscriptionsSettings: Chunk647438.useCallback(async (e, n) => {
        t(true), i(null);
        try {
          await c.W2(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: require
    }
  },
  T = () => {
    let [e, t] = Chunk647438.useState(false), [n, i] = Chunk647438.useState(null);
    return {
      loading: module,
      fetchSubscriptionsSettings: Chunk647438.useCallback(async e => {
        t(true), i(null);
        try {
          await c.Qb(e)
        } catch (e) {
          i(e)
        } finally {
          t(false)
        }
      }, []),
      error: require
    }
  },
  S = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionTrial(e) : null)