/** Chunk was on 50751 **/
/** chunk id: 371053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => v,
  P: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk102172 = require("./102172.js"),
  Chunk74299 = require("./74299.js"),
  Chunk562224 = require("./562224.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: o,
    onOneClickGoLive: u,
    appContext: g
  } = e, y = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId()), O = (0, l.e7)([c.Z], () => c.Z.getChannel(y), [y]), E = (0, l.e7)([m.default], () => m.default.getCurrentUser()), v = null == O ? true : O.getGuildId(), b = (0, l.e7)([p.Z], () => (0, s.Z)(p.Z)), x = (0, l.e7)([d.Z, h.Z], () => null != O && (0, a.JL)(O, d.Z, h.Z));
  return r.useCallback(async () => {
    await S({
      pid: t,
      voiceChannelId: y,
      user: E,
      targetGuildId: v,
      canGoLive: b,
      canStream: x,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: o,
      onOneClickGoLive: u,
      appContext: g
    })
  }, [t, y, E, v, b, x, n, i, o, u, g])
}
async function v(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  } = e, u = f.Z.getVoiceChannelId(), g = c.Z.getChannel(u), y = m.default.getCurrentUser(), O = null == g ? true : g.getGuildId(), E = null != g && (0, a.JL)(g, d.Z, h.Z), v = (0, s.Z)(p.Z);
  await S({
    pid: t,
    voiceChannelId: u,
    user: y,
    targetGuildId: O,
    canGoLive: v,
    canStream: E,
    analyticsLocation: n,
    allowOneClickGoLive: i,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  })
}
async function S(e) {
  let {
    pid: t,
    voiceChannelId: r,
    user: l,
    targetGuildId: a,
    canGoLive: s,
    canStream: c,
    analyticsLocation: d,
    allowOneClickGoLive: p,
    onBeforeShowModal: h,
    onOneClickGoLive: f,
    appContext: m
  } = e;
  if (s && c) {
    if (p && null !== r) {
      let [e] = await (0, u.Z)(t);
      if (e) {
        null == f || f();
        return
      }
    }
    if (null == l) return void(0, o.showToast)((0, o.createToast)(O.intl.string(O.t.OKnWyc), o.ToastType.FAILURE, {
      appContext: y.IlC.OVERLAY
    }));
    null == h || h(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("38697"), n.e("46746"), n.e("39173")]).then(n.bind(n, 60594));
      return t => {
        var n, r;
        return (0, i.jsx)(e, (n = function(e) {
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
        }({}, t), r = r = {
          sourcePID: (0, g.getPID)(),
          selectSource: false,
          guildId: a,
          selectGuild: null == a,
          analyticsLocation: d
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    }, {
      contextKey: null != m ? (0, o.VnL)(m) : true
    })
  }
}