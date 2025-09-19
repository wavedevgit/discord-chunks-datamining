/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
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
  Chunk246946 = require("./246946.js"),
  Chunk572004 = require("./572004.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk804127 = require("./804127.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk652380 = require("./652380.jsx"),
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
    sourceQuestContent: u,
    rewardCode: d,
    rewardPlatform: f,
    sharedQuestFields: v,
    onClose: j,
    transitionState: y,
    impressionRef: x
  } = e, g = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation), b = (0, C.O5)();
  if (null == d) return null;
  let w = null != (t = (0, h.C1)({
    quest: n,
    rewardCode: d,
    selectedPlatformType: f,
    sharedQuestFields: v
  })) ? t : "";
  return (0, r.jsx)("div", {
    ref: e => {
      x.current = e
    },
    children: (0, r.jsx)(s.Modal, {
      size: "md",
      title: q.intl.string(q.t.NkZ7OT),
      actions: [{
        variant: "primary",
        text: q.intl.string(q.t.i4jeWV),
        onClick: j
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: T.claimInstructionsCodeInputTitle,
          children: q.intl.string(q.t.srzsU1)
        }), (0, r.jsx)(c.Z, {
          value: g ? q.intl.string(q.t["0n2u0t"]) : d.code,
          delay: 1e3,
          buttonColor: o.Tt.BRAND,
          onCopy: () => {
            g && (0, p.JG)(d.code), b({
              questId: n.id,
              questContent: a,
              questContentCTA: C.jZ.COPY_REWARD_CODE,
              sourceQuestContent: u
            })
          }
        })]
      }),
      onClose: j,
      transitionState: y,
      children: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: T.claimInstructionsText,
        children: w
      })
    })
  })
}

function Z(e) {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: a,
    impressionRef: i,
    onClaimInstructions: o
  } = e;
  return (0, r.jsxs)("div", {
    className: T.contentContainer,
    ref: e => {
      i.current = e
    },
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
        children: q.intl.string(q.t["5j/Zys"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: T.text,
        children: q.intl.format(q.t.ESmp29, {
          onClaimInstructions: o
        })
      })]
    }), (0, r.jsx)("div", {
      className: T.codeInputContainer
    })]
  })
}

function A(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: o,
    preview: s,
    sourceQuestContent: c
  } = e, m = x.r.build(t.config), p = m.rewardPlatforms[0], C = j.jn.REWARD_MODAL, {
    questStoreRewardCode: h,
    isFetchingRewardCode: w,
    isClaimingReward: P
  } = (0, i.cj)([v.Z], () => ({
    questStoreRewardCode: v.Z.getRewardCode(t.id),
    isFetchingRewardCode: v.Z.isFetchingRewardCode(t.id),
    isClaimingReward: v.Z.isClaimingReward(t.id)
  })), q = true === s ? (0, b.b)(t) : h, {
    hasError: T,
    setHasError: A
  } = (0, y.u)({
    isClaimingReward: P,
    isFetchingRewardCode: w,
    quest: t,
    questContent: C,
    requiresPlatformSelection: false,
    rewardCode: q,
    selectedPlatformType: p,
    preview: s
  });
  ! function(e) {
    let t = (0, d.Z)(e),
      n = f.default.useIsCaptchaModalOpen(),
      r = (0, u.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    A(true)
  });
  let E = null == q && (w || P),
    I = T && !P && !w;
  return E || I ? null : (0, r.jsx)(g.A, {
    questOrQuests: t,
    questContent: C,
    sourceQuestContent: c,
    children: e => (0, r.jsx)(_.Z, {
      onClose: n,
      transitionState: o,
      quest: t,
      rewardContent: (0, r.jsx)(O.Z, {
        rewardName: m.defaultRewardName,
        children: (0, r.jsx)(Z, {
          quest: t,
          questContent: C,
          sourceQuestContent: c,
          impressionRef: e,
          onClaimInstructions: () => {
            (0, l.ZDy)(() => Promise.resolve(e => (0, r.jsx)(g.A, {
              questOrQuests: t,
              questContent: C,
              sourceQuestContent: c,
              children: n => {
                var a, i;
                return (0, r.jsx)(N, (a = function(e) {
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
                  quest: t,
                  questContent: C,
                  sourceQuestContent: c,
                  rewardCode: q,
                  rewardPlatform: p,
                  sharedQuestFields: m,
                  impressionRef: n
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
  })
}