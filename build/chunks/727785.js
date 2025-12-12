/** Chunk was on web.js **/
/** chunk id: 727785, original params: e,t,n (module,exports,re quire) **/
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
  X5: () => i,
  a8: () => o,
  h8: () => a,
  xQ: () => s
});
class i {
  constructor(e) {
    r(this, "id", true), r(this, "text", true), this.id = e, this.text = e
  }
}
var o = function(e) {
    return e.UP = "UP", e.DOWN = "DOWN", e
  }({}),
  a = function(e) {
    return e.GUILD = "GUILD", e.TEXT_CHANNEL = "TEXT_CHANNEL", e.GROUP_DM = "GROUP_DM", e.VOICE_CHANNEL = "VOICE_CHANNEL", e.USER = "USER", e.HEADER = "HEADER", e.APPLICATION = "APPLICATION", e.SKU = "SKU", e.LINK = "LINK", e.IN_APP_NAVIGATION = "IN_APP_NAVIGATION", e.DM = "DM", e
  }({}),
  s = function(e) {
    return e.USER = "@", e.TEXT_CHANNEL = "#", e.VOICE_CHANNEL = "!", e.GUILD = "*", e.APPLICATION = "$", e
  }({})