/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk448986 = require("./448986.js"),
  Chunk475271 = require("./475271.jsx"),
  Chunk63954 = require("./63954.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk624138 = require("./624138.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk804127 = require("./804127.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238905 = require("./238905.js");

function A(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: i,
    className: l,
    inputClassName: d
  } = e, u = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation), m = (0, x.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    inputClassName: d,
    value: u ? D.intl.string(D.t["0n2u0k"]) : t.code,
    buttonColor: s.Tt.PRIMARY,
    onCopy: () => {
      u && (0, h.JG)(t.code), m({
        questId: a,
        questContent: n,
        questContentCTA: x.jZ.COPY_REWARD_CODE,
        sourceQuestContent: i
      })
    }
  })
}

function R(e) {
  var t;
  let {
    quest: n,
    questContent: o,
    questContentPosition: s,
    sourceQuestContent: c,
    rewardCode: d,
    rewardPlatform: u,
    sharedQuestFields: m,
    onClose: p,
    transitionState: f,
    impressionRef: h
  } = e, x = null != (t = (0, y.C1)({
    quest: n,
    rewardCode: d,
    selectedPlatformType: u,
    sharedQuestFields: m
  })) ? t : "", g = a.useMemo(() => {
    var e;
    let t = null == (e = (0, y.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, j.Ew)(t)) return null;
    let r = null == d ? true : d.code;
    return (0, j.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r))
  }, [n, null == d ? true : d.code]), v = (0, _.In)({
    quest: n,
    questContent: o,
    questContentPosition: s,
    redemptionLink: g,
    sourceQuestContent: c
  });
  return (0, r.jsx)("div", {
    ref: h,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: D.intl.string(D.t.NkZ7OU),
      actions: [null != g ? {
        variant: "primary",
        text: D.intl.string(D.t["+zx47d"]),
        onClick: v
      } : {
        variant: "primary",
        text: D.intl.string(D.t["/g10LC"]),
        onClick: p
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: I.claimInstructionsCodeInputTitle,
          children: D.intl.string(D.t.srzsU2)
        }), (0, r.jsx)(A, {
          rewardCode: d,
          questContent: o,
          questId: n.id,
          sourceQuestContent: c
        })]
      }),
      onClose: p,
      transitionState: f,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: I.claimInstructionsText,
        children: C.Z.parse(x, false, {
          allowLinks: true
        })
      })
    })
  })
}

function q(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: o
  } = e;
  return (0, r.jsxs)("div", {
    className: I.contentContainer,
    children: [(0, r.jsx)("div", {
      className: I.rewardTileContainer,
      children: (0, r.jsx)(P.Z, {
        className: I.rewardTileAsset,
        quest: t,
        questContent: n,
        location: T.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: I.copyContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: I.heading,
        children: D.intl.string(D.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: D.intl.format(D.t["ESmp2+"], {
          onClaimInstructions: o
        })
      })]
    }), (0, r.jsx)(A, {
      className: I.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: I.codeClaimInputSmallFont
    })]
  })
}

function S(e) {
  var t;
  let {
    initialQuest: n,
    onClose: i,
    transitionState: s,
    preview: c,
    sourceQuestContent: C,
    questContentPosition: f
  } = e, h = null != (t = (0, g.B4)(n.id)) ? t : n, j = w.r.build(h.config), x = j.rewardPlatforms[0], y = b.jn.REWARD_MODAL, {
    questStoreRewardCode: P,
    isFetchingRewardCode: D,
    isClaimingReward: I
  } = (0, o.cj)([v.Z], () => ({
    questStoreRewardCode: v.Z.getRewardCode(h.id),
    isFetchingRewardCode: v.Z.isFetchingRewardCode(h.id),
    isClaimingReward: v.Z.isClaimingReward(h.id)
  })), A = true === c ? (0, p.b)(h) : P, {
    hasError: S,
    setHasError: Z
  } = (0, _.uL)({
    isClaimingReward: I,
    isFetchingRewardCode: D,
    quest: h,
    questContent: y,
    requiresPlatformSelection: false,
    rewardCode: A,
    selectedPlatformType: x,
    preview: c
  });
  ! function(e) {
    let t = (0, u.Z)(e),
      n = m.default.useIsCaptchaModalOpen(),
      r = (0, d.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    Z(true)
  });
  let k = null == A && (D || I),
    L = S && !I && !D;
  return (0, r.jsx)(N.Z, {
    onClose: i,
    transitionState: s,
    quest: h,
    sourceQuestContent: C,
    location: T.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: k,
    rewardContentHasError: L,
    rewardContent: L ? null : (0, r.jsx)(E.Z, {
      rewardName: j.defaultRewardName,
      children: (0, r.jsx)(q, {
        quest: h,
        questContent: y,
        rewardCode: A,
        sourceQuestContent: C,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(O.A, {
            questOrQuests: h,
            questContent: y,
            sourceQuestContent: C,
            children: t => {
              var n, a;
              return (0, r.jsx)(R, (n = function(e) {
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
              }({}, e), a = a = {
                impressionRef: t,
                quest: h,
                questContent: y,
                sourceQuestContent: C,
                rewardCode: A,
                rewardPlatform: x,
                sharedQuestFields: j,
                questContentPosition: f
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(a)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
              }), n))
            }
          })), {
            stackingBehavior: "replace"
          })
        }
      })
    })
  })
}