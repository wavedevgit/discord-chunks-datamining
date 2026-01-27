/** Chunk was on 72968 **/
/** chunk id: 699576, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk202639 = require("./202639.jsx"),
  Chunk688796 = require("./688796.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk719154 = require("./719154.js");

function f(t) {
  let {
    uploadType: e,
    analyticsSource: n,
    className: i
  } = t, f = function(t, e) {
    if (null == t) return {};
    var n, r, a, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, n = Reflect.ownKeys(t); a < n.length; a++) r = n[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
      return i
    }
    if (i = function(t, e) {
        if (null == t) return {};
        var n, r, a = {},
          i = Object.getOwnPropertyNames(t);
        for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
        return a
      }(t, e), Object.getOwnPropertySymbols)
      for (a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++) r = n[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
    return i
  }(t, ["uploadType", "analyticsSource", "className"]), p = a.useCallback(() => {
    (0, d.G)({
      uploadType: e,
      analyticsSource: n
    })
  }, [e, n]), A = (0, l.bG)([s.default], () => s.default.getCurrentUser()), b = c.Ay.canUseAnimatedAvatar(A), x = a.useMemo(() => {
    switch (e) {
      case h.HL.AVATAR:
        return m.intl.format(m.t["pvw/HH"], {
          onClick: p
        });
      case h.HL.BANNER:
        return m.intl.format(m.t.aCrz1e, {
          onClick: p
        });
      default:
        return ""
    }
  }, [e, p]);
  return e !== h.HL.AVATAR && e !== h.HL.BANNER || e === h.HL.AVATAR && b ? null : (0, r.jsx)(u.d, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable
      }))), r.forEach(function(e) {
        var r;
        r = n[e], e in t ? Object.defineProperty(t, e, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = r
      })
    }
    return t
  }({
    text: x,
    button: m.intl.string(m.t.BmJkbd),
    buttonAnalyticsObject: {
      section: _.JJy.USER_PROFILE
    },
    className: o()(g.k, i)
  }, f))
}