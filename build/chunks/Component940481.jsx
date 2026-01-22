/** Chunk was on 34249 **/
/** chunk id: 940481, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
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

function O(e) {
  var t, r;
  let {
    guildId: O,
    powerup: y
  } = e, v = function(e, t) {
    if (null == e) return {};
    var r, n, a, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (a = 0, r = Reflect.ownKeys(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          l = Object.getOwnPropertyNames(e);
        for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
      }(e, t), Object.getOwnPropertySymbols)
      for (a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    return l
  }(e, ["guildId", "powerup"]), [_, N] = a.useState(true), w = a.useMemo(() => {
    switch (y.skuId) {
      case l.SL:
        return (0, n.jsx)(f.L, {
          guildId: O
        });
      case l.aN:
        return (0, n.jsx)(f.T, {});
      case l.FB:
        return (0, n.jsx)(m.A, {});
      default:
        return
    }
  }, [y, O]);
  (0, o.Z)(O, y, o.q.DETAIL);
  let k = (0, d.A)(O),
    S = j.wr[y.skuId],
    P = null != S ? j.a8[S] : null,
    C = (0, s.bG)([i.A], () => i.A.getStateForGuild(O)),
    A = null != P ? null == C ? true : C.allPowerups[P] : null;
  return (0, n.jsxs)(c.EOs, (t = function(e) {
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
    className: h.yl,
    size: c.rIJ.DYNAMIC
  }, v), r = r = {
    parentComponent: "GuildPowerupPerkModal",
    children: [(0, n.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: h._F,
      scrollbarType: "none",
      children: [(0, n.jsxs)("div", {
        className: h.pz,
        children: [(0, n.jsx)(c.hLv, {
          className: h.UZ,
          children: (0, n.jsx)(b.l, {
            powerup: y
          })
        }), (0, n.jsxs)("div", {
          className: h.hQ,
          children: [(0, n.jsx)(c.Heading, {
            variant: "heading-xl/extrabold",
            children: y.title
          }), (0, n.jsx)(c.Text, {
            className: h.h_,
            variant: "text-sm/normal",
            children: y.description
          }), null != A && (0, n.jsx)(c.Text, {
            className: h.h_,
            variant: "text-sm/normal",
            children: g.intl.formatToPlainString(x.default.NAFGkH, {
              level: A.title
            })
          }), (0, n.jsx)(p.F, {
            powerup: y
          }), null != _ && (0, n.jsx)(c.Text, {
            className: h.z3,
            color: "text-feedback-critical",
            variant: "text-sm/semibold",
            children: _
          }), k && (0, n.jsx)(u.Ay, {
            className: h.qr,
            guildId: O,
            powerup: y,
            onError: N
          })]
        })]
      }), null != w && (0, n.jsx)("div", {
        className: h._9,
        children: w
      })]
    }), (0, n.jsx)(c.s_y, {
      "data-migration-pending": true,
      className: h.VN,
      onClick: v.onClose
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