/** Chunk was on 32249 **/
n.r(t), n.d(t, {
  default: () => k
}), n(47120);
var r = n(200651),
  o = n(192379),
  l = n(120356),
  i = n.n(l),
  s = n(442837),
  a = n(780384),
  c = n(481060),
  u = n(607070),
  d = n(210887),
  m = n(617136),
  p = n(915750),
  v = n(113434),
  f = n(569984),
  E = n(497505),
  g = n(918701),
  O = n(475595),
  b = n(566078),
  S = n(164495),
  C = n(472144),
  j = n(602667),
  h = n(644646),
  y = n(880199),
  _ = n(604162),
  x = n(747717),
  D = n(963123),
  N = n(281055),
  P = n(46140),
  T = n(981631),
  I = n(388032),
  A = n(881382);

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  var t, n, l, f;
  let j, {
      transitionState: N,
      onClose: R,
      quest: k,
      autoplay: M,
      videoSessionId: q,
      impressionRef: B,
      startTime: F
    } = e,
    U = (0, g.il)(k),
    V = (0, s.e7)([d.Z], () => d.Z.getState().theme),
    Z = (0, a.wj)(V) ? T.BRd.DARK : T.BRd.LIGHT,
    Y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    W = (0, p.aM)(),
    [z, G] = o.useState(U.progressSeconds),
    [H, K] = o.useState(!1),
    {
      completedRatio: Q,
      completedRatioDisplay: X
    } = (0, v.I)(k),
    [$, J] = (0, _.G6)(I.NW.string(I.t.RDE0SU), I.NW.string(I.t["+5kSoa"]), 1700);
  if ((0, g.xN)(k.config) && (null === (t = k.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null) {
    let e = (0, g.LM)(k.config);
    j = (0, r.jsx)(y.Z, {
      orbQuantity: e
    })
  } else j = (null === (f = k.userStatus) || void 0 === f ? void 0 : f.claimedAt) != null ? I.NW.string(I.t.vTgCW1) : I.NW.string(I.t.cfY4PD);
  let ee = o.useCallback(() => {
      (0, g.f2)(k.id, {
        content: E.jn.VIDEO_MODAL,
        ctaContent: m.jZ.COPY_QUEST_URL,
        impressionId: W
      }), J()
    }, [W, k.id, J]),
    et = o.useMemo(() => b.r.build(k.config).defaultReward.messages.name, [k]),
    en = I.NW.formatToPlainString(I.t["12IWPz"], {
      rewardName: et
    });
  return (0, r.jsx)(c.Y0X, {
    transitionState: N,
    size: c.CgR.DYNAMIC,
    className: A.modalRoot,
    children: (0, r.jsx)("div", {
      ref: e => {
        B.current = e
      },
      className: A.modalBg,
      children: (0, r.jsx)("div", {
        className: A.modalBody,
        children: (0, r.jsxs)("div", {
          className: A.modalContent,
          children: [(0, r.jsxs)("div", {
            className: A.contentHeader,
            children: [(0, r.jsxs)(c.P3F, {
              className: A.contentHeaderGameInfo,
              onClick: () => {
                (0, g.FE)(k, {
                  content: E.jn.VIDEO_MODAL,
                  ctaContent: m.jZ.OPEN_GAME_LINK,
                  impressionId: W
                })
              },
              children: [(0, r.jsx)("img", {
                alt: k.config.messages.gameTitle,
                className: i()(A.contentHeaderLogotype, A.accentOnHover),
                src: (0, O.fh)(k, O.eC.LOGO_TYPE, Z).url
              }), (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
                className: A.questHeading,
                children: [(0, r.jsx)(c.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: I.NW.format(I.t.EQa7oq, {
                    questName: k.config.messages.questName
                  })
                }), (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: k.config.messages.gameTitle
                })]
              })]
            }), (0, r.jsx)(c.ua7, {
              position: "left",
              text: en,
              onTooltipShow: () => {
                K(!0)
              },
              onTooltipHide: () => {
                K(!1)
              },
              children: e => (0, r.jsx)(c.P3F, L(w({
                className: A.progressCont
              }, e), {
                children: (0, r.jsx)(C.Z, {
                  quest: k,
                  size: 48,
                  percentComplete: Q,
                  percentCompleteText: H ? X : void 0,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(h.Z, {
                    className: A.questProgressRewardTile,
                    quest: k,
                    questContent: E.jn.VIDEO_MODAL,
                    autoplay: !1,
                    location: P.dr.VIDEO_MODAL
                  })
                })
              }))
            })]
          }), (0, r.jsx)(D.Z, {
            quest: k,
            videoSessionId: q,
            parentTransitionState: N,
            onOptimisticProgressUpdate: G,
            autoplay: M,
            startTime: F
          }), (0, r.jsxs)("div", {
            className: A.contentFooter,
            children: [(0, r.jsx)(c.zxk, {
              onClick: R,
              color: c.zxk.Colors.PRIMARY,
              size: c.zxk.Sizes.MEDIUM,
              className: A.footerBtn,
              children: I.NW.string(I.t.cpT0Cg)
            }), (0, r.jsxs)("div", {
              className: A.contentFooterButtonCont,
              children: [(0, r.jsx)(c.zxk, {
                color: c.zxk.Colors.PRIMARY,
                onClick: ee,
                size: c.zxk.Sizes.NONE,
                className: i()(A.copyLinkBtn, A.footerBtn),
                children: $
              }), (0, r.jsx)(S.i0, {
                className: A.claimBtn,
                size: c.zxk.Sizes.MEDIUM,
                quest: k,
                useReducedMotion: Y,
                isExpanded: (null === (n = k.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                disabled: (null === (l = k.userStatus) || void 0 === l ? void 0 : l.completedAt) == null,
                ctaLabel: j,
                onClick: () => {
                  (0, g.xN)(k.config) && R()
                }
              })]
            })]
          })]
        })
      })
    })
  })
}

function k(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: o,
    startTime: l
  } = e, i = function(e, t) {
    if (null == e) return {};
    var n, r, o = function(e, t) {
      if (null == e) return {};
      var n, r, o = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
    }
    return o
  }(e, ["questId", "overrideQuest", "autoplay", "startTime"]);
  let a = (0, s.e7)([f.Z], () => f.Z.getQuest(t)),
    c = null != n ? n : a;
  return null != c ? (0, r.jsx)(j.A, {
    questOrQuests: c,
    questContent: E.jn.VIDEO_MODAL,
    minViewTimeSeconds: N.zw,
    trackGuildAndChannelMetadata: !0,
    children: e => (0, r.jsx)(R, L(w({}, i), {
      startTime: l,
      impressionRef: e,
      quest: c,
      autoplay: o
    }))
  }) : null
}