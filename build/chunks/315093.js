/** Chunk was on 49559 **/
/** chunk id: 315093, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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
let m = {
    [Chunk808380.Y.XBOX]: Chunk424994.a4.XBOX,
    [Chunk808380.Y.PLAYSTATION]: Chunk424994.a4.PLAYSTATION
  },
  f = {
    [Chunk158611.Z.EMBED]: Chunk409626.Ob.Embed
  };

function O(e) {
  var t, n;
  let l, i, {
      entry: c,
      location: u,
      baseEntryData: O
    } = e,
    b = (0, a.h)(c.extra.application_id),
    y = null == b ? true : b.getIconURL(d.iu.LARGE),
    h = c.extra.game_name;
  if (null != c.extra.platform) {
    let e = m[c.extra.platform];
    null != e && (l = {
      type: e
    })
  }
  i = c.content_type === r.ContentInventoryEntryType.PLAYED_GAME && (0, s.JM)(c) && !(0, s.I5)(c) ? p.t.vPg1JT : p.t.rPqqts;
  let j = f[u],
    g = {
      onClick: (0, o.A)({
        location: j,
        applicationId: c.extra.application_id,
        source: j,
        trackEntryPointImpression: true,
        sourceUserId: c.author_id
      }),
      ariaDescription: p.intl.formatToPlainString(p.t["9sZWVp"], {
        gameName: h
      })
    };
  return t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, O), n = n = {
    thumbnailUrl: y,
    title: h,
    titleClickable: g,
    thumbnailClickable: g,
    userDescription: i,
    providerIconProps: l
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t
}