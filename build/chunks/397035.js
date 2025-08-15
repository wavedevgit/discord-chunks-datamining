/** Chunk was on 30243 **/
/** chunk id: 397035, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk835473 = require("./835473.js"),
  Chunk81063 = require("./81063.js"),
  Chunk591759 = require("./591759.js"),
  Chunk561308 = require("./561308.js"),
  Chunk206583 = require("./206583.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  var t, r;
  let d, {
      entry: p,
      baseEntryData: f
    } = e,
    b = (0, l.q)(p.extra.application_id),
    m = null == b ? true : b.getIconURL(128),
    O = (0, i.xF)(p.extra.application_id, p.extra.media_assets_large_image, [s.Si.LARGE, s.Si.LARGE]),
    y = p.extra.media_title,
    j = p.extra.media_subtitle,
    g = (0, a.Jg)(p) ? u.t["LH+Z39"] : u.t.YuKgmp,
    h = {
      type: c.kG.CRUNCHYROLL
    },
    v = n.useMemo(() => {
      if (null == p.extra.url) return;
      let e = o.Z.safeParseWithQuery(p.extra.url);
      if (null != e && null != e.protocol && null != e.hostname) return e
    }, [p.extra.url]);
  return null != v && (d = {
    href: o.Z.format(v),
    ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3t, {
      title: y
    })
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
  }({}, f), r = r = {
    thumbnailUrl: null != O ? O : m,
    title: y,
    titleClickable: d,
    thumbnailClickable: d,
    subtitle: j,
    userDescription: g,
    providerIconProps: h
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