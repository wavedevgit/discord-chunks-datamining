/** Chunk was on 89289 **/
/** chunk id: 530329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk53691 = require("./53691.jsx"),
  Chunk378879 = require("./378879.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463339 = require("./463339.js");

function h(e) {
  var {
    uploadType: t,
    analyticsSource: n,
    className: l
  } = e, h = function(e, t) {
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
  let b = a.useCallback(() => {
      (0, d.s)({
        uploadType: t,
        analyticsSource: n
      })
    }, [t, n]),
    A = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
    y = c.ZP.canUseAnimatedAvatar(A),
    j = a.useMemo(() => {
      switch (t) {
        case p.pC.AVATAR:
          return g.intl.format(g.t["pvw/HH"], {
            onClick: b
          });
        case p.pC.BANNER:
          return g.intl.format(g.t.aCrz1e, {
            onClick: b
          });
        default:
          return ""
      }
    }, [t, b]);
  return t !== p.pC.AVATAR && t !== p.pC.BANNER || t === p.pC.AVATAR && y ? null : (0, r.jsx)(u.p, function(e) {
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
    text: j,
    button: g.intl.string(g.t.BmJkbd),
    buttonAnalyticsObject: {
      section: f.jXE.USER_PROFILE
    },
    className: i()(m.container, l)
  }, h))
}