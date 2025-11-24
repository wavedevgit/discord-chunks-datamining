/** Chunk was on web.js **/
/** chunk id: 493387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk914498 = require("./914498.js"),
  Chunk515344 = require("./515344.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk171516 = require("./171516.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk758371 = require("./758371.js"),
  Chunk994339 = require("./994339.js"),
  Chunk206074 = require("./206074.js"),
  Chunk77603 = require("./77603.js"),
  Chunk732067 = require("./732067.jsx"),
  Chunk328886 = require("./328886.jsx"),
  Chunk388032 = require("./388032.jsx");

function O(e, t) {
  let n = (0, d.h)(e);
  return {
    openGameProfileModal: (0, u.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != n ? n : true,
      source: c.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: n
  }
}

function v(e, t) {
  var n, r, i, a;
  let {
    bot: o
  } = t, s = (null == (n = e.activity) ? true : n.icon_override) != null ? (0, f.xF)(t.id, null == (r = e.activity) ? true : r.icon_override) : null;
  return {
    iconSrc: null != s ? s : _.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: o
    }),
    name: null != (a = null == (i = e.activity) ? true : i.name_override) ? a : t.name
  }
}

function I(e) {
  var t, n;
  let {
    analyticsLocations: c,
    application: u,
    channel: d,
    currentUserId: f,
    currentUserPresenceActivity: _,
    hideParty: I,
    message: T,
    onView: S,
    partyStatusElement: A,
    presenceActivity: C
  } = e, N = (0, o.ye)(u), {
    iconSrc: R,
    name: P
  } = v(T, u), D = null != (n = (0, g.v)({
    messageId: T.id,
    presenceActivity: C,
    application: u
  })) ? n : true, {
    openGameProfileModal: w,
    launchableAppId: L
  } = O(u.id, T.author.id), x = (0, m.Z)({
    application: u,
    analyticsLocations: c
  }), M = i.useMemo(() => {
    if (null != x) return {
      label: y.intl.string(y.t["jaYS/h"]),
      icon: a.v3n,
      trackingArea: s.j_.CLOUD_PLAY,
      onClick: x
    }
  }, [x]), j = (0, l.G)(u), k = i.useMemo(() => null != w ? w : null != j && N ? j : true, [N, w, j]), U = !(0, h.Z)(C, T, u.id), G = (0, p.dQ)(P, null == (t = T.activity) ? true : t.type, U);
  return U ? (0, r.jsx)(E.Z, {
    message: T,
    application: u,
    applicationName: P,
    channel: d,
    header: G,
    currentUserId: f,
    launchableAppId: L,
    isEmbeddedApplication: N,
    tryWithGdnAction: M,
    staticBannerSrc: D,
    onClickContent: k,
    iconSrc: R,
    onView: S,
    presenceActivity: C,
    analyticsLocations: c
  }) : (0, r.jsx)(b.Z, {
    message: T,
    application: u,
    applicationName: P,
    channel: d,
    header: G,
    currentUserId: f,
    launchableAppId: L,
    isEmbeddedApplication: N,
    tryWithGdnAction: M,
    staticBannerSrc: D,
    onClickContent: k,
    iconSrc: R,
    onView: S,
    presenceActivity: C,
    currentUserPresenceActivity: _,
    hideParty: I,
    partyStatusElement: A,
    analyticsLocations: c
  })
}