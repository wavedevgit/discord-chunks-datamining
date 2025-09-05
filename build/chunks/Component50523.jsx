/** Chunk was on web.js **/
/** chunk id: 50523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => v
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
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk768581 = require("./768581.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk574952 = require("./574952.js"),
  Chunk374065 = require("./374065.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  var t, n, v;
  let {
    application: I,
    customId: T,
    customLink: S,
    embedUrl: A,
    referrerId: C,
    message: N
  } = e, R = null == I || null == (t = I.bot) ? true : t.id, P = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: I.id,
    botUserId: null == I || null == (n = I.bot) ? true : n.id
  }), w = null != I && (0, l.ye)(I), D = null != R && w && P, {
    analyticsLocations: x
  } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK), L = (0, i.e7)([h.Z], () => h.Z.getChannelId()), j = (0, y.KF)(L), k = (0, i.e7)([E.ZP], () => {
    if (null == L) return;
    let e = E.ZP.getEmbeddedActivitiesForChannel(L).filter(e => e.applicationId === I.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), M = (0, i.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()), U = (0, b.Z)(), G = j === y.jy.CAN_LAUNCH, B = null != T ? T : S.customId, Z = [];
  G && Z.push({
    label: null == k ? O.intl.string(O.t.RscU7O) : O.intl.string(O.t.VJlc0d),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, g.G6)({
        channelId: null != L ? L : true,
        applicationId: I.id,
        isStart: null == k,
        embeddedActivitiesManager: U,
        customId: B,
        referrerId: C,
        analyticsLocations: x
      })
    },
    disabledReason: null != k && (null == M ? true : M.compositeInstanceId) === k ? O.intl.string(O.t.wJNK8P) : true
  }), D && !G && Z.push({
    label: O.intl.string(O.t.JeK1Wl),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, s.W)({
        appId: I.id,
        botId: R,
        analyticsLocations: x,
        customId: B,
        referrerId: C
      })
    }
  });
  let F = (0, _.G)(I);
  return (0, r.jsx)(d.W, {
    actions: Z,
    onClickContent: F,
    embedUrl: A,
    header: I.name,
    iconSrc: m.ZP.getApplicationIconURL({
      id: I.id,
      icon: I.icon,
      bot: I.bot
    }),
    info: (0, r.jsx)("div", {
      children: S.description
    }),
    staticBannerSrc: S.getAssetURL(),
    title: S.title,
    trackingConfig: {
      id: I.id,
      linkType: u.U.CUSTOM_ACTIVITY_LINK,
      referrerId: C,
      activityCustomId: B,
      guildId: null == (v = p.Z.getChannel(N.channel_id)) ? true : v.guild_id,
      channelId: N.channel_id,
      messageId: N.id
    }
  })
}