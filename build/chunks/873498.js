/** Chunk was on 20941 **/
/** chunk id: 873498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk205327 = require("./205327.js"),
  Chunk261020 = require("./261020.js"),
  Chunk424994 = require("./424994.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  var t, n;
  let o, {
      entry: c,
      baseEntryData: u
    } = e,
    {
      provider: d,
      image_url: m
    } = c.extra.media,
    f = c.extra.artist.name,
    p = {
      onClick: () => (0, l.n)(i.M0.ALBUM, c.extra.media.external_parent_id),
      ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, {
        itemName: c.extra.media.parent_title
      })
    },
    h = {
      onClick: () => (0, l.n)(i.M0.ARTIST, c.extra.artist.external_id),
      ariaDescription: s.intl.formatToPlainString(s.t.xTsar2, {
        itemName: f
      })
    };
  return d === r.X.SPOTIFY && (o = {
    type: a.a4.SPOTIFY
  }), t = function(e) {
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
  }({}, u), n = n = {
    title: f,
    thumbnailUrl: m,
    titleClickable: h,
    subtitleClickable: p,
    thumbnailClickable: p,
    userDescription: s.t.CcVI1T,
    providerIconProps: o
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