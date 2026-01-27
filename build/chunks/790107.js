/** Chunk was on web.js **/
/** chunk id: 790107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => f
}), require("./747238.js"), require("./896048.js"), require("./457529.js");
var Chunk562465 = require("./562465.js"),
  Chunk198982 = require("./198982.js"),
  Chunk626584 = require("./626584.js"),
  Chunk430452 = require("./430452.js"),
  Chunk453771 = require("./453771.js"),
  Chunk77729 = require("./77729.js"),
  Chunk652215 = require("./652215.js");
let u = new Chunk626584.A("uploadRtcLogFiles");

function d(e, t) {
  let n = t.split("."),
    r = n.length > 1 ? n.pop() : "",
    i = n.join("."),
    a = "".concat(i, ".").concat(r),
    o = 1;
  for (; e.has(a);) a = "".concat(i, "_").concat(o, ".").concat(r), o += 1;
  return e.add(a), a
}
async function f(e, t) {
  let n;
  if (null == l.A.fileManager.readLogFiles) throw new i._(i.ct.GENERAL);
  let a = [];
  try {
    a = (a = await l.A.fileManager.readLogFiles(e)).map(e => (0, s.ww)(e, "application/octet-stream"))
  } catch (e) {
    throw u.error("uploadDebugFiles: read error '".concat(e, "'")), new i._(i.ct.READ)
  }
  if (0 === a.length) throw new i._(i.ct.NO_FILE);
  let f = {
      extraInfo: t,
      mediaEngineState: o.A.getState()
    },
    p = [...a.map(e => ({
      name: e.name,
      file: e,
      filename: e.name
    })), {
      name: "media_engine_state.json",
      filename: "media_engine_state.json",
      file: new Blob([JSON.stringify(f, true, 2)])
    }],
    _ = new Set;
  try {
    n = await r.Bo.post({
      url: c.Rsh.DEBUG_LOGS(c.Umv.RTC),
      attachments: [...p.map(e => {
        let t = d(_, e.name);
        return {
          name: t,
          file: e.file,
          filename: t
        }
      })],
      rejectWithError: false
    })
  } catch (e) {
    if (429 === e.status) throw new i._(i.ct.PROGRESS);
    throw u.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new i._(i.ct.UPLOAD)
  }
  if ("success_count" in n.body && n.body.success_count !== p.length) throw u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(p.length)), new i._(i.ct.GENERAL);
  if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw u.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new i._(i.ct.GENERAL)
}