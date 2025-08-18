/** Chunk was on 91173 **/
/** chunk id: 627861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => ep
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

function eo(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: l,
    activityActionType: a
  } = e, o = Math.max(n, t.length), c = (0, H.yy)({
    maxPartySize: i,
    partySize: o,
    activityActionType: a
  }), u = [...t];
  for (; u.length < n && u.length < 8;) u.push(et.ag);
  for (; u.length < i && u.length < 8;) u.push(null);
  return (0, r.jsxs)("div", {
    className: ea.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(et.ZP, {
      guildId: l,
      users: u,
      max: i > 0 ? Math.min(i, 8) : 8,
      size: et.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function es(e) {
  var t, n, l, a, o;
  let {
    application: c,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: p,
    onView: _,
    partyStatusElement: g,
    presenceActivity: h
  } = e, E = (0, K.g)(u, h), C = (0, S.Lz)(h, p.author, "Invite Embed"), v = !(0, Q.Z)(h, p, c.id), O = i.useMemo(() => {
    let e = [];
    if (!E) {
      var t;
      e.push({
        label: null != (t = C.label) ? t : el.intl.string(el.t.VJlc0d),
        trackingArea: f.j_.SYNC,
        onClick: () => {
          C.onClick()
        },
        disabledReason: C.disabled ? C.tooltip : true
      })
    }
    return e
  }, [E, C]), y = i.useMemo(() => {
    if (null != h) return () => (0, I.aG)(h)
  }, [h]), x = (0, H.dQ)(c.name, null == (t = p.activity) ? true : t.type);
  if (v) {
    let e = (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: ea.description,
      color: "none",
      lineClamp: 1,
      children: el.intl.string(el.t["84qx9v"])
    });
    return (0, r.jsx)(m.W, {
      header: x,
      title: c.name,
      iconSrc: T.r9.getWhiteIconURL(),
      info: e,
      actions: [],
      onClickContent: y,
      trackingConfig: {
        id: c.id,
        linkType: f.Un.RICH_PRESENCE_INVITE,
        onView: _
      }
    })
  } {
    let e = null != h && null != h.details && null != h.state ? el.intl.formatToPlainString(el.t.JCvHt7, {
        track: h.details,
        artist: h.state
      }) : c.name,
      t = null != (a = null == h || null == (n = h.timestamps) ? true : n.start) ? a : null == h ? true : h.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: ea.timestampContainer,
        children: [(0, r.jsx)(s.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(b.x3, {
          entry: {
            start: t,
            end: null == h || null == (l = h.timestamps) ? true : l.end
          },
          textColor: "currentColor",
          textTabularNumbers: false,
          textFontCode: false
        })]
      }) : null,
      u = (0, r.jsxs)("div", {
        className: ea.info,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: ea.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : g]
      });
    return (0, r.jsx)(m.W, {
      header: x,
      title: e,
      iconSrc: null != (o = (0, W.Z)(h, c.id)) ? o : true,
      info: u,
      actions: O,
      onClickContent: y,
      trackingConfig: {
        id: c.id,
        linkType: f.Un.RICH_PRESENCE_INVITE,
        onView: _
      }
    })
  }
}

function ec(e, t) {
  return {
    openGameProfileModal: (0, y.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: e,
      source: v.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    isGameLaunchable: (0, o.e7)([Z.Z, x.Z, k.Z, N.Z], () => (0, G.t)({
      LibraryApplicationStore: Z.Z,
      LaunchableGameStore: x.Z,
      DispatchApplicationStore: k.Z,
      ConnectedAppsStore: N.Z,
      applicationId: null != e ? e : ""
    }), [e])
  }
}

function eu(e) {
  let {
    presenceActivity: t
  } = e, n = (0, $.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: er.M7m.DESKTOP
  }), l = i.useMemo(() => n.map(e => {
    switch (e) {
      case $.Ol.MOBILE:
        return (0, r.jsx)(s.AtH, {
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
        return (0, r.jsx)(s.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.PLAYSTATION:
        return (0, r.jsx)(s.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.XBOX:
        return (0, r.jsx)(s.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(F.lm), [n]);
  return 0 === l.length ? null : (0, r.jsxs)("div", {
    className: ea.footer,
    children: [(0, r.jsx)("div", {
      className: ea.footerSupportedPlatformIconsContainer,
      children: l.map((e, t) => (0, r.jsx)("div", {
        className: ea.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: ea.footerSupportedPlatformText,
      children: el.intl.string(el.t["4dGUPz"])
    })]
  })
}

function ed(e) {
  var t, n, a, _;
  let {
    analyticsLocations: v,
    application: y,
    channel: x,
    currentUserId: j,
    currentUserPresenceActivity: I,
    hideParty: S,
    message: T,
    onView: P,
    partyStatusElement: N,
    presenceActivity: A
  } = e, Z = (0, C.A)(y), R = (0, p.ye)(y), {
    bot: D
  } = y, L = U.ZP.getApplicationIconURL({
    id: y.id,
    icon: y.icon,
    bot: D
  }), {
    staticBannerSrc: M,
    videoBannerSrc: k,
    bannerAspectRatio: F
  } = (0, g.E)(y), G = !(0, Q.Z)(A, T, y.id), W = (0, Y.H)(T), X = (0, o.e7)([w.Z], () => w.Z.getGameByName(y.name), [y.name]), {
    openGameProfileModal: $,
    isGameLaunchable: et
  } = ec(y.id, T.author.id), {
    openGameProfileModal: en,
    isGameLaunchable: ei
  } = ec(null == X ? true : X.id, T.author.id), eo = (0, ee.Z)({
    application: y,
    location: "RichPresenceActivityInviteEmbed",
    analyticsLocations: v
  }), es = i.useMemo(() => null == eo ? null : {
    label: el.intl.string(el.t["jaYS/v"]),
    icon: (0, r.jsx)(s.v3n, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    trackingArea: f.j_.CLOUD_PLAY,
    onClick: eo
  }, [eo]), ed = (0, V.h)({
    presenceActivity: A,
    currentUserPresenceActivity: I,
    currentUserId: j,
    message: T,
    application: y,
    isEmbeddedApplication: R,
    isFrameApplication: Z,
    isGameLaunchable: et
  }), ep = !(null == A || !(0, Q.Z)(A, T, y.id) || !(0, q.Z)(A, er.xjy.SYNC) || !B.isPlatformEmbedded || (0, K.g)(I, A)), em = (0, K.g)(I, A), ef = (0, z.L)(A, T, y, j), e_ = i.useMemo(() => ed ? {
    label: el.intl.string(el.t.VJlc0d),
    trackingArea: f.j_.JOIN,
    onClick: () => {
      var e;
      u.Z.join({
        userId: T.author.id,
        sessionId: A.session_id,
        applicationId: A.application_id,
        channelId: x.id,
        messageId: T.id,
        source: er.Sbl.MESSAGE_EMBED,
        analyticsLocations: v,
        embedded: (0, q.Z)(A, er.xjy.EMBEDDED)
      }), (0, J.Z)({
        type: er.q5t.JOIN,
        source: er.Sbl.MESSAGE_EMBED,
        userId: T.author.id,
        guildId: x.guild_id,
        channelId: x.id,
        applicationId: A.application_id,
        partyId: null == (e = A.party) ? true : e.id,
        messageId: T.id,
        analyticsLocations: v
      })
    }
  } : ep ? {
    label: el.intl.string(el.t.VJlc0d),
    trackingArea: f.j_.SYNC,
    onClick: () => {
      null != A && d.Z_(A, T.author.id)
    }
  } : ef ? {
    label: el.intl.string(el.t["hC/Ze3"]),
    trackingArea: f.j_.INVITE,
    onClick: () => {
      null != A && c.Z.sendActivityInvite({
        type: er.mFx.JOIN,
        channelId: x.id,
        activity: A,
        location: er.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: T.author.id === j ? el.intl.string(el.t.IBl8IC) : true
  } : em ? {
    label: el.intl.string(el.t.KC26NT),
    trackingArea: f.j_.PLAY,
    onClick: () => {},
    disabledReason: el.intl.string(el.t.KC26NT)
  } : null != es ? es : true, [v, ed, ef, ep, x.id, x.guild_id, j, em, T.author.id, T.id, A, es]), eg = i.useMemo(() => et ? {
    label: el.intl.string(el.t.RscU7O),
    trackingArea: f.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: y.id
      })
    }
  } : ei && (null == X ? true : X.id) != null ? {
    label: el.intl.string(el.t.RscU7O),
    trackingArea: f.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: X.id
      })
    }
  } : null != es ? es : true, [y.id, et, ei, null == X ? true : X.id, es]), eh = (0, h.G)(y), eb = i.useMemo(() => null != $ ? $ : null != en ? en : null != eh && R ? eh : true, [R, $, en, eh]), eE = i.useMemo(() => {
    let e = [];
    return G || null == e_ ? G && null != eg && e.push(eg) : e.push(e_), e
  }, [eg, G, e_]), eC = (0, H.dQ)(y.name, null == (t = T.activity) ? true : t.type), ev = (0, O.N)(y.id).some(e => (0, E.ig)(e) === l.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.YqE, {
      size: "xxs",
      color: "currentColor"
    }), el.intl.string(el.t.TsWCdX)]
  }) : null, eO = (0, r.jsx)(eu, {
    presenceActivity: A
  });
  if (G) {
    let e = (0, r.jsx)(s.Text, {
      variant: "text-xs/medium",
      className: ea.description,
      color: "none",
      lineClamp: 3,
      children: (0, H.wR)(T, y, x, j)
    });
    return (0, r.jsx)(m.W, {
      header: eC,
      title: y.name,
      staticBannerSrc: M,
      videoBannerSrc: k,
      onClickBanner: eb,
      bannerAspectRatio: F,
      iconSrc: null != L ? L : true,
      info: e,
      actions: eE,
      onClickContent: eb,
      trackingConfig: {
        id: y.id,
        linkType: f.Un.RICH_PRESENCE_INVITE,
        onView: P
      }
    })
  }
  let ey = null != (_ = null == A || null == (n = A.timestamps) ? true : n.start) ? _ : null == A ? true : A.created_at,
    ex = null != ey ? (0, r.jsxs)("div", {
      className: ea.timestampContainer,
      children: [(0, r.jsx)(s.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(b.x3, {
        entry: {
          start: ey,
          end: null == A || null == (a = A.timestamps) ? true : a.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    ej = (0, r.jsxs)(s.Text, {
      variant: "text-xs/normal",
      className: ea.tagline,
      color: "none",
      lineClamp: 2,
      children: [W ? (0, H.$v)(T, y, x, j, G) : ex, W ? null : ev]
    }),
    eI = (0, r.jsxs)("div", {
      className: ea.info,
      children: [ej, S || W ? null : N]
    });
  return (0, r.jsx)(m.W, {
    header: eC,
    title: y.name,
    staticBannerSrc: M,
    videoBannerSrc: k,
    onClickBanner: eb,
    bannerAspectRatio: F,
    iconSrc: null != L ? L : true,
    info: eI,
    actions: eE,
    onClickContent: eb,
    trackingConfig: {
      id: y.id,
      linkType: f.Un.RICH_PRESENCE_INVITE,
      onView: P
    },
    footer: eO
  })
}

function ep(e) {
  var t, n, l;
  let {
    analyticsLocations: a,
    app: s,
    channel: c,
    message: u,
    hideParty: d,
    onView: p
  } = e, m = (0, _.O)(s), f = (0, o.e7)([P.default], () => P.default.getId()), g = (0, o.e7)([D.Z], () => {
    if (null == u.application) return D.Z.findActivity(u.author.id, e => e.type === er.IIU.LISTENING);
    {
      let e = u.author.id;
      return (0, Y.H)(u) && (e = e === f && c.isPrivate() ? c.getRecipientId() : f), D.Z.getApplicationActivity(e, u.application.id)
    }
  }, [u, c, f]), h = (0, o.e7)([R.Z, L.Z], () => {
    var e;
    return null != (e = R.Z.getApplicationActivity(m.id)) ? e : L.Z.getApplicationActivity(m.id, true)
  }, [m.id]), b = (0, o.Wu)([A.Z], () => {
    var e;
    return null == g || null == g.party ? [] : Array.from(null != (e = A.Z.getParty(g.party.id)) ? e : [])
  }, [g]), {
    partySize: E,
    maxPartySize: C
  } = (0, X._)(g), v = i.useMemo(() => b.map(e => {
    let t = M.default.getUser(e);
    return null != t ? t : et.ag
  }), [b]), O = (0, ei.Ps)(null == g || null == (t = g.party) ? true : t.id) || m.id === T.r9.id, y = (0, r.jsx)(eo, {
    partyMembers: v,
    partySize: E,
    maxPartySize: C,
    guildId: c.guild_id,
    activityActionType: null == (n = u.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(es, {
    application: m,
    currentUserPresenceActivity: h,
    hideParty: d,
    message: u,
    onView: p,
    partyStatusElement: y,
    presenceActivity: g
  }) : (null == (l = u.activity) ? true : l.type) === er.mFx.STREAM_REQUEST ? (0, r.jsx)(j.Z, {
    analyticsLocations: a,
    application: m,
    channel: c,
    currentUserId: f,
    message: u
  }) : (0, r.jsx)(ed, {
    analyticsLocations: a,
    application: m,
    channel: c,
    currentUserId: f,
    currentUserPresenceActivity: h,
    hideParty: d,
    message: u,
    onView: p,
    partyStatusElement: y,
    presenceActivity: g
  })
}