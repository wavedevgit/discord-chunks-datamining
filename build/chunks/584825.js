/** Chunk was on 76346 **/
r.d(t, {
  GG: () => C,
  HQ: () => _,
  JH: () => S,
  QV: () => b,
  YB: () => m,
  _1: () => O,
  _k: () => g,
  jO: () => y,
  oC: () => E,
  qi: () => x,
  r4: () => h,
  sp: () => j
}), r(388685), r(539854);
var n = r(192379),
  s = r(442837),
  i = r(990169),
  l = r(935369),
  o = r(38618);
r(823379);
var a = r(730647),
  c = r(423117),
  u = r(289393),
  d = r(697227);
let p = [],
  f = function(e) {
    let {
      refetchOnMount: t = !1,
      includeSoftDeleted: r = !0,
      countryCode: l,
      dontFetchWhileTrue: a
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, s.e7)([o.Z], () => o.Z.isConnected()), p = (0, s.e7)([u.Z], () => null != e ? u.Z.getSubscriptionGroupListingsForGuildFetchState(e) : u.M.FETCHED), f = n.useRef(t);
    n.useEffect(() => {
      if (null == e || !d || !0 === a) return;
      let n = u.Z.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || n === u.M.NOT_FETCHED) && (f.current = !1, c.FP(e, {
        includeSoftDeleted: r,
        countryCode: l
      }))
    }, [d, e, r, t, l, a]);
    let g = (0, i.Z)(f);
    return {
      listingsLoaded: p === u.M.FETCHED && !0 !== g
    }
  },
  g = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: r = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, s.Wu)([u.Z], () => {
      if (null == e) return [];
      let n = u.Z.getSubscriptionGroupListing(e);
      if (null == n) return [];
      let s = [];
      for (let e of n.subscription_listings_ids) {
        let n = u.Z.getSubscriptionListing(e);
        null != n && (!n.soft_deleted || t) && (n.published || r) && s.push(n)
      }
      return s
    }, [e, t, r])
  },
  y = e => (0, s.e7)([u.Z], () => null != e ? u.Z.getSubscriptionListing(e) : null),
  C = e => {
    let t = (0, a.f)("useGroupListingsForGuild");
    return (0, s.e7)([u.Z], () => null != e && t ? u.Z.getSubscriptionGroupListingsForGuild(e) : p)
  },
  x = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, s.Wu)([u.Z], () => {
      let r = null != e ? u.Z.getSubscriptionGroupListingsForGuild(e) : p,
        n = [];
      for (let e of r)
        for (let r of e.subscription_listings_ids) {
          let e = u.Z.getSubscriptionListing(r);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && n.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...n.filter(e => !e.soft_deleted), ...n.filter(e => e.soft_deleted)] : n
    })
  },
  j = e => {
    let [t, r] = n.useState(!1), i = n.useMemo(() => e.map(d.W), [e]), l = (0, s.Wu)([u.Z], () => i.filter(e => !u.Z.getDidFetchListingForSubscriptionPlanId(e)), [i]);
    return n.useEffect(() => {
      !t && l.length > 0 && (r(!0), Promise.all(l.map(e => c.vY(e))).catch(() => {}).then(() => {
        r(!1)
      }))
    }, [t, l]), {
      loading: t
    }
  },
  h = () => {
    let [e, t] = n.useState(!1), [r, s] = n.useState(null);
    return {
      error: r,
      submitting: e,
      deleteSubscriptionListing: async (e, r, n) => {
        try {
          return t(!0), s(null), await c._d(e, r, n), !0
        } catch (e) {
          s(e)
        } finally {
          t(!1)
        }
      }
    }
  },
  O = () => {
    let [e, t] = (0, l.Z)(c.AE), {
      loading: r,
      error: n
    } = t;
    return {
      error: n,
      submitting: r,
      archiveSubscriptionListing: e
    }
  },
  _ = () => {
    let [e, t] = n.useState(!1), [r, s] = n.useState(null);
    return {
      error: r,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: r,
          groupListingId: n,
          listingId: i
        } = e;
        try {
          return t(!0), s(null), await c.O0({
            guildId: r,
            groupListingId: n,
            listingId: i,
            data: {
              published: !0
            }
          }), !0
        } catch (e) {
          s(e)
        } finally {
          t(!1)
        }
      },
      clearError: () => s(null)
    }
  },
  m = e => (0, s.e7)([u.Z], () => null != e ? u.Z.getSubscriptionSettings(e) : void 0),
  b = () => {
    let [e, t] = n.useState(!1), [r, s] = n.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: n.useCallback(async (e, r) => {
        t(!0), s(null);
        try {
          await c.W2(e, r)
        } catch (e) {
          s(e)
        } finally {
          t(!1)
        }
      }, []),
      error: r
    }
  },
  S = () => {
    let [e, t] = n.useState(!1), [r, s] = n.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: n.useCallback(async e => {
        t(!0), s(null);
        try {
          await c.Qb(e)
        } catch (e) {
          s(e)
        } finally {
          t(!1)
        }
      }, []),
      error: r
    }
  },
  E = e => (0, s.e7)([u.Z], () => null != e ? u.Z.getSubscriptionTrial(e) : null)