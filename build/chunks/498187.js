/** Chunk was on 30243 **/
/** chunk id: 498187, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let f = {
    [Chunk758713.z.XBOX]: Chunk206583.kG.XBOX,
    [Chunk758713.z.PLAYSTATION]: Chunk206583.kG.PLAYSTATION
  },
  b = {
    [Chunk96513._.EMBED]: Chunk810568.m1.Embed
  };

function m(e) {
  var t, r;
  let l, o, {
      entry: s,
      location: u,
      baseEntryData: m
    } = e,
    O = (0, i.q)(s.extra.application_id),
    y = null == O ? true : O.getIconURL(d.Si.LARGE),
    j = s.extra.game_name;
  if (null != s.extra.platform) {
    let e = f[s.extra.platform];
    null != e && (l = {
      type: e
    })
  }
  o = s.content_type === n.s.PLAYED_GAME && (0, c.kr)(s) && !(0, c.n2)(s) ? p.t.vPg1JS : p.t.rPqqtr;
  let g = b[u],
    h = {
      onClick: (0, a.Z)({
        location: g,
        applicationId: s.extra.application_id,
        source: g,
        trackEntryPointImpression: true,
        sourceUserId: s.author_id
      }),
      ariaDescription: p.intl.formatToPlainString(p.t["9sZWVl"], {
        gameName: j
      })
    };
  return t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, m), r = r = {
    thumbnailUrl: y,
    title: j,
    titleClickable: h,
    thumbnailClickable: h,
    userDescription: o,
    providerIconProps: l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t
}