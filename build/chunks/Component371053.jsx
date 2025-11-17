/** Chunk was on 50751 **/
/** chunk id: 371053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => _,
  P: () => b
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

function b(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: o,
    onOneClickGoLive: a,
    appContext: u
  } = e, d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), O = (0, l.e7)([h.Z], () => h.Z.getChannel(d), [d]), v = (0, l.e7)([y.default], () => y.default.getCurrentUser()), E = null == O ? true : O.getGuildId(), b = (0, l.e7)([f.Z], () => (0, c.Z)(f.Z)), _ = (0, l.e7)([p.Z, m.Z], () => null != O && (0, s.JL)(O, p.Z, m.Z));
  return r.useCallback(async () => {
    await S({
      pid: t,
      voiceChannelId: d,
      user: v,
      targetGuildId: E,
      canGoLive: b,
      canStream: _,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: o,
      onOneClickGoLive: a,
      appContext: u
    })
  }, [t, d, v, E, b, _, n, i, o, a, u])
}
async function _(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  } = e, a = g.Z.getVoiceChannelId(), u = h.Z.getChannel(a), d = y.default.getCurrentUser(), O = null == u ? true : u.getGuildId(), v = null != u && (0, s.JL)(u, p.Z, m.Z), E = (0, c.Z)(f.Z);
  await S({
    pid: t,
    voiceChannelId: a,
    user: d,
    targetGuildId: O,
    canGoLive: E,
    canStream: v,
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
    targetGuildId: s,
    canGoLive: c,
    canStream: h,
    analyticsLocation: p,
    allowOneClickGoLive: f,
    onBeforeShowModal: m,
    onOneClickGoLive: g,
    appContext: y
  } = e;
  if (c && h) {
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
      let [n] = await (0, u.Z)(t, {
        preset: e
      });
      if (n) {
        null == g || g();
        return
      }
    }
    if (null == l) return void(0, o.showToast)((0, o.createToast)(E.intl.string(E.t.OKnWyb), o.ToastType.FAILURE, {
      appContext: O.IlC.OVERLAY
    }));
    null == m || m(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("38697"), n.e("4093"), n.e("47863"), n.e("39173")]).then(n.bind(n, 60594));
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
          analyticsLocation: p
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
      contextKey: null != y ? (0, o.VnL)(y) : true
    })
  }
}