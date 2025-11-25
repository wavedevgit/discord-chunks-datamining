/** Chunk was on web.js **/
/** chunk id: 315263, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => Z
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
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
var Chunk701190 = require("./701190.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk591759 = require("./591759.js"),
  Chunk782568 = require("./782568.js"),
  Chunk981631 = require("./981631.js");
require("./215023.js");
var Chunk324805 = require("./324805.js");
async function U(e, t) {
  await a.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: k.IlC.APP
  })
}
async function G(e) {
  var t;
  let n = R.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await s.ZP.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === k.r2o.EXPIRED || n.state === k.r2o.BANNED || n.state === k.r2o.ERROR) return void await U(n, e.code);
  let r = w.ZP.getFlattenedGuildIds(),
    i = null == n || null == (t = n.guild) ? true : t.id;
  null != i && r.includes(i) ? s.ZP.transitionToInviteSync(n) : await U(n, e.code)
}
let B = {
  skipExtensionCheck: true,
  analyticsLocations: []
};

function Z(e) {
  var t;
  let {
    skipExtensionCheck: a,
    analyticsLocations: s
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : B, R = (0, g.zO)(e);
  if (null != R && (R.type === m.g.INVITE || R.type === m.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), G(R), true);
  if (null != R && (R.type === m.g.APP_DIRECTORY_PROFILE || R.type === m.g.APP_DIRECTORY_STOREFRONT || R.type === m.g.APP_DIRECTORY_STOREFRONT_SKU)) return t => {
    var i, a;
    null == t || t.preventDefault();
    let {
      code: o
    } = R, {
      applicationId: s,
      skuId: l
    } = R.type === m.g.APP_DIRECTORY_PROFILE || R.type === m.g.APP_DIRECTORY_STOREFRONT ? {
      applicationId: o,
      skuId: true
    } : null != (i = (0, _.Q)(o)) ? i : {
      applicationId: true,
      skuId: true
    }, c = null != (a = D.Z.getGuildId()) ? a : true;
    return null == s ? (0, M.Z)(e) : (L.default.track(k.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: s,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: c,
      channel_id: P.Z.getChannelId()
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
        section: (0, y.Z)(i, R.type === m.g.APP_DIRECTORY_PROFILE ? i.ABOUT : i.STORE),
        skuId: l
      })
    })), true
  };
  if (null != R && R.type === m.g.ACTIVITY_BOOKMARK) return e => {
    var t, n;
    null == e || e.preventDefault();
    let {
      code: r,
      url: i
    } = R, a = p.Z.getApplication(r), f = new URL(i), _ = null != (t = f.searchParams.get("referrer_id")) ? t : true, m = (0, d.Z)(), {
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
        } = await (0, u.ur)(r, f.searchParams.get("link_id"), f.searchParams.get("custom_id"));
        (0, c.Z)({
          targetApplicationId: r,
          channelId: e,
          analyticsLocations: s,
          customId: t,
          referrerId: _
        })
      }).catch(() => {}), true)
    }
  };
  if (null != R && R.type === m.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, r] = R.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, r)
    }), true
  };
  if (null != R && R.type === m.g.QUESTS_EMBED && (0, I.c)({
      location: j.dr.EMBED_MOBILE
    })) return e => {
    var t, r, a;
    let o, s;
    null == e || e.preventDefault();
    let {
      search: l
    } = null != (t = x.Z.toURLSafe(R.url)) ? t : {};
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
        questId: R.code
      })
    }), true
  };
  let {
    host: w,
    hostname: U,
    pathname: Z,
    search: F,
    hash: V
  } = null != (t = x.Z.toURLSafe(e)) ? t : {}, H = x.Z.isDiscordHostname(null != U ? U : null) || x.Z.isDiscordLocalhost(null != w ? w : null, null != U ? U : null);
  if (H && ((null == Z ? true : Z.startsWith("/application-directory")) || (null == Z ? true : Z.startsWith("/discovery/applications")))) {
    let e = Z.split("/"),
      t = null == Z ? true : Z.startsWith("/discovery/applications"),
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
  if (null != Z && H && x.Z.isAppRoute(Z)) {
    let e = {
      navigationReplace: false,
      openChannel: true
    };
    return null != F && (e.search = F), null != V && (e.hash = V), t => (null == t || t.preventDefault(), (0, v.Z)(Z, e), true)
  }
  if (null != Z && H) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: r
    } = n(69580), i = t(e);
    if (null != i) return e => (null == e || e.preventDefault(), null != R && R.type === m.g.APP_OAUTH2_LINK && f.ZP.trackWithMetadata(k.rMx.APP_OAUTH2_LINK_EMBED_URL_CLICKED, {
      application_id: i.clientId
    }), r(i), true)
  }
  let Y = (0, O.Ao)(Z);
  if (null != Z && H && null != Y) return e => {
    null == e || e.preventDefault();
    let t = D.Z.getGuildId();
    null != Y.guildId && "" !== Y.guildId && Y.guildId !== t && (0, v.Z)(k.Z5c.CHANNEL(Y.guildId));
    let n = b.ZP.getGuildScheduledEvent(Y.guildEventId);
    return null != n && (0, E.bO)({
      eventId: n.id
    }), true
  };
  if (H && (null == Z ? true : Z.startsWith("/settings/"))) {
    let {
      default: e
    } = n(722589), {
      openUserSettingsFromParsedUrl: t
    } = n(518596), r = e(Z, F);
    if (null != r) return e => (null == e || e.preventDefault(), t({
      match: r,
      analyticsLocations: s,
      urlOrigin: "link_click"
    }), true)
  }
  return H && (null == Z ? true : Z.startsWith("/discovery/quests")) ? e => (null == e || e.preventDefault(), (0, S.navigateToQuestHome)({
    fromContent: i.j.QUEST_BADGE
  }), true) : H && (null == Z ? true : Z.startsWith("/quest-home")) ? e => (null == e || e.preventDefault(), (0, A.uL)(k.Z5c.QUEST_HOME_V2 + (null != F ? F : "")), true) : H && (null == Z ? true : Z.startsWith("/quest-preview")) ? e => {
    if (null == e || e.preventDefault(), (0, T.T)({
        location: j.dr.NAVIGATE_TO_QUEST_HOME_UTIL
      })) return (0, A.uL)(k.Z5c.QUEST_HOME_V2 + "?tab=preview_tool&quest_id=".concat(Z.split("/").at(false))), true
  } : H && (null == Z ? true : Z.startsWith("/discovery/servers")) ? e => (null == e || e.preventDefault(), Promise.resolve().then(n.bind(n, 749681)).then(e => {
    let {
      transitionToGlobalDiscovery: t
    } = e, {
      GlobalDiscoveryTab: r
    } = n(49898);
    t({
      tab: r.SERVERS
    })
  }), true) : a || null == (0, N.v)(e) ? true : t => (null == t || t.preventDefault(), C.Z.show(e), true)
}