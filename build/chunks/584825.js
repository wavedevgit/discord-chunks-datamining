/** Chunk was on 56422 **/
n.d(t, {
  GG: () => b,
  HQ: () => O,
  JH: () => I,
  QV: () => j,
  YB: () => E,
  _1: () => S,
  _k: () => f,
  jO: () => m,
  oC: () => N,
  qi: () => y,
  r4: () => _,
  sp: () => h
}), n(388685), n(539854);
var r = n(192379),
  i = n(442837),
  l = n(990169),
  s = n(935369),
  a = n(38618);
n(823379);
var o = n(730647),
  c = n(423117),
  u = n(289393),
  d = n(697227);
let g = [],
  p = function(e) {
    let {
      refetchOnMount: t = !1,
      includeSoftDeleted: n = !0,
      countryCode: s,
      dontFetchWhileTrue: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, i.e7)([a.Z], () => a.Z.isConnected()), g = (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED), p = r.useRef(t);
    r.useEffect(() => {
      if (null == e || !d || !0 === o) return;
      let r = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === u.M.NOT_FETCHED) && (p.current = !1, c.FP(e, {
        includeSoftDeleted: n,
        countryCode: s
      }))
    }, [d, e, n, t, s, o]);
    let f = (0, l.Z)(p);
    return {
      listingsLoaded: g === u.M.FETCHED && !0 !== f
    }
  },
  f = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
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
  m = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionListing(e) : null),
  b = e => {
    let t = (0, o.f)("useGroupListingsForGuild");
    return (0, i.e7)([u.Z], () => null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : g)
  },
  y = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return p(e), (0, i.Wu)([u.Z], () => {
      let n = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : g,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = u.Z.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  h = e => {
    let [t, n] = r.useState(!1), l = r.useMemo(() => e.map(d.W), [e]), s = (0, i.Wu)([u.Z], () => l.filter(e => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [l]);
    return r.useEffect(() => {
      !t && s.length > 0 && (n(!0), Promise.all(s.map(e => c.vY(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, s]), {
      loading: t
    }
  },
  _ = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(!0), i(null), await c._d(e, n, r), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }
    }
  },
  S = () => {
    let [e, t] = (0, s.Z)(c.AE), {
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
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: l
        } = e;
        try {
          return t(!0), i(null), await c.O0({
            guildId: n,
            groupListingId: r,
            listingId: l,
            data: {
              published: !0
            }
          }), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      },
      clearError: () => i(null)
    }
  },
  E = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionSettings(e) : void 0),
  j = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: r.useCallback(async (e, n) => {
        t(!0), i(null);
        try {
          await c.W2(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  I = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: r.useCallback(async e => {
        t(!0), i(null);
        try {
          await c.Qb(e)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  N = e => (0, i.e7)([u.Z], () => null != e ? u.Z.getSubscriptionTrial(e) : null)