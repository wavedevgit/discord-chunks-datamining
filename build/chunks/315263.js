/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  default: () => j
}), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563);
var r = n(873546),
  i = n(636977),
  o = n(570140),
  a = n(493683),
  s = n(447543),
  l = n(230711),
  c = n(122613),
  u = n(508686),
  d = n(367907),
  f = n(421474),
  _ = n(812206),
  p = n(960904),
  h = n(830121),
  m = n(15274),
  g = n(924301),
  E = n(543842),
  v = n(754688),
  b = n(336197),
  y = n(977156),
  O = n(341907),
  I = n(540709),
  S = n(881706),
  T = n(701190),
  N = n(944486),
  A = n(914010),
  C = n(771845),
  R = n(626135),
  P = n(591759),
  w = n(782568),
  D = n(981631),
  L = n(46140);
async function x(e, t) {
  await o.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: D.IlC.APP
  })
}
async function M(e) {
  var t;
  let n = T.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await s.ZP.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === D.r2o.EXPIRED || n.state === D.r2o.BANNED || n.state === D.r2o.ERROR) {
    await x(n, e.code);
    return
  }
  let r = C.ZP.getFlattenedGuildIds(),
    i = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
  null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await x(n, e.code)
}
let k = {
  skipExtensionCheck: void 0,
  analyticsLocations: []
};

function j(e) {
  var t;
  let {
    skipExtensionCheck: o,
    analyticsLocations: s
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : k, T = (0, h.zO)(e);
  if (null != T && (T.type === p.g.INVITE || T.type === p.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), M(T), !0);
  if (null != T && (T.type === p.g.APP_DIRECTORY_PROFILE || T.type === p.g.APP_DIRECTORY_STOREFRONT || T.type === p.g.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, o;
    null == t || t.preventDefault();
    let {
      code: a
    } = T, {
      applicationId: s,
      skuId: l
    } = T.type === p.g.APP_DIRECTORY_PROFILE || T.type === p.g.APP_DIRECTORY_STOREFRONT ? {
      applicationId: a,
      skuId: void 0
    } : null !== (i = (0, f.Q)(a)) && void 0 !== i ? i : {
      applicationId: void 0,
      skuId: void 0
    }, c = null !== (o = A.Z.getGuildId()) && void 0 !== o ? o : void 0;
    return null == s ? (0, w.Z)(e) : (R.default.track(D.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: s,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: N.Z.getChannelId()
    }), n.e("11866").then(n.bind(n, 749681)).then(e => {
      let {
        transitionToGlobalDiscovery: t
      } = e, {
        GlobalDiscoveryTab: r
      } = n(49898), {
        GlobalDiscoveryAppsSections: i
      } = n(979007);
      t({
        tab: r.APPS,
        applicationId: s,
        section: (0, E.Z)(i, T.type === p.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), !0
  };
  if (null != T && T.type === p.g.ACTIVITY_BOOKMARK) return e => {
    var t;
    null == e || e.preventDefault();
    let {
      code: n,
      url: r
    } = T, i = _.Z.getApplication(n), o = null == i ? void 0 : null === (t = i.bot) || void 0 === t ? void 0 : t.id;
    if (null == o) return !1;
    let l = new URL(r);
    return a.Z.openPrivateChannel(o).then(async e => {
      let {
        customId: t,
        referrerId: r
      } = await (0, u.u)(n, l.searchParams.get("link_id"), l.searchParams.get("custom_id"), l.searchParams.get("referrer_id"));
      await (0, c.Z)({
        targetApplicationId: n,
        channelId: e,
        analyticsLocations: s,
        customId: t,
        referrerId: r
      })
    }).catch(() => {}), !0
  };
  if (null != T && T.type === p.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = T.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), !0
  };
  if (null != T && T.type === p.g.QUESTS_EMBED && (0, y.cB)({
      location: L.dr.EMBED_MOBILE
    })) return e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 341907)).then(e => {
    let {
      navigateToQuestHome: t
    } = e;
    t({
      fromContent: i.j.QUEST_SHARE_LINK,
      questId: T.code
    })
  }), !0);
  let {
    host: C,
    hostname: x,
    pathname: j,
    search: U,
    hash: G
  } = null !== (t = P.Z.toURLSafe(e)) && void 0 !== t ? t : {}, B = P.Z.isDiscordHostname(null != x ? x : null) || P.Z.isDiscordLocalhost(null != C ? C : null, null != x ? x : null);
  if (B && ((null == j ? void 0 : j.startsWith("/application-directory")) || (null == j ? void 0 : j.startsWith("/discovery/applications")))) {
    let e = j.split("/"),
      t = null == j ? void 0 : j.startsWith("/discovery/applications"),
      r = e[t ? 3 : 2],
      i = "search" === r,
      o = t && "categories" === r && "featured" !== e[4];
    return t => {
      let r, a, s;
      if (null == t || t.preventDefault(), i) {
        var l, c, u;
        let e = new URLSearchParams(U);
        r = null !== (l = e.get("q")) && void 0 !== l ? l : void 0, a = null !== (c = e.get("category_id")) && void 0 !== c ? c : void 0, s = null !== (u = e.get("page")) && void 0 !== u ? u : void 0
      } else o && (a = e[4]);
      return n.e("11866").then(n.bind(n, 749681)).then(e => {
        let {
          transitionToGlobalDiscovery: t
        } = e, {
          GlobalDiscoveryTab: i
        } = n(49898);
        t({
          tab: i.APPS,
          categoryId: null == a || Number.isNaN(a) ? void 0 : Number(a),
          page: null == s || Number.isNaN(s) ? void 0 : Number(s),
          query: r
        })
      }), !0
    }
  }
  if (null != j && B && P.Z.isAppRoute(j)) {
    let e = {
      navigationReplace: !1,
      openChannel: !0
    };
    return null != U && (e.search = U), null != G && (e.hash = G), t => (null == t || t.preventDefault(), (0, b.Z)(j, e), !0)
  }
  if (null != j && B) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(69580), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != T && T.type === p.g.APP_OAUTH2_LINK && d.ZP.trackWithMetadata(D.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), !0)
  }
  let V = (0, v.Ao)(j);
  if (null != j && B && null != V) return e => {
    null == e || e.preventDefault();
    let t = A.Z.getGuildId();
    null != V.guildId && "" !== V.guildId && V.guildId !== t && (0, b.Z)(D.Z5c.CHANNEL(V.guildId));
    let n = g.ZP.getGuildScheduledEvent(V.guildEventId);
    return null != n && (0, m.bO)({
      eventId: n.id
    }), !0
  };
  if (B && (null == j ? void 0 : j.startsWith("/settings/"))) {
    let {
      default: e
    } = n(722589), t = e(j);
    if (null != t) return e => (null == e || e.preventDefault(), l.Z.open(t.section, t.subsection, {
      openWithoutBackstack: !1,
      impressionSource: t.source,
      analyticsLocations: s
    }), !0)
  }
  return B && (null == j ? void 0 : j.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, O.navigateToQuestHome)({
    fromContent: i.j.QUEST_BADGE
  }), !0) : B && (null == j ? void 0 : j.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), n.e("11866").then(n.bind(n, 749681)).then(e => {
    let {
      transitionToGlobalDiscovery: t
    } = e, {
      GlobalDiscoveryTab: r
    } = n(49898);
    t({
      tab: r.SERVERS
    })
  }), !0) : o || null == (0, S.v)(e) ? void 0 : t => (null == t || t.preventDefault(), I.Z.show(e), !0)
}