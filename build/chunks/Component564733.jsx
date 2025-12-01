/** Chunk was on 19341 **/
/** chunk id: 564733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => z
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk313481 = require("./313481.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk685138 = require("./685138.js"),
  Chunk373370 = require("./373370.js"),
  Chunk804127 = require("./804127.js"),
  Chunk115179 = require("./115179.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516457 = require("./516457.js");

function Q(e) {
  var t;
  let {
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o,
    sourceQuestContent: l
  } = e, i = (0, d.wj)((0, C.ZP)()), u = (0, I.n)({
    location: L.dr.REWARD_CODE_MODAL,
    questConfig: n.config
  }).enabled, m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(), f = u ? m : n.config.colors.primary, g = {
    border: "1px solid ".concat(f),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, S.aD)(f, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, S.aD)(f, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(i ? "var(--black)" : "var(--white)", "\n    ")
  }, h = (null == (t = n.userStatus) ? true : t.claimedAt) != null || null != a, {
    header: y,
    subHeader: w
  } = function(e) {
    var t, n, r, a;
    let {
      quest: o,
      rewardCode: s,
      hasTieredRewardCodes: l
    } = e, i = (null == (t = o.userStatus) ? true : t.claimedAt) != null || null != s, c = l ? "" : q.intl.string(q.t.UUKbik), d = l ? (0, D.o9)({
      quest: o,
      idx: null != (r = null == s ? true : s.tier) ? r : null == (n = o.userStatus) ? true : n.claimedTier
    }) : null, u = (0, D.w8)(o.config), p = null != d && null != (a = d.messages.name) ? a : u, m = l ? q.intl.string(q.t.cfY4PE) : u;
    return {
      subHeader: i ? q.intl.string(q.t.YpswQo) : c,
      header: i ? p : m
    }
  }({
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o
  }), {
    hasError: b,
    isLoading: j
  } = (0, Z.kC)();
  return (0, r.jsxs)("div", {
    style: g,
    className: B.rewardTile,
    children: [(0, r.jsxs)("div", {
      className: B.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": u ? m : n.config.colors.primary
      },
      children: [j && !b && (0, r.jsx)(p.$jN, {
        className: B.rewardTileAssetStatusIcon,
        type: p.RAz.SPINNING_CIRCLE
      }), b && (0, r.jsx)(p.fFY, {
        className: B.rewardTileAssetStatusIcon
      }), (0, r.jsx)(P.Z, {
        className: s()(B.rewardTileAsset, {
          [B.rewardTileAssetLoading]: j || b
        }),
        quest: n,
        questContent: N.jn.QUEST_BAR_V2,
        location: L.dr.REWARD_CODE_MODAL,
        sourceQuestContent: l
      })]
    }), (0, r.jsxs)("div", {
      className: B.rewardSubheading,
      children: [h && (0, r.jsx)(p.kmB, {
        size: "xs",
        color: c.Z.colors.TEXT_MUTED,
        className: B.rewardSubheadingIcon
      }), (0, r.jsx)(p.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: B.rewardSubheadingText,
        children: w
      })]
    }), (0, r.jsx)(p.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: B.rewardHeading,
      children: y
    })]
  })
}

function z(e) {
  let t = (0, i.e7)([T.Z], () => T.Z.getQuest(e.questId));
  return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t) ? (0, r.jsx)(k.A, {
    questOrQuests: t,
    questContent: N.jn.REWARD_MODAL,
    sourceQuestContent: e.sourceQuestContent,
    children: n => {
      var a, o;
      return (0, r.jsx)(H, (a = function(e) {
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

function H(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: s,
    questContent: c,
    questContentPosition: d,
    impressionRef: C,
    preview: S,
    sourceQuestContent: I
  } = e, k = (0, f.Z)(() => {
    var e;
    return (null == (e = s.userStatus) ? true : e.claimedAt) != null
  }), P = s.config.rewardsConfig.platforms, z = P.length > 1, [H, U] = a.useState(z ? null : P[0]), W = a.useRef(new l.qA), F = a.useRef(null), [$, Y] = a.useState(null), G = (0, i.e7)([y.Z], () => y.Z.useReducedMotion), V = (0, i.e7)([x.Z], () => x.Z.hidePersonalInformation), {
    questStoreRewardCode: J,
    isFetchingRewardCode: X,
    isClaimingReward: K
  } = (0, i.cj)([T.Z], () => ({
    questStoreRewardCode: T.Z.getRewardCode(s.id),
    isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
    isClaimingReward: T.Z.isClaimingReward(s.id)
  })), ee = (0, A.O5)(), et = (0, D.oo)({
    quest: s
  }), en = true === S ? (0, j.b)(s) : J, er = z && (null == (t = s.userStatus) ? true : t.claimedAt) == null && null == en, {
    claimCode: ea,
    fetchCode: eo,
    hasError: es,
    setHasError: el
  } = (0, E.uL)({
    isClaimingReward: K,
    isFetchingRewardCode: X,
    quest: s,
    questContent: c,
    requiresPlatformSelection: er,
    rewardCode: en,
    selectedPlatformType: H,
    preview: S
  }), ei = es && !K && !X;
  ! function(e) {
    let t = (0, h.Z)(e),
      n = w.default.useIsCaptchaModalOpen(),
      r = (0, g.Z)(n),
      o = !!(!n && r);
    a.useEffect(() => {
      o && t()
    }, [o, t])
  }(() => {
    el(true)
  });
  let ec = null;
  k && null != en ? ec = q.intl.string(q.t.srzsU2) : null != en ? ec = q.intl.string(q.t.PJBpda) : er && (ec = q.intl.string(q.t.JRU8dq));
  let ed = null != ec ? (0, r.jsx)(p.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: B.heading,
      children: ec
    }) : null,
    eu = function(e) {
      let {
        quest: t,
        selectedPlatform: n,
        requiresPlatformSelection: a,
        rewardCode: o,
        hasTieredRewardCodes: s
      } = e;
      if (a) return (0, r.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: B.bodyCopy,
        children: s ? q.intl.format(q.t.m0btAb, {}) : q.intl.format(q.t["ZUA/Ui"], {
          rewardName: (0, D.w8)(t.config)
        })
      });
      let l = (0, R.C1)({
        quest: t,
        rewardCode: o,
        selectedPlatformType: n
      });
      return null != o && null != l ? (0, r.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: B.bodyCopy,
        children: v.Z.parse(l, false, {
          allowLinks: true
        })
      }) : null
    }({
      quest: s,
      selectedPlatform: H,
      requiresPlatformSelection: er,
      rewardCode: en,
      hasTieredRewardCodes: et
    }),
    ep = a.useMemo(() => P.map(e => ({
      label: (0, D.t2)(e),
      value: e
    })), [P]),
    em = null;
  er && (em = (0, r.jsx)(p.PhF, {
    label: q.intl.string(q.t.vVcTtJ),
    errorMessage: ei ? q.intl.string(q.t.rbZBMR) : true,
    placeholder: q.intl.string(q.t.EMrUHQ),
    options: ep,
    select: e => {
      el(false), U(e)
    },
    isSelected: e => e === H,
    serialize: e => (0, D.t2)(e),
    className: ei ? B.errorInput : "",
    isDisabled: K,
    renderLeading: e => (function(e) {
      switch (e) {
        case N.y$.CROSS_PLATFORM:
          return (0, r.jsx)(p.Che, {
            className: B.platformSelectionOptionIcon
          });
        case N.y$.PC:
          return (0, r.jsx)(p.pzj, {
            className: B.platformSelectionOptionIcon
          });
        case N.y$.PLAYSTATION:
          return (0, r.jsx)(p.Tsp, {
            className: B.platformSelectionOptionIcon
          });
        case N.y$.SWITCH:
          return (0, r.jsx)(p.aPH, {
            className: B.platformSelectionOptionIcon
          });
        case N.y$.XBOX:
          return (0, r.jsx)(p.Mko, {
            className: B.platformSelectionOptionIcon
          })
      }
    })(e.value)
  }));
  let ef = null == en && (X || K),
    eg = ef && !er ? (0, r.jsx)(p.$jN, {}) : null,
    eh = null;
  null != en ? eh = (0, r.jsx)(p.gNt, {
    label: q.intl.string(q.t.srzsU2),
    children: (0, r.jsx)(m.Z, {
      value: V ? q.intl.string(q.t["0n2u0k"]) : en.code,
      delay: 1e3,
      buttonColor: u.zx.Colors.BRAND,
      onCopy: () => {
        V && (0, O.JG)(en.code), ee({
          questId: s.id,
          questContent: c,
          questContentPosition: d,
          questContentCTA: A.jZ.COPY_REWARD_CODE,
          sourceQuestContent: I
        })
      }
    })
  }) : ei && !er && (eh = (0, r.jsx)(p.oil, {
    label: q.intl.string(q.t.srzsU2),
    disabled: true,
    error: q.intl.string(q.t.rbZBMR)
  }));
  let eC = a.useMemo(() => et ? (0, D.o9)({
      quest: s,
      idx: null == en ? true : en.tier
    }) : (0, D.o9)({
      quest: s,
      idx: 0
    }), [et, s, null == en ? true : en.tier]),
    ey = a.useMemo(() => (null == eC ? true : eC.redemptionLink) == null || "" === eC.redemptionLink ? null : (null == en ? true : en.code) == null || "" === en.code ? eC.redemptionLink : eC.redemptionLink.replace(L.Dp, encodeURIComponent(en.code)), [eC, en]),
    ew = (0, E.G$)({
      claimCode: ea,
      fetchCode: eo,
      hasError: ei,
      onDismiss: o,
      quest: s,
      questContent: c,
      questContentPosition: d,
      requiresPlatformSelection: er,
      selectedPlatformType: H,
      redemptionLink: ey,
      sourceQuestContent: I
    }),
    eb = er && K,
    ej = !eb && (er && null == H || ef),
    ev = null != ey && "" !== ey,
    ex = q.intl.string(q.t["23SS+z"]);
  er ? ex = q.intl.string(q.t.SLZMi1) : !er && ei ? ex = q.intl.string(q.t.gNJHHp) : ev && (ex = q.intl.string(q.t["+zx47d"]));
  let eO = !G && null != en && !k && !ei,
    eS = null != eg && et,
    eA = (0, _.Gd)(s.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.O_, {
      ref: Y,
      className: B.confettiCanvas,
      environment: W.current
    }), (0, r.jsx)("div", {
      ref: e => {
        F.current = e, C.current = e
      },
      children: (0, r.jsxs)(p.Y0X, {
        "data-migration-pending": true,
        transitionState: n,
        size: p.CgR.DYNAMIC,
        parentComponent: "QuestsRewardCodeModal",
        children: [(0, r.jsxs)("div", {
          className: B.modalBody,
          children: [(0, r.jsx)(p.olH, {
            "data-migration-pending": true,
            className: B.closeButton,
            onClick: () => o()
          }), !eS && (0, r.jsx)(Z.x8, {
            source: L.dr.REWARD_CODE_MODAL,
            questId: s.id,
            children: (0, r.jsx)(Q, {
              quest: s,
              rewardCode: en,
              hasTieredRewardCodes: et,
              sourceQuestContent: I
            })
          }), (0, r.jsxs)("div", {
            className: B.modalContent,
            children: [ed, eu, em, eg, eh, null != s.config.cosponsorMetadata && null != eA && (0, r.jsxs)("div", {
              className: B.cosponsorFooter,
              children: [(0, r.jsx)("img", {
                className: B.cosponsorLogotype,
                alt: s.config.cosponsorMetadata.name,
                src: eA.url
              }), (0, r.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: B.cosponsorName,
                children: q.intl.format(q.t.CSf4EX, {
                  cosponsorName: s.config.cosponsorMetadata.name
                })
              }), (0, r.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: B.cosponsorRedemptionInstructions,
                children: v.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, false, {
                  allowLinks: true
                })
              })]
            })]
          })]
        }), (0, r.jsx)(p.mzw, {
          "data-migration-pending": true,
          children: (0, r.jsx)(p.Button, {
            variant: "primary",
            text: ex,
            onClick: ew,
            loading: eb,
            disabled: ej
          })
        })]
      })
    }), eO && (0, r.jsx)(b.Z, {
      confettiTarget: F.current,
      confettiCanvas: $,
      sprites: M.CA,
      colors: M.Br
    })]
  })
}