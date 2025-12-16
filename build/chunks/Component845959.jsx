/** Chunk was on 30153 **/
/** chunk id: 845959, original params: t,e,r (module,exports,require) **/
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
    member: r,
    onClose: f
  } = t, b = function(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
      if (null == t) return {};
      var r, n, o = {},
        i = Object.keys(t);
      for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
  }(t, ["subscriptionId", "member", "onClose"]);
  let [p, d] = (0, o.useState)(false), m = async () => {
    d(true), await (0, a.Jn)(e, r.id), d(false), f()
  };
  return (0, n.jsx)(i.Modal, function(t) {
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
    title: s.intl.string(c.default.MJIHXY),
    subtitle: s.intl.formatToPlainString(c.default.gMyQrH, {
      memberName: (0, l.XM)(r),
      premiumGroupProductName: (0, u.sO)(),
      cooldownMonths: u.T9
    }),
    onClose: f,
    actions: [{
      text: s.intl.string(c.default.dlr8CX),
      variant: "critical-primary",
      onClick: m,
      loading: p
    }]
  }, b))
}