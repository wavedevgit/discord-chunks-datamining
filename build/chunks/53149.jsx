/** Chunk was on 83545 **/
/** chunk id: 53149, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.js"),
  Chunk278502 = require("./278502.js");
let x = t => {
  let {
    onClose: n,
    channelId: e,
    transitionState: x
  } = t, h = (0, s.e7)([r.ZP], () => r.ZP.isChannelMuted(null, e));
  return <o.Y0X transitionState={x} size={o.CgR.SMALL} aria-label={d.intl.string(d.t.uAmAiI)} parentComponent={"MuteAppNotificationsModal"}>{<o.olH className={u.closeButton} onClick={n} />}{<o.hzk className={u.content}>{<div className={u.iconContainer}>{h ? (0, i.jsx)(o.owu, {
          size: "md"
        }) : (0, i.jsx)(o.Dkj, {
          size: "md"
        })}</div>}{<o.X6q className={u.heading} variant={"heading-xl/bold"}>{h ? d.intl.string(d.t["4rg7cH"]) : d.intl.string(d.t.uAmAiI)}</o.X6q>}{<o.Text className={u.infoText} variant={"text-md/normal"} color={"text-default"}>{h ? d.intl.string(d.t["5vton5"]) : d.intl.string(d.t.mscFJS)}</o.Text>}{<a.zx className={u.button} color={h ? a.zx.Colors.PRIMARY : a.zx.Colors.RED} onClick={() => {
          l.Z.updateChannelOverrideSettings(null, e, {
            muted: !h
          }, h ? c.ZB.Unmuted : c.ZB.Muted), n()
        }}>{h ? d.intl.string(d.t.YqAjX1) : d.intl.string(d.t["w4m94+"])}</a.zx>}</o.hzk>}</o.Y0X>
}