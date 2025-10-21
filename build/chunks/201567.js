/** Chunk was on web.js **/
/** chunk id: 201567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => d
});
var Chunk233764 = require("./233764.js"),
  Chunk375824 = require("./375824.js"),
  Chunk188597 = require("./188597.js"),
  Chunk695346 = require("./695346.js"),
  Chunk115130 = require("./115130.js"),
  Chunk566620 = require("./566620.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function d(e, t) {
  let n, d, f, _ = u.intl.string(u.t["IOy+I5"]);
  if (e instanceof r.Z) {
    n = 0, f = e.reason;
    let i = s.Z.getFetchState();
    switch (o.Sb.getSetting() && i !== s.O.LOADED && await (0, l.$h)(), e.reason) {
      case r.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
        s.Z.inDevModeForApplication(t) && (_ = u.intl.string(u.t.hXRXfz));
        break;
      case r.Z.Reasons.INVALID_CHANNEL:
        _ = u.intl.string(u.t.j29zCr);
        break;
      case r.Z.Reasons.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED:
        d = e.detailCode
    }
  } else if (e instanceof i.Z) {
    var p;
    n = 1, f = e.reason, _ = null != (p = (0, a.A0)(e.reason, t)) ? p : _
  } else switch (n = 2, d = e.status, f = e.code, e.code) {
    case c.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
      _ = u.intl.string(u.t.GyzcrS);
      break;
    case c.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
      _ = u.intl.string(u.t.zxv7EF);
      break;
    case c.evJ.INVALID_PERMISSIONS:
      _ = u.intl.string(u.t.hHGrWz);
      break;
    case c.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
      _ = u.intl.string(u.t.j29zCr);
      break;
    case c.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
      _ = u.intl.string(u.t["4WuFRE"]);
      break;
    case c.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
      _ = u.intl.string(u.t.RvkXdb);
      break;
    case c.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
      _ = u.intl.string(u.t.uGDCcw)
  }
  return {
    message: _,
    errorType: n,
    errorStatus: d,
    errorCode: f
  }
}