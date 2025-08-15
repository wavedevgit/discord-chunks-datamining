/** Chunk was on 30243 **/
/** chunk id: 301419, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk423875 = require("./423875.js"),
  Chunk740605 = require("./740605.js"),
  Chunk206583 = require("./206583.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t, r;
  let c, {
      entry: s,
      baseEntryData: u
    } = e,
    {
      provider: d,
      image_url: p
    } = s.extra.media,
    f = s.extra.artist.name,
    b = {
      onClick: () => (0, l.o)(o.Hw.ALBUM, s.extra.media.external_parent_id),
      ariaDescription: a.intl.formatToPlainString(a.t.xTsar6, {
        itemName: s.extra.media.parent_title
      })
    },
    m = {
      onClick: () => (0, l.o)(o.Hw.ARTIST, s.extra.artist.external_id),
      ariaDescription: a.intl.formatToPlainString(a.t.xTsar6, {
        itemName: f
      })
    };
  return d === n.p.SPOTIFY && (c = {
    type: i.kG.SPOTIFY
  }), t = function(e) {
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
  }({}, u), r = r = {
    title: f,
    thumbnailUrl: p,
    titleClickable: m,
    subtitleClickable: b,
    thumbnailClickable: b,
    userDescription: a.t.CcVI1d,
    providerIconProps: c
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