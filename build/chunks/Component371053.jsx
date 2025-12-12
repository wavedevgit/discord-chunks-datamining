/** Chunk was on 50751 **/
/** chunk id: 371053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => S,
  P: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: a,
    onOneClickGoLive: o,
    appContext: u
  } = e, d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), y = (0, l.e7)([f.Z], () => f.Z.getChannel(d), [d]), O = (0, l.e7)([b.default], () => b.default.getCurrentUser()), v = null == y ? true : y.getGuildId(), E = (0, l.e7)([p.Z], () => (0, c.Z)(p.Z)), S = (0, l.e7)([h.Z, m.Z], () => null != y && (0, s.JL)(y, h.Z, m.Z));
  return r.useCallback(async () => {
    await x({
      pid: t,
      voiceChannelId: d,
      user: O,
      targetGuildId: v,
      canGoLive: E,
      canStream: S,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: a,
      onOneClickGoLive: o,
      appContext: u
    })
  }, [t, d, O, v, E, S, n, i, a, o, u])
}
async function S(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: a
  } = e, o = g.Z.getVoiceChannelId(), u = f.Z.getChannel(o), d = b.default.getCurrentUser(), y = null == u ? true : u.getGuildId(), O = null != u && (0, s.JL)(u, h.Z, m.Z), v = (0, c.Z)(p.Z);
  await x({
    pid: t,
    voiceChannelId: o,
    user: d,
    targetGuildId: y,
    canGoLive: v,
    canStream: O,
    analyticsLocation: n,
    allowOneClickGoLive: i,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: a
  })
}
async function x(e) {
  let {
    pid: t,
    voiceChannelId: r,
    user: l,
    targetGuildId: s,
    canGoLive: c,
    canStream: f,
    analyticsLocation: h,
    allowOneClickGoLive: p,
    onBeforeShowModal: m,
    onOneClickGoLive: g,
    appContext: b
  } = e;
  if (c && f) {
    if (p && null !== r) {
      let e = d.Z.getState().preset;
      if (e === O.ApplicationStreamPresets.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: t
        } = (0, o.IK)({
          location: "overlay _goLive"
        });
        e = t ? O.ApplicationStreamPresets.PRESET_AUTO : O.ApplicationStreamPresets.PRESET_VIDEO
      }
      let [n] = await (0, u.Z)(t, {
        preset: e
      });
      if (n) {
        null == g || g();
        return
      }
    }
    if (null == l) return void(0, a.showToast)((0, a.createToast)(v.intl.string(v.t.OKnWyb), a.ToastType.FAILURE, {
      appContext: y.IlC.OVERLAY
    }));
    null == m || m(), (0, a.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("38697"), n.e("4093"), n.e("44183"), n.e("59416")]).then(n.bind(n, 60594));
      return n => {
        var r, l;
        return (0, i.jsx)(e, (r = function(e) {
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
        }({}, n), l = l = {
          sourcePID: t,
          selectSource: false,
          guildId: s,
          selectGuild: null == s,
          analyticsLocation: h
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r))
      }
    }, {
      contextKey: null != b ? (0, a.VnL)(b) : true
    })
  }
}