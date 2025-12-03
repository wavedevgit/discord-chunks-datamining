/** Chunk was on 44462 **/
/** chunk id: 478472, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx");

function i(t) {
  var e, r, {
      ruleName: i
    } = t,
    l = function(t, e) {
      if (null == t) return {};
      var r, n, o = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          c = Object.keys(t);
        for (n = 0; n < c.length; n++) r = c[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        for (n = 0; n < c.length; n++) r = c[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
      }
      return o
    }(t, ["ruleName"]);
  let u = null != i ? i : c.intl.string(c.t.ffR2cM);
  return (0, n.jsx)(o.ConfirmModal, (e = function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({}, l), r = r = {
    title: c.intl.string(c.t.Hy8XgL),
    subtitle: c.intl.format(c.t.hO7PgW, {
      ruleName: u
    }),
    confirmText: c.intl.string(c.t["cY+Oob"])
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e))
}