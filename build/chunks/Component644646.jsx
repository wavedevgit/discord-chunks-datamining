/** Chunk was on web.js **/
/** chunk id: 644646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
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
  Chunk132581 = require("./132581.js"),
  Chunk475595 = require("./475595.js"),
  Chunk115179 = require("./115179.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk18578 = require("./18578.jsx"),
  Chunk352084 = require("./352084.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk858191 = require("./858191.js");

function S(e) {
  let {
    appFocused: t,
    location: n
  } = e, {
    shouldUseShine: i
  } = _.Z.useConfig({
    location: n
  });
  return i ? (0, r.jsx)(c.ZX5, {
    "data-migration-pending": true,
    className: v.shine,
    shineSize: c.rHe.SMALL,
    shinePaused: !t
  }) : null
}
let I = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: _ = true,
      learnMoreStyle: I = null,
      learnMoreFontSize: T,
      sourceQuestContent: A,
      lazyLoad: C = false,
      style: N,
      showShine: P = true,
      location: R
    } = e,
    w = (0, p.O5)(),
    D = (0, l.e7)([f.Z], () => f.Z.isFocused()),
    x = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    L = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
    j = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
    M = i.useCallback(t => {
      var n;
      (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), w({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: p.jZ.REWARD_LEARN_MORE,
        sourceQuestContent: A
      }), (0, y.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [w, a.id, e, A]),
    k = i.useRef(null),
    U = i.useRef(_),
    G = (0, h.Bg)(a.config);
  return i.useEffect(() => {
    if (null != k.current) {
      if (!L.isAnimated || x) {
        k.current.currentTime = 0, k.current.pause();
        return
      }
      _ && !U.current ? k.current.play() : !_ && U.current && (k.current.currentTime = 0, k.current.pause()), U.current = _
    }
  }, [_, L, x]), t = G ? (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(b.Z, {
      ref: e,
      className: v.questRewardTileAsset
    })
  }) : C ? (0, r.jsx)(E.K, {
    showVideo: _,
    imageAsset: null != j ? {
      asset: j,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: v.imageVideoOverlay,
      alt: O.intl.string(O.t.UMclVN)
    } : true,
    videoAsset: {
      asset: L,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo)
    },
    onLoadComplete: e.onLoadComplete
  }) : L.isAnimated ? (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.Z, {
        ref: e => {
          t.current = e, k.current = e
        },
        autoPlay: !x && _,
        loop: true,
        muted: true,
        playsInline: true,
        className: v.questRewardTileAsset,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: L.url,
          type: null != (n = L.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(g.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: (0, h.w8)(a.config),
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
      src: L.url,
      onLoad: e.onLoadComplete
    })
  }), null == I ? (0, r.jsx)("div", {
    className: o()(v.questRewardTile, n),
    style: N,
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
    onClick: M,
    style: N,
    children: [t, P && !x && (0, r.jsx)(S, {
      appFocused: D,
      location: R
    }), "text" === I && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: v.questRewardTileDetailsLearnMore,
      style: {
        fontSize: T
      },
      children: O.intl.format(O.t.DYAleT, {})
    }), "icon" === I && (0, r.jsx)("div", {
      className: v.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}