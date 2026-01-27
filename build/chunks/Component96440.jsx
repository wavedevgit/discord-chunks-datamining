/** Chunk was on 92917 **/
/** chunk id: 96440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => x
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

function x(e) {
  var t, n, x;
  let {
    application: O,
    customId: E,
    customLink: j,
    referrerId: C,
    message: I
  } = e, S = null == O || null == (t = O.bot) ? true : t.id, T = (0, c.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: O.id,
    botUserId: null == O || null == (n = O.bot) ? true : n.id
  }), N = null != O && (0, o.Ag)(O), P = null != S && N && T, {
    analyticsLocations: w
  } = (0, a.Ay)(l.A.ACTIVITY_CUSTOM_LINK), R = (0, i.bG)([g.A], () => g.A.getChannelId()), D = (0, y.et)(R), L = (0, i.bG)([b.Ay], () => {
    if (null == R) return;
    let e = b.Ay.getEmbeddedActivitiesForChannel(R).filter(e => e.applicationId === O.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), M = (0, i.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()), k = (0, A.A)(), U = D === y.xy.CAN_LAUNCH, G = null != L && (null == M ? true : M.compositeInstanceId) === L, B = null != E ? E : j.customId, F = [];
  U && F.push({
    label: null == L ? v.intl.string(v.t.RscU7I) : G ? v.intl.string(v.t.DPfdsq) : v.intl.string(v.t.sqe0hj),
    trackingArea: p.kY.PLAY,
    onClick() {
      (0, _.su)({
        channelId: null != R ? R : true,
        applicationId: O.id,
        isStart: null == L,
        embeddedActivitiesManager: k,
        customId: B,
        referrerId: C,
        analyticsLocations: w
      })
    },
    disabled: G
  }), P && !U && F.push({
    label: v.intl.string(v.t.JeK1Wg),
    trackingArea: p.kY.PLAY,
    onClick() {
      (0, s.Q)({
        appId: O.id,
        botId: S,
        analyticsLocations: w,
        customId: B,
        referrerId: C
      })
    }
  });
  let H = (0, m.F)(O);
  return (0, r.jsx)(d.h, {
    actions: F,
    onClickContent: H,
    header: O.name,
    iconSrc: h.Ay.getApplicationIconURL({
      id: O.id,
      icon: O.icon,
      bot: O.bot
    }),
    info: (0, r.jsx)("div", {
      children: j.description
    }),
    staticBannerSrc: j.getAssetURL(),
    title: j.title,
    trackingConfig: {
      id: O.id,
      linkType: u.J.CUSTOM_ACTIVITY_LINK,
      referrerId: C,
      activityCustomId: B,
      guildId: null == (x = f.A.getChannel(I.channel_id)) ? true : x.guild_id,
      channelId: I.channel_id,
      messageId: I.id
    }
  })
}