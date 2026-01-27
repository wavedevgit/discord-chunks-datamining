/** Chunk was on web.js **/
/** chunk id: 858177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => m
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js");

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
    e.forEach(e => {
      c.A.didFetchingApplicationFail(e) ? n.push(e) : t.push(e)
    }), t.length > 0 && a().chunk(t, d).forEach(e => {
      l.Ay.fetchApplications(e, false)
    }), n.length > 0 && a().chunk(n, d).forEach(e => {
      l.Ay.fetchApplications(e, true)
    })
  }
  constructor() {
    u(this, "_lastFetchedAttempted", new Map), u(this, "_pending", new Set), u(this, "_flushHandler", new s.J_(32, () => this._flush()))
  }
}
let _ = new p;

function h(e) {
  r.useEffect(() => {
    null != e && "" !== e && _.request(e)
  }, [e])
}

function m(e) {
  return h(e), (0, o.bG)([c.A], () => null != e && "" !== e ? c.A.getApplication(e) : null, [e])
}