/** Chunk was on web.js **/
/** chunk id: 288539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk9588 = require("./9588.jsx"),
  Chunk332173 = require("./332173.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let {
    userId: t,
    className: a,
    children: s
  } = e, l = i.useCallback(() => {
    (0, u.K)({
      kind: "user"
    })
  }, []), c = i.useCallback(e => {
    null != t && (0, o.L3)(e, async () => {
      let {
        default: e
      } = await n.e("60829").then(n.bind(n, 446828));
      return n => (0, r.jsx)(e, A(y({}, n), {
        userId: t
      }))
    })
  }, [t]);
  return (0, r.jsx)(d.A, {
    className: a,
    onClick: l,
    onContextMenu: c,
    children: s
  })
}

function S(e) {
  let {
    className: t,
    userId: u,
    channelId: b,
    parsedUserId: O,
    content: S,
    inlinePreview: I = false,
    viewingChannelId: T
  } = e, C = i.useRef(null), {
    analyticsLocations: N
  } = (0, c.Ay)(l.A.USER_MENTION), R = (0, s.bG)([m.default], () => m.default.getUser(u)), w = (0, s.bG)([p.A], () => p.A.getChannel(b)), P = null != w ? w.getGuildId() : null, D = I || null == R || null == P || null == b ? true : e => {
    null != w && (0, o.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("29534"), n.e("33818"), n.e("55296"), n.e("84841"), n.e("43144")]).then(n.bind(n, 107632));
      return t => (0, r.jsx)(e, A(y({}, t), {
        viewingChannelId: T,
        user: R,
        channel: w,
        guildId: P
      }))
    })
  }, x = E.Ay.useName(R), L = (0, s.bG)([p.A, _.Ay, h.A], () => g.Ay.getNickname(P, b, R));
  if (null == R) return (0, r.jsx)(v, {
    userId: O,
    className: t,
    children: S
  });
  let j = e => (0, r.jsx)(d.A, A(y({
    ref: C,
    className: t,
    onContextMenu: D
  }, e), {
    children: "@".concat(null != L ? L : x)
  }));
  return I ? (0, r.jsx)(c.f5, {
    value: N,
    children: j()
  }) : (0, r.jsx)(c.f5, {
    value: N,
    children: (0, r.jsx)(f.A, {
      targetElementRef: C,
      user: R,
      guildId: null != P ? P : true,
      channelId: b,
      position: a.Fr ? "top" : "right",
      clickTrap: true,
      children: e => j(e)
    })
  })
}