/** Chunk was on web.js **/
/** chunk id: 230171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => M,
  U: () => x.U
}), require("./539854.js"), require("./784620.js"), require("./973216.js"), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk44830 = require("./44830.js");

function M(e) {
  var t;
  let {
    app: n,
    linkType: a,
    activityCustomId: o,
    activityReferrerId: l,
    message: h,
    onView: g
  } = e, {
    name: E,
    bot: O
  } = n = (0, R.O)(n), v = null == O ? true : O.id, S = (0, _.ye)(n), T = I.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: O
  }), {
    staticBannerSrc: N,
    videoBannerSrc: x,
    bannerAspectRatio: j
  } = (0, w.E)(n), M = (0, s.e7)([b.default], () => null != l ? l : b.default.getId(), [l]), {
    analyticsLocations: G
  } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED), {
    currentChannelId: Z,
    instanceId: F,
    isCurrentlyInInstance: B,
    canLaunchInChannel: V
  } = (0, C.c)(n.id), H = (0, u.Z)(), Y = (0, m.ms)({
    context: {
      type: "contextless"
    },
    applicationId: n.id,
    botUserId: null == O ? true : O.id
  }), W = null != v && S && Y, K = V && S, z = (0, D.G)(n), q = (0, D.z)(n), Q = i.useMemo(() => {
    let e = [];
    return S ? (K && e.push({
      label: null == F ? L.intl.string(L.t.RscU7I) : B ? L.intl.string(L.t.DPfdsq) : L.intl.string(L.t.sqe0hj),
      trackingArea: P.j_.PLAY,
      onClick() {
        (0, c.G6)({
          channelId: null != Z ? Z : true,
          applicationId: n.id,
          isStart: null == F,
          embeddedActivitiesManager: H,
          customId: o,
          referrerId: M,
          analyticsLocations: G
        })
      },
      disabled: B
    }), !K && W && e.push({
      label: L.intl.string(L.t.JeK1Wg),
      trackingArea: P.j_.PLAY,
      onClick() {
        (0, p.W)({
          appId: n.id,
          botId: v,
          analyticsLocations: G,
          customId: o,
          referrerId: M
        })
      }
    })) : null != q && e.push(q), e
  }, [K, W, F, B, Z, n.id, H, o, M, G, S, q, v]), X = S ? (0, r.jsx)(U, {
    app: n
  }) : (0, r.jsx)(k, {
    app: n
  });
  return (0, r.jsx)(A.W, {
    title: E,
    staticBannerSrc: N,
    videoBannerSrc: x,
    onClickBanner: z,
    bannerAspectRatio: j,
    iconSrc: T,
    info: X,
    actions: Q,
    onClickContent: z,
    trackingConfig: {
      id: n.id,
      linkType: a,
      referrerId: M,
      activityCustomId: o,
      onView: g,
      guildId: null == (t = y.Z.getChannel(h.channel_id)) ? true : t.guild_id,
      channelId: h.channel_id,
      messageId: h.id
    }
  })
}

function k(e) {
  var t, n, o;
  let {
    app: c
  } = e, u = (0, T.Eb)({
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
    return 0 === r ? null : L.intl.format(L.t["6IW6Wi"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), p = null == (o = c.categories) || null == (n = o.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != p && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: j.description,
      color: "none",
      children: p
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
  }, []), u = (0, g.N)(t.id), d = (0, s.Wu)([S.default, O.Z], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = S.default.getUser(n.author_id),
        i = O.Z.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), f = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(N.K, {
      activityUsers: d,
      guildId: c,
      activityText: L.intl.formatToPlainString(L.t["IJa+46"], {
        count: d.length
      })
    });
    if (u.some(e => (0, h.ig)(e) === o.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.YqE, {
        size: "xxs",
        color: "currentColor"
      }), L.intl.string(L.t.TsWCdW)]
    });
    let e = a > 0 ? L.intl.format(L.t.z8EAJW, {
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