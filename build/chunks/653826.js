/** Chunk was on 49559 **/
/** chunk id: 653826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk429913 = require("./429913.js"),
  Chunk139675 = require("./139675.js"),
  Chunk998218 = require("./998218.js"),
  Chunk583846 = require("./583846.js"),
  Chunk424994 = require("./424994.js"),
  Chunk360469 = require("./360469.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  var t, n;
  let d, {
      entry: p,
      baseEntryData: m
    } = e,
    f = (0, l.h)(p.extra.application_id),
    O = null == f ? true : f.getIconURL(128),
    b = (0, a.uD)(p.extra.application_id, p.extra.media_assets_large_image, [c.iu.LARGE, c.iu.LARGE]),
    y = p.extra.media_title,
    h = p.extra.media_subtitle,
    j = (0, o.Hd)(p) ? u.t["LH+Z3y"] : u.t.YuKgml,
    g = {
      type: s.a4.CRUNCHYROLL
    },
    A = r.useMemo(() => {
      if (null == p.extra.url) return;
      let e = i.A.safeParseWithQuery(p.extra.url);
      if (null != e && null != e.protocol && null != e.hostname) return e
    }, [p.extra.url]);
  return null != A && (d = {
    href: i.A.format(A),
    ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, {
      title: y
    })
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
  }({}, m), n = n = {
    thumbnailUrl: null != b ? b : O,
    title: y,
    titleClickable: d,
    thumbnailClickable: d,
    subtitle: h,
    userDescription: j,
    providerIconProps: g
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