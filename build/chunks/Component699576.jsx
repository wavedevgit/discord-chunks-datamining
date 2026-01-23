/** Chunk was on 94073 **/
/** chunk id: 699576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk202639 = require("./202639.jsx"),
  Chunk688796 = require("./688796.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk719154 = require("./719154.js");

function m(e) {
  let {
    uploadType: t,
    analyticsSource: n,
    className: o
  } = e, m = function(e, t) {
    if (null == e) return {};
    var n, r, a, o = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
      return o
    }
    if (o = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.getOwnPropertyNames(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    return o
  }(e, ["uploadType", "analyticsSource", "className"]), p = a.useCallback(() => {
    (0, _.G)({
      uploadType: t,
      analyticsSource: n
    })
  }, [t, n]), y = (0, l.bG)([s.default], () => s.default.getCurrentUser()), g = c.Ay.canUseAnimatedAvatar(y), x = a.useMemo(() => {
    switch (t) {
      case f.HL.AVATAR:
        return A.intl.format(A.t["pvw/HH"], {
          onClick: p
        });
      case f.HL.BANNER:
        return A.intl.format(A.t.aCrz1e, {
          onClick: p
        });
      default:
        return ""
    }
  }, [t, p]);
  return t !== f.HL.AVATAR && t !== f.HL.BANNER || t === f.HL.AVATAR && g ? null : (0, r.jsx)(u.d, function(e) {
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
    text: x,
    button: A.intl.string(A.t.BmJkbd),
    buttonAnalyticsObject: {
      section: d.JJy.USER_PROFILE
    },
    className: i()(b.k, o)
  }, m))
}