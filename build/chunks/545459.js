/** Chunk was on web.js **/
/** chunk id: 545459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Py: () => a,
  Yw: () => s,
  _r: () => i
});
var Chunk73153 = require("./73153.js");

function i() {
  r.h.wait(() => r.h.dispatch({
    type: "DOMAIN_MIGRATION_START"
  }))
}

function a() {
  r.h.dispatch({
    type: "DOMAIN_MIGRATION_FAILURE"
  })
}

function s() {
  window.location.reload()
}