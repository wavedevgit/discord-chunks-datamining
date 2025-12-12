/** Chunk was on web.js **/
/** chunk id: 945141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = "formGuidelinesStorageKey";
class s extends Chunk147913.Z {
  _initialize() {
    let e = Chunk433517.K.get(o);
    null != module && (this.seenForumGuidelines = new Set(module))
  }
  _terminate() {
    Chunk433517.K.set(o, this.seenForumGuidelines)
  }
  markAsSeen(e) {
    this.seenForumGuidelines.add(e), r.K.set(o, this.seenForumGuidelines)
  }
  hasSeen(e) {
    return this.seenForumGuidelines.has(e)
  }
  constructor(...e) {
    super(...e), a(this, "seenForumGuidelines", new Set)
  }
}
let l = new s