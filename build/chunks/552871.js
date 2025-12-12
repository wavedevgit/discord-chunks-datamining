/** Chunk was on web.js **/
/** chunk id: 552871, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => f
}), require("./35282.js"), require("./388685.js"), require("./49124.js");
var Chunk544891 = require("./544891.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk131951 = require("./131951.js"),
  Chunk403182 = require("./403182.js"),
  Chunk579806 = require("./579806.js"),
  Chunk981631 = require("./981631.js");
let u = new Chunk710845.Z("uploadRtcLogFiles");

function d(e, t) {
  let n = t.split("."),
    r = n.length > 1 ? n.pop() : "",
    i = n.join("."),
    o = "".concat(i, ".").concat(r),
    a = 1;
  for (; e.has(o);) o = "".concat(i, "_").concat(a, ".").concat(r), a += 1;
  return e.add(o), o
}
async function f(e, t) {
  let n;
  if (null == l.Z.fileManager.readLogFiles) throw new i.n0(i.cz.GENERAL);
  let o = [];
  try {
    o = (o = await l.Z.fileManager.readLogFiles(e)).map(e => (0, s.qF)(e, "application/octet-stream"))
  } catch (e) {
    throw u.error("uploadDebugFiles: read error '".concat(e, "'")), new i.n0(i.cz.READ)
  }
  if (0 === o.length) throw new i.n0(i.cz.NO_FILE);
  let f = {
      extraInfo: t,
      mediaEngineState: a.Z.getState()
    },
    p = [...o.map(e => ({
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
    n = await r.tn.post({
      url: c.ANM.DEBUG_LOGS(c.GU0.RTC),
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
    if (429 === e.status) throw new i.n0(i.cz.PROGRESS);
    throw u.error("Debug log upload error: status: ".concat(e.status, ", message: ").concat(e.message)), new i.n0(i.cz.UPLOAD)
  }
  if ("success_count" in n.body && n.body.success_count !== p.length) throw u.error("Debug log upload: stored files ".concat(n.body.success_count, " !== ").concat(p.length)), new i.n0(i.cz.GENERAL);
  if ("store_success" in n.body && !n.body.store_success || "id_match" in n.body && !n.body.id_match || "all_success" in n.body && !n.body.all_success) throw u.error("Debug log upload: store_success: ".concat(n.body.store_success, " / ") + "id_match: ".concat(n.body.id_match, " / ") + "all_success: ".concat(n.body.all_success)), new i.n0(i.cz.GENERAL)
}