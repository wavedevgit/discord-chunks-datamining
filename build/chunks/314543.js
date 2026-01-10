/** Chunk was on web.js **/
/** chunk id: 314543, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = false;

function o(e) {
  var t;
  a = null != (t = e.disabled) && t
}

function s() {
  a = false
}
class l extends Chunk442837.ZP.Store {
  isTogglesDisabled() {
    return a
  }
}
let c = new l(Chunk570140.Z, {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: o,
  CONNECTION_OPEN: s,
  LOGOUT: s
})