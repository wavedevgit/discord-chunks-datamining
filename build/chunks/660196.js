/** Chunk was on 4566 **/
n.d(t, {
  Z: () => h
});
var r = n(192379),
  i = n(442837),
  l = n(367907),
  o = n(906732),
  a = n(703656),
  s = n(626135),
  c = n(730647),
  u = n(289393),
  d = n(934826),
  p = n(981631);

function h(e) {
  var t;
  let {
    guildId: n,
    groupListingId: h,
    location: f,
    relevantSubscriptionListingIds: m
  } = e, g = (0, c.f)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: b
  } = (0, d.Z)(h), _ = null != b, C = (0, i.Wu)([u.Z], () => (null != m ? m : []).filter(e => {
    var t;
    return (null === (t = u.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0
  }), [m]), {
    analyticsLocations: v
  } = (0, o.ZP)(null !== (t = (0, a.DR)()) && void 0 !== t ? t : []), y = r.useRef(!1);
  r.useEffect(() => {
    g && null != h && null != C && !y.current && (y.current = !0, s.default.track(p.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      role_subscription_group_listing_id: h,
      role_subscription_listing_ids: C,
      is_premium_member: _,
      location_stack: v,
      location: f
    }, (0, l.hH)(n))))
  }, [n, h, g, f, C, _, v])
}