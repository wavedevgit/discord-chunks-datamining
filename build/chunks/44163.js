/** Chunk was on web.js **/
/** chunk id: 44163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk374470 = require("./374470.js"),
  Chunk585483 = require("./585483.js"),
  Chunk933513 = require("./933513.js"),
  Chunk981631 = require("./981631.js");
let s = {
  init() {
    document.addEventListener("paste", e => {
      (0, a.Z)((0, r.uB)(e)) || i.S.dispatchToLastSubscribed(o.CkL.GLOBAL_CLIPBOARD_PASTE, {
        event: e
      })
    })
  }
}