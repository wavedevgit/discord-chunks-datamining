/** Chunk was on web.js **/
/** chunk id: 96440, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => v
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

function v(e) {
  var t, n, v;
  let {
    application: A,
    customId: I,
    customLink: S,
    referrerId: T,
    message: C
  } = e, N = null == A || null == (t = A.bot) ? true : t.id, w = (0, c.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: A.id,
    botUserId: null == A || null == (n = A.bot) ? true : n.id
  }), R = null != A && (0, l.Ag)(A), P = null != N && R && w, {
    analyticsLocations: D
  } = (0, s.Ay)(a.A.ACTIVITY_CUSTOM_LINK), x = (0, i.bG)([h.A], () => h.A.getChannelId()), L = (0, b.et)(x), j = (0, i.bG)([E.Ay], () => {
    if (null == x) return;
    let e = E.Ay.getEmbeddedActivitiesForChannel(x).filter(e => e.applicationId === A.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), M = (0, i.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()), k = (0, y.A)(), U = L === b.xy.CAN_LAUNCH, G = null != j && (null == M ? true : M.compositeInstanceId) === j, V = null != I ? I : S.customId, F = [];
  U && F.push({
    label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
    trackingArea: f.kY.PLAY,
    onClick() {
      (0, g.su)({
        channelId: null != x ? x : true,
        applicationId: A.id,
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
        appId: A.id,
        botId: N,
        analyticsLocations: D,
        customId: V,
        referrerId: T
      })
    }
  });
  let B = (0, p.F)(A);
  return (0, r.jsx)(d.h, {
    actions: F,
    onClickContent: B,
    header: A.name,
    iconSrc: m.Ay.getApplicationIconURL({
      id: A.id,
      icon: A.icon,
      bot: A.bot
    }),
    info: (0, r.jsx)("div", {
      children: S.description
    }),
    staticBannerSrc: S.getAssetURL(),
    title: S.title,
    trackingConfig: {
      id: A.id,
      linkType: u.J.CUSTOM_ACTIVITY_LINK,
      referrerId: T,
      activityCustomId: V,
      guildId: null == (v = _.A.getChannel(C.channel_id)) ? true : v.guild_id,
      channelId: C.channel_id,
      messageId: C.id
    }
  })
}