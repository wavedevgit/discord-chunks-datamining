/** Chunk was on 64767 **/
/** chunk id: 754887, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk639777 = require("./639777.js"),
  Chunk507155 = require("./507155.jsx"),
  Chunk679051 = require("./679051.js");

function l(e) {
  var t, r, {
      guildId: l,
      title: d,
      description: c,
      powerups: u,
      footerInfoText: p,
      footerButtonText: f,
      footerButtonOnClick: x
    } = e,
    m = function(e, t) {
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
    }(e, ["guildId", "title", "description", "powerups", "footerInfoText", "footerButtonText", "footerButtonOnClick"]);
  let j = null != p && p.length > 0,
    v = null != f && f.length > 0 && null != x,
    C = j || v,
    g = (0, a.Z)(l);
  return <o.Y0X{...t = function(e) {
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
    size: o.CgR.DYNAMIC
  }, m), r = r = {
    parentComponent: "GuildPowerupPerkGroupModal",
    children: [(0, n.jsxs)(o.hzk, {
      className: s.modalContentContainer,
      scrollbarType: "none",
      children: [(0, n.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: d
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: c
      }), (0, n.jsx)("div", {
        className: s.perkCardsContainer,
        children: u.map(e => (0, n.jsx)(i.Z, {
          guildId: l,
          powerup: e,
          canUseBoosts: null != g && g
        }, e.skuId))
      })]
    }), C && (0, n.jsx)(o.mzw, {
      children: (0, n.jsxs)("div", {
        className: s.footerContainer,
        children: [j && (0, n.jsxs)("div", {
          className: s.footerInfoContainer,
          children: [(0, n.jsx)(o.d3s, {
            size: "sm"
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            children: p
          })]
        }), v && (0, n.jsx)("div", {
          children: (0, n.jsx)(o.zxk, {
            variant: "secondary",
            size: "md",
            text: f,
            onClick: x
          })
        })]
      })
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t} />
}