/** Chunk was on 88938 **/
/** chunk id: 390238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk114732 = require("./114732.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk889179 = require("./889179.js");

function A(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: m,
    location: h,
    reward: x,
    sourceQuestContent: j
  } = e, _ = r.useRef(null), [v, w] = r.useState(null), A = r.useRef(new s.qA), y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion), B = (null == (t = m.userStatus) ? true : t.claimedAt) != null, [M, I] = r.useState(B ? "claimed" : "loading");
  r.useEffect(() => {
    if (!B) {
      let e = f.r.build(m.config),
        t = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : C.y$.CROSS_PLATFORM;
      (0, g.QB)(m.id, t, h).then(() => I("claimed")).catch(() => I("error"))
    }
  }, [m, h, B]);
  let S = "loading" === M;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.O_, {
      ref: w,
      className: R.confettiCanvas,
      environment: A.current
    }), (0, a.jsx)("div", {
      ref: _,
      children: (0, a.jsx)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: n,
        size: l.CgR.DYNAMIC,
        className: i()(R.rootContainer, {
          [R.rootContainerLoading]: S
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardInGameModal",
        children: S ? (0, a.jsx)(l.$jN, {
          type: l.$jN.Type.SPINNING_CIRCLE
        }) : "error" === M ? (0, a.jsx)(p.Z, {
          onClose: o
        }) : (0, a.jsx)(k, {
          quest: m,
          rewardName: x.messages.name,
          location: h,
          useReducedMotion: y,
          onClose: o,
          sourceQuestContent: j
        })
      })
    }), !y && !B && "claimed" === M && (0, a.jsx)(u.Z, {
      confettiTarget: _.current,
      confettiCanvas: v,
      sprites: N.CA,
      colors: N.Br
    })]
  })
}

function k(e) {
  let {
    quest: t,
    rewardName: n,
    location: o,
    useReducedMotion: i,
    onClose: s,
    sourceQuestContent: d
  } = e, c = r.useMemo(() => (0, x.fh)(t, x.eC.HERO), [t]), u = c.isAnimated && !i;
  return (0, a.jsxs)("div", {
    className: R.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: R.headerContainer,
      children: [(0, a.jsx)(m.Z, {
        className: R.headerBackground,
        autoPlay: u,
        loop: u,
        muted: true,
        playsInline: true,
        controls: false,
        poster: c.isAnimated ? true : c.url,
        src: c.isAnimated ? c.url : true
      }), (0, a.jsxs)("div", {
        className: R.headerForeground,
        children: [(0, a.jsx)("div", {
          className: R.previewContainer,
          children: (0, a.jsx)(_.Z, {
            autoplay: true,
            className: R.rewardTile,
            learnMoreStyle: null,
            quest: t,
            questContent: o,
            location: v.dr.INGAME_REWARD_MODAL,
            sourceQuestContent: d
          })
        }), (0, a.jsx)(l.olH, {
          "data-migration-pending": true,
          className: R.close,
          withCircleBackground: true,
          onClick: s
        })]
      })]
    }), (0, a.jsx)(l.mzw, {
      "data-migration-pending": true,
      className: R.footerContainer,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: R.gradient,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: R.heading,
          children: w.intl.string(w.t["0/Yz+Y"])
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: R.text,
          children: w.intl.format(w.t["v1u/zq"], {
            rewardName: n
          })
        })]
      })
    })]
  })
}

function y(e) {
  let {
    quest: t,
    location: n,
    onClose: o,
    transitionState: i,
    sourceQuestContent: s
  } = e, d = r.useMemo(() => (0, h.K)(t.config), [t]);
  return null == d ? null : (0, a.jsx)(j.A, {
    questOrQuests: t,
    questContent: C.jn.REWARD_MODAL,
    sourceQuestContent: s,
    overrideVisibility: true,
    children: () => (0, a.jsx)(A, {
      onClose: o,
      transitionState: i,
      quest: t,
      location: n,
      reward: d,
      sourceQuestContent: s
    })
  })
}