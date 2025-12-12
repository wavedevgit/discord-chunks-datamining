/** Chunk was on 53162 **/
/** chunk id: 596211, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk159691 = require("./159691.js"),
  Chunk406877 = require("./406877.js");

function c(t) {
  var e, n, {
      guildId: c,
      productId: i,
      attachmentId: l
    } = t,
    s = function(t, e) {
      if (null == t) return {};
      var n, r, o = function(t, e) {
        if (null == t) return {};
        var n, r, o = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (r = 0; r < a.length; r++) n = a[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
      }
      return o
    }(t, ["guildId", "productId", "attachmentId"]);
  let {
    isLoading: u,
    downloadAttachment: f
  } = (0, a.Z)(c, i);
  return (0, r.jsx)(o.zxk, (e = function(t) {
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
  }({}, s), n = n = {
    loading: u,
    onClick: function() {
      f(l)
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e))
}