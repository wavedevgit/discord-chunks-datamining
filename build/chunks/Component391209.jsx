/** Chunk was on 96914 **/
/** chunk id: 391209, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
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

function I(e) {
  var t, r;
  let {
    guildId: s,
    powerup: I,
    onClose: k
  } = e, y = function(e, t) {
    if (null == e) return {};
    var r, a, n, s = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (n = 0, r = Reflect.ownKeys(e); n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
      return s
    }
    if (s = function(e, t) {
        if (null == e) return {};
        var r, a, n = {},
          s = Object.getOwnPropertyNames(e);
        for (a = 0; a < s.length; a++) r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
        return n
      }(e, t), Object.getOwnPropertySymbols)
      for (n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) a = r[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
    return s
  }(e, ["guildId", "powerup", "onClose"]), [j, _] = n.useState(true), T = (0, d.Ay)(s, I), P = T.type === f.b_.TIER_OVERRIDE_ACTIVATED, g = (0, i.A)(s), E = null == T.sourceEntitlement || !g;
  return (0, l.Z)(s, I, l.q.DETAIL), (0, a.jsxs)(o.EOs, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = r[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({
    "data-migration-pending": true,
    className: m.yl,
    size: o.rIJ.DYNAMIC
  }, y), r = r = {
    parentComponent: "GuildPowerupLevelModal",
    children: [(0, a.jsxs)(o.$mQ, {
      "data-migration-pending": true,
      className: m._F,
      scrollbarType: "none",
      children: [(0, a.jsx)("img", {
        alt: "",
        src: O,
        className: m.v5
      }), (0, a.jsxs)("div", {
        className: m.hQ,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/extrabold",
          children: I.title
        }), (0, a.jsx)(u.A, {
          powerup: I
        }), null != j && (0, a.jsx)(o.Text, {
          color: "text-feedback-critical",
          variant: "text-sm/semibold",
          children: j
        }), (0, a.jsxs)("div", {
          className: c()(m.qr, {
            [m.r9]: E
          }),
          children: [!P && g && (0, a.jsx)(p.A, {
            guildId: s,
            powerup: I,
            onError: _,
            grow: false,
            compact: !E
          }), (0, a.jsx)(o.Button, {
            variant: E ? "secondary" : "primary",
            onClick: k,
            text: b.intl.string(b.t.cpT0Cq)
          })]
        })]
      })]
    }), (0, a.jsx)(o.s_y, {
      "data-migration-pending": true,
      className: m.VN,
      onClick: k
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      r.push.apply(r, a)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}