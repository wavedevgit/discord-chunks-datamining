/** Chunk was on web.js **/
/** chunk id: 100392, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GI: () => d,
  Kb: () => c,
  OL: () => l,
  W0: () => s,
  hp: () => f,
  yA: () => u
}), require("./591487.js"), require("./727858.js"), require("./747238.js");
var Chunk220478 = require("./220478.js"),
  Chunk102609 = require("./102609.js"),
  Chunk769054 = require("./769054.js");
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
  return null == t || null == e ? null : e.system === i.l5.LEGACY ? r.A.getExperimentBucketName(t.bucket) : e.system === i.l5.APEX ? "Variant ".concat(t.variantId) : null
}

function f(e) {
  return (0, a.h)(e).map(e => ({
    id: e.id,
    label: e.label,
    value: e.id
  }))
}