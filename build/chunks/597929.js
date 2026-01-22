/** Chunk was on web.js **/
/** chunk id: 597929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => a,
  _: () => i
});
var Chunk155718 = require("./155718.js");

function i(e) {
  return null != e.interactionMetadata
}

function a(e) {
  var t, n;
  return (null == (t = e.interactionMetadata) ? true : t.type) === r.G4.APPLICATION_COMMAND && (null == (n = e.interactionMetadata) ? true : n.command_type) === r.kc.PRIMARY_ENTRY_POINT
}