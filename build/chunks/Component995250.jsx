/** Chunk was on web.js **/
/** chunk id: 995250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk785717 = require("./785717.jsx"),
  Chunk510659 = require("./510659.jsx"),
  Chunk899007 = require("./899007.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk660579 = require("./660579.jsx"),
  Chunk64621 = require("./64621.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk304985 = require("./304985.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  var {
    user: t,
    themeType: n,
    animateOnHover: o,
    onOpenProfile: h
  } = e, g = b(e, ["user", "themeType", "animateOnHover", "onOpenProfile"]);
  let y = i.useRef(null),
    O = _.n_.AVATAR,
    {
      trackUserProfileAction: v
    } = (0, s.KZ)(),
    {
      interactionSource: I
    } = (0, l.Xo)(),
    T = a()(p.avatar, {
      [p.hoisted]: I === _.n_.AVATAR || I === _.n_.STATUS
    });
  return (0, r.jsx)(f.Z, {
    targetElementRef: y,
    sourceType: _.n_.AVATAR,
    user: t,
    children: (0, r.jsx)(u.Z, E(m({
      user: t,
      className: T,
      themeType: n,
      sourceType: O,
      onAction: v
    }, g), {
      children: () => (0, r.jsx)(d.Z, {
        ref: y,
        className: T,
        user: t,
        sourceType: O,
        onAction: v,
        children: (0, r.jsx)(c.Z, m({
          user: t,
          animateOnHover: o,
          onOpenProfile: h,
          themeType: n,
          className: p.withReactReply
        }, g))
      })
    }))
  })
}