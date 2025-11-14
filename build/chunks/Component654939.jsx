/** Chunk was on web.js **/
/** chunk id: 654939, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk198168 = require("./198168.js"),
  Chunk863504 = require("./863504.js"),
  Chunk787528 = require("./787528.js"),
  Chunk645917 = require("./645917.jsx"),
  Chunk799607 = require("./799607.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
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
      _(e, t, n[t])
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
    badgeId: t = u.VU.PREMIUM_TENURE_1_MONTH,
    markAsDismissed: n,
    children: _,
    mode: h = "popover",
    tooltipDelay: g = 300,
    targetElementRef: E,
    body: b,
    progressCircleText: y,
    progressCirclePercent: O,
    progressCircleUrgency: v,
    actions: I,
    onShow: T
  } = e, S = u.vK[t].nameUnformatted, A = (f.intl.string(f.t.lG6a5x) + " " + f.intl.string(S)).toLocaleUpperCase(), C = (0, o.Z)(t), N = (0, s.J)(t);
  (0, i.useEffect)(() => {
    a.a[a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE](), new Image().src = N
  }, [N]);
  let R = (0, i.useCallback)(() => {
      null == n || n(d.L.USER_DISMISS)
    }, [n]),
    P = {
      gradientColor: C,
      size: "lg",
      graphic: {
        type: "dynamic",
        component: a.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
        aspectRatio: "6/4",
        props: {
          src: N,
          alt: A,
          progressCircleText: y,
          progressCirclePercent: O,
          progressCircleUrgency: v
        }
      },
      title: A,
      body: b,
      actions: I
    };
  return "tooltip" === h ? (0, r.jsx)(c.Z, m(p({
    targetElementRef: E,
    tooltipHeight: 300,
    delay: g,
    onShow: T
  }, P), {
    children: _
  })) : (0, r.jsxs)(r.Fragment, {
    children: [_, (0, r.jsx)(l.ZP, p({
      targetElementRef: E,
      shouldShow: true,
      onRequestClose: R,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      }
    }, P))]
  })
}