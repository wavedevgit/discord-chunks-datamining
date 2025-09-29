/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk484614 = require("./484614.jsx"),
  Chunk110924 = require("./110924.js"),
  Chunk448986 = require("./448986.js"),
  Chunk475271 = require("./475271.jsx"),
  Chunk63954 = require("./63954.jsx"),
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
    sourceQuestContent: o,
    buttonColor: s,
    className: l
  } = e, u = (0, i.e7)([C.Z], () => C.Z.hidePersonalInformation), d = (0, y.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    value: u ? N.intl.string(N.t["0n2u0t"]) : t.code,
    buttonColor: s,
    onCopy: () => {
      u && (0, f.JG)(t.code), d({
        questId: a,
        questContent: n,
        questContentCTA: y.jZ.COPY_REWARD_CODE,
        sourceQuestContent: o
      })
    }
  })
}

function q(e) {
  var t;
  let {
    quest: n,
    questContent: i,
    questContentPosition: c,
    sourceQuestContent: u,
    rewardCode: d,
    rewardPlatform: m,
    sharedQuestFields: p,
    onClose: C,
    transitionState: f,
    impressionRef: y
  } = e, v = null != (t = (0, j.C1)({
    quest: n,
    rewardCode: d,
    selectedPlatformType: m,
    sharedQuestFields: p
  })) ? t : "", g = a.useMemo(() => {
    var e;
    let t = null == (e = (0, j.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.Ew)(t)) return null;
    let r = null == d ? true : d.code;
    return (0, h.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r))
  }, [n, null == d ? true : d.code]), _ = (0, x.In)({
    quest: n,
    questContent: i,
    questContentPosition: c,
    redemptionLink: g,
    sourceQuestContent: u
  });
  return (0, r.jsx)("div", {
    ref: y,
    children: (0, r.jsx)(s.Modal, {
      size: "md",
      title: N.intl.string(N.t.NkZ7OT),
      actions: [null != g ? {
        variant: "primary",
        text: N.intl.string(N.t["+zx47e"]),
        onClick: _
      } : {
        variant: "primary",
        text: N.intl.string(N.t.i4jeWV),
        onClick: C
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: E.claimInstructionsCodeInputTitle,
          children: N.intl.string(N.t.srzsU1)
        }), (0, r.jsx)(A, {
          rewardCode: d,
          questContent: i,
          questId: n.id,
          sourceQuestContent: u,
          buttonColor: o.Tt.BRAND
        })]
      }),
      onClose: C,
      transitionState: f,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: E.claimInstructionsText,
        children: v
      })
    })
  })
}

function I(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: s
  } = e;
  return (0, r.jsxs)("div", {
    className: E.contentContainer,
    children: [(0, r.jsx)("div", {
      className: E.rewardTileContainer,
      children: (0, r.jsx)(w.Z, {
        className: E.rewardTileAsset,
        quest: t,
        questContent: n,
        location: T.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: E.copyContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: E.heading,
        children: N.intl.string(N.t["5j/Zys"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: N.intl.format(N.t.ESmp29, {
          onClaimInstructions: s
        })
      })]
    }), (0, r.jsx)(A, {
      className: E.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      buttonColor: o.Tt.PRIMARY
    })]
  })
}

function R(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: o,
    preview: s,
    sourceQuestContent: c,
    questContentPosition: C
  } = e, f = _.r.build(t.config), h = f.rewardPlatforms[0], y = g.jn.REWARD_MODAL, {
    questStoreRewardCode: j,
    isFetchingRewardCode: w,
    isClaimingReward: T
  } = (0, i.cj)([v.Z], () => ({
    questStoreRewardCode: v.Z.getRewardCode(t.id),
    isFetchingRewardCode: v.Z.isFetchingRewardCode(t.id),
    isClaimingReward: v.Z.isClaimingReward(t.id)
  })), N = true === s ? (0, p.b)(t) : j, {
    hasError: E,
    setHasError: A
  } = (0, x.uL)({
    isClaimingReward: T,
    isFetchingRewardCode: w,
    quest: t,
    questContent: y,
    requiresPlatformSelection: false,
    rewardCode: N,
    selectedPlatformType: h,
    preview: s
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
    A(true)
  });
  let R = null == N && (w || T),
    D = E && !T && !w;
  return R || D ? null : (0, r.jsx)(O.Z, {
    onClose: n,
    transitionState: o,
    quest: t,
    sourceQuestContent: c,
    rewardContent: (0, r.jsx)(P.Z, {
      rewardName: f.defaultRewardName,
      children: (0, r.jsx)(I, {
        quest: t,
        questContent: y,
        rewardCode: N,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(b.A, {
            questOrQuests: t,
            questContent: y,
            sourceQuestContent: c,
            children: n => {
              var a, i;
              return (0, r.jsx)(q, (a = function(e) {
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
                questContent: y,
                sourceQuestContent: c,
                rewardCode: N,
                rewardPlatform: h,
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