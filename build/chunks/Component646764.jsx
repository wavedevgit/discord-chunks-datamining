/** Chunk was on web.js **/
/** chunk id: 646764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk579473 = require("./579473.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk92246 = require("./92246.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk415441 = require("./415441.jsx"),
  Chunk734736 = require("./734736.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk773570 = require("./773570.js");
let v = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: v = true,
      learnMoreStyle: A = null,
      learnMoreFontSize: I,
      sourceQuestContent: S,
      lazyLoad: T = false,
      style: C
    } = e,
    N = (0, p.Ut)(),
    w = (0, l.bG)([u.A], () => u.A.useReducedMotion),
    R = i.useMemo(() => (0, f.tW)(a, f.fY.REWARD), [a]),
    P = i.useMemo(() => (0, f.tW)(a, f.fY.REWARD_IMAGE), [a]),
    D = i.useCallback(t => {
      var n;
      (0, s.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), N({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: _.Cy.REWARD_LEARN_MORE,
        sourceQuestContent: S
      }), (0, y.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [N, a.id, e, S]),
    L = i.useRef(null),
    x = i.useRef(v),
    M = (0, h.K9)(a.config);
  return i.useEffect(() => {
    if (null != L.current) {
      if (!R.isAnimated || w) {
        L.current.currentTime = 0, L.current.pause();
        return
      }
      v && !x.current ? L.current.play() : !v && x.current && (L.current.currentTime = 0, L.current.pause()), x.current = v
    }
  }, [v, R, w]), t = M ? (0, r.jsx)(m.Sn, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(E.A, {
      ref: e,
      className: O.eB
    })
  }) : T ? (0, r.jsx)(g.N, {
    showVideo: v,
    imageAsset: null != P ? {
      asset: P,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: O.XM,
      alt: b.intl.string(b.t.UMclVN)
    } : true,
    videoAsset: {
      asset: R,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: o()(O.eB, O.tv)
    },
    onLoadComplete: e.onLoadComplete
  }) : R.isAnimated ? (0, r.jsx)(m.Sn, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.A, {
        ref: e => {
          t.current = e, L.current = e
        },
        autoPlay: !w && v,
        loop: true,
        muted: true,
        playsInline: true,
        className: O.eB,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: R.url,
          type: null != (n = R.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(m.Sn, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: (0, h.mq)(a.config),
      className: o()(O.eB, O.Qz),
      src: R.url,
      onLoad: e.onLoadComplete
    })
  }), null == A ? (0, r.jsx)("div", {
    className: o()(O.al, n),
    style: C,
    children: t
  }) : (0, r.jsxs)(c.DUT, {
    className: o()(O.a$, O.al, O.Yi, n),
    onClick: D,
    style: C,
    children: [t, "text" === A && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: O.n_,
      style: {
        fontSize: I
      },
      children: b.intl.format(b.t.DYAleT, {})
    }), "icon" === A && (0, r.jsx)("div", {
      className: O.n_,
      children: (0, r.jsx)(c.mir, {
        size: "xxs",
        color: c.LU0.colors.WHITE.css
      })
    })]
  })
}