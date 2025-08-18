/** Chunk was on 91173 **/
/** chunk id: 515344, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => C,
  z: () => O
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk783097 = require("./783097.js"),
  Chunk176412 = require("./176412.js"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk135431 = require("./135431.js"),
  Chunk433534 = require("./433534.js"),
  Chunk914498 = require("./914498.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o
  } = e, a = (0, f.Eb)({
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o
  }), s = (0, i.e7)([p.Z], () => {
    var e;
    return null != (e = p.Z.getGuildId()) ? e : true
  }), m = (0, i.e7)([c.Z, u.Z, d.Z], () => {
    let e = c.Z.getChannel(d.Z.getChannelId());
    return null != e && (e.isPrivate() || u.Z.can(_.Plq.SEND_MESSAGES, e))
  }, []), g = (0, l.PZ)(e, s) && m;
  return {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o,
    canViewApp: t || g,
    canOpenAppLauncher: g,
    isInstallable: a,
    selectedGuildId: s
  }
}

function C(e, t) {
  let {
    canViewApp: n,
    canOpenAppLauncher: i,
    isInstallable: l,
    customInstallUrl: c,
    installParams: u,
    integrationTypesConfig: d,
    selectedGuildId: p
  } = E(e);
  return r.useMemo(() => n ? () => {
    if (null == t || t(), i) return void(0, o.X)(e.id);
    (0, a.transitionToGlobalDiscovery)({
      tab: h.GlobalDiscoveryTab.APPS,
      applicationId: e.id,
      newSessionState: {
        entrypoint: {
          name: s.xF.APPLICATION_MESSAGE_EMBED
        }
      }
    })
  } : l ? () => {
    null == t || t(), (0, m.L)({
      applicationId: e.id,
      customInstallUrl: c,
      installParams: u,
      integrationTypesConfig: d,
      guildId: p,
      source: "app_message_embed"
    })
  } : true, [e.id, i, n, c, u, d, l, t, p])
}

function O(e) {
  let {
    canViewApp: t,
    isInstallable: n
  } = E(e), i = C(e);
  return r.useMemo(() => t && null != i ? {
    label: b.intl.string(b.t.hvVgAQ),
    trackingArea: g.j_.VIEW,
    onClick() {
      i()
    }
  } : n && null != i ? {
    label: b.intl.string(b.t.NgXl3N),
    trackingArea: g.j_.ADD_APP,
    onClick() {
      i()
    }
  } : true, [t, n, i])
}