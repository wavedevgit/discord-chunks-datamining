/** Chunk was on web.js **/
/** chunk id: 570408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => a
});
var Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = {
  binds: ["mod+f"],
  comboKeysBindGlobal: true,
  action() {
    if (!Chunk819640.Z.hasLayers()) return Chunk585483.S.dispatch(Chunk981631.CkL.FOCUS_SEARCH, {
      prefillCurrentChannel: true
    }), false
  }
}