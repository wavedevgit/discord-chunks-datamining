/** Chunk was on web.js **/
/** chunk id: 498187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk876215 = require("./876215.js"),
  Chunk758713 = require("./758713.js"),
  Chunk835473 = require("./835473.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk561308 = require("./561308.js"),
  Chunk206583 = require("./206583.js"),
  Chunk96513 = require("./96513.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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
let g = {
    [Chunk758713.z.XBOX]: Chunk206583.kG.XBOX,
    [Chunk758713.z.PLAYSTATION]: Chunk206583.kG.PLAYSTATION
  },
  E = {
    [Chunk96513._.EMBED]: Chunk810568.m1.Embed
  };

function b(e) {
  let t, n, {
      entry: i,
      location: o,
      baseEntryData: c
    } = e,
    u = (0, a.q)(i.extra.application_id),
    p = null == u ? true : u.getIconURL(d.Si.LARGE),
    h = i.extra.game_name;
  if (null != i.extra.platform) {
    let e = g[i.extra.platform];
    null != e && (t = {
      type: e
    })
  }
  n = i.content_type === r.s.PLAYED_GAME && (0, l.kr)(i) && !(0, l.n2)(i) ? f.t.vPg1JT : f.t.rPqqts;
  let b = E[o],
    y = {
      onClick: (0, s.Z)({
        location: b,
        applicationId: i.extra.application_id,
        source: b,
        trackEntryPointImpression: true,
        sourceUserId: i.author_id
      }),
      ariaDescription: f.intl.formatToPlainString(f.t["9sZWVp"], {
        gameName: h
      })
    };
  return m(_({}, c), {
    thumbnailUrl: p,
    title: h,
    titleClickable: y,
    thumbnailClickable: y,
    userDescription: n,
    providerIconProps: t
  })
}