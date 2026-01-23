/** Chunk was on web.js **/
/** chunk id: 919470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk116833 = require("./116833.js"),
  Chunk397927 = require("./397927.js"),
  Chunk301679 = require("./301679.jsx"),
  Chunk149757 = require("./149757.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {
    bronze: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END
    },
    silver: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END
    },
    gold: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END
    },
    platinum: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END
    },
    diamond: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END
    },
    emerald: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END
    },
    ruby: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END
    },
    opal: {
      type: "custom",
      start: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
      end: Chunk827734.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END
    }
  },
  g = e => {
    let {
      title: t,
      body: n,
      showGraphic: a,
      showActions: f,
      badgeId: _,
      showProgress: g,
      progressCircleText: E,
      progressCirclePercent: y,
      progressCircleUrgency: b,
      delay: O,
      size: v,
      gradientColor: A,
      estimatedTooltipHeight: I
    } = e, S = i.useRef(null), T = i.useRef(null), C = i.useMemo(() => ({
      bronze: u.Ac.PREMIUM_TENURE_1_MONTH,
      silver: u.Ac.PREMIUM_TENURE_3_MONTH,
      gold: u.Ac.PREMIUM_TENURE_6_MONTH,
      platinum: u.Ac.PREMIUM_TENURE_12_MONTH,
      diamond: u.Ac.PREMIUM_TENURE_24_MONTH,
      emerald: u.Ac.PREMIUM_TENURE_36_MONTH,
      ruby: u.Ac.PREMIUM_TENURE_60_MONTH,
      opal: u.Ac.PREMIUM_TENURE_72_MONTH
    })[_], [_]), N = null != C ? (0, c.I)(C) : null, w = i.useMemo(() => {
      if (null == C) return "";
      let e = u.VD[C];
      return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase()
    }, [C]), R = i.useMemo(() => {
      if (!a || null == N) return;
      let e = g ? {
        progressCircleText: E,
        progressCirclePercent: y,
        progressCircleUrgency: b
      } : {};
      return {
        type: "dynamic",
        component: s.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
        aspectRatio: "6/4",
        props: p({
          src: N,
          alt: w
        }, e)
      }
    }, [a, N, w, g, E, y, b]), P = {
      title: t,
      body: n,
      graphic: R,
      actions: i.useMemo(() => {
        if (f) return [{
          text: "Got it",
          variant: "primary"
        }]
      }, [f]),
      delay: O,
      size: v,
      gradientColor: i.useMemo(() => "string" == typeof A && A in m ? m[A] : A, [A]),
      estimatedTooltipHeight: I
    };
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "Hover or focus these buttons."
      }), (0, r.jsxs)("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          marginTop: "200px"
        },
        children: [(0, r.jsx)(l.L, h(p({
          targetElementRef: S
        }, P), {
          children: (0, r.jsx)(o.Button, {
            buttonRef: S,
            variant: "primary",
            text: "Left"
          })
        })), (0, r.jsx)(l.L, h(p({
          targetElementRef: T
        }, P), {
          children: (0, r.jsx)(o.Button, {
            buttonRef: T,
            variant: "primary",
            text: "Right"
          })
        }))]
      })]
    })
  }