/** Chunk was on 59256 **/
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
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk804258 = require("./804258.js");

function v(e) {
  var t, n, {
      guildId: v,
      powerup: y
    } = e,
    O = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let [k, C] = o.useState(true), P = o.useMemo(() => {
    switch (y.skuId) {
      case h.IN:
        return (0, r.jsx)(m.E, {
          guildId: v
        });
      case h.If:
        return (0, r.jsx)(m.Z, {});
      case l.A$:
        return (0, r.jsx)(g.Z, {});
      default:
        return
    }
  }, [y, v]);
  (0, u.$)(v, y, u.w.DETAIL);
  let w = (0, d.Z)(v),
    S = h.Rx[y.skuId],
    I = null != S ? h.Cp[S] : null,
    E = (0, a.e7)([c.Z], () => c.Z.getStateForGuild(v)),
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
    className: x.modal,
    size: i.CgR.DYNAMIC
  }, O), n = n = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, r.jsxs)(i.hzk, {
      className: x.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsxs)("div", {
        className: x.sidebar,
        children: [(0, r.jsx)(s.$, {
          className: x.powerupImage,
          children: (0, r.jsx)(f.m, {
            powerup: y
          })
        }), (0, r.jsxs)("div", {
          className: x.contentContainer,
          children: [(0, r.jsx)(i.X6q, {
            variant: "heading-xl/extrabold",
            children: y.title
          }), (0, r.jsx)(i.Text, {
            className: x.description,
            variant: "text-sm/normal",
            children: y.description
          }), null != N && (0, r.jsx)(i.Text, {
            className: x.description,
            variant: "text-sm/normal",
            children: j.intl.formatToPlainString(_.default.NAFGkJ, {
              level: N.title
            })
          }), (0, r.jsx)(b.q, {
            powerup: y
          }), null != k && (0, r.jsx)(i.Text, {
            className: x.error,
            color: "status-danger",
            variant: "text-sm/semibold",
            children: k
          }), w && (0, r.jsx)(p.ZP, {
            className: x.footer,
            guildId: v,
            powerup: y,
            onError: C
          })]
        })]
      }), null != P && (0, r.jsx)("div", {
        className: x.exampleImage,
        children: P
      })]
    }), (0, r.jsx)(i.olH, {
      className: x.close,
      onClick: O.onClose
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