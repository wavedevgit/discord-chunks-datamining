/** Chunk was on 36878 **/
/** chunk id: 206403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk788551 = require("./788551.js");

function c(e) {
  let {
    leadingElement: t,
    primaryTrailingElement: n,
    secondaryTrailingElement: o,
    title: c,
    secondaryTitle: u,
    description: d,
    compact: f = false,
    onClick: m
  } = e;
  return <a.P3F className={l()(s.baseControlItem, {
      [s.compact]: f
    })} onClick={m}>{null != t && <div className={s.baseControlItemLeadingElement}>{t}</div>}{<div className={s.baseControlItemContent}>{<div className={s.baseControlItemTitle}>{<r.X6 variant={"heading-md/semibold"} color={"text-primary"}>{c}</r.X6>}{null != u && <r.X6 variant={"heading-md/semibold"} color={"text-secondary"} className={s.secondaryTitle}>{u}</r.X6>}</div>}{null != d && <r.xv variant={"text-md/normal"} color={"text-secondary"}>{d}</r.xv>}</div>}{(null != n || null != o) && <div className={s.baseControlItemTrailingElements}>{n}{o}</div>}</a.P3F>
}