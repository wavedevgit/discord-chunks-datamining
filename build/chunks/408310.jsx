/** Chunk was on 49152 **/
/** chunk id: 408310, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk671533 = require("./671533.js"),
  Chunk400251 = require("./400251.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk400816 = require("./400816.js"),
  Chunk1765 = require("./1765.js"),
  Chunk176480 = require("./176480.js");
let d = e => {
  let t, {
    searchQuery: n,
    setSearchQuery: d,
    mostRecentQuery: h,
    handleClearSearch: p,
    handleSearchKeyPress: f,
    handleCreateOrAddGuild: g,
    searchResults: m,
    searchFetching: b
  } = e;
  if (b) t = <div className={o.pageContainer}><i.$jN className={o.spinner} /></div>;
  else if (0 === m.length) {
    let e = null != g ? s.intl.format(s.t.qWFupq, {
      addServerHook: function(e, t) {
        return <i.eee onClick={g}>{e}</i.eee>
      }
    }) : s.intl.string(s.t.vYyEnp);
    t = <div className={c.emptySearchWrapper}>{<img className={c.emptySearchImage} alt={""} src={u} />}{<i.X6q variant={"heading-xl/semibold"} color={"header-primary"} className={c.emptySearchTitle}>{s.intl.string(s.t["6HXiuL"])}</i.X6q>}{<i.Text variant={"text-md/normal"} color={"header-secondary"} className={c.emptySearchSubtitle}>{e}</i.Text>}</div>
  } else t = <div className={o.cardsContainer}>{m.map(e => (0, r.jsx)(a.Z, {
      entry: e
    }, e.guildId))}</div>;
  return <div className={o.pageContainer}><i.w0Z className={o.scroller}>{<div className={c.searchHeader}>{<div className={c.headerTitleWrapper}>{<i.P3F onClick={p} className={c.arrow}><l.Z direction={l.Z.Directions.LEFT} /></i.P3F>}{<i.X6q variant={"heading-xl/semibold"} className={c.searchPageTitle}>{s.intl.format(s.t.UkOHRU, {
              numResults: m.length,
              query: h
            })}</i.X6q>}</div>}{<i.Rj2 searchTerm={n} className={c.searchPageBox} inputClassName={c.searchPageInput} label={s.intl.string(s.t.nL2wKC)} placeholder={s.intl.string(s.t.nL2wKC)} onChange={d} onClear={p} onKeyPress={f} cta={null != n && n.length > 0 ? s.intl.string(s.t["CU+6oK"]) : null} />}</div>}{t}</i.w0Z></div>
}