/** Chunk was on 63379 **/
/** chunk id: 81461, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  J: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk602877 = require("./602877.jsx"),
  Chunk835265 = require("./835265.jsx"),
  Chunk249998 = require("./249998.jsx"),
  Chunk837570 = require("./837570.jsx"),
  Chunk124056 = require("./124056.jsx"),
  Chunk983685 = require("./983685.jsx"),
  Chunk987431 = require("./987431.jsx"),
  Chunk952796 = require("./952796.jsx"),
  Chunk124113 = require("./124113.jsx"),
  Chunk210748 = require("./210748.jsx"),
  Chunk672116 = require("./672116.jsx"),
  Chunk824855 = require("./824855.jsx"),
  Chunk311940 = require("./311940.jsx"),
  Chunk253712 = require("./253712.jsx"),
  Chunk466041 = require("./466041.jsx"),
  Chunk116779 = require("./116779.jsx"),
  Chunk906425 = require("./906425.jsx"),
  Chunk598559 = require("./598559.jsx"),
  Chunk138939 = require("./138939.jsx"),
  Chunk909094 = require("./909094.jsx"),
  Chunk844004 = require("./844004.jsx"),
  Chunk376254 = require("./376254.jsx"),
  Chunk836218 = require("./836218.jsx"),
  Chunk167160 = require("./167160.jsx"),
  Chunk496108 = require("./496108.jsx"),
  Chunk104971 = require("./104971.jsx"),
  Chunk843606 = require("./843606.jsx"),
  Chunk370960 = require("./370960.jsx"),
  Chunk61835 = require("./61835.jsx"),
  Chunk947043 = require("./947043.jsx"),
  Chunk32719 = require("./32719.jsx"),
  Chunk743981 = require("./743981.js");

function X(A) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {},
      g = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (g = g.concat(Object.getOwnPropertySymbols(e).filter(function(A) {
      return Object.getOwnPropertyDescriptor(e, A).enumerable
    }))), g.forEach(function(t) {
      var g;
      g = e[t], t in A ? Object.defineProperty(A, t, {
        value: g,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[t] = g
    })
  }
  return A
}
let m = A => {
  let {
    badge: t,
    primaryTintColor: e,
    secondaryTintColor: m
  } = A, G = function(A, t) {
    if (null == A) return {};
    var e, g, r, v = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, e = Reflect.ownKeys(A); r < e.length; r++) g = e[r], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
      return v
    }
    if (v = function(A, t) {
        if (null == A) return {};
        var e, g, r = {},
          v = Object.getOwnPropertyNames(A);
        for (g = 0; g < v.length; g++) e = v[g], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (r[e] = A[e]);
        return r
      }(A, t), Object.getOwnPropertySymbols)
      for (r = 0, e = Object.getOwnPropertySymbols(A); r < e.length; r++) g = e[r], !(t.indexOf(g) >= 0) && Object.prototype.propertyIsEnumerable.call(A, g) && (v[g] = A[g]);
    return v
  }(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
  switch (t) {
    case L.bl.SWORD:
      return (0, g.jsx)(j.w, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.WATER_DROP:
      return (0, g.jsx)(u.l, X({
        primaryTintColor: e
      }, G));
    case L.bl.SKULL:
      return (0, g.jsx)(E.I, X({
        primaryTintColor: e
      }, G));
    case L.bl.TOADSTOOL:
      return (0, g.jsx)(O.Y, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.MOON:
      return (0, g.jsx)(b.o, X({
        primaryTintColor: e
      }, G));
    case L.bl.LIGHTNING:
      return (0, g.jsx)(M.v, X({
        primaryTintColor: e
      }, G));
    case L.bl.LEAF:
      return (0, g.jsx)(c.V, X({
        primaryTintColor: e
      }, G));
    case L.bl.HEART:
      return (0, g.jsx)(a.b, X({
        primaryTintColor: e
      }, G));
    case L.bl.FIRE:
      return (0, g.jsx)(w.f, X({
        primaryTintColor: e
      }, G));
    case L.bl.COMPASS:
      return (0, g.jsx)(f.L, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.CROSSHAIRS:
      return (0, g.jsx)(B.W, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.FLOWER:
      return (0, g.jsx)(o.o, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.FORCE:
      return (0, g.jsx)(Q._, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.GEM:
      return (0, g.jsx)(H.q, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.LAVA:
      return (0, g.jsx)(D.j, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.PSYCHIC:
      return (0, g.jsx)(V.c, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.SMOKE:
      return (0, g.jsx)(P.O, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.SNOW:
      return (0, g.jsx)(d.W, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.SOUND:
      return (0, g.jsx)(y.I, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.SUN:
      return (0, g.jsx)(I.Z, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.WIND:
      return (0, g.jsx)(x.D, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.BUNNY:
      return (0, g.jsx)(r.J, X({
        primaryTintColor: e
      }, G));
    case L.bl.DOG:
      return (0, g.jsx)(l.R, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.FROG:
      return (0, g.jsx)(i.D, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.GOAT:
      return (0, g.jsx)(s.A, X({
        primaryTintColor: e
      }, G));
    case L.bl.CAT:
      return (0, g.jsx)(v.r, X({
        primaryTintColor: e
      }, G));
    case L.bl.DIAMOND:
      return (0, g.jsx)(n.$, X({
        primaryTintColor: e
      }, G));
    case L.bl.CROWN:
      return (0, g.jsx)(h.i, X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G));
    case L.bl.TROPHY:
      return (0, g.jsx)(Z.r, X({
        primaryTintColor: e
      }, G));
    case L.bl.MONEY_BAG:
      return (0, g.jsx)(p.x, X({
        primaryTintColor: e
      }, G));
    case L.bl.DOLLAR_SIGN:
      return (0, g.jsx)(C.u, X({
        primaryTintColor: e
      }, G))
  }
  return null
}