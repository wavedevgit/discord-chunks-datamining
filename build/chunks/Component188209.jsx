/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
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
  Chunk454585 = require("./454585.js"),
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk624138 = require("./624138.js"),
  Chunk617136 = require("./617136.js"),
  Chunk616022 = require("./616022.js"),
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk804127 = require("./804127.js"),
  Chunk115179 = require("./115179.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284645 = require("./284645.js");

function I(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: i,
    className: l,
    inputClassName: d
  } = e, u = (0, o.e7)([C.Z], () => C.Z.hidePersonalInformation), m = (0, h.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    inputClassName: d,
    value: u ? T.intl.string(T.t["0n2u0k"]) : t.code,
    buttonColor: s.Tt.PRIMARY,
    onCopy: () => {
      u && (0, b.JG)(t.code), m({
        questId: a,
        questContent: n,
        questContentCTA: h.jZ.COPY_REWARD_CODE,
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
    sourceQuestContent: s,
    rewardCode: c,
    onClose: d,
    transitionState: u,
    impressionRef: m
  } = e, C = null != (t = (0, g.C1)({
    quest: n,
    rewardCode: c
  })) ? t : "", b = a.useMemo(() => {
    var e;
    let t = null == (e = (0, w.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, f.Ew)(t)) return null;
    let r = null == c ? true : c.code;
    return (0, f.Ew)(r) ? t : t.replace(E.Dp, encodeURIComponent(r))
  }, [n, null == c ? true : c.code]), h = (0, v.In)({
    quest: n,
    questContent: o,
    redemptionLink: b,
    sourceQuestContent: s
  });
  return (0, r.jsx)("div", {
    ref: m,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: T.intl.string(T.t.NkZ7OU),
      actions: [null != b ? {
        variant: "primary",
        text: T.intl.string(T.t["+zx47d"]),
        onClick: h
      } : {
        variant: "primary",
        text: T.intl.string(T.t["/g10LC"]),
        onClick: d
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          className: A.claimInstructionsCodeInputTitle,
          children: T.intl.string(T.t.srzsU2)
        }), (0, r.jsx)(I, {
          rewardCode: c,
          questContent: o,
          questId: n.id,
          sourceQuestContent: s
        })]
      }),
      onClose: d,
      transitionState: u,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: A.claimInstructionsText,
        children: p.Z.parse(C, false, {
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
      children: (0, r.jsx)(N.Z, {
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
        color: "text-subtle",
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

function Z(e) {
  var t;
  let {
    initialQuest: n,
    onClose: i,
    transitionState: s,
    sourceQuestContent: c
  } = e, p = null != (t = (0, y.B4)(n.id)) ? t : n, C = x.jn.REWARD_MODAL, {
    rewardCode: b,
    isFetchingRewardCode: f,
    isClaimingReward: h
  } = (0, o.cj)([j.Z], () => ({
    rewardCode: j.Z.getRewardCode(p.id),
    isFetchingRewardCode: j.Z.isFetchingRewardCode(p.id),
    isClaimingReward: j.Z.isClaimingReward(p.id)
  })), {
    hasError: g,
    setHasError: N
  } = (0, v.uL)({
    isClaimingReward: h,
    isFetchingRewardCode: f,
    quest: p,
    questContent: C,
    rewardCode: b
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
    N(true)
  });
  let T = null == b && (f || h),
    A = g && !h && !f;
  return (0, r.jsx)(_.Z, {
    onClose: i,
    transitionState: s,
    quest: p,
    sourceQuestContent: c,
    location: E.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: T,
    rewardContentHasError: A,
    rewardContent: A ? null : (0, r.jsx)(P.Z, {
      rewardName: (0, w.w8)(p.config),
      children: (0, r.jsx)(R, {
        quest: p,
        questContent: C,
        rewardCode: b,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(O.A, {
            questOrQuests: p,
            questContent: C,
            sourceQuestContent: c,
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
                quest: p,
                questContent: C,
                sourceQuestContent: c,
                rewardCode: b
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