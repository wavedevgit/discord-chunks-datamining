/** Chunk was on web.js **/
/** chunk id: 884705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = false;

function s(e) {
  var t;
  a = null != (t = e.disabled) && t
}

function o() {
  a = false
}
class l extends Chunk311907.Ay.Store {
  isTogglesDisabled() {
    return a
  }
}
let c = new l(Chunk73153.h, {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: s,
  CONNECTION_OPEN: o,
  LOGOUT: o
})