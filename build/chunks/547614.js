/** Chunk was on web.js **/
/** chunk id: 547614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk710845 = require("./710845.js"),
  Chunk998502 = require("./998502.js");
let a = new Chunk710845.Z("cleanupUnusedVoiceFilterFiles");
async function o(e) {
  try {
    let {
      deletedFiles: t,
      errors: n
    } = await i.ZP.cleanupUnusedVoiceFilterFiles(e);
    t.length > 0 && a.info("VF cleanup completed", {
      deletedFiles: t
    }), n.length > 0 && a.warn("VF cleanup had errors", {
      errors: n
    })
  } catch (e) {
    a.warn("VF cleanup failed", {
      error: e
    })
  }
}