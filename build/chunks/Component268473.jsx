/** Chunk was on 67426 **/
/** chunk id: 268473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function D(e) {
  let {
    onVideoLoaded: t
  } = e;
  return (0, s.jsx)(x.A, {
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

function P(e) {
  let {
    onVideoLoaded: t,
    isLoading: n
  } = e, r = (0, l.bG)([d.A], () => d.A.useReducedMotion), [u, m] = a.useState(!r), f = (0, c.Ay)(), h = (0, o.qB1)(f), _ = h ? S.A : L.A, p = h ? w.A : R.A, j = a.useRef(null), b = a.useRef(null), [g, C] = a.useState(false), [v, A] = a.useState(false), [y, N] = a.useState(false);
  a.useEffect(() => {
    g && v && y && t()
  }, [g, v, y, t]), a.useEffect(() => {
    n || r || setTimeout(() => {
      var e;
      null == (e = j.current) || e.play()
    }, 200)
  }, [n, r]);
  let O = a.useCallback(() => {
    if (!r) {
      var e;
      m(false), null == (e = b.current) || e.play()
    }
  }, [r]);
  return (0, s.jsxs)("div", {
    className: E.GF,
    children: [(0, s.jsx)(x.A, {
      ref: b,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: i()(E.nH, E.EZ, {
        [E.R]: u
      }),
      controls: false,
      onCanPlayThrough: a.useCallback(() => A(true), []),
      children: (0, s.jsx)("source", {
        src: p,
        type: "video/webm"
      })
    }), (0, s.jsx)(x.A, {
      ref: j,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: E.nH,
      controls: false,
      onCanPlayThrough: a.useCallback(() => C(true), []),
      onEnded: O,
      children: (0, s.jsx)("source", {
        src: _,
        type: "video/webm"
      })
    }), (0, s.jsxs)("div", {
      className: E.Se,
      children: [(0, s.jsx)(D, {
        onVideoLoaded: a.useCallback(() => N(true), [])
      }), (0, s.jsx)(D, {}), (0, s.jsx)(D, {}), (0, s.jsx)(D, {})]
    })]
  })
}

function k(e) {
  let {
    isLoading: t,
    onClose: n,
    orbsEarned: a,
    orbsBalance: r,
    onVideoLoaded: i
  } = e, l = async () => {
    (0, f.Y)({
      pageType: y.liQ.GLOBAL_DISCOVERY_QUESTS,
      sectionType: y.JJy.ORBS_REWARD_MODAL,
      ctaObject: y.ZSU.CTA_TO_ORBS_SHOP
    }), await n(), (0, m.Cz)({
      tab: N.G2.ORBS,
      analyticsLocations: [],
      analyticsSource: u.A.QUEST_REWARD_MODAL
    })
  };
  return (0, s.jsxs)("div", {
    className: E.hQ,
    children: [(0, s.jsx)(P, {
      isLoading: t,
      onVideoLoaded: i
    }), (0, s.jsxs)("div", {
      className: E.dD,
      children: [(0, s.jsxs)("div", {
        className: E.R_,
        children: [(0, s.jsx)(_.B, {
          shouldUseThemeColor: true,
          className: E.Uu
        }), (0, s.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: O.intl.formatToPlainString(O.t.YMor7k, {
            count: a
          })
        })]
      }), null != r ? (0, s.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: O.intl.format(O.t.g4t9aw, {
          orbsBalance: r,
          orbsBalanceHook: (e, t) => (0, s.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            tag: "span",
            children: e
          }, t)
        })
      }) : null]
    }), (0, s.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: O.intl.string(O.t.WYchde),
      onClick: l,
      fullWidth: true
    })]
  })
}

function M(e) {
  var t, n;
  let {
    initialQuest: r,
    onClose: i,
    transitionState: l,
    sourceQuestContent: o,
    location: c
  } = e, d = null != (t = (0, b.C5)(r.id)) ? t : r, u = (null == (n = d.userStatus) ? true : n.claimedAt) != null, {
    balance: m,
    error: x
  } = (0, h.W)(), f = (0, g._Z)(d.config), [_, y] = a.useState(u ? "success" : "loading"), [N, E] = a.useState(false), L = a.useCallback(() => {
    E(true)
  }, []);
  a.useEffect(() => {
    u || "loading" !== _ || (0, p.Oq)(d.id, j.pY.CROSS_PLATFORM, c).then(() => y("success")).catch(() => y("error"))
  }, [d.id, u, _, c]);
  let S = !N || "loading" === _ || null == m && null == x,
    R = "error" === _ || null == f || null == m && null != x;
  return (0, s.jsx)(v.A, {
    onClose: i,
    transitionState: l,
    quest: d,
    sourceQuestContent: o,
    location: A.rE.ORBS_REWARD_MODAL,
    isRewardContentLoading: S,
    rewardContentHasError: R,
    rewardContent: R ? null : (0, s.jsx)(C.A, {
      rewardName: O.intl.string(O.t.Lmysvd),
      children: (0, s.jsx)(k, {
        onClose: i,
        orbsEarned: f,
        orbsBalance: m,
        isLoading: S,
        onVideoLoaded: L
      })
    })
  })
}