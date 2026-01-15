/** Chunk was on web.js **/
/** chunk id: 10326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk799607 = require("./799607.jsx"),
  Chunk787528 = require("./787528.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

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
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END
    },
    silver: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END
    },
    gold: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END
    },
    platinum: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END
    },
    diamond: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END
    },
    emerald: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END
    },
    ruby: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END
    },
    opal: {
      type: "custom",
      start: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
      end: Chunk692547.Z.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END
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
      progressCirclePercent: b,
      progressCircleUrgency: y,
      delay: O,
      size: v,
      gradientColor: S,
      estimatedTooltipHeight: I
    } = e, T = i.useRef(null), C = i.useRef(null), A = i.useMemo(() => ({
      bronze: u.VU.PREMIUM_TENURE_1_MONTH,
      silver: u.VU.PREMIUM_TENURE_3_MONTH,
      gold: u.VU.PREMIUM_TENURE_6_MONTH,
      platinum: u.VU.PREMIUM_TENURE_12_MONTH,
      diamond: u.VU.PREMIUM_TENURE_24_MONTH,
      emerald: u.VU.PREMIUM_TENURE_36_MONTH,
      ruby: u.VU.PREMIUM_TENURE_60_MONTH,
      opal: u.VU.PREMIUM_TENURE_72_MONTH
    })[_], [_]), N = null != A ? (0, c.J)(A) : null, P = i.useMemo(() => {
      if (null == A) return "";
      let e = u.vK[A];
      return (d.intl.string(d.t.lG6a5x) + " " + d.intl.string(e.nameUnformatted)).toLocaleUpperCase()
    }, [A]), w = i.useMemo(() => {
      if (!a || null == N) return;
      let e = g ? {
        progressCircleText: E,
        progressCirclePercent: b,
        progressCircleUrgency: y
      } : {};
      return {
        type: "dynamic",
        component: o.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
        aspectRatio: "6/4",
        props: p({
          src: N,
          alt: P
        }, e)
      }
    }, [a, N, P, g, E, b, y]), R = {
      title: t,
      body: n,
      graphic: w,
      actions: i.useMemo(() => {
        if (f) return [{
          text: "Got it",
          variant: "primary"
        }]
      }, [f]),
      delay: O,
      size: v,
      gradientColor: i.useMemo(() => "string" == typeof S && S in m ? m[S] : S, [S]),
      estimatedTooltipHeight: I
    };
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(s.Text, {
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
        children: [(0, r.jsx)(l.B, h(p({
          targetElementRef: T
        }, R), {
          children: (0, r.jsx)(s.Button, {
            buttonRef: T,
            variant: "primary",
            text: "Left"
          })
        })), (0, r.jsx)(l.B, h(p({
          targetElementRef: C
        }, R), {
          children: (0, r.jsx)(s.Button, {
            buttonRef: C,
            variant: "primary",
            text: "Right"
          })
        }))]
      })]
    })
  }