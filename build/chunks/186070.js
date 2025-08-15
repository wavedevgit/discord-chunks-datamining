/** Chunk was on 30202 **/
/** chunk id: 186070, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FI: () => a,
  IL: () => s
});
var Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let s = {
    binds: ["mod+return"],
    comboKeysBindGlobal: true,
    action() {
      if (Chunk585483.S.hasSubscribers(Chunk981631.CkL.CALL_ACCEPT)) return Chunk585483.S.dispatch(Chunk981631.CkL.CALL_ACCEPT), false
    }
  },
  a = {
    binds: ["ctrl+'", "ctrl+shift+'"],
    comboKeysBindGlobal: true,
    action(e) {
      if (i.S.hasSubscribers(r.CkL.CALL_START)) return i.S.dispatch(r.CkL.CALL_START, e), false
    }
  }