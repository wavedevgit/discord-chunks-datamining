/** Chunk was on web.js **/
/** chunk id: 776031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk2052 = require("./2052.js"),
  Chunk451467 = require("./451467.js"),
  Chunk361291 = require("./361291.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk131951 = require("./131951.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("28479").then(n.bind(n, 78865));
    return n => (0, r.jsx)(e, I(O({}, n), {
      analyticsSource: t
    }))
  }, {
    contextKey: e === m.IlC.POPOUT ? o.u1M : o.z1l
  })
}

function T(e, t) {
  let {
    preset: n,
    resolution: y,
    fps: v
  } = (0, a.cj)([u.Z], () => u.Z.getState()), T = (0, a.e7)([_.Z], () => _.Z.getGoLiveSource()), A = (0, a.e7)([h.default], () => h.default.getCurrentUser()), C = (0, a.e7)([f.Z], () => {
    var t;
    return null == (t = f.Z.getGuild(null == e ? true : e.guildId)) ? true : t.premiumTier
  }), {
    location: N
  } = (0, l.O)(), R = (0, a.e7)([p.Z, d.Z], () => d.Z.getChannel(p.Z.getVoiceChannelId())), P = i.useCallback((e, n, r, i) => {
    if (e) {
      if (null != T) {
        let e = {
          qualityOptions: {
            preset: g.tI.PRESET_CUSTOM,
            resolution: n,
            frameRate: r
          },
          context: E.Yn.STREAM
        };
        null != T.desktopSource ? e.desktopSettings = {
          sourceId: T.desktopSource.id,
          sound: true
        } : null != T.cameraSource && (e.cameraSettings = {
          videoDeviceGuid: T.cameraSource.videoDeviceGuid,
          audioDeviceGuid: T.cameraSource.audioDeviceGuid
        }), s.Z.setGoLiveSource(e)
      }
    } else S(t, I(O({}, N), {
      object: m.qAy.RADIO_ITEM,
      objectType: i
    }))
  }, [t, N, T]);
  if (null == e) return null;
  let w = n === g.tI.PRESET_DOCUMENTS ? g.ws.FPS_30 : v,
    D = g.af.map(e => {
      let {
        value: t,
        label: n
      } = e, i = (0, c.Z)(g.tI.PRESET_CUSTOM, y, t, A, C, R);
      return (0, r.jsx)(o.k5B, {
        group: "stream-settings-fps",
        id: "stream-settings-fps-".concat(t),
        label: n,
        checked: t === v,
        action: () => P(i, y, t, m.Qqv.RESOLUTION)
      }, "stream-settings-fps-".concat(t))
    }),
    x = g.km.map(e => {
      let {
        value: t,
        label: n
      } = e, i = (0, c.Z)(g.tI.PRESET_CUSTOM, t, w, A, C, R);
      return (0, r.jsx)(o.k5B, {
        group: "stream-settings-resolution",
        id: "stream-settings-resolution-".concat(t),
        label: n,
        checked: t === y,
        action: () => P(i, t, w, m.Qqv.RESOLUTION)
      }, "stream-settings-resolution-".concat(t))
    });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.kSQ, {
      label: b.intl.string(b.t.SkkeIi),
      children: D
    }), (0, r.jsx)(o.kSQ, {
      label: b.intl.string(b.t.rHyPXl),
      children: x
    })]
  })
}