/** Chunk was on 23119 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
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

function N(e) {
  let {
    rewardCode: t,
    questContent: n,
    questId: a,
    sourceQuestContent: o,
    buttonColor: s,
    className: l
  } = e, d = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation), u = (0, h.O5)();
  return null == t ? null : (0, r.jsx)(c.Z, {
    className: l,
    value: d ? T.intl.string(T.t["0n2u0t"]) : t.code,
    buttonColor: s,
    onCopy: () => {
      d && (0, C.JG)(t.code), u({
        questId: a,
        questContent: n,
        questContentCTA: h.jZ.COPY_REWARD_CODE,
        sourceQuestContent: o
      })
    }
  })
}

function A(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: i,
    rewardCode: c,
    rewardPlatform: d,
    sharedQuestFields: u,
    onClose: p,
    transitionState: f
  } = e, m = null != (t = (0, _.C1)({
    quest: n,
    rewardCode: c,
    selectedPlatformType: d,
    sharedQuestFields: u
  })) ? t : "";
  return (0, r.jsx)(w.A, {
    questOrQuests: n,
    questContent: a,
    sourceQuestContent: i,
    children: e => (0, r.jsx)("div", {
      ref: e,
      children: (0, r.jsx)(s.Modal, {
        size: "md",
        title: T.intl.string(T.t.NkZ7OT),
        actions: [{
          variant: "primary",
          text: T.intl.string(T.t.i4jeWV),
          onClick: p
        }],
        preview: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            variant: "eyebrow",
            color: "interactive-normal",
            className: q.claimInstructionsCodeInputTitle,
            children: T.intl.string(T.t.srzsU1)
          }), (0, r.jsx)(N, {
            rewardCode: c,
            questContent: a,
            questId: n.id,
            sourceQuestContent: i,
            buttonColor: o.Tt.BRAND
          })]
        }),
        onClose: p,
        transitionState: f,
        children: (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          className: q.claimInstructionsText,
          children: m
        })
      })
    })
  })
}

function E(e) {
  let {
    quest: t,
    questContent: n,
    rewardCode: a,
    sourceQuestContent: i,
    onClaimInstructions: s
  } = e;
  return (0, r.jsxs)("div", {
    className: q.contentContainer,
    children: [(0, r.jsx)("div", {
      className: q.rewardTileContainer,
      children: (0, r.jsx)(b.Z, {
        className: q.rewardTileAsset,
        quest: t,
        questContent: n,
        location: O.dr.REWARD_CODE_MODAL,
        sourceQuestContent: i
      })
    }), (0, r.jsxs)("div", {
      className: q.copyContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: q.heading,
        children: T.intl.string(T.t["5j/Zys"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: T.intl.format(T.t.ESmp29, {
          onClaimInstructions: s
        })
      })]
    }), (0, r.jsx)(N, {
      className: q.mainCodeInput,
      rewardCode: a,
      questContent: n,
      questId: t.id,
      sourceQuestContent: i,
      buttonColor: o.Tt.PRIMARY
    })]
  })
}

function I(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: o,
    preview: s,
    sourceQuestContent: c
  } = e, m = j.r.build(t.config), C = m.rewardPlatforms[0], h = v.jn.REWARD_MODAL, {
    questStoreRewardCode: _,
    isFetchingRewardCode: w,
    isClaimingReward: b
  } = (0, i.cj)([g.Z], () => ({
    questStoreRewardCode: g.Z.getRewardCode(t.id),
    isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
    isClaimingReward: g.Z.isClaimingReward(t.id)
  })), O = true === s ? (0, f.b)(t) : _, {
    hasError: T,
    setHasError: q
  } = (0, y.u)({
    isClaimingReward: b,
    isFetchingRewardCode: w,
    quest: t,
    questContent: h,
    requiresPlatformSelection: false,
    rewardCode: O,
    selectedPlatformType: C,
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
    q(true)
  });
  let N = null == O && (w || b),
    I = T && !b && !w;
  return N || I ? null : (0, r.jsx)(x.Z, {
    onClose: n,
    transitionState: o,
    quest: t,
    sourceQuestContent: c,
    rewardContent: (0, r.jsx)(P.Z, {
      rewardName: m.defaultRewardName,
      children: (0, r.jsx)(E, {
        quest: t,
        questContent: h,
        rewardCode: O,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => {
            var n, a;
            return (0, r.jsx)(A, (n = function(e) {
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
              quest: t,
              questContent: h,
              sourceQuestContent: c,
              rewardCode: O,
              rewardPlatform: C,
              sharedQuestFields: m
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
          }), {
            stackingBehavior: "replace"
          })
        }
      })
    })
  })
}