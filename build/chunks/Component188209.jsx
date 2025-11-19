/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => q
}), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238905 = require("./238905.js");

function I(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: i,
    className: l,
    inputClassName: u
  } = e, d = (0, o.e7)([f.Z], () => f.Z.hidePersonalInformation), m = (0, x.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    inputClassName: u,
    value: d ? T.intl.string(T.t["0n2u0k"]) : t.code,
    buttonColor: s.Tt.PRIMARY,
    onCopy: () => {
      d && (0, h.JG)(t.code), m({
        questId: a,
        questContent: n,
        questContentCTA: x.jZ.COPY_REWARD_CODE,
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
    onClose: m,
    transitionState: p,
    impressionRef: f
  } = e, h = null != (t = (0, y.C1)({
    quest: n,
    rewardCode: u,
    selectedPlatformType: d
  })) ? t : "", x = a.useMemo(() => {
    var e;
    let t = null == (e = (0, y.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, j.Ew)(t)) return null;
    let r = null == u ? true : u.code;
    return (0, j.Ew)(r) ? t : t.replace(E.Dp, encodeURIComponent(r))
  }, [n, null == u ? true : u.code]), g = (0, _.In)({
    quest: n,
    questContent: o,
    questContentPosition: s,
    redemptionLink: x,
    sourceQuestContent: c
  });
  return (0, r.jsx)("div", {
    ref: f,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: T.intl.string(T.t.NkZ7OU),
      actions: [null != x ? {
        variant: "primary",
        text: T.intl.string(T.t["+zx47d"]),
        onClick: g
      } : {
        variant: "primary",
        text: T.intl.string(T.t["/g10LC"]),
        onClick: m
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: A.claimInstructionsCodeInputTitle,
          children: T.intl.string(T.t.srzsU2)
        }), (0, r.jsx)(I, {
          rewardCode: u,
          questContent: o,
          questId: n.id,
          sourceQuestContent: c
        })]
      }),
      onClose: m,
      transitionState: p,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: A.claimInstructionsText,
        children: C.Z.parse(h, false, {
          allowLinks: true
        })
      })
    })
  })
}

function R(e) {
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
      children: (0, r.jsx)(O.Z, {
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
        children: T.intl.string(T.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: T.intl.format(T.t["ESmp2+"], {
          onClaimInstructions: o
        })
      })]
    }), (0, r.jsx)(I, {
      className: A.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: A.codeClaimInputSmallFont
    })]
  })
}

function q(e) {
  var t;
  let {
    initialQuest: n,
    onClose: i,
    transitionState: s,
    preview: c,
    sourceQuestContent: C,
    questContentPosition: f
  } = e, h = null != (t = (0, g.B4)(n.id)) ? t : n, j = (0, y.zG)(h.config), x = b.jn.REWARD_MODAL, {
    questStoreRewardCode: O,
    isFetchingRewardCode: T,
    isClaimingReward: A
  } = (0, o.cj)([v.Z], () => ({
    questStoreRewardCode: v.Z.getRewardCode(h.id),
    isFetchingRewardCode: v.Z.isFetchingRewardCode(h.id),
    isClaimingReward: v.Z.isClaimingReward(h.id)
  })), I = true === c ? (0, p.b)(h) : O, {
    hasError: q,
    setHasError: Z
  } = (0, _.uL)({
    isClaimingReward: A,
    isFetchingRewardCode: T,
    quest: h,
    questContent: x,
    requiresPlatformSelection: false,
    rewardCode: I,
    selectedPlatformType: j,
    preview: c
  });
  ! function(e) {
    let t = (0, d.Z)(e),
      n = m.default.useIsCaptchaModalOpen(),
      r = (0, u.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    Z(true)
  });
  let S = null == I && (T || A),
    k = q && !A && !T;
  return (0, r.jsx)(N.Z, {
    onClose: i,
    transitionState: s,
    quest: h,
    sourceQuestContent: C,
    location: E.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: S,
    rewardContentHasError: k,
    rewardContent: k ? null : (0, r.jsx)(P.Z, {
      rewardName: (0, y.w8)(h.config),
      children: (0, r.jsx)(R, {
        quest: h,
        questContent: x,
        rewardCode: I,
        sourceQuestContent: C,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(w.A, {
            questOrQuests: h,
            questContent: x,
            sourceQuestContent: C,
            children: t => {
              var n, a;
              return (0, r.jsx)(D, (n = function(e) {
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
                questContent: x,
                sourceQuestContent: C,
                rewardCode: I,
                rewardPlatform: j,
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