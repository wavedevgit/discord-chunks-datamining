/** Chunk was on web.js **/
/** chunk id: 497909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./49124.js"), require("./467055.js");
var Chunk668757 = require("./668757.js"),
  Chunk902704 = require("./902704.js"),
  Chunk147913 = require("./147913.js"),
  Chunk427164 = require("./427164.js"),
  Chunk633289 = require("./633289.js"),
  Chunk894276 = require("./894276.js");

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
  if (!(0, r.un)()) return;
  let e = {};
  for (let t of l.Re) e[t.id] = t.getCurrentConfig();
  null != u && (0, i.Z)(u, e) || ((0, r.Md)().flushToCache(JSON.stringify(e)), u = e)
}

function f(e) {
  return (0, o.le)({
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
  l.Re.forEach(e => {
    e.setExperiment(f(e))
  })
}
class _ extends Chunk147913.Z {
  _initialize() {
    p()
  }
  _terminate() {}
  constructor(...e) {
    super(...e), c(this, "actions", {}), c(this, "stores", new Map().set(s.Z, d))
  }
}
let h = new _