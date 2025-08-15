/** Chunk was on 20166 **/
/** chunk id: 985866, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => U
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk505266 = require("./505266.js"),
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
    rewardCode: o,
    hasTieredRewardCodes: a,
    sourceQuestContent: i
  } = e, l = (0, d.wj)((0, h.ZP)()), u = (0, I.h)({
    location: L.dr.REWARD_CODE_MODAL,
    questConfig: r.config
  }), _ = (0, p.dQu)(c.Z.colors.INTERACTIVE_NORMAL).hex(), f = u ? _ : r.config.colors.primary, m = {
    border: "1px solid ".concat(f),
    background: "\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      ".concat((0, x.aD)(f, .2), " 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ").concat((0, x.aD)(f, .6), " 44%,\n      transparent 76%\n    ),\n    ").concat(l ? "var(--black)" : "var(--white)", "\n    ")
  }, C = (0, A.B)(r, false), b = (null == (t = r.userStatus) ? true : t.claimedAt) != null || null != o, {
    header: g,
    subHeader: y
  } = function(e) {
    var t, r, n, o;
    let {
      quest: a,
      rewardCode: s,
      hasTieredRewardCodes: i
    } = e, l = (null == (t = a.userStatus) ? true : t.claimedAt) != null || null != s, c = i ? "" : M.intl.string(M.t.UUKbio), d = i ? (0, S.o9)({
      quest: a,
      idx: null != (n = null == s ? true : s.tier) ? n : null == (r = a.userStatus) ? true : r.claimedTier
    }) : null, u = k.r.build(a.config), p = null != d && null != (o = d.messages.name) ? o : u.defaultRewardName, _ = i ? M.intl.string(M.t.cfY4PD) : u.defaultRewardName;
    return {
      subHeader: l ? M.intl.string(M.t.YpswQk) : c,
      header: l ? p : _
    }
  }({
    quest: r,
    rewardCode: o,
    hasTieredRewardCodes: a
  }), {
    hasError: w,
    isLoading: O
  } = (0, D.d7)();
  return (0, n.jsxs)("div", {
    style: m,
    className: W.rewardTile,
    children: [(0, n.jsxs)("div", {
      className: W.rewardTileWrapper,
      style: {
        "--custom-reward-tile-border-color": u ? _ : r.config.colors.primary
      },
      children: [O && !w && (0, n.jsx)(p.$jN, {
        className: W.rewardTileAssetStatusIcon,
        type: p.RAz.SPINNING_CIRCLE
      }), w && (0, n.jsx)(p.fFY, {
        className: W.rewardTileAssetStatusIcon
      }), (0, n.jsx)(q.Z, {
        className: s()(W.rewardTileAsset, {
          [W.rewardTileAssetLoading]: O || w
        }),
        quest: r,
        questContent: C.trackingCtx.content,
        location: L.dr.REWARD_CODE_MODAL,
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
              enumerable: true,
              configurable: true,
              writable: true
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
    questContent: c,
    questContentPosition: d,
    impressionRef: h,
    preview: x,
    sourceQuestContent: I
  } = e, A = (0, f.Z)(() => {
    var e;
    return (null == (e = s.userStatus) ? true : e.claimedAt) != null
  }), N = k.r.build(s.config).rewardPlatforms, q = N.length > 1, [U, z] = o.useState(q ? null : N[0]), F = o.useRef(new i.qA), Q = o.useRef(null), [G, X] = o.useState(null), H = (0, l.e7)([b.Z], () => b.Z.useReducedMotion), $ = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation), {
    questStoreRewardCode: J,
    isFetchingRewardCode: Y,
    isClaimingReward: K
  } = (0, l.cj)([T.Z], () => ({
    questStoreRewardCode: T.Z.getRewardCode(s.id),
    isFetchingRewardCode: T.Z.isFetchingRewardCode(s.id),
    isClaimingReward: T.Z.isClaimingReward(s.id)
  })), ee = (0, j.O5)(), et = (0, S.oo)({
    quest: s
  }), er = true === x ? (0, B.b)(s) : J, en = q && (null == (t = s.userStatus) ? true : t.claimedAt) == null && null == er, {
    claimCode: eo,
    fetchCode: ea,
    hasError: es,
    setHasError: ei
  } = (0, P.u)({
    isClaimingReward: K,
    isFetchingRewardCode: Y,
    quest: s,
    questContent: c,
    requiresPlatformSelection: en,
    rewardCode: er,
    selectedPlatformType: U,
    preview: x
  }), el = es && !K && !Y;
  ! function(e) {
    let t = (0, C.Z)(e),
      r = g.default.useIsCaptchaModalOpen(),
      n = (0, m.Z)(r),
      a = !!(!r && n);
    o.useEffect(() => {
      a && t()
    }, [a, t])
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
        requiresPlatformSelection: o,
        rewardCode: a,
        hasTieredRewardCodes: s
      } = e, i = k.r.build(t.config);
      if (o) return (0, n.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: W.bodyCopy,
        children: s ? M.intl.format(M.t.m0btAQ, {}) : M.intl.format(M.t["ZUA/Ul"], {
          rewardName: i.defaultRewardName
        })
      });
      let l = (0, S.C1)({
        quest: t,
        rewardCode: a,
        selectedPlatformType: r,
        sharedQuestFields: i
      });
      return null != a && null != l ? (0, n.jsx)(p.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        className: W.bodyCopy,
        children: w.Z.parse(l, false, {
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
    ep = o.useMemo(() => N.map(e => ({
      label: (0, S.t2)(e),
      value: e
    })), [N]),
    e_ = null;
  en && (e_ = (0, n.jsxs)(p.xJW, {
    title: M.intl.string(M.t.vVcTtL),
    children: [(0, n.jsx)(p.PhF, {
      placeholder: M.intl.string(M.t.EMrUHR),
      options: ep,
      select: e => {
        ei(false), z(e)
      },
      isSelected: e => e === U,
      serialize: e => (0, S.t2)(e),
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
    em = ef && !en ? (0, n.jsx)(p.$jN, {}) : null,
    eC = null;
  null != er ? eC = (0, n.jsx)(p.xJW, {
    title: M.intl.string(M.t.srzsU1),
    children: (0, n.jsx)(_.Z, {
      value: $ ? M.intl.string(M.t["0n2u0t"]) : er.code,
      delay: 1e3,
      buttonColor: u.zx.Colors.BRAND,
      onCopy: () => {
        $ && (0, v.JG)(er.code), ee({
          questId: s.id,
          questContent: c,
          questContentPosition: d,
          questContentCTA: j.jZ.COPY_REWARD_CODE,
          sourceQuestContent: I
        })
      }
    })
  }) : el && !en && (eC = (0, n.jsx)(p.xJW, {
    title: M.intl.string(M.t.srzsU1),
    children: (0, n.jsx)(u.Is, {
      disabled: true,
      error: M.intl.string(M.t.rbZBMT),
      inputClassName: W.errorInput
    })
  }));
  let eh = o.useMemo(() => et ? (0, S.o9)({
      quest: s,
      idx: null == er ? true : er.tier
    }) : (0, S.o9)({
      quest: s,
      idx: 0
    }), [et, s, null == er ? true : er.tier]),
    eb = o.useMemo(() => (null == eh ? true : eh.redemptionLink) == null || "" === eh.redemptionLink ? null : (null == er ? true : er.code) == null || "" === er.code ? eh.redemptionLink : eh.redemptionLink.replace(L.Dp, encodeURIComponent(er.code)), [eh, er]),
    eg = (0, P.G)({
      claimCode: eo,
      fetchCode: ea,
      hasError: el,
      onDismiss: a,
      quest: s,
      questContent: c,
      questContentPosition: d,
      requiresPlatformSelection: en,
      selectedPlatformType: U,
      redemptionLink: eb,
      sourceQuestContent: I
    }),
    ey = en && K,
    ew = !ey && (en && null == U || ef),
    eO = null != eb && "" !== eb,
    ev = M.intl.string(M.t["23SS+/"]);
  en ? ev = M.intl.string(M.t.SLZMi4) : !en && el ? ev = M.intl.string(M.t.gNJHHh) : eO && (ev = M.intl.string(M.t["+zx47e"]));
  let ex = !H && null != er && !A && !el,
    ej = null != em && et,
    eS = (0, E.Gd)(s.id);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.O_, {
      ref: X,
      className: W.confettiCanvas,
      environment: F.current
    }), (0, n.jsx)("div", {
      ref: e => {
        Q.current = e, h.current = e
      },
      children: (0, n.jsxs)(p.Y0X, {
        transitionState: r,
        size: p.CgR.DYNAMIC,
        parentComponent: "QuestsRewardCodeModal",
        children: [(0, n.jsxs)("div", {
          className: W.modalBody,
          children: [(0, n.jsx)(p.olH, {
            className: W.closeButton,
            onClick: () => a()
          }), !ej && (0, n.jsx)(D.p, {
            source: L.dr.REWARD_CODE_MODAL,
            questId: s.id,
            children: (0, n.jsx)(V, {
              quest: s,
              rewardCode: er,
              hasTieredRewardCodes: et,
              sourceQuestContent: I
            })
          }), (0, n.jsxs)("div", {
            className: W.modalContent,
            children: [ed, eu, e_, em, eC, null != s.config.cosponsorMetadata && null != eS && (0, n.jsxs)("div", {
              className: W.cosponsorFooter,
              children: [(0, n.jsx)("img", {
                className: W.cosponsorLogotype,
                alt: s.config.cosponsorMetadata.name,
                src: eS.url
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
                children: w.Z.parse(s.config.cosponsorMetadata.redemptionInstructions, false, {
                  allowLinks: true
                })
              })]
            })]
          })]
        }), (0, n.jsx)(p.mzw, {
          children: (0, n.jsx)(p.zxk, {
            variant: "primary",
            text: ev,
            onClick: eg,
            loading: ey,
            disabled: ew
          })
        })]
      })
    }), ex && (0, n.jsx)(y.Z, {
      confettiTarget: Q.current,
      confettiCanvas: G,
      sprites: Z.CA,
      colors: Z.Br
    })]
  })
}