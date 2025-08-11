/** Chunk was on 75708 **/
/** chunk id: 350483, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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

function b(e, t) {
  return [{
    resourceId: e,
    type: f.W.GUILD_EVENT
  }, ...e === h.ME ? m.Z.getPrivateChannelIds() : (0, l.Z)(e, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: true
  }).map(e => e.id)]
}
let x = s().throttle(function(e, t) {
  var r, s;
  let l, {
      channelPredicate: m = () => true,
      guildPredicate: f = () => true,
      guildFeaturePredicate: x = () => false,
      ensureChatIsVisible: _ = () => false,
      withVoiceChannels: j = false
    } = t,
    E = null != (r = o.Z.getState().guildId) ? r : h.ME,
    C = o.Z.getState().channelId,
    O = function(e, t) {
      let n = [h.ME, ...u.ZP.getFlattenedGuildIds()],
        i = n.indexOf(e);
      return t > 0 ? n.slice(i).concat(n.slice(0, i), e) : (n.splice(i, 0, e), n.slice(i + 1).concat(n.slice(0, i + 1)))
    }(E, e),
    v = e > 0 ? 0 : O.length - 1,
    S = b(E, j),
    T = S.indexOf(C) + e;
  for (; null != E && "" !== E;) {
    if (l = S[T], f(E))
      for (; null != l && "" !== l;) {
        if ("string" == typeof l) {
          if (m(E, l)) return (0, g.K)(E, l, false, _(E, l))
        } else if ("object" == typeof l && x(l.resourceId, l.type)) return E !== d.Z.getGuildId() && (0, g.K)(E, null == (s = c.ZP.getDefaultChannel(E)) ? true : s.id), (0, a.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("22347"), n.e("56236"), n.e("80193")]).then(n.bind(n, 17671));
          return t => (0, i.jsx)(e, function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, t), {
            guildId: E
          }))
        });
        T += e, l = S[T]
      }
    if (v += e, null == (E = O[v]) || "" === E) break;
    S = b(E, j), T = e < 0 ? S.length - 1 : 0
  }
  p.S.dispatch(h.CkL.SHAKE_APP, {
    duration: 200,
    intensity: 2
  })
}, Chunk981631.aZC)