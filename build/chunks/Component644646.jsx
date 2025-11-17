/** Chunk was on web.js **/
/** chunk id: 644646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk132581 = require("./132581.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk18578 = require("./18578.jsx"),
  Chunk352084 = require("./352084.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858191 = require("./858191.js");

function T(e) {
  let {
    appFocused: t,
    location: n
  } = e, {
    shouldUseShine: i
  } = h.Z.useConfig({
    location: n
  });
  return i ? (0, r.jsx)(c.ZX5, {
    "data-migration-pending": true,
    className: I.shine,
    shineSize: c.rHe.SMALL,
    shinePaused: !t
  }) : null
}
let S = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: h = true,
      learnMoreStyle: S = null,
      learnMoreFontSize: A,
      sourceQuestContent: C,
      lazyLoad: N = false,
      style: R,
      showShine: P = true,
      location: D
    } = e,
    w = (0, _.O5)(),
    x = (0, l.e7)([f.Z], () => f.Z.isFocused()),
    L = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    M = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
    k = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
    j = i.useCallback(t => {
      var n;
      (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), w({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: _.jZ.REWARD_LEARN_MORE,
        sourceQuestContent: C
      }), (0, y.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [w, a.id, e, C]),
    U = i.useRef(null),
    G = i.useRef(h),
    B = (0, p.Bg)(a.config);
  return i.useEffect(() => {
    if (null != U.current) {
      if (!M.isAnimated || L) {
        U.current.currentTime = 0, U.current.pause();
        return
      }
      h && !G.current ? U.current.play() : !h && G.current && (U.current.currentTime = 0, U.current.pause()), G.current = h
    }
  }, [h, M, L]), t = B ? (0, r.jsx)(O.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(b.Z, {
      ref: e,
      className: I.questRewardTileAsset
    })
  }) : N ? (0, r.jsx)(E.K, {
    showVideo: h,
    imageAsset: null != k ? {
      asset: k,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: I.imageVideoOverlay,
      alt: v.intl.string(v.t.UMclVN)
    } : true,
    videoAsset: {
      asset: M,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(I.questRewardTileAsset, I.questRewardTileAssetLazyVideo)
    },
    onLoadComplete: e.onLoadComplete
  }) : M.isAnimated ? (0, r.jsx)(O.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.Z, {
        ref: e => {
          t.current = e, U.current = e
        },
        autoPlay: !L && h,
        loop: true,
        muted: true,
        playsInline: true,
        className: I.questRewardTileAsset,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: M.url,
          type: null != (n = M.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(O.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: g.r.build(a.config).defaultRewardName,
      className: o()(I.questRewardTileAsset, I.questRewardTileAssetStatic),
      src: M.url,
      onLoad: e.onLoadComplete
    })
  }), null == S ? (0, r.jsx)("div", {
    className: o()(I.questRewardTile, n),
    style: R,
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: o()(I.questRewardTileInteractive, I.questRewardTile, I.rewardHighlight, n),
    onClick: j,
    style: R,
    children: [t, P && !L && (0, r.jsx)(T, {
      appFocused: x,
      location: D
    }), "text" === S && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: I.questRewardTileDetailsLearnMore,
      style: {
        fontSize: A
      },
      children: v.intl.format(v.t.DYAleT, {})
    }), "icon" === S && (0, r.jsx)("div", {
      className: I.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}