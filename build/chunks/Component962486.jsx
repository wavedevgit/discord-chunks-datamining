/** Chunk was on 1272 **/
/** chunk id: 962486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk322665 = require("./322665.jsx"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk726115 = require("./726115.js"),
  Chunk294330 = require("./294330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk423337 = require("./423337.js");
let g = {
  page: Chunk981631.ZY5.GUILD_DISCOVERY,
  object: Chunk981631.qAy.CARD,
  section: Chunk981631.jXE.DISCOVER_POPULAR
};

function h(e) {
  let {
    tab: t,
    guildIds: n,
    loading: p,
    onScroll: h,
    onGuildCardClick: m,
    onGuildCardSeen: b
  } = e, _ = (0, u.Mf)(t), E = (0, u.a$)(t), O = (0, u.QW)(t), v = (0, u.lg)(t), y = i.useMemo(() => {
    let e = p ? 30 : n.length,
      t = [];
    for (let a = 0; a < e; a++) {
      var i, l;
      t.push((0, r.jsx)(d.Eo, {
        guildId: null != (i = n[a]) ? i : null,
        index: a,
        onClick: e => m(e, a, v, g),
        onView: e => b(e, v)
      }, null != (l = n[a]) ? l : a))
    }
    return t
  }, [v, n, p, m, b]);
  return (0, r.jsxs)(c.Z, {
    onScroll: h,
    children: [(0, r.jsx)(s.Z, {
      title: _,
      description: E,
      children: (0, r.jsx)(a.Z, {})
    }), (0, r.jsxs)(o.Z, {
      children: [(0, r.jsx)(l.Heading, {
        className: f.sectionTitle,
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: O
      }), (0, r.jsx)("div", {
        className: f.content,
        children: y
      })]
    })]
  })
}