/** Chunk was on 9753 **/
/** chunk id: 574660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => A,
  t: () => v
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

function y(e) {
  let {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: a
  } = e, s = (0, f.Ie)({
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: a
  }), o = (0, i.bG)([p.A], () => {
    var e;
    return null != (e = p.A.getGuildId()) ? e : true
  }), m = (0, i.bG)([c.A, u.A, d.A], () => {
    let e = c.A.getChannel(d.A.getChannelId());
    return null != e && (e.isPrivate() || u.A.can(_.xBc.SEND_MESSAGES, e))
  }, []), g = (0, l.V1)(e, o) && m;
  return {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: a,
    canViewApp: t || g,
    canOpenAppLauncher: g,
    isInstallable: s,
    selectedGuildId: o
  }
}

function A(e, t) {
  let {
    canViewApp: n,
    canOpenAppLauncher: i,
    isInstallable: l,
    customInstallUrl: c,
    installParams: u,
    integrationTypesConfig: d,
    selectedGuildId: p
  } = y(e);
  return r.useMemo(() => n ? () => {
    (null == t || t(), i) ? (0, a.hg)(e.id) : (0, s.transitionToGlobalDiscovery)({
      tab: h.GlobalDiscoveryTab.APPS,
      applicationId: e.id,
      newSessionState: {
        entrypoint: {
          name: o.sW.APPLICATION_MESSAGE_EMBED
        }
      }
    })
  } : l ? () => {
    null == t || t(), (0, m.o)({
      applicationId: e.id,
      customInstallUrl: c,
      installParams: u,
      integrationTypesConfig: d,
      guildId: p,
      source: "app_message_embed"
    })
  } : true, [e.id, i, n, c, u, d, l, t, p])
}

function v(e) {
  let {
    canViewApp: t,
    isInstallable: n
  } = y(e), i = A(e);
  return r.useMemo(() => t && null != i ? {
    label: b.intl.string(b.t.hvVgAZ),
    trackingArea: g.kY.VIEW,
    onClick() {
      i()
    }
  } : n && null != i ? {
    label: b.intl.string(b.t.NgXl3C),
    trackingArea: g.kY.ADD_APP,
    onClick() {
      i()
    }
  } : true, [t, n, i])
}