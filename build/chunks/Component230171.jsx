/** Chunk was on web.js **/
/** chunk id: 230171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => M,
  U: () => Chunk967249.U
}), require("./539854.js"), require("./784620.js"), require("./973216.js"), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk373793 = require("./373793.js"),
  Chunk705512 = require("./705512.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk566620 = require("./566620.js"),
  Chunk574952 = require("./574952.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk915346 = require("./915346.js"),
  Chunk783097 = require("./783097.js"),
  Chunk812236 = require("./812236.js"),
  Chunk561308 = require("./561308.js"),
  Chunk567409 = require("./567409.js"),
  Chunk706454 = require("./706454.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk433534 = require("./433534.js"),
  Chunk506895 = require("./506895.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk943762 = require("./943762.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk172109 = require("./172109.js"),
  Chunk880251 = require("./880251.js"),
  Chunk515344 = require("./515344.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk217648 = require("./217648.js");

function M(e) {
  var t;
  let {
    app: n,
    embedUrl: a,
    linkType: o,
    activityCustomId: l,
    activityReferrerId: m,
    message: g,
    onView: E
  } = e, {
    name: O,
    bot: v
  } = n = (0, P.O)(n), I = null == v ? true : v.id, S = (0, p.ye)(n), N = T.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: v
  }), {
    staticBannerSrc: x,
    videoBannerSrc: j,
    bannerAspectRatio: M
  } = (0, w.E)(n), G = (0, s.e7)([b.default], () => null != m ? m : b.default.getId(), [m]), {
    analyticsLocations: B
  } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED), {
    currentChannelId: Z,
    instanceId: F,
    isCurrentlyInInstance: V,
    canLaunchInChannel: H
  } = (0, A.c)(n.id), Y = (0, u.Z)(), W = (0, h.ms)({
    context: {
      type: "contextless"
    },
    applicationId: n.id,
    botUserId: null == v ? true : v.id
  }), K = null != I && S && W, z = H && S, q = (0, D.G)(n), X = (0, D.z)(n), Q = i.useMemo(() => {
    let e = [];
    return S ? (z && e.push({
      label: null == F ? L.intl.string(L.t.RscU7O) : L.intl.string(L.t.VJlc0d),
      trackingArea: R.j_.PLAY,
      onClick() {
        (0, c.G6)({
          channelId: null != Z ? Z : true,
          applicationId: n.id,
          isStart: null == F,
          embeddedActivitiesManager: Y,
          customId: l,
          referrerId: G,
          analyticsLocations: B
        })
      },
      disabledReason: V ? L.intl.string(L.t.wJNK8P) : true
    }), !z && K && e.push({
      label: L.intl.string(L.t.JeK1Wl),
      trackingArea: R.j_.PLAY,
      onClick() {
        (0, _.W)({
          appId: n.id,
          botId: I,
          analyticsLocations: B,
          customId: l,
          referrerId: G
        })
      }
    })) : null != X && e.push(X), e
  }, [z, K, F, V, Z, n.id, Y, l, G, B, S, X, I]), J = S ? (0, r.jsx)(U, {
    app: n
  }) : (0, r.jsx)(k, {
    app: n
  });
  return (0, r.jsx)(C.W, {
    title: O,
    staticBannerSrc: x,
    videoBannerSrc: j,
    onClickBanner: q,
    bannerAspectRatio: M,
    iconSrc: N,
    embedUrl: a,
    info: J,
    actions: Q,
    onClickContent: q,
    trackingConfig: {
      id: n.id,
      linkType: o,
      referrerId: G,
      activityCustomId: l,
      onView: E,
      guildId: null == (t = y.Z.getChannel(g.channel_id)) ? true : t.guild_id,
      channelId: g.channel_id,
      messageId: g.id
    }
  })
}

function k(e) {
  var t, n, o;
  let {
    app: c
  } = e, u = (0, S.Eb)({
    customInstallUrl: c.customInstallUrl,
    installParams: c.installParams,
    integrationTypesConfig: c.integrationTypesConfig
  }) && null != c.integrationTypesConfig && a.Y.GUILD_INSTALL in c.integrationTypesConfig, d = (0, s.e7)([E.default], () => E.default.locale, []), f = i.useMemo(() => {
    var e, t;
    if (!u) return null;
    let n = new Intl.NumberFormat(d, {
        notation: "compact",
        compactDisplay: "short"
      }),
      r = null != (t = null == (e = c.directoryEntry) ? true : e.guild_count) ? t : 0;
    return 0 === r ? null : L.intl.format(L.t["6IW6Wl"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), _ = null == (o = c.categories) || null == (n = o.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: j.description,
      color: "none",
      children: _
    }), null != f && (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: j.tagline,
      color: "none",
      lineClamp: 1,
      children: [(0, r.jsx)(l.Jmo, {
        size: "xxs",
        color: "currentColor"
      }), f]
    })]
  })
}

function U(e) {
  let {
    app: t
  } = e, {
    tags: n,
    maxParticipants: a = 0
  } = t, c = (0, s.e7)([v.Z], () => {
    var e;
    return null != (e = v.Z.getGuildId()) ? e : true
  }, []), u = (0, g.N)(t.id), d = (0, s.Wu)([I.default, O.Z], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = I.default.getUser(n.author_id),
        i = O.Z.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), f = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(N.K, {
      activityUsers: d,
      guildId: c,
      activityText: L.intl.formatToPlainString(L.t["IJa+4+"], {
        count: d.length
      })
    });
    if (u.some(e => (0, m.ig)(e) === o.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.YqE, {
        size: "xxs",
        color: "currentColor"
      }), L.intl.string(L.t.TsWCdX)]
    });
    let e = a > 0 ? L.intl.format(L.t.z8EAJS, {
      count: a
    }) : L.intl.string(L.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.tBG, {
        size: "xxs",
        color: "currentColor"
      }), e]
    })
  }, [u, d, c, a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n.length > 0 && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: j.description,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: j.tag,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: j.tagline,
      color: "none",
      lineClamp: 1,
      children: f
    })]
  })
}