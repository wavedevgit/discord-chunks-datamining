/** Chunk was on 74560 **/
/** chunk id: 246855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
  Chunk497505 = require("./497505.js"),
  Chunk515108 = require("./515108.jsx"),
  Chunk291967 = require("./291967.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk651353 = require("./651353.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js"),
  Chunk201284 = require("./201284.js");

function w(e) {
  let {
    onVideoLoaded: t
  } = e;
  return (0, a.jsx)(p.Z, {
    className: N.smallOrb,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    onCanPlayThrough: t,
    children: (0, a.jsx)("source", {
      src: Z.Z,
      type: "video/webm"
    })
  })
}

function O(e) {
  let {
    onVideoLoaded: t,
    isLoading: n
  } = e, i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [u, m] = r.useState(!i), f = (0, c.ZP)(), C = (0, l.apv)(f), _ = C ? S.Z : A.Z, b = C ? L.Z : T.Z, h = r.useRef(null), x = r.useRef(null), [g, y] = r.useState(false), [j, v] = r.useState(false), [E, R] = r.useState(false);
  r.useEffect(() => {
    g && j && E && t()
  }, [g, j, E, t]), r.useEffect(() => {
    n || i || setTimeout(() => {
      var e;
      null == (e = h.current) || e.play()
    }, 200)
  }, [n, i]);
  let Z = r.useCallback(() => {
    if (!i) {
      var e;
      m(false), null == (e = x.current) || e.play()
    }
  }, [i]);
  return (0, a.jsxs)("div", {
    className: N.orbsContainer,
    children: [(0, a.jsx)(p.Z, {
      ref: x,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: s()(N.centerOrb, N.idleOrb, {
        [N.hidden]: u
      }),
      controls: false,
      onCanPlayThrough: r.useCallback(() => v(true), []),
      children: (0, a.jsx)("source", {
        src: b,
        type: "video/webm"
      })
    }), (0, a.jsx)(p.Z, {
      ref: h,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: N.centerOrb,
      controls: false,
      onCanPlayThrough: r.useCallback(() => y(true), []),
      onEnded: Z,
      children: (0, a.jsx)("source", {
        src: _,
        type: "video/webm"
      })
    }), (0, a.jsxs)("div", {
      className: N.smallOrbContainer,
      children: [(0, a.jsx)(w, {
        onVideoLoaded: r.useCallback(() => R(true), [])
      }), (0, a.jsx)(w, {}), (0, a.jsx)(w, {}), (0, a.jsx)(w, {})]
    })]
  })
}

function P(e) {
  let {
    isLoading: t,
    onClose: n,
    orbsEarned: r,
    orbsBalance: i,
    onVideoLoaded: s
  } = e, o = async () => {
    (0, f.Y)({
      pageType: v.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: v.jXE.ORBS_REWARD_MODAL,
      ctaObject: v.qAy.CTA_TO_ORBS_SHOP
    }), await n(), (0, m.mK)({
      tab: E.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: u.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: N.contentContainer,
    children: [(0, a.jsx)(O, {
      isLoading: t,
      onVideoLoaded: s
    }), (0, a.jsxs)("div", {
      className: N.copyContainer,
      children: [(0, a.jsxs)("div", {
        className: N.heading,
        children: [(0, a.jsx)(_.M, {
          shouldUseThemeColor: true,
          className: N.orbsIcon
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: R.intl.formatToPlainString(R.t.YMor7k, {
            count: r
          })
        })]
      }), null != i ? (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: R.intl.format(R.t.g4t9aw, {
          orbsBalance: i,
          orbsBalanceHook: (e, t) => (0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-primary",
            tag: "span",
            children: e
          }, t)
        })
      }) : null]
    }), (0, a.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: R.intl.string(R.t.WYchde),
      onClick: o,
      fullWidth: true
    })]
  })
}

function I(e) {
  var t;
  let {
    quest: n,
    onClose: i,
    transitionState: s,
    sourceQuestContent: o,
    location: l
  } = e, c = (null == (t = n.userStatus) ? true : t.claimedAt) != null, {
    balance: d,
    error: u
  } = (0, C.A)(), m = (0, b.LM)(n.config), [p, f] = r.useState(c ? "success" : "loading"), [_, v] = r.useState(false), E = r.useCallback(() => {
    v(true)
  }, []);
  r.useEffect(() => {
    c || "loading" !== p || (0, h.QB)(n.id, x.y$.CROSS_PLATFORM, l).then(() => f("success")).catch(() => f("error"))
  }, [n.id, c, p, l]);
  let N = !_ || "loading" === p || null == d && null == u,
    A = "error" === p || null == m || null == d && null != u;
  return (0, a.jsx)(g.Z, {
    onClose: i,
    transitionState: s,
    quest: n,
    sourceQuestContent: o,
    location: j.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: N,
    rewardContentHasError: A,
    rewardContent: A ? null : (0, a.jsx)(y.Z, {
      rewardName: R.intl.string(R.t.Lmysvd),
      children: (0, a.jsx)(P, {
        onClose: i,
        orbsEarned: m,
        orbsBalance: d,
        isLoading: N,
        onVideoLoaded: E
      })
    })
  })
}