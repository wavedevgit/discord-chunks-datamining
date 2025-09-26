/** Chunk was on 23119 **/
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
  Chunk238905 = require("./238905.js");

function E(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: o,
    buttonColor: s,
    className: l
  } = e, d = (0, i.e7)([f.Z], () => f.Z.hidePersonalInformation), u = (0, _.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    value: d ? q.intl.string(q.t["0n2u0t"]) : t.code,
    buttonColor: s,
    onCopy: () => {
      d && (0, C.JG)(t.code), u({
        questId: a,
        questContent: n,
        questContentCTA: _.jZ.COPY_REWARD_CODE,
        sourceQuestContent: o
      })
    }
  })
}

function I(e) {
  var t;
  let {
    quest: n,
    questContent: i,
    questContentPosition: c,
    sourceQuestContent: d,
    rewardCode: u,
    rewardPlatform: p,
    sharedQuestFields: m,
    onClose: f,
    transitionState: C,
    impressionRef: _
  } = e, g = null != (t = (0, v.C1)({
    quest: n,
    rewardCode: u,
    selectedPlatformType: p,
    sharedQuestFields: m
  })) ? t : "", y = a.useMemo(() => {
    var e;
    let t = null == (e = (0, v.o9)({
      quest: n,
      idx: 0
    })) ? true : e.redemptionLink;
    if ((0, h.Ew)(t)) return null;
    let r = null == u ? true : u.code;
    return (0, h.Ew)(r) ? t : t.replace(T.Dp, encodeURIComponent(r))
  }, [n, null == u ? true : u.code]), j = (0, w.In)({
    quest: n,
    questContent: i,
    questContentPosition: c,
    redemptionLink: y,
    sourceQuestContent: d
  });
  return (0, r.jsx)("div", {
    ref: _,
    children: (0, r.jsx)(s.Modal, {
      size: "md",
      title: q.intl.string(q.t.NkZ7OT),
      actions: [null != y ? {
        variant: "primary",
        text: q.intl.string(q.t["+zx47e"]),
        onClick: j
      } : {
        variant: "primary",
        text: q.intl.string(q.t.i4jeWV),
        onClick: f
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: N.claimInstructionsCodeInputTitle,
          children: q.intl.string(q.t.srzsU1)
        }), (0, r.jsx)(E, {
          rewardCode: u,
          questContent: i,
          questId: n.id,
          sourceQuestContent: d,
          buttonColor: o.Tt.BRAND
        })]
      }),
      onClose: f,
      transitionState: C,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: N.claimInstructionsText,
        children: g
      })
    })
  })
}

function A(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: s
  } = e;
  return (0, r.jsxs)("div", {
    className: N.contentContainer,
    children: [(0, r.jsx)("div", {
      className: N.rewardTileContainer,
      children: (0, r.jsx)(b.Z, {
        className: N.rewardTileAsset,
        quest: t,
        questContent: n,
        location: T.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: N.copyContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: N.heading,
        children: q.intl.string(q.t["5j/Zys"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: q.intl.format(q.t.ESmp29, {
          onClaimInstructions: s
        })
      })]
    }), (0, r.jsx)(E, {
      className: N.mainCodeInput,
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
    questContentPosition: f
  } = e, C = j.r.build(t.config), h = C.rewardPlatforms[0], _ = y.jn.REWARD_MODAL, {
    questStoreRewardCode: v,
    isFetchingRewardCode: b,
    isClaimingReward: T
  } = (0, i.cj)([g.Z], () => ({
    questStoreRewardCode: g.Z.getRewardCode(t.id),
    isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
    isClaimingReward: g.Z.isClaimingReward(t.id)
  })), q = true === s ? (0, m.b)(t) : v, {
    hasError: N,
    setHasError: E
  } = (0, w.uL)({
    isClaimingReward: T,
    isFetchingRewardCode: b,
    quest: t,
    questContent: _,
    requiresPlatformSelection: false,
    rewardCode: q,
    selectedPlatformType: h,
    preview: s
  });
  ! function(e) {
    let t = (0, u.Z)(e),
      n = p.default.useIsCaptchaModalOpen(),
      r = (0, d.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    E(true)
  });
  let R = null == q && (b || T),
    D = N && !T && !b;
  return R || D ? null : (0, r.jsx)(P.Z, {
    onClose: n,
    transitionState: o,
    quest: t,
    sourceQuestContent: c,
    rewardContent: (0, r.jsx)(O.Z, {
      rewardName: C.defaultRewardName,
      children: (0, r.jsx)(A, {
        quest: t,
        questContent: _,
        rewardCode: q,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(x.A, {
            questOrQuests: t,
            questContent: _,
            sourceQuestContent: c,
            children: n => {
              var a, i;
              return (0, r.jsx)(I, (a = function(e) {
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
                questContent: _,
                sourceQuestContent: c,
                rewardCode: q,
                rewardPlatform: h,
                sharedQuestFields: C,
                questContentPosition: f
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