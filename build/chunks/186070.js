/** Chunk was on web.js **/
/** chunk id: 186070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FI: () => o,
  IL: () => a
});
var Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let a = {
    binds: ["mod+return"],
    comboKeysBindGlobal: true,
    action() {
      if (r.S.hasSubscribers(i.CkL.CALL_ACCEPT)) return r.S.dispatch(i.CkL.CALL_ACCEPT), false
    }
  },
  o = {
    binds: ["ctrl+'", "ctrl+shift+'"],
    comboKeysBindGlobal: true,
    action(e) {
      if (r.S.hasSubscribers(i.CkL.CALL_START)) return r.S.dispatch(i.CkL.CALL_START, e), false
    }
  }