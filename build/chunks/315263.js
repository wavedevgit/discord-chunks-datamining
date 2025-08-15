/** Chunk was on web.js **/
/** chunk id: 315263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => B
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js");
var Chunk873546 = require("./873546.js"),
  Chunk636977 = require("./636977.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk447543 = require("./447543.js"),
  Chunk230711 = require("./230711.js"),
  Chunk566620 = require("./566620.js"),
  Chunk122613 = require("./122613.js"),
  Chunk649256 = require("./649256.js"),
  Chunk574952 = require("./574952.js"),
  Chunk367907 = require("./367907.js"),
  Chunk421474 = require("./421474.js"),
  Chunk812206 = require("./812206.js"),
  Chunk506895 = require("./506895.js"),
  Chunk960904 = require("./960904.js"),
  Chunk830121 = require("./830121.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk543842 = require("./543842.js"),
  Chunk754688 = require("./754688.js"),
  Chunk336197 = require("./336197.js"),
  Chunk977156 = require("./977156.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk540709 = require("./540709.jsx"),
  Chunk881706 = require("./881706.js"),
  Chunk701190 = require("./701190.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk591759 = require("./591759.js"),
  Chunk782568 = require("./782568.js"),
  Chunk981631 = require("./981631.js");
require("./215023.js");
var Chunk46140 = require("./46140.js");
async function j(e, t) {
  await a.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: M.IlC.APP
  })
}
async function U(e) {
  var t;
  let n = C.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await s.ZP.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === M.r2o.EXPIRED || n.state === M.r2o.BANNED || n.state === M.r2o.ERROR) return void await j(n, e.code);
  let r = w.ZP.getFlattenedGuildIds(),
    i = null == n || null == (t = n.guild) ? true : t.id;
  null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await j(n, e.code)
}
let G = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function B(e) {
  var t;
  let {
    skipExtensionCheck: a,
    analyticsLocations: s
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : G, C = (0, E.zO)(e);
  if (null != C && (C.type === g.g.INVITE || C.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), U(C), true);
  if (null != C && (C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT || C.type === g.g.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: o
    } = C, {
      applicationId: s,
      skuId: l
    } = C.type === g.g.APP_DIRECTORY_PROFILE || C.type === g.g.APP_DIRECTORY_STOREFRONT ? {
      applicationId: o,
      skuId: true
    } : null != (i = (0, p.Q)(o)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = P.Z.getGuildId()) ? a : true;
    return null == s ? (0, x.Z)(e) : (D.default.track(M.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: s,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: R.Z.getChannelId()
    }), n.e("30610").then(n.bind(n, 749681)).then(e => {
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
        section: (0, O.Z)(i, C.type === g.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != C && C.type === g.g.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = C, a = h.Z.getApplication(r), l = new URL(i), _ = null != (t = l.searchParams.get("referrer_id")) ? t : true, p = (0, f.Z)(), {
      currentChannelId: g,
      instanceId: E,
      isCurrentlyInInstance: b,
      canLaunchInChannel: y
    } = (0, m.v)(r);
    if (y) return !b && null != g && ((0, d.ur)(r, l.searchParams.get("link_id"), l.searchParams.get("custom_id")).then(async e => {
      let {
        customId: t
      } = e;
      await (0, c.G6)({
        channelId: g,
        applicationId: r,
        isStart: null == E,
        embeddedActivitiesManager: p,
        customId: t,
        referrerId: _,
        analyticsLocations: s
      })
    }).catch(() => {}), true);
    {
      let e = null == a || null == (n = a.bot) ? true : n.id;
      return null != e && (o.Z.openPrivateChannel({
        recipientIds: e
      }).then(async e => {
        let {
          customId: t
        } = await (0, d.ur)(r, l.searchParams.get("link_id"), l.searchParams.get("custom_id"));
        (0, u.Z)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: s,
          customId: t,
          referrerId: _
        })
      }).catch(() => {}), true)
    }
  };
  if (null != C && C.type === g.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = C.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != C && C.type === g.g.QUESTS_EMBED && (0, T.cB)({
      location: k.dr.EMBED_MOBILE
    })) return e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 110560)).then(e => {
    let {
      navigateToQuestHome: t
    } = e;
    t({
      fromContent: i.j.QUEST_SHARE_LINK,
      questId: C.code
    })
  }), true);
  let {
    host: w,
    hostname: j,
    pathname: B,
    search: V,
    hash: F
  } = null != (t = L.Z.toURLSafe(e)) ? t : {}, Z = L.Z.isDiscordHostname(null != j ? j : null) || L.Z.isDiscordLocalhost(null != w ? w : null, null != j ? j : null);
  if (Z && ((null == B ? true : B.startsWith("/application-directory")) || (null == B ? true : B.startsWith("/discovery/applications")))) {
    let e = B.split("/"),
      t = null == B ? true : B.startsWith("/discovery/applications"),
      r = e[t ? 3 : 2],
      i = "search" === r,
      a = t && "categories" === r && "featured" !== e[4];
    return t => {
      let r, o, s;
      if (null == t || t.preventDefault(), i) {
        var l, c, u;
        let e = new URLSearchParams(V);
        r = null != (l = e.get("q")) ? l : true, o = null != (c = e.get("category_id")) ? c : true, s = null != (u = e.get("page")) ? u : true
      } else a && (o = e[4]);
      return n.e("30610").then(n.bind(n, 749681)).then(e => {
        let {
          transitionToGlobalDiscovery: t
        } = e, {
          GlobalDiscoveryTab: i
        } = n(49898);
        t({
          tab: i.APPS,
          categoryId: null == o || Number.isNaN(o) ? true : Number(o),
          page: null == s || Number.isNaN(s) ? true : Number(s),
          query: r
        })
      }), true
    }
  }
  if (null != B && Z && L.Z.isAppRoute(B)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != V && (e.search = V), null != F && (e.hash = F), t => (null == t || t.preventDefault(), (0, I.Z)(B, e), true)
  }
  if (null != B && Z) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(69580), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != C && C.type === g.g.APP_OAUTH2_LINK && _.ZP.trackWithMetadata(M.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let H = (0, v.Ao)(B);
  if (null != B && Z && null != H) return e => {
    null == e || e.preventDefault();
    let t = P.Z.getGuildId();
    null != H.guildId && "" !== H.guildId && H.guildId !== t && (0, I.Z)(M.Z5c.CHANNEL(H.guildId));
    let n = y.ZP.getGuildScheduledEvent(H.guildEventId);
    return null != n && (0, b.bO)({
      eventId: n.id
    }), true
  };
  if (Z && (null == B ? true : B.startsWith("/settings/"))) {
    let {
      default: e
    } = n(722589), t = e(B);
    if (null != t) return e => (null == e || e.preventDefault(), l.Z.open(t.section, t.subsection, {
      openWithoutBackstack: false,
      impressionSource: t.source,
      analyticsLocations: s
    }), true)
  }
  return Z && (null == B ? true : B.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)({
    fromContent: i.j.QUEST_BADGE
  }), true) : Z && (null == B ? true : B.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), n.e("30610").then(n.bind(n, 749681)).then(e => {
    let {
      transitionToGlobalDiscovery: t
    } = e, {
      GlobalDiscoveryTab: r
    } = n(49898);
    t({
      tab: r.SERVERS
    })
  }), true) : a || null == (0, N.v)(e) ? true : t => (null == t || t.preventDefault(), A.Z.show(e), true)
}