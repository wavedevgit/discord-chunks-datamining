/** Chunk was on web.js **/
/** chunk id: 497909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./49124.js"), require("./467055.js");
var Chunk668757 = require("./668757.js"),
  Chunk902704 = require("./902704.js"),
  Chunk147913 = require("./147913.js"),
  Chunk818083 = require("./818083.js"),
  Chunk353926 = require("./353926.js"),
  Chunk427164 = require("./427164.js"),
  Chunk894276 = require("./894276.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = null;

function f() {
  if (!(0, Chunk668757.X6)()) return;
  let e = {};
  for (let t of Chunk894276.Re) module[exports.id] = exports.getCurrentConfig();
  null != d && (0, Chunk902704.Z)(d, module) || ((0, Chunk668757.Md)().flushToCache(JSON.stringify(module)), d = module)
}

function _(e) {
  return (0, o.B)({
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
  })
}

function p(e) {
  return (0, l.le)({
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

function h() {
  Chunk894276.Re.forEach(e => {
    e.setExperiment(e.legacyExperiment ? _(e) : p(e))
  })
}
class m extends Chunk147913.Z {
  _initialize() {
    h()
  }
  _terminate() {}
  constructor(...e) {
    super(...e), u(this, "actions", {}), u(this, "stores", new Map().set(s.Z, f))
  }
}
let g = new m