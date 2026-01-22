/** Chunk was on web.js **/
/** chunk id: 141614, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk473145 = require("./473145.js"),
  Chunk963894 = require("./963894.jsx"),
  Chunk711624 = require("./711624.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk870168 = require("./870168.js");
let h = 200,
  m = 250,
  g = 36,
  E = 660,
  b = [Chunk652215.TVA.NONE, Chunk652215.TVA.TIER_1, Chunk652215.TVA.TIER_2, Chunk652215.TVA.TIER_3];

function y(e) {
  let {
    fillFactor: t,
    guildBoostCount: n,
    premiumTier: r,
    isRevealed: a,
    useReducedMotion: s
  } = e, [l, c] = i.useState(s ? r : false), [u, p] = i.useState(0 === n), [_, m] = i.useState(false), b = i.useRef(true);

  function y(e) {
    let {
      widthFactor: t
    } = e;
    for (let [e, n] of Object.entries(d.p).reverse())
      if (t >= n - g / 2 / E) {
        c(Number(e));
        break
      }
  }
  let {
    widthFactor: O
  } = (0, o.zhh)({
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
      p(true), r === f.TVA.TIER_3 && (m(true), window.setTimeout(() => {
        b.current && m(false)
      }, h))
    }
  });
  return i.useEffect(() => () => {
    b.current = false
  }, []), {
    isProgressBarAnimationComplete: u,
    progressBarFillWidthFactor: O,
    setShouldFireConfetti: m,
    shouldFireConfetti: _,
    tierMarkerAnimationPosition: l
  }
}

function O(e) {
  let {
    guild: t
  } = e, n = (0, s.bG)([l.A], () => l.A.useReducedMotion), [o, h] = i.useState(false), [g, E] = i.useState(0), O = i.useRef(null), A = o || n, {
    fillFactor: v,
    totalAvailableBoostsCount: S
  } = i.useMemo(() => (0, c.$U)(t), [t]), {
    progressBarFillWidthFactor: I,
    isProgressBarAnimationComplete: T,
    setShouldFireConfetti: C,
    shouldFireConfetti: N,
    tierMarkerAnimationPosition: R
  } = y({
    fillFactor: v,
    isRevealed: A,
    useReducedMotion: n,
    premiumTier: t.premiumTier,
    guildBoostCount: S
  });
  return i.useEffect(() => {
    let e = window.setTimeout(() => {
      h(true)
    }, m);
    return () => {
      window.clearTimeout(e)
    }
  }, []), (0, r.jsxs)("div", {
    className: _.hr,
    role: "progressbar",
    "aria-valuenow": S,
    "aria-valuetext": t.premiumTier === f.TVA.NONE ? p.intl.formatToPlainString(p.t.Ukqm9v, {
      numSubscriptionsApplied: S
    }) : p.intl.formatToPlainString(p.t.qWunaU, {
      numSubscriptionsApplied: S,
      tierName: (0, c.gb)(t.premiumTier, {
        useLevels: false
      })
    }),
    children: [(0, r.jsxs)("div", {
      className: _.VZ,
      children: [(0, r.jsx)(a.animated.div, {
        className: _.SX,
        style: {
          width: I.to({
            range: [0, 1],
            output: [0, 100]
          }).to(e => "".concat(e, "%"))
        }
      }), (0, r.jsx)("div", {
        className: _.mv
      })]
    }), b.map(e => (0, r.jsx)(d.A, {
      confettiTriggerRef: O,
      guild: t,
      isProgressBarAnimationComplete: T,
      setConfettiCount: E,
      setShouldFireConfetti: C,
      tier: e,
      tierMarkerAnimationPosition: R,
      totalAvailableBoostsCount: S,
      children: (0, c.gb)(e)
    }, e)), (0, r.jsx)(u.A, {
      confettiCount: g,
      confettiTriggerRef: O,
      isFiring: N
    })]
  })
}