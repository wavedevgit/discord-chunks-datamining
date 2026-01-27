/** Chunk was on web.js **/
/** chunk id: 831318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk783420 = require("./783420.jsx"),
  Chunk204413 = require("./204413.js"),
  Chunk818415 = require("./818415.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let m = e => {
  let {
    gradientColor: t,
    title: n,
    subtitle: u,
    onClose: f,
    onSecondaryClick: h,
    videoSrc: m,
    loopAt: g
  } = e, E = _(e, ["gradientColor", "title", "subtitle", "onClose", "onSecondaryClick", "videoSrc", "loopAt"]), {
    subscribeButtonProps: y,
    subscriptionTier: b
  } = (0, o.$)({
    subscriptionTier: l.pe.TIER_2,
    defaultTextOverride: c.intl.string(c.t.pj0XBN)
  }), O = (0, s.A)(l.pe.TIER_2);
  return (0, r.jsx)(a.A, {
    subscriptionTier: b,
    children: e => {
      let {
        onClick: a
      } = e;
      return (0, r.jsx)(i.ExpressiveModal, d({
        size: "md",
        onClose: async () => {
          await f()
        },
        gradientColor: t,
        graphic: {
          type: "video",
          src: m,
          loop: true,
          loopAt: g
        },
        title: n,
        subtitle: u,
        actions: [{
          variant: "secondary",
          text: c.intl.string(c.t.ZnqyZ2),
          onClick: h
        }, p(d({}, y), {
          onClick: a
        })]
      }, null != O && {
        badge: {
          text: O
        }
      }, E))
    }
  })
}