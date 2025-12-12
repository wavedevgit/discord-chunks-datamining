/** Chunk was on web.js **/
/** chunk id: 630421, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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

function p(e) {
  var t, n, l = e.popper,
    c = e.popperRect,
    u = e.placement,
    p = e.variation,
    _ = e.offsets,
    m = e.position,
    h = e.gpuAcceleration,
    g = e.adaptive,
    E = e.roundOffsets,
    b = e.isFixed,
    y = _.x,
    O = true === y ? 0 : y,
    v = _.y,
    S = true === v ? 0 : v,
    I = "function" == typeof E ? E({
      x: O,
      y: S
    }) : {
      x: O,
      y: S
    };
  O = I.x, S = I.y;
  var T = _.hasOwnProperty("x"),
    C = _.hasOwnProperty("y"),
    A = r.t$,
    N = r.we,
    P = window;
  if (g) {
    var R = (0, i.Z)(l),
      w = "clientHeight",
      D = "clientWidth";
    R === (0, o.Z)(l) && (R = (0, a.Z)(l), "static" !== (0, s.Z)(R).position && "absolute" === m && (w = "scrollHeight", D = "scrollWidth")), (u === r.we || (u === r.t$ || u === r.F2) && p === r.ut) && (N = r.I, S -= (b && R === P && P.visualViewport ? P.visualViewport.height : R[w]) - c.height, S *= h ? 1 : false), (u === r.t$ || (u === r.we || u === r.I) && p === r.ut) && (A = r.F2, O -= (b && R === P && P.visualViewport ? P.visualViewport.width : R[D]) - c.width, O *= h ? 1 : false)
  }
  var x = Object.assign({
      position: m
    }, g && d),
    L = true === E ? f({
      x: O,
      y: S
    }, (0, o.Z)(l)) : {
      x: O,
      y: S
    };
  return (O = L.x, S = L.y, h) ? Object.assign({}, x, ((n = {})[N] = C ? "0" : "", n[A] = T ? "0" : "", n.transform = 1 >= (P.devicePixelRatio || 1) ? "translate(" + O + "px, " + S + "px)" : "translate3d(" + O + "px, " + S + "px, 0)", n)) : Object.assign({}, x, ((t = {})[N] = C ? S + "px" : "", t[A] = T ? O + "px" : "", t.transform = "", t))
}
let _ = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: function(e) {
    var t = e.state,
      n = e.options,
      r = n.gpuAcceleration,
      i = true === r || r,
      o = n.adaptive,
      a = true === o || o,
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
    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, p(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: a,
      roundOffsets: u
    })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, p(Object.assign({}, d, {
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