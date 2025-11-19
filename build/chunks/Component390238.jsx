/** Chunk was on 88938 **/
/** chunk id: 390238, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk921254 = require("./921254.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk114732 = require("./114732.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk798144 = require("./798144.js");

function R(e) {
  var n;
  let {
    transitionState: t,
    onClose: r,
    quest: m,
    location: C,
    reward: x,
    sourceQuestContent: f
  } = e, j = o.useRef(null), [_, N] = o.useState(null), R = o.useRef(new s.qA), k = (0, d.e7)([c.Z], () => c.Z.useReducedMotion), y = (null == (n = m.userStatus) ? true : n.claimedAt) != null, [B, I] = o.useState(y ? "claimed" : "loading");
  o.useEffect(() => {
    if (!y) {
      let e = (0, h.zG)(m.config);
      (0, g.QB)(m.id, e, C).then(() => I("claimed")).catch(() => I("error"))
    }
  }, [m, C, y]);
  let M = "loading" === B;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.O_, {
      ref: N,
      className: w.confettiCanvas,
      environment: R.current
    }), (0, a.jsx)("div", {
      ref: j,
      children: (0, a.jsx)(l.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: l.CgR.DYNAMIC,
        className: i()(w.rootContainer, {
          [w.rootContainerLoading]: M
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardInGameModal",
        children: M ? (0, a.jsx)(l.$jN, {
          type: l.$jN.Type.SPINNING_CIRCLE
        }) : "error" === B ? (0, a.jsx)(p.Z, {
          onClose: r
        }) : (0, a.jsx)(A, {
          quest: m,
          rewardName: x.messages.name,
          location: C,
          useReducedMotion: k,
          onClose: r,
          sourceQuestContent: f
        })
      })
    }), !k && !y && "claimed" === B && (0, a.jsx)(u.Z, {
      confettiTarget: j.current,
      confettiCanvas: _,
      sprites: v.CA,
      colors: v.Br
    })]
  })
}

function A(e) {
  let {
    quest: n,
    rewardName: t,
    location: r,
    useReducedMotion: i,
    onClose: s,
    sourceQuestContent: d
  } = e, c = o.useMemo(() => (0, x.fh)(n, x.eC.HERO), [n]), u = c.isAnimated && !i;
  return (0, a.jsxs)("div", {
    className: w.claimedRootContainer,
    children: [(0, a.jsxs)("div", {
      className: w.headerContainer,
      children: [(0, a.jsx)(m.Z, {
        className: w.headerBackground,
        autoPlay: u,
        loop: u,
        muted: true,
        playsInline: true,
        controls: false,
        poster: c.isAnimated ? true : c.url,
        src: c.isAnimated ? c.url : true
      }), (0, a.jsxs)("div", {
        className: w.headerForeground,
        children: [(0, a.jsx)("div", {
          className: w.previewContainer,
          children: (0, a.jsx)(j.Z, {
            autoplay: true,
            className: w.rewardTile,
            learnMoreStyle: null,
            quest: n,
            questContent: r,
            location: _.dr.INGAME_REWARD_MODAL,
            sourceQuestContent: d
          })
        }), (0, a.jsx)(l.olH, {
          "data-migration-pending": true,
          className: w.close,
          withCircleBackground: true,
          onClick: s
        })]
      })]
    }), (0, a.jsx)(l.mzw, {
      "data-migration-pending": true,
      className: w.footerContainer,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: w.gradient,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: w.heading,
          children: N.intl.string(N.t["0/Yz+Y"])
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: w.text,
          children: N.intl.format(N.t["v1u/zq"], {
            rewardName: t
          })
        })]
      })
    })]
  })
}

function k(e) {
  let {
    quest: n,
    location: t,
    onClose: r,
    transitionState: i,
    sourceQuestContent: s
  } = e, d = o.useMemo(() => (0, h.K)(n.config), [n]);
  return null == d ? null : (0, a.jsx)(f.A, {
    questOrQuests: n,
    questContent: C.jn.REWARD_MODAL,
    sourceQuestContent: s,
    overrideVisibility: true,
    children: () => (0, a.jsx)(R, {
      onClose: r,
      transitionState: i,
      quest: n,
      location: t,
      reward: d,
      sourceQuestContent: s
    })
  })
}