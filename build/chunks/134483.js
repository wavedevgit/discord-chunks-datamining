/** Chunk was on 64838 **/
l.d(t, {
  Z: () => V
}), l(47120);
var n = l(200651),
  s = l(192379),
  r = l(120356),
  i = l.n(r),
  o = l(442837),
  u = l(780384),
  a = l(481060),
  c = l(358221),
  d = l(594190),
  m = l(687516),
  E = l(210887),
  S = l(937995),
  j = l(158776),
  p = l(594174),
  f = l(617136),
  A = l(272008),
  T = l(113434),
  x = l(569984),
  v = l(497505),
  h = l(918701),
  g = l(5881),
  C = l(475595),
  _ = l(566078),
  N = l(602667),
  L = l(340100),
  Z = l(611855),
  b = l(644646),
  R = l(880199),
  O = l(670638),
  y = l(667105),
  q = l(860151),
  P = l(341907),
  k = l(46140),
  M = l(981631),
  I = l(354459),
  Q = l(388032),
  D = l(883848);

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}

function z(e) {
  var t, l, r, S;
  let {
    channelId: N,
    quest: z,
    previewQuest: V,
    isParticipatingOverride: W
  } = e, B = (0, f.O5)(), [H, G] = s.useState(!1), F = s.useCallback(() => G(!0), []), K = s.useCallback(() => G(!1), []), $ = (0, o.e7)([p.default], () => p.default.getCurrentUser()), J = (0, o.e7)([E.Z], () => E.Z.getState().theme), X = (0, u.wj)(J) ? M.BRd.DARK : M.BRd.LIGHT, {
    isCurrentUserStreamingQuestApplication: Y,
    isQuestInQuestBar: ee
  } = (0, o.cj)([j.Z, c.Z, x.Z], () => {
    var e;
    let t = c.Z.getParticipants(N),
      l = null != z && null != $ && (e = j.Z, t.some(t => {
        if (t.type !== I.fO.STREAM || t.user.id !== $.id) return !1;
        let l = (0, m.Um)(t.stream, e);
        return null != l && (0, h._D)(l, z)
      })),
      n = (0, h.PM)(x.Z.quests, x.Z.questToDeliverForPlacement, v.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
    return {
      isCurrentUserStreamingQuestApplication: l,
      isQuestInQuestBar: (null == n ? void 0 : n.id) === (null == z ? void 0 : z.id)
    }
  }, [N, $, z]), et = null != z ? _.r.build(z.config) : null, el = null == et ? void 0 : et.application.id, en = (0, o.e7)([d.ZP, j.Z], () => {
    let e = d.ZP.getRunningGames().map(e => e.id);
    if ((0, h.$H)(z) && e.includes(el)) return !0;
    let t = null != $ ? j.Z.findActivity($.id, e => e.type !== M.IIU.CUSTOM_STATUS) : null;
    return !!(null != t && (0, h.$J)(z) && (0, h._D)(t, z))
  }, [z, el, $]), es = !0 === W || Y || en, er = (0, o.e7)([x.Z], () => null != z && x.Z.isEnrolling(z.id), [z]), ei = (0, o.e7)([c.Z], () => ((null == $ ? void 0 : $.id) == null ? null : c.Z.getParticipant(N, $.id)) != null, [N, $]), eo = (0, T.B6)(null == z ? void 0 : z.config.expiresAt), eu = (0, T.B6)(null == et ? void 0 : et.rewardsExpireAt), ea = s.useCallback(() => {
    (0, A.AH)(z.id, {
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: f.jZ.ACCEPT_QUEST
    })
  }, [z]), ec = s.useCallback(() => {
    B({
      questId: z.id,
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: f.jZ.TRACK_PROGRESS
    }), (0, P.navigateToQuestHome)({
      fromContent: v.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, B]), ed = s.useCallback(() => {
    B({
      questId: z.id,
      questContent: v.jn.QUEST_LIVE_STREAM,
      questContentCTA: f.jZ.LEARN_MORE
    }), (0, P.navigateToQuestHome)({
      fromContent: v.jn.QUEST_LIVE_STREAM,
      questId: z.id
    })
  }, [z, B]), em = (0, y.hf)({
    quest: z,
    location: v.jn.QUEST_LIVE_STREAM
  }), eE = s.useMemo(() => (0, g.T)({
    quest: z,
    location: k.dr.QUEST_CHANNEL_CALL_HEADER
  }), [z]), eS = (0, T.tP)(z), ej = (null === (t = z.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, ep = (null === (l = z.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, ef = null != z.userStatus && (0, h.zE)(z.userStatus, v.jn.QUEST_LIVE_STREAM), eA = null != z.userStatus && (0, h.zE)(z.userStatus, v.jn.QUEST_BAR), eT = ee && !eA;
  eE.info({
    isQuestCallHeaderDismissed: ef,
    isQuestExpired: eS,
    isQuestBarShowing: eT,
    isCurrentUserCallParticipant: ei
  });
  let ex = null != V && (null === (r = z.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null;
  if (!ex && (ef || eS || eT) || !ex && !ei) return null;
  let ev = (0, h.il)(z),
    eh = (0, n.jsx)(b.Z, {
      className: D.rewardTile,
      autoplay: H,
      quest: z,
      questContent: v.jn.QUEST_LIVE_STREAM,
      location: k.dr.QUEST_CHANNEL_CALL_HEADER
    });
  return (0, n.jsxs)("div", {
    className: i()(D.wrapper, {
      [D.wrapperAccepted]: ej
    }),
    onFocus: F,
    onMouseEnter: F,
    onBlur: K,
    onMouseLeave: K,
    children: [!ej && (0, n.jsxs)("div", {
      className: D.rewardTileWrapper,
      children: [eh, (0, n.jsx)(Z.Z, {
        bgOpacity: .32,
        className: D.promotedTag
      })]
    }), (0, n.jsxs)("div", {
      className: D.content,
      children: [(0, n.jsxs)("div", {
        className: D.heading,
        children: [ej && es ? eh : (0, n.jsx)("img", {
          className: D.gameTile,
          alt: z.config.messages.gameTitle,
          src: (0, C.fh)(z, C.eC.GAME_TILE, X).url
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsxs)("div", {
            className: D.headingWithSubmenu,
            children: [(0, n.jsx)(a.X6q, {
              className: D.questTitle,
              variant: "heading-md/semibold",
              color: "header-primary",
              children: es ? (0, h.AV)({
                quest: z,
                taskDetails: ev
              }) : Q.NW.formatToPlainString(Q.t.EQa7oq, {
                questName: z.config.messages.questName
              })
            }), (0, n.jsx)(O.r, {
              questContent: v.jn.QUEST_LIVE_STREAM,
              quest: z,
              preventIdle: !0,
              shouldShowDisclosure: (null === (S = z.userStatus) || void 0 === S ? void 0 : S.enrolledAt) == null,
              children: e => (0, n.jsx)(a.P3F, U(w({}, e), {
                className: D.submenuWrapper,
                "aria-label": Q.NW.string(Q.t.DEoVWV),
                children: (0, n.jsx)(a.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: D.submenuIcon
                })
              }))
            })]
          }), (0, n.jsx)(a.Text, {
            color: "header-secondary",
            variant: "text-xs/medium",
            children: ep ? Q.NW.formatToPlainString(Q.t.APddvL, {
              expirationDate: eu
            }) : Q.NW.formatToPlainString(Q.t["pX+fmp"], {
              expirationDate: eo
            })
          })]
        })]
      }), ej && !ep && !es && (0, n.jsx)(q.Z, {
        autoplay: H,
        quest: z,
        questContent: v.jn.QUEST_LIVE_STREAM,
        taskDetails: ev,
        location: k.dr.QUEST_CHANNEL_CALL_HEADER
      }), (0, n.jsxs)("div", {
        className: D.ctas,
        children: [!ej && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(a.zxk, {
            className: D.cta,
            color: a.zxk.Colors.PRIMARY,
            fullWidth: !0,
            size: a.zxk.Sizes.SMALL,
            onClick: ed,
            children: Q.NW.string(Q.t.LLLLPD)
          }), (0, n.jsx)(a.zxk, {
            className: D.cta,
            color: a.zxk.Colors.BRAND,
            fullWidth: !0,
            onClick: ea,
            size: a.zxk.Sizes.SMALL,
            submitting: er,
            children: Q.NW.string(Q.t.l7E81t)
          })]
        }), ej && !ep && es && (0, n.jsx)(L.Z, {
          color: a.TVs.colors.BG_BRAND,
          quest: z
        }), ej && !ep && !es && (0, n.jsx)(a.zxk, {
          className: D.cta,
          color: a.zxk.Colors.BRAND,
          fullWidth: !0,
          onClick: ec,
          size: a.zxk.Sizes.SMALL,
          children: Q.NW.string(Q.t.VN1Ajo)
        }), ep && (0, n.jsx)(a.zxk, {
          className: D.cta,
          color: a.zxk.Colors.BRAND,
          fullWidth: !0,
          onClick: em,
          size: a.zxk.Sizes.SMALL,
          children: (0, h.xN)(z.config) ? (0, n.jsx)(R.Z, {
            orbQuantity: (0, h.LM)(z.config)
          }) : Q.NW.string(Q.t.cfY4PD)
        })]
      })]
    })]
  })
}
let V = function(e) {
  let t = s.useContext(S.h9),
    l = (0, o.e7)([c.Z, j.Z, x.Z], () => {
      let t = c.Z.getParticipants(e.channelId);
      return null != e.previewQuest ? e.previewQuest : function(e, t, l) {
        for (let i of e) {
          var n, s, r;
          if (i.type === I.fO.STREAM) {
            let e = null !== (s = (0, m.Um)(i.stream, l)) && void 0 !== s ? s : null,
              r = (0, h.ZZ)(t, e);
            if (null != r && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) == null) return r
          }
          for (let n of e)
            if (!(0, I.I)(n))
              for (let e of l.getActivities(n.user.id)) {
                let l = (0, h.ZZ)(t, e);
                if (null != l && (null === (r = l.userStatus) || void 0 === r ? void 0 : r.claimedAt) == null && ((0, h.Nj)({
                    quest: l
                  }) || (0, h.$J)(l))) return l
              }
        }
        return null
      }(t, x.Z.quests, j.Z)
    });
  return null == l ? null : (0, n.jsx)(N.A, {
    questOrQuests: l,
    overrideVisibility: !t,
    questContent: v.jn.QUEST_LIVE_STREAM,
    children: () => (0, n.jsx)(z, U(w({}, e), {
      quest: l
    }))
  })
}