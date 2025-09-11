/** Chunk was on web.js **/
/** chunk id: 644646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk18578 = require("./18578.jsx"),
  Chunk352084 = require("./352084.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858191 = require("./858191.js");
let I = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: I = true,
      learnMoreStyle: T = null,
      sourceQuestContent: S,
      lazyLoad: A = false,
      style: C,
      showShine: N = true
    } = e,
    R = (0, _.O5)(),
    P = (0, l.e7)([f.Z], () => f.Z.isFocused()),
    w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    D = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD), [a]),
    x = i.useMemo(() => (0, h.fh)(a, h.eC.REWARD_IMAGE), [a]),
    L = i.useCallback(t => {
      var n;
      (0, s.k)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), R({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: _.jZ.REWARD_LEARN_MORE,
        sourceQuestContent: S
      }), (0, b.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [R, a.id, e, S]),
    j = i.useRef(null),
    k = i.useRef(I),
    M = (0, p.Bg)(a.config);
  return i.useEffect(() => {
    if (null != j.current) {
      if (!D.isAnimated || w) {
        j.current.currentTime = 0, j.current.pause();
        return
      }
      I && !k.current ? j.current.play() : !I && k.current && (j.current.currentTime = 0, j.current.pause()), k.current = I
    }
  }, [I, D, w]), t = M ? (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(E.Z, {
      ref: e,
      className: v.questRewardTileAsset
    })
  }) : A ? (0, r.jsx)(g.K, {
    showVideo: I,
    imageAsset: null != x ? {
      asset: x,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: v.imageVideoOverlay,
      alt: O.intl.string(O.t.UMclVF)
    } : true,
    videoAsset: {
      asset: D,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo)
    },
    onLoadComplete: e.onLoadComplete
  }) : D.isAnimated ? (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.Z, {
        ref: e => {
          t.current = e, j.current = e
        },
        autoPlay: !w && I,
        loop: true,
        muted: true,
        playsInline: true,
        className: v.questRewardTileAsset,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: D.url,
          type: null != (n = D.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: m.r.build(a.config).defaultRewardName,
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
      src: D.url,
      onLoad: e.onLoadComplete
    })
  }), null == T ? (0, r.jsx)("div", {
    className: o()(v.questRewardTile, n),
    style: C,
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
    onClick: L,
    style: C,
    children: [t, N && (0, r.jsx)(c.ZX5, {
      className: v.shine,
      shineSize: c.rHe.SMALL,
      shinePaused: !P || w
    }), "text" === T && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: v.questRewardTileDetailsLearnMore,
      children: O.intl.format(O.t.DYAleX, {})
    }), "icon" === T && (0, r.jsx)("div", {
      className: v.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}