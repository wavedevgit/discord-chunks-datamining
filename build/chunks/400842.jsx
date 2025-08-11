/** Chunk was on 21863 **/
/** chunk id: 400842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js");
require("./651711.js");
var Chunk551556 = require("./551556.js");
require("./388032.jsx");
var Chunk719677 = require("./719677.js");
require("./347157.js"), require("./177266.js");
let u = e => {
  let {
    name: t,
    description: n,
    checked: i,
    actionLabel: u,
    actionHandler: b
  } = e, d = null;
  return d = i ? <s.Z width={20} height={20} /> : <o.k$p size={"custom"} color={l.Z.colors.STATUS_DANGER.css} width={20} height={20} />, <div className={a.checklistItem}>{<div className={a.checklistIcon}>{d}</div>}{<div className={c()(a.__invalid_checklistText, i && a.ineligibleRow)}>{<o.X6q variant={"heading-md/semibold"} className={a.checklistItemName}>{t}</o.X6q>}{<o.Text color={"interactive-normal"} variant={"text-sm/normal"}>{n}</o.Text>}</div>}{null != u && <div className={a.eligibilityActionContainer}><o.zxk variant={"primary"} onClick={b} text={u} size={"sm"} /></div>}</div>
}