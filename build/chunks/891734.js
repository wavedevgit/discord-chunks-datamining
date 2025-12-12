/** Chunk was on web.js **/
/** chunk id: 891734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk632471 = require("./632471.js"),
  Chunk740078 = require("./740078.js"),
  Chunk510104 = require("./510104.js"),
  Chunk126387 = require("./126387.js");

function s(e, t) {
  true === t && (t = {});
  var n = t,
    s = n.placement,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.padding,
    d = n.flipVariations,
    f = n.allowedAutoPlacements,
    p = true === f ? i.Ct : f,
    _ = (0, r.Z)(s),
    m = _ ? d ? i.bw : i.bw.filter(function(e) {
      return (0, r.Z)(e) === _
    }) : i.mv,
    h = m.filter(function(e) {
      return p.indexOf(e) >= 0
    });
  0 === h.length && (h = m);
  var g = h.reduce(function(t, n) {
    return t[n] = (0, a.Z)(e, {
      placement: n,
      boundary: l,
      rootBoundary: c,
      padding: u
    })[(0, o.Z)(n)], t
  }, {});
  return Object.keys(g).sort(function(e, t) {
    return g[e] - g[t]
  })
}