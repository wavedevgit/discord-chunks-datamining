/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => eb
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk705512 = require("./705512.js"),
  Chunk267843 = require("./267843.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk224706 = require("./224706.js"),
  Chunk763472 = require("./763472.js"),
  Chunk213609 = require("./213609.js"),
  Chunk783097 = require("./783097.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk172109 = require("./172109.js"),
  Chunk880251 = require("./880251.js"),
  Chunk515344 = require("./515344.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk813370 = require("./813370.js"),
  Chunk810568 = require("./810568.js"),
  Chunk567409 = require("./567409.js"),
  Chunk168524 = require("./168524.js"),
  Chunk592745 = require("./592745.js"),
  Chunk956512 = require("./956512.jsx"),
  Chunk952164 = require("./952164.js"),
  Chunk829820 = require("./829820.js"),
  Chunk789407 = require("./789407.js"),
  Chunk314897 = require("./314897.js"),
  Chunk757266 = require("./757266.js"),
  Chunk831506 = require("./831506.js"),
  Chunk77498 = require("./77498.js"),
  Chunk283595 = require("./283595.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk181106 = require("./181106.js"),
  Chunk417363 = require("./417363.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk804739 = require("./804739.js"),
  Chunk758371 = require("./758371.js"),
  Chunk931271 = require("./931271.js"),
  Chunk565201 = require("./565201.js"),
  Chunk276852 = require("./276852.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk984211 = require("./984211.js"),
  Chunk935153 = require("./935153.js"),
  Chunk620662 = require("./620662.js"),
  Chunk994339 = require("./994339.js"),
  Chunk275920 = require("./275920.js"),
  Chunk561766 = require("./561766.js"),
  Chunk206074 = require("./206074.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk404174 = require("./404174.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463736 = require("./463736.js");
let ed = 8;

function ef(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: o
  } = e, s = Math.max(n, t.length), l = (0, W.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: o
  }), u = [...t];
  for (; u.length < n && u.length < ed;) u.push(ea.ag);
  for (; u.length < i && u.length < ed;) u.push(null);
  return (0, r.jsxs)("div", {
    className: eu.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(ea.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, ed) : ed,
      size: ea.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: l
    })]
  })
}

function e_(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === es.mFx.STREAM_REQUEST
}

function ep(e, t, n, r) {
  return !(null == e || !(0, et.Z)(e, n, r.id) || !(0, ee.Z)(e, es.xjy.SYNC) || !H.isPlatformEmbedded || (0, Q.g)(t, e))
}

function eh(e) {
  var t, n, a, o, s;
  let {
    application: l,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: f,
    onView: _,
    partyStatusElement: p,
    presenceActivity: g
  } = e, E = (0, Q.g)(u, g), b = (0, R.Lz)(g, f.author, "Invite Embed"), O = !(0, et.Z)(g, f, l.id), v = [], I = i.useMemo(() => {
    let e = [];
    if (!E) {
      var t;
      e.push({
        label: null != (t = b.label) ? t : ec.intl.string(ec.t.VJlc0d),
        trackingArea: m.j_.SYNC,
        onClick: () => {
          b.onClick()
        },
        disabledReason: b.disabled ? b.tooltip : true
      })
    }
    return e
  }, [E, b]), T = i.useMemo(() => {
    if (null != g) return () => (0, N.aG)(g)
  }, [g]), S = (0, W.dQ)(l.name, null == (t = f.activity) ? true : t.type);
  if (O) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: eu.description,
      color: "none",
      lineClamp: 1,
      children: ec.intl.string(ec.t["84qx9v"])
    });
    return (0, r.jsx)(h.W, {
      header: S,
      title: l.name,
      iconSrc: P.r9.getWhiteIconURL(),
      info: e,
      actions: v,
      onClickContent: T,
      trackingConfig: {
        id: l.id,
        linkType: m.Un.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id
      }
    })
  } {
    let e = null != g && null != g.details && null != g.state ? ec.intl.formatToPlainString(ec.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : l.name,
      t = null != (o = null == g || null == (n = g.timestamps) ? true : n.start) ? o : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: eu.timestampContainer,
        children: [(0, r.jsx)(c.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(y.x3, {
          entry: {
            start: t,
            end: null == g || null == (a = g.timestamps) ? true : a.end
          },
          textColor: "currentColor",
          textTabularNumbers: false,
          textFontCode: false
        })]
      }) : null,
      u = (0, r.jsxs)("div", {
        className: eu.info,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: eu.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : p]
      });
    return (0, r.jsx)(h.W, {
      header: S,
      title: e,
      iconSrc: null != (s = (0, q.Z)(g, l.id)) ? s : true,
      info: u,
      actions: I,
      onClickContent: T,
      trackingConfig: {
        id: l.id,
        linkType: m.Un.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id
      }
    })
  }
}

function em(e, t) {
  return {
    openGameProfileModal: (0, S.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: e,
      source: I.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    isGameLaunchable: (0, l.e7)([j.Z, A.Z, Z.Z, D.Z], () => (0, Y.t)({
      LibraryApplicationStore: j.Z,
      LaunchableGameStore: A.Z,
      DispatchApplicationStore: Z.Z,
      ConnectedAppsStore: D.Z,
      applicationId: null != e ? e : ""
    }), [e])
  }
}

function eg(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, er.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: es.M7m.DESKTOP
  }), o = i.useMemo(() => a.map(e => {
    switch (e) {
      case er.Ol.MOBILE:
        return (0, r.jsx)(c.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case er.Ol.ANDROID:
        return (0, r.jsx)(eo.j, {
          width: s.Z.xxs,
          height: s.Z.xxs,
          color: "currentColor"
        });
      case er.Ol.IOS:
        return (0, r.jsx)(c.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case er.Ol.PLAYSTATION:
        return (0, r.jsx)(c.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case er.Ol.XBOX:
        return (0, r.jsx)(c.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(V.lm), [a]);
  if (!(null != n || o.length > 0)) return null;
  let l = null != n ? (0, $.V)(n) : ec.intl.string(ec.t["4dGUPz"]);
  return (0, r.jsxs)("div", {
    className: eu.footer,
    children: [(0, r.jsx)("div", {
      className: eu.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: eu.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: eu.footerSupportedPlatformText,
      children: l
    })]
  })
}

function eE(e) {
  var t, n, s, g;
  let {
    analyticsLocations: I,
    application: S,
    channel: A,
    currentUserId: C,
    currentUserPresenceActivity: N,
    hideParty: R,
    message: P,
    onView: w,
    partyStatusElement: D,
    presenceActivity: x
  } = e, j = (0, v.A)(S), M = (0, p.ye)(S), {
    bot: k
  } = S, U = F.ZP.getApplicationIconURL({
    id: S.id,
    icon: S.icon,
    bot: k
  }), {
    staticBannerSrc: G,
    videoBannerSrc: Z,
    bannerAspectRatio: V
  } = (0, E.E)(S), H = !(0, et.Z)(x, P, S.id), Y = (0, X.H)(P), q = (0, l.e7)([L.Z], () => L.Z.getGameByName(S.name), [S.name]), {
    openGameProfileModal: J,
    isGameLaunchable: $
  } = em(S.id, P.author.id), {
    openGameProfileModal: er,
    isGameLaunchable: ea
  } = em(null == q ? true : q.id, P.author.id), eo = (0, ei.Z)({
    application: S,
    analyticsLocations: I
  }), el = i.useMemo(() => null == eo ? null : {
    label: ec.intl.string(ec.t["jaYS/v"]),
    icon: (0, r.jsx)(c.v3n, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    trackingArea: m.j_.CLOUD_PLAY,
    onClick: eo
  }, [eo]), {
    canJoin: ed,
    remoteJoinPlatform: ef
  } = (0, K.h)({
    presenceActivity: x,
    currentUserPresenceActivity: N,
    currentUserId: C,
    message: P,
    application: S,
    isEmbeddedApplication: M,
    isFrameApplication: j,
    isGameLaunchable: $
  }), e_ = ep(x, N, P, S), eh = (0, Q.g)(N, x), eE = (0, z.L)(x, P, S, C), eb = (0, l.e7)([B.Z], () => null != x && null != x.application_id && B.Z.getState(x.application_id, es.mFx.JOIN) === es.OcF.LOADING), ey = i.useMemo(() => ed ? {
    label: ec.intl.string(ec.t.VJlc0d),
    trackingArea: m.j_.JOIN,
    submitting: eb,
    onClick: () => {
      var e, t;
      d.Z.join({
        userId: P.author.id,
        sessionId: x.session_id,
        applicationId: x.application_id,
        channelId: A.id,
        messageId: P.id,
        source: es.Sbl.MESSAGE_EMBED,
        analyticsLocations: I,
        embedded: (0, ee.Z)(x, es.xjy.EMBEDDED),
        remotePartyId: null != ef ? null == (e = x.party) ? true : e.id : true
      }), (0, en.Z)({
        type: es.q5t.JOIN,
        source: es.Sbl.MESSAGE_EMBED,
        userId: P.author.id,
        guildId: A.guild_id,
        channelId: A.id,
        applicationId: x.application_id,
        partyId: null == (t = x.party) ? true : t.id,
        messageId: P.id,
        analyticsLocations: I,
        remoteJoinPlatform: ef
      })
    }
  } : e_ ? {
    label: ec.intl.string(ec.t.VJlc0d),
    trackingArea: m.j_.SYNC,
    onClick: () => {
      null != x && f.Z_(x, P.author.id)
    }
  } : eE ? {
    label: ec.intl.string(ec.t["hC/Ze3"]),
    trackingArea: m.j_.INVITE,
    onClick: () => {
      null != x && u.Z.sendActivityInvite({
        type: es.mFx.JOIN,
        channelId: A.id,
        activity: x,
        location: es.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: P.author.id === C ? ec.intl.string(ec.t.IBl8IC) : true
  } : eh ? {
    label: ec.intl.string(ec.t.KC26NT),
    trackingArea: m.j_.PLAY,
    onClick: () => {},
    disabledReason: ec.intl.string(ec.t.KC26NT)
  } : null != el ? el : true, [ed, e_, eE, eh, el, P.author.id, P.id, x, A.id, A.guild_id, I, ef, C, eb]), eO = i.useMemo(() => $ ? {
    label: ec.intl.string(ec.t.RscU7O),
    trackingArea: m.j_.PLAY,
    onClick: () => {
      d.Z.launch({
        applicationId: S.id
      })
    }
  } : ea && (null == q ? true : q.id) != null ? {
    label: ec.intl.string(ec.t.RscU7O),
    trackingArea: m.j_.PLAY,
    onClick: () => {
      d.Z.launch({
        applicationId: q.id
      })
    }
  } : null != el ? el : true, [S.id, $, ea, null == q ? true : q.id, el]), ev = (0, b.G)(S), eI = i.useMemo(() => null != J ? J : null != er ? er : null != ev && M ? ev : true, [M, J, er, ev]), eT = i.useMemo(() => {
    let e = [];
    return H || null == ey ? H && null != eO && e.push(eO) : e.push(ey), e
  }, [eO, H, ey]), eS = i.useMemo(() => eT.some(e => e.trackingArea === m.j_.CLOUD_PLAY), [eT]);
  (0, _.Z)({
    name: a.ImpressionNames.CLOUD_PLAY_CTA,
    type: a.ImpressionTypes.VIEW,
    properties: {
      location_stack: I
    }
  }, {
    disableTrack: !eS
  });
  let eA = (0, W.dQ)(S.name, null == (t = P.activity) ? true : t.type),
    eC = (0, T.N)(S.id).some(e => (0, O.ig)(e) === o.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.YqE, {
        size: "xxs",
        color: "currentColor"
      }), ec.intl.string(ec.t.TsWCdX)]
    }) : null,
    eN = eh ? null : (0, r.jsx)(eg, {
      presenceActivity: x,
      remoteJoinPlatform: ef
    });
  if (H) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: eu.description,
      color: "none",
      lineClamp: 3,
      children: (0, W.wR)(P, S, A, C)
    });
    return (0, r.jsx)(h.W, {
      header: eA,
      title: S.name,
      staticBannerSrc: G,
      videoBannerSrc: Z,
      onClickBanner: eI,
      bannerAspectRatio: V,
      iconSrc: null != U ? U : true,
      info: e,
      actions: eT,
      onClickContent: eI,
      trackingConfig: {
        id: S.id,
        linkType: m.Un.RICH_PRESENCE_INVITE,
        onView: w,
        referrerId: P.author.id
      }
    })
  }
  let eR = null != (g = null == x || null == (n = x.timestamps) ? true : n.start) ? g : null == x ? true : x.created_at,
    eP = null != eR ? (0, r.jsxs)("div", {
      className: eu.timestampContainer,
      children: [(0, r.jsx)(c.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(y.x3, {
        entry: {
          start: eR,
          end: null == x || null == (s = x.timestamps) ? true : s.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    ew = (0, r.jsxs)(c.Text, {
      variant: "text-xs/normal",
      className: eu.tagline,
      color: "none",
      lineClamp: 2,
      children: [Y ? (0, W.$v)(P, S, A, C, H) : eP, Y ? null : eC]
    }),
    eD = (0, r.jsxs)("div", {
      className: eu.info,
      children: [ew, R || Y ? null : D]
    });
  return (0, r.jsx)(h.W, {
    header: eA,
    title: S.name,
    staticBannerSrc: G,
    videoBannerSrc: Z,
    onClickBanner: eI,
    bannerAspectRatio: V,
    iconSrc: null != U ? U : true,
    info: eD,
    actions: eT,
    onClickContent: eI,
    trackingConfig: {
      id: S.id,
      linkType: m.Un.RICH_PRESENCE_INVITE,
      onView: w,
      referrerId: P.author.id
    },
    footer: eN
  })
}

function eb(e) {
  var t, n;
  let {
    analyticsLocations: a,
    app: o,
    channel: s,
    message: c,
    hideParty: u,
    onView: d
  } = e, f = (0, g.O)(o), _ = (0, l.e7)([w.default], () => w.default.getId()), p = (0, l.e7)([k.Z], () => {
    if (null == c.application) return k.Z.findActivity(c.author.id, e => e.type === es.IIU.LISTENING);
    {
      let e = c.author.id;
      return (0, X.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _), k.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, s, _]), h = (0, l.e7)([M.Z, U.Z], () => {
    var e;
    return null != (e = M.Z.getApplicationActivity(f.id)) ? e : U.Z.getApplicationActivity(f.id, true)
  }, [f.id]), m = (0, l.Wu)([x.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = x.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, J._)(p), y = i.useMemo(() => m.map(e => {
    let t = G.default.getUser(e);
    return null != t ? t : ea.ag
  }), [m]), O = (0, el.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === P.r9.id, v = (0, r.jsx)(ef, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: s.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(eh, {
    application: f,
    currentUserPresenceActivity: h,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  }) : e_(c) ? (0, r.jsx)(C.Z, {
    analyticsLocations: a,
    application: f,
    channel: s,
    currentUserId: _,
    message: c
  }) : (0, r.jsx)(eE, {
    analyticsLocations: a,
    application: f,
    channel: s,
    currentUserId: _,
    currentUserPresenceActivity: h,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  })
}