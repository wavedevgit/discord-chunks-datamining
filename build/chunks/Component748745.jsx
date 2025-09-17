/** Chunk was on 39159 **/
/** chunk id: 748745, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
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

function v(e) {
  var n, t, i, c, v, b;
  let {
    guildId: j,
    gameInstance: h
  } = e, _ = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getStateForGuild(j)) ? true : e.entitlements
  }), C = null != (b = null == _ || null == (v = _[h.entitlementId]) || null == (c = v.sku) || null == (i = c.tenant_metadata) || null == (t = i.guild_monetization) || null == (n = t.game_server) ? true : n.boost_price) ? b : 0;
  return 0 === C ? null : (0, r.jsx)(s.ua7, {
    "aria-label": f.intl.string(g.default.TZsu1d),
    text: (0, r.jsx)(d.Po, {
      cost: C
    }),
    children: e => {
      var n, t;
      return (0, r.jsx)(o.zx, (n = function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), r.forEach(function(n) {
            var r;
            r = t[n], n in e ? Object.defineProperty(e, n, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[n] = r
          })
        }
        return e
      }({}, e), t = t = {
        className: a()(p.secondaryButton, x.disableButton),
        innerClassName: p.buttonInner,
        wrapperClassName: p.secondaryButton,
        color: o.Tt.PRIMARY,
        "aria-label": f.intl.string(g.default.TZsu1d),
        onClick: e => {
          e.stopPropagation(), (0, m.Q)(j, h)
        },
        children: (0, r.jsx)(d.RD, {
          cost: C,
          isActive: true,
          compact: true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t.push.apply(t, r)
        }
        return t
      })(Object(t)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
      }), n))
    }
  })
}

function b(e) {
  let {
    guildId: n,
    gameInstance: t,
    onClick: i
  } = e;
  return (0, r.jsxs)(s.P3F, {
    className: x.game,
    onClick: () => i(t),
    children: [(0, r.jsx)("img", {
      className: x.image,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: x.textContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        children: t.name
      }), (0, r.jsx)(c.P2, {
        text: f.intl.string(g.default.FFLkm5)
      })]
    }), (0, r.jsx)(v, {
      guildId: n,
      gameInstance: t
    })]
  })
}