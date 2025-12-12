/** Chunk was on 32869 **/
/** chunk id: 187311, original params: e,t,n (module,exports,require) **/
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
  Chunk187546 = require("./187546.jsx"),
  Chunk285910 = require("./285910.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk981631 = require("./981631.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk796943 = require("./796943.js"),
  Chunk582425 = require("./582425.js"),
  Chunk345554 = require("./345554.js"),
  Chunk88490 = require("./88490.js"),
  Chunk466674 = require("./466674.js"),
  Chunk201284 = require("./201284.js");

function R(e) {
  let {
    onVideoLoaded: t
  } = e;
  return (0, a.jsx)(f.Z, {
    className: w.smallOrb,
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

function E(e) {
  let {
    onVideoLoaded: t,
    isLoading: n
  } = e, i = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [u, m] = r.useState(!i), p = (0, c.ZP)(), x = (0, l.apv)(p), h = x ? A.Z : T.Z, b = x ? S.Z : L.Z, C = r.useRef(null), j = r.useRef(null), [g, _] = r.useState(false), [v, y] = r.useState(false), [N, O] = r.useState(false);
  r.useEffect(() => {
    g && v && N && t()
  }, [g, v, N, t]), r.useEffect(() => {
    n || i || setTimeout(() => {
      var e;
      null == (e = C.current) || e.play()
    }, 200)
  }, [n, i]);
  let P = r.useCallback(() => {
    if (!i) {
      var e;
      m(false), null == (e = j.current) || e.play()
    }
  }, [i]);
  return (0, a.jsxs)("div", {
    className: w.orbsContainer,
    children: [(0, a.jsx)(f.Z, {
      ref: j,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: s()(w.centerOrb, w.idleOrb, {
        [w.hidden]: u
      }),
      controls: false,
      onCanPlayThrough: r.useCallback(() => y(true), []),
      children: (0, a.jsx)("source", {
        src: b,
        type: "video/webm"
      })
    }), (0, a.jsx)(f.Z, {
      ref: C,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: w.centerOrb,
      controls: false,
      onCanPlayThrough: r.useCallback(() => _(true), []),
      onEnded: P,
      children: (0, a.jsx)("source", {
        src: h,
        type: "video/webm"
      })
    }), (0, a.jsxs)("div", {
      className: w.smallOrbContainer,
      children: [(0, a.jsx)(R, {
        onVideoLoaded: r.useCallback(() => O(true), [])
      }), (0, a.jsx)(R, {}), (0, a.jsx)(R, {}), (0, a.jsx)(R, {})]
    })]
  })
}

function D(e) {
  let {
    isLoading: t,
    onClose: n,
    orbsEarned: r,
    orbsBalance: i,
    onVideoLoaded: s
  } = e, o = async () => {
    (0, p.Y)({
      pageType: N.ZY5.GLOBAL_DISCOVERY_QUESTS,
      sectionType: N.jXE.ORBS_REWARD_MODAL,
      ctaObject: N.qAy.CTA_TO_ORBS_SHOP
    }), await n(), (0, m.mK)({
      tab: O.AW.ORBS,
      analyticsLocations: [],
      analyticsSource: u.Z.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: w.contentContainer,
    children: [(0, a.jsx)(E, {
      isLoading: t,
      onVideoLoaded: s
    }), (0, a.jsxs)("div", {
      className: w.copyContainer,
      children: [(0, a.jsxs)("div", {
        className: w.heading,
        children: [(0, a.jsx)(h.M, {
          shouldUseThemeColor: true,
          className: w.orbsIcon
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: P.intl.formatToPlainString(P.t.YMor7k, {
            count: r
          })
        })]
      }), null != i ? (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: P.intl.format(P.t.g4t9aw, {
          orbsBalance: i,
          orbsBalanceHook: (e, t) => (0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            tag: "span",
            children: e
          }, t)
        })
      }) : null]
    }), (0, a.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: P.intl.string(P.t.WYchde),
      onClick: o,
      fullWidth: true
    })]
  })
}

function k(e) {
  var t, n;
  let {
    initialQuest: i,
    onClose: s,
    transitionState: o,
    sourceQuestContent: l,
    location: c
  } = e, d = null != (n = (0, j.B4)(i.id)) ? n : i, u = (null == (t = d.userStatus) ? true : t.claimedAt) != null, {
    balance: m,
    error: f
  } = (0, x.A)(), p = (0, g.LM)(d.config), [h, N] = r.useState(u ? "success" : "loading"), [O, w] = r.useState(false), T = r.useCallback(() => {
    w(true)
  }, []);
  r.useEffect(() => {
    u || "loading" !== h || (0, b.QB)(d.id, C.y$.CROSS_PLATFORM, c).then(() => N("success")).catch(() => N("error"))
  }, [d.id, u, h, c]);
  let A = !O || "loading" === h || null == m && null == f,
    L = "error" === h || null == p || null == m && null != f;
  return (0, a.jsx)(v.Z, {
    onClose: s,
    transitionState: o,
    quest: d,
    sourceQuestContent: l,
    location: y.dr.ORBS_REWARD_MODAL,
    isRewardContentLoading: A,
    rewardContentHasError: L,
    rewardContent: L ? null : (0, a.jsx)(_.Z, {
      rewardName: P.intl.string(P.t.Lmysvd),
      children: (0, a.jsx)(D, {
        onClose: s,
        orbsEarned: p,
        orbsBalance: m,
        isLoading: A,
        onVideoLoaded: T
      })
    })
  })
}