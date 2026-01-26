/** Chunk was on web.js **/
/** chunk id: 315093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk681154 = require("./681154.js"),
  Chunk808380 = require("./808380.js"),
  Chunk429913 = require("./429913.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk583846 = require("./583846.js"),
  Chunk424994 = require("./424994.js"),
  Chunk158611 = require("./158611.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

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
    [Chunk808380.Y.XBOX]: Chunk424994.a4.XBOX,
    [Chunk808380.Y.PLAYSTATION]: Chunk424994.a4.PLAYSTATION
  },
  E = {
    [Chunk158611.Z.EMBED]: Chunk409626.Ob.Embed
  };

function y(e) {
  let t, n, {
      entry: i,
      location: s,
      baseEntryData: c
    } = e,
    u = (0, a.h)(i.extra.application_id),
    p = null == u ? true : u.getIconURL(d.iu.LARGE),
    h = i.extra.game_name;
  if (null != i.extra.platform) {
    let e = g[i.extra.platform];
    null != e && (t = {
      type: e
    })
  }
  n = i.content_type === r.ContentInventoryEntryType.PLAYED_GAME && (0, l.JM)(i) && !(0, l.I5)(i) ? f.t.vPg1JT : f.t.rPqqts;
  let y = E[s],
    b = {
      onClick: (0, o.A)({
        location: y,
        applicationId: i.extra.application_id,
        source: y,
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
    titleClickable: b,
    thumbnailClickable: b,
    userDescription: n,
    providerIconProps: t
  })
}