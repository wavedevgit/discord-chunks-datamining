/** Chunk was on 94073 **/
/** chunk id: 699576, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk202639 = require("./202639.jsx"),
  Chunk688796 = require("./688796.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk719154 = require("./719154.js");

function p(e) {
  let {
    uploadType: t,
    analyticsSource: r,
    className: c
  } = e, p = function(e, t) {
    if (null == e) return {};
    var r, a, n, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, a, n = {},
          c = Object.getOwnPropertyNames(e);
        for (a = 0; a < c.length; a++) r = c[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (c[a] = e[a]);
    return c
  }(e, ["uploadType", "analyticsSource", "className"]), m = n.useCallback(() => {
    (0, b.G)({
      uploadType: t,
      analyticsSource: r
    })
  }, [t, r]), x = (0, s.bG)([o.default], () => o.default.getCurrentUser()), y = i.Ay.canUseAnimatedAvatar(x), N = n.useMemo(() => {
    switch (t) {
      case f.HL.AVATAR:
        return A.intl.format(A.t["pvw/HH"], {
          onClick: m
        });
      case f.HL.BANNER:
        return A.intl.format(A.t.aCrz1e, {
          onClick: m
        });
      default:
        return ""
    }
  }, [t, m]);
  return t !== f.HL.AVATAR && t !== f.HL.BANNER || t === f.HL.AVATAR && y ? null : (0, a.jsx)(u.d, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = r[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    text: N,
    button: A.intl.string(A.t.BmJkbd),
    buttonAnalyticsObject: {
      section: d.JJy.USER_PROFILE
    },
    className: l()(_.k, c)
  }, p))
}