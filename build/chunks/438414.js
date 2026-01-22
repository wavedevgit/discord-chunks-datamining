/** Chunk was on web.js **/
/** chunk id: 438414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk205327 = require("./205327.js"),
  Chunk261020 = require("./261020.js"),
  Chunk424994 = require("./424994.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let t, {
      entry: n,
      baseEntryData: l
    } = e,
    u = n.extra.entries[0].media,
    f = u.artists[0],
    {
      title: p,
      provider: _,
      image_url: h
    } = u,
    m = f.name,
    g = {
      onClick: () => (0, i.n)(s.M0.TRACK, u.external_id),
      ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
        itemName: p
      })
    },
    E = {
      onClick: () => (0, i.n)(s.M0.ARTIST, f.external_id),
      ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
        itemName: m
      })
    };
  return _ === r.X.SPOTIFY && (t = {
    type: a.a4.SPOTIFY
  }), d(c({}, l), {
    title: p,
    subtitle: m,
    thumbnailUrl: h,
    titleClickable: g,
    subtitleClickable: E,
    thumbnailClickable: g,
    userDescription: o.t.CcVI1T,
    providerIconProps: t
  })
}