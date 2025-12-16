/** Chunk was on 72114 **/
/** chunk id: 157312, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk51144 = require("./51144.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let f = t => {
  var {
    subscriptionId: e,
    invitedUser: r,
    onClose: f
  } = t, b = function(t, e) {
    if (null == t) return {};
    var r, n, i = function(t, e) {
      if (null == t) return {};
      var r, n, i = {},
        o = Object.keys(t);
      for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
    }
    return i
  }(t, ["subscriptionId", "invitedUser", "onClose"]);
  let [p, d] = (0, i.useState)(false), O = async () => {
    d(true), await (0, a.if)(e, r.id), d(false), f()
  };
  return (0, n.jsx)(o.Modal, function(t) {
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
  }({
    size: "md",
    title: s.intl.string(c.default.U439m2),
    subtitle: s.intl.formatToPlainString(c.default["Sv6+Ox"], {
      memberName: (0, l.XM)(r),
      premiumGroupProductName: (0, u.sO)()
    }),
    onClose: f,
    actions: [{
      text: s.intl.string(c.default["2blqtw"]),
      variant: "critical-primary",
      onClick: O,
      loading: p
    }]
  }, b))
}