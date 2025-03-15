/** Chunk was on 61697 **/
n.d(e, {
  GG: () => y,
  HQ: () => m,
  JH: () => b,
  QV: () => N,
  YB: () => O,
  _1: () => I,
  _k: () => E,
  jO: () => g,
  oC: () => T,
  qi: () => f,
  r4: () => S,
  sp: () => h
}), n(47120), n(653041);
var r = n(192379),
  i = n(442837),
  l = n(990169),
  o = n(935369),
  a = n(38618);
n(823379);
var s = n(730647),
  c = n(423117),
  u = n(289393),
  d = n(697227);
let _ = [],
  p = function(t) {
    let {
      refetchOnMount: e = !1,
      includeSoftDeleted: n = !0,
      countryCode: o,
      dontFetchWhileTrue: s
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.e7)([a.Z], () => a.Z.isConnected()), _ = (0, i.e7)([u.Z], () => null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED), p = r.useRef(e);
    r.useEffect(() => {
      if (null == t || !d || !0 === s) return;
      let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
      (e || r === u.M.NOT_FETCHED) && (p.current = !1, c.FP(t, {
        includeSoftDeleted: n,
        countryCode: o
      }))
    }, [d, t, n, e, o, s]);
    let E = (0, l.Z)(p);
    return {
      listingsLoaded: _ === u.M.FETCHED && !0 !== E
    }
  },
  E = function(t) {
    let {
      includeSoftDeleted: e = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.Wu)([u.Z], () => {
      if (null == t) return [];
      let r = u.Z.getSubscriptionGroupListing(t);
      if (null == r) return [];
      let i = [];
      for (let t of r.subscription_listings_ids) {
        let r = u.Z.getSubscriptionListing(t);
        null != r && (!r.soft_deleted || e) && (r.published || n) && i.push(r)
      }
      return i
    }, [t, e, n])
  },
  g = t => (0, i.e7)([u.Z], () => null != t ? u.Z.getSubscriptionListing(t) : null),
  y = t => {
    let e = (0, s.f)("useGroupListingsForGuild");
    return (0, i.e7)([u.Z], () => null != t && e ? u.Z.getSubscriptionGroupListingsForGuild(t) : _)
  },
  f = function(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return p(t), (0, i.Wu)([u.Z], () => {
      let n = null != t ? u.Z.getSubscriptionGroupListingsForGuild(t) : _,
        r = [];
      for (let t of n)
        for (let n of t.subscription_listings_ids) {
          let t = u.Z.getSubscriptionListing(n);
          null != t && (e.includeSoftDeleted || !t.soft_deleted) && r.push(t)
        }
      return e.includeSoftDeleted && e.sortDeletedListingsLast ? [...r.filter(t => !t.soft_deleted), ...r.filter(t => t.soft_deleted)] : r
    })
  },
  h = t => {
    let [e, n] = r.useState(!1), l = r.useMemo(() => t.map(d.W), [t]), o = (0, i.Wu)([u.Z], () => l.filter(t => !u.Z.getDidFetchListingForSubscriptionPlanId(t)), [l]);
    return r.useEffect(() => {
      !e && o.length > 0 && (n(!0), Promise.all(o.map(t => c.vY(t))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [e, o]), {
      loading: e
    }
  },
  S = () => {
    let [t, e] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: t,
      deleteSubscriptionListing: async (t, n, r) => {
        try {
          return e(!0), i(null), await c._d(t, n, r), !0
        } catch (t) {
          i(t)
        } finally {
          e(!1)
        }
      }
    }
  },
  I = () => {
    let [t, e] = (0, o.Z)(c.AE), {
      loading: n,
      error: r
    } = e;
    return {
      error: r,
      submitting: n,
      archiveSubscriptionListing: t
    }
  },
  m = () => {
    let [t, e] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: t,
      publishSubscriptionListing: async t => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: l
        } = t;
        try {
          return e(!0), i(null), await c.O0({
            guildId: n,
            groupListingId: r,
            listingId: l,
            data: {
              published: !0
            }
          }), !0
        } catch (t) {
          i(t)
        } finally {
          e(!1)
        }
      },
      clearError: () => i(null)
    }
  },
  O = t => (0, i.e7)([u.Z], () => null != t ? u.Z.getSubscriptionSettings(t) : void 0),
  N = () => {
    let [t, e] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: t,
      updateSubscriptionsSettings: r.useCallback(async (t, n) => {
        e(!0), i(null);
        try {
          await c.W2(t, n)
        } catch (t) {
          i(t)
        } finally {
          e(!1)
        }
      }, []),
      error: n
    }
  },
  b = () => {
    let [t, e] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: t,
      fetchSubscriptionsSettings: r.useCallback(async t => {
        e(!0), i(null);
        try {
          await c.Qb(t)
        } catch (t) {
          i(t)
        } finally {
          e(!1)
        }
      }, []),
      error: n
    }
  },
  T = t => (0, i.e7)([u.Z], () => null != t ? u.Z.getSubscriptionTrial(t) : null)