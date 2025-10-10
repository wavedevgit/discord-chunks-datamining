/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => eg
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
  Chunk515344 = require("./515344.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk813370 = require("./813370.js"),
  Chunk810568 = require("./810568.js"),
  Chunk567409 = require("./567409.js"),
  Chunk168524 = require("./168524.js"),
  Chunk956512 = require("./956512.jsx"),
  Chunk171516 = require("./171516.js"),
  Chunk952164 = require("./952164.js"),
  Chunk829820 = require("./829820.js"),
  Chunk789407 = require("./789407.js"),
  Chunk314897 = require("./314897.js"),
  Chunk831506 = require("./831506.js"),
  Chunk293273 = require("./293273.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk181106 = require("./181106.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk139212 = require("./139212.js"),
  Chunk758371 = require("./758371.js"),
  Chunk931271 = require("./931271.js"),
  Chunk565201 = require("./565201.js"),
  Chunk276852 = require("./276852.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk984211 = require("./984211.js"),
  Chunk146248 = require("./146248.js"),
  Chunk935153 = require("./935153.js"),
  Chunk620662 = require("./620662.js"),
  Chunk994339 = require("./994339.js"),
  Chunk275920 = require("./275920.js"),
  Chunk561766 = require("./561766.js"),
  Chunk206074 = require("./206074.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk404174 = require("./404174.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk967249 = require("./967249.js"),
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
  } = e, s = Math.max(n, t.length), l = (0, Z.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: o
  }), u = [...t];
  for (; u.length < n && u.length < el;) u.push(et.ag);
  for (; u.length < i && u.length < el;) u.push(null);
  return (0, r.jsxs)("div", {
    className: es.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(et.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, el) : el,
      size: et.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: l
    })]
  })
}

function eu(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === er.mFx.STREAM_REQUEST
}

function ed(e, t, n, r) {
  return !(null == e || !(0, Q.Z)(e, n, r.id) || !(0, X.Z)(e, er.xjy.SYNC) || !G.isPlatformEmbedded || (0, W.g)(t, e))
}

function ef(e) {
  var t, n, a, o, s;
  let {
    application: l,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: f,
    onView: _,
    partyStatusElement: p,
    presenceActivity: g,
    guildId: E
  } = e, y = (0, W.g)(u, g), O = (0, N.Lz)(g, f.author, "Invite Embed"), v = !(0, Q.Z)(g, f, l.id), I = [], T = i.useMemo(() => {
    let e = [];
    if (!y) {
      var t;
      e.push({
        label: null != (t = O.label) ? t : eo.intl.string(eo.t.VJlc0d),
        trackingArea: m.j_.SYNC,
        onClick: () => {
          O.onClick()
        },
        disabled: O.disabled,
        disabledReason: O.disabled ? O.tooltip : true
      })
    }
    return e
  }, [y, O]), S = i.useMemo(() => {
    if (null != g) return () => (0, C.aG)(g)
  }, [g]), A = (0, Z.dQ)(l.name, null == (t = f.activity) ? true : t.type);
  if (v) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: es.description,
      color: "none",
      lineClamp: 1,
      children: eo.intl.string(eo.t["84qx9v"])
    });
    return (0, r.jsx)(h.W, {
      header: A,
      title: l.name,
      iconSrc: R.r9.getWhiteIconURL(),
      info: e,
      actions: I,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ei.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: E,
        channelId: f.channel_id,
        messageId: f.id
      }
    })
  } {
    let e = null != g && null != g.details && null != g.state ? eo.intl.formatToPlainString(eo.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : l.name,
      t = null != (o = null == g || null == (n = g.timestamps) ? true : n.start) ? o : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: es.timestampContainer,
        children: [(0, r.jsx)(c.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(b.x3, {
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
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: es.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : p]
      });
    return (0, r.jsx)(h.W, {
      header: A,
      title: e,
      iconSrc: null != (s = (0, H.Z)(g, l.id)) ? s : true,
      info: u,
      actions: T,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ei.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: E,
        channelId: f.channel_id,
        messageId: f.id
      }
    })
  }
}

function e_(e, t) {
  let n = (0, A.h)(e);
  return {
    openGameProfileModal: (0, T.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != n ? n : true,
      source: v.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: n
  }
}

function ep(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, $.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: er.M7m.DESKTOP
  }), o = i.useMemo(() => a.map(e => {
    switch (e) {
      case $.Ol.MOBILE:
        return (0, r.jsx)(c.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.ANDROID:
        return (0, r.jsx)(en.j, {
          width: s.Z.xxs,
          height: s.Z.xxs,
          color: "currentColor"
        });
      case $.Ol.IOS:
        return (0, r.jsx)(c.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.PLAYSTATION:
        return (0, r.jsx)(c.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case $.Ol.XBOX:
        return (0, r.jsx)(c.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(U.lm), [a]);
  if (!(null != n || o.length > 0)) return null;
  let l = null != n ? (0, q.V)(n) : eo.intl.string(eo.t["4dGUPz"]);
  return (0, r.jsxs)("div", {
    className: es.footer,
    children: [(0, r.jsx)("div", {
      className: es.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: es.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: es.footerSupportedPlatformText,
      children: l
    })]
  })
}

function eh(e) {
  let {
    messageId: t,
    presenceActivity: n,
    application: r
  } = e;
  return (0, l.e7)([B.Z], () => (0, z.O)({
    messageId: t,
    presenceActivity: n,
    application: r
  }), [t, n, r])
}

function em(e) {
  var t, n, s, g, v;
  let {
    analyticsLocations: T,
    application: S,
    channel: A,
    currentUserId: C,
    currentUserPresenceActivity: N,
    hideParty: R,
    message: P,
    onView: w,
    partyStatusElement: D,
    presenceActivity: L
  } = e, x = (0, O.A)(S), M = (0, p.ye)(S), {
    bot: U
  } = S, G = k.ZP.getApplicationIconURL({
    id: S.id,
    icon: S.icon,
    bot: U
  }), B = null != (g = eh({
    messageId: P.id,
    presenceActivity: L,
    application: S
  })) ? g : true, H = h.u.ACTIVITY, K = !(0, Q.Z)(L, P, S.id), z = (0, Y.H)(P), {
    openGameProfileModal: q,
    launchableAppId: $
  } = e_(S.id, P.author.id), et = !!$, en = (0, ee.Z)({
    application: S,
    analyticsLocations: T
  }), ea = i.useMemo(() => null == en ? null : {
    label: eo.intl.string(eo.t["jaYS/v"]),
    icon: c.v3n,
    trackingArea: m.j_.CLOUD_PLAY,
    onClick: en
  }, [en]), {
    canJoin: el,
    remoteJoinPlatform: ec
  } = (0, F.h)({
    presenceActivity: L,
    currentUserPresenceActivity: N,
    currentUserId: C,
    message: P,
    application: S,
    isEmbeddedApplication: M,
    isFrameApplication: x,
    isGameLaunchable: et
  }), eu = ed(L, N, P, S), ef = (0, W.g)(N, L), em = (0, V.L)(L, P, S, C), eg = (0, l.e7)([j.Z], () => null != L && null != L.application_id && j.Z.getState(L.application_id, er.mFx.JOIN) === er.OcF.LOADING), eE = i.useMemo(() => el ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: m.j_.JOIN,
    submitting: eg,
    onClick: () => {
      var e, t;
      d.Z.join({
        userId: P.author.id,
        sessionId: L.session_id,
        applicationId: L.application_id,
        channelId: A.id,
        messageId: P.id,
        source: er.Sbl.MESSAGE_EMBED,
        analyticsLocations: T,
        embedded: (0, X.Z)(L, er.xjy.EMBEDDED),
        remotePartyId: null != ec ? null == (e = L.party) ? true : e.id : true
      }), (0, J.Z)({
        type: er.q5t.JOIN,
        source: er.Sbl.MESSAGE_EMBED,
        userId: P.author.id,
        guildId: A.guild_id,
        channelId: A.id,
        applicationId: L.application_id,
        partyId: null == (t = L.party) ? true : t.id,
        messageId: P.id,
        analyticsLocations: T,
        remoteJoinPlatform: ec
      })
    }
  } : eu ? {
    label: eo.intl.string(eo.t.VJlc0d),
    trackingArea: m.j_.SYNC,
    onClick: () => {
      null != L && f.Z_(L, P.author.id)
    }
  } : em ? {
    label: eo.intl.string(eo.t["hC/Ze3"]),
    trackingArea: m.j_.INVITE,
    onClick: () => {
      null != L && u.Z.sendActivityInvite({
        type: er.mFx.JOIN,
        channelId: A.id,
        activity: L,
        location: er.Sbl.MESSAGE_EMBED
      })
    },
    disabled: P.author.id === C,
    disabledReason: P.author.id === C ? eo.intl.string(eo.t.IBl8IC) : true
  } : ef ? {
    label: eo.intl.string(eo.t.KC26NT),
    trackingArea: m.j_.PLAY,
    onClick: () => {},
    disabled: true
  } : null != ea ? ea : true, [el, eu, em, ef, ea, P.author.id, P.id, L, A.id, A.guild_id, T, ec, C, eg]), eb = i.useMemo(() => et && null != $ ? {
    label: eo.intl.string(eo.t.RscU7O),
    trackingArea: m.j_.PLAY,
    onClick: () => {
      d.Z.launch({
        applicationId: $,
        embedded: M
      })
    }
  } : null != ea ? ea : true, [M, et, $, ea]), ey = (0, E.G)(S), eO = i.useMemo(() => null != q ? q : null != ey && M ? ey : true, [M, q, ey]), ev = i.useMemo(() => {
    let e = [];
    return K || null == eE ? K && null != eb && e.push(eb) : e.push(eE), e
  }, [eb, K, eE]), eI = i.useMemo(() => ev.some(e => e.trackingArea === m.j_.CLOUD_PLAY), [ev]);
  (0, _.Z)({
    name: a.ImpressionNames.CLOUD_PLAY_CTA,
    type: a.ImpressionTypes.VIEW,
    properties: {
      location_stack: T
    }
  }, {
    disableTrack: !eI
  });
  let eT = (0, Z.dQ)(S.name, null == (t = P.activity) ? true : t.type),
    eS = (0, I.N)(S.id).some(e => (0, y.ig)(e) === o.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.YqE, {
        size: "xxs",
        color: "currentColor"
      }), eo.intl.string(eo.t.TsWCdX)]
    }) : null,
    eA = ef ? null : (0, r.jsx)(ep, {
      presenceActivity: L,
      remoteJoinPlatform: ec
    });
  if (K) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: es.description,
      color: "none",
      lineClamp: 3,
      children: (0, Z.wR)(P, S, A, C)
    });
    return (0, r.jsx)(h.W, {
      header: eT,
      title: S.name,
      staticBannerSrc: B,
      onClickBanner: eO,
      bannerAspectRatio: H,
      iconSrc: null != G ? G : true,
      info: e,
      actions: ev,
      onClickContent: eO,
      trackingConfig: {
        id: S.id,
        linkType: ei.U.RICH_PRESENCE_INVITE,
        onView: w,
        referrerId: P.author.id,
        guildId: A.guild_id,
        channelId: P.channel_id,
        messageId: P.id
      }
    })
  }
  let eC = null != (v = null == L || null == (n = L.timestamps) ? true : n.start) ? v : null == L ? true : L.created_at,
    eN = null != eC ? (0, r.jsxs)("div", {
      className: es.timestampContainer,
      children: [(0, r.jsx)(c.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(b.x3, {
        entry: {
          start: eC,
          end: null == L || null == (s = L.timestamps) ? true : s.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    eR = (0, r.jsxs)(c.Text, {
      variant: "text-xs/normal",
      className: es.tagline,
      color: "none",
      lineClamp: 2,
      children: [z ? (0, Z.$v)(P, S, A, C, K) : eN, z ? null : eS]
    }),
    eP = (0, r.jsxs)("div", {
      className: es.info,
      children: [eR, R || z ? null : D]
    });
  return (0, r.jsx)(h.W, {
    header: eT,
    title: S.name,
    staticBannerSrc: B,
    onClickBanner: eO,
    bannerAspectRatio: H,
    iconSrc: null != G ? G : true,
    info: eP,
    actions: ev,
    onClickContent: eO,
    trackingConfig: {
      id: S.id,
      linkType: ei.U.RICH_PRESENCE_INVITE,
      onView: w,
      referrerId: P.author.id,
      guildId: A.guild_id,
      channelId: P.channel_id,
      messageId: P.id
    },
    footer: eA
  })
}

function eg(e) {
  var t, n;
  let {
    analyticsLocations: a,
    app: o,
    channel: s,
    message: c,
    hideParty: u,
    onView: d
  } = e, f = (0, g.O)(o), _ = (0, l.e7)([P.default], () => P.default.getId()), p = (0, l.e7)([L.Z], () => {
    if (null == c.application) return L.Z.findActivity(c.author.id, e => e.type === er.IIU.LISTENING);
    {
      let e = c.author.id;
      return (0, Y.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _), L.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, s, _]), h = (0, l.e7)([D.Z, x.Z], () => {
    var e;
    return null != (e = D.Z.getApplicationActivity(f.id)) ? e : x.Z.getApplicationActivity(f.id, true)
  }, [f.id]), m = (0, l.Wu)([w.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = w.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, K._)(p), y = i.useMemo(() => m.map(e => {
    let t = M.default.getUser(e);
    return null != t ? t : et.ag
  }), [m]), O = (0, ea.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === R.r9.id, v = (0, r.jsx)(ec, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: s.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(ef, {
    application: f,
    currentUserPresenceActivity: h,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p,
    guildId: s.guild_id
  }) : eu(c) ? (0, r.jsx)(S.Z, {
    analyticsLocations: a,
    application: f,
    channel: s,
    currentUserId: _,
    message: c
  }) : (0, r.jsx)(em, {
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