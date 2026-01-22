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
    } = await o.Ay.resolveInvite(e.code, "Markdown Link");
    r = t
  }
  if (null == r) return;
  if (r.state === G.elq.EXPIRED || r.state === G.elq.BANNED || r.state === G.elq.ERROR) return void await F(r, e.code);
  let i = L.Ay.getFlattenedGuildIds(),
    a = null == r || null == (t = r.guild) ? true : t.id,
    s = null != a && i.includes(a),
    l = false;
  if (s && null != r.roles && r.roles.length > 0) {
    let e = R.default.getId(),
      t = w.Ay.getMember(a, e),
      i = new Set(null != (n = null == t ? true : t.roles) ? n : []);
    l = r.roles.some(e => !i.has(e.id))
  }
  s && !l ? o.Ay.transitionToInviteSync(r) : await F(r, e.code)
}
let H = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function Y(e) {
  var t;
  let {
    skipExtensionCheck: a,
    analyticsLocations: o
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : H, R = (0, g.br)(e);
  if (null != R && (R.type === m.I.INVITE || R.type === m.I.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), B(R), true);
  if (null != R && (R.type === m.I.APP_DIRECTORY_PROFILE || R.type === m.I.APP_DIRECTORY_STOREFRONT || R.type === m.I.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: s
    } = R, {
      applicationId: o,
      skuId: l
    } = R.type === m.I.APP_DIRECTORY_PROFILE || R.type === m.I.APP_DIRECTORY_STOREFRONT ? {
      applicationId: s,
      skuId: true
    } : null != (i = (0, p.u)(s)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = x.A.getGuildId()) ? a : true;
    return null == o ? (0, U.A)(e) : (j.default.track(G.HAw.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: o,
      device_platform: r.Fr ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: D.A.getChannelId()
    }), Promise.resolve().then(n.bind(n, 837057)).then(e => {
      let {
        transitionToGlobalDiscovery: t
      } = e, {
        GlobalDiscoveryTab: r
      } = n(488995), {
        GlobalDiscoveryAppsSections: i
      } = n(435220);
      t({
        tab: r.APPS,
        applicationId: o,
        section: (0, y.A)(i, R.type === m.I.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != R && R.type === m.I.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = R, a = _.A.getApplication(r), f = new URL(i), p = null != (t = f.searchParams.get("referrer_id")) ? t : true, m = (0, d.A)(), {
      currentChannelId: g,
      instanceId: E,
      isCurrentlyInInstance: b,
      canLaunchInChannel: y
    } = (0, h.t)(r);
    if (y) return !b && null != g && ((0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id")).then(async e => {
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
        analyticsLocations: o
      })
    }).catch(() => {}), true);
    {
      let e = null == a || null == (n = a.bot) ? true : n.id;
      return null != e && (s.A.openPrivateChannel({
        recipientIds: e
      }).then(async e => {
        let {
          customId: t
        } = await (0, u.d9)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"));
        (0, c.A)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: o,
          customId: t,
          referrerId: p
        })
      }).catch(() => {}), true)
    }
  };
  if (null != R && R.type === m.I.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = R.code.split("-");
    return n.e("49607").then(n.bind(n, 811546)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != R && R.type === m.I.SOCIAL_LAYER_STOREFRONT) return e => {
    null == e || e.preventDefault();
    let [t, r] = R.code.split("-");
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
  if (null != R && R.type === m.I.QUESTS_EMBED && (0, v.s)({
      location: V.rE.EMBED_MOBILE
    }) && !(0, M.I)()) return e => {
    var t, r, a;
    let s, o;
    null == e || e.preventDefault();
    let {
      search: l
    } = null != (t = k.A.toURLSafe(R.url)) ? t : {};
    if (null != l) {
      let e = new URLSearchParams(l);
      s = null != (r = e.get("sort")) ? r : true, o = null != (a = e.get("filter")) ? a : true
    }
    return Promise.resolve().then(n.bind(n, 545986)).then(e => {
      let {
        navigateToQuestHome: t
      } = e;
      t({
        fromContent: i.u.QUEST_SHARE_LINK,
        questId: R.code
      })
    }), true
  };
  let {
    host: w,
    hostname: P,
    pathname: L,
    search: F,
    hash: Y
  } = null != (t = k.A.toURLSafe(e)) ? t : {}, W = k.A.isDiscordHostname(null != P ? P : null) || k.A.isDiscordLocalhost(null != w ? w : null, null != P ? P : null);
  if (W && ((null == L ? true : L.startsWith("/application-directory")) || (null == L ? true : L.startsWith("/discovery/applications")))) {
    let e = L.split("/"),
      t = null == L ? true : L.startsWith("/discovery/applications"),
      r = e[t ? 3 : 2],
      i = "search" === r,
      a = t && "categories" === r && "featured" !== e[4];
    return t => {
      let r, s, o;
      if (null == t || t.preventDefault(), i) {
        var l, c, u;
        let e = new URLSearchParams(F);
        r = null != (l = e.get("q")) ? l : true, s = null != (c = e.get("category_id")) ? c : true, o = null != (u = e.get("page")) ? u : true
      } else a && (s = e[4]);
      return Promise.resolve().then(n.bind(n, 837057)).then(e => {
        let {
          transitionToGlobalDiscovery: t
        } = e, {
          GlobalDiscoveryTab: i
        } = n(488995);
        t({
          tab: i.APPS,
          categoryId: null == s || Number.isNaN(s) ? true : Number(s),
          page: null == o || Number.isNaN(o) ? true : Number(o),
          query: r
        })
      }), true
    }
  }
  if (null != L && W && k.A.isAppRoute(L)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != F && (e.search = F), null != Y && (e.hash = Y), t => (null == t || t.preventDefault(), (0, A.A)(L, e), true)
  }
  if (null != L && W) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(200330), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != R && R.type === m.I.APP_OAUTH2_LINK && f.Ay.trackWithMetadata(G.HAw.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let K = (0, O.SK)(L);
  if (null != L && W && null != K) return e => {
    null == e || e.preventDefault();
    let t = x.A.getGuildId();
    null != K.guildId && "" !== K.guildId && K.guildId !== t && (0, A.A)(G.BVt.CHANNEL(K.guildId));
    let n = b.Ay.getGuildScheduledEvent(K.guildEventId);
    return null != n && (0, E.uR)({
      eventId: n.id
    }), true
  };
  if (W && (null == L ? true : L.startsWith("/settings/"))) {
    let {
      default: e
    } = n(849823), {
      openUserSettingsFromParsedUrl: t
    } = n(840065), r = e(L, F);
    if (null != r) return e => (null == e || e.preventDefault(), t({
      match: r,
      analyticsLocations: o,
      urlOrigin: "link_click"
    }), true)
  }
  if (W && (null == L ? true : L.startsWith("/playground"))) {
    let {
      parsePlaygroundUrl: e
    } = n(682492), {
      openPlayground: t
    } = n(965042), {
      collection: r,
      story: i
    } = e(L);
    return e => (null == e || e.preventDefault(), t(r, i), true)
  }
  return W && (null == L ? true : L.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, I.navigateToQuestHome)({
    fromContent: i.u.QUEST_BADGE
  }), true) : W && (null == L ? true : L.startsWith("/quest-home")) ? e => (null == e || e.preventDefault(), (0, T.pX)(G.BVt.QUEST_HOME_V2 + (null != F ? F : "")), true) : W && (null == L ? true : L.startsWith("/quest-preview")) ? e => {
    if (null == e || e.preventDefault(), (0, S.U)({
        location: V.rE.NAVIGATE_TO_QUEST_HOME_UTIL
      })) return (0, T.pX)(G.BVt.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(L.split("/").at(false))), true
  } : W && (null == L ? true : L.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 837057)).then(e => {
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