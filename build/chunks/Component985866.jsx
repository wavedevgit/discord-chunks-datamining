/** Chunk was on 7175 **/
/** chunk id: 985866, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Q
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
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
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685138 = require("./685138.js"),
  Chunk804127 = require("./804127.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk607535 = require("./607535.js");

function W(e) {
  var t;
  let {
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o,
    sourceQuestContent: s
  } = e, i = (0, d.wj)((0, w.ZP)()), u = (0, R.n)({
    location: L.dr.REWARD_CODE_MODAL,
    questConfig: n.config
  }).enabled, m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(), b = u ? m : n.config.colors.primary, f = {
    border: "1px solid ".concat(b),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, O.aD)(b, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, O.aD)(b, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(i ? "var(--black)" : "var(--white)", "\n    ")
  }, g = (null == (t = n.userStatus) ? true : t.claimedAt) != null || null != a, {
    header: h,
    subHeader: C
  } = function(e) {
    var t, n, r, a;
    let {
      quest: o,
      rewardCode: l,
      hasTieredRewardCodes: s
    } = e, i = (null == (t = o.userStatus) ? true : t.claimedAt) != null || null != l, c = s ? "" : M.intl.string(M.t.UUKbik), d = s ? (0, S.o9)({
      quest: o,
      idx: null != (r = null == l ? true : l.tier) ? r : null == (n = o.userStatus) ? true : n.claimedTier
    }) : null, u = k.r.build(o.config), p = null != d && null != (a = d.messages.name) ? a : u.defaultRewardName, m = s ? M.intl.string(M.t.cfY4PE) : u.defaultRewardName;
    return {
      subHeader: i ? M.intl.string(M.t.YpswQo) : c,
      header: i ? p : m
    }
  }({
    quest: n,
    rewardCode: a,
    hasTieredRewardCodes: o
  }), {
    hasError: y,
    isLoading: x
  } = (0, Z.d7)();
  return (0, r.jsxs)("div", {
    style: f,
    className: B.rewardTile,
    children: [(0, r.jsxs)("div", {
      className: B.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": u ? m : n.config.colors.primary
      },
      children: [x && !y && (0, r.jsx)(p.$jN, {
        className: B.rewardTileAssetStatusIcon,
        type: p.RAz.SPINNING_CIRCLE
      }), y && (0, r.jsx)(p.fFY, {
        className: B.rewardTileAssetStatusIcon
      }), (0, r.jsx)(P.Z, {
        className: l()(B.rewardTileAsset, {
          [B.rewardTileAssetLoading]: x || y
        }),
        quest: n,
        questContent: N.jn.QUEST_BAR_V2,
        location: L.dr.REWARD_CODE_MODAL,
        sourceQuestContent: s
      })]
    }), (0, r.jsxs)("div", {
      className: B.rewardSubheading,
      children: [g && (0, r.jsx)(p.kmB, {
        size: "xs",
        color: c.Z.colors.TEXT_MUTED,
        className: B.rewardSubheadingIcon
      }), (0, r.jsx)(p.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: B.rewardSubheadingText,
        children: C
      })]
    }), (0, r.jsx)(p.Heading, {
      variant: "display-sm",
      color: "header-primary",
      className: B.rewardHeading,
      children: h
    })]
  })
}

function Q(e) {
  let t = (0, i.e7)([I.Z], () => I.Z.getQuest(e.questId));
  return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t) ? (0, r.jsx)(D.A, {
    questOrQuests: t,
    questContent: N.jn.REWARD_MODAL,
    sourceQuestContent: e.sourceQuestContent,
    children: n => {
      var a, o;
      return (0, r.jsx)(z, (a = function(e) {
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

function z(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: l,
    questContent: c,
    questContentPosition: d,
    impressionRef: w,
    preview: O,
    sourceQuestContent: R
  } = e, D = (0, b.Z)(() => {
    var e;
    return (null == (e = l.userStatus) ? true : e.claimedAt) != null
  }), P = k.r.build(l.config).rewardPlatforms, Q = P.length > 1, [z, H] = a.useState(Q ? null : P[0]), U = a.useRef(new s.qA), F = a.useRef(null), [$, Y] = a.useState(null), G = (0, i.e7)([h.Z], () => h.Z.useReducedMotion), V = (0, i.e7)([j.Z], () => j.Z.hidePersonalInformation), {
    questStoreRewardCode: J,
    isFetchingRewardCode: X,
    isClaimingReward: K
  } = (0, i.cj)([I.Z], () => ({
    questStoreRewardCode: I.Z.getRewardCode(l.id),
    isFetchingRewardCode: I.Z.isFetchingRewardCode(l.id),
    isClaimingReward: I.Z.isClaimingReward(l.id)
  })), ee = (0, T.O5)(), et = (0, S.oo)({
    quest: l
  }), en = true === O ? (0, x.b)(l) : J, er = Q && (null == (t = l.userStatus) ? true : t.claimedAt) == null && null == en, {
    claimCode: ea,
    fetchCode: eo,
    hasError: el,
    setHasError: es
  } = (0, E.uL)({
    isClaimingReward: K,
    isFetchingRewardCode: X,
    quest: l,
    questContent: c,
    requiresPlatformSelection: er,
    rewardCode: en,
    selectedPlatformType: z,
    preview: O
  }), ei = el && !K && !X;
  ! function(e) {
    let t = (0, g.Z)(e),
      n = C.default.useIsCaptchaModalOpen(),
      r = (0, f.Z)(n),
      o = !!(!n && r);
    a.useEffect(() => {
      o && t()
    }, [o, t])
  }(() => {
    es(true)
  });
  let ec = null;
  D && null != en ? ec = M.intl.string(M.t.srzsU2) : null != en ? ec = M.intl.string(M.t.PJBpda) : er && (ec = M.intl.string(M.t.JRU8dq));
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
        hasTieredRewardCodes: l
      } = e, s = k.r.build(t.config);
      if (a) return (0, r.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: B.bodyCopy,
        children: l ? M.intl.format(M.t.m0btAb, {}) : M.intl.format(M.t["ZUA/Ui"], {
          rewardName: s.defaultRewardName
        })
      });
      let i = (0, S.C1)({
        quest: t,
        rewardCode: o,
        selectedPlatformType: n,
        sharedQuestFields: s
      });
      return null != o && null != i ? (0, r.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: B.bodyCopy,
        children: _.Z.parse(i, false, {
          allowLinks: true
        })
      }) : null
    }({
      quest: l,
      selectedPlatform: z,
      requiresPlatformSelection: er,
      rewardCode: en,
      hasTieredRewardCodes: et
    }),
    ep = a.useMemo(() => P.map(e => ({
      label: (0, S.t2)(e),
      value: e
    })), [P]),
    em = null;
  er && (em = (0, r.jsx)(p.PhF, {
    label: M.intl.string(M.t.vVcTtJ),
    errorMessage: ei ? M.intl.string(M.t.rbZBMR) : true,
    placeholder: M.intl.string(M.t.EMrUHQ),
    options: ep,
    select: e => {
      es(false), H(e)
    },
    isSelected: e => e === z,
    serialize: e => (0, S.t2)(e),
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
  let eb = null == en && (X || K),
    ef = eb && !er ? (0, r.jsx)(p.$jN, {}) : null,
    eg = null;
  null != en ? eg = (0, r.jsx)(p.gNt, {
    label: M.intl.string(M.t.srzsU2),
    children: (0, r.jsx)(m.Z, {
      value: V ? M.intl.string(M.t["0n2u0k"]) : en.code,
      delay: 1e3,
      buttonColor: u.zx.Colors.BRAND,
      onCopy: () => {
        V && (0, v.JG)(en.code), ee({
          questId: l.id,
          questContent: c,
          questContentPosition: d,
          questContentCTA: T.jZ.COPY_REWARD_CODE,
          sourceQuestContent: R
        })
      }
    })
  }) : ei && !er && (eg = (0, r.jsx)(p.oil, {
    label: M.intl.string(M.t.srzsU2),
    disabled: true,
    error: M.intl.string(M.t.rbZBMR)
  }));
  let ew = a.useMemo(() => et ? (0, S.o9)({
      quest: l,
      idx: null == en ? true : en.tier
    }) : (0, S.o9)({
      quest: l,
      idx: 0
    }), [et, l, null == en ? true : en.tier]),
    eh = a.useMemo(() => (null == ew ? true : ew.redemptionLink) == null || "" === ew.redemptionLink ? null : (null == en ? true : en.code) == null || "" === en.code ? ew.redemptionLink : ew.redemptionLink.replace(L.Dp, encodeURIComponent(en.code)), [ew, en]),
    eC = (0, E.G$)({
      claimCode: ea,
      fetchCode: eo,
      hasError: ei,
      onDismiss: o,
      quest: l,
      questContent: c,
      questContentPosition: d,
      requiresPlatformSelection: er,
      selectedPlatformType: z,
      redemptionLink: eh,
      sourceQuestContent: R
    }),
    ey = er && K,
    ex = !ey && (er && null == z || eb),
    e_ = null != eh && "" !== eh,
    ej = M.intl.string(M.t["23SS+z"]);
  er ? ej = M.intl.string(M.t.SLZMi1) : !er && ei ? ej = M.intl.string(M.t.gNJHHp) : e_ && (ej = M.intl.string(M.t["+zx47d"]));
  let ev = !G && null != en && !D && !ei,
    eO = null != ef && et,
    eT = (0, A.Gd)(l.id);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.O_, {
      ref: Y,
      className: B.confettiCanvas,
      environment: U.current
    }), (0, r.jsx)("div", {
      ref: e => {
        F.current = e, w.current = e
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
          }), !eO && (0, r.jsx)(Z.p, {
            source: L.dr.REWARD_CODE_MODAL,
            questId: l.id,
            children: (0, r.jsx)(W, {
              quest: l,
              rewardCode: en,
              hasTieredRewardCodes: et,
              sourceQuestContent: R
            })
          }), (0, r.jsxs)("div", {
            className: B.modalContent,
            children: [ed, eu, em, ef, eg, null != l.config.cosponsorMetadata && null != eT && (0, r.jsxs)("div", {
              className: B.cosponsorFooter,
              children: [(0, r.jsx)("img", {
                className: B.cosponsorLogotype,
                alt: l.config.cosponsorMetadata.name,
                src: eT.url
              }), (0, r.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: B.cosponsorName,
                children: M.intl.format(M.t.CSf4EX, {
                  cosponsorName: l.config.cosponsorMetadata.name
                })
              }), (0, r.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: B.cosponsorRedemptionInstructions,
                children: _.Z.parse(l.config.cosponsorMetadata.redemptionInstructions, false, {
                  allowLinks: true
                })
              })]
            })]
          })]
        }), (0, r.jsx)(p.mzw, {
          "data-migration-pending": true,
          children: (0, r.jsx)(p.Button, {
            variant: "primary",
            text: ej,
            onClick: eC,
            loading: ey,
            disabled: ex
          })
        })]
      })
    }), ev && (0, r.jsx)(y.Z, {
      confettiTarget: F.current,
      confettiCanvas: $,
      sprites: q.CA,
      colors: q.Br
    })]
  })
}