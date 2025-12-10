/** Chunk was on web.js **/
/** chunk id: 493387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk335670 = require("./335670.js"),
  Chunk951106 = require("./951106.js"),
  Chunk524995 = require("./524995.js"),
  Chunk812206 = require("./812206.js"),
  Chunk914498 = require("./914498.js"),
  Chunk515344 = require("./515344.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk171516 = require("./171516.js"),
  Chunk77498 = require("./77498.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk758371 = require("./758371.js"),
  Chunk994339 = require("./994339.js"),
  Chunk206074 = require("./206074.js"),
  Chunk77603 = require("./77603.js"),
  Chunk732067 = require("./732067.jsx"),
  Chunk328886 = require("./328886.jsx"),
  Chunk388032 = require("./388032.jsx");

function A(e, t) {
  var n;
  let r = (0, h.h)(e),
    i = (0, a.e7)([d.Z, g.Z], () => {
      let t = d.Z.getApplication(e);
      return null != t ? g.Z.getGameByApplication(t) : null
    }, [e]);
  return {
    openGameProfileModal: (0, m.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != (n = null == i ? true : i.id) ? n : true,
      source: _.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: r
  }
}

function N(e, t) {
  var n, r, i, a;
  let {
    bot: o
  } = t, s = (null == (n = e.activity) ? true : n.icon_override) != null ? (0, E.xF)(t.id, null == (r = e.activity) ? true : r.icon_override) : null;
  return {
    iconSrc: null != s ? s : b.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: o
    }),
    name: null != (a = null == (i = e.activity) ? true : i.name_override) ? a : t.name
  }
}

function P(e) {
  var t, n;
  let {
    analyticsLocations: a,
    application: d,
    channel: _,
    currentUserId: m,
    currentUserPresenceActivity: h,
    hideParty: g,
    message: E,
    onView: b,
    partyStatusElement: P,
    presenceActivity: R
  } = e, w = (0, s.ye)(d), {
    iconSrc: D,
    name: x
  } = N(E, d), L = null != (n = (0, S.v)({
    messageId: E.id,
    presenceActivity: R,
    application: d
  })) ? n : true, {
    openGameProfileModal: j,
    launchableAppId: M
  } = A(d.id, E.author.id), k = (0, v.Z)({
    application: d,
    analyticsLocations: a
  }), U = i.useMemo(() => {
    if (null != k) return {
      label: C.intl.string(C.t["jaYS/h"]),
      icon: o.v3n,
      trackingArea: f.j_.CLOUD_PLAY,
      onClick: k
    }
  }, [k]), G = (0, p.G)(d), Z = i.useMemo(() => null != j ? j : null != G && w ? G : true, [w, j, G]), B = l.Z.useConfig({
    location: "RichPresenceGameActivityInviteEmbed"
  }), {
    canStartAuthorization: F,
    hasAlreadyLinked: V,
    startAuthorization: H
  } = (0, u.F)(d), Y = (0, c.K)(H, V), W = !(0, O.Z)(R, E, d.id), K = (0, y.dQ)(x, null == (t = E.activity) ? true : t.type, W);
  return W ? (0, r.jsx)(I.Z, {
    message: E,
    application: d,
    applicationName: x,
    channel: _,
    header: K,
    currentUserId: m,
    launchableAppId: M,
    isEmbeddedApplication: w,
    tryWithGdnAction: U,
    staticBannerSrc: L,
    onClickContent: Z,
    iconSrc: D,
    onView: b,
    presenceActivity: R,
    analyticsLocations: a,
    showAuthButton: F && !V && B.enabled,
    startAuthorization: Y
  }) : (0, r.jsx)(T.Z, {
    message: E,
    application: d,
    applicationName: x,
    channel: _,
    header: K,
    currentUserId: m,
    launchableAppId: M,
    isEmbeddedApplication: w,
    tryWithGdnAction: U,
    staticBannerSrc: L,
    onClickContent: Z,
    iconSrc: D,
    onView: b,
    presenceActivity: R,
    currentUserPresenceActivity: h,
    hideParty: g,
    partyStatusElement: P,
    analyticsLocations: a,
    showAuthButton: F && !V && B.enabled,
    startAuthorization: Y
  })
}