/** Chunk was on 66547 **/
/** chunk id: 101007, original params: e,t,n (module,exports,require) **/
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
  Chunk187546 = require("./187546.jsx"),
  Chunk285910 = require("./285910.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk465480 = require("./465480.js");

function T(e) {
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
    value: u ? E.intl.string(E.t["0n2u0k"]) : t.code,
    buttonColor: s.Tt.PRIMARY,
    onCopy: () => {
      u && (0, C.JG)(t.code), m({
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
    sourceQuestContent: s,
    rewardCode: c,
    onClose: d,
    transitionState: u,
    impressionRef: m
  } = e, f = null != (t = (0, y.C1)({
    quest: n,
    rewardCode: c
  })) ? t : "", C = a.useMemo(() => {
    var e;
    let t = null == (e = (0, w.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.Ew)(t)) return null;
    let r = null == c ? true : c.code;
    return (0, h.Ew)(r) ? t : t.replace(A.Dp, encodeURIComponent(r))
  }, [n, null == c ? true : c.code]), x = (0, v.In)({
    quest: n,
    questContent: o,
    redemptionLink: C,
    sourceQuestContent: s
  });
  return (0, r.jsx)("div", {
    ref: m,
    children: (0, r.jsx)(i.Modal, {
      size: "md",
      title: E.intl.string(E.t.NkZ7OU),
      actions: [null != C ? {
        variant: "primary",
        text: E.intl.string(E.t["+zx47d"]),
        onClick: x
      } : {
        variant: "primary",
        text: E.intl.string(E.t["/g10LC"]),
        onClick: d
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-text-default",
          className: I.claimInstructionsCodeInputTitle,
          children: E.intl.string(E.t.srzsU2)
        }), (0, r.jsx)(T, {
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
        className: I.claimInstructionsText,
        children: p.Z.parse(f, false, {
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
    className: I.contentContainer,
    children: [(0, r.jsx)("div", {
      className: I.rewardTileContainer,
      children: (0, r.jsx)(_.Z, {
        className: I.rewardTileAsset,
        quest: t,
        questContent: n,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: I.copyContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        className: I.heading,
        children: E.intl.string(E.t["5j/Zym"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: E.intl.format(E.t["ESmp2+"], {
          onClaimInstructions: o
        })
      })]
    }), (0, r.jsx)(T, {
      className: I.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      inputClassName: I.codeClaimInputSmallFont
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
  } = e, p = null != (t = (0, b.B4)(n.id)) ? t : n, f = g.jn.REWARD_MODAL, {
    rewardCode: C,
    isFetchingRewardCode: h,
    isClaimingReward: x
  } = (0, o.cj)([j.Z], () => ({
    rewardCode: j.Z.getRewardCode(p.id),
    isFetchingRewardCode: j.Z.isFetchingRewardCode(p.id),
    isClaimingReward: j.Z.isClaimingReward(p.id)
  })), {
    hasError: y,
    setHasError: _
  } = (0, v.uL)({
    isClaimingReward: x,
    isFetchingRewardCode: h,
    quest: p,
    questContent: f,
    rewardCode: C
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
    _(true)
  });
  let E = null == C && (h || x),
    I = y && !x && !h;
  return (0, r.jsx)(P.Z, {
    onClose: i,
    transitionState: s,
    quest: p,
    sourceQuestContent: c,
    location: A.dr.REWARD_CODE_MODAL,
    isRewardContentLoading: E,
    rewardContentHasError: I,
    rewardContent: I ? null : (0, r.jsx)(N.Z, {
      rewardName: (0, w.w8)(p.config),
      children: (0, r.jsx)(R, {
        quest: p,
        questContent: f,
        rewardCode: C,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(O.A, {
            questOrQuests: p,
            questContent: f,
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
                questContent: f,
                sourceQuestContent: c,
                rewardCode: C
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