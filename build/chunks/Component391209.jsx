/** Chunk was on 96914 **/
/** chunk id: 391209, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk503852 = require("./503852.js"),
  Chunk363487 = require("./363487.js"),
  Chunk998418 = require("./998418.js"),
  Chunk193157 = require("./193157.jsx"),
  Chunk439156 = require("./439156.jsx"),
  Chunk568065 = require("./568065.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk750845 = require("./750845.js"),
  Chunk107836 = require("./107836.js");

function O(e) {
  var t, r;
  let {
    guildId: a,
    powerup: O,
    onClose: I
  } = e, k = function(e, t) {
    if (null == e) return {};
    var r, n, o, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
      return a
    }
    if (a = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          a = Object.getOwnPropertyNames(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    return a
  }(e, ["guildId", "powerup", "onClose"]), [y, j] = o.useState(true), T = (0, d.Ay)(a, O), g = T.type === b.b_.TIER_OVERRIDE_ACTIVATED, P = (0, l.A)(a), E = null == T.sourceEntitlement || !P;
  return (0, i.Z)(a, O, i.q.DETAIL), (0, n.jsxs)(c.EOs, (t = function(e) {
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
    className: m.yl,
    size: c.rIJ.DYNAMIC
  }, k), r = r = {
    parentComponent: "GuildPowerupLevelModal",
    children: [(0, n.jsxs)(c.$mQ, {
      "data-migration-pending": true,
      className: m._F,
      scrollbarType: "none",
      children: [(0, n.jsx)("img", {
        alt: "",
        src: _,
        className: m.v5
      }), (0, n.jsxs)("div", {
        className: m.hQ,
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-xl/extrabold",
          children: O.title
        }), (0, n.jsx)(u.A, {
          powerup: O
        }), null != y && (0, n.jsx)(c.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/semibold",
          children: y
        }), (0, n.jsxs)("div", {
          className: s()(m.qr, {
            [m.r9]: E
          }),
          children: [!g && P && (0, n.jsx)(p.A, {
            guildId: a,
            powerup: O,
            onError: j,
            grow: false,
            compact: !E
          }), (0, n.jsx)(c.Button, {
            variant: E ? "secondary" : "primary",
            onClick: I,
            text: f.intl.string(f.t.cpT0Cq)
          })]
        })]
      })]
    }), (0, n.jsx)(c.s_y, {
      "data-migration-pending": true,
      className: m.VN,
      onClick: I
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