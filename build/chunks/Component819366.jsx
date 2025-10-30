/** Chunk was on web.js **/
/** chunk id: 819366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk927723 = require("./927723.jsx"),
  Chunk124072 = require("./124072.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js");

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

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e) {
  let {
    userId: t,
    className: a,
    children: o
  } = e, l = i.useCallback(() => {
    (0, u.k)({
      kind: "user"
    })
  }, []), c = i.useCallback(e => {
    null != t && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await n.e("25073").then(n.bind(n, 80742));
      return n => (0, r.jsx)(e, v(y({}, n), {
        userId: t
      }))
    })
  }, [t]);
  return (0, r.jsx)(d.Z, {
    className: a,
    onClick: l,
    onContextMenu: c,
    children: o
  })
}

function T(e) {
  let {
    className: t,
    userId: u,
    channelId: b,
    parsedUserId: O,
    content: T,
    inlinePreview: S = false,
    viewingChannelId: A
  } = e, C = i.useRef(null), {
    analyticsLocations: N
  } = (0, c.ZP)(l.Z.USER_MENTION), R = (0, o.e7)([m.default], () => m.default.getUser(u)), P = (0, o.e7)([_.Z], () => _.Z.getChannel(b)), w = null != P ? P.getGuildId() : null, D = S || null == R || null == w || null == b ? true : e => {
    null != P && (0, s.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("98783"), n.e("6915"), n.e("8982"), n.e("7717"), n.e("46231")]).then(n.bind(n, 757387));
      return t => (0, r.jsx)(e, v(y({}, t), {
        viewingChannelId: A,
        user: R,
        channel: P,
        guildId: w
      }))
    })
  }, x = E.ZP.useName(R), L = (0, o.e7)([_.Z, p.ZP, h.Z], () => g.ZP.getNickname(w, b, R));
  if (null == R) return (0, r.jsx)(I, {
    userId: O,
    className: t,
    children: T
  });
  let M = e => (0, r.jsx)(d.Z, v(y({
    ref: C,
    className: t,
    onContextMenu: D
  }, e), {
    children: "@".concat(null != L ? L : x)
  }));
  return S ? (0, r.jsx)(c.Gt, {
    value: N,
    children: M()
  }) : (0, r.jsx)(c.Gt, {
    value: N,
    children: (0, r.jsx)(f.Z, {
      targetElementRef: C,
      user: R,
      guildId: null != w ? w : true,
      channelId: b,
      position: a.tq ? "top" : "right",
      clickTrap: true,
      children: e => M(e)
    })
  })
}