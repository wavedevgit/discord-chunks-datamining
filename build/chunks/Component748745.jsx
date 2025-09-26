/** Chunk was on 60728 **/
/** chunk id: 748745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk693587 = require("./693587.js"),
  Chunk943970 = require("./943970.js"),
  Chunk967647 = require("./967647.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js"),
  Chunk961820 = require("./961820.js");

function x(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: i
  } = e;
  return (0, l.jsx)(c.ua7, {
    "aria-label": b.intl.string(g.default.TZsu1d),
    text: (0, l.jsx)(d.Po, {
      cost: i
    }),
    children: e => {
      var a, s;
      return (0, l.jsx)(o.zx, (a = function(e) {
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
        className: r()(p.secondaryButton, j.disableButton),
        innerClassName: p.buttonInner,
        wrapperClassName: p.secondaryButton,
        color: o.Tt.PRIMARY,
        "aria-label": b.intl.string(g.default.TZsu1d),
        onClick: e => {
          e.stopPropagation(), (0, f.Q)(t, n)
        },
        children: (0, l.jsx)(d.RD, {
          cost: i,
          isActive: true,
          compact: true
        })
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

function y(e) {
  var t, n, a, r;
  let {
    guildId: o,
    gameInstance: d,
    onClick: f
  } = e, p = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(o)), y = i.useMemo(() => {
    var e;
    return null == p || null == (e = p.entitlements) ? true : e[d.entitlementId]
  }, [null == p ? true : p.entitlements, d.entitlementId]), h = (null == y ? true : y.ends_at) != null, O = null == y || null == (r = y.sku) || null == (a = r.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price, P = (0, v.Z)(d.gameId, "icon");
  return null == O ? null : (0, l.jsxs)(c.P3F, {
    className: j.game,
    onClick: () => f(d),
    children: [(0, l.jsx)("img", {
      className: j.image,
      alt: "",
      src: P
    }), (0, l.jsxs)("div", {
      className: j.textContainer,
      children: [(0, l.jsx)(c.X6q, {
        variant: "heading-sm/semibold",
        children: d.name
      }), h ? (0, l.jsx)(u.rL, {
        dateString: y.ends_at
      }) : (0, l.jsx)(u.P2, {
        text: b.intl.string(g.default.FFLkm5)
      })]
    }), (0, l.jsx)(x, {
      guildId: o,
      gameInstance: d,
      cost: O
    })]
  })
}