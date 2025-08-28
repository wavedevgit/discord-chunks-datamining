/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => em
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk705512 = require("./705512.js"),
  Chunk267843 = require("./267843.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk224706 = require("./224706.js"),
  Chunk763472 = require("./763472.js"),
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
  Chunk723295 = require("./723295.js");
let el = 8;

function ec(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: o
  } = e, s = Math.max(n, t.length), c = (0, H.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: o
  }), u = [...t];
  for (; u.length < n && u.length < el;) u.push(en.ag);
  for (; u.length < i && u.length < el;) u.push(null);
  return (0, r.jsxs)("div", {
    className: es.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(en.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, el) : el,
      size: en.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function eu(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === ei.mFx.STREAM_REQUEST
}

function ed(e, t, n, r) {
  return !(null == e || !(0, J.Z)(e, n, r.id) || !(0, Q.Z)(e, ei.xjy.SYNC) || !F.isPlatformEmbedded || (0, q.g)(t, e))
}

function ef(e) {
  var t, n, a, o, s;
  let {
    application: c,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: f,
    onView: h,
    partyStatusElement: m,
    presenceActivity: g
  } = e, b = (0, q.g)(u, g), y = (0, C.Lz)(g, f.author, "Invite Embed"), O = !(0, J.Z)(g, f, c.id), v = [], I = i.useMemo(() => {
    let e = [];
    if (!b) {
      var t;
      e.push({
        label: null != (t = y.label) ? t : eo.intl.string(eo.t.VJlc0d),
        trackingArea: p.j_.SYNC,
        onClick: () => {
          y.onClick()
        },
        disabledReason: y.disabled ? y.tooltip : true
      })
    }
    return e
  }, [b, y]), T = i.useMemo(() => {
    if (null != g) return () => (0, A.aG)(g)
  }, [g]), S = (0, H.dQ)(c.name, null == (t = f.activity) ? true : t.type);
  if (O) {
    let e = (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: es.description,
      color: "none",
      lineClamp: 1,
      children: eo.intl.string(eo.t["84qx9v"])
    });
    return (0, r.jsx)(_.W, {
      header: S,
      title: c.name,
      iconSrc: N.r9.getWhiteIconURL(),
      info: e,
      actions: v,
      onClickContent: T,
      trackingConfig: {
        id: c.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: h,
        referrerId: f.author.id
      }
    })
  } {
    let e = null != g && null != g.details && null != g.state ? eo.intl.formatToPlainString(eo.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : c.name,
      t = null != (o = null == g || null == (n = g.timestamps) ? true : n.start) ? o : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: es.timestampContainer,
        children: [(0, r.jsx)(l.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(E.x3, {
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
        className: es.info,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: es.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : m]
      });
    return (0, r.jsx)(_.W, {
      header: S,
      title: e,
      iconSrc: null != (s = (0, K.Z)(g, c.id)) ? s : true,
      info: u,
      actions: I,
      onClickContent: T,
      trackingConfig: {
        id: c.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: h,
        referrerId: f.author.id
      }
    })
  }
}

function e_(e, t) {
  return {
    openGameProfileModal: (0, I.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: e,
      source: O.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    isGameLaunchable: (0, s.e7)([x.Z, T.Z, G.Z, P.Z], () => (0, V.t)({
      LibraryApplicationStore: x.Z,
      LaunchableGameStore: T.Z,
      DispatchApplicationStore: G.Z,
      ConnectedAppsStore: P.Z,
      applicationId: null != e ? e : ""
    }), [e])
  }
}

function ep(e) {
  let {
    presenceActivity: t
  } = e, n = (0, ee.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: ei.M7m.DESKTOP
  }), a = i.useMemo(() => n.map(e => {
    switch (e) {
      case ee.Ol.MOBILE:
        return (0, r.jsx)(l.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.ANDROID:
        return (0, r.jsx)(er.j, {
          width: o.Z.xxs,
          height: o.Z.xxs,
          color: "currentColor"
        });
      case ee.Ol.IOS:
        return (0, r.jsx)(l.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.PLAYSTATION:
        return (0, r.jsx)(l.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.XBOX:
        return (0, r.jsx)(l.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(Z.lm), [n]);
  return 0 === a.length ? null : (0, r.jsxs)("div", {
    className: es.footer,
    children: [(0, r.jsx)("div", {
      className: es.footerSupportedPlatformIconsContainer,
      children: a.map((e, t) => (0, r.jsx)("div", {
        className: es.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: es.footerSupportedPlatformText,
      children: eo.intl.string(eo.t["4dGUPz"])
    })]
  })
}

function eh(e) {
  var t, n, o, h;
  let {
    analyticsLocations: O,
    application: I,
    channel: T,
    currentUserId: S,
    currentUserPresenceActivity: A,
    hideParty: C,
    message: N,
    onView: R,
    partyStatusElement: P,
    presenceActivity: w
  } = e, x = (0, y.A)(I), L = (0, f.ye)(I), {
    bot: j
  } = I, M = B.ZP.getApplicationIconURL({
    id: I.id,
    icon: I.icon,
    bot: j
  }), {
    staticBannerSrc: k,
    videoBannerSrc: G,
    bannerAspectRatio: Z
  } = (0, m.E)(I), F = !(0, J.Z)(w, N, I.id), V = (0, z.H)(N), K = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]), {
    openGameProfileModal: X,
    isGameLaunchable: ee
  } = e_(I.id, N.author.id), {
    openGameProfileModal: en,
    isGameLaunchable: er
  } = e_(null == K ? true : K.id, N.author.id), ea = (0, et.Z)({
    application: I,
    location: "RichPresenceActivityInviteEmbed",
    analyticsLocations: O
  }), el = i.useMemo(() => null == ea ? null : {
    label: eo.intl.string(eo.t["jaYS/v"]),
    icon: (0, r.jsx)(l.v3n, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    trackingArea: p.j_.CLOUD_PLAY,
    onClick: ea
  }, [ea]), {
    canJoin: ec,
    remoteJoinPlatform: eu
  } = (0, Y.h)({
    presenceActivity: w,
    currentUserPresenceActivity: A,
    currentUserId: S,
    message: N,
    application: I,
    isEmbeddedApplication: L,
    isFrameApplication: x,
    isGameLaunchable: ee
  }), ef = ed(w, A, N, I), eh = (0, q.g)(A, w), em = (0, W.L)(w, N, I, S), eg = (0, s.e7)([U.Z], () => null != w && null != w.application_id && U.Z.getState(w.application_id, ei.mFx.JOIN) === ei.OcF.LOADING), eE = i.useMemo(() => ec ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: p.j_.JOIN,
    submitting: eg,
    onClick: () => {
      var e, t;
      u.Z.join({
        userId: N.author.id,
        sessionId: w.session_id,
        applicationId: w.application_id,
        channelId: T.id,
        messageId: N.id,
        source: ei.Sbl.MESSAGE_EMBED,
        analyticsLocations: O,
        embedded: (0, Q.Z)(w, ei.xjy.EMBEDDED),
        remotePartyId: null != eu ? null == (e = w.party) ? true : e.id : true
      }), (0, $.Z)({
        type: ei.q5t.JOIN,
        source: ei.Sbl.MESSAGE_EMBED,
        userId: N.author.id,
        guildId: T.guild_id,
        channelId: T.id,
        applicationId: w.application_id,
        partyId: null == (t = w.party) ? true : t.id,
        messageId: N.id,
        analyticsLocations: O
      })
    }
  } : ef ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: p.j_.SYNC,
    onClick: () => {
      null != w && d.Z_(w, N.author.id)
    }
  } : em ? {
    label: eo.intl.string(eo.t["hC/Ze3"]),
    trackingArea: p.j_.INVITE,
    onClick: () => {
      null != w && c.Z.sendActivityInvite({
        type: ei.mFx.JOIN,
        channelId: T.id,
        activity: w,
        location: ei.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: N.author.id === S ? eo.intl.string(eo.t.IBl8IC) : true
  } : eh ? {
    label: eo.intl.string(eo.t.KC26NT),
    trackingArea: p.j_.PLAY,
    onClick: () => {},
    disabledReason: eo.intl.string(eo.t.KC26NT)
  } : null != el ? el : true, [ec, ef, em, eh, el, N.author.id, N.id, w, T.id, T.guild_id, O, eu, S, eg]), eb = i.useMemo(() => ee ? {
    label: eo.intl.string(eo.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: I.id
      })
    }
  } : er && (null == K ? true : K.id) != null ? {
    label: eo.intl.string(eo.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: K.id
      })
    }
  } : null != el ? el : true, [I.id, ee, er, null == K ? true : K.id, el]), ey = (0, g.G)(I), eO = i.useMemo(() => null != X ? X : null != en ? en : null != ey && L ? ey : true, [L, X, en, ey]), ev = i.useMemo(() => {
    let e = [];
    return F || null == eE ? F && null != eb && e.push(eb) : e.push(eE), e
  }, [eb, F, eE]), eI = (0, H.dQ)(I.name, null == (t = N.activity) ? true : t.type), eT = (0, v.N)(I.id).some(e => (0, b.ig)(e) === a.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.YqE, {
      size: "xxs",
      color: "currentColor"
    }), eo.intl.string(eo.t.TsWCdX)]
  }) : null, eS = (0, r.jsx)(ep, {
    presenceActivity: w
  });
  if (F) {
    let e = (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: es.description,
      color: "none",
      lineClamp: 3,
      children: (0, H.wR)(N, I, T, S)
    });
    return (0, r.jsx)(_.W, {
      header: eI,
      title: I.name,
      staticBannerSrc: k,
      videoBannerSrc: G,
      onClickBanner: eO,
      bannerAspectRatio: Z,
      iconSrc: null != M ? M : true,
      info: e,
      actions: ev,
      onClickContent: eO,
      trackingConfig: {
        id: I.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: R,
        referrerId: N.author.id
      }
    })
  }
  let eA = null != (h = null == w || null == (n = w.timestamps) ? true : n.start) ? h : null == w ? true : w.created_at,
    eC = null != eA ? (0, r.jsxs)("div", {
      className: es.timestampContainer,
      children: [(0, r.jsx)(l.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(E.x3, {
        entry: {
          start: eA,
          end: null == w || null == (o = w.timestamps) ? true : o.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    eN = (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: es.tagline,
      color: "none",
      lineClamp: 2,
      children: [V ? (0, H.$v)(N, I, T, S, F) : eC, V ? null : eT]
    }),
    eR = (0, r.jsxs)("div", {
      className: es.info,
      children: [eN, C || V ? null : P]
    });
  return (0, r.jsx)(_.W, {
    header: eI,
    title: I.name,
    staticBannerSrc: k,
    videoBannerSrc: G,
    onClickBanner: eO,
    bannerAspectRatio: Z,
    iconSrc: null != M ? M : true,
    info: eR,
    actions: ev,
    onClickContent: eO,
    trackingConfig: {
      id: I.id,
      linkType: p.Un.RICH_PRESENCE_INVITE,
      onView: R,
      referrerId: N.author.id
    },
    footer: eS
  })
}

function em(e) {
  var t, n;
  let {
    analyticsLocations: a,
    app: o,
    channel: l,
    message: c,
    hideParty: u,
    onView: d
  } = e, f = (0, h.O)(o), _ = (0, s.e7)([R.default], () => R.default.getId()), p = (0, s.e7)([j.Z], () => {
    if (null == c.application) return j.Z.findActivity(c.author.id, e => e.type === ei.IIU.LISTENING);
    {
      let e = c.author.id;
      return (0, z.H)(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _), j.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, l, _]), m = (0, s.e7)([L.Z, M.Z], () => {
    var e;
    return null != (e = L.Z.getApplicationActivity(f.id)) ? e : M.Z.getApplicationActivity(f.id, true)
  }, [f.id]), g = (0, s.Wu)([w.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, X._)(p), y = i.useMemo(() => g.map(e => {
    let t = k.default.getUser(e);
    return null != t ? t : en.ag
  }), [g]), O = (0, ea.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === N.r9.id, v = (0, r.jsx)(ec, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: l.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(ef, {
    application: f,
    currentUserPresenceActivity: m,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  }) : eu(c) ? (0, r.jsx)(S.Z, {
    analyticsLocations: a,
    application: f,
    channel: l,
    currentUserId: _,
    message: c
  }) : (0, r.jsx)(eh, {
    analyticsLocations: a,
    application: f,
    channel: l,
    currentUserId: _,
    currentUserPresenceActivity: m,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  })
}