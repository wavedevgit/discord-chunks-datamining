/** Chunk was on web.js **/
/** chunk id: 729345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => I
}), require("./49124.js");
var Chunk544891 = require("./544891.js"),
  Chunk668757 = require("./668757.js"),
  Chunk881052 = require("./881052.js"),
  Chunk552871 = require("./552871.js"),
  Chunk458725 = require("./458725.js"),
  Chunk283080 = require("./283080.js"),
  Chunk592125 = require("./592125.js"),
  Chunk569611 = require("./569611.js"),
  Chunk710845 = require("./710845.js"),
  Chunk104639 = require("./104639.js"),
  Chunk202680 = require("./202680.js"),
  Chunk691895 = require("./691895.js"),
  Chunk889911 = require("./889911.js"),
  Chunk981631 = require("./981631.js");
let g = 9437184,
  E = 0xe00000,
  b = new Chunk710845.Z("DebugUploadManager"),
  y = null,
  O = null;

function v(e) {
  switch (e.code) {
    case a.cz.GENERAL:
      return s.Nk.UploadErrorGeneral;
    case a.cz.NO_FILE:
      return s.Nk.UploadErrorNoFile;
    case a.cz.PROGRESS:
      return s.Nk.UploadErrorProgress;
    case a.cz.UPLOAD:
      return s.Nk.UploadErrorUpload;
    case a.cz.READ:
      return s.Nk.UploadErrorRead;
    default:
      return
  }
}
async function I(e, t) {
  try {
    await T(e), await (0, o.u)(E, t)
  } catch (t) {
    let e;
    throw t instanceof a.n0 && (e = v(t)), (0, s.kr)({
      type: s.u.DEBUG_LOG_UPLOAD_FAILED,
      underlyingError: e,
      errorMessage: t.message
    }), t
  }
}
async function T(e) {
  try {
    let n, a, o, s;
    try {
      n = u.Pz()
    } catch (e) {
      n = "Logs failed: ".concat(e)
    }
    try {
      a = (null == y ? true : y.getSystemLog) != null ? await new Promise(e => y.getSystemLog(e)) : ""
    } catch (e) {
      a = "System Logs failed ".concat(e)
    }
    try {
      o = await (0, _.Z)().then(e => (0, h.Z)(e, true))
    } catch (e) {
      o = "Push logs failed: ".concat(e)
    }
    try {
      var t;
      s = null != (t = (0, i.AG)()) ? t : ""
    } catch (e) {
      s = "LibDiscore logs failed: ".concat(e)
    }
    let d = n.length + a.length + o.length + s.length;
    if (d > g) {
      let e = 1 - g / d;
      n = n.slice(n.length - Math.floor(n.length * e)), a = a.slice(a.length - Math.floor(a.length * e)), o = o.slice(o.length - Math.floor(o.length * e)), s = s.slice(s.length - Math.floor(s.length * e))
    }
    let E = (null == O ? true : O.AppOpenedTimestamp) != null ? O.AppOpenedTimestamp : null,
      b = "\n    ".concat((0, p.Z)(E), "\n\n    ").concat((0, l.EA)(), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, f.Z)(), true, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(c.Z.getDebugInfo(), true, 2), "\n\n    Logs:\n    ").concat(n, "\n\n    System logs:\n    ").concat(a, "\n\n    LibDiscore logs:\n    ").concat(s, "\n\n    Push Notifications:\n    ").concat(o, "\n    ");
    u.ZH();
    let v = m.ANM.DEBUG_LOG(e, "discord_app_logs");
    await r.tn.post({
      url: v,
      body: b,
      retries: 3,
      headers: {
        "Content-Type": "text/plain"
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  } catch (e) {
    b.error("uploadAppLogFiles: upload app log files error ".concat(e.message))
  }
}