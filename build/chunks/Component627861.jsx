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
  Chunk880251 = require("./880251.js"),
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
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk358085 = require("./358085.js"),
  Chunk921948 = require("./921948.js"),
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
  Chunk967249 = require("./967249.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463736 = require("./463736.js");
let ec = 8;

function eu(e) {
  let {
    partyMembers: t,
    partySize: n,
    maxPartySize: i,
    guildId: a,
    activityActionType: o
  } = e, s = Math.max(n, t.length), l = (0, V.yy)({
    maxPartySize: i,
    partySize: s,
    activityActionType: o
  }), u = [...t];
  for (; u.length < n && u.length < ec;) u.push(en.ag);
  for (; u.length < i && u.length < ec;) u.push(null);
  return (0, r.jsxs)("div", {
    className: el.partyStatusWrapper,
    children: [u.length > 0 && (0, r.jsx)(en.ZP, {
      guildId: a,
      users: u,
      max: i > 0 ? Math.min(i, ec) : ec,
      size: en.u8.SIZE_16,
      dimEmptyUsers: true
    }), (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "none",
      children: l
    })]
  })
}

function ed(e) {
  var t;
  return (null == (t = e.activity) ? true : t.type) === ei.mFx.STREAM_REQUEST
}

function ef(e, t, n, r) {
  return !(null == e || !(0, J.Z)(e, n, r.id) || !(0, Q.Z)(e, ei.xjy.SYNC) || !Z.isPlatformEmbedded || (0, z.g)(t, e))
}

function e_(e) {
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
  } = e, b = (0, z.g)(u, g), O = (0, R.Lz)(g, f.author, "Invite Embed"), v = !(0, J.Z)(g, f, l.id), I = [], T = i.useMemo(() => {
    let e = [];
    if (!b) {
      var t;
      e.push({
        label: null != (t = O.label) ? t : es.intl.string(es.t.VJlc0d),
        trackingArea: m.j_.SYNC,
        onClick: () => {
          O.onClick()
        },
        disabled: O.disabled,
        disabledReason: O.disabled ? O.tooltip : true
      })
    }
    return e
  }, [b, O]), S = i.useMemo(() => {
    if (null != g) return () => (0, N.aG)(g)
  }, [g]), A = (0, V.dQ)(l.name, null == (t = f.activity) ? true : t.type);
  if (v) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: el.description,
      color: "none",
      lineClamp: 1,
      children: es.intl.string(es.t["84qx9v"])
    });
    return (0, r.jsx)(h.W, {
      header: A,
      title: l.name,
      iconSrc: P.r9.getWhiteIconURL(),
      info: e,
      actions: I,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ea.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: E,
        channelId: f.channel_id,
        messageId: f.id
      }
    })
  } {
    let e = null != g && null != g.details && null != g.state ? es.intl.formatToPlainString(es.t.JCvHt7, {
        track: g.details,
        artist: g.state
      }) : l.name,
      t = null != (o = null == g || null == (n = g.timestamps) ? true : n.start) ? o : null == g ? true : g.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: el.timestampContainer,
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
        className: el.info,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/normal",
          className: el.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : p]
      });
    return (0, r.jsx)(h.W, {
      header: A,
      title: e,
      iconSrc: null != (s = (0, W.Z)(g, l.id)) ? s : true,
      info: u,
      actions: T,
      onClickContent: S,
      trackingConfig: {
        id: l.id,
        linkType: ea.U.RICH_PRESENCE_INVITE,
        onView: _,
        referrerId: f.author.id,
        guildId: E,
        channelId: f.channel_id,
        messageId: f.id
      }
    })
  }
}

function ep(e, t) {
  let n = (0, C.h)(e);
  return {
    openGameProfileModal: (0, S.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != n ? n : true,
      source: I.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: n
  }
}

function eh(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, ee.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: ei.M7m.DESKTOP
  }), o = i.useMemo(() => a.map(e => {
    switch (e) {
      case ee.Ol.MOBILE:
        return (0, r.jsx)(c.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.ANDROID:
        return (0, r.jsx)(er.j, {
          width: s.Z.xxs,
          height: s.Z.xxs,
          color: "currentColor"
        });
      case ee.Ol.IOS:
        return (0, r.jsx)(c.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.PLAYSTATION:
        return (0, r.jsx)(c.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case ee.Ol.XBOX:
        return (0, r.jsx)(c.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(B.lm), [a]);
  if (!(null != n || o.length > 0)) return null;
  let l = null != n ? (0, X.V)(n) : es.intl.string(es.t["4dGUPz"]);
  return (0, r.jsxs)("div", {
    className: el.footer,
    children: [(0, r.jsx)("div", {
      className: el.footerSupportedPlatformIconsContainer,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: el.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: el.footerSupportedPlatformText,
      children: l
    })]
  })
}

function em(e) {
  var t, n, s, g, I;
  let {
    analyticsLocations: S,
    application: A,
    channel: C,
    currentUserId: N,
    currentUserPresenceActivity: R,
    hideParty: P,
    message: w,
    onView: D,
    partyStatusElement: L,
    presenceActivity: x
  } = e, j = (0, v.A)(A), M = (0, p.ye)(A), {
    bot: B
  } = A, Z = G.ZP.getApplicationIconURL({
    id: A.id,
    icon: A.icon,
    bot: B
  }), {
    staticBannerSrc: W,
    videoBannerSrc: q,
    bannerAspectRatio: X
  } = (0, E.E)(A), ee = i.useMemo(() => {
    var e;
    return (null == x || null == (e = x.assets) ? true : e.invite_cover_image) != null ? (0, U.xF)(x.application_id, x.assets.invite_cover_image, 600 * (0, F.Z)()) : null
  }, [null == x || null == (t = x.assets) ? true : t.invite_cover_image, null == x ? true : x.application_id]), en = null != ee ? ee : W, er = null != ee ? true : q, eo = null != ee ? h.u.ACTIVITY : X, ec = !(0, J.Z)(x, w, A.id), eu = (0, K.H)(w), {
    openGameProfileModal: ed,
    launchableAppId: e_
  } = ep(A.id, w.author.id), em = !!e_, eg = (0, et.Z)({
    application: A,
    analyticsLocations: S
  }), eE = i.useMemo(() => null == eg ? null : {
    label: es.intl.string(es.t["jaYS/v"]),
    icon: c.v3n,
    trackingArea: m.j_.CLOUD_PLAY,
    onClick: eg
  }, [eg]), {
    canJoin: eb,
    remoteJoinPlatform: ey
  } = (0, H.h)({
    presenceActivity: x,
    currentUserPresenceActivity: R,
    currentUserId: N,
    message: w,
    application: A,
    isEmbeddedApplication: M,
    isFrameApplication: j,
    isGameLaunchable: em
  }), eO = ef(x, R, w, A), ev = (0, z.g)(R, x), eI = (0, Y.L)(x, w, A, N), eT = (0, l.e7)([k.Z], () => null != x && null != x.application_id && k.Z.getState(x.application_id, ei.mFx.JOIN) === ei.OcF.LOADING), eS = i.useMemo(() => eb ? {
    label: es.intl.string(es.t.VJlc0d),
    trackingArea: m.j_.JOIN,
    submitting: eT,
    onClick: () => {
      var e, t;
      d.Z.join({
        userId: w.author.id,
        sessionId: x.session_id,
        applicationId: x.application_id,
        channelId: C.id,
        messageId: w.id,
        source: ei.Sbl.MESSAGE_EMBED,
        analyticsLocations: S,
        embedded: (0, Q.Z)(x, ei.xjy.EMBEDDED),
        remotePartyId: null != ey ? null == (e = x.party) ? true : e.id : true
      }), (0, $.Z)({
        type: ei.q5t.JOIN,
        source: ei.Sbl.MESSAGE_EMBED,
        userId: w.author.id,
        guildId: C.guild_id,
        channelId: C.id,
        applicationId: x.application_id,
        partyId: null == (t = x.party) ? true : t.id,
        messageId: w.id,
        analyticsLocations: S,
        remoteJoinPlatform: ey
      })
    }
  } : eO ? {
    label: es.intl.string(es.t.VJlc0d),
    trackingArea: m.j_.SYNC,
    onClick: () => {
      null != x && f.Z_(x, w.author.id)
    }
  } : eI ? {
    label: es.intl.string(es.t["hC/Ze3"]),
    trackingArea: m.j_.INVITE,
    onClick: () => {
      null != x && u.Z.sendActivityInvite({
        type: ei.mFx.JOIN,
        channelId: C.id,
        activity: x,
        location: ei.Sbl.MESSAGE_EMBED
      })
    },
    disabled: w.author.id === N,
    disabledReason: w.author.id === N ? es.intl.string(es.t.IBl8IC) : true
  } : ev ? {
    label: es.intl.string(es.t.KC26NT),
    trackingArea: m.j_.PLAY,
    onClick: () => {},
    disabled: true
  } : null != eE ? eE : true, [eb, eO, eI, ev, eE, w.author.id, w.id, x, C.id, C.guild_id, S, ey, N, eT]), eA = i.useMemo(() => em && null != e_ ? {
    label: es.intl.string(es.t.RscU7O),
    trackingArea: m.j_.PLAY,
    onClick: () => {
      d.Z.launch({
        applicationId: e_,
        embedded: M
      })
    }
  } : null != eE ? eE : true, [M, em, e_, eE]), eC = (0, b.G)(A), eN = i.useMemo(() => null != ed ? ed : null != eC && M ? eC : true, [M, ed, eC]), eR = i.useMemo(() => {
    let e = [];
    return ec || null == eS ? ec && null != eA && e.push(eA) : e.push(eS), e
  }, [eA, ec, eS]), eP = i.useMemo(() => eR.some(e => e.trackingArea === m.j_.CLOUD_PLAY), [eR]);
  (0, _.Z)({
    name: a.ImpressionNames.CLOUD_PLAY_CTA,
    type: a.ImpressionTypes.VIEW,
    properties: {
      location_stack: S
    }
  }, {
    disableTrack: !eP
  });
  let ew = (0, V.dQ)(A.name, null == (n = w.activity) ? true : n.type),
    eD = (0, T.N)(A.id).some(e => (0, O.ig)(e) === o.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.YqE, {
        size: "xxs",
        color: "currentColor"
      }), es.intl.string(es.t.TsWCdX)]
    }) : null,
    eL = ev ? null : (0, r.jsx)(eh, {
      presenceActivity: x,
      remoteJoinPlatform: ey
    });
  if (ec) {
    let e = (0, r.jsx)(c.Text, {
      variant: "text-xs/medium",
      className: el.description,
      color: "none",
      lineClamp: 3,
      children: (0, V.wR)(w, A, C, N)
    });
    return (0, r.jsx)(h.W, {
      header: ew,
      title: A.name,
      staticBannerSrc: en,
      videoBannerSrc: er,
      onClickBanner: eN,
      bannerAspectRatio: eo,
      iconSrc: null != Z ? Z : true,
      info: e,
      actions: eR,
      onClickContent: eN,
      trackingConfig: {
        id: A.id,
        linkType: ea.U.RICH_PRESENCE_INVITE,
        onView: D,
        referrerId: w.author.id,
        guildId: C.guild_id,
        channelId: w.channel_id,
        messageId: w.id
      }
    })
  }
  let ex = null != (I = null == x || null == (s = x.timestamps) ? true : s.start) ? I : null == x ? true : x.created_at,
    ej = null != ex ? (0, r.jsxs)("div", {
      className: el.timestampContainer,
      children: [(0, r.jsx)(c.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(y.x3, {
        entry: {
          start: ex,
          end: null == x || null == (g = x.timestamps) ? true : g.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null,
    eM = (0, r.jsxs)(c.Text, {
      variant: "text-xs/normal",
      className: el.tagline,
      color: "none",
      lineClamp: 2,
      children: [eu ? (0, V.$v)(w, A, C, N, ec) : ej, eu ? null : eD]
    }),
    ek = (0, r.jsxs)("div", {
      className: el.info,
      children: [eM, P || eu ? null : L]
    });
  return (0, r.jsx)(h.W, {
    header: ew,
    title: A.name,
    staticBannerSrc: en,
    videoBannerSrc: er,
    onClickBanner: eN,
    bannerAspectRatio: eo,
    iconSrc: null != Z ? Z : true,
    info: ek,
    actions: eR,
    onClickContent: eN,
    trackingConfig: {
      id: A.id,
      linkType: ea.U.RICH_PRESENCE_INVITE,
      onView: D,
      referrerId: w.author.id,
      guildId: C.guild_id,
      channelId: w.channel_id,
      messageId: w.id
    },
    footer: eL
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
  } = e, f = (0, g.O)(o), _ = (0, l.e7)([w.default], () => w.default.getId()), p = (0, l.e7)([x.Z], () => {
    if (null == c.application) return x.Z.findActivity(c.author.id, e => e.type === ei.IIU.LISTENING);
    {
      let e = c.author.id;
      return (0, K.H)(c) && (e = e === _ && s.isPrivate() ? s.getRecipientId() : _), x.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, s, _]), h = (0, l.e7)([L.Z, j.Z], () => {
    var e;
    return null != (e = L.Z.getApplicationActivity(f.id)) ? e : j.Z.getApplicationActivity(f.id, true)
  }, [f.id]), m = (0, l.Wu)([D.Z], () => {
    var e;
    return null == p || null == p.party ? [] : Array.from(null != (e = D.Z.getParty(p.party.id)) ? e : [])
  }, [p]), {
    partySize: E,
    maxPartySize: b
  } = (0, q._)(p), y = i.useMemo(() => m.map(e => {
    let t = M.default.getUser(e);
    return null != t ? t : en.ag
  }), [m]), O = (0, eo.Ps)(null == p || null == (t = p.party) ? true : t.id) || f.id === P.r9.id, v = (0, r.jsx)(eu, {
    partyMembers: y,
    partySize: E,
    maxPartySize: b,
    guildId: s.guild_id,
    activityActionType: null == (n = c.activity) ? true : n.type
  });
  return O ? (0, r.jsx)(e_, {
    application: f,
    currentUserPresenceActivity: h,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: v,
    presenceActivity: p,
    guildId: s.guild_id
  }) : ed(c) ? (0, r.jsx)(A.Z, {
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