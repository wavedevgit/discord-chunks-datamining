/** Chunk was on web.js **/
/** chunk id: 230171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => j,
  U: () => Chunk967249.U
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
  Chunk299650 = require("./299650.js");

function j(e) {
  var t;
  let {
    app: n,
    linkType: a,
    activityCustomId: o,
    activityReferrerId: l,
    message: m,
    onView: g
  } = e, {
    name: E,
    bot: O
  } = n = (0, P.O)(n), v = null == O ? true : O.id, I = (0, p.ye)(n), S = T.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: O
  }), {
    staticBannerSrc: N,
    videoBannerSrc: L,
    bannerAspectRatio: M
  } = (0, D.E)(n), j = (0, s.e7)([b.default], () => null != l ? l : b.default.getId(), [l]), {
    analyticsLocations: G
  } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED), {
    currentChannelId: B,
    instanceId: Z,
    isCurrentlyInInstance: F,
    canLaunchInChannel: V
  } = (0, A.c)(n.id), H = (0, u.Z)(), Y = (0, h.ms)({
    context: {
      type: "contextless"
    },
    applicationId: n.id,
    botUserId: null == O ? true : O.id
  }), W = null != v && I && Y, K = V && I, z = (0, w.G)(n), q = (0, w.z)(n), X = i.useMemo(() => {
    let e = [];
    return I ? (K && e.push({
      label: null == Z ? x.intl.string(x.t.RscU7I) : F ? x.intl.string(x.t.DPfdsq) : x.intl.string(x.t.sqe0hj),
      trackingArea: R.j_.PLAY,
      onClick() {
        (0, c.G6)({
          channelId: null != B ? B : true,
          applicationId: n.id,
          isStart: null == Z,
          embeddedActivitiesManager: H,
          customId: o,
          referrerId: j,
          analyticsLocations: G
        })
      },
      disabled: F
    }), !K && W && e.push({
      label: x.intl.string(x.t.JeK1Wg),
      trackingArea: R.j_.PLAY,
      onClick() {
        (0, _.W)({
          appId: n.id,
          botId: v,
          analyticsLocations: G,
          customId: o,
          referrerId: j
        })
      }
    })) : null != q && e.push(q), e
  }, [K, W, Z, F, B, n.id, H, o, j, G, I, q, v]), Q = I ? (0, r.jsx)(U, {
    app: n
  }) : (0, r.jsx)(k, {
    app: n
  });
  return (0, r.jsx)(C.W, {
    title: E,
    staticBannerSrc: N,
    videoBannerSrc: L,
    onClickBanner: z,
    bannerAspectRatio: M,
    iconSrc: S,
    info: Q,
    actions: X,
    onClickContent: z,
    trackingConfig: {
      id: n.id,
      linkType: a,
      referrerId: j,
      activityCustomId: o,
      onView: g,
      guildId: null == (t = y.Z.getChannel(m.channel_id)) ? true : t.guild_id,
      channelId: m.channel_id,
      messageId: m.id
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
    return 0 === r ? null : x.intl.format(x.t["6IW6Wi"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), _ = null == (o = c.categories) || null == (n = o.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: M.description,
      color: "none",
      children: _
    }), null != f && (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: M.tagline,
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
      activityText: x.intl.formatToPlainString(x.t["IJa+46"], {
        count: d.length
      })
    });
    if (u.some(e => (0, m.ig)(e) === o.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.YqE, {
        size: "xxs",
        color: "currentColor"
      }), x.intl.string(x.t.TsWCdW)]
    });
    let e = a > 0 ? x.intl.format(x.t.z8EAJW, {
      count: a
    }) : x.intl.string(x.t.RjceQU);
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
      className: M.description,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: M.tag,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: M.tagline,
      color: "none",
      lineClamp: 1,
      children: f
    })]
  })
}