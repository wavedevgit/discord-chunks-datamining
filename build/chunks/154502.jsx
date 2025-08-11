/** Chunk was on 22988 **/
/** chunk id: 154502, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk466745 = require("./466745.js");

function s(e) {
  var t;
  let {
    action: n,
    actionType: s,
    triggerType: o
  } = e, c = (0, l.c)(null != (t = null == n ? true : n.type) ? t : s, n, o);
  if (null == c) return null;
  let {
    headerText: d,
    helperText: u,
    icon: m
  } = c;
  return <div className={a.actionContainer}>{<div className={a.actionIconContainer}><m size={"custom"} color={"currentColor"} width={14} height={14} className={a.actionIcon} /></div>}{<div className={a.actionTextContainer}><i.Text className={a.actionTextHeader} variant={"text-xs/medium"} color={"interactive-normal"}>{d}{null != u && <i.Text className={a.actionTextHelper} variant={"text-xs/medium"} color={"text-muted"} tag={"span"}>{u}</i.Text>}</i.Text></div>}</div>
}