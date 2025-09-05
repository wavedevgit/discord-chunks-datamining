/** Chunk was on web.js **/
/** chunk id: 50523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => O
}), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk812236 = require("./812236.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk515344 = require("./515344.js"),
  Chunk944486 = require("./944486.js"),
  Chunk768581 = require("./768581.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk574952 = require("./574952.js"),
  Chunk374065 = require("./374065.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  var t, n;
  let {
    application: O,
    customId: v,
    customLink: I,
    embedUrl: T,
    referrerId: S
  } = e, A = null == O || null == (t = O.bot) ? true : t.id, C = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: O.id,
    botUserId: null == O || null == (n = O.bot) ? true : n.id
  }), N = null != O && (0, l.ye)(O), R = null != A && N && C, {
    analyticsLocations: P
  } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK), w = (0, i.e7)([p.Z], () => p.Z.getChannelId()), D = (0, b.KF)(w), x = (0, i.e7)([g.ZP], () => {
    if (null == w) return;
    let e = g.ZP.getEmbeddedActivitiesForChannel(w).filter(e => e.applicationId === O.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), L = (0, i.e7)([g.ZP], () => g.ZP.getCurrentEmbeddedActivity()), j = (0, E.Z)(), k = D === b.jy.CAN_LAUNCH, M = null != v ? v : I.customId, U = [];
  k && U.push({
    label: null == x ? y.intl.string(y.t.RscU7O) : y.intl.string(y.t.VJlc0d),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, m.G6)({
        channelId: null != w ? w : true,
        applicationId: O.id,
        isStart: null == x,
        embeddedActivitiesManager: j,
        customId: M,
        referrerId: S,
        analyticsLocations: P
      })
    },
    disabledReason: null != x && (null == L ? true : L.compositeInstanceId) === x ? y.intl.string(y.t.wJNK8P) : true
  }), R && !k && U.push({
    label: y.intl.string(y.t.JeK1Wl),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, s.W)({
        appId: O.id,
        botId: A,
        analyticsLocations: P,
        customId: M,
        referrerId: S
      })
    }
  });
  let G = (0, _.G)(O);
  return (0, r.jsx)(d.W, {
    actions: U,
    onClickContent: G,
    embedUrl: T,
    header: O.name,
    iconSrc: h.ZP.getApplicationIconURL({
      id: O.id,
      icon: O.icon,
      bot: O.bot
    }),
    info: (0, r.jsx)("div", {
      children: I.description
    }),
    staticBannerSrc: I.getAssetURL(),
    title: I.title,
    trackingConfig: {
      id: O.id,
      linkType: u.U.CUSTOM_ACTIVITY_LINK,
      referrerId: S,
      activityCustomId: M
    }
  })
}