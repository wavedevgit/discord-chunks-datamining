/** Chunk was on web.js **/
/** chunk id: 736401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk433517 = require("./433517.js"),
  Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk918505 = require("./918505.js"),
  Chunk548161 = require("./548161.js"),
  Chunk801461 = require("./801461.js");

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
  Chunk433517.K.set(d, Date.now())
}

function p() {
  if (!Chunk918505.w8.getCurrentConfig({
      location: "b9eb97_1"
    }, {
      autoTrackExposure: false
    }).enabled) returnfalse;
  let e = Chunk594174.default.getCurrentUser();
  if (null == module || module.hasUniqueUsername() || !module.hasVerifiedEmailOrPhone()) returnfalse;
  let t = d,
    n = Chunk433517.K.get(exports);
  return !(null != require && Date.now() - require < u)
}
class _ extends Chunk147913.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
    }), c(this, "onPostConnectionOpen", () => {
      p() && (0, s.a)(l.Kq.APP_START, true, false) && f()
    })
  }
}
let m = new _