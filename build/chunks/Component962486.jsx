/** Chunk was on 1272 **/
/** chunk id: 962486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk322665 = require("./322665.jsx"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk726115 = require("./726115.js"),
  Chunk294330 = require("./294330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk663448 = require("./663448.js");
let m = {
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
    onGuildCardClick: g,
    onGuildCardSeen: _
  } = e, b = (0, u.Mf)(t), E = (0, u.a$)(t), O = (0, u.QW)(t), I = (0, u.lg)(t), y = i.useMemo(() => {
    let e = p ? 30 : n.length,
      t = [];
    for (let a = 0; a < e; a++) {
      var i, l;
      t.push((0, r.jsx)(d.Eo, {
        guildId: null != (i = n[a]) ? i : null,
        index: a,
        onClick: e => g(e, a, I, m),
        onView: e => _(e, I)
      }, null != (l = n[a]) ? l : a))
    }
    return t
  }, [I, n, p, g, _]);
  return (0, r.jsxs)(c.Z, {
    onScroll: h,
    children: [(0, r.jsx)(s.Z, {
      title: b,
      description: E,
      children: (0, r.jsx)(a.Z, {})
    }), (0, r.jsxs)(o.Z, {
      children: [(0, r.jsx)(l.Heading, {
        className: f.sectionTitle,
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: O
      }), (0, r.jsx)("div", {
        className: f.content,
        children: y
      })]
    })]
  })
}