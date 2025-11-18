/** Chunk was on web.js **/
/** chunk id: 627861, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => eC
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk925329 = require("./925329.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk567409 = require("./567409.js"),
  Chunk168524 = require("./168524.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk956512 = require("./956512.jsx"),
  Chunk171516 = require("./171516.js"),
  Chunk952164 = require("./952164.js"),
  Chunk829820 = require("./829820.js"),
  Chunk789407 = require("./789407.js"),
  Chunk314897 = require("./314897.js"),
  Chunk831506 = require("./831506.js"),
  Chunk293273 = require("./293273.js"),
  Chunk375954 = require("./375954.js"),
  Chunk158776 = require("./158776.js"),
  Chunk885110 = require("./885110.js"),
  Chunk594174 = require("./594174.js"),
  Chunk181106 = require("./181106.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
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
  Chunk810008 = require("./810008.js"),
  Chunk275920 = require("./275920.js"),
  Chunk561766 = require("./561766.js"),
  Chunk206074 = require("./206074.js"),
  Chunk77603 = require("./77603.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk404174 = require("./404174.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk967249 = require("./967249.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463736 = require("./463736.js"),
  Chunk575452 = require("./575452.js");
let eg = 8;

function eE(e, t) {
  var n, r, i, a;
  let {
    bot: o
  } = t, s = (null == (n = e.activity) ? true : n.icon_override) != null ? (0, H.xF)(t.id, null == (r = e.activity) ? true : r.icon_override) : null;
  return {
    iconSrc: null != s ? s : Y.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: o
    }),
    name: null != (a = null == (i = e.activity) ? true : i.name_override) ? a : t.name
  }
}

function eb(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: o
  } = e, s = Math.max(n, t.length), l = (0, z.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: o
  }), c = [...t];
  for (; c.length < n && c.length < eg;) c.push(ec.ag);
  for (; c.length < i && c.length < eg;) c.push(null);
  return (0, r.jsxs)("div", {
    className: eh.partyStatusWrapper,
    children: [c.length > 0 && (0, r.jsx)(ec.ZP, {
      guildId: a,
      users: c,
      max: i > 0 ? Math.min(i, eg) : eg,
      size: ec.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: l
    })]
  })
}

function ey(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === ed.mFx.STREAM_REQUEST
}

function eO(e, t, n, r) {
  return !(null == e || !(0, er.Z)(e, n, r.id) || !(0, en.Z)(e, ed.xjy.SYNC) || !K.isPlatformEmbedded || (0, $.g)(t, e))
}

function ev(e) {
  var t, n, a, o, s;
  let {
    application: l,
    currentUserPresenceActivity: c,
    hideParty: u,
    message: f,
    onView: _,
    partyStatusElement: p,
    presenceActivity: h,
    guildId: m
  } = e, b = (0, $.g)(c, h), y = (0, x.Lz)(h, f.author, "Invite Embed"), v = !(0, er.Z)(h, f, l.id), I = [], T = i.useMemo(() => {
    let e = [];
    if (!b) {
      var t;
      e.push({
        label: null != (t = y.label) ? t : ep.intl.string(ep.t.VJlc0S),
        trackingArea: E.j_.SYNC,
        onClick: () => {
          y.onClick()
        },
        disabled: y.disabled,
        disabledReason: y.disabled ? y.tooltip : true
      })
    }
    return e
  }, [b, y]), S = i.useMemo(() => {
    if (null != h) return () => (0, L.aG)(h)
  }, [h]), A = (0, z.dQ)(l.name, null == (t = f.activity) ? true : t.type, v);
  if (v) {
    let e = (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: eh.description,
      color: "none",
      lineClamp: 1,
      children: ep.intl.string(ep.t["84qx9r"])
    });
    return (0, r.jsx)(g.W, {
      header: A,
      title: l.name,
      iconSrc: M.r9.getWhiteIconURL(),
      info: e,
      actions: I,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ef.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: m,
        channelId: f.channel_id,
        messageId: f.id,
        isDeadEnd: true
      }
    })
  } {
    let e = null != h && null != h.details && null != h.state ? ep.intl.formatToPlainString(ep.t.JCvHtx, {
        track: h.details,
        artist: h.state
      }) : l.name,
      t = null != (o = null == h || null == (n = h.timestamps) ? true : n.start) ? o : null == h ? true : h.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: eh.timestampContainer,
        children: [(0, r.jsx)(d.RZG, {
          size: "xxs",
          color: "currentColor"
        }), (0, r.jsx)(O.x3, {
          entry: {
            start: t,
            end: null == h || null == (a = h.timestamps) ? true : a.end
          },
          textColor: "currentColor",
          textTabularNumbers: false,
          textFontCode: false
        })]
      }) : null,
      c = (0, r.jsxs)("div", {
        className: eh.info,
        children: [(0, r.jsx)(d.Text, {
          variant: "text-xs/normal",
          className: eh.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), u ? null : p]
      });
    return (0, r.jsx)(g.W, {
      header: A,
      title: e,
      iconSrc: null != (s = (0, Q.Z)(h, l.id)) ? s : true,
      info: c,
      actions: T,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ef.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: m,
        channelId: f.channel_id,
        messageId: f.id
      }
    })
  }
}

function eI(e, t) {
  let n = (0, w.h)(e);
  return {
    openGameProfileModal: (0, C.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != n ? n : true,
      source: S.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: n
  }
}

function eT(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, eo.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: ed.M7m.DESKTOP
  }), o = i.useMemo(() => a.map(e => {
    switch (e) {
      case eo.Ol.MOBILE:
        return (0, r.jsx)(d.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case eo.Ol.ANDROID:
        return (0, r.jsx)(eu.j, {
          width: c.Z.xxs,
          height: c.Z.xxs,
          color: "currentColor"
        });
      case eo.Ol.IOS:
        return (0, r.jsx)(d.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case eo.Ol.PLAYSTATION:
        return (0, r.jsx)(d.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case eo.Ol.XBOX:
        return (0, r.jsx)(d.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(W.lm), [a]);
  if (!(null != n || o.length > 0)) return null;
  let s = null != n ? (0, et.V)(n) : ep.intl.string(ep.t["4dGUP0"]);
  return (0, r.jsxs)("div", {
    className: eh.footer,
    children: [(0, r.jsx)("div", {
      className: eh.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: eh.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: eh.footerSupportedPlatformText,
      children: s
    })]
  })
}

function eS(e) {
  let {
    message: t,
    application: n,
    channel: i,
    currentUserId: a,
    viewAction: s
  } = e, l = (0, N.ZP)(t), {
    iconSrc: c,
    name: u
  } = eE(t, n), f = (0, R.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  })(l);
  return (0, r.jsx)(P.Z, {
    compact: false,
    children: ep.intl.format(a === t.author.id ? ep.t.anvg2q : ep.t.AxVbYF, {
      username: l.nick,
      usernameHook: f,
      applicationHook: () => {
        let e = null != s ? d.Anchor : "div";
        return (0, r.jsxs)(e, {
          onClick: s,
          className: eh.inlineApplicationText,
          children: [(0, r.jsx)("img", {
            alt: ep.intl.string(ep.t["2B/phM"]),
            src: c,
            className: o()(em.gameIcon, T.A.XSMALL)
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            children: u
          })]
        })
      }
    })
  })
}

function eA(e) {
  var t, n, a, o, c;
  let {
    analyticsLocations: b,
    application: T,
    channel: S,
    currentUserId: C,
    currentUserPresenceActivity: N,
    hideParty: R,
    message: P,
    onView: D,
    partyStatusElement: w,
    presenceActivity: L
  } = e, x = (0, I.A)(T), M = (0, m.ye)(T), {
    iconSrc: k,
    name: j
  } = eE(P, T), U = null != (o = (0, el.v)({
    messageId: P.id,
    presenceActivity: L,
    application: T
  })) ? o : true, B = g.u.ACTIVITY, Z = !(0, er.Z)(L, P, T.id), F = (0, J.H)(P), {
    openGameProfileModal: H,
    launchableAppId: Y
  } = eI(T.id, P.author.id), W = !!Y, K = (0, es.Z)({
    application: T,
    analyticsLocations: b
  }), Q = i.useMemo(() => null == K ? null : {
    label: ep.intl.string(ep.t["jaYS/h"]),
    icon: d.v3n,
    trackingArea: E.j_.CLOUD_PLAY,
    onClick: K
  }, [K]), {
    canJoin: ee,
    remoteJoinPlatform: et
  } = (0, q.h)({
    presenceActivity: L,
    currentUserPresenceActivity: N,
    currentUserId: C,
    message: P,
    application: T,
    isEmbeddedApplication: M,
    isFrameApplication: x,
    isGameLaunchable: W
  }), eo = eO(L, N, P, T), ec = (0, $.g)(N, L), eu = (0, X.L)(L, P, T, C), e_ = (0, u.e7)([V.Z], () => null != L && null != L.application_id && V.Z.getState(L.application_id, ed.mFx.JOIN) === ed.OcF.LOADING), em = i.useMemo(() => ee ? {
    label: ep.intl.string(ep.t.VJlc0S),
    trackingArea: E.j_.JOIN,
    submitting: e_,
    onClick: () => {
      var e, t;
      _.Z.join({
        userId: P.author.id,
        sessionId: L.session_id,
        applicationId: L.application_id,
        channelId: S.id,
        messageId: P.id,
        source: ed.Sbl.MESSAGE_EMBED,
        analyticsLocations: b,
        embedded: (0, en.Z)(L, ed.xjy.EMBEDDED),
        remotePartyId: null != et ? null == (e = L.party) ? true : e.id : true
      }), (0, ea.Z)({
        type: ed.q5t.JOIN,
        source: ed.Sbl.MESSAGE_EMBED,
        userId: P.author.id,
        guildId: S.guild_id,
        channelId: S.id,
        applicationId: L.application_id,
        partyId: null == (t = L.party) ? true : t.id,
        messageId: P.id,
        analyticsLocations: b,
        remoteJoinPlatform: et
      })
    }
  } : eo ? {
    label: ep.intl.string(ep.t.VJlc0S),
    trackingArea: E.j_.SYNC,
    onClick: () => {
      null != L && p.Z_(L, P.author.id)
    }
  } : eu ? {
    label: ep.intl.string(ep.t["hC/Zey"]),
    trackingArea: E.j_.INVITE,
    onClick: () => {
      null != L && f.Z.sendActivityInvite({
        type: ed.mFx.JOIN,
        channelId: S.id,
        activity: L,
        location: ed.Sbl.MESSAGE_EMBED
      })
    },
    disabled: P.author.id === C,
    disabledReason: P.author.id === C ? ep.intl.string(ep.t.IBl8ID) : true
  } : ec ? {
    label: ep.intl.string(ep.t.KC26NR),
    trackingArea: E.j_.PLAY,
    onClick: () => {},
    disabled: true
  } : null != Q ? Q : true, [ee, eo, eu, ec, Q, P.author.id, P.id, L, S.id, S.guild_id, b, et, C, e_]), eg = i.useMemo(() => W && null != Y ? {
    label: ep.intl.string(ep.t["s+J8Dl"]),
    trackingArea: E.j_.PLAY,
    isDeadEnd: true,
    onClick: () => {
      _.Z.launch({
        applicationId: Y,
        embedded: M
      })
    }
  } : null != Q ? Q : true, [M, W, Y, Q]), eb = (0, y.G)(T), ey = i.useMemo(() => null != H ? H : null != eb && M ? eb : true, [M, H, eb]), ev = (0, u.e7)([G.Z], () => G.Z.getMessages(S.id)), eA = i.useMemo(() => {
    let e = [];
    return Z || null == em ? Z && null != eg && (0, ei.b)(P.id, ev, T.id, L) && e.push(eg) : e.push(em), e
  }, [eg, Z, em, P.id, T.id, L, ev]), eC = i.useMemo(() => eA.some(e => e.trackingArea === E.j_.CLOUD_PLAY), [eA]);
  (0, h.Z)({
    name: s.ImpressionNames.CLOUD_PLAY_CTA,
    type: s.ImpressionTypes.VIEW,
    properties: {
      location_stack: b
    }
  }, {
    disableTrack: !eC
  });
  let eN = (0, z.dQ)(j, null == (t = P.activity) ? true : t.type, Z),
    eR = (0, A.N)(T.id).some(e => (0, v.ig)(e) === l.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.YqE, {
        size: "xxs",
        color: "currentColor"
      }), ep.intl.string(ep.t.TsWCdW)]
    }) : null,
    eP = ec ? null : (0, r.jsx)(eT, {
      presenceActivity: L,
      remoteJoinPlatform: et
    });
  if (Z) {
    let e = eA.length > 0,
      t = (0, r.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: eh.description,
        color: "none",
        lineClamp: 3,
        children: (0, z.wR)(P, j, S, C, e)
      });
    return eA.length > 0 ? (0, r.jsx)(g.W, {
      header: eN,
      title: j,
      staticBannerSrc: eA.length > 0 ? U : true,
      onClickBanner: ey,
      bannerAspectRatio: B,
      iconSrc: null != k ? k : true,
      info: t,
      actions: eA,
      onClickContent: ey,
      trackingConfig: {
        id: T.id,
        linkType: ef.U.RICH_PRESENCE_INVITE,
        onView: D,
        referrerId: P.author.id,
        guildId: S.guild_id,
        channelId: P.channel_id,
        messageId: P.id,
        isDeadEnd: true
      }
    }) : (0, r.jsx)(eS, {
      message: P,
      application: T,
      channel: S,
      currentUserId: C,
      viewAction: ey
    })
  }
  let eD = null != (c = null == L || null == (n = L.timestamps) ? true : n.start) ? c : null == L ? true : L.created_at,
    ew = null != eD ? (0, r.jsxs)("div", {
      className: eh.timestampContainer,
      children: [(0, r.jsx)(d.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(O.x3, {
        entry: {
          start: eD,
          end: null == L || null == (a = L.timestamps) ? true : a.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    eL = (0, r.jsxs)(d.Text, {
      variant: "text-xs/normal",
      className: eh.tagline,
      color: "none",
      lineClamp: 2,
      children: [F ? (0, z.$v)(P, j, S, C, Z) : ew, F ? null : eR]
    }),
    ex = (0, r.jsxs)("div", {
      className: eh.info,
      children: [eL, R || F ? null : w]
    });
  return (0, r.jsx)(g.W, {
    header: eN,
    title: j,
    staticBannerSrc: U,
    onClickBanner: ey,
    bannerAspectRatio: B,
    iconSrc: null != k ? k : true,
    info: ex,
    actions: eA,
    onClickContent: ey,
    trackingConfig: {
      id: T.id,
      linkType: ef.U.RICH_PRESENCE_INVITE,
      onView: D,
      referrerId: P.author.id,
      guildId: S.guild_id,
      channelId: P.channel_id,
      messageId: P.id
    },
    footer: eP
  })
}

function eC(e) {
  var t, n;
  let {
    analyticsLocations: a,
    app: o,
    channel: s,
    message: l,
    hideParty: c,
    onView: d
  } = e, f = (0, b.O)(o), _ = (0, u.e7)([k.default], () => k.default.getId()), p = (0, u.e7)([B.Z], () => {
    if (null == l.application) return B.Z.findActivity(l.author.id, e => e.type === ed.IIU.LISTENING);
    {
      let e = l.author.id;
      return (0, J.H)(l) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _), B.Z.getApplicationActivity(e, l.application.id)
    }
  }, [l, s, _]), h = (0, u.e7)([U.Z, Z.Z], () => {
    var e;
    return null != (e = U.Z.getApplicationActivity(f.id)) ? e : Z.Z.getApplicationActivity(f.id, true)
  }, [f.id]), m = (0, u.Wu)([j.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = j.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: g,
    maxPartySize: E
  } = (0, ee._)(p), y = i.useMemo(() => m.map(e => {
    let t = F.default.getUser(e);
    return null != t ? t : ec.ag
  }), [m]), O = (0, e_.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === M.r9.id, v = (0, r.jsx)(eb, {
    partyMembers: y,
    partySize: g,
    maxPartySize: E,
    guildId: s.guild_id,
    activityActionType: null == (n = l.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(ev, {
    application: f,
    currentUserPresenceActivity: h,
    hideParty: c,
    message: l,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p,
    guildId: s.guild_id
  }) : ey(l) ? (0, r.jsx)(D.Z, {
    analyticsLocations: a,
    application: f,
    channel: s,
    currentUserId: _,
    message: l
  }) : (0, r.jsx)(eA, {
    analyticsLocations: a,
    application: f,
    channel: s,
    currentUserId: _,
    currentUserPresenceActivity: h,
    hideParty: c,
    message: l,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p
  })
}