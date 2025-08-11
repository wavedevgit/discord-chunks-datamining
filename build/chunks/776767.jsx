/** Chunk was on 12097 **/
/** chunk id: 776767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mn: () => o,
  WM: () => c,
  _2: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk44946 = require("./44946.js");
let o = 16;

function u(e) {
  let {
    description: t,
    name: n,
    icon: l,
    onNavigate: u,
    className: c,
    missingNavIcon: E
  } = e;
  return <i.P3F onClick={u} className={s()(a.modInfoItem, null != u && a.modInfoAction, c)}>{null != l && <div className={a.modInfoItemIcon}>{l}</div>}{null != n && <div className={a.modInfoItemName}>{n}</div>}{<div className={a.modInfoItemDescription}>{t}</div>}{null != u && <div className={a.modInfoItemActionIcon}><i.LJT size={"custom"} width={o} height={o} /></div>}{null == u && null != E && <div className={a.modInfoItemActionIcon}>{E}</div>}</i.P3F>
}

function c(e) {
  let {
    children: t
  } = e;
  return <div className={a.modInfoItemContainer}>{t}</div>
}