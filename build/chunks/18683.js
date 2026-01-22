/** Chunk was on web.js **/
/** chunk id: 18683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js"), require("./457529.js"), require("./446912.js");
var Chunk306173 = require("./306173.js"),
  Chunk52133 = require("./52133.js"),
  Chunk439372 = require("./439372.js"),
  Chunk945810 = require("./945810.js"),
  Chunk217222 = require("./217222.js"),
  Chunk548965 = require("./548965.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = null;

function d() {
  if (!(0, r.xd)()) return;
  let e = {};
  for (let t of l.ML) e[t.id] = t.getCurrentConfig();
  null != u && (0, i.A)(u, e) || ((0, r.Ih)().flushToCache(JSON.stringify(e)), u = e)
}

function f(e) {
  return (0, s.mj)({
    kind: "user",
    name: e.id,
    defaultConfig: {
      treatmentId: false
    },
    variations: Object.fromEntries(e.getTreatments().map(e => {
      let {
        treatmentId: t
      } = e;
      return [t, {
        treatmentId: t
      }]
    }))
  })
}

function p() {
  l.ML.forEach(e => {
    e.setExperiment(f(e))
  })
}
class _ extends Chunk439372.A {
  _initialize() {
    p()
  }
  _terminate() {}
  constructor(...e) {
    super(...e), c(this, "actions", {}), c(this, "stores", new Map().set(o.A, d))
  }
}
let h = new _