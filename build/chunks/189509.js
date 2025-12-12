/** Chunk was on web.js **/
/** chunk id: 189509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
});
var Chunk607070 = require("./607070.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = {
  binds: ["return"],
  action() {
    if (!Chunk607070.Z.keyboardModeEnabled && Chunk585483.S.hasSubscribers(Chunk981631.CkL.MODAL_SUBMIT)) return Chunk585483.S.dispatch(Chunk981631.CkL.MODAL_SUBMIT), false
  }
}