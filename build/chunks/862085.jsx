/** Chunk was on 22988 **/
/** chunk id: 862085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467397 = require("./467397.js");

function o(e) {
  let {
    action: t,
    triggerType: n,
    toggled: o,
    onToggleAction: c
  } = e, d = e => () => c(e), u = (0, l.c)(t.type, t, n);
  if (null == u) return null;
  let {
    headerText: m,
    descriptionText: g,
    icon: p
  } = u;
  return <div className={s.actionContainer}>{<div className={s.actionIconContainer}><p size={"custom"} color={"currentColor"} className={s.actionIcon} /></div>}{<div className={s.actionTextContainer}>{<i.X6q variant={"heading-sm/semibold"}>{m}</i.X6q>}{<i.Text color={"interactive-normal"} variant={"text-xs/medium"}>{g}</i.Text>}{o ? <i.Text color={"text-muted"} variant={"text-xs/medium"}>{a.intl.string(a.t.Oa9oWF)}{<i.P3F onClick={d(true)} className={s.editChannel} tag={"span"} role={"link"}>{a.intl.string(a.t.QupmYW)}</i.P3F>}</i.Text> : null}</div>}{<div><i.XZJ type={i.XZJ.Types.INVERTED} value={o} onChange={d(false)} className={s.__invalid_actionCheckbox} /></div>}</div>
}