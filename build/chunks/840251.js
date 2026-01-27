/** Chunk was on web.js **/
/** chunk id: 840251, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => s
}), require("./65821.js"), require("./896048.js");
var Chunk217222 = require("./217222.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t, n) {
  t.forEach(e => {
    e.trackExposure(n)
  })
}
require("./688151.js");
class s {
  registeredExperimentIds() {
    return this.experiments.map(e => e.definition.id)
  }
  trigger() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
    r.A.trackCommonTriggerPointExposures(this.params.location), o(this.triggerPoint, this.experiments, a({}, this.params, e))
  }
  getExperiments() {
    return this.experiments
  }
  constructor(e, t, n) {
    i(this, "experiments", true), i(this, "triggerPoint", true), i(this, "params", true), this.experiments = e, this.triggerPoint = t, this.params = n
  }
}