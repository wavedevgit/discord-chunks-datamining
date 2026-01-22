/** Chunk was on web.js **/
/** chunk id: 96440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => A
}), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk522305 = require("./522305.js"),
  Chunk735991 = require("./735991.js"),
  Chunk361926 = require("./361926.js"),
  Chunk485724 = require("./485724.jsx"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk574660 = require("./574660.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk486020 = require("./486020.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk574152 = require("./574152.js"),
  Chunk782091 = require("./782091.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
  var t, n, A;
  let {
    application: v,
    customId: S,
    customLink: I,
    referrerId: T,
    message: C
  } = e, N = null == v || null == (t = v.bot) ? true : t.id, R = (0, c.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: v.id,
    botUserId: null == v || null == (n = v.bot) ? true : n.id
  }), w = null != v && (0, l.Ag)(v), P = null != N && w && R, {
    analyticsLocations: D
  } = (0, s.Ay)(a.A.ACTIVITY_CUSTOM_LINK), x = (0, i.bG)([h.A], () => h.A.getChannelId()), L = (0, y.et)(x), j = (0, i.bG)([E.Ay], () => {
    if (null == x) return;
    let e = E.Ay.getEmbeddedActivitiesForChannel(x).filter(e => e.applicationId === v.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), M = (0, i.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), k = (0, b.A)(), U = L === y.xy.CAN_LAUNCH, G = null != j && (null == M ? true : M.compositeInstanceId) === j, V = null != S ? S : I.customId, F = [];
  U && F.push({
    label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
    trackingArea: f.kY.PLAY,
    onClick() {
      (0, g.su)({
        channelId: null != x ? x : true,
        applicationId: v.id,
        isStart: null == j,
        embeddedActivitiesManager: k,
        customId: V,
        referrerId: T,
        analyticsLocations: D
      })
    },
    disabled: G
  }), P && !U && F.push({
    label: O.intl.string(O.t.JeK1Wg),
    trackingArea: f.kY.PLAY,
    onClick() {
      (0, o.Q)({
        appId: v.id,
        botId: N,
        analyticsLocations: D,
        customId: V,
        referrerId: T
      })
    }
  });
  let B = (0, p.F)(v);
  return (0, r.jsx)(d.h, {
    actions: F,
    onClickContent: B,
    header: v.name,
    iconSrc: m.Ay.getApplicationIconURL({
      id: v.id,
      icon: v.icon,
      bot: v.bot
    }),
    info: (0, r.jsx)("div", {
      children: I.description
    }),
    staticBannerSrc: I.getAssetURL(),
    title: I.title,
    trackingConfig: {
      id: v.id,
      linkType: u.J.CUSTOM_ACTIVITY_LINK,
      referrerId: T,
      activityCustomId: V,
      guildId: null == (A = _.A.getChannel(C.channel_id)) ? true : A.guild_id,
      channelId: C.channel_id,
      messageId: C.id
    }
  })
}