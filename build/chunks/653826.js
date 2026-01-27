/** Chunk was on 20941 **/
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
      entry: m,
      baseEntryData: f
    } = e,
    p = (0, l.h)(m.extra.application_id),
    h = null == p ? true : p.getIconURL(128),
    b = (0, a.uD)(m.extra.application_id, m.extra.media_assets_large_image, [c.iu.LARGE, c.iu.LARGE]),
    g = m.extra.media_title,
    x = m.extra.media_subtitle,
    y = (0, s.Hd)(m) ? u.t["LH+Z3y"] : u.t.YuKgml,
    v = {
      type: o.a4.CRUNCHYROLL
    },
    j = r.useMemo(() => {
      if (null == m.extra.url) return;
      let e = i.A.safeParseWithQuery(m.extra.url);
      if (null != e && null != e.protocol && null != e.hostname) return e
    }, [m.extra.url]);
  return null != j && (d = {
    href: i.A.format(j),
    ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, {
      title: g
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
  }({}, f), n = n = {
    thumbnailUrl: null != b ? b : h,
    title: g,
    titleClickable: d,
    thumbnailClickable: d,
    subtitle: x,
    userDescription: y,
    providerIconProps: v
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