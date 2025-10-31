/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
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
    className: T.smallOrb,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    onCanPlayThrough: n,
    children: (0, a.jsx)("source", {
      src: E.Z,
      type: "video/webm"
    })
  })
}

function A(e) {
  let {
    onVideoLoaded: n,
    isLoading: t
  } = e, i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [u, m] = r.useState(!i), b = (0, c.ZP)(), f = (0, l.apv)(b), x = f ? P.Z : w.Z, h = f ? L.Z : S.Z, C = r.useRef(null), _ = r.useRef(null), [j, g] = r.useState(false), [y, v] = r.useState(false), [N, O] = r.useState(false);
  r.useEffect(() => {
    j && y && N && n()
  }, [j, y, N, n]), r.useEffect(() => {
    t || i || setTimeout(() => {
      var e;
      null == (e = C.current) || e.play()
    }, 200)
  }, [t, i]);
  let E = r.useCallback(() => {
    if (!i) {
      var e;
      m(false), null == (e = _.current) || e.play()
    }
  }, [i]);
  return (0, a.jsxs)("div", {
    className: T.orbsContainer,
    children: [(0, a.jsx)(p.Z, {
      ref: _,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: s()(T.centerOrb, T.idleOrb, {
        [T.hidden]: u
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
      className: T.centerOrb,
      controls: false,
      onCanPlayThrough: r.useCallback(() => g(true), []),
      onEnded: E,
      children: (0, a.jsx)("source", {
        src: x,
        type: "video/webm"
      })
    }), (0, a.jsxs)("div", {
      className: T.smallOrbContainer,
      children: [(0, a.jsx)(R, {
        onVideoLoaded: r.useCallback(() => O(true), [])
      }), (0, a.jsx)(R, {}), (0, a.jsx)(R, {}), (0, a.jsx)(R, {})]
    })]
  })
}

function Z(e) {
  let {
    isLoading: n,
    onClose: t,
    orbsEarned: r,
    orbsBalance: i,
    onVideoLoaded: s
  } = e, o = async () => {
    (0, b.Y)({
      pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: v.jXE.ORBS_REWARD_MODAL,
      ctaObject: v.qAy.CTA_TO_ORBS_SHOP
    }), await t(), (0, m.mK)({
      tab: N.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: u.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: T.contentContainer,
    children: [(0, a.jsx)(A, {
      isLoading: n,
      onVideoLoaded: s
    }), (0, a.jsxs)("div", {
      className: T.copyContainer,
      children: [(0, a.jsxs)("div", {
        className: T.heading,
        children: [(0, a.jsx)(x.M, {
          shouldUseThemeColor: true,
          className: T.orbsIcon
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: O.intl.formatToPlainString(O.t.YMor7k, {
            count: r
          })
        })]
      }), null != i ? (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: O.intl.format(O.t.g4t9aw, {
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
      text: O.intl.string(O.t.WYchde),
      onClick: o,
      fullWidth: true
    })]
  })
}

function D(e) {
  var n;
  let {
    quest: t,
    onClose: i,
    transitionState: s,
    sourceQuestContent: o,
    location: l
  } = e, c = (null == (n = t.userStatus) ? true : n.claimedAt) != null, {
    balance: d,
    error: u
  } = (0, f.A)(), m = (0, C.LM)(t.config), [p, b] = r.useState(c ? "success" : "loading"), [x, v] = r.useState(false), N = r.useCallback(() => {
    v(true)
  }, []);
  r.useEffect(() => {
    c || "loading" !== p || (0, h.QB)(t.id, _.y$.CROSS_PLATFORM, l).then(() => b("success")).catch(() => b("error"))
  }, [t.id, c, p, l]);
  let T = !x || "loading" === p || null == d && null == u,
    w = "error" === p || null == m || null == d && null != u;
  return (0, a.jsx)(j.Z, {
    onClose: i,
    transitionState: s,
    quest: t,
    sourceQuestContent: o,
    location: y.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: T,
    rewardContentHasError: w,
    rewardContent: w ? null : (0, a.jsx)(g.Z, {
      rewardName: O.intl.string(O.t.Lmysvd),
      children: (0, a.jsx)(Z, {
        onClose: i,
        orbsEarned: m,
        orbsBalance: d,
        isLoading: T,
        onVideoLoaded: N
      })
    })
  })
}