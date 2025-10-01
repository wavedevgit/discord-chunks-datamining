/** Chunk was on 952 **/
/** chunk id: 748745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk693587 = require("./693587.js"),
  Chunk943970 = require("./943970.js"),
  Chunk967647 = require("./967647.jsx"),
  Chunk258640 = require("./258640.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958751 = require("./958751.js");

function b(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: i
  } = e;
  return (0, l.jsx)(r.ua7, {
    "aria-label": v.intl.string(m.default.TZsu1d),
    text: (0, l.jsx)(o.Po, {
      cost: i
    }),
    children: e => {
      var a, s;
      return (0, l.jsx)("div", {
        className: f.disableButton,
        children: (0, l.jsx)(r.zxk, (a = function(e) {
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
          icon: {
            type: "icon",
            asset: r.mTd
          },
          text: i.toString(),
          variant: "secondary",
          size: "sm",
          "aria-label": v.intl.string(m.default.TZsu1d),
          onClick: e => {
            e.stopPropagation(), (0, d.Q)(t, n)
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
      })
    }
  })
}

function g(e) {
  var t, n, o, d;
  let {
    guildId: g,
    gameInstance: p,
    onClick: j
  } = e, y = (0, a.e7)([c.Z], () => c.Z.getStateForGuild(g)), x = i.useMemo(() => {
    var e;
    return null == y || null == (e = y.entitlements) ? true : e[p.entitlementId]
  }, [null == y ? true : y.entitlements, p.entitlementId]), O = (null == x ? true : x.ends_at) != null, h = null == x || null == (d = x.sku) || null == (o = d.tenant_metadata) || null == (n = o.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price, P = (0, u.Z)(p.gameId, "icon");
  return null == h ? null : (0, l.jsxs)(r.P3F, {
    className: f.game,
    onClick: () => j(p),
    children: [(0, l.jsx)("img", {
      className: f.image,
      alt: "",
      src: P
    }), (0, l.jsxs)("div", {
      className: f.textContainer,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-sm/semibold",
        children: p.name
      }), O ? (0, l.jsx)(s.rL, {
        dateString: x.ends_at
      }) : (0, l.jsx)(s.P2, {
        text: v.intl.string(m.default.FFLkm5)
      })]
    }), (0, l.jsx)(b, {
      guildId: g,
      gameInstance: p,
      cost: h
    })]
  })
}