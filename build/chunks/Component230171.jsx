/** Chunk was on 91173 **/
/** chunk id: 230171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => R,
  U: () => Chunk914498.Un
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
  Chunk217648 = require("./217648.js");

function R(e) {
  let {
    app: t,
    embedUrl: n,
    linkType: l,
    activityCustomId: o,
    activityReferrerId: s,
    onView: _
  } = e, {
    name: h,
    bot: b
  } = t = (0, P.O)(t), C = null == b ? true : b.id, O = (0, f.ye)(t), v = y.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: b
  }), {
    staticBannerSrc: x,
    videoBannerSrc: S,
    bannerAspectRatio: Z
  } = (0, N.E)(t), R = (0, a.e7)([E.default], () => null != s ? s : E.default.getId(), [s]), {
    analyticsLocations: M
  } = (0, p.ZP)(d.Z.APP_MESSAGE_EMBED), {
    currentChannelId: k,
    instanceId: U,
    isCurrentlyInInstance: F,
    canLaunchInChannel: B
  } = (0, j.c)(t.id), G = (0, u.Z)(), H = (0, g.ms)({
    context: {
      type: "contextless"
    },
    applicationId: t.id,
    botUserId: null == b ? true : b.id
  }), V = null != C && O && H, z = B && O, W = (0, A.G)(t), Y = (0, A.z)(t), K = i.useMemo(() => {
    let e = [];
    return O ? (z && e.push({
      label: null == U ? w.intl.string(w.t.RscU7O) : w.intl.string(w.t.VJlc0d),
      trackingArea: T.j_.PLAY,
      onClick() {
        (0, c.G6)({
          channelId: null != k ? k : true,
          applicationId: t.id,
          isStart: null == U,
          embeddedActivitiesManager: G,
          customId: o,
          referrerId: R,
          analyticsLocations: M
        })
      },
      disabledReason: F ? w.intl.string(w.t.wJNK8P) : true
    }), !z && V && e.push({
      label: w.intl.string(w.t.JeK1Wl),
      trackingArea: T.j_.PLAY,
      onClick() {
        (0, m.W)({
          appId: t.id,
          botId: C,
          analyticsLocations: M,
          customId: o,
          referrerId: R
        })
      }
    })) : null != Y && e.push(Y), e
  }, [z, V, U, F, k, t.id, G, o, R, M, O, Y, C]), X = O ? (0, r.jsx)(L, {
    app: t
  }) : (0, r.jsx)(D, {
    app: t
  });
  return (0, r.jsx)(I.W, {
    title: h,
    staticBannerSrc: x,
    videoBannerSrc: S,
    onClickBanner: W,
    bannerAspectRatio: Z,
    iconSrc: v,
    embedUrl: n,
    info: X,
    actions: K,
    onClickContent: W,
    trackingConfig: {
      id: t.id,
      linkType: l,
      referrerId: R,
      activityCustomId: o,
      onView: _
    }
  })
}

function D(e) {
  var t, n, o;
  let {
    app: c
  } = e, u = (0, x.Eb)({
    customInstallUrl: c.customInstallUrl,
    installParams: c.installParams,
    integrationTypesConfig: c.integrationTypesConfig
  }) && null != c.integrationTypesConfig && l.Y.GUILD_INSTALL in c.integrationTypesConfig, d = (0, a.e7)([b.default], () => b.default.locale, []), p = i.useMemo(() => {
    var e, t;
    if (!u) return null;
    let n = new Intl.NumberFormat(d, {
        notation: "compact",
        compactDisplay: "short"
      }),
      r = null != (t = null == (e = c.directoryEntry) ? true : e.guild_count) ? t : 0;
    return 0 === r ? null : w.intl.format(w.t["6IW6Wl"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), m = null == (o = c.categories) || null == (n = o.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != m && (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: Z.description,
      color: "none",
      children: m
    }), null != p && (0, r.jsxs)(s.Text, {
      variant: "text-xs/normal",
      className: Z.tagline,
      color: "none",
      lineClamp: 1,
      children: [(0, r.jsx)(s.Jmo, {
        size: "xxs",
        color: "currentColor"
      }), p]
    })]
  })
}

function L(e) {
  let {
    app: t
  } = e, {
    tags: n,
    maxParticipants: l = 0
  } = t, c = (0, a.e7)([O.Z], () => {
    var e;
    return null != (e = O.Z.getGuildId()) ? e : true
  }, []), u = (0, h.N)(t.id), d = (0, a.Wu)([v.default, C.Z], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = v.default.getUser(n.author_id),
        i = C.Z.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), p = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(S.K, {
      activityUsers: d,
      guildId: c,
      activityText: w.intl.formatToPlainString(w.t["IJa+4+"], {
        count: d.length
      })
    });
    if (u.some(e => (0, _.ig)(e) === o.o.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.YqE, {
        size: "xxs",
        color: "currentColor"
      }), w.intl.string(w.t.TsWCdX)]
    });
    let e = l > 0 ? w.intl.format(w.t.z8EAJS, {
      count: l
    }) : w.intl.string(w.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.tBG, {
        size: "xxs",
        color: "currentColor"
      }), e]
    })
  }, [u, d, c, l]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n.length > 0 && (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: Z.description,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: Z.tag,
        children: e
      }, t))
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/normal",
      className: Z.tagline,
      color: "none",
      lineClamp: 1,
      children: p
    })]
  })
}