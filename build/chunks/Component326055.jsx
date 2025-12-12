/** Chunk was on 17185 **/
/** chunk id: 326055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk905128 = require("./905128.js"),
  Chunk870246 = require("./870246.js"),
  Chunk639777 = require("./639777.js"),
  Chunk262212 = require("./262212.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk845602 = require("./845602.jsx"),
  Chunk603213 = require("./603213.jsx"),
  Chunk606876 = require("./606876.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98834 = require("./98834.js");

function v(e) {
  var t, n, {
      guildId: v,
      powerup: k
    } = e,
    C = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["guildId", "powerup"]);
  let [O, y] = a.useState(true), _ = a.useMemo(() => {
    switch (k.skuId) {
      case s.IN:
        return (0, r.jsx)(m.E, {
          guildId: v
        });
      case s.If:
        return (0, r.jsx)(m.Z, {});
      case s.A$:
        return (0, r.jsx)(b.Z, {});
      default:
        return
    }
  }, [k, v]);
  (0, c.$)(v, k, c.w.DETAIL);
  let S = (0, d.Z)(v),
    P = p.Rx[k.skuId],
    w = null != P ? p.Cp[P] : null,
    N = (0, o.e7)([i.Z], () => i.Z.getStateForGuild(v)),
    E = null != w ? null == N ? true : N.allPowerups[w] : null;
  return (0, r.jsxs)(l.Y0X, (t = function(e) {
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
  }({
    "data-migration-pending": true,
    className: h.modal,
    size: l.CgR.DYNAMIC
  }, C), n = n = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: h.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: h.sidebar,
        children: [(0, r.jsx)(l.$1m, {
          className: h.powerupImage,
          children: (0, r.jsx)(g.m, {
            powerup: k
          })
        }), (0, r.jsxs)("div", {
          className: h.contentContainer,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-xl/extrabold",
            children: k.title
          }), (0, r.jsx)(l.Text, {
            className: h.description,
            variant: "text-sm/normal",
            children: k.description
          }), null != E && (0, r.jsx)(l.Text, {
            className: h.description,
            variant: "text-sm/normal",
            children: j.intl.formatToPlainString(x.default.NAFGkH, {
              level: E.title
            })
          }), (0, r.jsx)(f.q, {
            powerup: k
          }), null != O && (0, r.jsx)(l.Text, {
            className: h.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: O
          }), S && (0, r.jsx)(u.ZP, {
            className: h.footer,
            guildId: v,
            powerup: k,
            onError: y
          })]
        })]
      }), null != _ && (0, r.jsx)("div", {
        className: h.exampleImage,
        children: _
      })]
    }), (0, r.jsx)(l.olH, {
      "data-migration-pending": true,
      className: h.close,
      onClick: C.onClose
    })]
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
}