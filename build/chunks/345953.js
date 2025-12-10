/** Chunk was on web.js **/
/** chunk id: 345953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk51407 = require("./51407.js"),
  Chunk524437 = require("./524437.js"),
  Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js"),
  Chunk254238 = require("./254238.js"),
  Chunk258609 = require("./258609.js"),
  Chunk763296 = require("./763296.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk709054 = require("./709054.js"),
  Chunk725380 = require("./725380.js"),
  Chunk340332 = require("./340332.js"),
  Chunk675478 = require("./675478.js"),
  Chunk65154 = require("./65154.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = 300,
  I = 2e3,
  T = e => "AudioContextSettingsMigrated:".concat(e),
  C = e => e === E.Yn.STREAM ? a.h.STREAM : a.h.USER;

function A(e, t, n) {
  return e[t].volume !== C(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e
}

function N(e) {
  let t = _.default.entries(e),
    n = t.length;
  if (n <= S) return;
  let r = t.sort((e, t) => {
      let [n, {
        modifiedAt: r
      }] = e, [i, {
        modifiedAt: a
      }] = t;
      return Number(r) - Number(a)
    }),
    i = n - S;
  for (let t = 0; t < i; t++) {
    let [n] = r[t];
    delete e[n]
  }
}

function P(e) {
  return o.JY.create({
    muted: false,
    volume: C(e)
  })
}

function R() {
  Chunk433517.K.get(T(Chunk314897.default.getId())) || Chunk675478.hW.updateAsync("audioContextSettings", e => {
    let t = false;
    for (let [n, r] of Object.entries(p.Z.getState().settingsByContext)) {
      let i = (0, h.z)(n);
      if (null == i) continue;
      let a = e[i],
        o = String(Date.now()),
        s = {};
      for (let [e, t] of Object.entries(r.localMutes)) s[e] = {
        muted: t,
        volume: C(n),
        modifiedAt: o,
        soundboardMuted: false
      };
      for (let [e, t] of Object.entries(r.localVolumes)) s[e] = v(y({
        muted: false,
        modifiedAt: o
      }, s[e]), {
        volume: (0, h.r)(t, n)
      });
      let l = Object.keys(a).length;
      for (let [e, [n, r]] of Object.entries(s).entries()) {
        if (S - l - (e + 1) <= 0) break;
        null == a[n] && (t = true, a[n] = r)
      }
    }
    return s.K.set(T(f.default.getId()), true), t
  }, Chunk675478.fy.AUTOMATED)
}

function w(e, t, n, r) {
  var i;
  let a = !(arguments.length > 4) || true === arguments[4] || arguments[4],
    o = (0, h.z)(n);
  if (null == o) returnfalse;
  let s = e[o];
  return s[t] = null != (i = s[t]) ? i : P(n), r(s[t]), s[t].modifiedAt = String(Date.now()), a && A(s, t, n), N(s), true
}

function D() {
  R()
}
let x = i().debounce(() => {
  U()
}, I);

function L(e, t, n) {
  (0, m.RF)(e, t, {
    volume: n
  }), x()
}

function j(e, t, n) {
  (0, m.RF)(e, t, {
    muted: n
  }), x.cancel(), U()
}

function M(e, t, n) {
  (0, m.RF)(e, t, {
    soundboardMuted: n
  }), x.cancel(), U()
}
let k = i().debounce(Chunk254238.On, 500, {
  maxWait: 500
});

function U() {
  Chunk675478.hW.updateAsync("audioContextSettings", e => {
    let t = false;
    return (0, m.$E)((n, r, i) => {
      let a = w(e, r, n, e => {
        Object.assign(e, i)
      });
      t = t || a
    }), t
  }, Chunk675478.fy.INFREQUENT_USER_ACTION)
}

function G(e) {
  let {
    context: t,
    userId: n,
    volume: r
  } = e;
  if (n === f.default.getId()) return;
  let i = u.default.getRemoteSessionId();
  null != i && k(i, n, t, {
    muted: p.Z.isLocalMute(n, t),
    volume: r
  }), L(t, n, r)
}

function Z(e) {
  let {
    context: t,
    userId: n
  } = e;
  n !== f.default.getId() && j(t, n, p.Z.isLocalMute(n, t))
}

function B(e) {
  let {
    context: t,
    userId: n
  } = e;
  n !== f.default.getId() && M(t, n, d.Z.isLocalSoundboardMuted(n))
}

function F(e) {
  let {} = e;
  g.hW.updateAsync("audioContextSettings", e => {
    e.user = {}, e.stream = {}
  }, g.fy.INFREQUENT_USER_ACTION)
}
class V extends Chunk147913.Z {
  constructor(...e) {
    super(...e), b(this, "actions", {
      POST_CONNECTION_OPEN: D,
      AUDIO_SET_LOCAL_VOLUME: G,
      AUDIO_TOGGLE_LOCAL_MUTE: Z,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: B,
      MEDIA_ENGINE_RESET_SETTINGS: F
    })
  }
}
let H = new V