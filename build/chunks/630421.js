/** Chunk was on web.js **/
/** chunk id: 630421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk740078 = require("./740078.js"),
  Chunk343713 = require("./343713.js"),
  Chunk49691 = require("./49691.js"),
  Chunk285363 = require("./285363.js"),
  Chunk874900 = require("./874900.js"),
  Chunk126387 = require("./126387.js"),
  Chunk632471 = require("./632471.js"),
  Chunk894417 = require("./894417.js"),
  d = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

function f(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return {
    x: (0, u.NM)(n * i) / i || 0,
    y: (0, u.NM)(r * i) / i || 0
  }
}

function _(e) {
  var t, n, l = e.popper,
    c = e.popperRect,
    u = e.placement,
    _ = e.variation,
    p = e.offsets,
    h = e.position,
    m = e.gpuAcceleration,
    g = e.adaptive,
    E = e.roundOffsets,
    b = e.isFixed,
    y = p.x,
    O = true === y ? 0 : y,
    v = p.y,
    I = true === v ? 0 : v,
    S = "function" == typeof E ? E({
      x: O,
      y: I
    }) : {
      x: O,
      y: I
    };
  O = S.x, I = S.y;
  var T = p.hasOwnProperty("x"),
    A = p.hasOwnProperty("y"),
    C = r.t$,
    N = r.we,
    R = window;
  if (g) {
    var P = (0, i.Z)(l),
      w = "clientHeight",
      D = "clientWidth";
    P === (0, a.Z)(l) && (P = (0, o.Z)(l), "static" !== (0, s.Z)(P).position && "absolute" === h && (w = "scrollHeight", D = "scrollWidth")), (u === r.we || (u === r.t$ || u === r.F2) && _ === r.ut) && (N = r.I, I -= (b && P === R && R.visualViewport ? R.visualViewport.height : P[w]) - c.height, I *= m ? 1 : false), (u === r.t$ || (u === r.we || u === r.I) && _ === r.ut) && (C = r.F2, O -= (b && P === R && R.visualViewport ? R.visualViewport.width : P[D]) - c.width, O *= m ? 1 : false)
  }
  var L = Object.assign({
      position: h
    }, g && d),
    x = true === E ? f({
      x: O,
      y: I
    }, (0, a.Z)(l)) : {
      x: O,
      y: I
    };
  return (O = x.x, I = x.y, m) ? Object.assign({}, L, ((n = {})[N] = A ? "0" : "", n[C] = T ? "0" : "", n.transform = 1 >= (R.devicePixelRatio || 1) ? "translate(" + O + "px, " + I + "px)" : "translate3d(" + O + "px, " + I + "px, 0)", n)) : Object.assign({}, L, ((t = {})[N] = A ? I + "px" : "", t[C] = T ? O + "px" : "", t.transform = "", t))
}
let p = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = true === r || r,
      a = n.adaptive,
      o = true === a || a,
      s = n.roundOffsets,
      u = true === s || s,
      d = {
        placement: (0, l.Z)(t.placement),
        variation: (0, c.Z)(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: "fixed" === t.options.strategy
      };
    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, _(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: o,
      roundOffsets: u
    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, _(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: u
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    })
  },
  data: {}
}