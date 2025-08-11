/** Chunk was on 1272 **/
/** chunk id: 962486, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk322665 = require("./322665.jsx"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk726115 = require("./726115.js"),
  Chunk294330 = require("./294330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk849781 = require("./849781.js");
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
    onGuildCardSeen: b
  } = e, _ = (0, u.Mf)(t), O = (0, u.a$)(t), E = (0, u.QW)(t), y = (0, u.lg)(t), v = i.useMemo(() => {
    let e = p ? 30 : n.length,
      t = [];
    for (let a = 0; a < e; a++) {
      var i, l;
      t.push(<d.Eo guildId={null != (i = n[a]) ? i : null} index={a} onClick={e => m(e, a, y, h)} onView={e => b(e, y)} />)
    }
    return t
  }, [y, n, p, m, b]);
  return <c.Z onScroll={g}>{<o.Z title={_} description={O}><a.Z /></o.Z>}{<s.Z>{<l.X6q className={f.sectionTitle} variant={"heading-lg/semibold"} color={"header-primary"}>{E}</l.X6q>}{<div className={f.content}>{v}</div>}</s.Z>}</c.Z>
}