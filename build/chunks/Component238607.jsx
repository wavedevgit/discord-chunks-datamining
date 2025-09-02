/** Chunk was on web.js **/
/** chunk id: 238607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk841784 = require("./841784.js"),
  Chunk103450 = require("./103450.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk614716 = require("./614716.js"),
  Chunk671955 = require("./671955.js"),
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

function E(e) {
  let {
    user: t,
    activity: n,
    onAction: p,
    onClose: m
  } = e, {
    themeType: E
  } = (0, c.z)(), b = (0, d.Z)({
    applicationId: null == n ? true : n.application_id,
    onClose: m
  }), y = (0, l.e)({
    activity: null != n ? n : true,
    embeddedActivity: true,
    user: t,
    onClose: m
  }), {
    enabled: O
  } = o.c.useExperiment({
    location: "ActivityButton"
  }, {
    autoTrackExposure: true
  }), v = O ? a.iWm : a.jje;
  if (null == y && null != n && (0, s.Z)(n)) return (0, r.jsx)(u.tG, {
    icon: v,
    text: _.intl.string(_.t.RscU7O),
    size: E === f.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
    fullWidth: E !== f.l.MODAL_V2,
    themeColor: "secondary",
    onClick: e => {
      e.stopPropagation(), null == p || p({
        action: "PRESS_PLAY_BUTTON"
      }), b()
    }
  });
  if (null == y) return null;
  let {
    isJoining: I,
    handleJoinRequest: S,
    buttonCTA: T,
    tooltip: A,
    isEnabled: C,
    isEmbedded: N
  } = y;
  return N ? (0, r.jsx)(a.ua7, {
    text: A,
    children: e => (0, r.jsx)(u.tG, g(h({}, e), {
      icon: a.YVR,
      text: T,
      disabled: !C,
      submitting: I,
      size: E === f.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
      fullWidth: E !== f.l.MODAL_V2,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == p || p({
          action: "PRESS_JOIN_BUTTON"
        }), S()
      }
    }))
  }) : (0, r.jsx)(a.ua7, {
    text: A,
    children: e => (0, r.jsx)(u.tG, g(h({}, e), {
      icon: a.iWm,
      text: T,
      disabled: !C,
      submitting: I,
      size: E === f.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
      fullWidth: E !== f.l.MODAL_V2,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == p || p({
          action: "PRESS_ASK_TO_JOIN_BUTTON"
        }), S()
      }
    }))
  })
}