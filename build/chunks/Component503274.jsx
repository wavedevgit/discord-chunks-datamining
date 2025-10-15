/** Chunk was on 63639 **/
/** chunk id: 503274, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk60482 = require("./60482.js"),
  Chunk162190 = require("./162190.js"),
  Chunk68015 = require("./68015.jsx"),
  Chunk149829 = require("./149829.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678873 = require("./678873.js");

function f(e) {
  let {
    guildId: n,
    gameInstance: t,
    cost: a
  } = e;
  return (0, l.jsx)(r.i_, {
    "aria-label": v.intl.string(m.default.TZsu1U),
    title: v.intl.string(m.default.TZsu1U),
    body: v.intl.formatToPlainString(m.default["5HQUzD"], {
      boostCount: a
    }),
    children: (0, l.jsx)("div", {
      className: g.disableButton,
      children: (0, l.jsx)(s.Button, {
        icon: {
          type: "icon",
          asset: s.zkc
        },
        text: a.toString(),
        variant: "secondary",
        size: "sm",
        "aria-label": v.intl.string(m.default.TZsu1U),
        onClick: e => {
          e.stopPropagation(), (0, d.x)(n, t)
        }
      })
    })
  })
}

function b(e) {
  var n, t, r, d;
  let {
    guildId: b,
    gameInstance: p,
    onClick: j
  } = e, x = (0, i.e7)([u.Z], () => u.Z.getStateForGuild(b)), h = a.useMemo(() => {
    var e;
    return null == x || null == (e = x.entitlements) ? true : e[p.entitlementId]
  }, [null == x ? true : x.entitlements, p.entitlementId]), y = (null == h ? true : h.ends_at) != null, O = null == h || null == (d = h.sku) || null == (r = d.tenant_metadata) || null == (t = r.guild_monetization) || null == (n = t.game_server) ? true : n.boost_price, P = (0, c.Z)(p.gameId, "icon");
  return null == O ? null : (0, l.jsxs)(s.P3F, {
    className: g.game,
    onClick: () => j(p),
    children: [(0, l.jsx)("img", {
      className: g.image,
      alt: "",
      src: P
    }), (0, l.jsxs)("div", {
      className: g.textContainer,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-sm/semibold",
        children: p.name
      }), y ? (0, l.jsx)(o.rL, {
        dateString: h.ends_at
      }) : (0, l.jsx)(o.P2, {
        text: v.intl.string(m.default.FFLkmx)
      })]
    }), (0, l.jsx)(f, {
      guildId: b,
      gameInstance: p,
      cost: O
    })]
  })
}