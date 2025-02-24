/** Chunk was on 1272 (71bced4ddae32ad3.js) **/
n.d(t, {
  Z: () => T
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(692547),
  a = n(481060),
  s = n(906732),
  c = n(812206),
  u = n(925329),
  d = n(79712),
  p = n(171368),
  h = n(594174),
  f = n(626135),
  g = n(51144),
  m = n(743056),
  b = n(321488),
  _ = n(417183),
  E = n(170245),
  O = n(981631),
  N = n(388032),
  v = n(920411);

function y(e) {
  var t;
  let {
    user: n,
    applicationId: l,
    isGameRelationship: s,
    active: c
  } = e, u = (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && (null == n ? void 0 : n.isStaff()), {
    acceptFriendRequest: d,
    cancelFriendRequest: p
  } = (0, m.u)({
    userId: n.id,
    applicationId: l,
    isGameRelationship: s,
    location: "Friends"
  }), f = i.useCallback(e => {
    e.stopPropagation(), d()
  }, [d]), g = i.useCallback(e => {
    e.stopPropagation(), p()
  }, [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)("div", {
      className: v.staffIndicator,
      children: (0, r.jsx)(a.IGR, {
        color: o.Z.unsafe_rawColors.BRAND_500.css,
        text: N.NW.string(N.t.oMx98P)
      })
    }), (0, r.jsx)(b.Z, {
      icon: a.dz2,
      actionType: b.Z.ActionTypes.ACCEPT,
      tooltip: N.NW.string(N.t.ZcibdX),
      onClick: f,
      shouldHighlight: c
    }), (0, r.jsx)(b.Z, {
      icon: a.Dio,
      actionType: b.Z.ActionTypes.DENY,
      tooltip: N.NW.string(N.t.xuio0N),
      onClick: g,
      shouldHighlight: c
    })]
  })
}

function I(e) {
  let {
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    active: o
  } = e, {
    cancelFriendRequest: s
  } = (0, m.u)({
    userId: t,
    applicationId: n,
    isGameRelationship: l,
    location: "Friends"
  }), c = i.useCallback(e => {
    e.stopPropagation(), s()
  }, [s]);
  return (0, r.jsx)(b.Z, {
    icon: a.Dio,
    actionType: b.Z.ActionTypes.DENY,
    tooltip: N.NW.string(N.t.eaq81d),
    onClick: c,
    shouldHighlight: o
  })
}

function C(e) {
  let {
    disambiguateGameRelationships: t,
    isGameRelationship: n,
    applicationId: o,
    userTag: s
  } = e, p = i.useMemo(() => t ? n ? N.NW.string(N.t.ujfP6e) : N.NW.string(N.t.yltuhY) : s, [t, n, s]), h = (0, l.e7)([c.Z], () => null != o ? c.Z.getApplication(o) : null);
  return (0, r.jsxs)("div", {
    className: v.applicationSublabel,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: p
    }), null != h && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.Z, {
        height: 2,
        width: 2
      }), (0, r.jsx)(u.Z, {
        game: h,
        size: u.Z.Sizes.XXSMALL
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: h.name
      })]
    })]
  })
}

function S(e) {
  let {
    user: t,
    hovered: n,
    status: i,
    disambiguateGameRelationships: l,
    isGameRelationship: o,
    applicationId: a
  } = e, s = g.ZP.useUserTag(t);
  return (0, r.jsx)(E.Z, {
    user: t,
    hovered: n,
    status: i,
    showAccountIdentifier: !!l && !o,
    subText: (0, r.jsx)(C, {
      disambiguateGameRelationships: l,
      isGameRelationship: o,
      applicationId: a,
      userTag: s
    })
  })
}

function T(e) {
  let {
    user: t,
    type: n,
    status: l,
    isFocused: o,
    applicationId: a,
    disambiguateGameRelationships: c,
    isGameRelationship: u
  } = e, d = i.useContext(f.AnalyticsContext), {
    analyticsLocations: h
  } = (0, s.ZP)(), g = l === O.Skl.OFFLINE ? O.Skl.UNKNOWN : l, m = i.useCallback(() => (0, p.openUserProfileModal)({
    userId: t.id,
    sourceAnalyticsLocations: h,
    analyticsLocation: d.location
  }), [d.location, h, t.id]);
  return (0, r.jsx)(_.Z, {
    isFocused: o,
    user: t,
    onClick: m,
    children: e => (0, r.jsxs)("div", {
      className: v.listItemContents,
      children: [(0, r.jsx)(S, {
        user: t,
        hovered: e,
        status: g,
        disambiguateGameRelationships: c,
        isGameRelationship: u,
        applicationId: a
      }), (0, r.jsx)("div", {
        className: v.actions,
        children: n === O.OGo.PENDING_INCOMING ? (0, r.jsx)(y, {
          user: t,
          applicationId: a,
          isGameRelationship: u,
          active: e
        }) : (0, r.jsx)(I, {
          userId: t.id,
          applicationId: a,
          isGameRelationship: u,
          active: e
        })
      })]
    })
  })
}