/** Chunk was on 39251 **/
n.d(t, {
  b: () => j
}), n(653041), n(266796);
var r = n(200651);
n(192379);
var i = n(442837),
  a = n(100527),
  o = n(906732),
  l = n(783097),
  s = n(606192),
  c = n(812236),
  d = n(230171),
  u = n(758199),
  p = n(914498),
  m = n(208444),
  f = n(944486),
  h = n(81063),
  g = n(768581),
  _ = n(566620),
  b = n(317381),
  v = n(574952),
  y = n(374065),
  x = n(388032);

function j(e) {
  var t, n;
  let {
    application: j,
    customId: O,
    customLink: E,
    embedUrl: N,
    referrerId: C
  } = e, I = null == j ? void 0 : null === (t = j.bot) || void 0 === t ? void 0 : t.id, S = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: j.id,
    botUserId: null == j ? void 0 : null === (n = j.bot) || void 0 === n ? void 0 : n.id
  }), T = null != j && (0, l.ye)(j), P = null != I && T && S, {
    analyticsLocations: A
  } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK), w = (0, i.e7)([f.Z], () => f.Z.getChannelId()), Z = (0, y.KF)(w), k = (0, i.e7)([b.ZP], () => {
    if (null == w) return;
    let e = b.ZP.getEmbeddedActivitiesForChannel(w).filter(e => e.applicationId === j.id);
    return e.length > 0 ? e[0].compositeInstanceId : void 0
  }), R = (0, i.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()), D = (0, v.Z)(), L = Z === y.jy.CAN_LAUNCH, M = null != O ? O : E.custom_id, W = null != C ? C : E.referrer_id, F = [];
  L && F.push({
    label: null == k ? x.NW.string(x.t.cnBQPD) : x.NW.string(x.t.VJlc0d),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, _.G6)({
        channelId: null != w ? w : void 0,
        applicationId: j.id,
        isStart: null == k,
        instanceId: k,
        embeddedActivitiesManager: D,
        customId: M,
        referrerId: W,
        analyticsLocations: A
      })
    },
    disabledReason: null != k && (null == R ? void 0 : R.compositeInstanceId) === k ? x.NW.string(x.t.wJNK8P) : void 0
  }), P && F.push({
    label: null != E.primary_cta ? E.primary_cta : x.NW.string(x.t.JeK1Wl),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, s.W)({
        appId: j.id,
        botId: I,
        analyticsLocations: A,
        customId: M,
        referrerId: W
      })
    }
  });
  let U = (0, m.z)(j);
  return null != F && null != U && F.push(U), (0, r.jsx)(u.W, {
    actions: F,
    embedUrl: N,
    header: j.name,
    iconSrc: g.ZP.getApplicationIconURL({
      id: j.id,
      icon: j.icon,
      bot: j.bot
    }),
    info: (0, r.jsx)("div", {
      children: E.description
    }),
    staticBannerSrc: (0, h.xF)(j.id, E.asset_id, 512),
    title: E.title,
    trackingConfig: {
      id: j.id,
      linkType: d.U.CUSTOM_ACTIVITY_LINK,
      referrerId: W,
      activityCustomId: M
    }
  })
}