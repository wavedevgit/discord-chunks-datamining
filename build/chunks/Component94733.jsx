/** Chunk was on 2347 **/
/** chunk id: 94733, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk666171 = require("./666171.js");

function l(t) {
  var e, r;
  let {
    guildId: l,
    productId: c,
    attachmentId: i
  } = t, s = function(t, e) {
    if (null == t) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
      return a
    }
    if (a = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(t);
        for (n = 0; n < a.length; n++) r = a[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
        return o
      }(t, e), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
    return a
  }(t, ["guildId", "productId", "attachmentId"]), {
    isLoading: u,
    downloadAttachment: d
  } = (0, a.A)(l, c);
  return (0, n.jsx)(o.$nd, (e = function(t) {
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
  }({}, s), r = r = {
    loading: u,
    onClick: function() {
      d(i)
    }
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