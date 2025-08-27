/** Chunk was on web.js **/
/** chunk id: 453032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => l,
  q: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk633289 = require("./633289.js");

function s(e, t) {
  return (0, r.e7)([a.Z, o.Z], () => {
    var n, r;
    return e.system === i.I.LEGACY ? null == (n = a.Z.getUserExperimentDescriptor(e.name)) ? true : n.bucket : null == (r = o.Z.getAssignment(e.kind, t, e.name)) ? true : r.variantId
  })
}

function l(e, t) {
  return (0, r.e7)([a.Z, o.Z], () => null == e ? null : e.system === i.I.LEGACY ? a.Z.getLoadedUserExperiment(e.name) : o.Z.getServerAssignment(e.kind, t, e.name))
}