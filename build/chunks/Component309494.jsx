/** Chunk was on web.js **/
/** chunk id: 309494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk51144 = require("./51144.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk508929 = require("./508929.js");

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

function g(e) {
  let {
    user: t,
    isHovering: n
  } = e, {
    trackUserProfileAction: i
  } = (0, u.KZ)();
  return l.wS ? (0, r.jsx)(s.Z, {
    text: d.intl.string(d.t.y5MwJy),
    delay: 0,
    "aria-label": false,
    copyValue: c.ZP.getUserTag(t, {
      decoration: "never",
      identifiable: "always"
    }),
    onCopy: () => i({
      action: "COPY_USERNAME"
    }),
    children: e => (0, r.jsx)(o.P3F, m(p({}, e), {
      className: a()(f.copyButton, {
        [f.visible]: n
      }),
      "aria-label": d.intl.string(d.t.y5MwJy),
      children: (0, r.jsx)(o.TIy, {
        size: "xs",
        color: "currentColor"
      })
    }))
  }) : null
}