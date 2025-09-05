/** Chunk was on 88938 **/
/** chunk id: 390238, original params: e,n,t (module,exports,require) **/
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
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
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
  var n;
  let {
    transitionState: t,
    onClose: o,
    quest: C,
    location: m,
    reward: f,
    sourceQuestContent: j
  } = e, p = r.useRef(null), [_, N] = r.useState(null), A = r.useRef(new s.qA), y = (0, d.e7)([c.Z], () => c.Z.useReducedMotion), S = (null == (n = C.userStatus) ? true : n.claimedAt) != null, [k, q] = r.useState(S ? "claimed" : "loading");
  r.useEffect(() => {
    if (!S) {
      let e = x.r.build(C.config),
        n = e.rewardPlatforms.length > 0 ? e.rewardPlatforms[0] : g.y$.CROSS_PLATFORM;
      (0, h.QB)(C.id, n, m).then(() => q("claimed")).catch(() => q("error"))
    }
  }, [C, m, S]);
  let I = "loading" === k;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.O_, {
      ref: N,
      className: R.confettiCanvas,
      environment: A.current
    }), (0, a.jsx)("div", {
      ref: p,
      children: (0, a.jsx)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: i()(R.rootContainer, {
          [R.rootContainerLoading]: I
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardInGameModal",
        children: I ? (0, a.jsx)(l.$jN, {
          type: l.$jN.Type.SPINNING_CIRCLE
        }) : "error" === k ? (0, a.jsx)(v.Z, {
          onClose: o
        }) : (0, a.jsx)(M, {
          quest: C,
          rewardName: f.messages.name,
          location: m,
          useReducedMotion: y,
          onClose: o,
          sourceQuestContent: j
        })
      })
    }), !y && !S && "claimed" === k && (0, a.jsx)(u.Z, {
      confettiTarget: p.current,
      confettiCanvas: _,
      sprites: w.CA,
      colors: w.Br
    })]
  })
}

function M(e) {
  let {
    quest: n,
    rewardName: t,
    location: o,
    useReducedMotion: i,
    onClose: s,
    sourceQuestContent: d
  } = e, c = r.useMemo(() => (0, f.fh)(n, f.eC.HERO), [n]), u = c.isAnimated && !i;
  return (0, a.jsxs)("div", {
    className: R.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: R.headerContainer,
      children: [(0, a.jsx)(C.Z, {
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
          children: (0, a.jsx)(p.Z, {
            autoplay: true,
            className: R.rewardTile,
            learnMoreStyle: null,
            quest: n,
            questContent: o,
            location: _.dr.INGAME_REWARD_MODAL,
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
        children: [(0, a.jsx)(l.X6q, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: R.heading,
          children: N.intl.string(N.t["0/Yz+f"])
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: R.text,
          children: N.intl.format(N.t["v1u/zs"], {
            rewardName: t
          })
        })]
      })
    })]
  })
}

function y(e) {
  let {
    quest: n,
    location: t,
    onClose: o,
    transitionState: i,
    sourceQuestContent: s
  } = e, d = r.useMemo(() => (0, m.K)(n.config), [n]);
  return null == d ? null : (0, a.jsx)(j.A, {
    questOrQuests: n,
    questContent: g.jn.REWARD_MODAL,
    sourceQuestContent: s,
    overrideVisibility: true,
    children: () => (0, a.jsx)(A, {
      onClose: o,
      transitionState: i,
      quest: n,
      location: t,
      reward: d,
      sourceQuestContent: s
    })
  })
}