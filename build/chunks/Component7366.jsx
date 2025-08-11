/** Chunk was on web.js **/
/** chunk id: 7366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk667202 = require("./667202.jsx"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk717975 = require("./717975.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = e => {
  var {
    gradientColor: t,
    title: n,
    subtitle: c,
    onClose: d,
    onSecondaryClick: p,
    videoSrc: h,
    loopAt: m
  } = e, g = _(e, ["gradientColor", "title", "subtitle", "onClose", "onSecondaryClick", "videoSrc", "loopAt"]);
  let {
    subscribeButtonProps: E,
    subscriptionTier: b
  } = (0, a.G)({
    defaultTextOverride: l.intl.string(l.t.pj0XBA)
  }), y = (0, s.Z)();
  return (0, r.jsx)(o.Z, {
    subscriptionTier: b,
    children: e => {
      let {
        onClick: o
      } = e;
      return (0, r.jsx)(i.I, u({
        size: "md",
        onClose: async () => {
          await d()
        },
        gradientColor: t,
        graphic: {
          type: "video",
          src: h,
          loop: true,
          loopAt: m
        },
        title: n,
        subtitle: c,
        actions: [{
          variant: "secondary",
          text: l.intl.string(l.t.ZnqyZ2),
          onClick: p
        }, f(u({}, E), {
          onClick: o
        })]
      }, null != y && {
        badge: {
          text: y
        }
      }, g))
    }
  })
}