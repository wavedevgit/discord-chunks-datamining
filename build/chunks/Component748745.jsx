/** Chunk was on 39159 **/
/** chunk id: 748745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk693587 = require("./693587.js"),
  Chunk967647 = require("./967647.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js"),
  Chunk961820 = require("./961820.js");

function j(e) {
  let {
    guildId: n,
    gameInstance: t,
    cost: r
  } = e;
  return (0, i.jsx)(c.ua7, {
    "aria-label": p.intl.string(f.default.TZsu1d),
    text: (0, i.jsx)(u.Po, {
      cost: r
    }),
    children: e => {
      var l, o;
      return (0, i.jsx)(s.zx, (l = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), i.forEach(function(n) {
            var i;
            i = t[n], n in e ? Object.defineProperty(e, n, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = i
          })
        }
        return e
      }({}, e), o = o = {
        className: a()(v.secondaryButton, x.disableButton),
        innerClassName: v.buttonInner,
        wrapperClassName: v.secondaryButton,
        color: s.Tt.PRIMARY,
        "aria-label": p.intl.string(f.default.TZsu1d),
        onClick: e => {
          e.stopPropagation(), (0, g.Q)(n, t)
        },
        children: (0, i.jsx)(u.RD, {
          cost: r,
          isActive: true,
          compact: true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t.push.apply(t, i)
        }
        return t
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e))
      }), l))
    }
  })
}

function b(e) {
  var n, t, l, a;
  let {
    guildId: s,
    gameInstance: u,
    onClick: g
  } = e, v = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(s)), b = r.useMemo(() => {
    var e;
    return null == v || null == (e = v.entitlements) ? true : e[u.entitlementId]
  }, [null == v ? true : v.entitlements, u.entitlementId]), h = (null == b ? true : b.ends_at) != null, _ = null == b || null == (a = b.sku) || null == (l = a.tenant_metadata) || null == (t = l.guild_monetization) || null == (n = t.game_server) ? true : n.boost_price;
  return null == _ ? null : (0, i.jsxs)(c.P3F, {
    className: x.game,
    onClick: () => g(u),
    children: [(0, i.jsx)("img", {
      className: x.image,
      alt: ""
    }), (0, i.jsxs)("div", {
      className: x.textContainer,
      children: [(0, i.jsx)(c.X6q, {
        variant: "heading-sm/semibold",
        children: u.name
      }), h ? (0, i.jsx)(d.rL, {
        dateString: b.ends_at
      }) : (0, i.jsx)(d.P2, {
        text: p.intl.string(f.default.FFLkm5)
      })]
    }), (0, i.jsx)(j, {
      guildId: s,
      gameInstance: u,
      cost: _
    })]
  })
}