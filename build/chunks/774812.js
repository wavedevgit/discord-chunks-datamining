/** Chunk was on web.js **/
/** chunk id: 774812, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js");
var Chunk506774 = require("./506774.js"),
  Chunk439372 = require("./439372.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = "formGuidelinesStorageKey";
class s extends Chunk439372.A {
  _initialize() {
    let e = r.w.get(o);
    null != e && (this.seenForumGuidelines = new Set(e))
  }
  _terminate() {
    r.w.set(o, this.seenForumGuidelines)
  }
  markAsSeen(e) {
    this.seenForumGuidelines.add(e), r.w.set(o, this.seenForumGuidelines)
  }
  hasSeen(e) {
    return this.seenForumGuidelines.has(e)
  }
  constructor(...e) {
    super(...e), a(this, "seenForumGuidelines", new Set)
  }
}
let l = new s