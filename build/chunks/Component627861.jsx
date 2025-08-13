/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => eg
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
  Chunk276852 = require("./276852.js"),
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
  Chunk50 = require("./50.js");
let er = 8;

function ei(e) {
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
  for (; u.length < n;) u.push(Q.ag);
  for (; u.length < i;) u.push(null);
  return (0, r.jsxs)("div", {
    className: en.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(Q.ZP, {
      guildId: o,
      users: u,
      max: i > 0 ? Math.min(i, er) : er,
      size: Q.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: c
    })]
  })
}

function eo(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === $.mFx.JOIN_REQUEST
}

function ea(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === $.mFx.STREAM_REQUEST
}

function es(e) {
  let {
    partySize: t,
    maxPartySize: n
  } = e;
  return t > false && n > 0 && t >= n
}

function el(e) {
  let {
    partySize: t,
    maxPartySize: n
  } = e;
  return t > false && n > false
}

function ec(e, t, n, r) {
  var i;
  if (t.author.id === r || !(0, K.Z)(e, t, n.id) || (null == (i = t.activity) ? true : i.type) !== $.mFx.JOIN_REQUEST || !(0, W.Z)(e, $.xjy.JOIN)) returnfalse;
  let o = (0, Y._)(e);
  return !(!el(o) || es(o))
}

function eu(e, t) {
  var n, r;
  return (null == t || null == (n = t.party) ? true : n.id) != null && (null == e || null == (r = e.party) ? true : r.id) != null && e.party.id === t.party.id
}

function ed(e) {
  let {
    presenceActivity: t,
    currentUserPresenceActivity: n,
    currentUserId: r,
    message: i,
    application: o,
    isEmbeddedApplication: a,
    isFrameApplication: s,
    isGameLaunchable: l
  } = e;
  if (i.author.id === r || !(0, K.Z)(t, i, o.id)) returnfalse;
  let c = (0, Y._)(t);
  return !(!el(c) || es(c) || eu(n, t) || eo(i)) && (!!a && !!s || !!Z.isPlatformEmbedded && !!l)
}

function ef(e, t, n, r) {
  return !(null == e || !(0, K.Z)(e, n, r.id) || !(0, W.Z)(e, $.xjy.SYNC) || !Z.isPlatformEmbedded || eu(t, e))
}

function e_(e) {
  var t, n, o, a, s;
  let {
    application: c,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: f,
    onView: h,
    partyStatusElement: m,
    presenceActivity: g
  } = e, b = eu(u, g), y = (0, N.Lz)(g, f.author, "Invite Embed"), O = !(0, K.Z)(g, f, c.id), v = [], I = i.useMemo(() => {
    let e = [];
    if (!b) {
      var t;
      e.push({
        label: null != (t = y.label) ? t : et.intl.string(et.t.VJlc0d),
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
      className: en.description,
      color: "none",
      lineClamp: 1,
      children: et.intl.string(et.t["84qx9v"])
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
    let e = null != g && null != g.details && null != g.state ? et.intl.formatToPlainString(et.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : c.name,
      t = null != (a = null == g || null == (n = g.timestamps) ? true : n.start) ? a : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: en.timestampContainer,
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
        className: en.info,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: en.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : m]
      });
    return (0, r.jsx)(_.W, {
      header: S,
      title: e,
      iconSrc: null != (s = (0, H.Z)(g, c.id)) ? s : true,
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

function ep(e, t) {
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

function eh(e) {
  let {
    presenceActivity: t
  } = e, n = (0, q.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: $.M7m.DESKTOP
  }), o = i.useMemo(() => n.map(e => {
    switch (e) {
      case q.Ol.MOBILE:
        return (0, r.jsx)(l.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case q.Ol.ANDROID:
        return (0, r.jsx)(J.j, {
          width: a.Z.xxs,
          height: a.Z.xxs,
          color: "currentColor"
        });
      case q.Ol.IOS:
        return (0, r.jsx)(l.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case q.Ol.PLAYSTATION:
        return (0, r.jsx)(l.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case q.Ol.XBOX:
        return (0, r.jsx)(l.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(B.lm), [n]);
  return 0 === o.length ? null : (0, r.jsxs)("div", {
    className: en.footer,
    children: [(0, r.jsx)("div", {
      className: en.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: en.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: en.footerSupportedPlatformText,
      children: et.intl.string(et.t["4dGUPz"])
    })]
  })
}

function em(e) {
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
  } = I, j = G.ZP.getApplicationIconURL({
    id: I.id,
    icon: I.icon,
    bot: M
  }), {
    staticBannerSrc: k,
    videoBannerSrc: U,
    bannerAspectRatio: B
  } = (0, m.E)(I), Z = !(0, K.Z)(w, C, I.id), F = eo(C), H = (0, s.e7)([D.Z], () => D.Z.getGameByName(I.name), [I.name]), {
    openGameProfileModal: Y,
    isGameLaunchable: q
  } = ep(I.id, C.author.id), {
    openGameProfileModal: Q,
    isGameLaunchable: J
  } = ep(null == H ? true : H.id, C.author.id), ee = (0, X.Z)({
    application: I,
    location: "RichPresenceActivityInviteEmbed",
    analyticsLocations: O
  }), er = i.useMemo(() => null == ee ? null : {
    label: et.intl.string(et.t["jaYS/v"]),
    icon: (0, r.jsx)(l.v3n, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    trackingArea: p.j_.CLOUD_PLAY,
    onClick: ee
  }, [ee]), ei = ed({
    presenceActivity: w,
    currentUserPresenceActivity: A,
    currentUserId: S,
    message: C,
    application: I,
    isEmbeddedApplication: x,
    isFrameApplication: L,
    isGameLaunchable: q
  }), ea = ef(w, A, C, I), es = eu(A, w), el = ec(w, C, I, S), e_ = i.useMemo(() => ei ? {
    label: et.intl.string(et.t.VJlc0d),
    trackingArea: p.j_.JOIN,
    onClick: () => {
      var e;
      u.Z.join({
        userId: C.author.id,
        sessionId: w.session_id,
        applicationId: w.application_id,
        channelId: T.id,
        messageId: C.id,
        source: $.Sbl.MESSAGE_EMBED,
        analyticsLocations: O,
        embedded: (0, W.Z)(w, $.xjy.EMBEDDED)
      }), (0, z.Z)({
        type: $.q5t.JOIN,
        source: $.Sbl.MESSAGE_EMBED,
        userId: C.author.id,
        guildId: T.guild_id,
        channelId: T.id,
        applicationId: w.application_id,
        partyId: null == (e = w.party) ? true : e.id,
        messageId: C.id,
        analyticsLocations: O
      })
    }
  } : ea ? {
    label: et.intl.string(et.t.VJlc0d),
    trackingArea: p.j_.SYNC,
    onClick: () => {
      null != w && d.Z_(w, C.author.id)
    }
  } : el ? {
    label: et.intl.string(et.t["hC/Ze3"]),
    trackingArea: p.j_.INVITE,
    onClick: () => {
      null != w && c.Z.sendActivityInvite({
        type: $.mFx.JOIN,
        channelId: T.id,
        activity: w,
        location: $.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: C.author.id === S ? et.intl.string(et.t.IBl8IC) : true
  } : es ? {
    label: et.intl.string(et.t.KC26NT),
    trackingArea: p.j_.PLAY,
    onClick: () => {},
    disabledReason: et.intl.string(et.t.KC26NT)
  } : null != er ? er : true, [O, ei, el, ea, T.id, T.guild_id, S, es, C.author.id, C.id, w, er]), em = i.useMemo(() => q ? {
    label: et.intl.string(et.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: I.id
      })
    }
  } : J && (null == H ? true : H.id) != null ? {
    label: et.intl.string(et.t.RscU7O),
    trackingArea: p.j_.PLAY,
    onClick: () => {
      u.Z.launch({
        applicationId: H.id
      })
    }
  } : null != er ? er : true, [I.id, q, J, null == H ? true : H.id, er]), eg = (0, g.G)(I), eE = i.useMemo(() => null != Y ? Y : null != Q ? Q : null != eg && x ? eg : true, [x, Y, Q, eg]), eb = i.useMemo(() => {
    let e = [];
    return Z || null == e_ ? Z && null != em && e.push(em) : e.push(e_), e
  }, [em, Z, e_]), ey = (0, V.dQ)(I.name, null == (t = C.activity) ? true : t.type), eO = (0, v.N)(I.id).some(e => (0, b.ig)(e) === o.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.YqE, {
      size: "xxs",
      color: "currentColor"
    }), et.intl.string(et.t.TsWCdX)]
  }) : null, ev = (0, r.jsx)(eh, {
    presenceActivity: w
  });
  if (Z) {
    let e = (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: en.description,
      color: "none",
      lineClamp: 3,
      children: (0, V.wR)(C, I, T, S)
    });
    return (0, r.jsx)(_.W, {
      header: ey,
      title: I.name,
      staticBannerSrc: k,
      videoBannerSrc: U,
      onClickBanner: eE,
      bannerAspectRatio: B,
      iconSrc: null != j ? j : true,
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
      className: en.timestampContainer,
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
      className: en.tagline,
      color: "none",
      lineClamp: 2,
      children: [F ? (0, V.$v)(C, I, T, S, Z) : eT, F ? null : eO]
    }),
    eA = (0, r.jsxs)("div", {
      className: en.info,
      children: [eS, N || F ? null : P]
    });
  return (0, r.jsx)(_.W, {
    header: ey,
    title: I.name,
    staticBannerSrc: k,
    videoBannerSrc: U,
    onClickBanner: eE,
    bannerAspectRatio: B,
    iconSrc: null != j ? j : true,
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

function eg(e) {
  var t, n;
  let {
    analyticsLocations: o,
    app: a,
    channel: l,
    message: c,
    hideParty: u,
    onView: d
  } = e, f = (0, h.O)(a), _ = (0, s.e7)([R.default], () => R.default.getId()), p = (0, s.e7)([M.Z], () => {
    if (null == c.application) return M.Z.findActivity(c.author.id, e => e.type === $.IIU.LISTENING);
    {
      let e = c.author.id;
      return eo(c) && (e = e === _ && l.isPrivate() ? l.getRecipientId() : _), M.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, l, _]), m = (0, s.e7)([x.Z, j.Z], () => {
    var e;
    return null != (e = x.Z.getApplicationActivity(f.id)) ? e : j.Z.getApplicationActivity(f.id, true)
  }, [f.id]), g = (0, s.Wu)([w.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, Y._)(p), y = i.useMemo(() => g.map(e => {
    let t = k.default.getUser(e);
    return null != t ? t : Q.ag
  }), [g]), O = (0, ee.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === C.r9.id, v = (0, r.jsx)(ei, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: l.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(e_, {
    application: f,
    currentUserPresenceActivity: m,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  }) : ea(c) ? (0, r.jsx)(S.Z, {
    analyticsLocations: o,
    application: f,
    channel: l,
    currentUserId: _,
    message: c
  }) : (0, r.jsx)(em, {
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