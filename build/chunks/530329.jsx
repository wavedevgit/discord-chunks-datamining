/** Chunk was on 89289 **/
/** chunk id: 530329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk53691 = require("./53691.jsx"),
  Chunk378879 = require("./378879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk826756 = require("./826756.js");

function p(e) {
  var {
    uploadType: t,
    analyticsSource: n,
    className: l
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(e, ["uploadType", "analyticsSource", "className"]);
  let g = a.useCallback(() => {
      (0, o.s)({
        uploadType: t,
        analyticsSource: n
      })
    }, [t, n]),
    m = a.useMemo(() => {
      switch (t) {
        case u.pC.AVATAR:
          return d.intl.format(d.t["pvw/HB"], {
            onClick: g
          });
        case u.pC.BANNER:
          return d.intl.format(d.t.aCrz1d, {
            onClick: g
          });
        default:
          return ""
      }
    }, [t, g]);
  return t !== u.pC.AVATAR && t !== u.pC.BANNER ? null : <s.p{...function(e) {
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
  }({
    text: m,
    button: d.intl.string(d.t.BmJkbW),
    buttonAnalyticsObject: {
      section: c.jXE.USER_PROFILE
    },
    className: i()(f.container, l)
  }, p)} />
}