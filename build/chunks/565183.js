/** Chunk was on web.js **/
/** chunk id: 565183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 20,
  f = 6e4;
class p {
  request(e) {
    if (this._pending.has(e)) return;
    let t = this._lastFetchedAttempted.get(e);
    null != t && Date.now() - t < f || (this._pending.add(e), this._flushHandler.delay(false))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._lastFetchedAttempted.set(t, Date.now()), e.push(t)
    }), this._pending.clear();
    let t = [],
      n = [];
    module.forEach(e => {
      c.Z.didFetchingApplicationFail(e) ? n.push(e) : t.push(e)
    }), exports.length > 0 && a().chunk(exports, d).forEach(e => {
      l.ZP.fetchApplications(e, false)
    }), require.length > 0 && a().chunk(require, d).forEach(e => {
      l.ZP.fetchApplications(e, true)
    })
  }
  constructor() {
    u(this, "_lastFetchedAttempted", new Map), u(this, "_pending", new Set), u(this, "_flushHandler", new Chunk846519.sW(32, () => this._flush()))
  }
}
let _ = new p;

function m(e) {
  r.useEffect(() => {
    null != e && "" !== e && _.request(e)
  }, [e])
}

function h(e) {
  return m(e), (0, o.e7)([c.Z], () => null != e && "" !== e ? c.Z.getApplication(e) : null, [e])
}