/** Chunk was on 49152 **/
/** chunk id: 65839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk400251 = require("./400251.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.js"),
  Chunk400816 = require("./400816.js"),
  Chunk104402 = require("./104402.js"),
  Chunk584354 = require("./584354.js"),
  Chunk725060 = require("./725060.js");
let m = e => {
    let {
      searchQuery: t,
      setSearchQuery: n,
      handleClearSearch: i,
      handleSearchKeyPress: l
    } = e, {
      ref: c,
      width: u
    } = (0, o.ZP)(), h = null != u && u <= 800;
    return <div ref={c} className={p.header}>{<img alt={""} className={p.headerImage} src={h ? g : f} />}{<div className={p.headerContentWrapper}><div className={a()(p.headerContent, {
            [p.headerContentSmall]: h
          })}>{<s.X6q variant={"heading-xl/semibold"} className={p.searchTitle}>{d.intl.string(d.t.IT7qoK)}</s.X6q>}{<s.Text variant={"text-md/normal"} className={p.searchSubtitle}>{d.intl.string(d.t["5PoYtr"])}</s.Text>}{<s.Rj2 searchTerm={t} className={p.searchBox} inputClassName={p.searchBoxInput} closeIconClassName={p.closeIcon} searchIconClassName={p.searchIcon} label={d.intl.string(d.t.nL2wKC)} placeholder={d.intl.string(d.t.nL2wKC)} onChange={n} onClear={i} onKeyPress={l} cta={null != t && t.length > 0 ? d.intl.string(d.t["CU+6oK"]) : null} />}</div></div>}</div>
  },
  b = e => {
    let {
      channel: t,
      directoryEntries: n,
      handleCreateOrAddGuild: l,
      searchQuery: a,
      setSearchQuery: o,
      handleClearSearch: f,
      handleSearchKeyPress: g,
      currentCategoryId: b,
      handleSelectCategory: y,
      categoryCounts: x,
      allEntriesCount: _,
      isLoading: j
    } = e;
    return <div className={h.pageContainer}><s.yWw className={h.scroller}>{<m searchQuery={a} setSearchQuery={o} handleClearSearch={f} handleSearchKeyPress={g} />}{<s.h21 orientation={"horizontal"}><s.njP className={p.tabBar} type={"top"} look={"brand"} selectedItem={b} onItemSelect={e => {
              y(e)
            }}>{<s.njP.Item className={p.tabBarItem} id={u.AR.ALL}>{"".concat(d.intl.string(d.t.hEAa2d), " (").concat(_, ")")}</s.njP.Item>}{(0, u.b7)(t.id).map(e => {
              let {
                value: t,
                label: n
              } = e;
              return <s.njP.Item className={p.tabBarItem} id={t}>{"".concat(n, " ").concat(null != x[t] ? "(".concat(x[t], ")") : "")}</s.njP.Item>
            })}</s.njP></s.h21>}{j && null == n ? <s.$jN className={h.spinner} /> : null == n ? true : n.map((e, t) => <i.Fragment>{true !== e.header ? <s.Text variant={"text-md/semibold"} className={p.sectionHeader}>{e.header}</s.Text> : null}{<div className={h.cardsContainer}>{e.entries.map(e => <c.Z entry={e} />)}{e.appendEndCard && null != l ? <c.m onClick={l} /> : null}</div>}</i.Fragment>)}</s.yWw></div>
  }