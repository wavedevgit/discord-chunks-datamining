/** Chunk was on web.js **/
/** chunk id: 7366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk717975 = require("./717975.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
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
    subtitle: u,
    onClose: f,
    onSecondaryClick: m,
    videoSrc: h,
    loopAt: g
  } = e, E = _(e, ["gradientColor", "title", "subtitle", "onClose", "onSecondaryClick", "videoSrc", "loopAt"]);
  let {
    subscribeButtonProps: b,
    subscriptionTier: y
  } = (0, a.G)({
    subscriptionTier: l.Si.TIER_2,
    defaultTextOverride: c.intl.string(c.t.pj0XBN)
  }), O = (0, s.Z)(l.Si.TIER_2);
  return (0, r.jsx)(o.Z, {
    subscriptionTier: y,
    children: e => {
      let {
        onClick: o
      } = e;
      return (0, r.jsx)(i.ExpressiveModal, d({
        size: "md",
        onClose: async () => {
          await f()
        },
        gradientColor: t,
        graphic: {
          type: "video",
          src: h,
          loop: true,
          loopAt: g
        },
        title: n,
        subtitle: u,
        actions: [{
          variant: "secondary",
          text: c.intl.string(c.t.ZnqyZ2),
          onClick: m
        }, p(d({}, b), {
          onClick: o
        })]
      }, null != O && {
        badge: {
          text: O
        }
      }, E))
    }
  })
}