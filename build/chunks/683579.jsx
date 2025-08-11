/** Chunk was on 22988 **/
/** chunk id: 683579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk862085 = require("./862085.js"),
  Chunk769998 = require("./769998.js"),
  Chunk671066 = require("./671066.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk467397 = require("./467397.js");

function u(e) {
  let {
    action: t,
    triggerType: n,
    toggled: a,
    onToggleAction: s
  } = e, o = (0, l.c)(t.type, t, n);
  if (null == o) return null;
  let {
    headerText: c,
    descriptionText: u,
    icon: m
  } = o;
  return <div className={d.actionContainer}>{<div className={d.actionIconContainer}><m size={"md"} color={"currentColor"} className={d.actionIcon} /></div>}{<div className={d.actionTextContainer}>{<i.X6q variant={"heading-sm/semibold"}>{c}</i.X6q>}{<i.Text color={"interactive-normal"} variant={"text-xs/medium"}>{u}</i.Text>}</div>}{<div><i.XZJ disabled={!o.isEditable} type={i.XZJ.Types.INVERTED} value={a} onChange={() => s(false)} className={d.__invalid_actionCheckbox} /></div>}</div>
}

function m(e) {
  let {
    action: t,
    guildId: n,
    triggerType: i,
    toggled: l,
    onToggleAction: d
  } = e;
  switch (t.type) {
    case c.jj.FLAG_TO_CHANNEL:
      return <o.Z action={t} triggerType={i} toggled={l} onToggleAction={d} />;
    case c.jj.USER_COMMUNICATION_DISABLED:
      return <s.Z action={t} guildId={n} triggerType={i} toggled={l} onToggleAction={d} />;
    case c.jj.BLOCK_MESSAGE:
      return <a.Z action={t} triggerType={i} toggled={l} onToggleAction={d} />;
    default:
      return <u action={t} guildId={n} toggled={l} triggerType={i} onToggleAction={d} />
  }
}