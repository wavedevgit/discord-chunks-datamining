/** Chunk was on web.js **/
/** chunk id: 286035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pg: () => a,
  Te: () => i,
  kb: () => o
});
var Chunk570140 = require("./570140.js");

function i() {
  Chunk570140.Z.wait(() => Chunk570140.Z.dispatch({
    type: "DOMAIN_MIGRATION_START"
  }))
}

function o() {
  Chunk570140.Z.dispatch({
    type: "DOMAIN_MIGRATION_FAILURE"
  })
}

function a() {
  window.location.reload()
}