/** Chunk was on web.js **/
/** chunk id: 447216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Y
}), require("./896048.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk947320 = require("./947320.js"),
  Chunk873298 = require("./873298.js"),
  Chunk506774 = require("./506774.js"),
  Chunk439372 = require("./439372.js"),
  Chunk108713 = require("./108713.js"),
  Chunk643501 = require("./643501.js"),
  Chunk209932 = require("./209932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk661191 = require("./661191.js"),
  Chunk879172 = require("./879172.js"),
  Chunk409826 = require("./409826.js"),
  Chunk594061 = require("./594061.js"),
  Chunk731854 = require("./731854.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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
let A = 300,
  I = 2e3,
  S = e => "AudioContextSettingsMigrated:".concat(e),
  T = e => e === E.x.STREAM ? a.i.STREAM : a.i.USER;

function C(e, t, n) {
  return e[t].volume !== T(n) || e[t].muted || e[t].soundboardMuted || delete e[t], e
}

function N(e) {
  let t = _.default.entries(e),
    n = t.length;
  if (n <= A) return;
  let r = t.sort((e, t) => {
      let [n, {
        modifiedAt: r
      }] = e, [i, {
        modifiedAt: a
      }] = t;
      return Number(r) - Number(a)
    }),
    i = n - A;
  for (let t = 0; t < i; t++) {
    let [n] = r[t];
    delete e[n]
  }
}

function R(e) {
  return s.oP.create({
    muted: false,
    volume: T(e)
  })
}

function w() {
  o.w.get(S(f.default.getId())) || g.wc.updateAsync("audioContextSettings", e => {
    let t = false;
    for (let [n, r] of Object.entries(p.A.getState().settingsByContext)) {
      let i = (0, m.o)(n);
      if (null == i) continue;
      let a = e[i],
        s = String(Date.now()),
        o = {};
      for (let [e, t] of Object.entries(r.localMutes)) o[e] = {
        muted: t,
        volume: T(n),
        modifiedAt: s,
        soundboardMuted: false
      };
      for (let [e, t] of Object.entries(r.localVolumes)) o[e] = v(b({
        muted: false,
        modifiedAt: s
      }, o[e]), {
        volume: (0, m.z)(t, n)
      });
      let l = Object.keys(a).length;
      for (let [e, [n, r]] of Object.entries(o).entries()) {
        if (A - l - (e + 1) <= 0) break;
        null == a[n] && (t = true, a[n] = r)
      }
    }
    return o.w.set(S(f.default.getId()), true), t
  }, g.Sb.AUTOMATED)
}

function P(e, t, n, r) {
  var i;
  let a = !(arguments.length > 4) || true === arguments[4] || arguments[4],
    s = (0, m.o)(n);
  if (null == s) returnfalse;
  let o = e[s];
  return o[t] = null != (i = o[t]) ? i : R(n), r(o[t]), o[t].modifiedAt = String(Date.now()), a && C(o, t, n), N(o), true
}

function D() {
  w()
}
let x = i().debounce(() => {
  U()
}, I);

function L(e, t, n) {
  (0, h.gq)(e, t, {
    volume: n
  }), x()
}

function j(e, t, n) {
  (0, h.gq)(e, t, {
    muted: n
  }), x.cancel(), U()
}

function M(e, t, n) {
  (0, h.gq)(e, t, {
    soundboardMuted: n
  }), x.cancel(), U()
}
let k = i().debounce(Chunk108713.VR, 500, {
  maxWait: 500
});

function U() {
  g.wc.updateAsync("audioContextSettings", e => {
    let t = false;
    return (0, h.rQ)((n, r, i) => {
      let a = P(e, r, n, e => {
        Object.assign(e, i)
      });
      t = t || a
    }), t
  }, g.Sb.INFREQUENT_USER_ACTION)
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
    muted: p.A.isLocalMute(n, t),
    volume: r
  }), L(t, n, r)
}

function V(e) {
  let {
    context: t,
    userId: n
  } = e;
  n !== f.default.getId() && j(t, n, p.A.isLocalMute(n, t))
}

function F(e) {
  let {
    context: t,
    userId: n
  } = e;
  n !== f.default.getId() && M(t, n, d.A.isLocalSoundboardMuted(n))
}

function B(e) {
  let {} = e;
  g.wc.updateAsync("audioContextSettings", e => {
    e.user = {}, e.stream = {}
  }, g.Sb.INFREQUENT_USER_ACTION)
}
class H extends Chunk439372.A {
  constructor(...e) {
    super(...e), y(this, "actions", {
      POST_CONNECTION_OPEN: D,
      AUDIO_SET_LOCAL_VOLUME: G,
      AUDIO_TOGGLE_LOCAL_MUTE: V,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: F,
      MEDIA_ENGINE_RESET_SETTINGS: B
    })
  }
}
let Y = new H