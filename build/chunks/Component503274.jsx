/** Chunk was on 63639 **/
/** chunk id: 503274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk18853 = require("./18853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678873 = require("./678873.js");

function _(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: i
  } = e;
  return (0, l.jsx)(u.i_, {
    "aria-label": p.intl.string(f.default.TZsu1U),
    title: p.intl.string(f.default.TZsu1U),
    body: p.intl.formatToPlainString(f.default["5HQUzD"], {
      boostCount: i
    }),
    children: (0, l.jsx)("div", {
      className: b.disableButton,
      children: (0, l.jsx)(o.Button, {
        icon: {
          type: "icon",
          asset: o.zkc
        },
        text: i.toString(),
        variant: "secondary",
        size: "sm",
        "aria-label": p.intl.string(f.default.TZsu1U),
        onClick: e => {
          e.stopPropagation(), (0, g.x)(t, n)
        }
      })
    })
  })
}

function x(e) {
  var t, n, a, u;
  let {
    guildId: g,
    gameInstance: x,
    onClick: j
  } = e, E = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(g)), h = i.useMemo(() => {
    var e;
    return null == E || null == (e = E.entitlements) ? true : e[x.entitlementId]
  }, [null == E ? true : E.entitlements, x.entitlementId]), S = (null == h ? true : h.ends_at) != null, y = null == h || null == (u = h.sku) || null == (a = u.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price, O = (0, v.Z)(x.gameId, "icon"), I = (0, c.Z)(g);
  return null == y ? null : (0, l.jsxs)(o.P3F, {
    className: r()(b.game, {
      [b.disabled]: !I
    }),
    onClick: I ? () => j(x) : true,
    "aria-disabled": !I,
    children: [(0, l.jsx)("img", {
      className: b.image,
      alt: "",
      src: O
    }), (0, l.jsxs)("div", {
      className: b.textContainer,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        children: x.name
      }), S ? (0, l.jsx)(d.rL, {
        dateString: h.ends_at
      }) : (0, l.jsx)(d.P2, {
        text: p.intl.string(f.default.FFLkmx)
      })]
    }), I && (0, l.jsx)(_, {
      guildId: g,
      gameInstance: x,
      cost: y
    })]
  })
}