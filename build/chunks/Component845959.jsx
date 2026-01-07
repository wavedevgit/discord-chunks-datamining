/** Chunk was on 30153 **/
/** chunk id: 845959, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk80721 = require("./80721.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
  var t, r, {
      subscriptionId: d,
      member: y,
      onClose: m
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["subscriptionId", "member", "onClose"]);
  let [j, P] = (0, i.useState)(false), [M, _] = (0, i.useState)(false);
  (0, l.ZP)(() => {
    a.default.track(p.rMx.PREMIUM_GROUP_REMOVE_MEMBER_MODAL_VIEWED, {
      subscription_id: d,
      member_user_id: y.id
    })
  });
  let E = async () => {
    a.default.track(p.rMx.PREMIUM_GROUP_REMOVE_MEMBER_CTA_CLICKED, {
      subscription_id: d,
      member_user_id: y.id
    }), P(true);
    let e = await (0, u.Jn)(d, y.id);
    P(false), e.ok ? m() : _(true)
  };
  return (0, n.jsx)(o.Modal, (t = function(e) {
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
    title: f.intl.string(O.default.MJIHXY),
    subtitle: f.intl.formatToPlainString(O.default.gMyQrH, {
      memberName: (0, s.XM)(y),
      premiumGroupProductName: (0, b.sO)(),
      cooldownMonths: b.T9
    }),
    onClose: m,
    actions: [{
      text: f.intl.string(O.default.dlr8CX),
      variant: "critical-primary",
      onClick: E,
      loading: j
    }]
  }, g), r = r = {
    children: M && (0, n.jsx)(c.M14, {
      type: "critical",
      children: f.intl.string(f.t["rTU7/z"])
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