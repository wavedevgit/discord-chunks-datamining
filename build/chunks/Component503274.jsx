/** Chunk was on 63639 **/
/** chunk id: 503274, original params: e,n,t (module,exports,require) **/
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
  Chunk235681 = require("./235681.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678873 = require("./678873.js");

function j(e) {
  let {
    guildId: n,
    gameInstance: t,
    cost: a
  } = e;
  return (0, l.jsx)(o.i_, {
    "aria-label": b.intl.string(f.default.TZsu1U),
    title: b.intl.string(f.default.TZsu1U),
    body: b.intl.formatToPlainString(f.default["5HQUzD"], {
      boostCount: a
    }),
    children: (0, l.jsx)("div", {
      className: p.disableButton,
      children: (0, l.jsx)(u.Button, {
        icon: {
          type: "icon",
          asset: u.zkc
        },
        text: a.toString(),
        variant: "secondary",
        size: "sm",
        "aria-label": b.intl.string(f.default.TZsu1U),
        onClick: e => {
          e.stopPropagation(), (0, g.x)(n, t)
        }
      })
    })
  })
}

function x(e) {
  var n, t, i, o;
  let {
    guildId: g,
    gameInstance: x,
    onClick: h
  } = e, y = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(g)), O = a.useMemo(() => {
    var e;
    return null == y || null == (e = y.entitlements) ? true : e[x.entitlementId]
  }, [null == y ? true : y.entitlements, x.entitlementId]), P = (null == O ? true : O.ends_at) != null, k = null == O || null == (o = O.sku) || null == (i = o.tenant_metadata) || null == (t = i.guild_monetization) || null == (n = t.game_server) ? true : n.boost_price, I = (0, v.Z)(x.gameId, "icon"), S = (0, c.Z)(g);
  return null == k ? null : (0, l.jsxs)(u.P3F, {
    className: r()(p.game, {
      [p.disabled]: !S
    }),
    onClick: S ? () => h(x) : true,
    "aria-disabled": !S,
    children: [(0, l.jsx)("img", {
      className: p.image,
      alt: "",
      src: I
    }), (0, l.jsxs)("div", {
      className: p.textContainer,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-sm/semibold",
        children: x.name
      }), P ? (0, l.jsx)(d.rL, {
        dateString: O.ends_at
      }) : (0, l.jsx)(d.P2, {
        text: b.intl.string(f.default.FFLkmx)
      })]
    }), S && (0, l.jsx)(j, {
      guildId: g,
      gameInstance: x,
      cost: k
    })]
  })
}