/** Chunk was on web.js **/
/** chunk id: 238607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk456100 = require("./456100.js"),
  Chunk841784 = require("./841784.js"),
  Chunk171516 = require("./171516.js"),
  Chunk103450 = require("./103450.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk614716 = require("./614716.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    user: t,
    activity: n,
    onAction: m,
    onClose: E
  } = e, {
    themeType: y
  } = (0, d.z)(), O = (0, _.Z)({
    applicationId: null == n ? true : n.application_id,
    onClose: E
  }), v = (0, u.e)({
    activity: null != n ? n : true,
    embeddedActivity: true,
    user: t,
    onClose: E
  }), {
    enabled: I
  } = s.c.useExperiment({
    location: "ActivityButton"
  }, {
    autoTrackExposure: true
  }), T = (0, c.h)(null == n ? true : n.application_id), S = I ? a.iWm : a.jje;
  if (null == v && null != n && (0, l.Z)(n)) return (0, r.jsx)(f.tG, {
    icon: S,
    text: h.intl.string(h.t.RscU7O),
    size: y === p.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
    fullWidth: y !== p.l.MODAL_V2,
    themeColor: "secondary",
    onClick: e => {
      null != T ? o.Z.launch({
        applicationId: T
      }) : (e.stopPropagation(), null == m || m({
        action: "PRESS_PLAY_BUTTON"
      }), O())
    }
  });
  if (null == v) return null;
  let {
    isJoining: A,
    handleJoinRequest: C,
    buttonCTA: N,
    tooltip: R,
    isEnabled: P,
    isEmbedded: w
  } = v;
  return w ? (0, r.jsx)(a.ua7, {
    text: R,
    children: e => (0, r.jsx)(f.tG, b(g({}, e), {
      icon: a.YVR,
      text: N,
      disabled: !P,
      submitting: A,
      size: y === p.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
      fullWidth: y !== p.l.MODAL_V2,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == m || m({
          action: "PRESS_JOIN_BUTTON"
        }), C()
      }
    }))
  }) : (0, r.jsx)(a.ua7, {
    text: R,
    children: e => (0, r.jsx)(f.tG, b(g({}, e), {
      icon: a.iWm,
      text: N,
      disabled: !P,
      submitting: A,
      size: y === p.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
      fullWidth: y !== p.l.MODAL_V2,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == m || m({
          action: "PRESS_ASK_TO_JOIN_BUTTON"
        }), C()
      }
    }))
  })
}