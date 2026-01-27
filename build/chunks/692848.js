/** Chunk was on web.js **/
/** chunk id: 692848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u,
  o: () => c
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk607399 = require("./607399.js"),
  Chunk136722 = require("./136722.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk307600 = require("./307600.js"),
  Chunk652215 = require("./652215.js");

function c(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: c,
    integrationTypesConfig: u,
    guildId: d,
    channelId: f,
    disableGuildSelect: p,
    source: _,
    oauth2Callback: h
  } = e;
  if (null != n) {
    o.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "custom_url",
      source: _,
      device_platform: r.Fr ? "mobile_web" : "desktop_web"
    }), (0, s.h)({
      href: n
    });
    return
  }
  if (null != u && Object.values(u).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null)) {
    o.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "in_app",
      source: _,
      device_platform: r.Fr ? "mobile_web" : "desktop_web"
    }), (0, a.openOAuth2Modal)({
      clientId: t,
      guildId: d,
      channelId: f,
      disableGuildSelect: p,
      callback: h
    });
    return
  }
  null != c && (o.default.track(l.HAw.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: d,
    auth_type: "in_app",
    source: _,
    device_platform: r.Fr ? "mobile_web" : "desktop_web"
  }), (0, a.openOAuth2Modal)({
    clientId: t,
    guildId: d,
    channelId: f,
    disableGuildSelect: p,
    scopes: c.scopes,
    permissions: null != c.permissions ? i.iu(c.permissions) : true,
    callback: h
  }))
}

function u(e) {
  let {
    applicationId: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: i
  } = e;
  if (null != n) return null;
  if (null != i && Object.values(i).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null)) {
    let e = new URL(l.BVt.OAUTH2_AUTHORIZE, window.location.origin);
    return e.searchParams.set("client_id", t), e.toString()
  }
  if (null != r) {
    let e = new URL(l.BVt.OAUTH2_AUTHORIZE, window.location.origin);
    return e.searchParams.set("client_id", t), e.searchParams.set("scope", r.scopes.join(" ")), null != r.permissions && e.searchParams.set("permissions", r.permissions), e.toString()
  }
}