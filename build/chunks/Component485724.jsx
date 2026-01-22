/** Chunk was on web.js **/
/** chunk id: 485724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => x.J,
  W: () => M
}), require("./321073.js"), require("./134528.js"), require("./947204.js"), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk485845 = require("./485845.js"),
  Chunk379834 = require("./379834.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk795816 = require("./795816.js"),
  Chunk574152 = require("./574152.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk522305 = require("./522305.js"),
  Chunk735991 = require("./735991.js"),
  Chunk361926 = require("./361926.js"),
  Chunk583846 = require("./583846.js"),
  Chunk205184 = require("./205184.js"),
  Chunk773669 = require("./773669.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk486020 = require("./486020.js"),
  Chunk204776 = require("./204776.js"),
  Chunk725606 = require("./725606.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk178910 = require("./178910.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk138175 = require("./138175.js"),
  Chunk112150 = require("./112150.js"),
  Chunk574660 = require("./574660.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22658 = require("./22658.js");

function M(e) {
  var t;
  let {
    app: n,
    linkType: a,
    activityCustomId: s,
    activityReferrerId: l,
    message: m,
    onView: g
  } = e, {
    name: E,
    bot: O
  } = n = (0, w.b)(n), A = null == O ? true : O.id, v = (0, _.Ag)(n), I = S.Ay.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: O
  }), {
    staticBannerSrc: N,
    videoBannerSrc: x,
    bannerAspectRatio: j
  } = (0, P.f)(n), M = (0, o.bG)([b.default], () => null != l ? l : b.default.getId(), [l]), {
    analyticsLocations: G
  } = (0, f.Ay)(d.A.APP_MESSAGE_EMBED), {
    currentChannelId: V,
    instanceId: F,
    isCurrentlyInInstance: B,
    canLaunchInChannel: H
  } = (0, T.w)(n.id), Y = (0, u.A)(), W = (0, h.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: n.id,
    botUserId: null == O ? true : O.id
  }), K = null != A && v && W, z = H && v, q = (0, D.F)(n), X = (0, D.t)(n), Z = i.useMemo(() => {
    let e = [];
    return v ? (z && e.push({
      label: null == F ? L.intl.string(L.t.RscU7I) : B ? L.intl.string(L.t.DPfdsq) : L.intl.string(L.t.sqe0hj),
      trackingArea: R.kY.PLAY,
      onClick() {
        (0, c.su)({
          channelId: null != V ? V : true,
          applicationId: n.id,
          isStart: null == F,
          embeddedActivitiesManager: Y,
          customId: s,
          referrerId: M,
          analyticsLocations: G
        })
      },
      disabled: B
    }), !z && K && e.push({
      label: L.intl.string(L.t.JeK1Wg),
      trackingArea: R.kY.PLAY,
      onClick() {
        (0, p.Q)({
          appId: n.id,
          botId: A,
          analyticsLocations: G,
          customId: s,
          referrerId: M
        })
      }
    })) : null != X && e.push(X), e
  }, [z, K, F, B, V, n.id, Y, s, M, G, v, X, A]), Q = v ? (0, r.jsx)(U, {
    app: n
  }) : (0, r.jsx)(k, {
    app: n
  });
  return (0, r.jsx)(C.h, {
    title: E,
    staticBannerSrc: N,
    videoBannerSrc: x,
    onClickBanner: q,
    bannerAspectRatio: j,
    iconSrc: I,
    info: Q,
    actions: Z,
    onClickContent: q,
    trackingConfig: {
      id: n.id,
      linkType: a,
      referrerId: M,
      activityCustomId: s,
      onView: g,
      guildId: null == (t = y.A.getChannel(m.channel_id)) ? true : t.guild_id,
      channelId: m.channel_id,
      messageId: m.id
    }
  })
}

function k(e) {
  var t, n, s;
  let {
    app: c
  } = e, u = (0, I.Ie)({
    customInstallUrl: c.customInstallUrl,
    installParams: c.installParams,
    integrationTypesConfig: c.integrationTypesConfig
  }) && null != c.integrationTypesConfig && a.b.GUILD_INSTALL in c.integrationTypesConfig, d = (0, o.bG)([E.default], () => E.default.locale, []), f = i.useMemo(() => {
    var e, t;
    if (!u) return null;
    let n = new Intl.NumberFormat(d, {
        notation: "compact",
        compactDisplay: "short"
      }),
      r = null != (e = null == (t = c.directoryEntry) ? true : t.guild_count) ? e : 0;
    return 0 === r ? null : L.intl.format(L.t["6IW6Wi"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), p = null == (s = c.categories) || null == (n = s.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != p && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: j.h_,
      color: "none",
      children: p
    }), null != f && (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: j.dS,
      color: "none",
      lineClamp: 1,
      children: [(0, r.jsx)(l.QGJ, {
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
  } = t, c = (0, o.bG)([A.A], () => {
    var e;
    return null != (e = A.A.getGuildId()) ? e : true
  }, []), u = (0, g.s)(t.id), d = (0, o.yK)([v.default, O.A], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = v.default.getUser(n.author_id),
        i = O.A.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), f = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(N.$, {
      activityUsers: d,
      guildId: c,
      activityText: L.intl.formatToPlainString(L.t["IJa+46"], {
        count: d.length
      })
    });
    if (u.some(e => (0, m.CZ)(e) === s.m.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Y3C, {
        size: "xxs",
        color: "currentColor"
      }), L.intl.string(L.t.TsWCdW)]
    });
    let e = a > 0 ? L.intl.format(L.t.z8EAJW, {
      count: a
    }) : L.intl.string(L.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.nys, {
        size: "xxs",
        color: "currentColor"
      }), e]
    })
  }, [u, d, c, a]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n.length > 0 && (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: j.h_,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: j.Tc,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/normal",
      className: j.dS,
      color: "none",
      lineClamp: 1,
      children: f
    })]
  })
}