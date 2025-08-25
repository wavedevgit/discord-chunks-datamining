/** Chunk was on web.js **/
/** chunk id: 497909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./49124.js");
var Chunk668757 = require("./668757.js"),
  Chunk902704 = require("./902704.js"),
  Chunk147913 = require("./147913.js"),
  Chunk818083 = require("./818083.js"),
  Chunk353926 = require("./353926.js"),
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
  if (!(0, Chunk668757.X6)()) return;
  let e = {};
  for (let t of Chunk894276.Re) module[exports.id] = exports.getCurrentConfig();
  null != u && (0, Chunk902704.Z)(u, module) || ((0, Chunk668757.Md)().flushToCache(JSON.stringify(module)), u = module)
}

function f() {
  Chunk894276.Re.forEach(e => e.setExperiment((0, a.B)({
    kind: "user",
    id: e.id,
    label: e.getLabel(),
    defaultConfig: {
      treatmentId: false
    },
    treatments: e.getTreatments().map(e => {
      let {
        treatmentId: t,
        label: n
      } = e;
      return {
        id: t,
        label: n,
        config: {
          treatmentId: t
        }
      }
    })
  })))
}
class _ extends Chunk147913.Z {
  _initialize() {
    f()
  }
  _terminate() {}
  constructor(...e) {
    super(...e), c(this, "actions", {}), c(this, "stores", new Map().set(s.Z, d))
  }
}
let p = new _