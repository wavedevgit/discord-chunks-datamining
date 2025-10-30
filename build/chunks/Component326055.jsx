/** Chunk was on 45854 **/
/** chunk id: 326055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk789142 = require("./789142.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825268 = require("./825268.js");

function j(e) {
  var t, n, {
      guildId: j,
      powerup: v
    } = e,
    x = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["guildId", "powerup"]);
  let [k, y] = a.useState(true), O = a.useMemo(() => {
    switch (v.skuId) {
      case o.IN:
        return (0, r.jsx)(m.E, {
          guildId: j
        });
      case o.If:
        return (0, r.jsx)(m.Z, {});
      case o.A$:
        return (0, r.jsx)(b.Z, {});
      default:
        return
    }
  }, [v, j]);
  (0, c.$)(j, v, c.w.DETAIL);
  let w = (0, d.Z)(j),
    S = _.Rx[v.skuId],
    P = null != S ? _.Cp[S] : null,
    E = (0, s.e7)([i.Z], () => i.Z.getStateForGuild(j)),
    N = null != P ? null == E ? true : E.allPowerups[P] : null;
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
  }, x), n = n = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, r.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: h.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: h.sidebar,
        children: [(0, r.jsx)(l.$1m, {
          className: h.powerupImage,
          children: (0, r.jsx)(p.m, {
            powerup: v
          })
        }), (0, r.jsxs)("div", {
          className: h.contentContainer,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-xl/extrabold",
            children: v.title
          }), (0, r.jsx)(l.Text, {
            className: h.description,
            variant: "text-sm/normal",
            children: v.description
          }), null != N && (0, r.jsx)(l.Text, {
            className: h.description,
            variant: "text-sm/normal",
            children: C.intl.formatToPlainString(f.default.NAFGkH, {
              level: N.title
            })
          }), (0, r.jsx)(g.q, {
            powerup: v
          }), null != k && (0, r.jsx)(l.Text, {
            className: h.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: k
          }), w && (0, r.jsx)(u.ZP, {
            className: h.footer,
            guildId: j,
            powerup: v,
            onError: y
          })]
        })]
      }), null != O && (0, r.jsx)("div", {
        className: h.exampleImage,
        children: O
      })]
    }), (0, r.jsx)(l.olH, {
      "data-migration-pending": true,
      className: h.close,
      onClick: x.onClose
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