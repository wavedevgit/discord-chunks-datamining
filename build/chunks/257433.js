/** Chunk was on web.js **/
/** chunk id: 257433, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fm: () => c,
  iN: () => s
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk102609 = require("./102609.js"),
  Chunk49463 = require("./49463.js"),
  Chunk217222 = require("./217222.js");

function s(e, t) {
  return (0, r.bG)([a.A, o.A], () => {
    var n, r;
    return e.system === i.l5.LEGACY ? null == (n = a.A.getUserExperimentDescriptor(e.name)) ? true : n.bucket : null == (r = o.A.getAssignment(e.kind, t, e.name)) ? true : r.variantId
  })
}

function l(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [a.A, o.A],
    [r, s] = n;
  return null == e ? null : e.system === i.l5.LEGACY ? r.getLoadedUserExperiment(e.name) : s.getServerAssignment(e.kind, t, e.name)
}

function c(e, t) {
  return (0, r.bG)([a.A, o.A], () => l(e, t, [a.A, o.A]))
}