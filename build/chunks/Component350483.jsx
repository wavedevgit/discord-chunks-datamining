/** Chunk was on web.js **/
/** chunk id: 350483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk358230 = require("./358230.js"),
  Chunk905423 = require("./905423.js"),
  Chunk984933 = require("./984933.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk55589 = require("./55589.js"),
  Chunk585483 = require("./585483.js"),
  Chunk475468 = require("./475468.js"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  let n = [m.ME, ...d.ZP.getFlattenedGuildIds()],
    r = n.indexOf(e);
  return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)))
}

function v(e, t) {
  return e === m.ME ? f.Z.getPrivateChannelIds() : (0, s.Z)(e, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: true
  }).map(e => e.id)
}

function S(e, t) {
  return [{
    resourceId: e,
    type: h.W.GUILD_EVENT
  }, ...v(e, t)]
}

function I(e, t) {
  var i, a;
  let s, {
      channelPredicate: d = () => true,
      guildPredicate: f = () => true,
      guildFeaturePredicate: h = () => false,
      ensureChatIsVisible: g = () => false,
      withVoiceChannels: b = false
    } = t,
    v = null != (i = l.Z.getState().guildId) ? i : m.ME,
    I = l.Z.getState().channelId,
    T = O(v, e),
    C = e > 0 ? 0 : T.length - 1,
    A = S(v, b),
    N = A.indexOf(I) + e;
  for (; null != v && "" !== v;) {
    if (s = A[N], f(v))
      for (; null != s && "" !== s;) {
        if ("string" == typeof s) {
          if (d(v, s)) return (0, _.K)(v, s, false, g(v, s))
        } else if ("object" == typeof s && h(s.resourceId, s.type)) return v !== u.Z.getGuildId() && (0, _.K)(v, null == (a = c.ZP.getDefaultChannel(v)) ? true : a.id), (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("4096"), n.e("56236"), n.e("11393")]).then(n.bind(n, 17671));
          return t => (0, r.jsx)(e, y(E({}, t), {
            guildId: v
          }))
        });
        N += e, s = A[N]
      }
    if (C += e, null == (v = T[C]) || "" === v) break;
    A = S(v, b), N = e < 0 ? A.length - 1 : 0
  }
  p.S.dispatch(m.CkL.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}
let T = a().throttle(I, Chunk981631.aZC)