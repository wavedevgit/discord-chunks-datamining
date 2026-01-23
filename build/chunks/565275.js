/** Chunk was on web.js **/
/** chunk id: 565275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk140851 = require("./140851.js"),
  Chunk821085 = require("./821085.js"),
  Chunk559374 = require("./559374.js"),
  Chunk688899 = require("./688899.js"),
  Chunk175924 = require("./175924.js"),
  Chunk559751 = require("./559751.js"),
  Chunk499702 = require("./499702.js"),
  Chunk273101 = require("./273101.js"),
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
    x: (0, u.LI)(n * i) / i || 0,
    y: (0, u.LI)(r * i) / i || 0
  }
}

function p(e) {
  var t, n, l = e.popper,
    c = e.popperRect,
    u = e.placement,
    p = e.variation,
    _ = e.offsets,
    h = e.position,
    m = e.gpuAcceleration,
    g = e.adaptive,
    E = e.roundOffsets,
    y = e.isFixed,
    b = _.x,
    O = true === b ? 0 : b,
    v = _.y,
    A = true === v ? 0 : v,
    I = "function" == typeof E ? E({
      x: O,
      y: A
    }) : {
      x: O,
      y: A
    };
  O = I.x, A = I.y;
  var S = _.hasOwnProperty("x"),
    T = _.hasOwnProperty("y"),
    C = r.kb,
    N = r.Mn,
    R = window;
  if (g) {
    var w = (0, i.A)(l),
      P = "clientHeight",
      D = "clientWidth";
    w === (0, a.A)(l) && (w = (0, s.A)(l), "static" !== (0, o.A)(w).position && "absolute" === h && (P = "scrollHeight", D = "scrollWidth")), (u === r.Mn || (u === r.kb || u === r.pG) && p === r._N) && (N = r.sQ, A -= (y && w === R && R.visualViewport ? R.visualViewport.height : w[P]) - c.height, A *= m ? 1 : false), (u === r.kb || (u === r.Mn || u === r.sQ) && p === r._N) && (C = r.pG, O -= (y && w === R && R.visualViewport ? R.visualViewport.width : w[D]) - c.width, O *= m ? 1 : false)
  }
  var x = Object.assign({
      position: h
    }, g && d),
    L = true === E ? f({
      x: O,
      y: A
    }, (0, a.A)(l)) : {
      x: O,
      y: A
    };
  return (O = L.x, A = L.y, m) ? Object.assign({}, x, ((n = {})[N] = T ? "0" : "", n[C] = S ? "0" : "", n.transform = 1 >= (R.devicePixelRatio || 1) ? "translate(" + O + "px, " + A + "px)" : "translate3d(" + O + "px, " + A + "px, 0)", n)) : Object.assign({}, x, ((t = {})[N] = T ? A + "px" : "", t[C] = S ? O + "px" : "", t.transform = "", t))
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
      a = n.adaptive,
      s = true === a || a,
      o = n.roundOffsets,
      u = true === o || o,
      d = {
        placement: (0, l.A)(t.placement),
        variation: (0, c.A)(t.placement),
        popper: t.elements.popper,
        popperRect: t.rects.popper,
        gpuAcceleration: i,
        isFixed: "fixed" === t.options.strategy
      };
    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, p(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
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