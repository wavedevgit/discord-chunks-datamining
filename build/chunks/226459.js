/** Chunk was on web.js **/
/** chunk id: 226459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk439372 = require("./439372.js"),
  Chunk706341 = require("./706341.js"),
  Chunk320697 = require("./320697.js"),
  Chunk849077 = require("./849077.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 5e3;
class u extends Chunk439372.A {
  preloadInbox() {
    a.A.loadMoreInbox({
      preload: true,
      loadingTrigger: s.VA.AUTO_LOAD
    })
  }
  _terminate() {
    this.throttledPreloadInbox.cancel()
  }
  constructor() {
    super(), l(this, "throttledPreloadInbox", true), l(this, "stores", new Map().set(o.A, () => {
      o.A.hasPreloaded || o.A.canLoadMore({
        preload: true
      }) && this.throttledPreloadInbox()
    })), this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, c)
  }
}
let d = new u