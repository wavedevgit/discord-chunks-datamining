/** Chunk was on 64767 **/
/** chunk id: 754887, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk639777 = require("./639777.js"),
  Chunk507155 = require("./507155.jsx"),
  Chunk340236 = require("./340236.js");

function d(e) {
  var t, r, {
      guildId: d,
      title: c,
      description: u,
      powerups: p,
      footerInfoText: f,
      footerAction: b
    } = e,
    v = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["guildId", "title", "description", "powerups", "footerInfoText", "footerAction"]);
  let j = (0, i.Z)(d),
    m = null != f && f.length > 0 ? (0, n.jsx)("div", {
      className: l.footerInfoContainer,
      children: (0, n.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: f
      })
    }) : true;
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
    title: c,
    subtitle: u,
    actionBarInput: m,
    actions: null != b ? [b] : []
  }, v), r = r = {
    children: (0, n.jsx)("div", {
      className: l.perkCardsContainer,
      children: p.map(e => (0, n.jsx)(s.Z, {
        guildId: d,
        powerup: e,
        canUseBoosts: null != j && j
      }, e.skuId))
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