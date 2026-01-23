/** Chunk was on 34249 **/
/** chunk id: 940481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk512750 = require("./512750.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk645619 = require("./645619.js"),
  Chunk503852 = require("./503852.js"),
  Chunk363487 = require("./363487.js"),
  Chunk722523 = require("./722523.jsx"),
  Chunk490557 = require("./490557.jsx"),
  Chunk214676 = require("./214676.jsx"),
  Chunk499623 = require("./499623.jsx"),
  Chunk428050 = require("./428050.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk712957 = require("./712957.js");

function h(e) {
  var t, r;
  let {
    guildId: h,
    powerup: O
  } = e, y = function(e, t) {
    if (null == e) return {};
    var r, n, l, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, l = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["guildId", "powerup"]), [v, k] = l.useState(true), C = l.useMemo(() => {
    switch (O.skuId) {
      case a.SL:
        return (0, n.jsx)(p.L, {
          guildId: h
        });
      case a.aN:
        return (0, n.jsx)(p.T, {});
      case a.FB:
        return (0, n.jsx)(m.A, {});
      default:
        return
    }
  }, [O, h]);
  (0, c.Z)(h, O, c.q.DETAIL);
  let w = (0, d.A)(h),
    S = g.wr[O.skuId],
    N = null != S ? g.a8[S] : null,
    P = (0, s.bG)([i.A], () => i.A.getStateForGuild(h)),
    I = null != N ? null == P ? true : P.allPowerups[N] : null;
  return (0, n.jsxs)(o.EOs, (t = function(e) {
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
    "data-migration-pending": true,
    className: j.yl,
    size: o.rIJ.DYNAMIC
  }, y), r = r = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, n.jsxs)(o.$mQ, {
      "data-migration-pending": true,
      className: j._F,
      scrollbarType: "none",
      children: [(0, n.jsxs)("div", {
        className: j.pz,
        children: [(0, n.jsx)(o.hLv, {
          className: j.UZ,
          children: (0, n.jsx)(b.l, {
            powerup: O
          })
        }), (0, n.jsxs)("div", {
          className: j.hQ,
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-xl/extrabold",
            children: O.title
          }), (0, n.jsx)(o.Text, {
            className: j.h_,
            variant: "text-sm/normal",
            children: O.description
          }), null != I && (0, n.jsx)(o.Text, {
            className: j.h_,
            variant: "text-sm/normal",
            children: x.intl.formatToPlainString(_.default.NAFGkH, {
              level: I.title
            })
          }), (0, n.jsx)(f.F, {
            powerup: O
          }), null != v && (0, n.jsx)(o.Text, {
            className: j.z3,
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: v
          }), w && (0, n.jsx)(u.Ay, {
            className: j.qr,
            guildId: h,
            powerup: O,
            onError: k
          })]
        })]
      }), null != C && (0, n.jsx)("div", {
        className: j._9,
        children: C
      })]
    }), (0, n.jsx)(o.s_y, {
      "data-migration-pending": true,
      className: j.VN,
      onClick: y.onClose
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
  }), t))
}