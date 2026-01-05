/** Chunk was on web.js **/
/** chunk id: 644646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  Chunk617136 = require("./617136.js"),
  Chunk475595 = require("./475595.js"),
  Chunk115179 = require("./115179.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk18578 = require("./18578.jsx"),
  Chunk352084 = require("./352084.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk998008 = require("./998008.js");
let O = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: O = true,
      learnMoreStyle: v = null,
      learnMoreFontSize: S,
      sourceQuestContent: I,
      lazyLoad: T = false,
      style: C
    } = e,
    A = (0, f.O5)(),
    N = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    P = i.useMemo(() => (0, p.fh)(a, p.eC.REWARD), [a]),
    R = i.useMemo(() => (0, p.fh)(a, p.eC.REWARD_IMAGE), [a]),
    w = i.useCallback(t => {
      var n;
      (0, s.kK)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), A({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: f.jZ.REWARD_LEARN_MORE,
        sourceQuestContent: I
      }), (0, E.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [A, a.id, e, I]),
    D = i.useRef(null),
    x = i.useRef(O),
    L = (0, _.Bg)(a.config);
  return i.useEffect(() => {
    if (null != D.current) {
      if (!P.isAnimated || N) {
        D.current.currentTime = 0, D.current.pause();
        return
      }
      O && !x.current ? D.current.play() : !O && x.current && (D.current.currentTime = 0, D.current.pause()), x.current = O
    }
  }, [O, P, N]), t = L ? (0, r.jsx)(m.Fl, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(g.Z, {
      ref: e,
      className: y.questRewardTileAsset
    })
  }) : T ? (0, r.jsx)(h.K, {
    showVideo: O,
    imageAsset: null != R ? {
      asset: R,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: y.imageVideoOverlay,
      alt: b.intl.string(b.t.UMclVN)
    } : true,
    videoAsset: {
      asset: P,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(y.questRewardTileAsset, y.questRewardTileAssetLazyVideo)
    },
    onLoadComplete: e.onLoadComplete
  }) : P.isAnimated ? (0, r.jsx)(m.Fl, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.Z, {
        ref: e => {
          t.current = e, D.current = e
        },
        autoPlay: !N && O,
        loop: true,
        muted: true,
        playsInline: true,
        className: y.questRewardTileAsset,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: P.url,
          type: null != (n = P.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(m.Fl, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: (0, _.w8)(a.config),
      className: o()(y.questRewardTileAsset, y.questRewardTileAssetStatic),
      src: P.url,
      onLoad: e.onLoadComplete
    })
  }), null == v ? (0, r.jsx)("div", {
    className: o()(y.questRewardTile, n),
    style: C,
    children: t
  }) : (0, r.jsxs)(c.P3F, {
    className: o()(y.questRewardTileInteractive, y.questRewardTile, y.rewardHighlight, n),
    onClick: w,
    style: C,
    children: [t, "text" === v && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: y.questRewardTileDetailsLearnMore,
      style: {
        fontSize: S
      },
      children: b.intl.format(b.t.DYAleT, {})
    }), "icon" === v && (0, r.jsx)("div", {
      className: y.questRewardTileDetailsLearnMore,
      children: (0, r.jsx)(c.d3s, {
        size: "xxs",
        color: c.TVs.colors.WHITE.css
      })
    })]
  })
}