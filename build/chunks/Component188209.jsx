/** Chunk was on 73268 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
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
  Chunk644647 = require("./644647.js");

function I(e) {
  var t;
  let {
    quest: n,
    questContent: a,
    sourceQuestContent: d,
    rewardCode: u,
    rewardPlatform: f,
    sharedQuestFields: p,
    onClose: _,
    transitionState: w,
    impressionRef: g
  } = e, y = (0, i.e7)([m.Z], () => m.Z.hidePersonalInformation), j = (0, C.O5)();
  if (null == u) return null;
  let x = null != (t = (0, v.C1)({
    quest: n,
    rewardCode: u,
    selectedPlatformType: f,
    sharedQuestFields: p
  })) ? t : "";
  return (0, r.jsx)("div", {
    ref: e => {
      g.current = e
    },
    children: (0, r.jsx)(s.Modal, {
      size: "md",
      title: q.intl.string(q.t.NkZ7OT),
      actions: [{
        variant: "primary",
        text: q.intl.string(q.t.i4jeWV),
        onClick: _
      }],
      preview: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          className: T.claimInstructionsCodeInputTitle,
          children: q.intl.string(q.t.srzsU1)
        }), (0, r.jsx)(l.Z, {
          value: y ? q.intl.string(q.t["0n2u0t"]) : u.code,
          delay: 1e3,
          buttonColor: o.Tt.BRAND,
          onCopy: () => {
            y && (0, h.JG)(u.code), j({
              questId: n.id,
              questContent: a,
              questContentCTA: C.jZ.COPY_REWARD_CODE,
              sourceQuestContent: d
            })
          }
        })]
      }),
      onClose: _,
      transitionState: w,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        className: T.claimInstructionsText,
        children: x
      })
    })
  })
}

function N(e) {
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
      children: (0, r.jsx)(x.Z, {
        className: T.rewardTileAsset,
        quest: t,
        questContent: n,
        location: O.dr.REWARD_CODE_MODAL,
        sourceQuestContent: a
      })
    }), (0, r.jsxs)("div", {
      className: T.copyContainer,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: T.heading,
        children: q.intl.string(q.t["5j/Zys"])
      }), (0, r.jsx)(c.Text, {
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

function Z(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: o,
    preview: s,
    sourceQuestContent: l
  } = e, m = y.r.build(t.config), h = m.rewardPlatforms[0], C = w.jn.REWARD_MODAL, {
    questStoreRewardCode: v,
    isFetchingRewardCode: x,
    isClaimingReward: O
  } = (0, i.cj)([_.Z], () => ({
    questStoreRewardCode: _.Z.getRewardCode(t.id),
    isFetchingRewardCode: _.Z.isFetchingRewardCode(t.id),
    isClaimingReward: _.Z.isClaimingReward(t.id)
  })), q = true === s ? (0, p.b)(t) : v, {
    hasError: T,
    setHasError: Z
  } = (0, g.u)({
    isClaimingReward: O,
    isFetchingRewardCode: x,
    quest: t,
    questContent: C,
    requiresPlatformSelection: false,
    rewardCode: q,
    selectedPlatformType: h,
    preview: s
  });
  ! function(e) {
    let t = (0, u.Z)(e),
      n = f.default.useIsCaptchaModalOpen(),
      r = (0, d.Z)(n),
      i = !!(!n && r);
    a.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    Z(true)
  });
  let A = null == q && (x || O),
    E = T && !O && !x;
  return A || E ? null : (0, r.jsx)(j.A, {
    questOrQuests: t,
    questContent: C,
    sourceQuestContent: l,
    children: e => (0, r.jsx)(b.Z, {
      onClose: n,
      transitionState: o,
      quest: t,
      rewardContent: (0, r.jsx)(P.Z, {
        rewardName: m.defaultRewardName,
        children: (0, r.jsx)(N, {
          quest: t,
          questContent: C,
          sourceQuestContent: l,
          impressionRef: e,
          onClaimInstructions: () => {
            (0, c.ZDy)(() => Promise.resolve(e => (0, r.jsx)(j.A, {
              questOrQuests: t,
              questContent: C,
              sourceQuestContent: l,
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
                  quest: t,
                  questContent: C,
                  sourceQuestContent: l,
                  rewardCode: q,
                  rewardPlatform: h,
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