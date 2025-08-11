/** Chunk was on 99133 **/
/** chunk id: 510918, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  v: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk397110 = require("./397110.jsx"),
  Chunk79312 = require("./79312.jsx"),
  Chunk25960 = require("./25960.jsx"),
  Chunk706484 = require("./706484.js"),
  Chunk819837 = require("./819837.js"),
  Chunk165440 = require("./165440.jsx"),
  Chunk21822 = require("./21822.jsx"),
  Chunk285916 = require("./285916.jsx"),
  Chunk168646 = require("./168646.jsx"),
  Chunk470831 = require("./470831.jsx"),
  Chunk96824 = require("./96824.jsx"),
  Chunk187485 = require("./187485.jsx"),
  Chunk713897 = require("./713897.js"),
  Chunk886512 = require("./886512.js"),
  Chunk560701 = require("./560701.js"),
  Chunk678563 = require("./678563.js"),
  Chunk573508 = require("./573508.js"),
  Chunk164175 = require("./164175.jsx"),
  Chunk441787 = require("./441787.jsx"),
  Chunk292184 = require("./292184.jsx"),
  Chunk117243 = require("./117243.jsx"),
  Chunk997109 = require("./997109.js"),
  Chunk606650 = require("./606650.js"),
  Chunk117257 = require("./117257.jsx"),
  Chunk214067 = require("./214067.jsx"),
  Chunk803193 = require("./803193.js"),
  Chunk900689 = require("./900689.js"),
  Chunk498103 = require("./498103.jsx"),
  Chunk586131 = require("./586131.js"),
  Chunk931512 = require("./931512.js"),
  Chunk350136 = require("./350136.jsx"),
  Chunk131085 = require("./131085.js");

function X(A) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(A) {
      return Object.getOwnPropertyDescriptor(e, A).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = e[t], t in A ? Object.defineProperty(A, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[t] = r
    })
  }
  return A
}
let m = A => {
  var {
    badge: t,
    primaryTintColor: e,
    secondaryTintColor: m
  } = A, G = function(A, t) {
    if (null == A) return {};
    var e, r, g = function(A, t) {
      if (null == A) return {};
      var e, r, g = {},
        v = Object.keys(A);
      for (r = 0; r < v.length; r++) e = v[r], t.indexOf(e) >= 0 || (g[e] = A[e]);
      return g
    }(A, t);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(A);
      for (r = 0; r < v.length; r++) e = v[r], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e])
    }
    return g
  }(A, ["badge", "primaryTintColor", "secondaryTintColor"]);
  switch (t) {
    case L.x_.SWORD:
      return <j.V{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.WATER_DROP:
      return <y.q{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.SKULL:
      return <V.D{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.TOADSTOOL:
      return <Z.T{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.MOON:
      return <p.${...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.LIGHTNING:
      return <M.F{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.LEAF:
      return <D.i{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.HEART:
      return <H.h{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.FIRE:
      return <o.G{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.COMPASS:
      return <n.Q{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.CROSSHAIRS:
      return <f.Q{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.FLOWER:
      return <C.N{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.FORCE:
      return <a.S{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.GEM:
      return <s.S{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.LAVA:
      return <c.h{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.PSYCHIC:
      return <b.L{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.SMOKE:
      return <E.w{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.SNOW:
      return <P.X{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.SOUND:
      return <u.H{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.SUN:
      return <I.k{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.WIND:
      return <x.A{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.BUNNY:
      return <g.K{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.DOG:
      return <l.h{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.FROG:
      return <w.L{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.GOAT:
      return <Q.V{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.CAT:
      return <v.W{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.DIAMOND:
      return <h.T{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.CROWN:
      return <B.O{...X({
        primaryTintColor: e,
        secondaryTintColor: m
      }, G)} />;
    case L.x_.TROPHY:
      return <O.o{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.MONEY_BAG:
      return <d.k{...X({
        primaryTintColor: e
      }, G)} />;
    case L.x_.DOLLAR_SIGN:
      return <i.W{...X({
        primaryTintColor: e
      }, G)} />
  }
  return null
}