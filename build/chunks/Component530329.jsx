/** Chunk was on 89289 **/
/** chunk id: 530329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk53691 = require("./53691.jsx"),
  Chunk378879 = require("./378879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797192 = require("./797192.js");

function p(e) {
  var {
    uploadType: t,
    analyticsSource: n,
    className: a
  } = e, p = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["uploadType", "analyticsSource", "className"]);
  let g = l.useCallback(() => {
      (0, o.s)({
        uploadType: t,
        analyticsSource: n
      })
    }, [t, n]),
    m = l.useMemo(() => {
      switch (t) {
        case u.pC.AVATAR:
          return d.intl.format(d.t["pvw/HH"], {
            onClick: g
          });
        case u.pC.BANNER:
          return d.intl.format(d.t.aCrz1e, {
            onClick: g
          });
        default:
          return ""
      }
    }, [t, g]);
  return t !== u.pC.AVATAR && t !== u.pC.BANNER ? null : (0, r.jsx)(s.p, function(e) {
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
    button: d.intl.string(d.t.BmJkbd),
    buttonAnalyticsObject: {
      section: c.jXE.USER_PROFILE
    },
    className: i()(f.container, a)
  }, p))
}