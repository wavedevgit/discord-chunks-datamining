/** Chunk was on 67365 **/
/** chunk id: 503274, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk639777 = require("./639777.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk60482 = require("./60482.js"),
  Chunk162190 = require("./162190.js"),
  Chunk68015 = require("./68015.jsx"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk280938 = require("./280938.js");

function _(e) {
  let {
    guildId: n,
    gameInstance: t,
    cost: i
  } = e;
  return (0, l.jsx)(u.i_, {
    "aria-label": b.intl.string(g.default.TZsu1U),
    title: b.intl.string(g.default.TZsu1U),
    body: b.intl.formatToPlainString(g.default["5HQUzD"], {
      boostCount: i
    }),
    children: (0, l.jsx)("div", {
      className: p.disableButton,
      children: (0, l.jsx)(o.Button, {
        icon: {
          type: "icon",
          asset: o.zkc
        },
        text: i.toString(),
        variant: "secondary",
        size: "sm",
        "aria-label": b.intl.string(g.default.TZsu1U),
        onClick: e => {
          e.stopPropagation(), (0, f.x)(n, t)
        }
      })
    })
  })
}

function x(e) {
  var n, t, a, u;
  let {
    guildId: f,
    gameInstance: x,
    onClick: j
  } = e, E = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(f)), h = i.useMemo(() => {
    var e;
    return null == E || null == (e = E.entitlements) ? true : e[x.entitlementId]
  }, [null == E ? true : E.entitlements, x.entitlementId]), S = (null == h ? true : h.ends_at) != null, y = null == h || null == (u = h.sku) || null == (a = u.tenant_metadata) || null == (t = a.guild_monetization) || null == (n = t.game_server) ? true : n.boost_price, O = (0, v.Z)(x.gameId, "icon"), k = (0, c.Z)(f);
  return null == y ? null : (0, l.jsxs)(o.P3F, {
    className: r()(p.game, {
      [p.disabled]: !k
    }),
    onClick: k ? () => j(x) : true,
    "aria-disabled": !k,
    children: [(0, l.jsx)("img", {
      className: p.image,
      alt: "",
      src: O
    }), (0, l.jsxs)("div", {
      className: p.textContainer,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        children: x.name
      }), S ? (0, l.jsx)(d.rL, {
        dateString: h.ends_at
      }) : (0, l.jsx)(d.P2, {
        text: b.intl.string(g.default.FFLkmx)
      })]
    }), k && (0, l.jsx)(_, {
      guildId: f,
      gameInstance: x,
      cost: y
    })]
  })
}