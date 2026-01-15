/** Chunk was on web.js **/
/** chunk id: 135431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => u,
  L: () => c
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk873546 = require("./873546.js"),
  Chunk149765 = require("./149765.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk49012 = require("./49012.js"),
  Chunk981631 = require("./981631.js");

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
    o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "custom_url",
      source: _,
      device_platform: r.tq ? "mobile_web" : "desktop_web"
    }), (0, s.q)({
      href: n
    });
    return
  }
  if (null != u && Object.values(u).some(e => (null == e ? true : e.oauth2_install_params) != null || (null == e ? true : e.oauth2InstallParams) != null)) {
    o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
      application_id: t,
      guild_id: d,
      auth_type: "in_app",
      source: _,
      device_platform: r.tq ? "mobile_web" : "desktop_web"
    }), (0, a.openOAuth2Modal)({
      clientId: t,
      guildId: d,
      channelId: f,
      disableGuildSelect: p,
      callback: h
    });
    return
  }
  null != c && (o.default.track(l.rMx.APPLICATION_ADD_TO_SERVER_CLICKED, {
    application_id: t,
    guild_id: d,
    auth_type: "in_app",
    source: _,
    device_platform: r.tq ? "mobile_web" : "desktop_web"
  }), (0, a.openOAuth2Modal)({
    clientId: t,
    guildId: d,
    channelId: f,
    disableGuildSelect: p,
    scopes: c.scopes,
    permissions: null != c.permissions ? i.vB(c.permissions) : true,
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
    let e = new URL(l.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
    return e.searchParams.set("client_id", t), e.toString()
  }
  if (null != r) {
    let e = new URL(l.Z5c.OAUTH2_AUTHORIZE, window.location.origin);
    return e.searchParams.set("client_id", t), e.searchParams.set("scope", r.scopes.join(" ")), null != r.permissions && e.searchParams.set("permissions", r.permissions), e.toString()
  }
}