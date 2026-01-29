/** Chunk was on 2827 **/
/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function f(e, t) {
  return [{
    resourceId: e,
    type: A.P.GUILD_EVENT
  }, ...e === g.ME ? _.A.getPrivateChannelIds() : (0, a.A)(e, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: true
  }).map(e => e.id)]
}
let b = l().throttle(function(e, t) {
  var i, l, a;
  let _, A, b, {
      channelPredicate: h = () => true,
      guildPredicate: E = () => true,
      guildFeaturePredicate: O = () => false,
      ensureChatIsVisible: C = () => false,
      withVoiceChannels: x = false
    } = t,
    S = null != (i = o.A.getState().guildId) ? i : g.ME,
    T = o.A.getState().channelId,
    I = (a = S, A = (_ = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(a), e > 0 ? _.slice(A).concat(_.slice(0, A), a) : (_.splice(A, 0, a), _.slice(A + 1).concat(_.slice(0, A + 1)))),
    y = e > 0 ? 0 : I.length - 1,
    N = f(S, x),
    j = N.indexOf(T) + e;
  for (; null != S && "" !== S;) {
    if (b = N[j], E(S))
      for (; null != b && "" !== b;) {
        if ("string" == typeof b) {
          if (h(S, b)) return (0, m.i)(S, b, false, C(S, b))
        } else if ("object" == typeof b && O(b.resourceId, b.type)) return S !== d.A.getGuildId() && (0, m.i)(S, null == (l = c.Ay.getDefaultChannel(S)) ? true : l.id), (0, s.mMO)(async () => {
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
            guildId: S
          }))
        });
        j += e, b = N[j]
      }
    if (y += e, null == (S = I[y]) || "" === S) break;
    N = f(S, x), j = e < 0 ? N.length - 1 : 0
  }
  p._.dispatch(g.jej.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, Chunk652215.ugG)