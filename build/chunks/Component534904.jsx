/** Chunk was on 56065 **/
/** chunk id: 534904, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk363487 = require("./363487.js"),
  Chunk539085 = require("./539085.jsx"),
  Chunk154 = require("./154.js");

function c(e) {
  var t, r;
  let {
    guildId: c,
    title: d,
    description: u,
    powerups: p,
    footerInfoText: f,
    footerAction: x
  } = e, j = function(e, t) {
    if (null == e) return {};
    var r, n, o, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          s = Object.getOwnPropertyNames(e);
        for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
  }(e, ["guildId", "title", "description", "powerups", "footerInfoText", "footerAction"]), m = (0, a.A)(c), b = null != f && f.length > 0 ? (0, n.jsx)("div", {
    className: l.x,
    children: (0, n.jsx)(s.Text, {
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
    title: d,
    subtitle: u,
    actionBarInput: b,
    actions: null != x ? [x] : []
  }, j), r = r = {
    children: (0, n.jsx)("div", {
      className: l.p,
      children: p.map(e => (0, n.jsx)(i.A, {
        guildId: c,
        powerup: e,
        canUseBoosts: null != m && m
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