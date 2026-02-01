/** Chunk was on 71447 **/
/** chunk id: 823901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => O,
  y: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk258585 = require("./258585.js"),
  Chunk279250 = require("./279250.js"),
  Chunk880144 = require("./880144.js"),
  Chunk72432 = require("./72432.js"),
  Chunk929921 = require("./929921.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk753070 = require("./753070.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: a,
    onOneClickGoLive: s,
    appContext: c
  } = e, d = (0, l.bG)([m.A], () => m.A.getVoiceChannelId()), A = (0, l.bG)([h.A], () => h.A.getChannel(d), [d]), v = (0, l.bG)([y.default], () => y.default.getCurrentUser()), b = (0, l.bG)([f.A], () => (0, u.A)(f.A)), E = (0, l.bG)([p.A, g.A], () => null != A && (0, o.vz)(A, p.A, g.A));
  return r.useCallback(async () => {
    await x({
      pid: t,
      voiceChannelId: d,
      user: v,
      canGoLive: b,
      canStream: E,
      analyticsLocation: n,
      allowOneClickGoLive: i,
      onBeforeShowModal: a,
      onOneClickGoLive: s,
      appContext: c
    })
  }, [t, d, v, b, E, n, i, a, s, c])
}
async function O(e) {
  let {
    pid: t,
    analyticsLocation: n,
    allowOneClickGoLive: i = false,
    onBeforeShowModal: r,
    onOneClickGoLive: l,
    appContext: a
  } = e, s = m.A.getVoiceChannelId(), c = h.A.getChannel(s), d = y.default.getCurrentUser(), A = null != c && (0, o.vz)(c, p.A, g.A), v = (0, u.A)(f.A);
  await x({
    pid: t,
    voiceChannelId: s,
    user: d,
    canGoLive: v,
    canStream: A,
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
    canGoLive: o,
    canStream: u,
    allowOneClickGoLive: h,
    onBeforeShowModal: p,
    onOneClickGoLive: f,
    appContext: g
  } = e;
  if (o && u) {
    if (h && null !== r) {
      let e = d.A.getState().preset;
      if (e === v.jQ.PRESET_DOCUMENTS) {
        let {
          allowAutoQuality: t
        } = (0, s.eO)({
          location: "overlay _goLive"
        });
        e = t ? v.jQ.PRESET_AUTO : v.jQ.PRESET_VIDEO
      }
      let [n] = await (0, c.A)(t, {
        preset: e
      });
      if (n) {
        null == f || f();
        return
      }
    }
    if (null == l) return void(0, a.showToast)((0, a.createToast)(b.intl.string(b.t.OKnWyb), a.ToastType.FAILURE, {
      appContext: A.BRT.OVERLAY
    }));
    null == p || p(), (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
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
      contextKey: null != g ? (0, a.TId)(g) : true
    })
  }
}