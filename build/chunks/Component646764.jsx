/** Chunk was on web.js **/
/** chunk id: 646764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk216456 = require("./216456.js"),
  Chunk579473 = require("./579473.js"),
  Chunk92246 = require("./92246.js"),
  Chunk241124 = require("./241124.jsx"),
  Chunk415441 = require("./415441.jsx"),
  Chunk734736 = require("./734736.jsx"),
  Chunk545986 = require("./545986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk773570 = require("./773570.js");
let O = function(e) {
  let t, {
      className: n,
      quest: a,
      autoplay: O = true,
      learnMoreStyle: v = null,
      learnMoreFontSize: A,
      sourceQuestContent: I,
      lazyLoad: S = false,
      style: T
    } = e,
    C = (0, f.Ut)(),
    N = (0, l.bG)([u.A], () => u.A.useReducedMotion),
    R = i.useMemo(() => (0, p.tW)(a, p.fY.REWARD), [a]),
    w = i.useMemo(() => (0, p.tW)(a, p.fY.REWARD_IMAGE), [a]),
    P = i.useCallback(t => {
      var n;
      (0, o.vq)(t.currentTarget, HTMLElement) && t.currentTarget.blur(), C({
        questId: a.id,
        questContent: e.questContent,
        questContentPosition: e.questContentPosition,
        questContentCTA: f.Cy.REWARD_LEARN_MORE,
        sourceQuestContent: I
      }), (0, E.navigateToQuestHome)({
        fromContent: e.questContent,
        questId: a.id
      }), null == (n = e.onClick) || n.call(e, t)
    }, [C, a.id, e, I]),
    D = i.useRef(null),
    x = i.useRef(O),
    L = (0, _.K9)(a.config);
  return i.useEffect(() => {
    if (null != D.current) {
      if (!R.isAnimated || N) {
        D.current.currentTime = 0, D.current.pause();
        return
      }
      O && !x.current ? D.current.play() : !O && x.current && (D.current.currentTime = 0, D.current.pause()), x.current = O
    }
  }, [O, R, N]), t = L ? (0, r.jsx)(h.Sn, {
    id: "QuestRewardTile_rewardTileNitro",
    children: e => (0, r.jsx)(g.A, {
      ref: e,
      className: b.eB
    })
  }) : S ? (0, r.jsx)(m.N, {
    showVideo: O,
    imageAsset: null != w ? {
      asset: w,
      assetId: "QuestRewardTile_rewardTileStatic",
      className: b.XM,
      alt: y.intl.string(y.t.UMclVN)
    } : true,
    videoAsset: {
      asset: R,
      assetId: "QuestRewardTile_rewardTileAnimated",
      className: s()(b.eB, b.tv)
    },
    onLoadComplete: e.onLoadComplete
  }) : R.isAnimated ? (0, r.jsx)(h.Sn, {
    id: "QuestRewardTile_rewardTileAnimated",
    children: t => {
      var n;
      return (0, r.jsx)(d.A, {
        ref: e => {
          t.current = e, D.current = e
        },
        autoPlay: !N && O,
        loop: true,
        muted: true,
        playsInline: true,
        className: b.eB,
        controls: false,
        onProgress: e.onLoadComplete,
        children: (0, r.jsx)("source", {
          src: R.url,
          type: null != (n = R.mimetype) ? n : true
        })
      })
    }
  }) : (0, r.jsx)(h.Sn, {
    id: "QuestRewardTile_rewardTileStatic",
    children: t => (0, r.jsx)("img", {
      ref: t,
      alt: (0, _.mq)(a.config),
      className: s()(b.eB, b.Qz),
      src: R.url,
      onLoad: e.onLoadComplete
    })
  }), null == v ? (0, r.jsx)("div", {
    className: s()(b.al, n),
    style: T,
    children: t
  }) : (0, r.jsxs)(c.DUT, {
    className: s()(b.a$, b.al, b.Yi, n),
    onClick: P,
    style: T,
    children: [t, "text" === v && (0, r.jsx)(c.Text, {
      color: "always-white",
      variant: "text-xs/normal",
      className: b.n_,
      style: {
        fontSize: A
      },
      children: y.intl.format(y.t.DYAleT, {})
    }), "icon" === v && (0, r.jsx)("div", {
      className: b.n_,
      children: (0, r.jsx)(c.mir, {
        size: "xxs",
        color: c.LU0.colors.WHITE.css
      })
    })]
  })
}