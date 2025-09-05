/** Chunk was on 54052 **/
/** chunk id: 770270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => l,
  p: () => a
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  switch (e) {
    case r.evJ.UNKNOWN_CHANNEL:
      return i.intl.string(i.t.ETCmRU);
    case r.evJ.INVALID_PERMISSIONS:
      return i.intl.string(i.t.lXtut7);
    case r.evJ.INVALID_ACCESS:
      return i.intl.string(i.t.TAXOKy);
    case r.evJ.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
      return i.intl.string(i.t.ZpuxVl);
    case r.evJ.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
      return i.intl.string(i.t.tSBmIi);
    case r.evJ.VANITY_URL_REQUIREMENTS_NOT_MET:
      return i.intl.string(i.t["w+yGQU"]);
    default:
      return i.intl.string(i.t.ckQidX)
  }
}

function a(e) {
  return e.features.has(r.oNc.VANITY_URL) || e.features.has(r.oNc.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode
}