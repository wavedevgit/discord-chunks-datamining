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
  Chunk732380 = require("./732380.jsx"),
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

function m(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    userId: t,
    analyticsLocation: n
  } = e, r = i.useCallback(() => {
    a.Z.addRelationship({
      userId: t,
      context: {
        location: n
      }
    })
  }, [n, t]);
  return {
    action: u.yM.SEND_FRIEND_REQUEST,
    icon: o.oLu,
    text: f.intl.string(f.t.w5uwoI),
    onClick: r
  }
}

function y(e) {
  var {
    userId: t,
    analyticsLocation: n
  } = e, i = g(e, ["userId", "analyticsLocation"]);
  let o = b({
    userId: t,
    analyticsLocation: n
  });
  return (0, r.jsx)(s.O1, _({}, o, i))
}

function O(e) {
  let {
    userId: t,
    analyticsLocation: n
  } = e, i = b({
    userId: t,
    analyticsLocation: n
  }), {
    text: o
  } = i, a = g(i, ["text"]);
  return (0, r.jsx)(s.f6, _({
    tooltipText: o
  }, a))
}
let v = {
    [Chunk981631.OGo.FRIEND]: Chunk481060._uN,
    [Chunk981631.OGo.PENDING_OUTGOING]: Chunk481060.iHX,
    [Chunk981631.OGo.PENDING_INCOMING]: Chunk481060.iHX
  },
  S = {
    [Chunk981631.OGo.FRIEND]: () => Chunk388032.intl.string(Chunk388032.t.G7jMpU),
    [Chunk981631.OGo.PENDING_OUTGOING]: () => Chunk388032.intl.string(Chunk388032.t["s/+byI"]),
    [Chunk981631.OGo.PENDING_INCOMING]: () => Chunk388032.intl.string(Chunk388032.t["6QQCQ+"])
  };

function I(e) {
  var {
    user: t,
    relationshipType: n,
    analyticsLocation: o
  } = e, a = g(e, ["user", "relationshipType", "analyticsLocation"]);
  let c = v[n],
    u = S[n](),
    d = (0, l.Y)({
      user: t,
      analyticsLocation: o
    }),
    f = i.useRef(null),
    p = _({
      icon: c,
      tooltipText: u
    }, a);
  return 0 === d.length ? (0, r.jsx)(s.pt, h(_({}, p), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: f,
    menuItems: d,
    children: e => (0, r.jsx)(s.pt, _({
      buttonRef: f
    }, e, p))
  })
}

function T(e) {
  var {
    user: t,
    relationshipType: n,
    analyticsLocation: o
  } = e, a = g(e, ["user", "relationshipType", "analyticsLocation"]);
  let c = v[n],
    u = S[n](),
    d = (0, l.Y)({
      user: t,
      analyticsLocation: o
    }),
    f = i.useRef(null),
    p = _({
      icon: c,
      tooltipText: u
    }, a);
  return 0 === d.length ? (0, r.jsx)(s.f6, h(_({}, p), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: f,
    menuItems: d,
    children: e => (0, r.jsx)(s.f6, _({
      buttonRef: f
    }, e, p))
  })
}

function C(e) {
  var {
    user: t,
    gameFriends: n,
    hasOutgoingPendingGameFriends: o,
    hasIncomingPendingGameFriends: a,
    analyticsLocation: u
  } = e, d = g(e, ["user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation"]);
  let {
    tooltipText: f,
    onMouseEnter: p,
    ariaLabel: m,
    icon: E
  } = (0, c.N)({
    gameFriends: n,
    hasOutgoingPendingGameFriends: o,
    hasIncomingPendingGameFriends: a
  }), b = (0, l.Y)({
    user: t,
    analyticsLocation: u
  }), y = i.useRef(null), O = _({
    icon: E,
    __unsupportedReactNodeAsText: f,
    "aria-label": m,
    onMouseEnter: p
  }, d);
  return 0 === b.length ? (0, r.jsx)(s.pt, h(_({}, O), {
    disabled: true
  })) : (0, r.jsx)(l.Z, {
    targetElementRef: y,
    menuItems: b,
    children: e => {
      let t = () => {
        var t;
        null == p || p(), null == (t = e.onMouseEnter) || t.call(e)
      };
      return (0, r.jsx)(s.pt, h(_({
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
    hasOutgoingPendingGameFriends: o,
    hasIncomingPendingGameFriends: a,
    analyticsLocation: u
  } = e, d = g(e, ["user", "gameFriends", "hasOutgoingPendingGameFriends", "hasIncomingPendingGameFriends", "analyticsLocation"]);
  let {
    tooltipText: f,
    onMouseEnter: p,
    ariaLabel: m,
    icon: E
  } = (0, c.N)({
    gameFriends: n,
    hasOutgoingPendingGameFriends: o,
    hasIncomingPendingGameFriends: a
  }), b = (0, l.Y)({
    user: t,
    analyticsLocation: u
  }), y = i.useRef(null), O = _({
    icon: E,
    __unsupportedReactNodeAsText: f,
    "aria-label": m,
    onMouseEnter: p
  }, d);
  return 0 === b.length ? (0, r.jsx)(s.f6, h(_({
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
      return (0, r.jsx)(s.f6, h(_({
        buttonRef: y,
        tooltipPosition: "left",
        tooltipAlign: "top"
      }, e, O), {
        onMouseEnter: t
      }))
    }
  })
}