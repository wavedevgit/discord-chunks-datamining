/** Chunk was on 50751 **/
n.d(t, {
  ZP: () => en,
  lX: () => et
}), n(47120), n(653041), n(789020);
var i = n(200651),
  r = n(192379),
  o = n(512722),
  l = n.n(o),
  s = n(661869),
  a = n(876215),
  u = n(884439),
  c = n(442837),
  d = n(481060),
  p = n(278323),
  h = n(24124),
  f = n(493683),
  m = n(13245),
  g = n(99690),
  O = n(493773),
  v = n(549879),
  y = n(620662),
  E = n(835473),
  b = n(194082),
  x = n(297781),
  j = n(656709),
  S = n(567409),
  I = n(225559),
  C = n(703656),
  N = n(93127),
  Z = n(814443),
  w = n(752048),
  _ = n(409057),
  P = n(199902),
  T = n(592125),
  D = n(293273),
  A = n(158776),
  k = n(699516),
  L = n(594174),
  R = n(801077),
  M = n(237997),
  W = n(630388),
  V = n(5192),
  z = n(709054),
  U = n(444295),
  F = n(388627),
  G = n(981631),
  Y = n(388032),
  B = n(281254);

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: o
  } = e, s = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)), [a, u] = r.useState("unsent"), [h, g] = r.useState(!1);
  r.useEffect(() => {
    if ("sent" === a) {
      let e = setTimeout(() => g(!0), 2e3);
      return () => clearTimeout(e)
    }
  }, [a]);
  let O = null != n && (0, y.Z)(n, G.xjy.JOIN),
    E = async e => {
      if (null != s && "unsent" === a) {
        e.stopPropagation();
        try {
          if (u("sending"), O) await p.Z.sendActivityInviteUser({
            type: G.mFx.JOIN,
            userId: s.id,
            activity: n,
            location: G.Sbl.UNLOCKED_OVERLAY
          });
          else {
            var i;
            let e = await f.Z.getOrEnsurePrivateChannel(s.id),
              n = null !== (i = T.Z.getChannel(e)) && void 0 !== i ? i : null;
            l()(null != n, "Send channel must be defined"), (0, C.uL)(G.Z5c.CHANNEL(n.guild_id, n.id)), (0, v.i)(G.IlC.OVERLAY), !0 === t.extra.fake_inventory_item ? await (0, j.k)({
              channel: n,
              content: Y.NW.string(Y.t.DwAcMz),
              whenReady: !0
            }) : await (0, j.p)({
              channel: n,
              content: Y.NW.string(Y.t.DwAcMz),
              entry: t,
              whenReady: !0
            })
          }
          m.Z.track(G.rMx.OVERLAY_GAME_INVITE_SENT, {
            target_user_id: s.id,
            target_content_entry_id: t.id,
            target_index: o
          }), (0, U.Ws)(G.Odu.ACTIVITY, {
            type: U.Qu.INVITE,
            value: U.bk.INVITE_SENT,
            userId: s.id
          }), u("sent")
        } catch (e) {
          u("unsent")
        }
      }
    }, b = async () => {
      var e;
      if (null == s) return;
      let t = await f.Z.getOrEnsurePrivateChannel(s.id),
        n = null !== (e = T.Z.getChannel(t)) && void 0 !== e ? e : null;
      l()(null != n, "Send channel must be defined"), (0, C.uL)(G.Z5c.CHANNEL(n.guild_id, n.id)), (0, v.i)(G.IlC.OVERLAY), (0, U.Ws)(G.Odu.ACTIVITY, {
        type: U.Qu.REDIRECT,
        value: U.bk.CHAT,
        userId: s.id
      })
    }, x = O ? Y.NW.string(Y.t["3fRyS0"]) : Y.NW.string(Y.t.y9eo7e), S = O ? (0, i.jsx)(d.ejJ, {
      color: "currentColor",
      size: "sm"
    }) : (0, i.jsx)(d.Uuj, {
      color: "currentColor",
      size: "sm"
    });
  return (0, i.jsx)(d.ua7, {
    text: x,
    "aria-label": x,
    children: e => (0, i.jsx)(d.zxk, Q(H({}, e), {
      submitting: "sending" === a,
      onClick: h ? b : E,
      className: B.inviteButton,
      wrapperClassName: B.inviteButtonWrapper,
      innerClassName: B.inviteButtonInner,
      color: d.Ttl.TRANSPARENT,
      look: d.iLD.FILLED,
      size: d.PhG.ICON,
      grow: !1,
      children: "sent" === a ? h ? (0, i.jsx)(d.kBi, {
        color: "currentColor",
        size: "sm"
      }) : (0, i.jsx)(d.kSu, {
        color: "currentColor",
        size: "sm"
      }) : S
    }))
  })
}

function X(e) {
  var t;
  let {
    entry: n,
    currentUserActivity: o
  } = e, l = (0, c.e7)([L.default], () => L.default.getUser(n.author_id)), s = null !== (t = null == o ? void 0 : o.application_id) && void 0 !== t ? t : n.extra.application_id, a = (0, c.e7)([A.Z], () => null != l ? A.Z.getApplicationActivity(l.id, s) : null, [s, l]), [u, h] = r.useState("unsent");
  if (!(null != a && (0, y.Z)(a, G.xjy.JOIN))) return null;
  let f = async e => {
    if (null != l && "unsent" === u) {
      e.stopPropagation();
      try {
        h("sending"), await p.Z.sendActivityInviteUser({
          type: G.mFx.JOIN_REQUEST,
          userId: l.id,
          activity: a,
          location: G.Sbl.UNLOCKED_OVERLAY
        }), (0, U.Ws)(G.Odu.ACTIVITY, {
          type: U.Qu.INVITE,
          value: U.bk.JOIN_REQUEST_SENT,
          userId: l.id
        }), h("sent")
      } catch (e) {
        h("unsent")
      }
    }
  }, m = Y.NW.string(Y.t.OKsSCQ);
  return (0, i.jsx)(d.ua7, {
    text: m,
    "aria-label": m,
    children: e => (0, i.jsx)(d.zxk, Q(H({}, e), {
      submitting: "sending" === u,
      onClick: f,
      className: B.inviteButton,
      wrapperClassName: B.inviteButtonWrapper,
      innerClassName: B.inviteButtonInner,
      color: d.Ttl.TRANSPARENT,
      look: d.iLD.FILLED,
      size: d.PhG.ICON,
      grow: !1,
      children: "sent" === u ? (0, i.jsx)(d.kSu, {
        color: "currentColor",
        size: "sm"
      }) : (0, i.jsx)(d.V9, {
        color: "currentColor",
        size: "sm"
      })
    }))
  })
}

function J(e) {
  let {
    entry: t,
    currentUserActivity: n,
    idx: r
  } = e, o = (0, c.e7)([L.default], () => L.default.getUser(t.author_id)), l = (0, c.e7)([P.Z], () => null != o ? P.Z.getAnyStreamForUser(o.id) : null, [o]), {
    isMobileOnline: s,
    status: a
  } = (0, c.cj)([A.Z], () => null == o ? {
    isMobileOnline: void 0,
    status: void 0
  } : {
    isMobileOnline: A.Z.isMobileOnline(o.id),
    status: A.Z.getStatus(o.id)
  }, [o]);
  return null == o ? null : (0, i.jsxs)("div", {
    className: B.row,
    children: [(0, i.jsx)(g.Z, {
      className: B.avatar,
      user: o,
      isMobile: s,
      status: a
    }), (0, i.jsxs)("div", {
      className: B.details,
      children: [(0, i.jsxs)("div", {
        className: B.usernameWrapper,
        children: [(0, i.jsx)(d.Text, {
          className: B.username,
          variant: "text-md/medium",
          color: "header-primary",
          children: V.ZP.getName(void 0, void 0, o)
        }), null != l && (0, i.jsx)(b.ZP, {
          className: B.liveIndicator
        })]
      }), (0, i.jsx)(x.Gk, {
        location: x.Gt.OVERLAY,
        className: B.badgesContainer,
        children: [x.OV, x.wO, x.f, x.v1, x.pQ].map((e, n) => (0, i.jsx)(e, {
          entry: t
        }, "entry-".concat(n)))
      })]
    }), (0, i.jsx)(X, {
      entry: t,
      currentUserActivity: n,
      idx: r
    }), (0, i.jsx)(K, {
      entry: t,
      currentUserActivity: n,
      idx: r
    })]
  })
}

function q(e) {
  return new Set(e.map(e => e.author_id))
}

function $(e) {
  let {
    entries: t,
    currentUserActivity: n
  } = e, o = (0, U.ee)(() => q(t), [t]), l = (0, U.ee)(() => new Set(Array.from(q(t)).filter(e => {
    let n = t.find(t => {
      let {
        author_id: n
      } = t;
      return e === n
    });
    return null != n && n.traits.find(e => {
      let {
        type: t
      } = e;
      return t === u.N.IS_LIVE
    })
  })), [t]), s = (0, U.ee)(() => new Set(t.map(e => e.id)), [t]);
  return r.useEffect(() => {
    (0, U.zi)(G.Odu.ACTIVITY, {
      locked: M.default.isInstanceLocked(),
      shownUserIds: Array.from(o),
      liveUserIds: Array.from(l),
      contentInventoryIds: Array.from(s)
    })
  }, [o, l, s]), (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsx)(J, {
      idx: t,
      entry: e,
      currentUserActivity: n
    }, t))
  })
}

function ee(e) {
  let {
    gamingId: t,
    maxUserShowCount: n,
    userAffinityThresholdV1: i = 35,
    userAffinityThresholdV2: o = .0029
  } = e, l = (0, S.Ns)(t);
  (0, O.ZP)(() => {
    (0, N.W)(), (0, N._)()
  });
  let d = (0, c.e7)([D.Z], () => null == t ? null : D.Z.getApplicationActivity(t), [t]),
    p = (0, c.Wu)([R.Z, k.Z, Z.Z, w.Z], () => {
      if (null == t) return [];
      let e = R.Z.nowPlayingCards,
        n = {
          v1: i,
          v2: o
        };
      return e.reduce((e, n) => {
        if (n.type !== G.GOo.USER) return e;
        let i = n.party.currentActivities;
        if (0 === i.length) return e;
        for (let n of i) n.game.id === t && null != n.activity && e.push(n);
        return e
      }, []).filter(e => {
        var t;
        let i = e.activityUser.id,
          r = k.Z.isFriend(i);
        return !! function(e, t, n) {
          let {
            v1: i
          } = n;
          return null == e ? t : e > i || t
        }(null === (t = Z.Z.getUserAffinity(i)) || void 0 === t ? void 0 : t.affinity, r, n) || function(e, t, n) {
          let {
            v2: i
          } = n;
          if (null == e) return t;
          let {
            communicationProbability: r,
            dmProbability: o,
            serverMessageProbability: l,
            vcProbability: s
          } = e;
          switch (!0) {
            case r > i:
            case o > i:
            case l > i:
            case s > i:
              return !0;
            default:
              return t
          }
        }(w.Z.getUserAffinity(i), r, n)
      })
    }, [t, i, o]);
  return (0, O.ZP)(() => (I.L(), () => I.v())), {
    entries: r.useMemo(() => {
      let e = l.filter(e => !p.some(t => t.activityUser.id === e.author_id)),
        t = [...p.map(e => (function(e) {
          var t, n, i, r, o, l, c;
          let d = null !== (o = null === (n = e.activity) || void 0 === n ? void 0 : null === (t = n.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== o ? o : Date.now();
          return {
            id: z.default.fromTimestamp(d),
            author_id: e.activityUser.id,
            extra: {
              type: "played_game_extra",
              game_name: null !== (l = null === (i = e.activity) || void 0 === i ? void 0 : i.name) && void 0 !== l ? l : e.game.name,
              application_id: null !== (c = null === (r = e.activity) || void 0 === r ? void 0 : r.application_id) && void 0 !== c ? c : e.game.id,
              fake_inventory_item: !0
            },
            content_type: a.s.PLAYED_GAME,
            author_type: s.i.USER,
            participants: e.playingMembers.map(e => e.id),
            traits: [{
              type: u.N.IS_LIVE,
              is_live: !0
            }]
          }
        })(e)), ...e];
      return null != n ? t.slice(0, n) : t
    }, [l, p, n]),
    currentUserActivity: d
  }
}

function et(e) {
  let t = ee(e);
  return (0, i.jsx)($, H({}, t))
}

function en(e) {
  let {
    locked: t
  } = e, n = (0, F.II)(), r = null == n ? void 0 : n.id, o = null == n ? void 0 : n.altId, l = (0, S.Ns)(r), s = (0, c.e7)([L.default], () => L.default.getCurrentUser()), a = null != o ? o : r, u = (0, c.e7)([D.Z], () => null == a ? null : D.Z.getApplicationActivity(a), [a]);
  (0, O.ZP)(() => (I.L(), () => I.v()));
  let p = null != u && (0, y.Z)(u, G.xjy.JOIN),
    f = (0, E.q)(null == u ? void 0 : u.application_id),
    m = null != f && (0, W.yE)(f.flags, G.udG.EMBEDDED),
    g = ee({
      gamingId: a,
      userAffinityThresholdV1: 17.5,
      userAffinityThresholdV2: .00145,
      maxUserShowCount: 12
    });
  return t ? null : 0 === l.length && null == u ? null : (0, i.jsxs)("div", {
    className: B.container,
    children: [null != u && null != s ? (0, i.jsx)(_.Z, {
      className: B.activityCard,
      activity: u,
      user: s,
      currentUser: s,
      appContext: G.IlC.OVERLAY
    }) : null, p && !m ? (0, i.jsx)(d.zxk, {
      className: B.inviteFriendsButton,
      onClick: () => {
        (0, h.h7)(u, !1, G.IlC.POPOUT), (0, U.Ws)(G.Odu.ACTIVITY, {
          type: U.Qu.INVITE,
          value: U.bk.PANEL_OPENED
        })
      },
      size: d.PhG.SMALL,
      color: d.Ttl.PRIMARY,
      children: Y.NW.string(Y.t["6Qgren"])
    }) : null, (0, i.jsx)($, H({}, g))]
  })
}