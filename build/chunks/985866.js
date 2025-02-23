/** Chunk was on 78226 (be06091776028b1c.js) **/
r.d(t, {
  default: () => M
}), r(47120), r(757143), r(301563);
var n = r(200651),
  o = r(192379),
  a = r(120356),
  s = r.n(a),
  i = r(119617),
  l = r(442837),
  d = r(692547),
  c = r(780384),
  u = r(481060),
  p = r(484614),
  _ = r(211266),
  m = r(110924),
  f = r(448986),
  b = r(410030),
  g = r(607070),
  C = r(475271),
  h = r(530618),
  w = r(454585),
  y = r(246946),
  x = r(572004),
  O = r(302221),
  v = r(617136),
  j = r(113434),
  S = r(569984),
  T = r(497505),
  I = r(918701),
  N = r(804127),
  R = r(566078),
  E = r(617889),
  k = r(602667),
  W = r(652380),
  P = r(644646),
  D = r(78826),
  q = r(46140),
  A = r(675654),
  B = r(388032),
  L = r(864900);

function Z(e) {
  var t;
  let {
    quest: r,
    rewardCode: o,
    hasTieredRewardCodes: a
  } = e, i = (0, c.wj)((0, b.ZP)()), l = {
    border: "1px solid ".concat(r.config.colors.primary),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, O.aD)(r.config.colors.primary, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, O.aD)(r.config.colors.primary, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(i ? "var(--black)" : "var(--white)", "\n    ")
  }, p = (0, E.B)(r, !1), _ = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o, {
    header: m,
    subHeader: f
  } = function(e) {
    var t, r, n, o;
    let {
      quest: a,
      rewardCode: s,
      hasTieredRewardCodes: i
    } = e, l = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s, d = i ? "" : B.NW.string(B.t.UUKbio), c = i ? (0, I.o9)({
      quest: a,
      idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = a.userStatus) || void 0 === r ? void 0 : r.claimedTier
    }) : null, u = R.r.build(a.config), p = null != c && null !== (o = c.messages.name) && void 0 !== o ? o : u.defaultReward.messages.name, _ = i ? B.NW.string(B.t.cfY4PD) : u.defaultReward.messages.name;
    return {
      subHeader: l ? B.NW.string(B.t.YpswQk) : d,
      header: l ? p : _
    }
  }({
    quest: r,
    rewardCode: o,
    hasTieredRewardCodes: a
  }), {
    hasError: g,
    isLoading: C
  } = (0, D.d7)();
  return (0, n.jsxs)("div", {
    style: l,
    className: L.rewardTile,
    children: [(0, n.jsxs)("div", {
      className: L.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": r.config.colors.primary
      },
      children: [C && !g && (0, n.jsx)(u.$jN, {
        className: L.rewardTileAssetStatusIcon,
        type: u.RAz.SPINNING_CIRCLE
      }), g && (0, n.jsx)(u.fFY, {
        className: L.rewardTileAssetStatusIcon
      }), (0, n.jsx)(P.Z, {
        className: s()(L.rewardTileAsset, {
          [L.rewardTileAssetLoading]: C || g
        }),
        quest: r,
        questContent: p.trackingCtx.content,
        location: q.dr.REWARD_CODE_MODAL
      })]
    }), (0, n.jsxs)("div", {
      className: L.rewardSubheading,
      children: [_ && (0, n.jsx)(u.kmB, {
        size: "xs",
        color: d.Z.colors.TEXT_MUTED,
        className: L.rewardSubheadingIcon
      }), (0, n.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: L.rewardSubheadingText,
        children: f
      })]
    }), (0, n.jsx)(u.X6q, {
      variant: "display-sm",
      color: "header-primary",
      className: L.rewardHeading,
      children: m
    })]
  })
}

function M(e) {
  let t = (0, l.e7)([S.Z], () => S.Z.getQuest(e.questId));
  return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t) ? (0, n.jsx)(k.A, {
    questOrQuests: t,
    questContent: T.jn.REWARD_MODAL,
    children: r => {
      var o, a;
      return (0, n.jsx)(z, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, e), a = a = {
        impressionRef: r,
        quest: t,
        preview: e.preview
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e))
      }), o))
    }
  }) : null
}

function z(e) {
  var t;
  let {
    transitionState: r,
    onClose: a,
    quest: s,
    location: d,
    questContentPosition: c,
    impressionRef: b,
    preview: O
  } = e, E = (0, _.Z)(() => {
    var e;
    return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null
  }), k = R.r.build(s.config).rewardPlatforms, P = k.length > 1, [M, z] = o.useState(P ? null : k[0]), U = o.useRef(new i.qA), F = o.useRef(null), [G, H] = o.useState(null), X = (0, l.e7)([g.Z], () => g.Z.useReducedMotion), Q = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation), {
    questStoreRewardCode: J,
    isFetchingRewardCode: Y,
    isClaimingReward: V
  } = (0, l.cj)([S.Z], () => ({
    questStoreRewardCode: S.Z.getRewardCode(s.id),
    isFetchingRewardCode: S.Z.isFetchingRewardCode(s.id),
    isClaimingReward: S.Z.isClaimingReward(s.id)
  })), $ = (0, v.O5)(), K = (0, I.oo)({
    quest: s
  }), ee = !0 === O ? (0, W.b)(s) : J, et = P && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == ee, {
    claimCode: er,
    fetchCode: en,
    hasError: eo,
    setHasError: ea
  } = (0, N.u)({
    isClaimingReward: V,
    isFetchingRewardCode: Y,
    quest: s,
    questContent: d,
    requiresPlatformSelection: et,
    rewardCode: ee,
    selectedPlatformType: M,
    preview: O
  }), es = eo && !V && !Y;
  ! function(e) {
    let t = (0, f.Z)(e),
      r = C.default.useIsCaptchaModalOpen(),
      n = (0, m.Z)(r),
      a = !!(!r && n);
    o.useEffect(() => {
      a && t()
    }, [a, t])
  }(() => {
    ea(!0)
  });
  let ei = null;
  E && null != ee ? ei = B.NW.string(B.t.srzsU1) : null != ee ? ei = B.NW.string(B.t.PJBpdX) : et && (ei = B.NW.string(B.t.JRU8dn));
  let el = null != ei ? (0, n.jsx)(u.X6q, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: L.heading,
      children: ei
    }) : null,
    ed = function(e) {
      let {
        quest: t,
        selectedPlatform: r,
        requiresPlatformSelection: o,
        rewardCode: a,
        hasTieredRewardCodes: s
      } = e, i = R.r.build(t.config);
      if (o) return (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: L.bodyCopy,
        children: s ? B.NW.format(B.t.m0btAQ, {}) : B.NW.format(B.t["ZUA/Ul"], {
          rewardName: i.defaultReward.messages.name
        })
      });
      let l = (0, I.C1)({
        quest: t,
        rewardCode: a,
        selectedPlatformType: r,
        sharedQuestFields: i
      });
      return null != a && null != l ? (0, n.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        className: L.bodyCopy,
        children: w.Z.parse(l, !1, {
          allowLinks: !0
        })
      }) : null
    }({
      quest: s,
      selectedPlatform: M,
      requiresPlatformSelection: et,
      rewardCode: ee,
      hasTieredRewardCodes: K
    }),
    ec = o.useMemo(() => k.map(e => ({
      label: (0, I.t2)(e),
      value: e
    })), [k]),
    eu = null;
  et && (eu = (0, n.jsxs)(u.xJW, {
    title: B.NW.string(B.t.vVcTtL),
    children: [(0, n.jsx)(u.PhF, {
      placeholder: B.NW.string(B.t.EMrUHR),
      options: ec,
      select: e => {
        ea(!1), z(e)
      },
      isSelected: e => e === M,
      serialize: e => (0, I.t2)(e),
      className: es ? L.errorInput : "",
      isDisabled: V,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case T.y$.CROSS_PLATFORM:
              return (0, n.jsx)(u.Che, {
                className: L.platformSelectionOptionIcon
              });
            case T.y$.PC:
              return (0, n.jsx)(u.pzj, {
                className: L.platformSelectionOptionIcon
              });
            case T.y$.PLAYSTATION:
              return (0, n.jsx)(u.Tsp, {
                className: L.platformSelectionOptionIcon
              });
            case T.y$.SWITCH:
              return (0, n.jsx)(u.aPH, {
                className: L.platformSelectionOptionIcon
              });
            case T.y$.XBOX:
              return (0, n.jsx)(u.Mko, {
                className: L.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, n.jsxs)("div", {
          className: L.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), es ? (0, n.jsx)(u.pdY, {
      error: B.NW.string(B.t.rbZBMT)
    }) : null]
  }));
  let ep = null == ee && (Y || V),
    e_ = ep && !et ? (0, n.jsx)(u.$jN, {}) : null,
    em = null;
  null != ee ? em = (0, n.jsx)(u.xJW, {
    title: B.NW.string(B.t.srzsU1),
    children: (0, n.jsx)(p.Z, {
      value: Q ? B.NW.string(B.t["0n2u0t"]) : ee.code,
      delay: 1e3,
      buttonColor: u.zxk.Colors.BRAND,
      onCopy: () => {
        Q && (0, x.JG)(ee.code), $({
          questId: s.id,
          questContent: d,
          questContentPosition: c,
          questContentCTA: v.jZ.COPY_REWARD_CODE
        })
      }
    })
  }) : es && !et && (em = (0, n.jsx)(u.xJW, {
    title: B.NW.string(B.t.srzsU1),
    children: (0, n.jsx)(u.oil, {
      disabled: !0,
      error: B.NW.string(B.t.rbZBMT),
      inputClassName: L.errorInput
    })
  }));
  let ef = o.useMemo(() => K ? (0, I.o9)({
      quest: s,
      idx: null == ee ? void 0 : ee.tier
    }) : (0, I.o9)({
      quest: s,
      idx: 0
    }), [K, s, null == ee ? void 0 : ee.tier]),
    eb = o.useMemo(() => (null == ef ? void 0 : ef.redemptionLink) == null || "" === ef.redemptionLink ? null : (null == ee ? void 0 : ee.code) == null || "" === ee.code ? ef.redemptionLink : ef.redemptionLink.replace(q.Dp, encodeURIComponent(ee.code)), [ef, ee]),
    eg = (0, N.G)({
      claimCode: er,
      fetchCode: en,
      hasError: es,
      onDismiss: a,
      quest: s,
      questContent: d,
      questContentPosition: c,
      requiresPlatformSelection: et,
      selectedPlatformType: M,
      redemptionLink: eb
    }),
    eC = et && V,
    eh = !eC && (et && null == M || ep),
    ew = null != eb && "" !== eb,
    ey = B.NW.string(B.t["23SS+/"]);
  et ? ey = B.NW.string(B.t.SLZMi4) : !et && es ? ey = B.NW.string(B.t.gNJHHh) : ew && (ey = B.NW.string(B.t["+zx47e"]));
  let ex = !X && null != ee && !E && !es,
    eO = null != e_ && K,
    ev = (0, j.Gd)(s.id);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.O_, {
      ref: H,
      className: L.confettiCanvas,
      environment: U.current
    }), (0, n.jsx)("div", {
      ref: e => {
        F.current = e, b.current = e
      },
      children: (0, n.jsxs)(u.Y0X, {
        transitionState: r,
        size: u.CgR.DYNAMIC,
        children: [(0, n.jsxs)("div", {
          className: L.modalBody,
          children: [(0, n.jsx)(u.olH, {
            className: L.closeButton,
            onClick: () => a()
          }), !eO && (0, n.jsx)(D.p, {
            source: q.dr.REWARD_CODE_MODAL,
            questId: s.id,
            children: (0, n.jsx)(Z, {
              quest: s,
              rewardCode: ee,
              hasTieredRewardCodes: K
            })
          }), (0, n.jsxs)("div", {
            className: L.modalContent,
            children: [el, ed, eu, e_, em, null != s.config.cosponsorMetadata && null != ev && (0, n.jsxs)("div", {
              className: L.cosponsorFooter,
              children: [(0, n.jsx)("img", {
                className: L.cosponsorLogotype,
                alt: s.config.cosponsorMetadata.name,
                src: ev.url
              }), (0, n.jsx)(u.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: L.cosponsorName,
                children: B.NW.format(B.t.CSf4ER, {
                  cosponsorName: s.config.cosponsorMetadata.name
                })
              }), (0, n.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-normal",
                className: L.cosponsorRedemptionInstructions,
                children: w.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, !1, {
                  allowLinks: !0
                })
              })]
            })]
          })]
        }), (0, n.jsx)(u.mzw, {
          children: (0, n.jsx)(u.zxk, {
            onClick: eg,
            submitting: eC,
            disabled: eh,
            children: ey
          })
        })]
      })
    }), ex && (0, n.jsx)(h.Z, {
      confettiTarget: F.current,
      confettiCanvas: G,
      sprites: A.CA,
      colors: A.Br
    })]
  })
}