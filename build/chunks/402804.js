/** Chunk was on web.js **/
/** chunk id: 402804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk451478 = require("./451478.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk55937 = require("./55937.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class u extends Chunk147913.Z {
  handleConnectionOpen() {
    let e = Chunk594174.default.getCurrentUser();
    null != module && Chunk55937.x("user_opened_desktop_app", {
      user_id: module.id,
      age_minutes: Chunk709054.default.age(module.id) / Chunk70956.Z.Millis.MINUTE
    })
  }
  handleWindowChange() {
    let e = Chunk594174.default.getCurrentUser();
    null != module && Chunk451478.Z.isAppFocused() && Chunk55937.x("user_focussed_desktop_app", {
      user_id: module.id,
      age_minutes: Chunk709054.default.age(module.id) / Chunk70956.Z.Millis.MINUTE
    })
  }
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    }), c(this, "stores", new Map([
      [a.Z, this.handleWindowChange]
    ]))
  }
}
let d = new u