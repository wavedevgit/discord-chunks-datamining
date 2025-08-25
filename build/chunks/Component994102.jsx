/** Chunk was on web.js **/
/** chunk id: 994102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk475413 = require("./475413.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    application: t,
    onAction: n,
    onClose: d,
    size: _
  } = e, {
    themeType: h
  } = (0, s.z)(), m = (0, a.Z)({
    application: t,
    location: "User Profile Activity"
  });
  return null == m ? null : (0, r.jsx)(o.ua7, {
    text: u.intl.string(u.t.JVwWvb),
    position: "top",
    children: e => (0, r.jsx)(l.tG, p(f({}, e), {
      icon: o.v3n,
      text: u.intl.string(u.t["jaYS/v"]),
      size: null != _ ? _ : h === c.l.MODAL_V2 ? i.Ph.TINY : i.Ph.SMALL,
      fullWidth: h !== c.l.MODAL_V2,
      themeColor: "secondary",
      onClick: e => {
        e.stopPropagation(), null == n || n({
          action: "PRESS_CLOUD_PLAY_BUTTON"
        }), m(), null == d || d()
      }
    }))
  })
}