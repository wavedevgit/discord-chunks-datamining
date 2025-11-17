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

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {
    transform: "scale(0.7)",
    opacity: 0
  },
  S = {
    transform: "scale(1)",
    opacity: 1
  };

function A() {
  return 500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"])
}

function C() {
  let e = (0, Chunk442837.Wu)([Chunk340895.Z, Chunk944486.Z, Chunk317381.ZP], () => Chunk340895.Z.getIncomingCalls().filter(e => {
      let {
        channel: t
      } = e, n = h.Z.getChannelId() === t.id, r = null == t.guild_id && n, i = u.ZP.getConnectedActivityChannelId() === t.id && h.Z.getVoiceChannelId() !== t.id && u.ZP.getActivityPanelMode() === E.Ez.PANEL;
      return !r || i
    })),
    t = (0, Chunk442837.e7)([Chunk340895.Z], () => Chunk340895.Z.hasIncomingCalls()),
    n = (0, Chunk442837.e7)([Chunk292959.Z], () => Chunk292959.Z.isSoundDisabled("call_ringing")),
    a = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.disableSounds),
    o = (0, Chunk442837.e7)([Chunk474873.Z], () => Chunk474873.Z.getSoundpack()),
    y = Chunk473749.useRef(false),
    v = (0, Chunk35387.Z)(() => {
      let e = "call_ringing";
      return o === Chunk871465.Y.CLASSIC ? (0, Chunk460181.tu)(A(), module) : (0, Chunk460181.uk)("call_ringing", o)
    }, [o]);
  return Chunk473749.useEffect(() => () => {
    v.stop()
  }, [v]), Chunk473749.useEffect(() => {
    if (Chunk392711 || require) {
      y.current && (v.stop(), y.current = false);
      return
    }
    exports && !y.current ? (v.loop(), y.current = true) : !exports && y.current && (v.stop(), y.current = false)
  }, [require, Chunk392711, exports, v]), (0, Chunk481060.Yzy)(module, {
    keys: e => {
      var t;
      return null == (t = e.channel) ? true : t.id
    },
    enter: {
      from: T,
      to: S
    },
    leave: T,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  })((e, t) => (0, r.jsx)(d.Z, I(O({}, t), {
    animatedStyle: e
  })))
}
let N = Chunk473749.memo(C)