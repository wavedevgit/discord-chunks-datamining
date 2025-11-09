/** Chunk was on 1272 **/
/** chunk id: 962486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk333682 = require("./333682.js");
let h = {
  page: Chunk981631.ZY5.GUILD_DISCOVERY,
  object: Chunk981631.qAy.CARD,
  section: Chunk981631.jXE.DISCOVER_POPULAR
};

function g(e) {
  let {
    tab: t,
    guildIds: n,
    loading: p,
    onScroll: g,
    onGuildCardClick: m,
    onGuildCardSeen: _
  } = e, b = (0, u.Mf)(t), E = (0, u.a$)(t), O = (0, u.QW)(t), y = (0, u.lg)(t), v = i.useMemo(() => {
    let e = p ? 30 : n.length,
      t = [];
    for (let a = 0; a < e; a++) {
      var i, l;
      t.push((0, r.jsx)(d.Eo, {
        guildId: null != (i = n[a]) ? i : null,
        index: a,
        onClick: e => m(e, a, y, h),
        onView: e => _(e, y)
      }, null != (l = n[a]) ? l : a))
    }
    return t
  }, [y, n, p, m, _]);
  return (0, r.jsxs)(c.Z, {
    onScroll: g,
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
        children: v
      })]
    })]
  })
}