/** Chunk was on web.js **/
/** chunk id: 204776, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ie: () => o,
  Kp: () => s,
  Rx: () => l
});
var Chunk485845 = require("./485845.js"),
  Chunk264322 = require("./264322.js"),
  Chunk73510 = require("./73510.js");

function o(e) {
  let {
    customInstallUrl: t,
    installParams: n,
    integrationTypesConfig: r
  } = e;
  return null != t || null != n || null != r && Object.values(r).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null)
}

function s(e) {
  let {
    customInstallUrl: t,
    installParams: n,
    integrationTypesConfig: i
  } = e;
  return o({
    customInstallUrl: t,
    installParams: n,
    integrationTypesConfig: i
  }) && null != i && r.b.USER_INSTALL in i
}

function l(e) {
  let {
    applicationId: t,
    channel: n,
    commandIntegrationTypes: o
  } = e;
  return !(null != o && !o.includes(r.b.USER_INSTALL) || t === a.Ik.BUILT_IN || i.Ay.hasUserStateApplication(t) || null != n && i.Ay.hasContextStateApplication({
    applicationId: t,
    channelId: n.id,
    guildId: n.guild_id
  }))
}