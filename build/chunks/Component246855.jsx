/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk335131 = require("./335131.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk43747 = require("./43747.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk115179 = require("./115179.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561549 = require("./561549.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js"),
  Chunk201284 = require("./201284.js");

function R(e) {
  let {
    onVideoLoaded: n
  } = e;
  return (0, a.jsx)(p.Z, {
    className: P.smallOrb,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    onCanPlayThrough: n,
    children: (0, a.jsx)("source", {
      src: Z.Z,
      type: "video/webm"
    })
  })
}

function E(e) {
  let {
    onVideoLoaded: n,
    isLoading: t
  } = e, i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [u, m] = r.useState(!i), b = (0, c.ZP)(), f = (0, l.apv)(b), x = f ? L.Z : w.Z, h = f ? A.Z : S.Z, C = r.useRef(null), _ = r.useRef(null), [j, g] = r.useState(false), [y, v] = r.useState(false), [N, O] = r.useState(false);
  r.useEffect(() => {
    j && y && N && n()
  }, [j, y, N, n]), r.useEffect(() => {
    t || i || setTimeout(() => {
      var e;
      null == (e = C.current) || e.play()
    }, 200)
  }, [t, i]);
  let T = r.useCallback(() => {
    if (!i) {
      var e;
      m(false), null == (e = _.current) || e.play()
    }
  }, [i]);
  return (0, a.jsxs)("div", {
    className: P.orbsContainer,
    children: [(0, a.jsx)(p.Z, {
      ref: _,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: s()(P.centerOrb, P.idleOrb, {
        [P.hidden]: u
      }),
      controls: false,
      onCanPlayThrough: r.useCallback(() => v(true), []),
      children: (0, a.jsx)("source", {
        src: h,
        type: "video/webm"
      })
    }), (0, a.jsx)(p.Z, {
      ref: C,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: P.centerOrb,
      controls: false,
      onCanPlayThrough: r.useCallback(() => g(true), []),
      onEnded: T,
      children: (0, a.jsx)("source", {
        src: x,
        type: "video/webm"
      })
    }), (0, a.jsxs)("div", {
      className: P.smallOrbContainer,
      children: [(0, a.jsx)(R, {
        onVideoLoaded: r.useCallback(() => O(true), [])
      }), (0, a.jsx)(R, {}), (0, a.jsx)(R, {}), (0, a.jsx)(R, {})]
    })]
  })
}

function D(e) {
  let {
    isLoading: n,
    onClose: t,
    orbsEarned: r,
    orbsBalance: i,
    onVideoLoaded: s
  } = e, o = async () => {
    (0, b.Y)({
      pageType: N.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: N.jXE.ORBS_REWARD_MODAL,
      ctaObject: N.qAy.CTA_TO_ORBS_SHOP
    }), await t(), (0, m.mK)({
      tab: O.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: u.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: P.contentContainer,
    children: [(0, a.jsx)(E, {
      isLoading: n,
      onVideoLoaded: s
    }), (0, a.jsxs)("div", {
      className: P.copyContainer,
      children: [(0, a.jsxs)("div", {
        className: P.heading,
        children: [(0, a.jsx)(x.M, {
          shouldUseThemeColor: true,
          className: P.orbsIcon
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: T.intl.formatToPlainString(T.t.YMor7k, {
            count: r
          })
        })]
      }), null != i ? (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: T.intl.format(T.t.g4t9aw, {
          orbsBalance: i,
          orbsBalanceHook: (e, n) => (0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-primary",
            tag: "span",
            children: e
          }, n)
        })
      }) : null]
    }), (0, a.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: T.intl.string(T.t.WYchde),
      onClick: o,
      fullWidth: true
    })]
  })
}

function k(e) {
  var n, t;
  let {
    initialQuest: i,
    onClose: s,
    transitionState: o,
    sourceQuestContent: l,
    location: c
  } = e, d = null != (t = (0, _.B4)(i.id)) ? t : i, u = (null == (n = d.userStatus) ? true : n.claimedAt) != null, {
    balance: m,
    error: p
  } = (0, f.A)(), b = (0, j.LM)(d.config), [x, N] = r.useState(u ? "success" : "loading"), [O, P] = r.useState(false), w = r.useCallback(() => {
    P(true)
  }, []);
  r.useEffect(() => {
    u || "loading" !== x || (0, h.QB)(d.id, C.y$.CROSS_PLATFORM, c).then(() => N("success")).catch(() => N("error"))
  }, [d.id, u, x, c]);
  let L = !O || "loading" === x || null == m && null == p,
    S = "error" === x || null == b || null == m && null != p;
  return (0, a.jsx)(g.Z, {
    onClose: s,
    transitionState: o,
    quest: d,
    sourceQuestContent: l,
    location: v.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: L,
    rewardContentHasError: S,
    rewardContent: S ? null : (0, a.jsx)(y.Z, {
      rewardName: T.intl.string(T.t.Lmysvd),
      children: (0, a.jsx)(D, {
        onClose: s,
        orbsEarned: b,
        orbsBalance: m,
        isLoading: L,
        onVideoLoaded: w
      })
    })
  })
}