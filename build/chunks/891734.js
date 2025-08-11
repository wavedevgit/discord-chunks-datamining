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
    _ = true === f ? i.Ct : f,
    p = (0, r.Z)(s),
    h = p ? d ? i.bw : i.bw.filter(function(e) {
      return (0, r.Z)(e) === p
    }) : i.mv,
    m = h.filter(function(e) {
      return _.indexOf(e) >= 0
    });
  0 === m.length && (m = h);
  var g = m.reduce(function(t, n) {
    return t[n] = (0, o.Z)(e, {
      placement: n,
      boundary: l,
      rootBoundary: c,
      padding: u
    })[(0, a.Z)(n)], t
  }, {});
  return Object.keys(g).sort(function(e, t) {
    return g[e] - g[t]
  })
}