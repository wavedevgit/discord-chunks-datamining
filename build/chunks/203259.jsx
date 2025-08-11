/** Chunk was on 1272 **/
/** chunk id: 203259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk39604 = require("./39604.js"),
  Chunk176127 = require("./176127.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk442693 = require("./442693.js");

function u(e) {
  let {
    onOpenClipsGallery: t,
    clipIconRef: n,
    lastClipsSession: u
  } = e;
  return <l.Cys tooltipClassName={c.reminderTooltip} tooltipContentClassName={c.tooltipContent} targetElementRef={{
      current: n
    }} position={"bottom"} color={l.FGA.PRIMARY}>{<o.Z />}{<l.X6q variant={"heading-md/extrabold"}>{s.intl.format(s.t["+qxkzM"], {
        count: u.newClipIds.length
      })}</l.X6q>}{<div className={c.buttonContainer}>{<i.zx color={i.zx.Colors.TRANSPARENT} onClick={a.eL}>{s.intl.string(s.t.WAI6xs)}</i.zx>}{<l.zxk variant={"primary"} text={s.intl.string(s.t.tQPBmp)} onClick={t} />}</div>}</l.Cys>
}