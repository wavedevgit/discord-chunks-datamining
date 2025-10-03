/** Chunk was on web.js **/
/** chunk id: 315263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => H
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk873546 = require("./873546.js"),
  Chunk636977 = require("./636977.js"),
  Chunk948789 = require("./948789.js"),
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
  Chunk836768 = require("./836768.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk543842 = require("./543842.js"),
  Chunk754688 = require("./754688.js"),
  Chunk336197 = require("./336197.js"),
  Chunk937797 = require("./937797.js"),
  Chunk36243 = require("./36243.js"),
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
var Chunk49898 = require("./49898.js"),
  Chunk46140 = require("./46140.js");
async function Z(e, t) {
  await o.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: U.IlC.APP
  })
}
async function F(e) {
  var t;
  let n = w.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await l.ZP.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === U.r2o.EXPIRED || n.state === U.r2o.BANNED || n.state === U.r2o.ERROR) return void await Z(n, e.code);
  let r = x.ZP.getFlattenedGuildIds(),
    i = null == n || null == (t = n.guild) ? true : t.id;
  null != i && r.includes(i) ? l.ZP.transitionToInviteSync(n) : await Z(n, e.code)
}
let V = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function H(e) {
  var t;
  let {
    skipExtensionCheck: o,
    analyticsLocations: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : V, w = (0, E.zO)(e);
  if (null != w && (w.type === g.g.INVITE || w.type === g.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), F(w), true);
  if (null != w && (w.type === g.g.APP_DIRECTORY_PROFILE || w.type === g.g.APP_DIRECTORY_STOREFRONT || w.type === g.g.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: o
    } = w, {
      applicationId: s,
      skuId: l
    } = w.type === g.g.APP_DIRECTORY_PROFILE || w.type === g.g.APP_DIRECTORY_STOREFRONT ? {
      applicationId: o,
      skuId: true
    } : null != (i = (0, p.Q)(o)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = L.Z.getGuildId()) ? a : true;
    return null == s ? (0, k.Z)(e) : (M.default.track(U.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
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
        section: (0, v.Z)(i, w.type === g.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != w && w.type === g.g.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = w, a = h.Z.getApplication(r), o = new URL(i), _ = null != (t = o.searchParams.get("referrer_id")) ? t : true, p = (0, f.Z)(), {
      currentChannelId: g,
      instanceId: E,
      isCurrentlyInInstance: b,
      canLaunchInChannel: y
    } = (0, m.v)(r);
    if (y) return !b && null != g && ((0, d.ur)(r, o.searchParams.get("link_id"), o.searchParams.get("custom_id")).then(async e => {
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
        analyticsLocations: l
      })
    }).catch(() => {}), true);
    {
      let e = null == a || null == (n = a.bot) ? true : n.id;
      return null != e && (s.Z.openPrivateChannel({
        recipientIds: e
      }).then(async e => {
        let {
          customId: t
        } = await (0, d.ur)(r, o.searchParams.get("link_id"), o.searchParams.get("custom_id"));
        (0, u.Z)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: l,
          customId: t,
          referrerId: _
        })
      }).catch(() => {}), true)
    }
  };
  if (null != w && w.type === g.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = w.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != w && w.type === g.g.QUESTS_EMBED && (0, C.c)({
      location: B.dr.EMBED_MOBILE
    })) return e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 110560)).then(e => {
    let {
      navigateToQuestHome: t
    } = e;
    t({
      fromContent: i.j.QUEST_SHARE_LINK,
      questId: w.code
    })
  }), true);
  let {
    host: x,
    hostname: Z,
    pathname: H,
    search: Y,
    hash: W
  } = null != (t = j.Z.toURLSafe(e)) ? t : {}, K = j.Z.isDiscordHostname(null != Z ? Z : null) || j.Z.isDiscordLocalhost(null != x ? x : null, null != Z ? Z : null);
  if (K && ((null == H ? true : H.startsWith("/application-directory")) || (null == H ? true : H.startsWith("/discovery/applications")))) {
    let e = H.split("/"),
      t = null == H ? true : H.startsWith("/discovery/applications"),
      r = e[t ? 3 : 2],
      i = "search" === r,
      a = t && "categories" === r && "featured" !== e[4];
    return t => {
      let r, o, s;
      if (null == t || t.preventDefault(), i) {
        var l, c, u;
        let e = new URLSearchParams(Y);
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
  if (null != H && K && j.Z.isAppRoute(H)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != Y && (e.search = Y), null != W && (e.hash = W), t => (null == t || t.preventDefault(), (0, T.Z)(H, e), true)
  }
  if (null != H && K) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(69580), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != w && w.type === g.g.APP_OAUTH2_LINK && _.ZP.trackWithMetadata(U.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let z = (0, I.Ao)(H);
  if (null != H && K && null != z) return e => {
    null == e || e.preventDefault();
    let t = L.Z.getGuildId();
    null != z.guildId && "" !== z.guildId && z.guildId !== t && (0, T.Z)(U.Z5c.CHANNEL(z.guildId));
    let n = O.ZP.getGuildScheduledEvent(z.guildEventId);
    return null != n && (0, y.bO)({
      eventId: n.id
    }), true
  };
  if (K && (null == H ? true : H.startsWith("/settings/"))) {
    let {
      default: e
    } = n(722589), {
      openUserSettingsFromParsedUrl: t
    } = n(518596), r = e(H, Y);
    if (null != r) return e => (null == e || e.preventDefault(), t({
      match: r,
      analyticsLocations: l,
      urlOrigin: "link_click"
    }), true)
  }
  return K && (null == H ? true : H.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, N.navigateToQuestHome)({
    fromContent: i.j.QUEST_BADGE
  }), true) : K && (null == H ? true : H.startsWith("/quest-home")) ? e => {
    null == e || e.preventDefault();
    let {
      enabled: t
    } = S.m8.getConfig({
      location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL
    });
    return t || b.Z.setState({
      selectedTab: G.GlobalDiscoveryTab.QUESTS
    }), (0, a.uL)((t ? U.Z5c.QUEST_HOME_V2 : U.Z5c.QUEST_HOME) + (null != Y ? Y : "")), true
  } : K && (null == H ? true : H.startsWith("/quest-preview")) ? e => {
    null == e || e.preventDefault();
    let {
      enabled: t
    } = S.m8.getConfig({
      location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL
    }), n = (0, A.T)({
      location: B.dr.NAVIGATE_TO_QUEST_HOME_UTIL
    });
    if (t || b.Z.setState({
        selectedTab: G.GlobalDiscoveryTab.QUESTS
      }), n) return (0, a.uL)((t ? U.Z5c.QUEST_HOME_V2 : U.Z5c.QUEST_HOME) + "?tab=preview_tool&quest_id=".concat(H.split("/").at(false))), true
  } : K && (null == H ? true : H.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 749681)).then(e => {
    let {
      transitionToGlobalDiscovery: t
    } = e, {
      GlobalDiscoveryTab: r
    } = n(49898);
    t({
      tab: r.SERVERS
    })
  }), true) : o || null == (0, P.v)(e) ? true : t => (null == t || t.preventDefault(), R.Z.show(e), true)
}