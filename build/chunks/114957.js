/** Chunk was on web.js **/
/** chunk id: 114957, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk224706 = require("./224706.js"),
  Chunk978085 = require("./978085.js"),
  Chunk147913 = require("./147913.js"),
  Chunk380249 = require("./380249.js"),
  Chunk627050 = require("./627050.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk70956 = require("./70956.js"),
  Chunk358085 = require("./358085.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk147913.Z {
  handlePostConnectionOpen() {
    ((0, Chunk358085.isDesktop)() || (0, Chunk380249.l)() || Chunk627050.d.getCurrentConfig({
      location: "DetectableGamesManager.handlePostConnectionOpen"
    }).enabled) && (Chunk283595.Z.fetched || (0, Chunk978085.b8)(), Chunk224706.Z.getDetectableGames(), this.intervalId = setInterval(Chunk224706.Z.getDetectableGames, Chunk77498.Z.detectableGamesTtl + Math.random() * Chunk70956.Z.Millis.HOUR))
  }
  _terminate() {
    null != this.intervalId && (clearInterval(this.intervalId), this.intervalId = true)
  }
  constructor(...e) {
    super(...e), f(this, "intervalId", true), f(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    })
  }
}
let p = new _