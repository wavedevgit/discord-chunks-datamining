/** Chunk was on web.js **/
/** chunk id: 627325, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk778033 = require("./778033.js"),
  Chunk709706 = require("./709706.js"),
  Chunk358820 = require("./358820.js"),
  Chunk990525 = require("./990525.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92609 = require("./92609.js");
let y = 130,
  O = [51],
  v = [Chunk388032.t.OpqAoq];

function I(e) {
  let {
    columns: t,
    handleScroll: n,
    voiceListRef: i,
    showSectionHeaders: o = false,
    query: a
  } = e, s = S(), I = (0, l.e7)([f.default], () => (0, _.I5)(f.default.getCurrentUser())), A = N(a, I), C = Math.ceil(A.length / t), {
    isNativeModuleLoaded: R,
    isNativeModuleLoading: P,
    catalogLastFetchTime: w
  } = (0, l.cj)([h.Z], () => ({
    isNativeModuleLoaded: h.Z.isNativeModuleLoaded(),
    isNativeModuleLoading: h.Z.isNativeModuleLoading(),
    catalogLastFetchTime: h.Z.getCatalogLastFetchTime()
  }));
  return a && 0 === A.length ? <div className={b.iconMessage}>{<u._Ve width={40} height={40} size={"custom"} color={c.Z.colors.INTERACTIVE_MUTED} />}{<u.X6q variant={"heading-sm/medium"} color={"header-muted"}>{E.intl.string(E.t.ZzukHh)}</u.X6q>}</div> : s ? <div className={b.iconMessage}>{<u.aNP width={40} height={40} size={"custom"} color={c.Z.colors.INTERACTIVE_MUTED} />}{<u.X6q variant={"heading-md/normal"} color={"header-muted"}>{E.intl.string(E.t.DpZNJy)}</u.X6q>}{<u.Text variant={"text-sm/normal"} color={"header-muted"}>{E.intl.format(E.t["5afO9f"], {
        onClick: R ? m.wV : m.r5
      })}</u.Text>}</div> : P || null == w ? <div className={b.loading}><u.$jN type={u.$jN.Type.CHASING_DOTS} animated={true} /></div> : <d.Z fade={true} className={b.container} renderRow={e => {
      let n = e * t,
        i = A.slice(n, n + t);
      return (0, r.jsx)(T, {
        children: i.map((n, i) => (0, r.jsx)(g.J, {
          voiceFilter: n,
          hasNitro: I,
          analyticsContext: {
            reason: p.W.USER_SELECTION,
            gridRows: C,
            gridColumns: t,
            interactedRow: e,
            interactedColumn: i
          }
        }, null == n ? true : n.id))
      }, e)
    }} renderSectionHeader={false === o ? true : e => (0, r.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      className: b.header,
      children: E.intl.string(v[e])
    })} sectionHeaderHeight={false === o ? true : e => O[e]} rowCount={C} rowHeight={y} onScroll={n} ref={i} sectionFooterHeight={40 * !I} />
}

function T(e) {
  let {
    children: t
  } = e, n = i.useRef(null);
  return <div ref={n} className={b.row}><u.JcV containerRef={n}>{t}</u.JcV></div>
}
let S = () => (0, Chunk442837.e7)([Chunk709706.Z], () => {
    var e;
    return !Object.keys(null != (e = Chunk709706.Z.getVoiceFilterModels()) ? module : {}).length && (Chunk709706.Z.getCatalogFetchFailed() || Chunk709706.Z.hasNativeModuleFailed())
  }),
  A = (e, t) => {
    let n = (0, s._I)(t.toLowerCase());
    return "" === n ? e : e.filter(e => {
      let {
        name: t
      } = e, r = (0, s._I)(E.intl.string(t)).toLowerCase();
      return a()(n, r)
    })
  },
  N = (e, t) => (0, l.Wu)([h.Z], () => {
    let n = h.Z.getVoiceFilters(),
      r = h.Z.getSortedVoiceFilters();
    return A(t ? Object.values(n) : r, e)
  }, [e, t])