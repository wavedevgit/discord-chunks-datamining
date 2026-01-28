/** Chunk was on 5606 **/
/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
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

function b(e, t) {
  return [{
    resourceId: e,
    type: f.P.GUILD_EVENT
  }, ...e === g.ME ? p.A.getPrivateChannelIds() : (0, a.A)(e, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: true
  }).map(e => e.id)]
}
let h = l().throttle(function(e, t) {
  var i, l, a;
  let p, f, h, {
      channelPredicate: A = () => true,
      guildPredicate: E = () => true,
      guildFeaturePredicate: x = () => false,
      ensureChatIsVisible: O = () => false,
      withVoiceChannels: C = false
    } = t,
    y = null != (i = o.A.getState().guildId) ? i : g.ME,
    j = o.A.getState().channelId,
    T = (a = y, f = (p = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(a), e > 0 ? p.slice(f).concat(p.slice(0, f), a) : (p.splice(f, 0, a), p.slice(f + 1).concat(p.slice(0, f + 1)))),
    v = e > 0 ? 0 : T.length - 1,
    S = b(y, C),
    I = S.indexOf(j) + e;
  for (; null != y && "" !== y;) {
    if (h = S[I], E(y))
      for (; null != h && "" !== h;) {
        if ("string" == typeof h) {
          if (A(y, h)) return (0, m.i)(y, h, false, O(y, h))
        } else if ("object" == typeof h && x(h.resourceId, h.type)) return y !== d.A.getGuildId() && (0, m.i)(y, null == (l = c.Ay.getDefaultChannel(y)) ? true : l.id), (0, s.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
          return t => (0, r.jsx)(e, function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, t), {
            guildId: y
          }))
        });
        I += e, h = S[I]
      }
    if (v += e, null == (y = T[v]) || "" === y) break;
    S = b(y, C), I = e < 0 ? S.length - 1 : 0
  }
  _._.dispatch(g.jej.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, Chunk652215.ugG)