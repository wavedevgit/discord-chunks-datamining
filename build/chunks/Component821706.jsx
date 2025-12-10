/** Chunk was on web.js **/
/** chunk id: 821706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z7: () => O,
  g: () => C,
  k9: () => A,
  lJ: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk156518 = require("./156518.jsx"),
  Chunk690501 = require("./690501.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  let {
    userId: t,
    analyticsLocation: n
  } = e, r = i.useCallback(() => {
    o.Z.addRelationship({
      userId: t,
      context: {
        location: n
      }
    })
  }, [n, t]);
  return {
    action: d.yM.SEND_FRIEND_REQUEST,
    icon: a.oLu,
    text: p.intl.string(p.t.w5uwoI),
    onClick: r
  }
}

function O(e) {
  var {
    userId: t,
    analyticsLocation: n
  } = e, i = E(e, ["userId", "analyticsLocation"]);
  let a = y({
    userId: t,
    analyticsLocation: n
  });
  return (0, r.jsx)(l.O1, m({}, a, i))
}

function v(e) {
  let {
    userId: t,
    analyticsLocation: n
  } = e, i = y({
    userId: t,
    analyticsLocation: n
  }), {
    text: a
  } = i, o = E(i, ["text"]);
  return (0, r.jsx)(l.f6, m({
    tooltipText: a
  }, o))
}

function S(e) {
  var {
    type: t,
    user: n,
    analyticsLocation: a
  } = e, o = E(e, ["type", "user", "analyticsLocation"]);
  let l = (0, c.Y)({
      user: n,
      analyticsLocation: a
    }),
    u = i.useRef(null),
    d = t === s.j8.ICON ? s.ef : s.oY;
  return 0 === l.length ? (0, r.jsx)(d, g(m({}, o), {
    disabled: true
  })) : (0, r.jsx)(c.Z, {
    targetElementRef: u,
    menuItems: l,
    children: e => (0, r.jsx)("div", g(m({
      ref: u
    }, e), {
      children: (0, r.jsx)(d, m({}, o))
    }))
  })
}
let I = {
    [Chunk981631.OGo.FRIEND]: Chunk481060._uN,
    [Chunk981631.OGo.PENDING_OUTGOING]: Chunk481060.iHX,
    [Chunk981631.OGo.PENDING_INCOMING]: Chunk481060.iHX
  },
  T = {
    [Chunk981631.OGo.FRIEND]: () => Chunk388032.intl.string(Chunk388032.t.G7jMpU),
    [Chunk981631.OGo.PENDING_OUTGOING]: () => Chunk388032.intl.string(Chunk388032.t["s/+byI"]),
    [Chunk981631.OGo.PENDING_INCOMING]: () => Chunk388032.intl.string(Chunk388032.t["6QQCQ+"])
  };

function C(e) {
  var {
    type: t,
    user: n,
    relationshipType: i,
    analyticsLocation: a,
    shouldShowTooltip: o
  } = e, s = E(e, ["type", "user", "relationshipType", "analyticsLocation", "shouldShowTooltip"]);
  let l = I[i],
    c = T[i]();
  return (0, r.jsx)(S, m({
    type: t,
    user: n,
    icon: l,
    tooltipText: c,
    shouldShowTooltip: o,
    analyticsLocation: a
  }, s))
}

function A(e) {
  var {
    type: t,
    user: n,
    gameFriends: i,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o,
    analyticsLocation: s,
    shouldShowTooltip: l
  } = e, c = E(e, ["type", "user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation", "shouldShowTooltip"]);
  let {
    tooltipText: d,
    onMouseEnter: f,
    ariaLabel: p,
    icon: _
  } = (0, u.N)({
    gameFriends: i,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o
  });
  return (0, r.jsx)(S, m({
    type: t,
    tooltipText: d,
    tooltipPosition: "left",
    tooltipAlign: "top",
    ariaLabel: p,
    shouldShowTooltip: l,
    icon: _,
    onMouseEnter: f,
    user: n,
    analyticsLocation: s
  }, c))
}