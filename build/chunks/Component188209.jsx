/** Chunk was on 62006 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
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

function D(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: i,
    className: l,
    inputClassName: u
  } = e, d = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation), p = (0, _.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    inputClassName: u,
    value: d ? I.intl.string(I.t["0n2u0k"]) : t.code,
    buttonColor: s.Tt.PRIMARY,
    onCopy: () => {
      d && (0, b.JG)(t.code), p({
        questId: a,
        questContent: n,
        questContentCTA: _.jZ.COPY_REWARD_CODE,
        sourceQuestContent: i
      })
    }
  })
}

function q(e) {
  var t;
  let {
    quest: n,
    questContent: o,
    questContentPosition: s,
    sourceQuestContent: c,
    rewardCode: u,
    rewardPlatform: d,
    sharedQuestFields: p,
    onClose: m,
    transitionState: f,
    impressionRef: b
  } = e, _ = null != (t = (0, g.C1)({
    quest: n,
    rewardCode: u,
    selectedPlatformType: d,
    sharedQuestFields: p
  })) ? t : "", y = a.useMemo(() => {
    var e;
    let t = null == (e = (0, g.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.Ew)(t)) return null;
    let r = null == u ? true : u.code;
    return (0, h.Ew)(r) ? t : t.replace(E.Dp, encodeURIComponent(r))
  }, [n, null == u ? true : u.code]), j = (0, v.In)({
    quest: n,
    questContent: o,
    questContentPosition: s,
    redemptionLink: y,
    sourceQuestContent: c
  });
  return (0, r.jsx)("div", {
    ref: b,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: I.intl.string(I.t.NkZ7OU),
      actions: [null != y ? {
        variant: "primary",
        text: I.intl.string(I.t["+zx47d"]),
        onClick: j
      } : {
        variant: "primary",
        text: I.intl.string(I.t["/g10LC"]),
        onClick: m
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: A.claimInstructionsCodeInputTitle,
          children: I.intl.string(I.t.srzsU2)
        }), (0, r.jsx)(D, {
          rewardCode: u,
          questContent: o,
          questId: n.id,
          sourceQuestContent: c
        })]
      }),
      onClose: m,
      transitionState: f,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: A.claimInstructionsText,
        children: C.Z.parse(_, false, {
          allowLinks: true
        })
      })
    })
  })
}

function S(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: o
  } = e;
  return (0, r.jsxs)("div", {
    className: A.contentContainer,
    children: [(0, r.jsx)("div", {
      className: A.rewardTileContainer,
      children: (0, r.jsx)(T.Z, {
        className: A.rewardTileAsset,
        quest: t,
        questContent: n,
        location: E.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: A.copyContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: A.heading,
        children: I.intl.string(I.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: I.intl.format(I.t["ESmp2+"], {
          onClaimInstructions: o
        })
      })]
    }), (0, r.jsx)(D, {
      className: A.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: A.codeClaimInputSmallFont
    })]
  })
}

function R(e) {
  var t;
  let {
    initialQuest: n,
    onClose: i,
    transitionState: s,
    preview: c,
    sourceQuestContent: C,
    questContentPosition: f
  } = e, b = null != (t = (0, y.B4)(n.id)) ? t : n, h = w.r.build(b.config), _ = h.rewardPlatforms[0], g = x.jn.REWARD_MODAL, {
    questStoreRewardCode: T,
    isFetchingRewardCode: I,
    isClaimingReward: A
  } = (0, o.cj)([j.Z], () => ({
    questStoreRewardCode: j.Z.getRewardCode(b.id),
    isFetchingRewardCode: j.Z.isFetchingRewardCode(b.id),
    isClaimingReward: j.Z.isClaimingReward(b.id)
  })), D = true === c ? (0, m.b)(b) : T, {
    hasError: R,
    setHasError: k
  } = (0, v.uL)({
    isClaimingReward: A,
    isFetchingRewardCode: I,
    quest: b,
    questContent: g,
    requiresPlatformSelection: false,
    rewardCode: D,
    selectedPlatformType: _,
    preview: c
  });
  ! function(e) {
    let t = (0, d.Z)(e),
      n = p.default.useIsCaptchaModalOpen(),
      r = (0, u.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    k(true)
  });
  let L = null == D && (I || A),
    Z = R && !A && !I;
  return (0, r.jsx)(N.Z, {
    onClose: i,
    transitionState: s,
    quest: b,
    sourceQuestContent: C,
    location: E.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: L,
    rewardContentHasError: Z,
    rewardContent: Z ? null : (0, r.jsx)(P.Z, {
      rewardName: h.defaultRewardName,
      children: (0, r.jsx)(S, {
        quest: b,
        questContent: g,
        rewardCode: D,
        sourceQuestContent: C,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(O.A, {
            questOrQuests: b,
            questContent: g,
            sourceQuestContent: C,
            children: t => {
              var n, a;
              return (0, r.jsx)(q, (n = function(e) {
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
                quest: b,
                questContent: g,
                sourceQuestContent: C,
                rewardCode: D,
                rewardPlatform: _,
                sharedQuestFields: h,
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