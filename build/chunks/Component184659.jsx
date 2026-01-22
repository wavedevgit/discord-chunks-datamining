/** Chunk was on 1784 **/
/** chunk id: 184659, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287070 = require("./287070.jsx"),
  Chunk101058 = require("./101058.js"),
  Chunk752319 = require("./752319.js"),
  Chunk927578 = require("./927578.js"),
  Chunk132198 = require("./132198.jsx"),
  Chunk266371 = require("./266371.js");
let u = e => {
  var t, n;
  let {
    user: u
  } = e, m = c.Ay.canUsePremiumProfileCustomization(u), f = (0, l.cf)([s.A], () => s.A.getAllPending()), {
    pendingAvatar: b
  } = f, p = function(e, t) {
    if (null == e) return {};
    var n, r, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          a = Object.getOwnPropertyNames(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }(f, ["pendingAvatar"]), x = (0, i.V7)({
    userId: u.id,
    image: b
  });
  return (0, r.jsx)("div", {
    className: d.k,
    children: (0, r.jsx)(a.A, (t = function(e) {
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
    }({}, p), n = n = {
      pendingAvatar: x,
      user: u,
      pendingBadges: [(0, o._)()],
      canUsePremiumCustomization: m,
      disabledInputs: true,
      hideExampleButton: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}