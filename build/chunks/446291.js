/** Chunk was on 47841 **/
/** chunk id: 446291, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  d: () => s,
  z: () => l
});
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  switch (e) {
    case r.t02.UNKNOWN_CHANNEL:
      return i.intl.string(i.t.ETCmRa);
    case r.t02.INVALID_PERMISSIONS:
      return i.intl.string(i.t.lXtut1);
    case r.t02.INVALID_ACCESS:
      return i.intl.string(i.t.TAXOKw);
    case r.t02.VANITY_URL_REQUIRED_FOR_PUBLISHED_GUILDS:
      return i.intl.string(i.t.ZpuxVs);
    case r.t02.VANITY_URL_EMPLOYEE_ONLY_GUILD_DISABLED:
      return i.intl.string(i.t.tSBmIv);
    case r.t02.VANITY_URL_REQUIREMENTS_NOT_MET:
      return i.intl.string(i.t["w+yGQT"]);
    default:
      return i.intl.string(i.t.ckQidX)
  }
}

function s(e) {
  return e.features.has(r.GuildFeatures.VANITY_URL) || e.features.has(r.GuildFeatures.GUILD_WEB_PAGE_VANITY_URL) && null != e.vanityURLCode
}