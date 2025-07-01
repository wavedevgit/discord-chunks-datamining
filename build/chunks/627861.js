/** Chunk was on 61668 **/
n.d(t, {
  c: () => ec
}), n(388685), n(539854), n(953529);
var r = n(255367),
  i = n(73800),
  l = n(705512),
  a = n(442837),
  o = n(481060),
  s = n(278323),
  c = n(224706),
  u = n(763472),
  d = n(915346),
  p = n(783097),
  m = n(728345),
  f = n(311819),
  g = n(758199),
  _ = n(914498),
  h = n(172109),
  b = n(880251),
  E = n(515344),
  y = n(371991),
  C = n(561308),
  x = n(810568),
  v = n(567409),
  O = n(168524),
  j = n(592745),
  I = n(952164),
  S = n(829820),
  T = n(789407),
  N = n(314897),
  P = n(757266),
  A = n(831506),
  w = n(77498),
  Z = n(283595),
  R = n(293273),
  k = n(158776),
  L = n(885110),
  D = n(594174),
  M = n(417363),
  U = n(768581),
  F = n(63063),
  B = n(358085),
  G = n(804739),
  H = n(276852),
  V = n(620662),
  z = n(994339),
  W = n(275920),
  K = n(884338),
  Y = n(981631),
  X = n(616922),
  q = n(388032),
  Q = n(581738);

function J(e) {
  let t, {
      partyMembers: n,
      partySize: i,
      maxPartySize: l,
      guildId: a,
      activityActionType: s
    } = e,
    c = Math.max(i, n.length);
  t = s === Y.mFx.LISTEN ? l > 0 ? q.intl.formatToPlainString(q.t.Zogooq, {
    partySize: c,
    maxPartySize: l
  }) : q.intl.formatToPlainString(q.t.UGei0t, {
    partySize: c
  }) : l > 0 ? q.intl.formatToPlainString(q.t.gLu7NT, {
    partySize: c,
    maxPartySize: l
  }) : q.intl.formatToPlainString(q.t["65JnWF"], {
    partySize: c
  });
  let u = [...n];
  for (; u.length < i;) u.push(K.ag);
  for (; u.length < l;) u.push(null);
  return (0, r.jsxs)("div", {
    className: Q.partyStatusWrapper,
    children: [(0, r.jsx)(K.ZP, {
      guildId: a,
      users: u,
      max: l > 0 ? Math.min(l, 8) : 8,
      size: K.u8.SIZE_16,
      dimEmptyUsers: !0
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: t
    })]
  })
}

function $(e) {
  var t;
  return (null == (t = e.activity) ? void 0 : t.type) === Y.mFx.JOIN_REQUEST
}

function ee(e) {
  if (null == e || null == e.party || null == e.party.size || e.party.size.length < 2) return {
    partySize: -1,
    maxPartySize: -1
  };
  let [t, n] = e.party.size;
  return {
    partySize: t,
    maxPartySize: n
  }
}

function et(e) {
  let {
    partySize: t,
    maxPartySize: n
  } = e;
  return t > -1 && n > 0 && t >= n
}

function en(e) {
  let {
    partySize: t,
    maxPartySize: n
  } = e;
  return t > -1 && n > -1
}

function er(e, t) {
  var n, r;
  return (null == t || null == (n = t.party) ? void 0 : n.id) != null && (null == e || null == (r = e.party) ? void 0 : r.id) != null && e.party.id === t.party.id
}

function ei(e, t) {
  switch (t) {
    case Y.mFx.LISTEN:
      return q.intl.formatToPlainString(q.t["/8czHx"], {
        name: e
      });
    case Y.mFx.WATCH:
      return q.intl.formatToPlainString(q.t.BBJXVl, {
        name: e
      });
    case Y.mFx.JOIN:
      return q.intl.string(q.t.pkq6Vl);
    case Y.mFx.JOIN_REQUEST:
    default:
      return q.intl.string(q.t.Ckxb6u)
  }
}

function el(e) {
  var t, n, l, a, s;
  let {
    application: c,
    currentUserPresenceActivity: u,
    hideParty: d,
    message: p,
    onView: m,
    partyStatusElement: f,
    presenceActivity: h
  } = e, b = er(u, h), E = (0, S.Lz)(h, p.author, "Invite Embed"), C = !(0, z.Z)(h, p, c.id), x = i.useMemo(() => {
    let e = [];
    if (!b) {
      var t;
      e.push({
        label: null != (t = E.label) ? t : q.intl.string(q.t.VJlc0d),
        trackingArea: _.j_.SYNC,
        onClick: () => {
          E.onClick()
        },
        disabledReason: E.disabled ? E.tooltip : void 0
      })
    }
    return e
  }, [b, E]), v = i.useMemo(() => {
    if (null != h) return () => (0, I.aG)(h)
  }, [h]), O = ei(c.name, null == (t = p.activity) ? void 0 : t.type);
  if (C) {
    let e = (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: Q.description,
      color: "none",
      lineClamp: 1,
      children: q.intl.string(q.t["84qx9v"])
    });
    return (0, r.jsx)(g.W, {
      header: O,
      title: c.name,
      iconSrc: T.r9.getWhiteIconURL(),
      infoUrl: F.Z.getArticleURL(Y.BhN.SPOTIFY_CONNECTION),
      info: e,
      actions: [],
      onClickContent: v,
      trackingConfig: {
        id: c.id,
        linkType: _.Un.RICH_PRESENCE_INVITE,
        onView: m
      }
    })
  } {
    let e = null != h && null != h.details && null != h.state ? q.intl.formatToPlainString(q.t.JCvHt7, {
        track: h.details,
        artist: h.state
      }) : c.name,
      t = null != (a = null == h || null == (n = h.timestamps) ? void 0 : n.start) ? a : null == h ? void 0 : h.created_at,
      i = null != t ? (0, r.jsxs)("div", {
        className: Q.timestampContainer,
        children: [(0, r.jsx)(o.RZG, {
          size: "xxs"
        }), (0, r.jsx)(y.x3, {
          entry: {
            start: t,
            end: null == h || null == (l = h.timestamps) ? void 0 : l.end
          },
          textColor: "currentColor",
          textTabularNumbers: !1,
          textFontCode: !1
        })]
      }) : null,
      u = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: Q.tagline,
          color: "none",
          lineClamp: 1,
          children: i
        }), d ? null : f]
      });
    return (0, r.jsx)(g.W, {
      header: O,
      title: e,
      iconSrc: null != (s = (0, H.Z)(h, c.id)) ? s : void 0,
      infoUrl: F.Z.getArticleURL(Y.BhN.SPOTIFY_CONNECTION),
      info: u,
      actions: x,
      onClickContent: v,
      trackingConfig: {
        id: c.id,
        linkType: _.Un.RICH_PRESENCE_INVITE,
        onView: m
      }
    })
  }
}

function ea(e, t) {
  return {
    openGameProfileModal: (0, O.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: e,
      source: x.m1.Embed,
      trackEntryPointImpression: !0,
      sourceUserId: t
    }),
    isGameLaunchable: (0, a.e7)([Z.Z, j.Z, M.Z, P.Z], () => (0, G.t)({
      LibraryApplicationStore: Z.Z,
      LaunchableGameStore: j.Z,
      DispatchApplicationStore: M.Z,
      ConnectedAppsStore: P.Z,
      applicationId: null != e ? e : ""
    }), [e])
  }
}

function eo(e, t, n, r, i) {
  if (e.author.id === r) {
    if (n.isPrivate()) {
      let e = D.default.getUser(n.getRecipientId());
      if (null != e) return i ? q.intl.formatToPlainString(q.t.JddpNz, {
        username: e.globalName,
        appName: t.name
      }) : q.intl.formatToPlainString(q.t.gYVkSU, {
        username: e.globalName,
        appName: t.name
      })
    }
    return i ? q.intl.formatToPlainString(q.t["2N1kNT"], {
      appName: t.name
    }) : q.intl.formatToPlainString(q.t.IA6uDQ, {
      appName: t.name
    })
  }
  return i ? q.intl.formatToPlainString(q.t.XE8axM, {
    username: e.author.globalName,
    appName: t.name
  }) : q.intl.formatToPlainString(q.t.hgcjOj, {
    username: e.author.globalName,
    appName: t.name
  })
}

function es(e) {
  var t, n, h, x;
  let {
    analyticsLocations: O,
    application: j,
    channel: I,
    currentUserId: S,
    currentUserPresenceActivity: T,
    hideParty: N,
    message: P,
    onView: A,
    partyStatusElement: Z,
    presenceActivity: R
  } = e, k = (0, p.ye)(j), {
    bot: L
  } = j, D = U.ZP.getApplicationIconURL({
    id: j.id,
    icon: j.icon,
    bot: L
  }), {
    staticBannerSrc: M,
    videoBannerSrc: G,
    bannerAspectRatio: H
  } = (0, b.E)(j), K = !(0, z.Z)(R, P, j.id), X = $(P), J = (0, a.e7)([w.Z], () => w.Z.getGameByName(j.name), [j.name]), {
    openGameProfileModal: el,
    isGameLaunchable: es
  } = ea(j.id, P.author.id), {
    openGameProfileModal: ec,
    isGameLaunchable: eu
  } = ea(null == J ? void 0 : J.id, P.author.id), ed = j.thirdPartySkus.find(e => {
    let {
      distributor: t
    } = e;
    return t === Y.GQo.NVIDIA_GDN_APP
  }), ep = null == ed ? void 0 : ed.id, {
    data: em
  } = (0, m.IX)(ep), {
    bot: ef
  } = null != em ? em : {
    bot: null
  }, eg = i.useMemo(() => null != ep && null != ef && null != em && (0, p.ye)(em) ? {
    label: "Play via Cloud",
    icon: (0, r.jsx)(o.v3n, {
      size: "xs",
      color: "currentColor"
    }),
    trackingArea: _.j_.CLOUD_PLAY,
    onClick: () => {
      (0, d.W)({
        appId: ep,
        botId: ef.id,
        analyticsLocations: O
      })
    }
  } : null, [O, em, ep, ef]), e_ = function(e) {
    let {
      presenceActivity: t,
      currentUserPresenceActivity: n,
      currentUserId: r,
      message: i,
      application: l,
      isEmbeddedApplication: a,
      isGameLaunchable: o
    } = e;
    if (i.author.id === r || !(0, z.Z)(t, i, l.id)) return !1;
    let s = ee(t);
    return !(!en(s) || et(s) || er(n, t) || $(i)) && (!!a || !!B.isPlatformEmbedded && !!o)
  }({
    presenceActivity: R,
    currentUserPresenceActivity: T,
    currentUserId: S,
    message: P,
    application: j,
    isEmbeddedApplication: k,
    isGameLaunchable: es
  }), eh = !(null == R || !(0, z.Z)(R, P, j.id) || !(0, V.Z)(R, Y.xjy.SYNC) || !B.isPlatformEmbedded || er(T, R)), eb = er(T, R), eE = function(e, t, n, r) {
    var i;
    if (t.author.id === r || !(0, z.Z)(e, t, n.id) || (null == (i = t.activity) ? void 0 : i.type) !== Y.mFx.JOIN_REQUEST || !(0, V.Z)(e, Y.xjy.JOIN)) return !1;
    let l = ee(e);
    return !(!en(l) || et(l))
  }(R, P, j, S), ey = i.useMemo(() => e_ ? {
    label: q.intl.string(q.t.VJlc0d),
    trackingArea: _.j_.JOIN,
    onClick: () => {
      var e;
      c.Z.join({
        userId: P.author.id,
        sessionId: R.session_id,
        applicationId: R.application_id,
        channelId: I.id,
        messageId: P.id,
        source: Y.Sbl.MESSAGE_EMBED,
        analyticsLocations: O,
        embedded: (0, V.Z)(R, Y.xjy.EMBEDDED)
      }), (0, W.Z)({
        type: Y.q5t.JOIN,
        source: Y.Sbl.MESSAGE_EMBED,
        userId: P.author.id,
        guildId: I.guild_id,
        channelId: I.id,
        applicationId: R.application_id,
        partyId: null == (e = R.party) ? void 0 : e.id,
        messageId: P.id,
        analyticsLocations: O
      })
    }
  } : eh ? {
    label: q.intl.string(q.t.VJlc0d),
    trackingArea: _.j_.SYNC,
    onClick: () => {
      null != R && u.Z_(R, P.author.id)
    }
  } : eE ? {
    label: q.intl.string(q.t["hC/Ze3"]),
    trackingArea: _.j_.INVITE,
    onClick: () => {
      null != R && s.Z.sendActivityInvite({
        type: Y.mFx.JOIN,
        channelId: I.id,
        activity: R,
        location: Y.Sbl.MESSAGE_EMBED
      })
    },
    disabledReason: P.author.id === S ? q.intl.string(q.t.IBl8IC) : void 0
  } : eb ? {
    label: q.intl.string(q.t.KC26NT),
    trackingArea: _.j_.PLAY,
    onClick: () => {},
    disabledReason: q.intl.string(q.t.KC26NT)
  } : null != eg ? eg : void 0, [O, e_, eE, eh, I.id, I.guild_id, S, eb, P.author.id, P.id, R, eg]), eC = i.useMemo(() => es ? {
    label: q.intl.string(q.t.RscU7O),
    trackingArea: _.j_.PLAY,
    onClick: () => {
      c.Z.launch({
        applicationId: j.id
      })
    }
  } : eu && (null == J ? void 0 : J.id) != null ? {
    label: q.intl.string(q.t.RscU7O),
    trackingArea: _.j_.PLAY,
    onClick: () => {
      c.Z.launch({
        applicationId: J.id
      })
    }
  } : null != eg ? eg : void 0, [j.id, es, eu, null == J ? void 0 : J.id, eg]), ex = (0, E.G)(j), ev = i.useMemo(() => null != el ? el : null != ec ? ec : null != ex && k ? ex : void 0, [k, el, ec, ex]), eO = i.useMemo(() => {
    let e = [];
    return K || null == ey ? K && null != eC && e.push(eC) : e.push(ey), e
  }, [eC, K, ey]), ej = ei(j.name, null == (t = P.activity) ? void 0 : t.type), eI = k ? (0, f.H)({
    applicationId: j.id,
    referrerId: S
  }) : void 0, eS = (0, v.N)(j.id).some(e => (0, C.ig)(e) === l.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.YqE, {
      size: "xxs",
      color: "currentColor"
    }), q.intl.string(q.t.TsWCdX)]
  }) : null;
  if (K) {
    let e = (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: Q.description,
      color: "none",
      lineClamp: 3,
      children: function(e, t, n, r) {
        var i;
        switch (null == (i = e.activity) ? void 0 : i.type) {
          case Y.mFx.LISTEN:
          case Y.mFx.WATCH:
          case Y.mFx.JOIN:
            return q.intl.string(q.t.x1UXGR);
          case Y.mFx.JOIN_REQUEST:
          default:
            return eo(e, t, n, r, !0)
        }
      }(P, j, I, S)
    });
    return (0, r.jsx)(g.W, {
      header: ej,
      title: j.name,
      staticBannerSrc: M,
      videoBannerSrc: G,
      bannerAspectRatio: H,
      iconSrc: null != D ? D : void 0,
      embedUrl: eI,
      infoUrl: F.Z.getArticleURL(Y.BhN.RICH_PRESENCE_INTRODUCTION),
      info: e,
      actions: eO,
      onClickContent: ev,
      trackingConfig: {
        id: j.id,
        linkType: _.Un.RICH_PRESENCE_INVITE,
        onView: A
      }
    })
  }
  let eT = null != (x = null == R || null == (n = R.timestamps) ? void 0 : n.start) ? x : null == R ? void 0 : R.created_at,
    eN = null != eT ? (0, r.jsxs)("div", {
      className: Q.timestampContainer,
      children: [(0, r.jsx)(o.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(y.x3, {
        entry: {
          start: eT,
          end: null == R || null == (h = R.timestamps) ? void 0 : h.end
        },
        textColor: "currentColor",
        textTabularNumbers: !1,
        textFontCode: !1
      })]
    }) : null,
    eP = (0, r.jsxs)(o.Text, {
      variant: "text-xs/normal",
      className: Q.tagline,
      color: "none",
      lineClamp: 2,
      children: [X ? eo(P, j, I, S, K) : eN, X ? null : eS]
    }),
    eA = (0, r.jsxs)(r.Fragment, {
      children: [eP, N || X ? null : Z]
    });
  return (0, r.jsx)(g.W, {
    header: ej,
    title: j.name,
    staticBannerSrc: M,
    videoBannerSrc: G,
    bannerAspectRatio: H,
    iconSrc: null != D ? D : void 0,
    embedUrl: eI,
    infoUrl: F.Z.getArticleURL(Y.BhN.RICH_PRESENCE_INTRODUCTION),
    info: eA,
    actions: eO,
    onClickContent: ev,
    trackingConfig: {
      id: j.id,
      linkType: _.Un.RICH_PRESENCE_INVITE,
      onView: A
    }
  })
}

function ec(e) {
  var t, n;
  let {
    analyticsLocations: l,
    app: o,
    channel: s,
    message: c,
    hideParty: u,
    onView: d
  } = e, p = (0, h.O)(o), m = (0, a.e7)([N.default], () => N.default.getId()), f = (0, a.e7)([k.Z], () => {
    if (null == c.application) return k.Z.findActivity(c.author.id, e => e.type === Y.IIU.LISTENING);
    {
      let e = c.author.id;
      return $(c) && (e = e === m && s.isPrivate() ? s.getRecipientId() : m), k.Z.getApplicationActivity(e, c.application.id)
    }
  }, [c, s, m]), g = (0, a.e7)([R.Z, L.Z], () => {
    var e;
    return null != (e = R.Z.getApplicationActivity(p.id)) ? e : L.Z.getApplicationActivity(p.id, !0)
  }, [p.id]), _ = (0, a.Wu)([A.Z], () => {
    var e;
    return null == f || null == f.party ? [] : Array.from(null != (e = A.Z.getParty(f.party.id)) ? e : [])
  }, [f]), {
    partySize: b,
    maxPartySize: E
  } = ee(f), y = i.useMemo(() => _.map(e => {
    let t = D.default.getUser(e);
    return null != t ? t : K.ag
  }), [_]), C = (0, X.Ps)(null == f || null == (t = f.party) ? void 0 : t.id) || p.id === T.r9.id, x = (0, r.jsx)(J, {
    partyMembers: y,
    partySize: b,
    maxPartySize: E,
    guildId: s.guild_id,
    activityActionType: null == (n = c.activity) ? void 0 : n.type
  });
  return C ? (0, r.jsx)(el, {
    application: p,
    currentUserPresenceActivity: g,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: x,
    presenceActivity: f
  }) : (0, r.jsx)(es, {
    analyticsLocations: l,
    application: p,
    channel: s,
    currentUserId: m,
    currentUserPresenceActivity: g,
    hideParty: u,
    message: c,
    onView: d,
    partyStatusElement: x,
    presenceActivity: f
  })
}