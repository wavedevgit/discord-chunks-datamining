/** Chunk was on web.js **/
/** chunk id: 922699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $2: () => s,
  XV: () => c,
  ak: () => f,
  q3: () => l,
  rB: () => d,
  sZ: () => u
}), require("./413496.js"), require("./433524.js"), require("./35282.js");
var Chunk499533 = require("./499533.js"),
  Chunk492435 = require("./492435.js"),
  Chunk438159 = require("./438159.js");
let o = RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");

function s(e) {
  return o.test(e)
}

function l(e) {
  let t = e.match(o);
  return null == t || t.length < 2 ? null : t[1]
}

function c(e) {
  let t = e.match(o);
  return null == t || t.length < 3 ? null : parseInt(t[2], 10)
}

function u(e, t) {
  return null != t ? "dev://experiment/".concat(e, "/").concat(t) : "dev://experiment/".concat(e)
}

function d(e, t) {
  return null == t || null == e ? null : e.system === i.I.LEGACY ? r.Z.getExperimentBucketName(t.bucket) : e.system === i.I.APEX ? "Variant ".concat(t.variantId) : null
}

function f(e) {
  return (0, a.v)(e).map(e => ({
    id: e.id,
    label: e.label,
    value: e.id
  }))
}