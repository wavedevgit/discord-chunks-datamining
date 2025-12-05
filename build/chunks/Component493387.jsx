/** Chunk was on web.js **/
/** chunk id: 493387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
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

function I(e, t) {
  var n;
  let r = (0, p.h)(e),
    i = (0, a.e7)([l.Z, _.Z], () => {
      let t = l.Z.getApplication(e);
      return null != t ? _.Z.getGameByApplication(t) : null
    }, [e]);
  return {
    openGameProfileModal: (0, f.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != (n = null == i ? true : i.id) ? n : true,
      source: d.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: r
  }
}

function T(e, t) {
  var n, r, i, a;
  let {
    bot: o
  } = t, s = (null == (n = e.activity) ? true : n.icon_override) != null ? (0, m.xF)(t.id, null == (r = e.activity) ? true : r.icon_override) : null;
  return {
    iconSrc: null != s ? s : h.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: o
    }),
    name: null != (a = null == (i = e.activity) ? true : i.name_override) ? a : t.name
  }
}

function A(e) {
  var t, n;
  let {
    analyticsLocations: a,
    application: l,
    channel: d,
    currentUserId: f,
    currentUserPresenceActivity: p,
    hideParty: _,
    message: m,
    onView: h,
    partyStatusElement: A,
    presenceActivity: C
  } = e, N = (0, s.ye)(l), {
    iconSrc: P,
    name: R
  } = T(m, l), w = null != (n = (0, y.v)({
    messageId: m.id,
    presenceActivity: C,
    application: l
  })) ? n : true, {
    openGameProfileModal: D,
    launchableAppId: x
  } = I(l.id, m.author.id), L = (0, b.Z)({
    application: l,
    analyticsLocations: a
  }), j = i.useMemo(() => {
    if (null != L) return {
      label: S.intl.string(S.t["jaYS/h"]),
      icon: o.v3n,
      trackingArea: c.j_.CLOUD_PLAY,
      onClick: L
    }
  }, [L]), M = (0, u.G)(l), k = i.useMemo(() => null != D ? D : null != M && N ? M : true, [N, D, M]), U = !(0, E.Z)(C, m, l.id), G = (0, g.dQ)(R, null == (t = m.activity) ? true : t.type, U);
  return U ? (0, r.jsx)(O.Z, {
    message: m,
    application: l,
    applicationName: R,
    channel: d,
    header: G,
    currentUserId: f,
    launchableAppId: x,
    isEmbeddedApplication: N,
    tryWithGdnAction: j,
    staticBannerSrc: w,
    onClickContent: k,
    iconSrc: P,
    onView: h,
    presenceActivity: C,
    analyticsLocations: a
  }) : (0, r.jsx)(v.Z, {
    message: m,
    application: l,
    applicationName: R,
    channel: d,
    header: G,
    currentUserId: f,
    launchableAppId: x,
    isEmbeddedApplication: N,
    tryWithGdnAction: j,
    staticBannerSrc: w,
    onClickContent: k,
    iconSrc: P,
    onView: h,
    presenceActivity: C,
    currentUserPresenceActivity: p,
    hideParty: _,
    partyStatusElement: A,
    analyticsLocations: a
  })
}