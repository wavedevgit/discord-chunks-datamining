/** Chunk was on 17768 **/
/** chunk id: 259673, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk678135 = require("./678135.jsx"),
  Chunk643879 = require("./643879.js"),
  Chunk25990 = require("./25990.js"),
  Chunk74538 = require("./74538.js"),
  Chunk755419 = require("./755419.jsx"),
  Chunk526666 = require("./526666.js");
let d = e => {
  var t, n;
  let {
    user: d
  } = e, p = c.ZP.canUsePremiumProfileCustomization(d), m = (0, a.cj)([l.Z], () => l.Z.getAllPending()), {
    pendingAvatar: g
  } = m, f = function(e, t) {
    if (null == e) return {};
    var n, r, a = function(e, t) {
      if (null == e) return {};
      var n, r, a = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }(m, ["pendingAvatar"]), _ = (0, o.SD)({
    userId: d.id,
    image: g
  });
  return (0, r.jsx)("div", {
    className: u.container,
    children: (0, r.jsx)(i.Z, (t = function(e) {
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
    }({}, f), n = n = {
      pendingAvatar: _,
      user: d,
      pendingBadges: [(0, s.X)()],
      canUsePremiumCustomization: p,
      disabledInputs: true,
      hideViewFullProfileButton: true
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