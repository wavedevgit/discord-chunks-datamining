/** Chunk was on web.js **/
/** chunk id: 114957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk224706 = require("./224706.js"),
  Chunk978085 = require("./978085.js"),
  Chunk147913 = require("./147913.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js"),
  Chunk273273 = require("./273273.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class f extends Chunk147913.Z {
  handlePostConnectionOpen() {
    (0, c.isDesktop)() && !s.Z.fetched && (0, i.b8)(), r.Z.getDetectableGames(), r.Z.getDetectableBlocklist(), this.intervalId = setInterval(() => {
      r.Z.getDetectableGames(), r.Z.getDetectableBlocklist()
    }, o.Z.detectableGamesTtl + Math.random() * l.Z.Millis.HOUR), r.Z.getDetectableNonGames(), this.nonGameIntervalId = setInterval(r.Z.getDetectableNonGames, u.Z.ttl + Math.random() * l.Z.Millis.HOUR)
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