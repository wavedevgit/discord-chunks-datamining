/** Chunk was on 60728 **/
/** chunk id: 748745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk693587 = require("./693587.js"),
  Chunk967647 = require("./967647.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk961820 = require("./961820.js");

function g(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: i
  } = e;
  return (0, l.jsx)(r.ua7, {
    "aria-label": m.intl.string(d.default.TZsu1d),
    text: (0, l.jsx)(o.P, {
      cost: i
    }),
    children: e => {
      var a, s;
      return (0, l.jsx)(r.zxk, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({}, e), s = s = {
        variant: "secondary",
        "aria-label": m.intl.string(d.default.TZsu1d),
        text: i.toString(),
        icon: r.mTd,
        iconPosition: "start",
        onClick: e => {
          e.stopPropagation(), (0, c.Q)(t, n)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
      }), a))
    }
  })
}

function f(e) {
  var t, n, o, c;
  let {
    guildId: f,
    gameInstance: b,
    onClick: j
  } = e, p = (0, a.e7)([u.Z], () => u.Z.getStateForGuild(f)), x = i.useMemo(() => {
    var e;
    return null == p || null == (e = p.entitlements) ? true : e[b.entitlementId]
  }, [null == p ? true : p.entitlements, b.entitlementId]), y = (null == x ? true : x.ends_at) != null, h = null == x || null == (c = x.sku) || null == (o = c.tenant_metadata) || null == (n = o.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price;
  return null == h ? null : (0, l.jsxs)(r.P3F, {
    className: v.game,
    onClick: () => j(b),
    children: [(0, l.jsx)("img", {
      className: v.image,
      alt: ""
    }), (0, l.jsxs)("div", {
      className: v.textContainer,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-sm/semibold",
        children: b.name
      }), y ? (0, l.jsx)(s.rL, {
        dateString: x.ends_at
      }) : (0, l.jsx)(s.P2, {
        text: m.intl.string(d.default.FFLkm5)
      })]
    }), (0, l.jsx)(g, {
      guildId: f,
      gameInstance: b,
      cost: h
    })]
  })
}