/** Chunk was on 21738 **/
/** chunk id: 383470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk292455 = require("./292455.jsx"),
  Chunk701508 = require("./701508.jsx"),
  Chunk979590 = require("./979590.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk965660 = require("./965660.js"),
  Chunk599907 = require("./599907.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk27740 = require("./27740.js");
let h = {
  page: Chunk652215.liQ.GUILD_DISCOVERY,
  object: Chunk652215.ZSU.CARD,
  section: Chunk652215.JJy.DISCOVER_POPULAR
};

function A(e) {
  let {
    tab: t,
    guildIds: n,
    loading: p,
    onScroll: A,
    onGuildCardClick: g,
    onGuildCardSeen: m
  } = e, b = (0, u.kc)(t), _ = (0, u.Ot)(t), E = (0, u.UW)(t), O = (0, u.Ub)(t), y = i.useMemo(() => {
    let e = p ? 30 : n.length,
      t = [];
    for (let a = 0; a < e; a++) {
      var i, l;
      t.push((0, r.jsx)(d.jO, {
        guildId: null != (i = n[a]) ? i : null,
        index: a,
        onClick: e => g(e, a, O, h),
        onView: e => m(e, O)
      }, null != (l = n[a]) ? l : a))
    }
    return t
  }, [O, n, p, g, m]);
  return (0, r.jsxs)(c.A, {
    onScroll: A,
    children: [(0, r.jsx)(s.A, {
      title: b,
      description: _,
      children: (0, r.jsx)(a.A, {})
    }), (0, r.jsxs)(o.A, {
      children: [(0, r.jsx)(l.Heading, {
        className: f.G,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: E
      }), (0, r.jsx)("div", {
        className: f.Q,
        children: y
      })]
    })]
  })
}