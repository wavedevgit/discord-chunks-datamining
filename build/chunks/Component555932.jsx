/** Chunk was on web.js **/
/** chunk id: 555932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk807794 = require("./807794.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk267642 = require("./267642.js"),
  Chunk198466 = require("./198466.jsx"),
  Chunk436444 = require("./436444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993346 = require("./993346.js");
let m = 200,
  h = 250,
  g = 36,
  E = 660,
  b = [Chunk981631.Eu4.NONE, Chunk981631.Eu4.TIER_1, Chunk981631.Eu4.TIER_2, Chunk981631.Eu4.TIER_3];

function y(e) {
  let {
    fillFactor: t,
    guildBoostCount: n,
    premiumTier: r,
    isRevealed: a,
    useReducedMotion: o
  } = e, [l, c] = i.useState(o ? r : false), [u, p] = i.useState(0 === n), [_, h] = i.useState(false), b = i.useRef(true);

  function y(e) {
    let {
      widthFactor: t
    } = e;
    for (let [e, n] of Object.entries(d.P).reverse())
      if (t >= n - g / 2 / E) {
        c(Number(e));
        break
      }
  }
  let {
    widthFactor: O
  } = (0, s.q_F)({
    from: {
      widthFactor: 0
    },
    to: {
      widthFactor: a ? t : 0
    },
    config: {
      tension: 15,
      friction: 7,
      clamp: true
    },
    onChange: y,
    onStart: () => {
      p(false)
    },
    onRest: () => {
      p(true), r === f.Eu4.TIER_3 && (h(true), window.setTimeout(() => {
        b.current && h(false)
      }, m))
    }
  });
  return i.useEffect(() => () => {
    b.current = false
  }, []), {
    isProgressBarAnimationComplete: u,
    progressBarFillWidthFactor: O,
    setShouldFireConfetti: h,
    shouldFireConfetti: _,
    tierMarkerAnimationPosition: l
  }
}

function O(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), [s, m] = i.useState(false), [g, E] = i.useState(0), O = i.useRef(null), v = s || n, {
    fillFactor: S,
    totalAvailableBoostsCount: I
  } = i.useMemo(() => (0, c.Hl)(t), [t]), {
    progressBarFillWidthFactor: T,
    isProgressBarAnimationComplete: C,
    setShouldFireConfetti: A,
    shouldFireConfetti: N,
    tierMarkerAnimationPosition: P
  } = y({
    fillFactor: S,
    isRevealed: v,
    useReducedMotion: n,
    premiumTier: t.premiumTier,
    guildBoostCount: I
  });
  return i.useEffect(() => {
    let e = window.setTimeout(() => {
      m(true)
    }, h);
    return () => {
      window.clearTimeout(e)
    }
  }, []), (0, r.jsxs)("div", {
    className: _.progressBar,
    role: "progressbar",
    "aria-valuenow": I,
    "aria-valuetext": t.premiumTier === f.Eu4.NONE ? p.intl.formatToPlainString(p.t.Ukqm9v, {
      numSubscriptionsApplied: I
    }) : p.intl.formatToPlainString(p.t.qWunaU, {
      numSubscriptionsApplied: I,
      tierName: (0, c.nW)(t.premiumTier, {
        useLevels: false
      })
    }),
    children: [(0, r.jsxs)("div", {
      className: _.progressBarScrubber,
      children: [(0, r.jsx)(a.animated.div, {
        className: _.progressBarFill,
        style: {
          width: T.to({
            range: [0, 1],
            output: [0, 100]
          }).to(e => "".concat(e, "%"))
        }
      }), (0, r.jsx)("div", {
        className: _.progressBarTrack
      })]
    }), b.map(e => (0, r.jsx)(d.Z, {
      confettiTriggerRef: O,
      guild: t,
      isProgressBarAnimationComplete: C,
      setConfettiCount: E,
      setShouldFireConfetti: A,
      tier: e,
      tierMarkerAnimationPosition: P,
      totalAvailableBoostsCount: I,
      children: (0, c.nW)(e)
    }, e)), (0, r.jsx)(u.Z, {
      confettiCount: g,
      confettiTriggerRef: O,
      isFiring: N
    })]
  })
}