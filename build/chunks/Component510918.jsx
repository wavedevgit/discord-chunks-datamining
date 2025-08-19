/** Chunk was on 12630 **/
/** chunk id: 510918, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  v: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk397110 = require("./397110.jsx"),
  Chunk79312 = require("./79312.jsx"),
  Chunk25960 = require("./25960.jsx"),
  Chunk706484 = require("./706484.jsx"),
  Chunk819837 = require("./819837.jsx"),
  Chunk165440 = require("./165440.jsx"),
  Chunk21822 = require("./21822.jsx"),
  Chunk285916 = require("./285916.jsx"),
  Chunk168646 = require("./168646.jsx"),
  Chunk470831 = require("./470831.jsx"),
  Chunk96824 = require("./96824.jsx"),
  Chunk187485 = require("./187485.jsx"),
  Chunk713897 = require("./713897.jsx"),
  Chunk886512 = require("./886512.jsx"),
  Chunk560701 = require("./560701.jsx"),
  Chunk678563 = require("./678563.jsx"),
  Chunk573508 = require("./573508.jsx"),
  Chunk164175 = require("./164175.jsx"),
  Chunk441787 = require("./441787.jsx"),
  Chunk292184 = require("./292184.jsx"),
  Chunk117243 = require("./117243.jsx"),
  Chunk997109 = require("./997109.jsx"),
  Chunk606650 = require("./606650.jsx"),
  Chunk117257 = require("./117257.jsx"),
  Chunk214067 = require("./214067.jsx"),
  Chunk803193 = require("./803193.jsx"),
  Chunk900689 = require("./900689.jsx"),
  Chunk498103 = require("./498103.jsx"),
  Chunk586131 = require("./586131.jsx"),
  Chunk931512 = require("./931512.jsx"),
  Chunk350136 = require("./350136.jsx"),
  Chunk131085 = require("./131085.js");

function x(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}
let N = A => {
  var {
    badge: e,
    primaryTintColor: t,
    secondaryTintColor: N
  } = A, Z = function(A, e) {
    if (null == A) return {};
    var t, n, r = function(A, e) {
      if (null == A) return {};
      var t, n, r = {},
        l = Object.keys(A);
      for (n = 0; n < l.length; n++) t = l[n], e.indexOf(t) >= 0 || (r[t] = A[t]);
      return r
    }(A, e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(A);
      for (n = 0; n < l.length; n++) t = l[n], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t])
    }
    return r
  }(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
  switch (e) {
    case L.x_.SWORD:
      return (0, n.jsx)(j.V, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.WATER_DROP:
      return (0, n.jsx)(T.q, x({
        primaryTintColor: t
      }, Z));
    case L.x_.SKULL:
      return (0, n.jsx)(H.D, x({
        primaryTintColor: t
      }, Z));
    case L.x_.TOADSTOOL:
      return (0, n.jsx)(V.T, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.MOON:
      return (0, n.jsx)(p.$, x({
        primaryTintColor: t
      }, Z));
    case L.x_.LIGHTNING:
      return (0, n.jsx)(D.F, x({
        primaryTintColor: t
      }, Z));
    case L.x_.LEAF:
      return (0, n.jsx)(w.i, x({
        primaryTintColor: t
      }, Z));
    case L.x_.HEART:
      return (0, n.jsx)(C.h, x({
        primaryTintColor: t
      }, Z));
    case L.x_.FIRE:
      return (0, n.jsx)(f.G, x({
        primaryTintColor: t
      }, Z));
    case L.x_.COMPASS:
      return (0, n.jsx)(i.Q, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.CROSSHAIRS:
      return (0, n.jsx)(a.Q, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.FLOWER:
      return (0, n.jsx)(v.N, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.FORCE:
      return (0, n.jsx)(u.S, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.GEM:
      return (0, n.jsx)(d.S, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.LAVA:
      return (0, n.jsx)(B.h, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.PSYCHIC:
      return (0, n.jsx)(I.L, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.SMOKE:
      return (0, n.jsx)(b.w, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.SNOW:
      return (0, n.jsx)(O.X, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.SOUND:
      return (0, n.jsx)(Q.H, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.SUN:
      return (0, n.jsx)(P.k, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.WIND:
      return (0, n.jsx)(y.A, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.BUNNY:
      return (0, n.jsx)(r.K, x({
        primaryTintColor: t
      }, Z));
    case L.x_.DOG:
      return (0, n.jsx)(g.h, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.FROG:
      return (0, n.jsx)(h.L, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.GOAT:
      return (0, n.jsx)(E.V, x({
        primaryTintColor: t
      }, Z));
    case L.x_.CAT:
      return (0, n.jsx)(l.W, x({
        primaryTintColor: t
      }, Z));
    case L.x_.DIAMOND:
      return (0, n.jsx)(o.T, x({
        primaryTintColor: t
      }, Z));
    case L.x_.CROWN:
      return (0, n.jsx)(s.O, x({
        primaryTintColor: t,
        secondaryTintColor: N
      }, Z));
    case L.x_.TROPHY:
      return (0, n.jsx)(m.o, x({
        primaryTintColor: t
      }, Z));
    case L.x_.MONEY_BAG:
      return (0, n.jsx)(M.k, x({
        primaryTintColor: t
      }, Z));
    case L.x_.DOLLAR_SIGN:
      return (0, n.jsx)(c.W, x({
        primaryTintColor: t
      }, Z))
  }
  return null
}