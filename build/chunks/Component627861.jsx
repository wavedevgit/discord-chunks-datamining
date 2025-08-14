/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => eh
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
let es = 8;

function el(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: o,
    activityActionType: a
  } = e, s = Math.max(n, t.length), c = (0, V.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: a
  }), u = [...t];
  for (; u.length < n;) u.push(et.ag);
  for (; u.length < i;) u.push(null);
  return (0, r.jsxs)("div", {
    className: ea.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(et.ZP, {
      guildId: o,
      users: u,
      max: i > 0 ? Math.min(i, es) : es,
      size: et.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function ec(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === er.mFx.STREAM_REQUEST
}

function eu(e, t, n, r) {
  return !(null == e || !(0, Q.Z)(e, n, r.id) || !(0, X.Z)(e, er.xjy.SYNC) || !Z.isPlatformEmbedded || (0, z.g)(t, e))
}

function ed(e) {
  var t, n, o, a, s;
  let {
    application: c,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: f,
    onView: h,
    partyStatusElement: m,
    presenceActivity: g
  } = e, b = (0, z.g)(u, g), y = (0, N.Lz)(g, f.author, "Invite Embed"), O = !(0, Q.Z)(g, f, c.id), v = [], I = i.useMemo(() => {
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
  }, [g]), S = (0, V.dQ)(c.name, null == (t = f.activity) ? true : t.type);
  if (O) {
    let e = (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: ea.description,
      color: "none",
      lineClamp: 1,
      children: eo.intl.string(eo.t["84qx9v"])
    });
    return (0, r.jsx)(_.W, {
      header: S,
      title: c.name,
      iconSrc: C.r9.getWhiteIconURL(),
      info: e,
      actions: v,
      onClickContent: T,
      trackingConfig: {
        id: c.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: h
      }
    })
  } {
    let e = null != g && null != g.details && null != g.state ? eo.intl.formatToPlainString(eo.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : c.name,
      t = null != (a = null == g || null == (n = g.timestamps) ? true : n.start) ? a : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: ea.timestampContainer,
        children: [(0, r.jsx)(l.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(E.x3, {
          entry: {
            start: t,
            end: null == g || null == (o = g.timestamps) ? true : o.end
          },
          textColor: "currentColor",
          textTabularNumbers: false,
          textFontCode: false
        })]
      }) : null,
      u = (0, r.jsxs)("div", {
        className: ea.info,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: ea.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : m]
      });
    return (0, r.jsx)(_.W, {
      header: S,
      title: e,
      iconSrc: null != (s = (0, W.Z)(g, c.id)) ? s : true,
      info: u,
      actions: I,
      onClickContent: T,
      trackingConfig: {
        id: c.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: h
      }
    })
  }
}

function ef(e, t) {
  return {
    openGameProfileModal: (0, I.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: e,
      source: O.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    isGameLaunchable: (0, s.e7)([L.Z, T.Z, U.Z, P.Z], () => (0, F.t)({
      LibraryApplicationStore: L.Z,
      LaunchableGameStore: T.Z,
      DispatchApplicationStore: U.Z,
      ConnectedAppsStore: P.Z,
      applicationId: null != e ? e : ""
    }), [e])
  }
}

function e_(e) {
  let {
    presenceActivity: t
  } = e, n = (0, $.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: er.M7m.DESKTOP
  }), o = i.useMemo(() => n.map(e => {
    switch (e) {
      case $.Ol.MOBILE:
        return (0, r.jsx)(l.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.ANDROID:
        return (0, r.jsx)(en.j, {
          width: a.Z.xxs,
          height: a.Z.xxs,
          color: "currentColor"
        });
      case $.Ol.IOS:
        return (0, r.jsx)(l.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.PLAYSTATION:
        return (0, r.jsx)(l.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.XBOX:
        return (0, r.jsx)(l.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(B.lm), [n]);
  return 0 === o.length ? null : (0, r.jsxs)("div", {
    className: ea.footer,
    children: [(0, r.jsx)("div", {
      className: ea.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: ea.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: ea.footerSupportedPlatformText,
      children: eo.intl.string(eo.t["4dGUPz"])
    })]
  })
}

function ep(e) {
  var t, n, a, h;
  let {
    analyticsLocations: O,
    application: I,
    channel: T,
    currentUserId: S,
    currentUserPresenceActivity: A,
    hideParty: N,
    message: C,
    onView: R,
    partyStatusElement: P,
    presenceActivity: w
  } = e, L = (0, y.A)(I), x = (0, f.ye)(I), {
    bot: M
  } = I, k = G.ZP.getApplicationIconURL({
    id: I.id,
    icon: I.icon,
    bot: M
  }), {
    staticBannerSrc: j,
    videoBannerSrc: U,
    bannerAspectRatio: B
  } = (0, m.E)(I), Z = !(0, Q.Z)(w, C, I.id), F = (0, K.H)(C), W = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]), {
    openGameProfileModal: q,
    isGameLaunchable: $
  } = ef(I.id, C.author.id), {
    openGameProfileModal: et,
    isGameLaunchable: en
  } = ef(null == W ? true : W.id, C.author.id), ei = (0, ee.Z)({
    application: I,
    location: "RichPresenceActivityInviteEmbed",
    analyticsLocations: O
  }), es = i.useMemo(() => null == ei ? null : {
    label: eo.intl.string(eo.t["jaYS/v"]),
    icon: (0, r.jsx)(l.v3n, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    trackingArea: p.j_.CLOUD_PLAY,
    onClick: ei
  }, [ei]), el = (0, H.h)({
    presenceActivity: w,
    currentUserPresenceActivity: A,
    currentUserId: S,
    message: C,
    application: I,
    isEmbeddedApplication: x,
    isFrameApplication: L,
    isGameLaunchable: $
  }), ec = eu(w, A, C, I), ed = (0, z.g)(A, w), ep = (0, Y.L)(w, C, I, S), eh = i.useMemo(() => el ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: p.j_.JOIN,
    onClick: () => {
      var e;
      u.Z.join({
        userId: C.author.id,
        sessionId: w.session_id,
        applicationId: w.application_id,
        channelId: T.id,
        messageId: C.id,
        source: er.Sbl.MESSAGE_EMBED,
        analyticsLocations: O,
        embedded: (0, X.Z)(w, er.xjy.EMBEDDED)
      }), (0, J.Z)({
        type: er.q5t.JOIN,
        source: er.Sbl.MESSAGE_EMBED,
        userId: C.author.id,
        guildId: T.guild_id,
        channelId: T.id,
        applicationId: w.application_id,
        partyId: null == (e = w.party) ? true : e.id,
        messageId: C.id,
        analyticsLocations: O
      })
    }
  } : ec ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: p.j_.SYNC,
    onClick: () => {
      null != w && d.Z_(w, C.author.id)
    }
  } : ep ? {
    label: eo.intl.string(eo.t["hC/Ze3"]),
    trackingArea: p.j_.INVITE,
    onClick: () => {
      null != w && c.Z.sendActivityInvite({
        type: er.mFx.JOIN,
        channelId: T.id,
        activity: w,
        location: er.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: C.author.id === S ? eo.intl.string(eo.t.IBl8IC) : true
  } : ed ? {
    label: eo.intl.string(eo.t.KC26NT),
    trackingArea: p.j_.PLAY,
    onClick: () => {},
    disabledReason: eo.intl.string(eo.t.KC26NT)
  } : null != es ? es : true, [O, el, ep, ec, T.id, T.guild_id, S, ed, C.author.id, C.id, w, es]), em = i.useMemo(() => $ ? {
    label: eo.intl.string(eo.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: I.id
      })
    }
  } : en && (null == W ? true : W.id) != null ? {
    label: eo.intl.string(eo.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: W.id
      })
    }
  } : null != es ? es : true, [I.id, $, en, null == W ? true : W.id, es]), eg = (0, g.G)(I), eE = i.useMemo(() => null != q ? q : null != et ? et : null != eg && x ? eg : true, [x, q, et, eg]), eb = i.useMemo(() => {
    let e = [];
    return Z || null == eh ? Z && null != em && e.push(em) : e.push(eh), e
  }, [em, Z, eh]), ey = (0, V.dQ)(I.name, null == (t = C.activity) ? true : t.type), eO = (0, v.N)(I.id).some(e => (0, b.ig)(e) === o.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.YqE, {
      size: "xxs",
      color: "currentColor"
    }), eo.intl.string(eo.t.TsWCdX)]
  }) : null, ev = (0, r.jsx)(e_, {
    presenceActivity: w
  });
  if (Z) {
    let e = (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: ea.description,
      color: "none",
      lineClamp: 3,
      children: (0, V.wR)(C, I, T, S)
    });
    return (0, r.jsx)(_.W, {
      header: ey,
      title: I.name,
      staticBannerSrc: j,
      videoBannerSrc: U,
      onClickBanner: eE,
      bannerAspectRatio: B,
      iconSrc: null != k ? k : true,
      info: e,
      actions: eb,
      onClickContent: eE,
      trackingConfig: {
        id: I.id,
        linkType: p.Un.RICH_PRESENCE_INVITE,
        onView: R
      }
    })
  }
  let eI = null != (h = null == w || null == (n = w.timestamps) ? true : n.start) ? h : null == w ? true : w.created_at,
    eT = null != eI ? (0, r.jsxs)("div", {
      className: ea.timestampContainer,
      children: [(0, r.jsx)(l.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(E.x3, {
        entry: {
          start: eI,
          end: null == w || null == (a = w.timestamps) ? true : a.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    eS = (0, r.jsxs)(l.Text, {
      variant: "text-xs/normal",
      className: ea.tagline,
      color: "none",
      lineClamp: 2,
      children: [F ? (0, V.$v)(C, I, T, S, Z) : eT, F ? null : eO]
    }),
    eA = (0, r.jsxs)("div", {
      className: ea.info,
      children: [eS, N || F ? null : P]
    });
  return (0, r.jsx)(_.W, {
    header: ey,
    title: I.name,
    staticBannerSrc: j,
    videoBannerSrc: U,
    onClickBanner: eE,
    bannerAspectRatio: B,
    iconSrc: null != k ? k : true,
    info: eA,
    actions: eb,
    onClickContent: eE,
    trackingConfig: {
      id: I.id,
      linkType: p.Un.RICH_PRESENCE_INVITE,
      onView: R
    },
    footer: ev
  })
}

function eh(e) {
  var t, n;
  let {
    analyticsLocations: o,
    app: a,
    channel: l,
    message: c,
    hideParty: u,
    onView: d
  } = e, f = (0, h.O)(a), _ = (0, s.e7)([R.default], () => R.default.getId()), p = (0, s.e7)([M.Z], () => {
    if (null == c.application) return M.Z.findActivity(c.author.id, e => e.type === er.IIU.LISTENING);
    {
      let e = c.author.id;
      return (0, K.H)(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _), M.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, l, _]), m = (0, s.e7)([x.Z, k.Z], () => {
    var e;
    return null != (e = x.Z.getApplicationActivity(f.id)) ? e : k.Z.getApplicationActivity(f.id, true)
  }, [f.id]), g = (0, s.Wu)([w.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, q._)(p), y = i.useMemo(() => g.map(e => {
    let t = j.default.getUser(e);
    return null != t ? t : et.ag
  }), [g]), O = (0, ei.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === C.r9.id, v = (0, r.jsx)(el, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: l.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(ed, {
    application: f,
    currentUserPresenceActivity: m,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  }) : ec(c) ? (0, r.jsx)(S.Z, {
    analyticsLocations: o,
    application: f,
    channel: l,
    currentUserId: _,
    message: c
  }) : (0, r.jsx)(ep, {
    analyticsLocations: o,
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