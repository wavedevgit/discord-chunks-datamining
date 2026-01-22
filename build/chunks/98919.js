/** Chunk was on web.js **/
/** chunk id: 98919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => v
}), require("./457529.js");
var Chunk562465 = require("./562465.js"),
  Chunk306173 = require("./306173.js"),
  Chunk198982 = require("./198982.js"),
  Chunk790107 = require("./790107.js"),
  Chunk487329 = require("./487329.js"),
  Chunk146503 = require("./146503.js"),
  Chunk734057 = require("./734057.js"),
  Chunk53943 = require("./53943.js"),
  Chunk626584 = require("./626584.js"),
  Chunk551602 = require("./551602.js"),
  Chunk642506 = require("./642506.js"),
  Chunk576798 = require("./576798.js"),
  Chunk731843 = require("./731843.js"),
  Chunk652215 = require("./652215.js");
let g = 9437184,
  E = 0xe00000,
  b = new Chunk626584.A("DebugUploadManager"),
  y = null,
  O = null;

function A(e) {
  switch (e.code) {
    case a.ct.GENERAL:
      return o.B6.UploadErrorGeneral;
    case a.ct.NO_FILE:
      return o.B6.UploadErrorNoFile;
    case a.ct.PROGRESS:
      return o.B6.UploadErrorProgress;
    case a.ct.UPLOAD:
      return o.B6.UploadErrorUpload;
    case a.ct.READ:
      return o.B6.UploadErrorRead;
    default:
      return
  }
}
async function v(e, t) {
  try {
    await S(e), await (0, s.c)(E, t)
  } catch (t) {
    let e;
    throw t instanceof a._ && (e = A(t)), (0, o.QW)({
      type: o.iy.DEBUG_LOG_UPLOAD_FAILED,
      underlyingError: e,
      errorMessage: t.message
    }), t
  }
}
async function S(e) {
  try {
    let n, a, s, o;
    try {
      n = u.As()
    } catch (e) {
      n = "Logs failed: ".concat(e)
    }
    try {
      a = (null == y ? true : y.getSystemLog) != null ? await new Promise(e => y.getSystemLog(e)) : ""
    } catch (e) {
      a = "System Logs failed ".concat(e)
    }
    try {
      s = await (0, p.A)().then(e => (0, h.A)(e, true))
    } catch (e) {
      s = "Push logs failed: ".concat(e)
    }
    try {
      var t;
      o = null != (t = (0, i.G1)()) ? t : ""
    } catch (e) {
      o = "LibDiscore logs failed: ".concat(e)
    }
    let d = n.length + a.length + s.length + o.length;
    if (d > g) {
      let e = 1 - g / d;
      n = n.slice(n.length - Math.floor(n.length * e)), a = a.slice(a.length - Math.floor(a.length * e)), s = s.slice(s.length - Math.floor(s.length * e)), o = o.slice(o.length - Math.floor(o.length * e))
    }
    let E = (null == O ? true : O.AppOpenedTimestamp) != null ? O.AppOpenedTimestamp : null,
      b = "\n    ".concat((0, _.A)(E), "\n\n    ").concat((0, l.CI)(), "\n\n    Metadata:\n    ").concat(JSON.stringify((0, f.A)(), true, 2), "\n\n    ChannelStore:\n    ").concat(JSON.stringify(c.A.getDebugInfo(), true, 2), "\n\n    Logs:\n    ").concat(n, "\n\n    System logs:\n    ").concat(a, "\n\n    LibDiscore logs:\n    ").concat(o, "\n\n    Push Notifications:\n    ").concat(s, "\n    ");
    u.IU();
    let A = m.Rsh.DEBUG_LOG(e, "discord_app_logs");
    await r.Bo.post({
      url: A,
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