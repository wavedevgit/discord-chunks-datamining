/** Chunk was on web.js **/
/** chunk id: 821706, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C0: () => C,
  Xi: () => T,
  Z7: () => y,
  lJ: () => O,
  n1: () => I,
  xv: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk156518 = require("./156518.jsx"),
  Chunk690501 = require("./690501.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
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
      p(e, t, n[t])
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
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
    action: u.yM.SEND_FRIEND_REQUEST,
    icon: a.oLu,
    text: f.intl.string(f.t.w5uwoI),
    onClick: r
  }
}

function y(e) {
  var {
    userId: t,
    analyticsLocation: n
  } = e, i = g(e, ["userId", "analyticsLocation"]);
  let a = b({
    userId: t,
    analyticsLocation: n
  });
  return (0, r.jsx)(s.i6, _({}, a, i))
}

function O(e) {
  let {
    userId: t,
    analyticsLocation: n
  } = e, i = b({
    userId: t,
    analyticsLocation: n
  }), {
    text: a
  } = i, o = g(i, ["text"]);
  return (0, r.jsx)(s.oY, _({
    tooltipText: a
  }, o))
}
let v = {
    [Chunk981631.OGo.FRIEND]: Chunk481060._uN,
    [Chunk981631.OGo.PENDING_OUTGOING]: Chunk481060.iHX,
    [Chunk981631.OGo.PENDING_INCOMING]: Chunk481060.iHX
  },
  S = {
    [Chunk981631.OGo.FRIEND]: () => f.intl.string(f.t.G7jMpU),
    [Chunk981631.OGo.PENDING_OUTGOING]: () => f.intl.string(f.t["s/+byI"]),
    [Chunk981631.OGo.PENDING_INCOMING]: () => f.intl.string(f.t["6QQCQ+"])
  };

function I(e) {
  var {
    user: t,
    relationshipType: n,
    analyticsLocation: a
  } = e, o = g(e, ["user", "relationshipType", "analyticsLocation"]);
  let c = v[n],
    u = S[n](),
    d = (0, l.Y)({
      user: t,
      analyticsLocation: a
    }),
    f = i.useRef(null),
    p = _({
      icon: c,
      tooltipText: u
    }, o);
  return 0 === d.length ? (0, r.jsx)(s.ef, m(_({}, p), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: f,
    menuItems: d,
    children: e => (0, r.jsx)(s.ef, _({
      buttonRef: f
    }, e, p))
  })
}

function T(e) {
  var {
    user: t,
    relationshipType: n,
    analyticsLocation: a
  } = e, o = g(e, ["user", "relationshipType", "analyticsLocation"]);
  let c = v[n],
    u = S[n](),
    d = (0, l.Y)({
      user: t,
      analyticsLocation: a
    }),
    f = i.useRef(null),
    p = _({
      icon: c,
      tooltipText: u
    }, o);
  return 0 === d.length ? (0, r.jsx)(s.oY, m(_({}, p), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: f,
    menuItems: d,
    children: e => (0, r.jsx)(s.oY, _({
      buttonRef: f
    }, e, p))
  })
}

function C(e) {
  var {
    user: t,
    gameFriends: n,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o,
    analyticsLocation: u
  } = e, d = g(e, ["user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation"]);
  let {
    tooltipText: f,
    onMouseEnter: p,
    ariaLabel: h,
    icon: E
  } = (0, c.N)({
    gameFriends: n,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o
  }), b = (0, l.Y)({
    user: t,
    analyticsLocation: u
  }), y = i.useRef(null), O = _({
    icon: E,
    __unsupportedReactNodeAsText: f,
    "aria-label": h,
    onMouseEnter: p
  }, d);
  return 0 === b.length ? (0, r.jsx)(s.ef, m(_({}, O), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: y,
    menuItems: b,
    children: e => {
      let t = () => {
        var t;
        null == p || p(), null == (t = e.onMouseEnter) || t.call(e)
      };
      return (0, r.jsx)(s.ef, m(_({
        buttonRef: y
      }, e, O), {
        onMouseEnter: t
      }))
    }
  })
}

function A(e) {
  var {
    user: t,
    gameFriends: n,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o,
    analyticsLocation: u
  } = e, d = g(e, ["user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation"]);
  let {
    tooltipText: f,
    onMouseEnter: p,
    ariaLabel: h,
    icon: E
  } = (0, c.N)({
    gameFriends: n,
    hasOutgoingPendingGameFriends: a,
    hasIncomingPendingGameFriends: o
  }), b = (0, l.Y)({
    user: t,
    analyticsLocation: u
  }), y = i.useRef(null), O = _({
    icon: E,
    __unsupportedReactNodeAsText: f,
    "aria-label": h,
    onMouseEnter: p
  }, d);
  return 0 === b.length ? (0, r.jsx)(s.oY, m(_({
    tooltipPosition: "left",
    tooltipAlign: "top"
  }, O), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: y,
    menuItems: b,
    children: e => {
      let t = () => {
        var t;
        null == p || p(), null == (t = e.onMouseEnter) || t.call(e)
      };
      return (0, r.jsx)(s.oY, m(_({
        buttonRef: y,
        tooltipPosition: "left",
        tooltipAlign: "top"
      }, e, O), {
        onMouseEnter: t
      }))
    }
  })
}