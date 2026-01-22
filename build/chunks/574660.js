/** Chunk was on web.js **/
/** chunk id: 574660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => y,
  t: () => O
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk735991 = require("./735991.js"),
  Chunk297486 = require("./297486.js"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk692848 = require("./692848.js"),
  Chunk204776 = require("./204776.js"),
  Chunk354287 = require("./354287.js"),
  Chunk652215 = require("./652215.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: s
  } = e, o = (0, _.Ie)({
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: s
  }), l = (0, i.bG)([f.A], () => {
    var e;
    return null != (e = f.A.getGuildId()) ? e : true
  }), p = (0, i.bG)([c.A, u.A, d.A], () => {
    let e = c.A.getChannel(d.A.getChannelId());
    return null != e && (e.isPrivate() || u.A.can(m.xBc.SEND_MESSAGES, e))
  }, []), h = (0, a.V1)(e, l) && p, g = t || h;
  return {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: s,
    canViewApp: g,
    canOpenAppLauncher: h,
    isInstallable: o,
    selectedGuildId: l
  }
}

function y(e, t) {
  let {
    canViewApp: n,
    canOpenAppLauncher: i,
    isInstallable: a,
    customInstallUrl: c,
    installParams: u,
    integrationTypesConfig: d,
    selectedGuildId: f
  } = b(e);
  return r.useMemo(() => n ? () => {
    (null == t || t(), i) ? (0, s.hg)(e.id) : (0, o.transitionToGlobalDiscovery)({
      tab: g.GlobalDiscoveryTab.APPS,
      applicationId: e.id,
      newSessionState: {
        entrypoint: {
          name: l.sW.APPLICATION_MESSAGE_EMBED
        }
      }
    })
  } : a ? () => {
    null == t || t(), (0, p.o)({
      applicationId: e.id,
      customInstallUrl: c,
      installParams: u,
      integrationTypesConfig: d,
      guildId: f,
      source: "app_message_embed"
    })
  } : true, [e.id, i, n, c, u, d, a, t, f])
}

function O(e) {
  let {
    canViewApp: t,
    isInstallable: n
  } = b(e), i = y(e);
  return r.useMemo(() => t && null != i ? {
    label: E.intl.string(E.t.hvVgAZ),
    trackingArea: h.kY.VIEW,
    onClick() {
      i()
    }
  } : n && null != i ? {
    label: E.intl.string(E.t.NgXl3C),
    trackingArea: h.kY.ADD_APP,
    onClick() {
      i()
    }
  } : true, [t, n, i])
}