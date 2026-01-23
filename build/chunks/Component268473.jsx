/** Chunk was on 67426 **/
/** chunk id: 268473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => W
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
  return (0, a.jsx)(x.A, {
    className: O.d0,
    playsInline: true,
    controls: false,
    autoPlay: true,
    loop: true,
    onCanPlayThrough: t,
    children: (0, a.jsx)("source", {
      src: T.A,
      type: "video/webm"
    })
  })
}

function P(e) {
  let {
    onVideoLoaded: t,
    isLoading: n
  } = e, r = (0, l.bG)([d.A], () => d.A.useReducedMotion), [u, m] = s.useState(!r), f = (0, c.Ay)(), h = (0, o.qB1)(f), _ = h ? L.A : E.A, p = h ? R.A : w.A, b = s.useRef(null), j = s.useRef(null), [g, y] = s.useState(false), [C, v] = s.useState(false), [A, N] = s.useState(false);
  s.useEffect(() => {
    g && C && A && t()
  }, [g, C, A, t]), s.useEffect(() => {
    n || r || setTimeout(() => {
      var e;
      null == (e = b.current) || e.play()
    }, 200)
  }, [n, r]);
  let S = s.useCallback(() => {
    if (!r) {
      var e;
      m(false), null == (e = j.current) || e.play()
    }
  }, [r]);
  return (0, a.jsxs)("div", {
    className: O.GF,
    children: [(0, a.jsx)(x.A, {
      ref: j,
      autoPlay: false,
      loop: true,
      muted: true,
      playsInline: true,
      className: i()(O.nH, O.EZ, {
        [O.R]: u
      }),
      controls: false,
      onCanPlayThrough: s.useCallback(() => v(true), []),
      children: (0, a.jsx)("source", {
        src: p,
        type: "video/webm"
      })
    }), (0, a.jsx)(x.A, {
      ref: b,
      autoPlay: false,
      muted: true,
      playsInline: true,
      className: O.nH,
      controls: false,
      onCanPlayThrough: s.useCallback(() => y(true), []),
      onEnded: S,
      children: (0, a.jsx)("source", {
        src: _,
        type: "video/webm"
      })
    }), (0, a.jsxs)("div", {
      className: O.Se,
      children: [(0, a.jsx)(D, {
        onVideoLoaded: s.useCallback(() => N(true), [])
      }), (0, a.jsx)(D, {}), (0, a.jsx)(D, {}), (0, a.jsx)(D, {})]
    })]
  })
}

function k(e) {
  let {
    isLoading: t,
    onClose: n,
    orbsEarned: s,
    orbsBalance: r,
    onVideoLoaded: i
  } = e, l = async () => {
    (0, f.Y)({
      pageType: A.liQ.GLOBAL_DISCOVERY_QUESTS,
      sectionType: A.JJy.ORBS_REWARD_MODAL,
      ctaObject: A.ZSU.CTA_TO_ORBS_SHOP
    }), await n(), (0, m.Cz)({
      tab: N.G2.ORBS,
      analyticsLocations: [],
      analyticsSource: u.A.QUEST_REWARD_MODAL
    })
  };
  return (0, a.jsxs)("div", {
    className: O.hQ,
    children: [(0, a.jsx)(P, {
      isLoading: t,
      onVideoLoaded: i
    }), (0, a.jsxs)("div", {
      className: O.dD,
      children: [(0, a.jsxs)("div", {
        className: O.R_,
        children: [(0, a.jsx)(_.B, {
          shouldUseThemeColor: true,
          className: O.Uu
        }), (0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: S.intl.formatToPlainString(S.t.YMor7k, {
            count: s
          })
        })]
      }), null != r ? (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: S.intl.format(S.t.g4t9aw, {
          orbsBalance: r,
          orbsBalanceHook: (e, t) => (0, a.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-strong",
            tag: "span",
            children: e
          }, t)
        })
      }) : null]
    }), (0, a.jsx)(o.Button, {
      variant: "secondary",
      size: "sm",
      text: S.intl.string(S.t.WYchde),
      onClick: l,
      fullWidth: true
    })]
  })
}

function W(e) {
  var t, n;
  let {
    initialQuest: r,
    onClose: i,
    transitionState: l,
    sourceQuestContent: o,
    location: c
  } = e, d = null != (t = (0, j.C5)(r.id)) ? t : r, u = (null == (n = d.userStatus) ? true : n.claimedAt) != null, {
    balance: m,
    error: x
  } = (0, h.W)(), f = (0, g._Z)(d.config), [_, A] = s.useState(u ? "success" : "loading"), [N, O] = s.useState(false), E = s.useCallback(() => {
    O(true)
  }, []);
  s.useEffect(() => {
    u || "loading" !== _ || (0, p.Oq)(d.id, b.pY.CROSS_PLATFORM, c).then(() => A("success")).catch(() => A("error"))
  }, [d.id, u, _, c]);
  let L = !N || "loading" === _ || null == m && null == x,
    w = "error" === _ || null == f || null == m && null != x;
  return (0, a.jsx)(C.A, {
    onClose: i,
    transitionState: l,
    quest: d,
    sourceQuestContent: o,
    location: v.rE.ORBS_REWARD_MODAL,
    isRewardContentLoading: L,
    rewardContentHasError: w,
    rewardContent: w ? null : (0, a.jsx)(y.A, {
      rewardName: S.intl.string(S.t.Lmysvd),
      children: (0, a.jsx)(k, {
        onClose: i,
        orbsEarned: f,
        orbsBalance: m,
        isLoading: L,
        onVideoLoaded: E
      })
    })
  })
}