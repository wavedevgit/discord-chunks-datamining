/** Chunk was on web.js **/
/** chunk id: 711544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk740078 = require("./740078.js"),
  Chunk510104 = require("./510104.js");

function a(e, t, n) {
  return true === n && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  }
}

function o(e) {
  return [r.we, r.F2, r.I, r.t$].some(function(t) {
    return e[t] >= 0
  })
}
let s = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: function(e) {
    var t = e.state,
      n = e.name,
      r = t.rects.reference,
      s = t.rects.popper,
      l = t.modifiersData.preventOverflow,
      c = (0, i.Z)(t, {
        elementContext: "reference"
      }),
      u = (0, i.Z)(t, {
        altBoundary: true
      }),
      d = a(c, r),
      f = a(u, s, l),
      p = o(d),
      _ = o(f);
    t.modifiersData[n] = {
      referenceClippingOffsets: d,
      popperEscapeOffsets: f,
      isReferenceHidden: p,
      hasPopperEscaped: _
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": _
    })
  }
}