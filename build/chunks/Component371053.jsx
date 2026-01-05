/** Chunk was on 50751 **/
/** chunk id: 371053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => S,
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
    appContext: c
  } = e, d = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()), y = (0, l.e7)([h.Z], () => h.Z.getChannel(d), [d]), E = (0, l.e7)([O.default], () => O.default.getCurrentUser()), v = (0, l.e7)([f.Z], () => (0, u.Z)(f.Z)), b = (0, l.e7)([p.Z, m.Z], () => null != y && (0, s.JL)(y, p.Z, m.Z));
  return r.useCallback(async () => {
    await x({
      pid: t,
      voiceChannelId: d,
      user: E,
      canGoLive: v,
      canStream: b,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: o,
      onOneClickGoLive: a,
      appContext: c
    })
  }, [t, d, E, v, b, n, i, o, a, c])
}
async function S(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  } = e, a = g.Z.getVoiceChannelId(), c = h.Z.getChannel(a), d = O.default.getCurrentUser(), y = null != c && (0, s.JL)(c, p.Z, m.Z), E = (0, u.Z)(f.Z);
  await x({
    pid: t,
    voiceChannelId: a,
    user: d,
    canGoLive: E,
    canStream: y,
    analyticsLocation: n,
    allowOneClickGoLive: i,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: o
  })
}
async function x(e) {
  let {
    pid: t,
    voiceChannelId: r,
    user: l,
    canGoLive: s,
    canStream: u,
    allowOneClickGoLive: h,
    onBeforeShowModal: p,
    onOneClickGoLive: f,
    appContext: m
  } = e;
  if (s && u) {
    if (h && null !== r) {
      let e = d.Z.getState().preset;
      if (e === E.tI.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: t
        } = (0, a.IK)({
          location: "overlay _goLive"
        });
        e = t ? E.tI.PRESET_AUTO : E.tI.PRESET_VIDEO
      }
      let [n] = await (0, c.Z)(t, {
        preset: e
      });
      if (n) {
        null == f || f();
        return
      }
    }
    if (null == l) return void(0, o.showToast)((0, o.createToast)(v.intl.string(v.t.OKnWyb), o.ToastType.FAILURE, {
      appContext: y.IlC.OVERLAY
    }));
    null == p || p(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("46746"), n.e("84064")]).then(n.bind(n, 60594));
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
          selectSource: false
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
      contextKey: null != m ? (0, o.VnL)(m) : true
    })
  }
}