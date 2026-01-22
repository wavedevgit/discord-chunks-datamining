/** Chunk was on web.js **/
/** chunk id: 196923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = {
    transform: "scale(0.7)",
    opacity: 0
  },
  I = {
    transform: "scale(1)",
    opacity: 1
  };

function T() {
  return 500 !== s().random(1, 1e3) ? "call_ringing" : s().sample(["call_ringing_beat", "call_ringing_snow_halation"])
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
    s = (0, l.bG)([p.A], () => p.A.getSoundpack()),
    y = i.useRef(false),
    A = (0, o.A)(() => {
      let e = "call_ringing";
      return s === b.i.CLASSIC ? (0, f.Qh)(T(), e) : (0, f.aN)("call_ringing", s)
    }, [s]);
  return i.useEffect(() => () => {
    A.stop()
  }, [A]), i.useEffect(() => {
    if (a || n) {
      y.current && (A.stop(), y.current = false);
      return
    }
    t && !y.current ? (A.loop(), y.current = true) : !t && y.current && (A.stop(), y.current = false)
  }, [n, a, t, A]), (0, c.pnh)(e, {
    keys: e => {
      var t;
      return null == (t = e.channel) ? true : t.id
    },
    enter: {
      from: S,
      to: I
    },
    leave: S,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: true
    }
  })((e, t) => (0, r.jsx)(d.A, v(O({}, t), {
    animatedStyle: e
  })))
}
let N = Chunk64700.memo(C)