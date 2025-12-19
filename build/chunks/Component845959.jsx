/** Chunk was on 30153 **/
/** chunk id: 845959, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk51144 = require("./51144.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let b = e => {
  var t, r, {
      subscriptionId: b,
      member: f,
      onClose: O
    } = e,
    y = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["subscriptionId", "member", "onClose"]);
  let [d, g] = (0, o.useState)(false), [j, m] = (0, o.useState)(false), w = async () => {
    g(true);
    let e = await (0, a.Jn)(b, f.id);
    g(false), e.ok ? O() : m(true)
  };
  return (0, n.jsx)(i.Modal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    size: "md",
    title: p.intl.string(u.default.MJIHXY),
    subtitle: p.intl.formatToPlainString(u.default.gMyQrH, {
      memberName: (0, l.XM)(f),
      premiumGroupProductName: (0, s.sO)(),
      cooldownMonths: s.T9
    }),
    onClose: O,
    actions: [{
      text: p.intl.string(u.default.dlr8CX),
      variant: "critical-primary",
      onClick: w,
      loading: d
    }]
  }, y), r = r = {
    children: j && (0, n.jsx)(c.M14, {
      type: "critical",
      children: p.intl.string(p.t["rTU7/z"])
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}