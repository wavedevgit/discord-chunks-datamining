/** Chunk was on web.js **/
/** chunk id: 26113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk770178 = require("./770178.js"),
  Chunk313961 = require("./313961.js"),
  Chunk47167 = require("./47167.js"),
  Chunk28390 = require("./28390.js"),
  Chunk461782 = require("./461782.jsx"),
  Chunk447404 = require("./447404.jsx"),
  Chunk271195 = require("./271195.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk732777 = require("./732777.js"),
  Chunk709382 = require("./709382.jsx"),
  Chunk185014 = require("./185014.js"),
  Chunk204137 = require("./204137.js"),
  Chunk976092 = require("./976092.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = e => {
  let {
    channel: t,
    width: n
  } = e, a = (0, o.bG)([c.A], () => c.A.getFilteredParticipants(t.id)), v = (0, g.A)(t.id), I = i.useMemo(() => (0, u.m1)(t, m.default, h.A), [t]), T = (0, d.A)(t), C = n * (E.i.height / E.i.width), N = 1156, R = 1050, [w, P] = i.useState(.65), [D, x] = i.useState({
    x: 0,
    y: 0
  }), L = (0, l.w)(e => {
    let {
      contentRect: t
    } = e, n = Math.max(t.width / E.i.width * 1.5, t.height / E.i.height * 1.5), r = t.width / 2 - N * n, i = t.height / 2 - R * n;
    P(n), x({
      x: r,
      y: i
    })
  });
  return (0, r.jsx)(f.Ay, {
    timeout: 2e3,
    children: e => (0, r.jsx)(_.A, S(A({
      title: I,
      backgroundKey: t.id,
      screenMessage: null,
      onJumpToChannel: T,
      preventIdleComponent: p.A,
      width: n,
      className: O.a8
    }, e), {
      children: (0, r.jsx)("div", {
        ref: L,
        className: b.n,
        style: {
          width: n,
          height: C
        },
        children: (0, r.jsx)("div", {
          className: s()(y.VT, y.rh),
          style: {
            transform: "translate(".concat(D.x, "px, ").concat(D.y, "px) scale(").concat(w, ")")
          },
          children: (0, r.jsx)(E.A, {
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