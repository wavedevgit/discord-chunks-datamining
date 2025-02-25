/** Chunk was on 73049 **/
t.d(n, {
  Z: () => h
});
var r = t(200651);
t(192379);
var o = t(481060),
  i = t(194359),
  l = t(906732),
  s = t(372460),
  c = t(475413),
  a = t(934861),
  d = t(156518),
  u = t(690501),
  f = t(562831),
  p = t(981631),
  m = t(388032),
  b = t(442806);

function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = r
    })
  }
  return e
}

function v(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function y(e) {
  var {
    user: n,
    analyticsLocation: t
  } = e, o = function(e, n) {
    if (null == e) return {};
    var t, r, o = function(e, n) {
      if (null == e) return {};
      var t, r, o = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) t = i[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
    }
    return o
  }(e, ["user", "analyticsLocation"]);
  let i = (0, d.Y)({
    user: n,
    analyticsLocation: t
  });
  return 0 === i.length ? (0, r.jsx)(c.ef, v(g({}, o), {
    disabled: !0
  })) : (0, r.jsx)(d.Z, {
    menuItems: i,
    children: e => (0, r.jsx)("div", v(g({}, e), {
      children: (0, r.jsx)(c.ef, g({}, o))
    }))
  })
}

function I(e) {
  let {
    gameFriends: n,
    hasIncomingPendingGameFriends: t,
    hasOutgoingPendingGameFriends: i,
    user: l,
    analyticsLocation: s
  } = e, {
    onMouseEnter: c,
    ariaLabel: a,
    tooltipText: d
  } = (0, u.N)({
    gameFriends: n,
    hasIncomingPendingGameFriends: t,
    hasOutgoingPendingGameFriends: i
  });
  return (0, r.jsx)(y, {
    tooltipText: d,
    ariaLabel: a,
    icon: o.KED,
    onMouseEnter: c,
    user: l,
    analyticsLocation: s
  })
}

function h(e) {
  let {
    isCurrentUser: n,
    user: t,
    relationshipType: d,
    friendToken: u,
    onClose: g
  } = e, {
    newestAnalyticsLocation: v
  } = (0, l.ZP)(), h = (0, s.wn)({
    location: "UserProfileModalHeaderActionButtons"
  }), {
    gameFriends: j,
    hasOutgoingPendingGameFriends: x,
    hasIncomingPendingGameFriends: _
  } = (0, f.H)({
    userId: t.id
  }), O = j.length > 0 || x || _;
  return n || d === p.OGo.BLOCKED ? null : d === p.OGo.FRIEND || t.bot ? (0, r.jsx)("div", {
    className: b.multipleButtons,
    children: (0, r.jsx)(a.c, {
      userId: t.id,
      onClose: g
    })
  }) : d === p.OGo.NONE && h && O ? (0, r.jsxs)("div", {
    className: b.multipleButtons,
    children: [(0, r.jsx)(I, {
      user: t,
      analyticsLocation: v,
      gameFriends: j,
      hasIncomingPendingGameFriends: _,
      hasOutgoingPendingGameFriends: x
    }), (0, r.jsx)(a.c, {
      userId: t.id,
      onClose: g
    })]
  }) : d === p.OGo.PENDING_OUTGOING ? (0, r.jsxs)("div", {
    className: b.multipleButtons,
    children: [(0, r.jsx)(y, {
      icon: o.iHX,
      tooltipText: m.NW.string(m.t.zz2i8v),
      user: t,
      analyticsLocation: v
    }), (0, r.jsx)(a.c, {
      userId: t.id,
      onClose: g
    })]
  }) : d === p.OGo.PENDING_INCOMING ? (0, r.jsxs)("div", {
    className: b.multipleButtons,
    children: [(0, r.jsx)(y, {
      icon: o.iHX,
      tooltipText: m.NW.string(m.t.ZOFd1N),
      user: t,
      analyticsLocation: v
    }), (0, r.jsx)(a.c, {
      userId: t.id,
      onClose: g
    })]
  }) : (0, r.jsxs)("div", {
    className: b.multipleButtons,
    children: [(0, r.jsx)(a.v, {
      userId: t.id,
      onClose: g
    }), (0, r.jsx)(c.tG, {
      action: "SEND_FRIEND_REQUEST",
      icon: o.oLu,
      text: m.NW.string(m.t["7815aW"]),
      color: o.zxk.Colors.BRAND,
      onClick: () => {
        i.Z.addRelationship({
          userId: t.id,
          context: {
            location: v
          },
          friendToken: u
        })
      }
    })]
  })
}