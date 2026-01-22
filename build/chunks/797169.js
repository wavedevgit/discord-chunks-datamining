/** Chunk was on web.js **/
/** chunk id: 797169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => s
});
var Chunk626584 = require("./626584.js"),
  Chunk837921 = require("./837921.js");
let a = new Chunk626584.A("cleanupUnusedVoiceFilterFiles");
async function s(e) {
  try {
    let {
      deletedFiles: t,
      errors: n
    } = await i.Ay.cleanupUnusedVoiceFilterFiles(e);
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