/** Chunk was on web.js **/
/** chunk id: 315263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => H
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk873546 = require("./873546.js"),
  Chunk636977 = require("./636977.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk447543 = require("./447543.js"),
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
  Chunk787695 = require("./787695.js"),
  Chunk36243 = require("./36243.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk540709 = require("./540709.jsx"),
  Chunk881706 = require("./881706.js");
require("./812513.js");
var Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk701190 = require("./701190.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk455971 = require("./455971.js"),
  Chunk591759 = require("./591759.js"),
  Chunk782568 = require("./782568.js"),
  Chunk981631 = require("./981631.js");
require("./215023.js");
var Chunk324805 = require("./324805.js");
async function F(e, t) {
  await a.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: G.IlC.APP
  })
}
async function B(e) {
  var t, n;
  let r = R.Z.getInvite(e.code);
  if (null == r) {
    let {
      invite: t
    } = await s.ZP.resolveInvite(e.code, "Markdown Link");
    r = t
  }
  if (null == r) return;
  if (r.state === G.r2o.EXPIRED || r.state === G.r2o.BANNED || r.state === G.r2o.ERROR) return void await F(r, e.code);
  let i = L.ZP.getFlattenedGuildIds(),
    a = null == r || null == (t = r.guild) ? true : t.id,
    o = null != a && i.includes(a),
    l = false;
  if (o && null != r.roles && r.roles.length > 0) {
    let e = P.default.getId(),
      t = w.ZP.getMember(a, e),
      i = new Set(null != (n = null == t ? true : t.roles) ? n : []);
    l = r.roles.some(e => !i.has(e.id))
  }
  o && !l ? s.ZP.transitionToInviteSync(r) : await F(r, e.code)
}
let V = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function H(e) {
  var t;
  let {
    skipExtensionCheck: a,
    analyticsLocations: s
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : V, P = (0, g.zO)(e);
  if (null != P && (P.type === m.g.INVITE || P.type === m.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), B(P), true);
  if (null != P && (P.type === m.g.APP_DIRECTORY_PROFILE || P.type === m.g.APP_DIRECTORY_STOREFRONT || P.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: o
    } = P, {
      applicationId: s,
      skuId: l
    } = P.type === m.g.APP_DIRECTORY_PROFILE || P.type === m.g.APP_DIRECTORY_STOREFRONT ? {
      applicationId: o,
      skuId: true
    } : null != (i = (0, p.Q)(o)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = x.Z.getGuildId()) ? a : true;
    return null == s ? (0, U.Z)(e) : (j.default.track(G.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: s,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: D.Z.getChannelId()
    }), Promise.resolve().then(n.bind(n, 749681)).then(e => {
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
        section: (0, y.Z)(i, P.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != P && P.type === m.g.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = P, a = _.Z.getApplication(r), f = new URL(i), p = null != (t = f.searchParams.get("referrer_id")) ? t : true, m = (0, d.Z)(), {
      currentChannelId: g,
      instanceId: E,
      isCurrentlyInInstance: b,
      canLaunchInChannel: y
    } = (0, h.v)(r);
    if (y) return !b && null != g && ((0, u.ur)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id")).then(async e => {
      let {
        customId: t
      } = e;
      await (0, l.G6)({
        channelId: g,
        applicationId: r,
        isStart: null == E,
        embeddedActivitiesManager: m,
        customId: t,
        referrerId: p,
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
        } = await (0, u.ur)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"));
        (0, c.Z)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: s,
          customId: t,
          referrerId: p
        })
      }).catch(() => {}), true)
    }
  };
  if (null != P && P.type === m.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = P.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != P && P.type === m.g.SOCIAL_LAYER_STOREFRONT) return e => {
    null == e || e.preventDefault();
    let [t, r] = P.code.split("-");
    return Promise.resolve().then(n.bind(n, 705338)).then(e => {
      let {
        default: n
      } = e;
      n({
        guildId: r,
        skuId: t
      })
    }), true
  };
  if (null != P && P.type === m.g.QUESTS_EMBED && (0, S.c)({
      location: Z.dr.EMBED_MOBILE
    }) && !(0, M.C)()) return e => {
    var t, r, a;
    let o, s;
    null == e || e.preventDefault();
    let {
      search: l
    } = null != (t = k.Z.toURLSafe(P.url)) ? t : {};
    if (null != l) {
      let e = new URLSearchParams(l);
      o = null != (r = e.get("sort")) ? r : true, s = null != (a = e.get("filter")) ? a : true
    }
    return Promise.resolve().then(n.bind(n, 110560)).then(e => {
      let {
        navigateToQuestHome: t
      } = e;
      t({
        fromContent: i.j.QUEST_SHARE_LINK,
        questId: P.code
      })
    }), true
  };
  let {
    host: w,
    hostname: R,
    pathname: L,
    search: F,
    hash: H
  } = null != (t = k.Z.toURLSafe(e)) ? t : {}, Y = k.Z.isDiscordHostname(null != R ? R : null) || k.Z.isDiscordLocalhost(null != w ? w : null, null != R ? R : null);
  if (Y && ((null == L ? true : L.startsWith("/application-directory")) || (null == L ? true : L.startsWith("/discovery/applications")))) {
    let e = L.split("/"),
      t = null == L ? true : L.startsWith("/discovery/applications"),
      r = e[t ? 3 : 2],
      i = "search" === r,
      a = t && "categories" === r && "featured" !== e[4];
    return t => {
      let r, o, s;
      if (null == t || t.preventDefault(), i) {
        var l, c, u;
        let e = new URLSearchParams(F);
        r = null != (l = e.get("q")) ? l : true, o = null != (c = e.get("category_id")) ? c : true, s = null != (u = e.get("page")) ? u : true
      } else a && (o = e[4]);
      return Promise.resolve().then(n.bind(n, 749681)).then(e => {
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
  if (null != L && Y && k.Z.isAppRoute(L)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != F && (e.search = F), null != H && (e.hash = H), t => (null == t || t.preventDefault(), (0, v.Z)(L, e), true)
  }
  if (null != L && Y) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(69580), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != P && P.type === m.g.APP_OAUTH2_LINK && f.ZP.trackWithMetadata(G.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let W = (0, O.Ao)(L);
  if (null != L && Y && null != W) return e => {
    null == e || e.preventDefault();
    let t = x.Z.getGuildId();
    null != W.guildId && "" !== W.guildId && W.guildId !== t && (0, v.Z)(G.Z5c.CHANNEL(W.guildId));
    let n = b.ZP.getGuildScheduledEvent(W.guildEventId);
    return null != n && (0, E.bO)({
      eventId: n.id
    }), true
  };
  if (Y && (null == L ? true : L.startsWith("/settings/"))) {
    let {
      default: e
    } = n(722589), {
      openUserSettingsFromParsedUrl: t
    } = n(518596), r = e(L, F);
    if (null != r) return e => (null == e || e.preventDefault(), t({
      match: r,
      analyticsLocations: s,
      urlOrigin: "link_click"
    }), true)
  }
  if (Y && (null == L ? true : L.startsWith("/playground"))) {
    let {
      parsePlaygroundUrl: e
    } = n(857494), {
      openPlayground: t
    } = n(2419), {
      collection: r,
      story: i
    } = e(L);
    return e => (null == e || e.preventDefault(), t(r, i), true)
  }
  return Y && (null == L ? true : L.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, T.navigateToQuestHome)({
    fromContent: i.j.QUEST_BADGE
  }), true) : Y && (null == L ? true : L.startsWith("/quest-home")) ? e => (null == e || e.preventDefault(), (0, C.uL)(G.Z5c.QUEST_HOME_V2 + (null != F ? F : "")), true) : Y && (null == L ? true : L.startsWith("/quest-preview")) ? e => {
    if (null == e || e.preventDefault(), (0, I.T)({
        location: Z.dr.NAVIGATE_TO_QUEST_HOME_UTIL
      })) return (0, C.uL)(G.Z5c.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(L.split("/").at(false))), true
  } : Y && (null == L ? true : L.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 749681)).then(e => {
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