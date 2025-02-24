/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  PE: () => b,
  l: () => y,
  pM: () => E
});
var r = n(200651),
  i = n(192379),
  o = n(481060),
  a = n(194359),
  s = n(475413),
  l = n(156518),
  c = n(690501),
  u = n(981631),
  d = n(388032);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  let {
    userId: t,
    friendToken: n,
    analyticsLocation: l,
    shouldShowTooltip: c
  } = e, u = i.useCallback(() => {
    a.Z.addRelationship({
      userId: t,
      friendToken: n,
      context: {
        location: l
      }
    })
  }, [l, n, t]);
  return (0, r.jsx)(s.oY, {
    action: "SEND_FRIEND_REQUEST",
    icon: o.oLu,
    tooltipText: d.NW.string(d.t.w5uwoK),
    shouldShowTooltip: c,
    onClick: u
  })
}

function v(e) {
  var {
    user: t,
    analyticsLocation: n
  } = e, i = m(e, ["user", "analyticsLocation"]);
  let o = (0, l.Y)({
    user: t,
    analyticsLocation: n
  });
  return 0 === o.length ? (0, r.jsx)(s.oY, h(p({}, i), {
    disabled: !0
  })) : (0, r.jsx)(l.Z, {
    menuItems: o,
    children: e => (0, r.jsx)("div", h(p({}, e), {
      children: (0, r.jsx)(s.oY, p({}, i))
    }))
  })
}

function b(e) {
  let {
    user: t,
    relationshipType: n,
    analyticsLocation: a,
    shouldShowTooltip: s
  } = e, l = i.useMemo(() => {
    switch (n) {
      case u.OGo.FRIEND:
        return o._uN;
      case u.OGo.PENDING_OUTGOING:
      case u.OGo.PENDING_INCOMING:
        return o.iHX
    }
  }, [n]), c = i.useMemo(() => {
    switch (n) {
      case u.OGo.FRIEND:
        return d.NW.string(d.t.G7jMpa);
      case u.OGo.PENDING_OUTGOING:
        return d.NW.string(d.t["s/+byM"]);
      case u.OGo.PENDING_INCOMING:
        return d.NW.string(d.t["6QQCQ0"])
    }
  }, [n]);
  return (0, r.jsx)(v, {
    icon: l,
    tooltipText: c,
    shouldShowTooltip: s,
    user: t,
    analyticsLocation: a
  })
}

function y(e) {
  let {
    user: t,
    gameFriends: n,
    hasOutgoingPendingGameFriends: i,
    hasIncomingPendingGameFriends: a,
    analyticsLocation: s,
    shouldShowTooltip: l
  } = e, {
    tooltipText: u,
    onMouseEnter: d,
    ariaLabel: f
  } = (0, c.N)({
    gameFriends: n,
    hasOutgoingPendingGameFriends: i,
    hasIncomingPendingGameFriends: a
  });
  return (0, r.jsx)(v, {
    tooltipText: u,
    tooltipPosition: "left",
    tooltipAlign: "top",
    ariaLabel: f,
    shouldShowTooltip: l,
    icon: o.KED,
    onMouseEnter: d,
    user: t,
    analyticsLocation: s
  })
}