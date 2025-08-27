/** Chunk was on web.js **/
/** chunk id: 233764, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Z: () => a
});
var i = function(e) {
  return e[e.PRIMARY_APP_COMMAND_NOT_FOUND = 0] = "PRIMARY_APP_COMMAND_NOT_FOUND", e[e.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED = 1] = "LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED", e[e.INVALID_CHANNEL = 2] = "INVALID_CHANNEL", e
}(i || {});
class a {
  constructor(e, t) {
    r(this, "reason", true), r(this, "detailCode", true), this.reason = e, this.detailCode = t
  }
}
r(a, "Reasons", i)