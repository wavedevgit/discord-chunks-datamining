/** Chunk was on 96861 **/
/** chunk id: 188209, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk448986 = require("./448986.js"),
  Chunk475271 = require("./475271.jsx"),
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

function y(e) {
  let {
    quest: t,
    questContent: n,
    sourceQuestContent: r,
    impressionRef: i
  } = e;
  return (0, a.jsxs)("div", {
    className: w.contentContainer,
    ref: e => {
      i.current = e
    },
    children: [(0, a.jsx)("div", {
      className: w.rewardTileContainer,
      children: (0, a.jsx)(p.Z, {
        className: w.rewardTileAsset,
        quest: t,
        questContent: n,
        location: x.dr.REWARD_CODE_MODAL,
        sourceQuestContent: r
      })
    }), (0, a.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, a.jsx)(s.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        className: w.heading,
        children: j.intl.string(j.t["5j/Zys"])
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: w.text,
        children: j.intl.format(j.t.ESmp29, {
          onClaimInstructions: () => {}
        })
      })]
    }), (0, a.jsx)("div", {
      className: w.codeInputContainer
    })]
  })
}

function g(e) {
  let {
    quest: t,
    onClose: n,
    transitionState: s,
    preview: p,
    sourceQuestContent: x
  } = e, j = h.r.build(t.config), w = j.rewardPlatforms, g = u.jn.REWARD_MODAL, {
    questStoreRewardCode: q,
    isFetchingRewardCode: b,
    isClaimingReward: N
  } = (0, i.cj)([d.Z], () => ({
    questStoreRewardCode: d.Z.getRewardCode(t.id),
    isFetchingRewardCode: d.Z.isFetchingRewardCode(t.id),
    isClaimingReward: d.Z.isClaimingReward(t.id)
  })), A = true === p ? (0, m.b)(t) : q, {
    hasError: E,
    setHasError: Z
  } = (0, f.u)({
    isClaimingReward: N,
    isFetchingRewardCode: b,
    quest: t,
    questContent: g,
    requiresPlatformSelection: false,
    rewardCode: A,
    selectedPlatformType: w[0],
    preview: p
  });
  ! function(e) {
    let t = (0, l.Z)(e),
      n = c.default.useIsCaptchaModalOpen(),
      a = (0, o.Z)(n),
      i = !!(!n && a);
    r.useEffect(() => {
      i && t()
    }, [i, t])
  }(() => {
    Z(true)
  });
  let R = null == A && (b || N),
    P = E && !N && !b;
  return R || P ? null : (0, a.jsx)(C.A, {
    questOrQuests: t,
    questContent: g,
    sourceQuestContent: x,
    children: e => (0, a.jsx)(v.Z, {
      onClose: n,
      transitionState: s,
      quest: t,
      rewardContent: (0, a.jsx)(_.Z, {
        rewardName: j.defaultRewardName,
        children: (0, a.jsx)(y, {
          quest: t,
          questContent: g,
          sourceQuestContent: x,
          impressionRef: e
        })
      })
    })
  })
}