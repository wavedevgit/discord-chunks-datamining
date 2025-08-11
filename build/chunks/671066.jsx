/** Chunk was on 22988 **/
/** chunk id: 671066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467397 = require("./467397.js");

function g(e) {
  var t;
  let {
    action: n,
    triggerType: g,
    toggled: p,
    onToggleAction: h
  } = e, f = e => () => h(e), b = (0, d.c)(n.type, n, g), x = null == (t = n.metadata) ? true : t.channelId, j = (0, i.e7)([c.default, o.Z, s.Z], () => {
    let e = s.Z.getChannel(x);
    return null == e ? null : (0, a.F6)(e, c.default, o.Z)
  }, [x]);
  if (null == b) return null;
  let {
    headerText: v,
    descriptionText: _,
    icon: O
  } = b;
  return <div className={m.actionContainer}>{<div className={m.actionIconContainer}><O size={"md"} color={"currentColor"} className={m.actionIcon} /></div>}{<div className={m.actionTextContainer}>{<l.X6q variant={"heading-sm/semibold"}>{v}</l.X6q>}{<l.Text color={"interactive-normal"} variant={"text-xs/medium"}>{_}</l.Text>}{p && <l.Text color={"text-muted"} variant={"text-xs/medium"}>{null != j && u.intl.format(u.t["8Sr/am"], {
          channelName: j
        })}{<l.P3F onClick={f(true)} className={m.editChannel} tag={"span"} role={"link"}>{u.intl.string(u.t["3gUsJS"])}</l.P3F>}</l.Text>}</div>}{<div><l.XZJ type={l.XZJ.Types.INVERTED} value={p} onChange={f(false)} className={m.__invalid_actionCheckbox} /></div>}</div>
}