/** Chunk was on 4566 **/
n.d(t, {
  Z: () => F
});
var r = n(200651),
  i = n(192379),
  l = n(442837),
  o = n(481060),
  a = n(570140),
  s = n(384275),
  c = n(82906),
  u = n(763762),
  d = n(933557),
  p = n(605436),
  h = n(736052),
  f = n(86203),
  m = n(189156),
  g = n(878857),
  b = n(621853),
  _ = n(484459),
  C = n(131704),
  v = n(881998),
  y = n(984933),
  x = n(496675),
  j = n(594174),
  O = n(51144),
  N = n(7782),
  E = n(967128),
  I = n(320781),
  P = n(269203),
  S = n(86863),
  Z = n(558756),
  T = n(753898),
  A = n(734386),
  w = n(184279),
  R = n(438306),
  M = n(544142),
  k = n(128557),
  L = n(981631),
  D = n(176505),
  W = n(388032),
  U = n(581083),
  B = n(802138);

function H(e) {
  let {
    canManageRoles: t,
    channel: n
  } = e, i = t && (0, p.Yk)(n), o = (0, l.e7)([y.ZP], () => null != n.guild_id && n === y.ZP.getDefaultChannel(n.guild_id), [n]);
  if ((0, h.Z)(n.id)) return null;
  if (n.isForumPost()) return (0, r.jsx)(I.Z, {
    channel: n
  });
  if (C.Ec.has(n.type)) return (0, r.jsx)(M.Z, {
    channel: n
  });
  if (o) return (0, r.jsx)(k.Z, {
    channel: n
  });
  if (i) return (0, r.jsx)(A.Z, {
    channel: n
  });
  return (0, r.jsx)(R.Z, {
    channel: n
  })
}

function F(e) {
  var t, n;
  let {
    channel: p,
    showingBanner: h
  } = e, C = (0, d.ZP)(p), {
    type: y
  } = p, I = (0, l.e7)([j.default], () => p.isPrivate() ? j.default.getUser(p.getRecipientId()) : null), A = O.ZP.useUserTag(I), {
    canManageRoles: R,
    canReadMessageHistory: M
  } = (0, l.cj)([x.Z], () => ({
    canManageRoles: x.Z.can(L.Plq.MANAGE_ROLES, p),
    canReadMessageHistory: x.Z.can(L.Plq.READ_MESSAGE_HISTORY, p)
  })), k = (0, l.e7)([b.Z], () => y === L.d4z.DM ? b.Z.getMutualGuilds(p.getRecipientId()) : null, [p, y]), {
    systemDMRedesignEnabled: F
  } = g.Z.useExperiment({
    location: "bf1a4f_1"
  }, {
    autoTrackExposure: null !== (t = p.isSystemDM()) && void 0 !== t && t
  }), G = (0, u.Z)(null !== (n = null == I ? void 0 : I.id) && void 0 !== n ? n : L.lds), {
    authorizedAppToken: V,
    authorizedAppsFetchState: z
  } = (0, l.cj)([v.Z], () => {
    var e;
    return {
      authorizedAppToken: null != G ? null === (e = v.Z.getApps()) || void 0 === e ? void 0 : e.find(e => e.application.id === G.id) : void 0,
      authorizedAppsFetchState: v.Z.getFetchState()
    }
  }), q = c.Z.useExperiment({
    location: "EmptyMessages"
  }).enabledDesktop;
  if (i.useEffect(() => {
      y === L.d4z.DM && null == k && null != I && a.Z.wait(() => (0, _.Z)(p.getRecipientId(), I.getAvatarURL(null, 80), {
        withMutualGuilds: !0
      }))
    }, [k, y, p, I]), i.useEffect(() => {
      (null == I ? void 0 : I.bot) && z === v.M.NOT_FETCHED && s.Z.fetch()
    }, [null == I ? void 0 : I.bot, z]), p.isSystemDM()) return F ? (0, r.jsx)(w.Z, {
    channel: p
  }) : (0, r.jsx)(T.Z, {
    channel: p,
    children: W.NW.string(W.t.Rzvnio)
  });
  if (y === L.d4z.DM) {
    let e;
    return null != I && null != G ? null != V && (e = (0, r.jsxs)("div", {
      className: U.buttonContainer,
      children: [(0, r.jsx)(Z.W, {
        className: U.button,
        channel: p,
        user: I
      }), (0, r.jsx)(S.n, {
        className: U.button,
        user: I,
        application: G,
        channel: p,
        oauth2Token: V
      }), q && (0, r.jsx)(f.Z, {
        buttonSize: o.PhG.SMALL,
        color: o.zxk.Colors.PRIMARY,
        channel: p
      })]
    })) : e = (0, r.jsx)(N.Z, {
      userId: p.getRecipientId(),
      channel: p,
      showingBanner: h
    }), (0, r.jsxs)(T.Z, {
      channel: p,
      user: I,
      children: [null != I && (0, r.jsx)(o.X6q, {
        variant: "heading-xl/medium",
        className: B.marginBottom20,
        children: A
      }), W.NW.format(W.t["Qvg+6+"], {
        username: C
      }), (null == I ? void 0 : I.isProvisional) && (0, r.jsx)(m.qE, {
        userId: I.id
      }), e]
    })
  }
  return p.isMultiUserDM() ? p.isManaged() ? (0, r.jsxs)(E.ZP, {
    channelId: p.id,
    children: [(0, r.jsx)(E.Ot, {
      children: W.NW.format(W.t.I3R7Vl, {
        channelName: C
      })
    }), (0, r.jsx)(E.jz, {
      children: W.NW.string(W.t.M8Ao6O)
    })]
  }) : p.hasFlag(D.zZ.IS_JOIN_REQUEST_INTERVIEW_CHANNEL) ? (0, r.jsx)(P.Z, {
    channel: p
  }) : (0, r.jsx)(T.Z, {
    channel: p,
    children: W.NW.format(W.t.MFwcqK, {
      name: C
    })
  }) : M ? (0, r.jsx)(H, {
    channel: p,
    canManageRoles: R
  }) : (0, r.jsx)(E.ZP, {
    channelId: p.id,
    children: (0, r.jsx)(E.jz, {
      children: W.NW.format(W.t.hPVEQE, {
        channelName: C
      })
    })
  })
}