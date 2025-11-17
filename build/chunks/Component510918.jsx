/** Chunk was on 76692 **/
/** chunk id: 510918, original params: A,t,g (module,exports,require) **/
require.d(exports, {
  v: () => G
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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

function X(A) {
  for (var t = 1; t < arguments.length; t++) {
    var g = null != arguments[t] ? arguments[t] : {},
      v = Object.keys(g);
    "function" == typeof Object.getOwnPropertySymbols && (v = v.concat(Object.getOwnPropertySymbols(g).filter(function(A) {
      return Object.getOwnPropertyDescriptor(g, A).enumerable
    }))), v.forEach(function(t) {
      var v;
      v = g[t], t in A ? Object.defineProperty(A, t, {
        value: v,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[t] = v
    })
  }
  return A
}
let G = A => {
  var {
    badge: t,
    primaryTintColor: g,
    secondaryTintColor: G
  } = A, F = function(A, t) {
    if (null == A) return {};
    var g, v, e = function(A, t) {
      if (null == A) return {};
      var g, v, e = {},
        r = Object.keys(A);
      for (v = 0; v < r.length; v++) g = r[v], t.indexOf(g) >= 0 || (e[g] = A[g]);
      return e
    }(A, t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      for (v = 0; v < r.length; v++) g = r[v], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (e[g] = A[g])
    }
    return e
  }(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
  switch (t) {
    case L.x_.SWORD:
      return (0, v.jsx)(Z.V, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.WATER_DROP:
      return (0, v.jsx)(u.q, X({
        primaryTintColor: g
      }, F));
    case L.x_.SKULL:
      return (0, v.jsx)(b.D, X({
        primaryTintColor: g
      }, F));
    case L.x_.TOADSTOOL:
      return (0, v.jsx)(y.T, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.MOON:
      return (0, v.jsx)(p.$, X({
        primaryTintColor: g
      }, F));
    case L.x_.LIGHTNING:
      return (0, v.jsx)(c.F, X({
        primaryTintColor: g
      }, F));
    case L.x_.LEAF:
      return (0, v.jsx)(M.i, X({
        primaryTintColor: g
      }, F));
    case L.x_.HEART:
      return (0, v.jsx)(a.h, X({
        primaryTintColor: g
      }, F));
    case L.x_.FIRE:
      return (0, v.jsx)(l.G, X({
        primaryTintColor: g
      }, F));
    case L.x_.COMPASS:
      return (0, v.jsx)(f.Q, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.CROSSHAIRS:
      return (0, v.jsx)(B.Q, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.FLOWER:
      return (0, v.jsx)(Q.N, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.FORCE:
      return (0, v.jsx)(i.S, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.GEM:
      return (0, v.jsx)(o.S, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.LAVA:
      return (0, v.jsx)(D.h, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.PSYCHIC:
      return (0, v.jsx)(E.L, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.SMOKE:
      return (0, v.jsx)(P.w, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.SNOW:
      return (0, v.jsx)(d.X, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.SOUND:
      return (0, v.jsx)(I.H, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.SUN:
      return (0, v.jsx)(j.k, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.WIND:
      return (0, v.jsx)(x.A, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.BUNNY:
      return (0, v.jsx)(e.K, X({
        primaryTintColor: g
      }, F));
    case L.x_.DOG:
      return (0, v.jsx)(C.h, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.FROG:
      return (0, v.jsx)(H.L, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.GOAT:
      return (0, v.jsx)(s.V, X({
        primaryTintColor: g
      }, F));
    case L.x_.CAT:
      return (0, v.jsx)(r.W, X({
        primaryTintColor: g
      }, F));
    case L.x_.DIAMOND:
      return (0, v.jsx)(n.T, X({
        primaryTintColor: g
      }, F));
    case L.x_.CROWN:
      return (0, v.jsx)(h.O, X({
        primaryTintColor: g,
        secondaryTintColor: G
      }, F));
    case L.x_.TROPHY:
      return (0, v.jsx)(O.o, X({
        primaryTintColor: g
      }, F));
    case L.x_.MONEY_BAG:
      return (0, v.jsx)(V.k, X({
        primaryTintColor: g
      }, F));
    case L.x_.DOLLAR_SIGN:
      return (0, v.jsx)(w.W, X({
        primaryTintColor: g
      }, F))
  }
  return null
}