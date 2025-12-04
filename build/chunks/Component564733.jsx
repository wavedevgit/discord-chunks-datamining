/** Chunk was on 19341 **/
/** chunk id: 564733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => H
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk211266 = require("./211266.js"),
  Chunk110924 = require("./110924.js"),
  Chunk448986 = require("./448986.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk475271 = require("./475271.jsx"),
  Chunk530618 = require("./530618.jsx"),
  Chunk63954 = require("./63954.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk302221 = require("./302221.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk685138 = require("./685138.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk804127 = require("./804127.js"),
  Chunk115179 = require("./115179.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516457 = require("./516457.js");

function z(e) {
  var t;
  let {
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o,
    sourceQuestContent: l
  } = e, i = (0, u.wj)((0, y.ZP)()), d = (0, I.n)({
    location: M.dr.REWARD_CODE_MODAL,
    questConfig: n.config
  }).enabled, p = (0, m.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(), f = d ? p : n.config.colors.primary, g = {
    border: "1px solid ".concat(f),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, A.aD)(f, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, A.aD)(f, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(i ? "var(--black)" : "var(--white)", "\n    ")
  }, h = (null == (t = n.userStatus) ? true : t.claimedAt) != null || null != a, {
    header: C,
    subHeader: w
  } = function(e) {
    var t, n, r, a;
    let {
      quest: o,
      rewardCode: s,
      hasTieredRewardCodes: l
    } = e, i = (null == (t = o.userStatus) ? true : t.claimedAt) != null || null != s, c = l ? "" : B.intl.string(B.t.UUKbik), d = l ? (0, Z.o9)({
      quest: o,
      idx: null != (r = null == s ? true : s.tier) ? r : null == (n = o.userStatus) ? true : n.claimedTier
    }) : null, u = (0, Z.w8)(o.config), p = null != d && null != (a = d.messages.name) ? a : u, m = l ? B.intl.string(B.t.cfY4PE) : u;
    return {
      subHeader: i ? B.intl.string(B.t.YpswQo) : c,
      header: i ? p : m
    }
  }({
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o
  }), {
    hasError: b,
    isLoading: j
  } = (0, k.kC)();
  return (0, r.jsxs)("div", {
    style: g,
    className: Q.rewardTile,
    children: [(0, r.jsxs)("div", {
      className: Q.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": d ? p : n.config.colors.primary
      },
      children: [j && !b && (0, r.jsx)(m.$jN, {
        className: Q.rewardTileAssetStatusIcon,
        type: m.RAz.SPINNING_CIRCLE
      }), b && (0, r.jsx)(m.fFY, {
        className: Q.rewardTileAssetStatusIcon
      }), (0, r.jsx)(L.Z, {
        className: s()(Q.rewardTileAsset, {
          [Q.rewardTileAssetLoading]: j || b
        }),
        quest: n,
        questContent: N.jn.QUEST_BAR_V2,
        location: M.dr.REWARD_CODE_MODAL,
        sourceQuestContent: l
      })]
    }), (0, r.jsxs)("div", {
      className: Q.rewardSubheading,
      children: [h && (0, r.jsx)(m.kmB, {
        size: "xs",
        color: c.Z.colors.TEXT_MUTED,
        className: Q.rewardSubheadingIcon
      }), (0, r.jsx)(m.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: Q.rewardSubheadingText,
        children: w
      })]
    }), (0, r.jsx)(m.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: Q.rewardHeading,
      children: C
    })]
  })
}

function H(e) {
  let t = (0, i.e7)([T.Z], () => T.Z.getQuest(e.questId));
  return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t) ? (0, r.jsx)(P.A, {
    questOrQuests: t,
    questContent: N.jn.REWARD_MODAL,
    sourceQuestContent: e.sourceQuestContent,
    children: n => {
      var a, o;
      return (0, r.jsx)(U, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, e), o = o = {
        impressionRef: n,
        quest: t,
        preview: e.preview
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a))
    }
  }) : null
}

function U(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: s,
    questContent: c,
    questContentPosition: u,
    impressionRef: y,
    preview: A,
    sourceQuestContent: I
  } = e, P = (0, g.Z)(() => {
    var e;
    return (null == (e = s.userStatus) ? true : e.claimedAt) != null
  }), L = s.config.rewardsConfig.platforms, H = L.length > 1, [U, W] = a.useState(H ? null : L[0]), $ = a.useRef(new l.qA), F = a.useRef(null), [Y, G] = a.useState(null), V = (0, i.e7)([w.Z], () => w.Z.useReducedMotion), J = (0, i.e7)([O.Z], () => O.Z.hidePersonalInformation), {
    questStoreRewardCode: X,
    isFetchingRewardCode: K,
    isClaimingReward: ee
  } = (0, i.cj)([T.Z], () => ({
    questStoreRewardCode: T.Z.getRewardCode(s.id),
    isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
    isClaimingReward: T.Z.isClaimingReward(s.id)
  })), et = (0, _.O5)(), en = (0, Z.oo)({
    quest: s
  }), er = true === A ? (0, v.b)(s) : X, ea = H && (null == (t = s.userStatus) ? true : t.claimedAt) == null && null == er, {
    claimCode: eo,
    fetchCode: es,
    hasError: el,
    setHasError: ei
  } = (0, D.uL)({
    isClaimingReward: ee,
    isFetchingRewardCode: K,
    quest: s,
    questContent: c,
    requiresPlatformSelection: ea,
    rewardCode: er,
    selectedPlatformType: U,
    preview: A
  }), ec = el && !ee && !K;
  ! function(e) {
    let t = (0, C.Z)(e),
      n = b.default.useIsCaptchaModalOpen(),
      r = (0, h.Z)(n),
      o = !!(!n && r);
    a.useEffect(() => {
      o && t()
    }, [o, t])
  }(() => {
    ei(true)
  });
  let ed = null;
  P && null != er ? ed = B.intl.string(B.t.srzsU2) : null != er ? ed = B.intl.string(B.t.PJBpda) : ea && (ed = B.intl.string(B.t.JRU8dq));
  let eu = null != ed ? (0, r.jsx)(m.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: Q.heading,
      children: ed
    }) : null,
    ep = function(e) {
      let {
        quest: t,
        selectedPlatform: n,
        requiresPlatformSelection: a,
        rewardCode: o,
        hasTieredRewardCodes: s
      } = e;
      if (a) return (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: Q.bodyCopy,
        children: s ? B.intl.format(B.t.m0btAb, {}) : B.intl.format(B.t["ZUA/Ui"], {
          rewardName: (0, Z.w8)(t.config)
        })
      });
      let l = (0, R.C1)({
        quest: t,
        rewardCode: o,
        selectedPlatformType: n
      });
      return null != o && null != l ? (0, r.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: Q.bodyCopy,
        children: x.Z.parse(l, false, {
          allowLinks: true
        })
      }) : null
    }({
      quest: s,
      selectedPlatform: U,
      requiresPlatformSelection: ea,
      rewardCode: er,
      hasTieredRewardCodes: en
    }),
    em = a.useMemo(() => L.map(e => ({
      label: (0, Z.t2)(e),
      value: e
    })), [L]),
    ef = null;
  ea && (ef = (0, r.jsx)(d.B6, {
    label: B.intl.string(B.t.vVcTtJ),
    errorMessage: ec ? B.intl.string(B.t.rbZBMR) : true,
    placeholder: B.intl.string(B.t.EMrUHQ),
    options: em,
    select: e => {
      ei(false), W(e)
    },
    isSelected: e => e === U,
    serialize: e => (0, Z.t2)(e),
    className: ec ? Q.errorInput : "",
    isDisabled: ee,
    renderLeading: e => (function(e) {
      switch (e) {
        case N.y$.CROSS_PLATFORM:
          return (0, r.jsx)(m.Che, {
            className: Q.platformSelectionOptionIcon
          });
        case N.y$.PC:
          return (0, r.jsx)(m.pzj, {
            className: Q.platformSelectionOptionIcon
          });
        case N.y$.PLAYSTATION:
          return (0, r.jsx)(m.Tsp, {
            className: Q.platformSelectionOptionIcon
          });
        case N.y$.SWITCH:
          return (0, r.jsx)(m.aPH, {
            className: Q.platformSelectionOptionIcon
          });
        case N.y$.XBOX:
          return (0, r.jsx)(m.Mko, {
            className: Q.platformSelectionOptionIcon
          })
      }
    })(e.value)
  }));
  let eg = null == er && (K || ee),
    eh = eg && !ea ? (0, r.jsx)(m.$jN, {}) : null,
    eC = null;
  null != er ? eC = (0, r.jsx)(m.gNt, {
    label: B.intl.string(B.t.srzsU2),
    children: (0, r.jsx)(f.Z, {
      value: J ? B.intl.string(B.t["0n2u0k"]) : er.code,
      delay: 1e3,
      buttonColor: p.zx.Colors.BRAND,
      onCopy: () => {
        J && (0, S.JG)(er.code), et({
          questId: s.id,
          questContent: c,
          questContentPosition: u,
          questContentCTA: _.jZ.COPY_REWARD_CODE,
          sourceQuestContent: I
        })
      }
    })
  }) : ec && !ea && (eC = (0, r.jsx)(m.oil, {
    label: B.intl.string(B.t.srzsU2),
    disabled: true,
    error: B.intl.string(B.t.rbZBMR)
  }));
  let ey = a.useMemo(() => en ? (0, Z.o9)({
      quest: s,
      idx: null == er ? true : er.tier
    }) : (0, Z.o9)({
      quest: s,
      idx: 0
    }), [en, s, null == er ? true : er.tier]),
    ew = a.useMemo(() => (null == ey ? true : ey.redemptionLink) == null || "" === ey.redemptionLink ? null : (null == er ? true : er.code) == null || "" === er.code ? ey.redemptionLink : ey.redemptionLink.replace(M.Dp, encodeURIComponent(er.code)), [ey, er]),
    eb = (0, D.G$)({
      claimCode: eo,
      fetchCode: es,
      hasError: ec,
      onDismiss: o,
      quest: s,
      questContent: c,
      questContentPosition: u,
      requiresPlatformSelection: ea,
      selectedPlatformType: U,
      redemptionLink: ew,
      sourceQuestContent: I
    }),
    ej = ea && ee,
    ev = !ej && (ea && null == U || eg),
    ex = null != ew && "" !== ew,
    eO = B.intl.string(B.t["23SS+z"]);
  ea ? eO = B.intl.string(B.t.SLZMi1) : !ea && ec ? eO = B.intl.string(B.t.gNJHHp) : ex && (eO = B.intl.string(B.t["+zx47d"]));
  let eS = !V && null != er && !P && !ec,
    eA = null != eh && en,
    e_ = (0, E.Gd)(s.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.O_, {
      ref: G,
      className: Q.confettiCanvas,
      environment: $.current
    }), (0, r.jsx)("div", {
      ref: e => {
        F.current = e, y.current = e
      },
      children: (0, r.jsxs)(m.Y0X, {
        "data-migration-pending": true,
        transitionState: n,
        size: m.CgR.DYNAMIC,
        parentComponent: "QuestsRewardCodeModal",
        children: [(0, r.jsxs)("div", {
          className: Q.modalBody,
          children: [(0, r.jsx)(m.olH, {
            "data-migration-pending": true,
            className: Q.closeButton,
            onClick: () => o()
          }), !eA && (0, r.jsx)(k.x8, {
            source: M.dr.REWARD_CODE_MODAL,
            questId: s.id,
            children: (0, r.jsx)(z, {
              quest: s,
              rewardCode: er,
              hasTieredRewardCodes: en,
              sourceQuestContent: I
            })
          }), (0, r.jsxs)("div", {
            className: Q.modalContent,
            children: [eu, ep, ef, eh, eC, null != s.config.cosponsorMetadata && null != e_ && (0, r.jsxs)("div", {
              className: Q.cosponsorFooter,
              children: [(0, r.jsx)("img", {
                className: Q.cosponsorLogotype,
                alt: s.config.cosponsorMetadata.name,
                src: e_.url
              }), (0, r.jsx)(m.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: Q.cosponsorName,
                children: B.intl.format(B.t.CSf4EX, {
                  cosponsorName: s.config.cosponsorMetadata.name
                })
              }), (0, r.jsx)(m.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: Q.cosponsorRedemptionInstructions,
                children: x.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, false, {
                  allowLinks: true
                })
              })]
            })]
          })]
        }), (0, r.jsx)(m.mzw, {
          "data-migration-pending": true,
          children: (0, r.jsx)(m.Button, {
            variant: "primary",
            text: eO,
            onClick: eb,
            loading: ej,
            disabled: ev
          })
        })]
      })
    }), eS && (0, r.jsx)(j.Z, {
      confettiTarget: F.current,
      confettiCanvas: Y,
      sprites: q.CA,
      colors: q.Br
    })]
  })
}