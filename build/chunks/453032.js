/** Chunk was on web.js **/
/** chunk id: 453032, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  aN: () => c,
  qD: () => s
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk492435 = require("./492435.js"),
  Chunk353926 = require("./353926.js"),
  Chunk633289 = require("./633289.js");

function s(e, t) {
  return (0, r.e7)([o.Z, a.Z], () => {
    var n, r;
    return e.system === i.I.LEGACY ? null == (n = o.Z.getUserExperimentDescriptor(e.name)) ? true : n.bucket : null == (r = a.Z.getAssignment(e.kind, t, e.name)) ? true : r.variantId
  })
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [o.Z, a.Z],
    [r, s] = n;
  return null == e ? null : e.system === i.I.LEGACY ? r.getLoadedUserExperiment(e.name) : s.getServerAssignment(e.kind, t, e.name)
}

function c(e, t) {
  return (0, r.e7)([o.Z, a.Z], () => l(e, t, [o.Z, a.Z]))
}