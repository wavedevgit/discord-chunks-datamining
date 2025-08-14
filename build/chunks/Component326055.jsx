/** Chunk was on 52549 **/
/** chunk id: 326055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802795 = require("./802795.js");

function v(e) {
  var t, n, {
      guildId: v,
      powerup: k
    } = e,
    C = function(e, t) {
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
    switch (k.skuId) {
      case a.IN:
        return (0, r.jsx)(_.E, {
          guildId: v
        });
      case a.If:
        return (0, r.jsx)(_.Z, {});
      case a.A$:
        return (0, r.jsx)(g.Z, {});
      default:
        return
    }
  }, [k, v]);
  (0, d.$)(v, k, d.w.DETAIL);
  let S = (0, u.Z)(v),
    P = f.Rx[k.skuId],
    I = null != P ? f.Cp[P] : null,
    E = (0, s.e7)([c.Z], () => c.Z.getStateForGuild(v)),
    N = null != I ? null == E ? true : E.allPowerups[I] : null;
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
  }, C), n = n = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, r.jsxs)(i.hzk, {
      className: j.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: j.sidebar,
        children: [(0, r.jsx)(l.$, {
          className: j.powerupImage,
          children: (0, r.jsx)(m.m, {
            powerup: k
          })
        }), (0, r.jsxs)("div", {
          className: j.contentContainer,
          children: [(0, r.jsx)(i.X6q, {
            variant: "heading-xl/extrabold",
            children: k.title
          }), (0, r.jsx)(i.Text, {
            className: j.description,
            variant: "text-sm/normal",
            children: k.description
          }), null != N && (0, r.jsx)(i.Text, {
            className: j.description,
            variant: "text-sm/normal",
            children: h.intl.formatToPlainString(x.default.NAFGkJ, {
              level: N.title
            })
          }), (0, r.jsx)(b.q, {
            powerup: k
          }), null != y && (0, r.jsx)(i.Text, {
            className: j.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: y
          }), S && (0, r.jsx)(p.ZP, {
            className: j.footer,
            guildId: v,
            powerup: k,
            onError: O
          })]
        })]
      }), null != w && (0, r.jsx)("div", {
        className: j.exampleImage,
        children: w
      })]
    }), (0, r.jsx)(i.olH, {
      className: j.close,
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