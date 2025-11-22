/** Chunk was on 28467 **/
/** chunk id: 210667, original params: e,n,t (module,exports,require) **/
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
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk475595 = require("./475595.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk939729 = require("./939729.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk675654 = require("./675654.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk748626 = require("./748626.js");

function R(e) {
  var n;
  let {
    transitionState: t,
    onClose: r,
    quest: m,
    location: h,
    reward: _,
    sourceQuestContent: x
  } = e, j = o.useRef(null), [p, N] = o.useState(null), R = o.useRef(new s.qA), k = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), y = (null == (n = m.userStatus) ? true : n.claimedAt) != null, [B, I] = o.useState(y ? "claimed" : "loading");
  o.useEffect(() => {
    if (!y) {
      let e = (0, C.zG)(m.config);
      (0, g.QB)(m.id, e, h).then(() => I("claimed")).catch(() => I("error"))
    }
  }, [m, h, y]);
  let M = "loading" === B;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.O_, {
      ref: N,
      className: w.confettiCanvas,
      environment: R.current
    }), (0, a.jsx)("div", {
      ref: j,
      children: (0, a.jsx)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: t,
        size: d.CgR.DYNAMIC,
        className: i()(w.rootContainer, {
          [w.rootContainerLoading]: M
        }),
        hideShadow: true,
        parentComponent: "QuestsRewardInGameModal",
        children: M ? (0, a.jsx)(d.$jN, {
          type: d.$jN.Type.SPINNING_CIRCLE
        }) : "error" === B ? (0, a.jsx)(f.Z, {
          onClose: r
        }) : (0, a.jsx)(A, {
          quest: m,
          rewardName: _.messages.name,
          location: h,
          useReducedMotion: k,
          onClose: r,
          sourceQuestContent: x
        })
      })
    }), !k && !y && "claimed" === B && (0, a.jsx)(u.Z, {
      confettiTarget: j.current,
      confettiCanvas: p,
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
    sourceQuestContent: l
  } = e, c = o.useMemo(() => (0, _.fh)(n, _.eC.HERO), [n]), u = c.isAnimated && !i;
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
            location: p.dr.INGAME_REWARD_MODAL,
            sourceQuestContent: l
          })
        }), (0, a.jsx)(d.olH, {
          "data-migration-pending": true,
          className: w.close,
          withCircleBackground: true,
          onClick: s
        })]
      })]
    }), (0, a.jsx)(d.mzw, {
      "data-migration-pending": true,
      className: w.footerContainer,
      separator: false,
      children: (0, a.jsxs)("div", {
        className: w.gradient,
        children: [(0, a.jsx)(d.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: w.heading,
          children: N.intl.string(N.t["0/Yz+Y"])
        }), (0, a.jsx)(d.Text, {
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
  } = e, l = o.useMemo(() => (0, C.K)(n.config), [n]);
  return null == l ? null : (0, a.jsx)(x.A, {
    questOrQuests: n,
    questContent: h.jn.REWARD_MODAL,
    sourceQuestContent: s,
    overrideVisibility: true,
    children: () => (0, a.jsx)(R, {
      onClose: r,
      transitionState: i,
      quest: n,
      location: t,
      reward: l,
      sourceQuestContent: s
    })
  })
}