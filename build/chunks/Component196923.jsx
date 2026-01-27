/** Chunk was on web.js **/
/** chunk id: 196923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk330140 = require("./330140.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk933958 = require("./933958.js"),
  Chunk587500 = require("./587500.jsx"),
  Chunk400492 = require("./400492.js"),
  Chunk312671 = require("./312671.js"),
  Chunk803224 = require("./803224.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk503509 = require("./503509.js"),
  Chunk5867 = require("./5867.js"),
  Chunk235079 = require("./235079.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = {
    transform: "scale(0.7)",
    opacity: 0
  },
  S = {
    transform: "scale(1)",
    opacity: 1
  };

function T() {
  return 500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"])
}

function C() {
  let e = (0, l.yK)([g.A, h.A, u.Ay], () => g.A.getIncomingCalls().filter(e => {
      let {
        channel: t
      } = e, n = h.A.getChannelId() === t.id, r = null == t.guild_id && n, i = u.Ay.getConnectedActivityChannelId() === t.id && h.A.getVoiceChannelId() !== t.id && u.Ay.getActivityPanelMode() === E.Gd.PANEL;
      return !r || i
    })),
    t = (0, l.bG)([g.A], () => g.A.hasIncomingCalls()),
    n = (0, l.bG)([_.A], () => _.A.isSoundDisabled("call_ringing")),
    a = (0, l.bG)([m.A], () => m.A.disableSounds),
    o = (0, l.bG)([p.A], () => p.A.getSoundpack()),
    b = i.useRef(false),
    v = (0, s.A)(() => {
      let e = "call_ringing";
      return o === y.i.CLASSIC ? (0, f.Qh)(T(), e) : (0, f.aN)("call_ringing", o)
    }, [o]);
  return i.useEffect(() => () => {
    v.stop()
  }, [v]), i.useEffect(() => {
    if (a || n) {
      b.current && (v.stop(), b.current = false);
      return
    }
    t && !b.current ? (v.loop(), b.current = true) : !t && b.current && (v.stop(), b.current = false)
  }, [n, a, t, v]), (0, c.pnh)(e, {
    keys: e => {
      var t;
      return null == (t = e.channel) ? true : t.id
    },
    enter: {
      from: I,
      to: S
    },
    leave: I,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  })((e, t) => (0, r.jsx)(d.A, A(O({}, t), {
    animatedStyle: e
  })))
}
let N = Chunk64700.memo(C)