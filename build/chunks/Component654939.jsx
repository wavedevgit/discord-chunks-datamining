/** Chunk was on web.js **/
/** chunk id: 654939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk198168 = require("./198168.js"),
  Chunk848572 = require("./848572.js"),
  Chunk863504 = require("./863504.js"),
  Chunk787528 = require("./787528.js"),
  Chunk645917 = require("./645917.jsx"),
  Chunk799607 = require("./799607.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = e => {
  var t, n;
  let {
    markAsDismissed: p,
    children: m,
    mode: E = "popover",
    tooltipDelay: b = 300,
    targetElementRef: y,
    body: O,
    progressCircleText: v,
    progressCirclePercent: I,
    progressCircleUrgency: T,
    actions: S,
    onShow: A
  } = e, C = (0, o.Rw)(), N = null != (t = null == C ? true : C.id) ? t : d.VU.PREMIUM_TENURE_1_MONTH, R = null != (n = null == C ? true : C.nameUnformatted) ? n : d.vK[d.VU.PREMIUM_TENURE_1_MONTH].nameUnformatted, P = (_.intl.string(_.t.lG6a5x) + " " + _.intl.string(R)).toLocaleUpperCase(), D = (0, s.Z)(N), w = (0, l.J)(N, {
    ambient: true
  }), x = (0, i.useCallback)(() => {
    null == p || p(f.L.USER_DISMISS)
  }, [p]), L = {
    gradientColor: D,
    size: "lg",
    graphic: {
      type: "dynamic",
      component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
      aspectRatio: "6/4",
      props: {
        src: w,
        alt: P,
        progressCircleText: v,
        progressCirclePercent: I,
        progressCircleUrgency: T
      }
    },
    title: P,
    body: O,
    actions: S
  };
  return "tooltip" === E ? (0, r.jsx)(u.Z, g(h({
    targetElementRef: y,
    tooltipHeight: 300,
    delay: b,
    onShow: A
  }, L), {
    children: m
  })) : (0, r.jsxs)(r.Fragment, {
    children: [m, (0, r.jsx)(c.ZP, h({
      targetElementRef: y,
      shouldShow: true,
      onRequestClose: x,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      }
    }, L))]
  })
}