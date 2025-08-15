/** Chunk was on 66866 **/
/** chunk id: 50523, original params: e,t,n (module,exports,require) **/
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
  Chunk944486 = require("./944486.js"),
  Chunk768581 = require("./768581.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk574952 = require("./574952.js"),
  Chunk374065 = require("./374065.js"),
  Chunk388032 = require("./388032.jsx");

function v(e) {
  var t, n;
  let {
    application: v,
    customId: O,
    customLink: y,
    embedUrl: x,
    referrerId: j
  } = e, I = null == v || null == (t = v.bot) ? true : t.id, S = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: v.id,
    botUserId: null == v || null == (n = v.bot) ? true : n.id
  }), T = null != v && (0, s.ye)(v), P = null != I && T && S, {
    analyticsLocations: N
  } = (0, a.ZP)(l.Z.ACTIVITY_CUSTOM_LINK), A = (0, i.e7)([f.Z], () => f.Z.getChannelId()), w = (0, E.KF)(A), Z = (0, i.e7)([h.ZP], () => {
    if (null == A) return;
    let e = h.ZP.getEmbeddedActivitiesForChannel(A).filter(e => e.applicationId === v.id);
    return e.length > 0 ? e[0].compositeInstanceId : true
  }), R = (0, i.e7)([h.ZP], () => h.ZP.getCurrentEmbeddedActivity()), L = (0, b.Z)(), D = w === E.jy.CAN_LAUNCH, M = null != O ? O : y.customId, k = [];
  D && k.push({
    label: null == Z ? C.intl.string(C.t.RscU7O) : C.intl.string(C.t.VJlc0d),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, g.G6)({
        channelId: null != A ? A : true,
        applicationId: v.id,
        isStart: null == Z,
        embeddedActivitiesManager: L,
        customId: M,
        referrerId: j,
        analyticsLocations: N
      })
    },
    disabledReason: null != Z && (null == R ? true : R.compositeInstanceId) === Z ? C.intl.string(C.t.wJNK8P) : true
  }), P && !D && k.push({
    label: C.intl.string(C.t.JeK1Wl),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, o.W)({
        appId: v.id,
        botId: I,
        analyticsLocations: N,
        customId: M,
        referrerId: j
      })
    }
  });
  let U = (0, m.G)(v);
  return (0, r.jsx)(d.W, {
    actions: k,
    onClickContent: U,
    embedUrl: x,
    header: v.name,
    iconSrc: _.ZP.getApplicationIconURL({
      id: v.id,
      icon: v.icon,
      bot: v.bot
    }),
    info: (0, r.jsx)("div", {
      children: y.description
    }),
    staticBannerSrc: y.getAssetURL(),
    title: y.title,
    trackingConfig: {
      id: v.id,
      linkType: u.U.CUSTOM_ACTIVITY_LINK,
      referrerId: j,
      activityCustomId: M
    }
  })
}