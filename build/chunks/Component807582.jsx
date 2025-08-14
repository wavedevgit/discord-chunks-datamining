/** Chunk was on 74261 **/
/** chunk id: 807582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk158638 = require("./158638.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk552461 = require("./552461.js");
let f = e => {
  let t, n, i, {
      guildFeature: f,
      guild: p,
      className: u,
      hideTooltip: m = false,
      tooltipPosition: b = "left",
      onClick: v
    } = e,
    g = p.features.has(f),
    h = (0, c.AR)(p.id, "GuildSettingsBoostPerks"),
    y = (0, l._p)(f);
  return !g && f === s.oNc.VANITY_URL && h ? null : (g ? (null != y && (i = d.intl.string(d.t.hUgjyM)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: _.unlockedIcon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: d.intl.string(d.t["0O+87u"])
    })]
  })) : (null != y && (i = d.intl.string(d.t.L2wYYm)), t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.$Eu, {
      color: "currentColor",
      className: _.icon
    }), (0, r.jsx)(a.X6q, {
      variant: "eyebrow",
      className: _.description,
      children: null != y && (0, l.e9)(y)
    })]
  })), n = m || null == i ? (0, r.jsx)("div", {
    className: o()(_.availabilityIndicator, u),
    children: t
  }) : (0, r.jsx)(a.ua7, {
    position: b,
    text: i,
    children: e => {
      var n, i;
      return (0, r.jsx)("div", (n = function(e) {
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
      }({}, e), i = i = {
        className: o()(_.availabilityIndicator, u),
        children: t
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  }), null == v || g) ? n : (0, r.jsx)(a.P3F, {
    onClick: v,
    className: _.clickable,
    children: n
  })
}