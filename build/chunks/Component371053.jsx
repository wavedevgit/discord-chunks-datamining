/** Chunk was on 50751 **/
/** chunk id: 371053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => x,
  P: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk580991 = require("./580991.js"),
  Chunk102172 = require("./102172.js"),
  Chunk74299 = require("./74299.js"),
  Chunk562224 = require("./562224.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: o,
    onOneClickGoLive: a,
    appContext: c
  } = e, d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), O = (0, l.e7)([p.Z], () => p.Z.getChannel(d), [d]), E = (0, l.e7)([y.default], () => y.default.getCurrentUser()), v = null == O ? true : O.getGuildId(), S = (0, l.e7)([f.Z], () => (0, u.Z)(f.Z)), b = (0, l.e7)([h.Z, m.Z], () => null != O && (0, s.JL)(O, h.Z, m.Z));
  return r.useCallback(async () => {
    await j({
      pid: t,
      voiceChannelId: d,
      user: E,
      targetGuildId: v,
      canGoLive: S,
      canStream: b,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: o,
      onOneClickGoLive: a,
      appContext: c
    })
  }, [t, d, E, v, S, b, n, i, o, a, c])
}
async function x(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  } = e, a = g.Z.getVoiceChannelId(), c = p.Z.getChannel(a), d = y.default.getCurrentUser(), O = null == c ? true : c.getGuildId(), E = null != c && (0, s.JL)(c, h.Z, m.Z), v = (0, u.Z)(f.Z);
  await j({
    pid: t,
    voiceChannelId: a,
    user: d,
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
async function j(e) {
  let {
    pid: t,
    voiceChannelId: r,
    user: l,
    targetGuildId: s,
    canGoLive: u,
    canStream: p,
    analyticsLocation: h,
    allowOneClickGoLive: f,
    onBeforeShowModal: m,
    onOneClickGoLive: g,
    appContext: y
  } = e;
  if (u && p) {
    if (f && null !== r) {
      let e = d.Z.getState().preset;
      if (e === v.ApplicationStreamPresets.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: t
        } = (0, a.IK)({
          location: "overlay _goLive"
        });
        e = t ? v.ApplicationStreamPresets.PRESET_AUTO : v.ApplicationStreamPresets.PRESET_VIDEO
      }
      let [n] = await (0, c.Z)(t, {
        preset: e
      });
      if (n) {
        null == g || g();
        return
      }
    }
    if (null == l) return void(0, o.showToast)((0, o.createToast)(S.intl.string(S.t.OKnWyb), o.ToastType.FAILURE, {
      appContext: E.IlC.OVERLAY
    }));
    null == m || m(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("4093"), n.e("33840"), n.e("65174")]).then(n.bind(n, 60594));
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
          sourcePID: (0, O.getPID)(),
          selectSource: false,
          guildId: s,
          selectGuild: null == s,
          analyticsLocation: h
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
      contextKey: null != y ? (0, o.VnL)(y) : true
    })
  }
}