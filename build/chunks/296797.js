/** Chunk was on web.js **/
/** chunk id: 296797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk544420 = require("./544420.js"),
  Chunk110782 = require("./110782.js"),
  Chunk439372 = require("./439372.js"),
  Chunk760751 = require("./760751.js"),
  Chunk189081 = require("./189081.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk953384 = require("./953384.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk439372.A {
  handlePostConnectionOpen() {
    (0, c.isDesktop)() && !s.A.fetched && (0, i.Yq)(), r.A.getDetectableGames(), r.A.getDetectableBlocklist(), this.intervalId = setInterval(() => {
      r.A.getDetectableGames(), r.A.getDetectableBlocklist()
    }, o.A.detectableGamesTtl + Math.random() * l.A.Millis.HOUR), r.A.getDetectableNonGames(), this.nonGameIntervalId = setInterval(r.A.getDetectableNonGames, u.A.ttl + Math.random() * l.A.Millis.HOUR)
  }
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true), null != this.nonGameIntervalId && (clearInterval(this.nonGameIntervalId), this.nonGameIntervalId = true)
  }
  constructor(...e) {
    super(...e), d(this, "intervalId", true), d(this, "nonGameIntervalId", true), d(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let p = new f