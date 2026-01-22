/** Chunk was on web.js **/
/** chunk id: 639723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk621466 = require("./621466.js"),
  Chunk203982 = require("./203982.js"),
  Chunk654108 = require("./654108.js"),
  Chunk652215 = require("./652215.js");
let o = {
  init() {
    document.addEventListener("paste", e => {
      (0, a.A)((0, r.BF)(e)) || i._.dispatchToLastSubscribed(s.jej.GLOBAL_CLIPBOARD_PASTE, {
        event: e
      })
    })
  }
}