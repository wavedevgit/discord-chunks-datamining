/** Chunk was on web.js **/
/** chunk id: 113036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk393903 = require("./393903.js"),
  Chunk358221 = require("./358221.js"),
  Chunk933557 = require("./933557.js"),
  Chunk711617 = require("./711617.js"),
  Chunk937995 = require("./937995.jsx"),
  Chunk618158 = require("./618158.jsx"),
  Chunk922745 = require("./922745.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk23303 = require("./23303.js"),
  Chunk393416 = require("./393416.jsx"),
  Chunk263731 = require("./263731.js"),
  Chunk121636 = require("./121636.js"),
  Chunk533348 = require("./533348.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => {
  let {
    channel: t,
    width: n
  } = e, a = (0, s.e7)([c.Z], () => c.Z.getFilteredParticipants(t.id)), v = (0, g.Z)(t.id), I = i.useMemo(() => (0, u.F6)(t, h.default, m.Z), [t]), C = (0, d.Z)(t), A = n * (E.U.height / E.U.width), N = 1156, P = 1050, [R, w] = i.useState(.65), [D, x] = i.useState({
    x: 0,
    y: 0
  }), L = (0, l.y)(e => {
    let {
      contentRect: t
    } = e, n = Math.max(t.width / E.U.width * 1.5, t.height / E.U.height * 1.5), r = t.width / 2 - N * n, i = t.height / 2 - P * n;
    w(n), x({
      x: r,
      y: i
    })
  });
  return (0, r.jsx)(f.ZP, {
    timeout: 2e3,
    children: e => (0, r.jsx)(_.Z, T(S({
      title: I,
      backgroundKey: t.id,
      screenMessage: null,
      onJumpToChannel: C,
      preventIdleComponent: p.Z,
      width: n,
      className: O.elevationHigh
    }, e), {
      children: (0, r.jsx)("div", {
        ref: L,
        className: y.havenPipWrapper,
        style: {
          width: n,
          height: A
        },
        children: (0, r.jsx)("div", {
          className: o()(b.haven, b.noTransition),
          style: {
            transform: "translate(".concat(D.x, "px, ").concat(D.y, "px) scale(").concat(R, ")")
          },
          children: (0, r.jsx)(E.Z, {
            roomSeats: v.seats,
            roomParticipants: v.participants,
            participants: a,
            channel: t,
            idle: e.idle,
            showAmbientEffects: false,
            enableAnimations: false,
            skipNewUserEducation: true,
            disableInteractions: true
          })
        })
      })
    }))
  })
}