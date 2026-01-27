/** Chunk was on web.js **/
/** chunk id: 358579, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./65821.js"), require("./896048.js");
var Chunk743445 = require("./743445.js"),
  Chunk652215 = require("./652215.js");
async function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : true,
    a = e.map(e => new Promise((a, o) => {
      switch (e.status) {
        case r.jP.NOT_STARTED:
          e.upload();
          break;
        case r.jP.COMPLETED:
          a("complete");
          break;
        case r.jP.ERROR:
          t && e.error !== i.t02.ENTITY_TOO_LARGE ? e.upload() : o(Error("File failed to upload"));
          break;
        case r.jP.CANCELED:
          o(Error("Upload is canceled"));
          break;
        case r.jP.REMOVED_FROM_MSG_DRAFT:
          o(Error("Upload is removed from draft"))
      }
      e.on("complete", () => {
        a("complete")
      }), e.on("error", () => {
        o(Error("File ".concat(e.id, " failed to upload")))
      }), e.on("progress", (e, t) => {
        null == n || n(e, t)
      })
    }));
  await Promise.all(a)
}