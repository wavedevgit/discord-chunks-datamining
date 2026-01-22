/** Chunk was on web.js **/
/** chunk id: 508591, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk116833 = require("./116833.js"),
  Chunk704640 = require("./704640.js"),
  Chunk149757 = require("./149757.js"),
  Chunk642481 = require("./642481.jsx"),
  Chunk301679 = require("./301679.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
  let {
    badgeId: t = u.Ac.PREMIUM_TENURE_1_MONTH,
    markAsDismissed: n,
    children: p,
    mode: h = "popover",
    tooltipDelay: g = 300,
    targetElementRef: E,
    body: b,
    progressCircleText: y,
    progressCirclePercent: O,
    progressCircleUrgency: A,
    actions: v,
    onShow: S,
    estimatedTooltipHeight: I = 300
  } = e, T = u.VD[t].nameUnformattedNitro, C = f.intl.string(T).toLocaleUpperCase(), N = (0, s.A)(t), R = (0, o.I)(t);
  (0, i.useEffect)(() => {
    a.m[a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), new Image().src = R
  }, [R]);
  let w = (0, i.useCallback)(() => {
      null == n || n(d.i.USER_DISMISS)
    }, [n]),
    P = {
      gradientColor: N,
      size: "lg",
      graphic: {
        type: "dynamic",
        component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
        aspectRatio: "6/4",
        props: {
          src: R,
          alt: C,
          progressCircleText: y,
          progressCirclePercent: O,
          progressCircleUrgency: A
        }
      },
      title: C,
      body: b,
      actions: v
    };
  return "tooltip" === h ? (0, r.jsx)(c.A, m(_({
    targetElementRef: E,
    estimatedTooltipHeight: I,
    delay: g,
    onShow: S
  }, P), {
    children: p
  })) : (0, r.jsxs)(r.Fragment, {
    children: [p, (0, r.jsx)(l.A, _({
      targetElementRef: E,
      shouldShow: true,
      onRequestClose: w,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      }
    }, P))]
  })
}