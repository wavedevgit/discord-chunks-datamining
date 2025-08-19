/** Chunk was on 89035 **/
/** chunk id: 985866, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk454585 = require("./454585.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk302221 = require("./302221.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk192023 = require("./192023.js"),
  Chunk804127 = require("./804127.js"),
  Chunk566078 = require("./566078.js"),
  Chunk617889 = require("./617889.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk652380 = require("./652380.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk777738 = require("./777738.js");

function V(e) {
  var t;
  let {
    quest: r,
    rewardCode: a,
    hasTieredRewardCodes: o,
    sourceQuestContent: i
  } = e, l = (0, d.wj)((0, _.ZP)()), u = (0, P.h)({
    location: Z.dr.REWARD_CODE_MODAL,
    questConfig: r.config
  }), m = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(), f = u ? m : r.config.colors.primary, h = {
    border: "1px solid ".concat(f),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, j.aD)(f, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, j.aD)(f, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(l ? "var(--black)" : "var(--white)", "\n    ")
  }, C = (0, A.B)(r, false), b = (null == (t = r.userStatus) ? true : t.claimedAt) != null || null != a, {
    header: g,
    subHeader: y
  } = function(e) {
    var t, r, n, a;
    let {
      quest: o,
      rewardCode: s,
      hasTieredRewardCodes: i
    } = e, l = (null == (t = o.userStatus) ? true : t.claimedAt) != null || null != s, c = i ? "" : M.intl.string(M.t.UUKbio), d = i ? (0, x.o9)({
      quest: o,
      idx: null != (n = null == s ? true : s.tier) ? n : null == (r = o.userStatus) ? true : r.claimedTier
    }) : null, u = I.r.build(o.config), p = null != d && null != (a = d.messages.name) ? a : u.defaultRewardName, m = i ? M.intl.string(M.t.cfY4PD) : u.defaultRewardName;
    return {
      subHeader: l ? M.intl.string(M.t.YpswQk) : c,
      header: l ? p : m
    }
  }({
    quest: r,
    rewardCode: a,
    hasTieredRewardCodes: o
  }), {
    hasError: O,
    isLoading: w
  } = (0, q.d7)();
  return (0, n.jsxs)("div", {
    style: h,
    className: W.rewardTile,
    children: [(0, n.jsxs)("div", {
      className: W.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": u ? m : r.config.colors.primary
      },
      children: [w && !O && (0, n.jsx)(p.$jN, {
        className: W.rewardTileAssetStatusIcon,
        type: p.RAz.SPINNING_CIRCLE
      }), O && (0, n.jsx)(p.fFY, {
        className: W.rewardTileAssetStatusIcon
      }), (0, n.jsx)(L.Z, {
        className: s()(W.rewardTileAsset, {
          [W.rewardTileAssetLoading]: w || O
        }),
        quest: r,
        questContent: C.trackingCtx.content,
        location: Z.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })]
    }), (0, n.jsxs)("div", {
      className: W.rewardSubheading,
      children: [b && (0, n.jsx)(p.kmB, {
        size: "xs",
        color: c.Z.colors.TEXT_MUTED,
        className: W.rewardSubheadingIcon
      }), (0, n.jsx)(p.Text, {
        variant: "eyebrow",
        color: "text-muted",
        className: W.rewardSubheadingText,
        children: y
      })]
    }), (0, n.jsx)(p.X6q, {
      variant: "display-sm",
      color: "header-primary",
      className: W.rewardHeading,
      children: g
    })]
  })
}

function U(e) {
  let t = (0, l.e7)([T.Z], () => T.Z.getQuest(e.questId));
  return (null == t && null != e.previewQuest && (t = e.previewQuest), null != t) ? (0, n.jsx)(N.A, {
    questOrQuests: t,
    questContent: R.jn.REWARD_MODAL,
    sourceQuestContent: e.sourceQuestContent,
    children: r => {
      var a, o;
      return (0, n.jsx)(z, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, e), o = o = {
        impressionRef: r,
        quest: t,
        preview: e.preview
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a))
    }
  }) : null
}

function z(e) {
  var t;
  let {
    transitionState: r,
    onClose: o,
    quest: s,
    questContent: c,
    questContentPosition: d,
    impressionRef: _,
    preview: j,
    sourceQuestContent: P
  } = e, A = (0, f.Z)(() => {
    var e;
    return (null == (e = s.userStatus) ? true : e.claimedAt) != null
  }), N = I.r.build(s.config).rewardPlatforms, L = N.length > 1, [U, z] = a.useState(L ? null : N[0]), Q = a.useRef(new i.qA), X = a.useRef(null), [G, F] = a.useState(null), H = (0, l.e7)([b.Z], () => b.Z.useReducedMotion), $ = (0, l.e7)([w.Z], () => w.Z.hidePersonalInformation), {
    questStoreRewardCode: J,
    isFetchingRewardCode: Y,
    isClaimingReward: K
  } = (0, l.cj)([T.Z], () => ({
    questStoreRewardCode: T.Z.getRewardCode(s.id),
    isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
    isClaimingReward: T.Z.isClaimingReward(s.id)
  })), ee = (0, S.O5)(), et = (0, x.oo)({
    quest: s
  }), er = true === j ? (0, D.b)(s) : J, en = L && (null == (t = s.userStatus) ? true : t.claimedAt) == null && null == er, {
    claimCode: ea,
    fetchCode: eo,
    hasError: es,
    setHasError: ei
  } = (0, k.u)({
    isClaimingReward: K,
    isFetchingRewardCode: Y,
    quest: s,
    questContent: c,
    requiresPlatformSelection: en,
    rewardCode: er,
    selectedPlatformType: U,
    preview: j
  }), el = es && !K && !Y;
  ! function(e) {
    let t = (0, C.Z)(e),
      r = g.default.useIsCaptchaModalOpen(),
      n = (0, h.Z)(r),
      o = !!(!r && n);
    a.useEffect(() => {
      o && t()
    }, [o, t])
  }(() => {
    ei(true)
  });
  let ec = null;
  A && null != er ? ec = M.intl.string(M.t.srzsU1) : null != er ? ec = M.intl.string(M.t.PJBpdX) : en && (ec = M.intl.string(M.t.JRU8dn));
  let ed = null != ec ? (0, n.jsx)(p.X6q, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: W.heading,
      children: ec
    }) : null,
    eu = function(e) {
      let {
        quest: t,
        selectedPlatform: r,
        requiresPlatformSelection: a,
        rewardCode: o,
        hasTieredRewardCodes: s
      } = e, i = I.r.build(t.config);
      if (a) return (0, n.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: W.bodyCopy,
        children: s ? M.intl.format(M.t.m0btAQ, {}) : M.intl.format(M.t["ZUA/Ul"], {
          rewardName: i.defaultRewardName
        })
      });
      let l = (0, x.C1)({
        quest: t,
        rewardCode: o,
        selectedPlatformType: r,
        sharedQuestFields: i
      });
      return null != o && null != l ? (0, n.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: W.bodyCopy,
        children: O.Z.parse(l, false, {
          allowLinks: true
        })
      }) : null
    }({
      quest: s,
      selectedPlatform: U,
      requiresPlatformSelection: en,
      rewardCode: er,
      hasTieredRewardCodes: et
    }),
    ep = a.useMemo(() => N.map(e => ({
      label: (0, x.t2)(e),
      value: e
    })), [N]),
    em = null;
  en && (em = (0, n.jsxs)(p.xJW, {
    title: M.intl.string(M.t.vVcTtL),
    children: [(0, n.jsx)(p.PhF, {
      placeholder: M.intl.string(M.t.EMrUHR),
      options: ep,
      select: e => {
        ei(false), z(e)
      },
      isSelected: e => e === U,
      serialize: e => (0, x.t2)(e),
      className: el ? W.errorInput : "",
      isDisabled: K,
      renderOptionLabel: e => {
        let t = function(e) {
          switch (e) {
            case R.y$.CROSS_PLATFORM:
              return (0, n.jsx)(p.Che, {
                className: W.platformSelectionOptionIcon
              });
            case R.y$.PC:
              return (0, n.jsx)(p.pzj, {
                className: W.platformSelectionOptionIcon
              });
            case R.y$.PLAYSTATION:
              return (0, n.jsx)(p.Tsp, {
                className: W.platformSelectionOptionIcon
              });
            case R.y$.SWITCH:
              return (0, n.jsx)(p.aPH, {
                className: W.platformSelectionOptionIcon
              });
            case R.y$.XBOX:
              return (0, n.jsx)(p.Mko, {
                className: W.platformSelectionOptionIcon
              })
          }
        }(e.value);
        return (0, n.jsxs)("div", {
          className: W.platformSelectionOptionLabelContainer,
          children: [t, e.label]
        })
      }
    }), el ? (0, n.jsx)(p.pdY, {
      error: M.intl.string(M.t.rbZBMT)
    }) : null]
  }));
  let ef = null == er && (Y || K),
    eh = ef && !en ? (0, n.jsx)(p.$jN, {}) : null,
    eC = null;
  null != er ? eC = (0, n.jsx)(p.xJW, {
    title: M.intl.string(M.t.srzsU1),
    children: (0, n.jsx)(m.Z, {
      value: $ ? M.intl.string(M.t["0n2u0t"]) : er.code,
      delay: 1e3,
      buttonColor: u.zx.Colors.BRAND,
      onCopy: () => {
        $ && (0, v.JG)(er.code), ee({
          questId: s.id,
          questContent: c,
          questContentPosition: d,
          questContentCTA: S.jZ.COPY_REWARD_CODE,
          sourceQuestContent: P
        })
      }
    })
  }) : el && !en && (eC = (0, n.jsx)(p.xJW, {
    title: M.intl.string(M.t.srzsU1),
    children: (0, n.jsx)(p.oil, {
      disabled: true,
      error: M.intl.string(M.t.rbZBMT)
    })
  }));
  let e_ = a.useMemo(() => et ? (0, x.o9)({
      quest: s,
      idx: null == er ? true : er.tier
    }) : (0, x.o9)({
      quest: s,
      idx: 0
    }), [et, s, null == er ? true : er.tier]),
    eb = a.useMemo(() => (null == e_ ? true : e_.redemptionLink) == null || "" === e_.redemptionLink ? null : (null == er ? true : er.code) == null || "" === er.code ? e_.redemptionLink : e_.redemptionLink.replace(Z.Dp, encodeURIComponent(er.code)), [e_, er]),
    eg = (0, k.G)({
      claimCode: ea,
      fetchCode: eo,
      hasError: el,
      onDismiss: o,
      quest: s,
      questContent: c,
      questContentPosition: d,
      requiresPlatformSelection: en,
      selectedPlatformType: U,
      redemptionLink: eb,
      sourceQuestContent: P
    }),
    ey = en && K,
    eO = !ey && (en && null == U || ef),
    ew = null != eb && "" !== eb,
    ev = M.intl.string(M.t["23SS+/"]);
  en ? ev = M.intl.string(M.t.SLZMi4) : !en && el ? ev = M.intl.string(M.t.gNJHHh) : ew && (ev = M.intl.string(M.t["+zx47e"]));
  let ej = !H && null != er && !A && !el,
    eS = null != eh && et,
    ex = (0, E.Gd)(s.id);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.O_, {
      ref: F,
      className: W.confettiCanvas,
      environment: Q.current
    }), (0, n.jsx)("div", {
      ref: e => {
        X.current = e, _.current = e
      },
      children: (0, n.jsxs)(p.Y0X, {
        "data-migration-pending": true,
        transitionState: r,
        size: p.CgR.DYNAMIC,
        parentComponent: "QuestsRewardCodeModal",
        children: [(0, n.jsxs)("div", {
          className: W.modalBody,
          children: [(0, n.jsx)(p.olH, {
            "data-migration-pending": true,
            className: W.closeButton,
            onClick: () => o()
          }), !eS && (0, n.jsx)(q.p, {
            source: Z.dr.REWARD_CODE_MODAL,
            questId: s.id,
            children: (0, n.jsx)(V, {
              quest: s,
              rewardCode: er,
              hasTieredRewardCodes: et,
              sourceQuestContent: P
            })
          }), (0, n.jsxs)("div", {
            className: W.modalContent,
            children: [ed, eu, em, eh, eC, null != s.config.cosponsorMetadata && null != ex && (0, n.jsxs)("div", {
              className: W.cosponsorFooter,
              children: [(0, n.jsx)("img", {
                className: W.cosponsorLogotype,
                alt: s.config.cosponsorMetadata.name,
                src: ex.url
              }), (0, n.jsx)(p.Text, {
                variant: "text-sm/medium",
                color: "text-muted",
                className: W.cosponsorName,
                children: M.intl.format(M.t.CSf4ER, {
                  cosponsorName: s.config.cosponsorMetadata.name
                })
              }), (0, n.jsx)(p.Text, {
                variant: "text-md/normal",
                color: "text-default",
                className: W.cosponsorRedemptionInstructions,
                children: O.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, false, {
                  allowLinks: true
                })
              })]
            })]
          })]
        }), (0, n.jsx)(p.mzw, {
          "data-migration-pending": true,
          children: (0, n.jsx)(p.zxk, {
            variant: "primary",
            text: ev,
            onClick: eg,
            loading: ey,
            disabled: eO
          })
        })]
      })
    }), ej && (0, n.jsx)(y.Z, {
      confettiTarget: X.current,
      confettiCanvas: G,
      sprites: B.CA,
      colors: B.Br
    })]
  })
}