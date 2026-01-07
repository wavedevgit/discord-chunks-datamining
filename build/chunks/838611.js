/** Chunk was on web.js **/
/** chunk id: 838611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk147913 = require("./147913.js"),
  Chunk948154 = require("./948154.js"),
  Chunk787879 = require("./787879.js"),
  Chunk982183 = require("./982183.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = 5e3;
class u extends Chunk147913.Z {
  preloadInbox() {
    a.Z.loadMoreInbox({
      preload: true,
      loadingTrigger: s.X.AUTO_LOAD
    })
  }
  _terminate() {
    this.throttledPreloadInbox.cancel()
  }
  constructor() {
    super(), l(this, "throttledPreloadInbox", true), l(this, "stores", new Map().set(o.Z, () => {
      !o.Z.hasPreloaded && o.Z.canLoadMore({
        preload: true
      }) && this.throttledPreloadInbox()
    })), this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, c)
  }
}
let d = new u