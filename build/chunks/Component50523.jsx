/** Chunk was on web.js **/
/** chunk id: 50523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => v
}), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
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
    application: S,
    customId: I,
    customLink: T,
    referrerId: C,
    message: A
  } = e, N = null == S || null == (t = S.bot) ? true : t.id, P = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: S.id,
    botUserId: null == S || null == (n = S.bot) ? true : n.id
  }), R = null != S && (0, l.ye)(S), w = null != N && R && P, {
    analyticsLocations: D
  } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK), x = (0, i.e7)([m.Z], () => m.Z.getChannelId()), L = (0, y.KF)(x), j = (0, i.e7)([E.ZP], () => {
    if (null == x) return;
    let e = E.ZP.getEmbeddedActivitiesForChannel(x).filter(e => e.applicationId === S.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), M = (0, i.e7)([E.ZP], () => E.ZP.getCurrentEmbeddedActivity()), k = (0, b.Z)(), U = L === y.jy.CAN_LAUNCH, G = null != j && (null == M ? true : M.compositeInstanceId) === j, Z = null != I ? I : T.customId, B = [];
  U && B.push({
    label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, g.G6)({
        channelId: null != x ? x : true,
        applicationId: S.id,
        isStart: null == j,
        embeddedActivitiesManager: k,
        customId: Z,
        referrerId: C,
        analyticsLocations: D
      })
    },
    disabled: G
  }), w && !U && B.push({
    label: O.intl.string(O.t.JeK1Wg),
    trackingArea: f.j_.PLAY,
    onClick() {
      (0, s.W)({
        appId: S.id,
        botId: N,
        analyticsLocations: D,
        customId: Z,
        referrerId: C
      })
    }
  });
  let F = (0, p.G)(S);
  return (0, r.jsx)(d.W, {
    actions: B,
    onClickContent: F,
    header: S.name,
    iconSrc: h.ZP.getApplicationIconURL({
      id: S.id,
      icon: S.icon,
      bot: S.bot
    }),
    info: (0, r.jsx)("div", {
      children: T.description
    }),
    staticBannerSrc: T.getAssetURL(),
    title: T.title,
    trackingConfig: {
      id: S.id,
      linkType: u.U.CUSTOM_ACTIVITY_LINK,
      referrerId: C,
      activityCustomId: Z,
      guildId: null == (v = _.Z.getChannel(A.channel_id)) ? true : v.guild_id,
      channelId: A.channel_id,
      messageId: A.id
    }
  })
}