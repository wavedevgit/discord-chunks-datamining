/** Chunk was on web.js **/
/** chunk id: 288539, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    userId: t,
    className: a,
    children: o
  } = e, l = i.useCallback(() => {
    (0, u.K)({
      kind: "user"
    })
  }, []), c = i.useCallback(e => {
    null != t && (0, s.L3)(e, async () => {
      let {
        default: e
      } = await n.e("60829").then(n.bind(n, 446828));
      return n => (0, r.jsx)(e, v(b({}, n), {
        userId: t
      }))
    })
  }, [t]);
  return (0, r.jsx)(d.A, {
    className: a,
    onClick: l,
    onContextMenu: c,
    children: o
  })
}

function I(e) {
  let {
    className: t,
    userId: u,
    channelId: y,
    parsedUserId: O,
    content: I,
    inlinePreview: S = false,
    viewingChannelId: T
  } = e, C = i.useRef(null), {
    analyticsLocations: N
  } = (0, c.Ay)(l.A.USER_MENTION), w = (0, o.bG)([m.default], () => m.default.getUser(u)), R = (0, o.bG)([p.A], () => p.A.getChannel(y)), P = null != R ? R.getGuildId() : null, D = S || null == w || null == P || null == y ? true : e => {
    null != R && (0, s.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("54809"), n.e("97262"), n.e("3795"), n.e("29534"), n.e("97283"), n.e("33818"), n.e("55296"), n.e("84841"), n.e("2016")]).then(n.bind(n, 107632));
      return t => (0, r.jsx)(e, v(b({}, t), {
        viewingChannelId: T,
        user: w,
        channel: R,
        guildId: P
      }))
    })
  }, L = E.Ay.useName(w), x = (0, o.bG)([p.A, _.Ay, h.A], () => g.Ay.getNickname(P, y, w));
  if (null == w) return (0, r.jsx)(A, {
    userId: O,
    className: t,
    children: I
  });
  let M = e => (0, r.jsx)(d.A, v(b({
    ref: C,
    className: t,
    onContextMenu: D
  }, e), {
    children: "@".concat(null != x ? x : L)
  }));
  return S ? (0, r.jsx)(c.f5, {
    value: N,
    children: M()
  }) : (0, r.jsx)(c.f5, {
    value: N,
    children: (0, r.jsx)(f.A, {
      targetElementRef: C,
      user: w,
      guildId: null != P ? P : true,
      channelId: y,
      position: a.Fr ? "top" : "right",
      clickTrap: true,
      children: e => M(e)
    })
  })
}