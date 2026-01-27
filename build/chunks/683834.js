/** Chunk was on web.js **/
/** chunk id: 683834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk499702 = require("./499702.js"),
  Chunk140851 = require("./140851.js"),
  Chunk528346 = require("./528346.js"),
  Chunk559751 = require("./559751.js");

function s(e, t) {
  true === t && (t = {});
  var n = t,
    s = n.placement,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.padding,
    d = n.flipVariations,
    f = n.allowedAutoPlacements,
    p = true === f ? i.DD : f,
    _ = (0, r.A)(s),
    h = _ ? d ? i.Ol : i.Ol.filter(function(e) {
      return (0, r.A)(e) === _
    }) : i.OM,
    m = h.filter(function(e) {
      return p.indexOf(e) >= 0
    });
  0 === m.length && (m = h);
  var g = m.reduce(function(t, n) {
    return t[n] = (0, a.A)(e, {
      placement: n,
      boundary: l,
      rootBoundary: c,
      padding: u
    })[(0, o.A)(n)], t
  }, {});
  return Object.keys(g).sort(function(e, t) {
    return g[e] - g[t]
  })
}