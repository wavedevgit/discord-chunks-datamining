/** Chunk was on 91284 **/
/** chunk id: 709255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk363487 = require("./363487.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk522055 = require("./522055.js"),
  Chunk225180 = require("./225180.js"),
  Chunk146995 = require("./146995.jsx"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk276079 = require("./276079.js");

function _(e) {
  let {
    guildId: t,
    gameInstance: n,
    cost: i
  } = e;
  return (0, l.jsx)(u.un, {
    "aria-label": b.intl.string(g.default.TZsu1U),
    title: b.intl.string(g.default.TZsu1U),
    body: b.intl.formatToPlainString(g.default["5HQUzD"], {
      boostCount: i
    }),
    children: (0, l.jsx)("div", {
      className: p.vI,
      children: (0, l.jsx)(o.Button, {
        icon: {
          type: "icon",
          asset: o.x8N
        },
        text: i.toString(),
        variant: "secondary",
        size: "sm",
        "aria-label": b.intl.string(g.default.TZsu1U),
        onClick: e => {
          e.stopPropagation(), (0, f.m)(t, n)
        }
      })
    })
  })
}

function j(e) {
  var t, n, a, u;
  let {
    guildId: f,
    gameInstance: j,
    onClick: x
  } = e, E = (0, s.bG)([m.A], () => m.A.getStateForGuild(f)), h = i.useMemo(() => {
    var e;
    return null == E || null == (e = E.entitlements) ? true : e[j.entitlementId]
  }, [null == E ? true : E.entitlements, j.entitlementId]), y = (null == h ? true : h.ends_at) != null, A = null == h || null == (u = h.sku) || null == (a = u.tenant_metadata) || null == (n = a.guild_monetization) || null == (t = n.game_server) ? true : t.boost_price, S = (0, v.A)(j.gameId, "icon"), O = (0, d.A)(f);
  return null == A ? null : (0, l.jsxs)(o.DUT, {
    className: r()(p.LO, {
      [p.r9]: !O
    }),
    onClick: O ? () => x(j) : true,
    "aria-disabled": !O,
    children: [(0, l.jsx)("img", {
      className: p.Sl,
      alt: "",
      src: S
    }), (0, l.jsxs)("div", {
      className: p.FS,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-sm/semibold",
        children: j.name
      }), y ? (0, l.jsx)(c.P5, {
        dateString: h.ends_at
      }) : (0, l.jsx)(c.TG, {
        text: b.intl.string(g.default.FFLkmx)
      })]
    }), O && (0, l.jsx)(_, {
      guildId: f,
      gameInstance: j,
      cost: A
    })]
  })
}