/** Chunk was on 59288 **/
n.d(t, {
  b: () => E
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

function E(e) {
  var t, n;
  let {
    application: E,
    customId: O,
    customLink: j,
    embedUrl: N,
    referrerId: C
  } = e, I = null == E ? void 0 : null === (t = E.bot) || void 0 === t ? void 0 : t.id, S = (0, c.ms)({
    context: {
      type: "contextless"
    },
    applicationId: E.id,
    botUserId: null == E ? void 0 : null === (n = E.bot) || void 0 === n ? void 0 : n.id
  }), T = null != E && (0, l.ye)(E), P = null != I && T && S, {
    analyticsLocations: A
  } = (0, o.ZP)(a.Z.ACTIVITY_CUSTOM_LINK), w = (0, i.e7)([f.Z], () => f.Z.getChannelId()), Z = (0, y.KF)(w), k = (0, i.e7)([b.ZP], () => {
    if (null == w) return;
    let e = b.ZP.getEmbeddedActivitiesForChannel(w).filter(e => e.applicationId === E.id);
    return e.length > 0 ? e[0].compositeInstanceId : void 0
  }), R = (0, i.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()), D = (0, v.Z)(), L = Z === y.jy.CAN_LAUNCH, M = null != O ? O : j.custom_id, W = null != C ? C : j.referrer_id, F = [];
  L && F.push({
    label: null == k ? x.NW.string(x.t.cnBQPD) : x.NW.string(x.t.VJlc0d),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, _.G6)({
        channelId: null != w ? w : void 0,
        applicationId: E.id,
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
    label: null != j.primary_cta ? j.primary_cta : x.NW.string(x.t.JeK1Wl),
    trackingArea: p.j_.PLAY,
    onClick() {
      (0, s.W)({
        appId: E.id,
        botId: I,
        analyticsLocations: A,
        customId: M,
        referrerId: W
      })
    }
  });
  let U = (0, m.z)(E);
  return null != F && null != U && F.push(U), (0, r.jsx)(u.W, {
    actions: F,
    embedUrl: N,
    header: E.name,
    iconSrc: g.ZP.getApplicationIconURL({
      id: E.id,
      icon: E.icon,
      bot: E.bot
    }),
    info: (0, r.jsx)("div", {
      children: j.description
    }),
    staticBannerSrc: (0, h.xF)(E.id, j.asset_id, 512),
    title: j.title,
    trackingConfig: {
      id: E.id,
      linkType: d.U.CUSTOM_ACTIVITY_LINK,
      referrerId: W,
      activityCustomId: M
    }
  })
}