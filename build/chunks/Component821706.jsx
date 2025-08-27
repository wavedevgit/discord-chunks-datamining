/** Chunk was on web.js **/
/** chunk id: 821706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z7: () => E,
  g: () => v,
  k9: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk156518 = require("./156518.jsx"),
  Chunk690501 = require("./690501.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function E(e) {
  var {
    type: t,
    userId: n,
    analyticsLocation: l,
    shouldShowTooltip: c
  } = e, u = m(e, ["type", "userId", "analyticsLocation", "shouldShowTooltip"]);
  let f = i.useCallback(() => {
      o.Z.addRelationship({
        userId: n,
        context: {
          location: l
        }
      })
    }, [l, n]),
    p = t === s.j8.TEXT ? s.tG : s.oY;
  return (0, r.jsx)(p, _({
    action: "SEND_FRIEND_REQUEST",
    icon: a.oLu,
    text: d.intl.string(d.t.w5uwoK),
    tooltipText: d.intl.string(d.t.w5uwoK),
    shouldShowTooltip: c,
    onClick: f
  }, u))
}

function b(e) {
  var {
    type: t,
    user: n,
    analyticsLocation: a
  } = e, o = m(e, ["type", "user", "analyticsLocation"]);
  let c = (0, l.Y)({
      user: n,
      analyticsLocation: a
    }),
    u = i.useRef(null),
    d = t === s.j8.ICON ? s.ef : s.oY;
  return 0 === c.length ? (0, r.jsx)(d, h(_({}, o), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: u,
    menuItems: c,
    children: e => (0, r.jsx)("div", h(_({
      ref: u
    }, e), {
      children: (0, r.jsx)(d, _({}, o))
    }))
  })
}
let y = {
    [Chunk981631.OGo.FRIEND]: Chunk481060._uN,
    [Chunk981631.OGo.PENDING_OUTGOING]: Chunk481060.iHX,
    [Chunk981631.OGo.PENDING_INCOMING]: Chunk481060.iHX
  },
  O = {
    [Chunk981631.OGo.FRIEND]: () => Chunk388032.intl.string(Chunk388032.t.G7jMpa),
    [Chunk981631.OGo.PENDING_OUTGOING]: () => Chunk388032.intl.string(Chunk388032.t["s/+byM"]),
    [Chunk981631.OGo.PENDING_INCOMING]: () => Chunk388032.intl.string(Chunk388032.t["6QQCQ0"])
  };

function v(e) {
  var {
    type: t,
    user: n,
    relationshipType: i,
    analyticsLocation: a,
    shouldShowTooltip: o
  } = e, s = m(e, ["type", "user", "relationshipType", "analyticsLocation", "shouldShowTooltip"]);
  let l = y[i],
    c = O[i]();
  return (0, r.jsx)(b, _({
    type: t,
    user: n,
    icon: l,
    tooltipText: c,
    shouldShowTooltip: o,
    analyticsLocation: a
  }, s))
}

function I(e) {
  var {
    type: t,
    user: n,
    gameFriends: i,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o,
    analyticsLocation: s,
    shouldShowTooltip: l
  } = e, u = m(e, ["type", "user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation", "shouldShowTooltip"]);
  let {
    tooltipText: d,
    onMouseEnter: f,
    ariaLabel: p,
    icon: h
  } = (0, c.N)({
    gameFriends: i,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o
  });
  return (0, r.jsx)(b, _({
    type: t,
    tooltipText: d,
    tooltipPosition: "left",
    tooltipAlign: "top",
    ariaLabel: p,
    shouldShowTooltip: l,
    icon: h,
    onMouseEnter: f,
    user: n,
    analyticsLocation: s
  }, u))
}