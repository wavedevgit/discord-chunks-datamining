/** Chunk was on 91173 **/
/** chunk id: 50523, original params: e,t,n (module,exports,require) **/
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
    customLink: y,
    embedUrl: x,
    referrerId: j
  } = e, I = null == O || null == (t = O.bot) ? true : t.id, S = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: O.id,
    botUserId: null == O || null == (n = O.bot) ? true : n.id
  }), T = null != O && (0, s.ye)(O), P = null != I && T && S, {
    analyticsLocations: N
  } = (0, o.ZP)(l.Z.ACTIVITY_CUSTOM_LINK), A = (0, i.e7)([f.Z], () => f.Z.getChannelId()), w = (0, E.KF)(A), Z = (0, i.e7)([h.ZP], () => {
    if (null == A) return;
    let e = h.ZP.getEmbeddedActivitiesForChannel(A).filter(e => e.applicationId === O.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), R = (0, i.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()), D = (0, b.Z)(), L = w === E.jy.CAN_LAUNCH, M = null != v ? v : y.customId, k = [];
  L && k.push({
    label: null == Z ? C.intl.string(C.t.RscU7O) : C.intl.string(C.t.VJlc0d),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, _.G6)({
        channelId: null != A ? A : true,
        applicationId: O.id,
        isStart: null == Z,
        embeddedActivitiesManager: D,
        customId: M,
        referrerId: j,
        analyticsLocations: N
      })
    },
    disabledReason: null != Z && (null == R ? true : R.compositeInstanceId) === Z ? C.intl.string(C.t.wJNK8P) : true
  }), P && !L && k.push({
    label: C.intl.string(C.t.JeK1Wl),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, a.W)({
        appId: O.id,
        botId: I,
        analyticsLocations: N,
        customId: M,
        referrerId: j
      })
    }
  });
  let U = (0, m.G)(O);
  return (0, r.jsx)(d.W, {
    actions: k,
    onClickContent: U,
    embedUrl: x,
    header: O.name,
    iconSrc: g.ZP.getApplicationIconURL({
      id: O.id,
      icon: O.icon,
      bot: O.bot
    }),
    info: (0, r.jsx)("div", {
      children: y.description
    }),
    staticBannerSrc: y.getAssetURL(),
    title: y.title,
    trackingConfig: {
      id: O.id,
      linkType: u.U.CUSTOM_ACTIVITY_LINK,
      referrerId: j,
      activityCustomId: M
    }
  })
}