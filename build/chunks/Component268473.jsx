/** Chunk was on 67426 **/
/** chunk id: 268473, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk979286 = require("./979286.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk318346 = require("./318346.js"),
  Chunk761705 = require("./761705.js"),
  Chunk106799 = require("./106799.jsx"),
  Chunk829219 = require("./829219.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk92246 = require("./92246.js"),
  Chunk109174 = require("./109174.jsx"),
  Chunk524728 = require("./524728.jsx"),
  Chunk654487 = require("./654487.js"),
  Chunk652215 = require("./652215.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176741 = require("./176741.js"),
  Chunk627898 = require("./627898.js"),
  Chunk341744 = require("./341744.js"),
  Chunk484252 = require("./484252.js"),
  Chunk460290 = require("./460290.js"),
  Chunk181713 = require("./181713.js");

function k(e) {
  let {
    onVideoLoaded: t
  } = e;
  return (0, s.jsx)(f.A, {
    className: E.d0,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    onCanPlayThrough: t,
    children: (0, s.jsx)("source", {
      src: T.A,
      type: "video/webm"
    })
  })
}

function D(e) {
  let {
    onVideoLoaded: t,
    isLoading: a
  } = e, i = (0, r.bG)([o.A], () => o.A.useReducedMotion), [u, m] = n.useState(!i), x = (0, d.Ay)(), b = (0, l.qB1)(x), h = b ? O.A : L.A, j = b ? w.A : R.A, p = n.useRef(null), g = n.useRef(null), [v, y] = n.useState(false), [A, _] = n.useState(false), [C, N] = n.useState(false);
  n.useEffect(() => {
    v && A && C && t()
  }, [v, A, C, t]), n.useEffect(() => {
    a || i || setTimeout(() => {
      var e;
      null == (e = p.current) || e.play()
    }, 200)
  }, [a, i]);
  let S = n.useCallback(() => {
    if (!i) {
      var e;
      m(false), null == (e = g.current) || e.play()
    }
  }, [i]);
  return (0, s.jsxs)("div", {
    className: E.GF,
    children: [(0, s.jsx)(f.A, {
      ref: g,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: c()(E.nH, E.EZ, {
        [E.R]: u
      }),
      controls: false,
      onCanPlayThrough: n.useCallback(() => _(true), []),
      children: (0, s.jsx)("source", {
        src: j,
        type: "video/webm"
      })
    }), (0, s.jsx)(f.A, {
      ref: p,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: E.nH,
      controls: false,
      onCanPlayThrough: n.useCallback(() => y(true), []),
      onEnded: S,
      children: (0, s.jsx)("source", {
        src: h,
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: E.Se,
      children: [(0, s.jsx)(k, {
        onVideoLoaded: n.useCallback(() => N(true), [])
      }), (0, s.jsx)(k, {}), (0, s.jsx)(k, {}), (0, s.jsx)(k, {})]
    })]
  })
}

function P(e) {
  let {
    isLoading: t,
    onClose: a,
    orbsEarned: n,
    orbsBalance: i,
    onVideoLoaded: c
  } = e, r = async () => {
    (0, x.Y)({
      pageType: C.liQ.GLOBAL_DISCOVERY_QUESTS,
      sectionType: C.JJy.ORBS_REWARD_MODAL,
      ctaObject: C.ZSU.CTA_TO_ORBS_SHOP
    }), await a(), (0, m.Cz)({
      tab: N.G2.ORBS,
      analyticsLocations: [],
      analyticsSource: u.A.QUEST_REWARD_MODAL
    })
  };
  return (0, s.jsxs)("div", {
    className: E.hQ,
    children: [(0, s.jsx)(D, {
      isLoading: t,
      onVideoLoaded: c
    }), (0, s.jsxs)("div", {
      className: E.dD,
      children: [(0, s.jsxs)("div", {
        className: E.R_,
        children: [(0, s.jsx)(h.B, {
          shouldUseThemeColor: true,
          className: E.Uu
        }), (0, s.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: S.intl.formatToPlainString(S.t.YMor7k, {
            count: n
          })
        })]
      }), null != i ? (0, s.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: S.intl.format(S.t.g4t9aw, {
          orbsBalance: i,
          orbsBalanceHook: (e, t) => (0, s.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            tag: "span",
            children: e
          }, t)
        })
      }) : null]
    }), (0, s.jsx)(l.Button, {
      variant: "secondary",
      size: "sm",
      text: S.intl.string(S.t.WYchde),
      onClick: r,
      fullWidth: true
    })]
  })
}

function W(e) {
  var t, a;
  let {
    initialQuest: i,
    onClose: c,
    transitionState: r,
    sourceQuestContent: l,
    location: d
  } = e, o = null != (t = (0, g.C5)(i.id)) ? t : i, u = (null == (a = o.userStatus) ? true : a.claimedAt) != null, {
    balance: m,
    error: f
  } = (0, b.W)(), x = (0, v._Z)(o.config), [h, C] = n.useState(u ? "success" : "loading"), [N, E] = n.useState(false), L = n.useCallback(() => {
    E(true)
  }, []);
  n.useEffect(() => {
    u || "loading" !== h || (0, j.Oq)(o.id, p.pY.CROSS_PLATFORM, d).then(() => C("success")).catch(() => C("error"))
  }, [o.id, u, h, d]);
  let O = !N || "loading" === h || null == m && null == f,
    R = "error" === h || null == x || null == m && null != f;
  return (0, s.jsx)(A.A, {
    onClose: c,
    transitionState: r,
    quest: o,
    sourceQuestContent: l,
    location: _.rE.ORBS_REWARD_MODAL,
    isRewardContentLoading: O,
    rewardContentHasError: R,
    rewardContent: R ? null : (0, s.jsx)(y.A, {
      rewardName: S.intl.string(S.t.Lmysvd),
      children: (0, s.jsx)(P, {
        onClose: c,
        orbsEarned: x,
        orbsBalance: m,
        isLoading: O,
        onVideoLoaded: L
      })
    })
  })
}