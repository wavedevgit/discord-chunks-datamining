/** Chunk was on web.js **/
/** chunk id: 515344, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => y,
  z: () => O
});
var Chunk473749 = require("./473749.js"),
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

function b(e) {
  let {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o
  } = e, s = (0, _.Eb)({
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o
  }), l = (0, i.e7)([f.Z], () => {
    var e;
    return null != (e = f.Z.getGuildId()) ? e : true
  }), p = (0, i.e7)([c.Z, u.Z, d.Z], () => {
    let e = c.Z.getChannel(d.Z.getChannelId());
    return null != e && (e.isPrivate() || u.Z.can(m.Plq.SEND_MESSAGES, e))
  }, []), h = (0, a.PZ)(e, l) && p, g = t || h;
  return {
    isDiscoverable: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: o,
    canViewApp: g,
    canOpenAppLauncher: h,
    isInstallable: s,
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
    if (null == t || t(), i) return void(0, o.X)(e.id);
    (0, s.transitionToGlobalDiscovery)({
      tab: g.GlobalDiscoveryTab.APPS,
      applicationId: e.id,
      newSessionState: {
        entrypoint: {
          name: l.xF.APPLICATION_MESSAGE_EMBED
        }
      }
    })
  } : a ? () => {
    null == t || t(), (0, p.L)({
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
    trackingArea: h.j_.VIEW,
    onClick() {
      i()
    }
  } : n && null != i ? {
    label: E.intl.string(E.t.NgXl3C),
    trackingArea: h.j_.ADD_APP,
    onClick() {
      i()
    }
  } : true, [t, n, i])
}