/** Chunk was on 64935 **/
/** chunk id: 96440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => E
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
  Chunk625180 = require("./625180.js"),
  Chunk207371 = require("./207371.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk486020 = require("./486020.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk574152 = require("./574152.js"),
  Chunk782091 = require("./782091.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  var t, n, E;
  let {
    application: j,
    customId: C,
    customLink: I,
    referrerId: S,
    message: T
  } = e, N = null == j || null == (t = j.bot) ? true : t.id, P = (0, c.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: j.id,
    botUserId: null == j || null == (n = j.bot) ? true : n.id
  }), w = null != j && (0, o.Ag)(j), R = null != N && w && P, {
    analyticsLocations: D
  } = (0, a.Ay)(l.A.ACTIVITY_CUSTOM_LINK), L = (0, i.bG)([h.A], () => h.A.getChannelId()), M = (0, x.et)(L), k = (0, i.bG)([y.Ay], () => {
    if (null == L) return;
    let e = y.Ay.getEmbeddedActivitiesForChannel(L).filter(e => e.applicationId === j.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), U = (0, i.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()), G = (0, v.A)(), B = M === x.xy.CAN_LAUNCH, F = null != k && (null == U ? true : U.compositeInstanceId) === k, H = null != C ? C : I.customId, V = (0, g.e)(j), z = [];
  V ? z.push({
    label: O.intl.string(O.t.RscU7I),
    trackingArea: p.kY.PLAY,
    onClick() {
      f.A.launchFrame({
        applicationId: j.id
      })
    }
  }) : (B && z.push({
    label: null == k ? O.intl.string(O.t.RscU7I) : F ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
    trackingArea: p.kY.PLAY,
    onClick() {
      (0, A.su)({
        channelId: null != L ? L : true,
        applicationId: j.id,
        isStart: null == k,
        embeddedActivitiesManager: G,
        customId: H,
        referrerId: S,
        analyticsLocations: D
      })
    },
    disabled: F
  }), R && !B && z.push({
    label: O.intl.string(O.t.JeK1Wg),
    trackingArea: p.kY.PLAY,
    onClick() {
      (0, s.Q)({
        appId: j.id,
        botId: N,
        analyticsLocations: D,
        customId: H,
        referrerId: S
      })
    }
  }));
  let W = (0, m.F)(j);
  return (0, r.jsx)(d.h, {
    actions: z,
    onClickContent: W,
    header: j.name,
    iconSrc: b.Ay.getApplicationIconURL({
      id: j.id,
      icon: j.icon,
      bot: j.bot
    }),
    info: (0, r.jsx)("div", {
      children: I.description
    }),
    staticBannerSrc: I.getAssetURL(),
    title: I.title,
    trackingConfig: {
      id: j.id,
      linkType: u.J.CUSTOM_ACTIVITY_LINK,
      referrerId: S,
      activityCustomId: H,
      guildId: null == (E = _.A.getChannel(T.channel_id)) ? true : E.guild_id,
      channelId: T.channel_id,
      messageId: T.id
    }
  })
}