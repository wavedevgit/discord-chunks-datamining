/** Chunk was on 49559 **/
/** chunk id: 873498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk205327 = require("./205327.js"),
  Chunk261020 = require("./261020.js"),
  Chunk424994 = require("./424994.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  var t, n;
  let s, {
      entry: c,
      baseEntryData: u
    } = e,
    {
      provider: d,
      image_url: p
    } = c.extra.media,
    m = c.extra.artist.name,
    f = {
      onClick: () => (0, l.n)(i.M0.ALBUM, c.extra.media.external_parent_id),
      ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
        itemName: c.extra.media.parent_title
      })
    },
    O = {
      onClick: () => (0, l.n)(i.M0.ARTIST, c.extra.artist.external_id),
      ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
        itemName: m
      })
    };
  return d === r.X.SPOTIFY && (s = {
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
    title: m,
    thumbnailUrl: p,
    titleClickable: O,
    subtitleClickable: f,
    thumbnailClickable: f,
    userDescription: o.t.CcVI1T,
    providerIconProps: s
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