/** Chunk was on web.js **/
/** chunk id: 80408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk506774 = require("./506774.js"),
  Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk951122 = require("./951122.js"),
  Chunk542599 = require("./542599.js"),
  Chunk789622 = require("./789622.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = 6048e5,
  d = "lastSawPomelo";

function f() {
  r.w.set(d, Date.now())
}

function p() {
  if (!o.y1.getCurrentConfig({
      location: "b9eb97_1"
    }, {
      autoTrackExposure: false
    }).enabled) returnfalse;
  let e = a.default.getCurrentUser();
  if (null == e || e.hasUniqueUsername() || !e.hasVerifiedEmailOrPhone()) returnfalse;
  let t = d,
    n = r.w.get(t);
  return !(null != n && Date.now() - n < u)
}
class _ extends Chunk439372.A {
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
    }), c(this, "onPostConnectionOpen", () => {
      p() && (0, s.U)(l.gg.APP_START, true, false) && f()
    })
  }
}
let h = new _