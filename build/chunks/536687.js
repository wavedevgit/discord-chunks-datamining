/** Chunk was on 32249 **/
n.r(t), n.d(t, {
  default: () => R
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
  f = n(113434),
  v = n(569984),
  g = n(497505),
  E = n(918701),
  b = n(475595),
  O = n(566078),
  h = n(164495),
  S = n(472144),
  C = n(602667),
  j = n(644646),
  y = n(880199),
  x = n(604162),
  _ = n(747717),
  N = n(963123),
  D = n(281055),
  P = n(46140),
  T = n(981631),
  I = n(388032),
  w = n(881382);

function k(e) {
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

function A(e, t) {
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

function L(e) {
  var t, n, l, v;
  let C, {
      transitionState: D,
      onClose: L,
      quest: R,
      autoplay: M,
      videoSessionId: V,
      impressionRef: q,
      parentModalOpenStartClockTime: B
    } = e,
    F = (0, E.il)(R),
    U = (0, s.e7)([d.Z], () => d.Z.getState().theme),
    Z = (0, a.wj)(U) ? T.BRd.DARK : T.BRd.LIGHT,
    Y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    Q = (0, p.aM)(),
    [W, z] = o.useState(F.progressSeconds),
    [G, H] = o.useState(!1),
    {
      completedRatio: K,
      completedRatioDisplay: X
    } = (0, f.I)(R),
    [$, J] = (0, x.G6)(I.NW.string(I.t.RDE0SU), I.NW.string(I.t["+5kSoa"]), 1700);
  if ((0, E.xN)(R.config) && (null === (t = R.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null) {
    let e = (0, E.LM)(R.config);
    C = (0, r.jsx)(y.Z, {
      orbQuantity: e
    })
  } else C = (null === (v = R.userStatus) || void 0 === v ? void 0 : v.claimedAt) != null ? I.NW.string(I.t.vTgCW1) : I.NW.string(I.t.cfY4PD);
  let ee = o.useCallback(() => {
      (0, E.f2)(R.id, {
        content: g.jn.VIDEO_MODAL,
        ctaContent: m.jZ.COPY_QUEST_URL,
        impressionId: Q
      }), J()
    }, [Q, R.id, J]),
    et = o.useMemo(() => O.r.build(R.config).defaultReward.messages.name, [R]),
    en = I.NW.formatToPlainString(I.t["12IWPz"], {
      rewardName: et
    });
  return (0, r.jsx)(c.Y0X, {
    transitionState: D,
    size: c.CgR.DYNAMIC,
    className: w.modalRoot,
    children: (0, r.jsx)("div", {
      ref: e => {
        q.current = e
      },
      className: w.modalBg,
      children: (0, r.jsx)("div", {
        className: w.modalBody,
        children: (0, r.jsxs)("div", {
          className: w.modalContent,
          children: [(0, r.jsxs)("div", {
            className: w.contentHeader,
            children: [(0, r.jsxs)(c.P3F, {
              className: w.contentHeaderGameInfo,
              onClick: () => {
                (0, E.FE)(R, {
                  content: g.jn.VIDEO_MODAL,
                  ctaContent: m.jZ.OPEN_GAME_LINK,
                  impressionId: Q
                })
              },
              children: [(0, r.jsx)("img", {
                alt: R.config.messages.gameTitle,
                className: i()(w.contentHeaderLogotype, w.accentOnHover),
                src: (0, b.fh)(R, b.eC.LOGO_TYPE, Z).url
              }), (0, r.jsx)(_.Z, {}), (0, r.jsxs)("div", {
                className: w.questHeading,
                children: [(0, r.jsx)(c.X6q, {
                  variant: "heading-md/semibold",
                  color: "header-primary",
                  children: I.NW.format(I.t.EQa7oq, {
                    questName: R.config.messages.questName
                  })
                }), (0, r.jsx)(c.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: R.config.messages.gameTitle
                })]
              })]
            }), (0, r.jsx)(c.ua7, {
              position: "left",
              text: en,
              onTooltipShow: () => {
                H(!0)
              },
              onTooltipHide: () => {
                H(!1)
              },
              children: e => (0, r.jsx)(c.P3F, A(k({
                className: w.progressCont
              }, e), {
                children: (0, r.jsx)(S.Z, {
                  quest: R,
                  size: 48,
                  percentComplete: K,
                  percentCompleteText: G ? X : void 0,
                  percentCompleteTextVariant: "text-sm/medium",
                  children: (0, r.jsx)(j.Z, {
                    className: w.questProgressRewardTile,
                    quest: R,
                    questContent: g.jn.VIDEO_MODAL,
                    autoplay: !1,
                    location: P.dr.VIDEO_MODAL
                  })
                })
              }))
            })]
          }), (0, r.jsx)(N.Z, {
            quest: R,
            videoSessionId: V,
            parentTransitionState: D,
            onOptimisticProgressUpdate: z,
            autoplay: M,
            performanceClockStartTime: B
          }), (0, r.jsxs)("div", {
            className: w.contentFooter,
            children: [(0, r.jsx)(c.zxk, {
              onClick: L,
              color: c.zxk.Colors.PRIMARY,
              size: c.zxk.Sizes.MEDIUM,
              className: w.footerBtn,
              children: I.NW.string(I.t.cpT0Cg)
            }), (0, r.jsxs)("div", {
              className: w.contentFooterButtonCont,
              children: [(0, r.jsx)(c.zxk, {
                color: c.zxk.Colors.PRIMARY,
                onClick: ee,
                size: c.zxk.Sizes.NONE,
                className: i()(w.copyLinkBtn, w.footerBtn),
                children: $
              }), (0, r.jsx)(h.i0, {
                className: w.claimBtn,
                size: c.zxk.Sizes.MEDIUM,
                quest: R,
                useReducedMotion: Y,
                isExpanded: (null === (n = R.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
                disabled: (null === (l = R.userStatus) || void 0 === l ? void 0 : l.completedAt) == null,
                ctaLabel: C,
                onClick: () => {
                  ((0, E.xN)(R.config) || (0, E.Bg)(R.config)) && L()
                }
              })]
            })]
          })]
        })
      })
    })
  })
}

function R(e) {
  var {
    questId: t,
    overrideQuest: n,
    autoplay: o,
    openStartClockTime: l
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
  }(e, ["questId", "overrideQuest", "autoplay", "openStartClockTime"]);
  let a = (0, s.e7)([v.Z], () => v.Z.getQuest(t)),
    c = null != n ? n : a;
  return null != c ? (0, r.jsx)(C.A, {
    questOrQuests: c,
    questContent: g.jn.VIDEO_MODAL,
    minViewTimeSeconds: D.zw,
    trackGuildAndChannelMetadata: !0,
    children: e => (0, r.jsx)(L, A(k({}, i), {
      parentModalOpenStartClockTime: l,
      impressionRef: e,
      quest: c,
      autoplay: o
    }))
  }) : null
}