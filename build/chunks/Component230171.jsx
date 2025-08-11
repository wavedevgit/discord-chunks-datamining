/** Chunk was on web.js **/
/** chunk id: 230171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => x,
  U: () => Chunk914498.Un
}), require("./539854.js"), require("./784620.js"), require("./973216.js"), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk758364 = require("./758364.js");

function x(e) {
  let {
    app: t,
    embedUrl: n,
    linkType: o,
    activityCustomId: a,
    activityReferrerId: l,
    onView: m
  } = e, {
    name: g,
    bot: E
  } = t = (0, R.O)(t), y = null == E ? true : E.id, O = (0, p.ye)(t), v = I.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: E
  }), {
    staticBannerSrc: T,
    videoBannerSrc: N,
    bannerAspectRatio: L
  } = (0, P.E)(t), x = (0, s.e7)([b.default], () => null != l ? l : b.default.getId(), [l]), {
    analyticsLocations: j
  } = (0, f.ZP)(d.Z.APP_MESSAGE_EMBED), {
    currentChannelId: U,
    instanceId: G,
    isCurrentlyInInstance: B,
    canLaunchInChannel: Z
  } = (0, S.c)(t.id), F = (0, u.Z)(), V = (0, h.ms)({
    context: {
      type: "contextless"
    },
    applicationId: t.id,
    botUserId: null == E ? true : E.id
  }), H = null != y && O && V, Y = Z && O, W = (0, w.G)(t), K = (0, w.z)(t), z = i.useMemo(() => {
    let e = [];
    return O ? (Y && e.push({
      label: null == G ? D.intl.string(D.t.RscU7O) : D.intl.string(D.t.VJlc0d),
      trackingArea: C.j_.PLAY,
      onClick() {
        (0, c.G6)({
          channelId: null != U ? U : true,
          applicationId: t.id,
          isStart: null == G,
          embeddedActivitiesManager: F,
          customId: a,
          referrerId: x,
          analyticsLocations: j
        })
      },
      disabledReason: B ? D.intl.string(D.t.wJNK8P) : true
    }), !Y && H && e.push({
      label: D.intl.string(D.t.JeK1Wl),
      trackingArea: C.j_.PLAY,
      onClick() {
        (0, _.W)({
          appId: t.id,
          botId: y,
          analyticsLocations: j,
          customId: a,
          referrerId: x
        })
      }
    })) : null != K && e.push(K), e
  }, [Y, H, G, B, U, t.id, F, a, x, j, O, K, y]), q = O ? (0, r.jsx)(k, {
    app: t
  }) : (0, r.jsx)(M, {
    app: t
  });
  return (0, r.jsx)(A.W, {
    title: g,
    staticBannerSrc: T,
    videoBannerSrc: N,
    onClickBanner: W,
    bannerAspectRatio: L,
    iconSrc: v,
    embedUrl: n,
    info: q,
    actions: z,
    onClickContent: W,
    trackingConfig: {
      id: t.id,
      linkType: o,
      referrerId: x,
      activityCustomId: a,
      onView: m
    }
  })
}

function M(e) {
  var t, n, a;
  let {
    app: c
  } = e, u = (0, T.Eb)({
    customInstallUrl: c.customInstallUrl,
    installParams: c.installParams,
    integrationTypesConfig: c.integrationTypesConfig
  }) && null != c.integrationTypesConfig && o.Y.GUILD_INSTALL in c.integrationTypesConfig, d = (0, s.e7)([E.default], () => E.default.locale, []), f = i.useMemo(() => {
    var e, t;
    if (!u) return null;
    let n = new Intl.NumberFormat(d, {
        notation: "compact",
        compactDisplay: "short"
      }),
      r = null != (t = null == (e = c.directoryEntry) ? true : e.guild_count) ? t : 0;
    return 0 === r ? null : D.intl.format(D.t["6IW6Wl"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), _ = null == (a = c.categories) || null == (n = a.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != _ && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: L.description,
      color: "none",
      children: _
    }), null != f && (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: L.tagline,
      color: "none",
      lineClamp: 1,
      children: [(0, r.jsx)(l.Jmo, {
        size: "xxs",
        color: "currentColor"
      }), f]
    })]
  })
}

function k(e) {
  let {
    app: t
  } = e, {
    tags: n,
    maxParticipants: o = 0
  } = t, c = (0, s.e7)([O.Z], () => {
    var e;
    return null != (e = O.Z.getGuildId()) ? e : true
  }, []), u = (0, g.N)(t.id), d = (0, s.Wu)([v.default, y.Z], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = v.default.getUser(n.author_id),
        i = y.Z.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), f = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(N.K, {
      activityUsers: d,
      guildId: c,
      activityText: D.intl.formatToPlainString(D.t["IJa+4+"], {
        count: d.length
      })
    });
    if (u.some(e => (0, m.ig)(e) === a.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.YqE, {
        size: "xxs",
        color: "currentColor"
      }), D.intl.string(D.t.TsWCdX)]
    });
    let e = o > 0 ? D.intl.format(D.t.z8EAJS, {
      count: o
    }) : D.intl.string(D.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.tBG, {
        size: "xxs",
        color: "currentColor"
      }), e]
    })
  }, [u, d, c, o]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n.length > 0 && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: L.description,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: L.tag,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: L.tagline,
      color: "none",
      lineClamp: 1,
      children: f
    })]
  })
}