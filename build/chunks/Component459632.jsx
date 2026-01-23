/** Chunk was on 13492 **/
/** chunk id: 459632, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx");

function _(e) {
  let {
    onClick: n
  } = e, t = function(e, n) {
    if (null == e) return {};
    var t, r, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, t = Reflect.ownKeys(e); o < t.length; o++) r = t[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, n) {
        if (null == e) return {};
        var t, r, o = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
        return o
      }(e, n), Object.getOwnPropertySymbols)
      for (o = 0, t = Object.getOwnPropertySymbols(e); o < t.length; o++) r = t[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(e, ["onClick"]), {
    parentAnalyticsLocation: _
  } = (0, a.Ay)();
  return (0, r.jsx)(l.A, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        r = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), r.forEach(function(n) {
        var r;
        r = t[n], n in e ? Object.defineProperty(e, n, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = r
      })
    }
    return e
  }({
    label: c.intl.string(c.t["UKOtz+"]),
    iconComponent: o.jNK,
    tooltipPosition: "bottom",
    onClick: e => {
      (0, i.X)(_, i.O.MORE), n(e)
    }
  }, t))
}