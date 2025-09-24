/** Chunk was on 60728 **/
/** chunk id: 748745, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk967647 = require("./967647.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362320 = require("./362320.js"),
  Chunk961820 = require("./961820.js");

function p(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: a
  } = e;
  return (0, l.jsx)(c.ua7, {
    "aria-label": b.intl.string(g.default.TZsu1d),
    text: (0, l.jsx)(d.Po, {
      cost: a
    }),
    children: e => {
      var i, s;
      return (0, l.jsx)(o.zx, (i = function(e) {
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
        className: r()(f.secondaryButton, j.disableButton),
        innerClassName: f.buttonInner,
        wrapperClassName: f.secondaryButton,
        color: o.Tt.PRIMARY,
        "aria-label": b.intl.string(g.default.TZsu1d),
        onClick: e => {
          e.stopPropagation(), (0, v.Q)(t, n)
        },
        children: (0, l.jsx)(d.RD, {
          cost: a,
          isActive: true,
          compact: true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
      }), i))
    }
  })
}

function x(e) {
  var t, n, i, r;
  let {
    guildId: o,
    gameInstance: d,
    onClick: v
  } = e, f = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(o)), x = a.useMemo(() => {
    var e;
    return null == f || null == (e = f.entitlements) ? true : e[d.entitlementId]
  }, [null == f ? true : f.entitlements, d.entitlementId]), y = (null == x ? true : x.ends_at) != null, h = null == x || null == (r = x.sku) || null == (i = r.tenant_metadata) || null == (n = i.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price;
  return null == h ? null : (0, l.jsxs)(c.P3F, {
    className: j.game,
    onClick: () => v(d),
    children: [(0, l.jsx)("img", {
      className: j.image,
      alt: ""
    }), (0, l.jsxs)("div", {
      className: j.textContainer,
      children: [(0, l.jsx)(c.X6q, {
        variant: "heading-sm/semibold",
        children: d.name
      }), y ? (0, l.jsx)(u.rL, {
        dateString: x.ends_at
      }) : (0, l.jsx)(u.P2, {
        text: b.intl.string(g.default.FFLkm5)
      })]
    }), (0, l.jsx)(p, {
      guildId: o,
      gameInstance: d,
      cost: h
    })]
  })
}