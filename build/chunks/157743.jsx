/** Chunk was on 22482 **/
/** chunk id: 157743, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk918125 = require("./918125.js"),
  Chunk488131 = require("./488131.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.js"),
  Chunk576359 = require("./576359.js");

function d(e) {
  let {
    guildId: a,
    onClose: n,
    transitionState: d
  } = e;
  return <r.Y0X className={l.modal} transitionState={d} aria-label={i.intl.string(i.t.B2panJ)} size={r.CgR.DYNAMIC} parentComponent={"GuildActiveThreadsModal"}><div className={l.container}>{<div className={l.header}>{<r.or_ size={"md"} color={"currentColor"} className={l.threadIcon} />}{<r.X6q variant={"heading-md/semibold"} className={l.__invalid_title}>{i.intl.string(i.t["dOWb+f"])}</r.X6q>}{<div className={l.spacer} />}{<r.P3F className={l.closeIcon} onClick={n} aria-label={i.intl.string(i.t.cpT0Cg)}><r.Dio size={"md"} color={"currentColor"} /></r.P3F>}</div>}{<o.Z guildId={a} goToThread={(e, a) => {
          n(), (0, t.ok)(e, !a, c.on.GUILD_ACTIVE_THREADS_MODAL)
        }} />}</div></r.Y0X>
}