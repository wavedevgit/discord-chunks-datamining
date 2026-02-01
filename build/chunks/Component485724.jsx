/** Chunk was on 9753 **/
/** chunk id: 485724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => L.J,
  W: () => U
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
  Chunk625180 = require("./625180.js"),
  Chunk207371 = require("./207371.js"),
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

function U(e) {
  var t;
  let {
    app: n,
    linkType: l,
    activityCustomId: a,
    activityReferrerId: o,
    message: _,
    onView: y
  } = e, {
    name: A,
    bot: x
  } = n = (0, w.b)(n), E = null == x ? true : x.id, j = (0, f.Ag)(n), I = C.Ay.getApplicationIconURL({
    id: n.id,
    icon: n.icon,
    bot: x
  }), {
    staticBannerSrc: N,
    videoBannerSrc: L,
    bannerAspectRatio: k
  } = (0, R.f)(n), U = (0, s.bG)([v.default], () => null != o ? o : v.default.getId(), [o]), {
    analyticsLocations: F
  } = (0, p.Ay)(d.A.APP_MESSAGE_EMBED), {
    currentChannelId: H,
    instanceId: V,
    isCurrentlyInInstance: z,
    canLaunchInChannel: W
  } = (0, S.w)(n.id), K = (0, u.A)(), Y = (0, g.Vr)({
    context: {
      type: "contextless"
    },
    applicationId: n.id,
    botUserId: null == x ? true : x.id
  }), q = null != E && j && Y, J = W && j, Q = (0, b.e)(n), X = (0, D.F)(n), Z = (0, D.t)(n), $ = i.useMemo(() => {
    let e = [];
    return j ? Q ? e.push({
      label: M.intl.string(M.t.RscU7I),
      trackingArea: P.kY.PLAY,
      onClick() {
        h.A.launchFrame({
          applicationId: n.id
        })
      }
    }) : (J && e.push({
      label: null == V ? M.intl.string(M.t.RscU7I) : z ? M.intl.string(M.t.DPfdsq) : M.intl.string(M.t.sqe0hj),
      trackingArea: P.kY.PLAY,
      onClick() {
        (0, c.su)({
          channelId: null != H ? H : true,
          applicationId: n.id,
          isStart: null == V,
          embeddedActivitiesManager: K,
          customId: a,
          referrerId: U,
          analyticsLocations: F
        })
      },
      disabled: z
    }), !J && q && e.push({
      label: M.intl.string(M.t.JeK1Wg),
      trackingArea: P.kY.PLAY,
      onClick() {
        (0, m.Q)({
          appId: n.id,
          botId: E,
          analyticsLocations: F,
          customId: a,
          referrerId: U
        })
      }
    })) : null != Z && e.push(Z), e
  }, [j, Z, Q, n.id, J, q, V, z, H, K, a, U, F, E]), ee = j ? (0, r.jsx)(B, {
    app: n
  }) : (0, r.jsx)(G, {
    app: n
  });
  return (0, r.jsx)(T.h, {
    title: A,
    staticBannerSrc: N,
    videoBannerSrc: L,
    onClickBanner: X,
    bannerAspectRatio: k,
    iconSrc: I,
    info: ee,
    actions: $,
    onClickContent: X,
    trackingConfig: {
      id: n.id,
      linkType: l,
      referrerId: U,
      activityCustomId: a,
      onView: y,
      guildId: null == (t = O.A.getChannel(_.channel_id)) ? true : t.guild_id,
      channelId: _.channel_id,
      messageId: _.id
    }
  })
}

function G(e) {
  var t, n, a;
  let {
    app: c
  } = e, u = (0, I.Ie)({
    customInstallUrl: c.customInstallUrl,
    installParams: c.installParams,
    integrationTypesConfig: c.integrationTypesConfig
  }) && null != c.integrationTypesConfig && l.b.GUILD_INSTALL in c.integrationTypesConfig, d = (0, s.bG)([A.default], () => A.default.locale, []), p = i.useMemo(() => {
    var e, t;
    if (!u) return null;
    let n = new Intl.NumberFormat(d, {
        notation: "compact",
        compactDisplay: "short"
      }),
      r = null != (e = null == (t = c.directoryEntry) ? true : t.guild_count) ? e : 0;
    return 0 === r ? null : M.intl.format(M.t["6IW6Wi"], {
      guildCount: n.format(r)
    })
  }, [null == (t = c.directoryEntry) ? true : t.guild_count, u, d]), m = null == (a = c.categories) || null == (n = a.at(0)) ? true : n.name;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != m && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: k.h_,
      color: "none",
      children: m
    }), null != p && (0, r.jsxs)(o.Text, {
      variant: "text-xs/normal",
      className: k.dS,
      color: "none",
      lineClamp: 1,
      children: [(0, r.jsx)(o.QGJ, {
        size: "xxs",
        color: "currentColor"
      }), p]
    })]
  })
}

function B(e) {
  let {
    app: t
  } = e, {
    tags: n,
    maxParticipants: l = 0
  } = t, c = (0, s.bG)([E.A], () => {
    var e;
    return null != (e = E.A.getGuildId()) ? e : true
  }, []), u = (0, y.s)(t.id), d = (0, s.yK)([j.default, x.A], () => {
    let e = [];
    for (let [t, n] of u.entries()) {
      if (t >= 5) break;
      let r = j.default.getUser(n.author_id),
        i = x.A.isFriend(n.author_id);
      null != r && i && e.push(r)
    }
    return e
  }, [u]), p = i.useMemo(() => {
    if (d.length > 0) return (0, r.jsx)(N.$, {
      activityUsers: d,
      guildId: c,
      activityText: M.intl.formatToPlainString(M.t["IJa+46"], {
        count: d.length
      })
    });
    if (u.some(e => (0, _.CZ)(e) === a.m.GLOBAL)) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Y3C, {
        size: "xxs",
        color: "currentColor"
      }), M.intl.string(M.t.TsWCdW)]
    });
    let e = l > 0 ? M.intl.format(M.t.z8EAJW, {
      count: l
    }) : M.intl.string(M.t.RjceQU);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nys, {
        size: "xxs",
        color: "currentColor"
      }), e]
    })
  }, [u, d, c, l]);
  return (0, r.jsxs)(r.Fragment, {
    children: [n.length > 0 && (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: k.h_,
      color: "none",
      lineClamp: 1,
      children: n.map((e, t) => (0, r.jsx)("span", {
        className: k.Tc,
        children: e
      }, t))
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      className: k.dS,
      color: "none",
      lineClamp: 1,
      children: p
    })]
  })
}