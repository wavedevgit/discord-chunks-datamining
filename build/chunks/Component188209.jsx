/** Chunk was on 36481 **/
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
  Chunk644647 = require("./644647.js");

function A(e) {
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
    value: d ? E.intl.string(E.t["0n2u0k"]) : t.code,
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

function D(e) {
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
    return (0, h.Ew)(r) ? t : t.replace(P.Dp, encodeURIComponent(r))
  }, [n, null == u ? true : u.code]), j = (0, x.In)({
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
      title: E.intl.string(E.t.NkZ7OU),
      actions: [null != y ? {
        variant: "primary",
        text: E.intl.string(E.t["+zx47d"]),
        onClick: j
      } : {
        variant: "primary",
        text: E.intl.string(E.t["/g10LC"]),
        onClick: m
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: I.claimInstructionsCodeInputTitle,
          children: E.intl.string(E.t.srzsU2)
        }), (0, r.jsx)(A, {
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
        className: I.claimInstructionsText,
        children: C.Z.parse(_, false, {
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
      children: (0, r.jsx)(O.Z, {
        className: I.rewardTileAsset,
        quest: t,
        questContent: n,
        location: P.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: I.copyContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: I.heading,
        children: E.intl.string(E.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: E.intl.format(E.t["ESmp2+"], {
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
  let {
    quest: t,
    onClose: n,
    transitionState: i,
    preview: s,
    sourceQuestContent: c,
    questContentPosition: C
  } = e, f = v.r.build(t.config), b = f.rewardPlatforms[0], h = j.jn.REWARD_MODAL, {
    questStoreRewardCode: _,
    isFetchingRewardCode: g,
    isClaimingReward: O
  } = (0, o.cj)([y.Z], () => ({
    questStoreRewardCode: y.Z.getRewardCode(t.id),
    isFetchingRewardCode: y.Z.isFetchingRewardCode(t.id),
    isClaimingReward: y.Z.isClaimingReward(t.id)
  })), E = true === s ? (0, m.b)(t) : _, {
    hasError: I,
    setHasError: A
  } = (0, x.uL)({
    isClaimingReward: O,
    isFetchingRewardCode: g,
    quest: t,
    questContent: h,
    requiresPlatformSelection: false,
    rewardCode: E,
    selectedPlatformType: b,
    preview: s
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
    A(true)
  });
  let S = null == E && (g || O),
    R = I && !O && !g;
  return (0, r.jsx)(T.Z, {
    onClose: n,
    transitionState: i,
    quest: t,
    sourceQuestContent: c,
    location: P.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: S,
    rewardContentHasError: R,
    rewardContent: R ? null : (0, r.jsx)(N.Z, {
      rewardName: f.defaultRewardName,
      children: (0, r.jsx)(q, {
        quest: t,
        questContent: h,
        rewardCode: E,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(w.A, {
            questOrQuests: t,
            questContent: h,
            sourceQuestContent: c,
            children: n => {
              var a, i;
              return (0, r.jsx)(D, (a = function(e) {
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
              }({}, e), i = i = {
                impressionRef: n,
                quest: t,
                questContent: h,
                sourceQuestContent: c,
                rewardCode: E,
                rewardPlatform: b,
                sharedQuestFields: f,
                questContentPosition: C
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(i)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
              }), a))
            }
          })), {
            stackingBehavior: "replace"
          })
        }
      })
    })
  })
}