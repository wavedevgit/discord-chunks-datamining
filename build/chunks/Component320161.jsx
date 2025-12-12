/** Chunk was on web.js **/
/** chunk id: 320161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = Chunk70956.Z.Millis.SECOND,
  y = 2 * b,
  O = Chunk70956.Z.Millis.HALF_SECOND,
  v = [() => Chunk388032.intl.string(Chunk388032.t.MSaeTe), () => Chunk388032.intl.string(Chunk388032.t.UmrCw7), () => Chunk388032.intl.string(Chunk388032.t.gKE0Jq), () => Chunk388032.intl.string(Chunk388032.t["4DSKbi"]), () => Chunk388032.intl.string(Chunk388032.t["+8ENdT"]), () => Chunk388032.intl.string(Chunk388032.t.GlWHv8), () => Chunk388032.intl.string(Chunk388032.t.hIzxU9), () => Chunk388032.intl.string(Chunk388032.t["26uMPL"]), () => Chunk388032.intl.string(Chunk388032.t.uFs7R2), () => Chunk388032.intl.string(Chunk388032.t.bLXdcY), () => Chunk388032.intl.string(Chunk388032.t.gPg9fS)];

function S(e) {
  let {
    text: t,
    copyValue: n,
    children: u,
    onCopy: f,
    "aria-label": p,
    delay: m = O,
    dataMeticulousIgnore: E
  } = e, [S, I] = i.useState(0), [T, C] = i.useState(false), [A, N] = i.useState(false), [P] = i.useState(() => new o.V7), [R] = i.useState(() => new o.V7);
  if (i.useEffect(() => () => {
      P.stop(), R.stop()
    }, [P, R]), !c.wS) return (0, r.jsx)(r.Fragment, {
    children: u({})
  });
  let w = S >= v.length - 1,
    D = w ? s.r6K.RED : s.r6K.GREEN,
    x = T ? D : s.r6K.PRIMARY,
    L = () => {
      var e;
      if (!T) return t;
      let n = (0, a.clamp)(S - 1, 0, v.length - 1),
        i = null != (e = v[n]) ? e : v[0];
      return (0, r.jsx)(s.UkV, {
        isShaking: w,
        children: i()
      })
    },
    j = (e, t) => {
      !A && T && t.phase === d.UkZ.LEAVE && C(false)
    },
    M = () => {
      null == f || f(), (0, c.JG)(n), l.default.track(d.rMx.TEXT_COPIED), A || I(S + 1), N(true), C(true), P.start(b, () => N(false)), R.start(y, () => I(0))
    };
  return (0, r.jsx)(s.aML, {
    text: L(),
    delay: m,
    "aria-label": p,
    dataMeticulousIgnore: E,
    color: x,
    forceOpen: A,
    onAnimationRest: j,
    children: e => {
      var {
        onClick: t,
        onMouseEnter: n
      } = e;
      return u(h(_({}, g(e, ["onClick", "onMouseEnter"])), {
        onClick: () => {
          null == t || t(), M()
        },
        onMouseEnter: () => {
          if (!T) {
            null == n || n();
            return
          }
          P.stop(), N(false)
        }
      }))
    }
  })
}