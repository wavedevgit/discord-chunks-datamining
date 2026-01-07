/** Chunk was on web.js **/
/** chunk id: 556766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk35387 = require("./35387.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk317381 = require("./317381.js"),
  Chunk966302 = require("./966302.jsx"),
  Chunk460181 = require("./460181.js"),
  Chunk474873 = require("./474873.js"),
  Chunk292959 = require("./292959.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk340895 = require("./340895.js"),
  Chunk918559 = require("./918559.js"),
  Chunk871465 = require("./871465.js");

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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = {
    transform: "scale(0.7)",
    opacity: 0
  },
  T = {
    transform: "scale(1)",
    opacity: 1
  };

function C() {
  return 500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"])
}

function A() {
  let e = (0, l.Wu)([g.Z, m.Z, u.ZP], () => g.Z.getIncomingCalls().filter(e => {
      let {
        channel: t
      } = e, n = m.Z.getChannelId() === t.id, r = null == t.guild_id && n, i = u.ZP.getConnectedActivityChannelId() === t.id && m.Z.getVoiceChannelId() !== t.id && u.ZP.getActivityPanelMode() === E.Ez.PANEL;
      return !r || i
    })),
    t = (0, l.e7)([g.Z], () => g.Z.hasIncomingCalls()),
    n = (0, l.e7)([_.Z], () => _.Z.isSoundDisabled("call_ringing")),
    a = (0, l.e7)([h.Z], () => h.Z.disableSounds),
    o = (0, l.e7)([p.Z], () => p.Z.getSoundpack()),
    y = i.useRef(false),
    v = (0, s.Z)(() => {
      let e = "call_ringing";
      return o === b.Y.CLASSIC ? (0, f.tu)(C(), e) : (0, f.uk)("call_ringing", o)
    }, [o]);
  return i.useEffect(() => () => {
    v.stop()
  }, [v]), i.useEffect(() => {
    if (a || n) {
      y.current && (v.stop(), y.current = false);
      return
    }
    t && !y.current ? (v.loop(), y.current = true) : !t && y.current && (v.stop(), y.current = false)
  }, [n, a, t, v]), (0, c.Yzy)(e, {
    keys: e => {
      var t;
      return null == (t = e.channel) ? true : t.id
    },
    enter: {
      from: I,
      to: T
    },
    leave: I,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  })((e, t) => (0, r.jsx)(d.Z, S(O({}, t), {
    animatedStyle: e
  })))
}
let N = Chunk473749.memo(A)