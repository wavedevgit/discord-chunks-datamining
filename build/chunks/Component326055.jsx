/** Chunk was on 20572 **/
/** chunk id: 326055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk494497 = require("./494497.js"),
  Chunk442837 = require("./442837.js"),
  Chunk304789 = require("./304789.jsx"),
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
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk825268 = require("./825268.js");

function v(e) {
  var t, n, {
      guildId: v,
      powerup: x
    } = e,
    k = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let [y, O] = o.useState(true), w = o.useMemo(() => {
    switch (x.skuId) {
      case a.IN:
        return (0, r.jsx)(g.E, {
          guildId: v
        });
      case a.If:
        return (0, r.jsx)(g.Z, {});
      case a.A$:
        return (0, r.jsx)(b.Z, {});
      default:
        return
    }
  }, [x, v]);
  (0, d.$)(v, x, d.w.DETAIL);
  let S = (0, u.Z)(v),
    P = f.Rx[x.skuId],
    E = null != P ? f.Cp[P] : null,
    N = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(v)),
    I = null != E ? null == N ? true : N.allPowerups[E] : null;
  return (0, r.jsxs)(i.Y0X, (t = function(e) {
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
    className: j.modal,
    size: i.CgR.DYNAMIC
  }, k), n = n = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, r.jsxs)(i.hzk, {
      className: j.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: j.sidebar,
        children: [(0, r.jsx)(l.$, {
          className: j.powerupImage,
          children: (0, r.jsx)(m.m, {
            powerup: x
          })
        }), (0, r.jsxs)("div", {
          className: j.contentContainer,
          children: [(0, r.jsx)(i.X6q, {
            variant: "heading-xl/extrabold",
            children: x.title
          }), (0, r.jsx)(i.Text, {
            className: j.description,
            variant: "text-sm/normal",
            children: x.description
          }), null != I && (0, r.jsx)(i.Text, {
            className: j.description,
            variant: "text-sm/normal",
            children: h.intl.formatToPlainString(C.default.NAFGkJ, {
              level: I.title
            })
          }), (0, r.jsx)(_.q, {
            powerup: x
          }), null != y && (0, r.jsx)(i.Text, {
            className: j.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: y
          }), S && (0, r.jsx)(p.ZP, {
            className: j.footer,
            guildId: v,
            powerup: x,
            onError: O
          })]
        })]
      }), null != w && (0, r.jsx)("div", {
        className: j.exampleImage,
        children: w
      })]
    }), (0, r.jsx)(i.olH, {
      className: j.close,
      onClick: k.onClose
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