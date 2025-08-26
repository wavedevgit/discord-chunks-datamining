/** Chunk was on web.js **/
/** chunk id: 237992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./415506.js"), require("./388685.js");
var Chunk141795 = require("./141795.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true,
    o = e.map(e => new Promise((o, a) => {
      switch (e.status) {
        case r.mw.NOT_STARTED:
          e.upload();
          break;
        case r.mw.COMPLETED:
          o("complete");
          break;
        case r.mw.ERROR:
          t && e.error !== i.evJ.ENTITY_TOO_LARGE ? e.upload() : a(Error("File failed to upload"));
          break;
        case r.mw.CANCELED:
          a(Error("Upload is canceled"));
          break;
        case r.mw.REMOVED_FROM_MSG_DRAFT:
          a(Error("Upload is removed from draft"))
      }
      e.on("complete", () => {
        o("complete")
      }), e.on("error", () => {
        a(Error("File ".concat(e.id, " failed to upload")))
      }), e.on("progress", (e, t) => {
        null == n || n(e, t)
      })
    }));
  await Promise.all(o)
}