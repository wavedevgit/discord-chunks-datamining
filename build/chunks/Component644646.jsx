/** Chunk was on web.js **/
/** chunk id: 644646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
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
  Chunk18578 = require("./18578.jsx"),
  Chunk352084 = require("./352084.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk497377 = require("./497377.js");

function I(e) {
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
    className: v.shine,
    shineSize: c.rHe.SMALL,
    shinePaused: !t
  }) : null
}
let T = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: h = true,
      learnMoreStyle: T = null,
      learnMoreFontSize: S,
      sourceQuestContent: A,
      lazyLoad: C = false,
      style: N,
      showShine: R = true,
      location: P
    } = e,
    D = (0, _.O5)(),
    w = (0, l.e7)([f.Z], () => f.Z.isFocused()),
    L = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    x = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD), [a]),
    M = i.useMemo(() => (0, m.fh)(a, m.eC.REWARD_IMAGE), [a]),
    j = i.useCallback(t => {
      var n;
      (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), D({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: _.jZ.REWARD_LEARN_MORE,
        sourceQuestContent: A
      }), (0, b.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [D, a.id, e, A]),
    k = i.useRef(null),
    U = i.useRef(h),
    G = (0, p.Bg)(a.config);
  return i.useEffect(() => {
    if (null != k.current) {
      if (!x.isAnimated || L) {
        k.current.currentTime = 0, k.current.pause();
        return
      }
      h && !U.current ? k.current.play() : !h && U.current && (k.current.currentTime = 0, k.current.pause()), U.current = h
    }
  }, [h, x, L]), t = G ? (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(E.Z, {
      ref: e,
      className: v.questRewardTileAsset
    })
  }) : C ? (0, r.jsx)(g.K, {
    showVideo: h,
    imageAsset: null != M ? {
      asset: M,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: v.imageVideoOverlay,
      alt: O.intl.string(O.t.UMclVN)
    } : true,
    videoAsset: {
      asset: x,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetLazyVideo)
    },
    onLoadComplete: e.onLoadComplete
  }) : x.isAnimated ? (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.Z, {
        ref: e => {
          t.current = e, k.current = e
        },
        autoPlay: !L && h,
        loop: true,
        muted: true,
        playsInline: true,
        className: v.questRewardTileAsset,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: x.url,
          type: null != (n = x.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(y.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: (0, p.w8)(a.config),
      className: o()(v.questRewardTileAsset, v.questRewardTileAssetStatic),
      src: x.url,
      onLoad: e.onLoadComplete
    })
  }), null == T ? (0, r.jsx)("div", {
    className: o()(v.questRewardTile, n),
    style: N,
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: o()(v.questRewardTileInteractive, v.questRewardTile, v.rewardHighlight, n),
    onClick: j,
    style: N,
    children: [t, R && !L && (0, r.jsx)(I, {
      appFocused: w,
      location: P
    }), "text" === T && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: v.questRewardTileDetailsLearnMore,
      style: {
        fontSize: S
      },
      children: O.intl.format(O.t.DYAleT, {})
    }), "icon" === T && (0, r.jsx)("div", {
      className: v.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}