/** Chunk was on web.js **/
/** chunk id: 352423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => Y
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js"), require("./134528.js"), require("./947204.js");
var Chunk607399 = require("./607399.js"),
  Chunk696292 = require("./696292.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308528 = require("./308528.js"),
  Chunk846293 = require("./846293.js"),
  Chunk795816 = require("./795816.js"),
  Chunk956549 = require("./956549.js"),
  Chunk257269 = require("./257269.js"),
  Chunk574152 = require("./574152.js"),
  Chunk58149 = require("./58149.js"),
  Chunk121401 = require("./121401.js"),
  Chunk587895 = require("./587895.js"),
  Chunk725606 = require("./725606.js"),
  Chunk167189 = require("./167189.js"),
  Chunk833291 = require("./833291.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk268313 = require("./268313.js"),
  Chunk376943 = require("./376943.js"),
  Chunk22007 = require("./22007.js"),
  Chunk677402 = require("./677402.js"),
  Chunk807876 = require("./807876.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk788995 = require("./788995.jsx"),
  Chunk556022 = require("./556022.js");
require("./345953.js");
var Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk299091 = require("./299091.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk711014 = require("./711014.js"),
  Chunk954571 = require("./954571.js"),
  Chunk67486 = require("./67486.js"),
  Chunk998218 = require("./998218.js"),
  Chunk975807 = require("./975807.js"),
  Chunk652215 = require("./652215.js");
require("./758836.js");
var Chunk654487 = require("./654487.js");
async function F(e, t) {
  await a.h.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: G.BRT.APP
  })
}
async function B(e) {
  var t, n;
  let r = P.A.getInvite(e.code);
  if (null == r) {
    let {
      invite: t
    } = await s.Ay.resolveInvite(e.code, "Markdown Link");
    r = t
  }
  if (null == r) return;
  if (r.state === G.elq.EXPIRED || r.state === G.elq.BANNED || r.state === G.elq.ERROR) return void await F(r, e.code);
  let i = x.Ay.getFlattenedGuildIds(),
    a = null == r || null == (t = r.guild) ? true : t.id,
    o = null != a && i.includes(a),
    l = false;
  if (o && null != r.roles && r.roles.length > 0) {
    let e = w.default.getId(),
      t = R.Ay.getMember(a, e),
      i = new Set(null != (n = null == t ? true : t.roles) ? n : []);
    l = r.roles.some(e => !i.has(e.id))
  }
  o && !l ? s.Ay.transitionToInviteSync(r) : await F(r, e.code)
}
let H = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function Y(e) {
  var t;
  let {
    skipExtensionCheck: a,
    analyticsLocations: s
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : H, w = (0, g.br)(e);
  if (null != w && (w.type === m.I.INVITE || w.type === m.I.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), B(w), true);
  if (null != w && (w.type === m.I.APP_DIRECTORY_PROFILE || w.type === m.I.APP_DIRECTORY_STOREFRONT || w.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: o
    } = w, {
      applicationId: s,
      skuId: l
    } = w.type === m.I.APP_DIRECTORY_PROFILE || w.type === m.I.APP_DIRECTORY_STOREFRONT ? {
      applicationId: o,
      skuId: true
    } : null != (i = (0, p.u)(o)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = L.A.getGuildId()) ? a : true;
    return null == s ? (0, U.A)(e) : (M.default.track(G.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: s,
      device_platform: r.Fr ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: D.A.getChannelId()
    }), n.e("38042").then(n.bind(n, 837057)).then(e => {
      let {
        transitionToGlobalDiscovery: t
      } = e, {
        GlobalDiscoveryTab: r
      } = n(488995), {
        GlobalDiscoveryAppsSections: i
      } = n(435220);
      t({
        tab: r.APPS,
        applicationId: s,
        section: (0, b.A)(i, w.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != w && w.type === m.I.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = w, a = _.A.getApplication(r), f = new URL(i), p = null != (t = f.searchParams.get("referrer_id")) ? t : true, m = (0, d.A)(), {
      currentChannelId: g,
      instanceId: E,
      isCurrentlyInInstance: y,
      canLaunchInChannel: b
    } = (0, h.t)(r);
    if (b) return !y && null != g && ((0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id")).then(async e => {
      let {
        customId: t
      } = e;
      await (0, l.su)({
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
      return null != e && (o.A.openPrivateChannel({
        recipientIds: e
      }).then(async e => {
        let {
          customId: t
        } = await (0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"));
        (0, c.A)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: s,
          customId: t,
          referrerId: p
        })
      }).catch(() => {}), true)
    }
  };
  if (null != w && w.type === m.I.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = w.code.split("-");
    return n.e("49607").then(n.bind(n, 811546)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != w && w.type === m.I.SOCIAL_LAYER_STOREFRONT) return e => {
    null == e || e.preventDefault();
    let [t, r] = w.code.split("-");
    return Promise.resolve().then(n.bind(n, 44724)).then(e => {
      let {
        default: n
      } = e;
      n({
        guildId: r,
        skuId: t
      })
    }), true
  };
  if (null != w && w.type === m.I.QUESTS_EMBED && (0, A.s)({
      location: V.rE.EMBED_MOBILE
    }) && !(0, j.I)()) return e => {
    var t, r, a;
    let o, s;
    null == e || e.preventDefault();
    let {
      search: l
    } = null != (t = k.A.toURLSafe(w.url)) ? t : {};
    if (null != l) {
      let e = new URLSearchParams(l);
      o = null != (r = e.get("sort")) ? r : true, s = null != (a = e.get("filter")) ? a : true
    }
    return Promise.resolve().then(n.bind(n, 545986)).then(e => {
      let {
        navigateToQuestHome: t
      } = e;
      t({
        fromContent: i.u.QUEST_SHARE_LINK,
        questId: w.code
      })
    }), true
  };
  let {
    host: R,
    hostname: P,
    pathname: x,
    search: F,
    hash: Y
  } = null != (t = k.A.toURLSafe(e)) ? t : {}, W = k.A.isDiscordHostname(null != P ? P : null) || k.A.isDiscordLocalhost(null != R ? R : null, null != P ? P : null);
  if (W && ((null == x ? true : x.startsWith("/application-directory")) || (null == x ? true : x.startsWith("/discovery/applications")))) {
    let e = x.split("/"),
      t = null == x ? true : x.startsWith("/discovery/applications"),
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
      return n.e("38042").then(n.bind(n, 837057)).then(e => {
        let {
          transitionToGlobalDiscovery: t
        } = e, {
          GlobalDiscoveryTab: i
        } = n(488995);
        t({
          tab: i.APPS,
          categoryId: null == o || Number.isNaN(o) ? true : Number(o),
          page: null == s || Number.isNaN(s) ? true : Number(s),
          query: r
        })
      }), true
    }
  }
  if (null != x && W && k.A.isAppRoute(x)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != F && (e.search = F), null != Y && (e.hash = Y), t => (null == t || t.preventDefault(), (0, v.A)(x, e), true)
  }
  if (null != x && W) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(200330), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != w && w.type === m.I.APP_OAUTH2_LINK && f.Ay.trackWithMetadata(G.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let K = (0, O.SK)(x);
  if (null != x && W && null != K) return e => {
    null == e || e.preventDefault();
    let t = L.A.getGuildId();
    null != K.guildId && "" !== K.guildId && K.guildId !== t && (0, v.A)(G.BVt.CHANNEL(K.guildId));
    let n = y.Ay.getGuildScheduledEvent(K.guildEventId);
    return null != n && (0, E.uR)({
      eventId: n.id
    }), true
  };
  if (W && (null == x ? true : x.startsWith("/settings/"))) {
    let {
      default: e
    } = n(849823), {
      openUserSettingsFromParsedUrl: t
    } = n(840065), r = e(x, F);
    if (null != r) return e => (null == e || e.preventDefault(), t({
      match: r,
      analyticsLocations: s,
      urlOrigin: "link_click"
    }), true)
  }
  if (W && (null == x ? true : x.startsWith("/playground"))) {
    let {
      parsePlaygroundUrl: e
    } = n(682492), {
      openPlayground: t
    } = n(965042), {
      collection: r,
      story: i
    } = e(x);
    return e => (null == e || e.preventDefault(), t(r, i), true)
  }
  return W && (null == x ? true : x.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)({
    fromContent: i.u.QUEST_BADGE
  }), true) : W && (null == x ? true : x.startsWith("/quest-home")) ? e => (null == e || e.preventDefault(), (0, T.pX)(G.BVt.QUEST_HOME_V2 + (null != F ? F : "")), true) : W && (null == x ? true : x.startsWith("/quest-preview")) ? e => {
    if (null == e || e.preventDefault(), (0, I.U)({
        location: V.rE.NAVIGATE_TO_QUEST_HOME_UTIL
      })) return (0, T.pX)(G.BVt.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(x.split("/").at(false))), true
  } : W && (null == x ? true : x.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), n.e("38042").then(n.bind(n, 837057)).then(e => {
    let {
      transitionToGlobalDiscovery: t
    } = e, {
      GlobalDiscoveryTab: r
    } = n(488995);
    t({
      tab: r.SERVERS
    })
  }), true) : a || null == (0, N.m)(e) ? true : t => (null == t || t.preventDefault(), C.A.show(e), true)
}