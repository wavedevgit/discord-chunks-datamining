/** Chunk was on 23119 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
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
  Chunk644646 = require("./644646.jsx"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238905 = require("./238905.js");

function N(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: d,
    rewardCode: u,
    rewardPlatform: p,
    sharedQuestFields: f,
    onClose: g,
    transitionState: v
  } = e, y = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation), j = (0, h.O5)();
  if (null == u) return null;
  let w = null != (t = (0, _.C1)({
    quest: n,
    rewardCode: u,
    selectedPlatformType: p,
    sharedQuestFields: f
  })) ? t : "";
  return (0, r.jsx)(s.Modal, {
    size: "md",
    title: O.intl.string(O.t.NkZ7OT),
    actions: [{
      variant: "primary",
      text: O.intl.string(O.t.i4jeWV),
      onClick: g
    }],
    preview: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Text, {
        variant: "eyebrow",
        color: "interactive-normal",
        className: T.claimInstructionsCodeInputTitle,
        children: O.intl.string(O.t.srzsU1)
      }), (0, r.jsx)(c.Z, {
        value: y ? O.intl.string(O.t["0n2u0t"]) : u.code,
        delay: 1e3,
        buttonColor: o.Tt.BRAND,
        onCopy: () => {
          y && (0, C.JG)(u.code), j({
            questId: n.id,
            questContent: a,
            questContentCTA: h.jZ.COPY_REWARD_CODE,
            sourceQuestContent: d
          })
        }
      })]
    }),
    onClose: g,
    transitionState: v,
    children: (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      className: T.claimInstructionsText,
      children: w
    })
  })
}

function q(e) {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: a,
    onClaimInstructions: i
  } = e;
  return (0, r.jsxs)("div", {
    className: T.contentContainer,
    children: [(0, r.jsx)("div", {
      className: T.rewardTileContainer,
      children: (0, r.jsx)(w.Z, {
        className: T.rewardTileAsset,
        quest: t,
        questContent: n,
        location: P.dr.REWARD_CODE_MODAL,
        sourceQuestContent: a
      })
    }), (0, r.jsxs)("div", {
      className: T.copyContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: T.heading,
        children: O.intl.string(O.t["5j/Zys"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: O.intl.format(O.t.ESmp29, {
          onClaimInstructions: i
        })
      })]
    }), (0, r.jsx)("div", {
      className: T.codeInputContainer
    })]
  })
}

function E(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: o,
    preview: s,
    sourceQuestContent: c
  } = e, m = j.r.build(t.config), C = m.rewardPlatforms[0], h = v.jn.REWARD_MODAL, {
    questStoreRewardCode: _,
    isFetchingRewardCode: w,
    isClaimingReward: P
  } = (0, i.cj)([g.Z], () => ({
    questStoreRewardCode: g.Z.getRewardCode(t.id),
    isFetchingRewardCode: g.Z.isFetchingRewardCode(t.id),
    isClaimingReward: g.Z.isClaimingReward(t.id)
  })), O = true === s ? (0, f.b)(t) : _, {
    hasError: T,
    setHasError: E
  } = (0, y.u)({
    isClaimingReward: P,
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
    E(true)
  });
  let A = null == O && (w || P),
    I = T && !P && !w;
  return A || I ? null : (0, r.jsx)(b.Z, {
    onClose: n,
    transitionState: o,
    quest: t,
    sourceQuestContent: c,
    rewardContent: (0, r.jsx)(x.Z, {
      rewardName: m.defaultRewardName,
      children: (0, r.jsx)(q, {
        quest: t,
        questContent: h,
        sourceQuestContent: c,
        onClaimInstructions: () => {
          (0, l.ZDy)(() => Promise.resolve(e => {
            var n, a;
            return (0, r.jsx)(N, (n = function(e) {
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