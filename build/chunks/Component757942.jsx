/** Chunk was on web.js **/
/** chunk id: 757942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk310953 = require("./310953.js"),
  Chunk366811 = require("./366811.js"),
  Chunk808728 = require("./808728.js"),
  Chunk967198 = require("./967198.js"),
  Chunk711014 = require("./711014.js"),
  Chunk645959 = require("./645959.js"),
  Chunk203982 = require("./203982.js"),
  Chunk265422 = require("./265422.js"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js");

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

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  let n = [h.ME, ...d.Ay.getFlattenedGuildIds()],
    r = n.indexOf(e);
  return t > 0 ? n.slice(r).concat(n.slice(0, r), e) : (n.splice(r, 0, e), n.slice(r + 1).concat(n.slice(0, r + 1)))
}

function v(e, t) {
  return e === h.ME ? f.A.getPrivateChannelIds() : (0, o.A)(e, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: true
  }).map(e => e.id)
}

function A(e, t) {
  return [{
    resourceId: e,
    type: m.P.GUILD_EVENT
  }, ...v(e, t)]
}

function I(e, t) {
  var i, a;
  let o, {
      channelPredicate: d = () => true,
      guildPredicate: f = () => true,
      guildFeaturePredicate: m = () => false,
      ensureChatIsVisible: g = () => false,
      withVoiceChannels: y = false
    } = t,
    v = null != (i = l.A.getState().guildId) ? i : h.ME,
    I = l.A.getState().channelId,
    S = O(v, e),
    T = e > 0 ? 0 : S.length - 1,
    C = A(v, y),
    N = C.indexOf(I) + e;
  for (; null != v && "" !== v;) {
    if (o = C[N], f(v))
      for (; null != o && "" !== o;) {
        if ("string" == typeof o) {
          if (d(v, o)) return (0, _.i)(v, o, false, g(v, o))
        } else if ("object" == typeof o && m(o.resourceId, o.type)) return v !== u.A.getGuildId() && (0, _.i)(v, null == (a = c.Ay.getDefaultChannel(v)) ? true : a.id), (0, s.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
          return t => (0, r.jsx)(e, b(E({}, t), {
            guildId: v
          }))
        });
        N += e, o = C[N]
      }
    if (T += e, null == (v = S[T]) || "" === v) break;
    C = A(v, y), N = e < 0 ? C.length - 1 : 0
  }
  p._.dispatch(h.jej.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}
let S = a().throttle(I, Chunk652215.ugG)