/** Chunk was on web.js **/
/** chunk id: 286035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pg: () => o,
  Te: () => i,
  kb: () => a
});
var Chunk570140 = require("./570140.js");

function i() {
  r.Z.wait(() => r.Z.dispatch({
    type: "DOMAIN_MIGRATION_START"
  }))
}

function a() {
  r.Z.dispatch({
    type: "DOMAIN_MIGRATION_FAILURE"
  })
}

function o() {
  window.location.reload()
}