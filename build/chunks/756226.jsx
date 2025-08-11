/** Chunk was on 66462 **/
/** chunk id: 756226, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk435935 = require("./435935.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk259756 = require("./259756.js"),
  Chunk785681 = require("./785681.js"),
  Chunk880257 = require("./880257.js"),
  Chunk863552 = require("./863552.js"),
  Chunk292352 = require("./292352.js"),
  Chunk916723 = require("./916723.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk284851 = require("./284851.js");
let C = {
    [Chunk292352.MY.USER_INTERACTION]: <Chunk863552.Z width={18} height={18} />,
    [Chunk292352.MY.USER_CALLED]: <Chunk481060.Csw size={"custom"} color={"currentColor"} width={22} height={22} />,
    [Chunk292352.MY.USER_ADD]: <Chunk481060.iFz size={"custom"} color={"currentColor"} className={Chunk284851.personWavingIcon} width={22} height={22} />,
    [Chunk292352.MY.GUILD_ADD]: <Chunk481060.dRF size={"custom"} color={"currentColor"} width={22} height={22} />,
    [Chunk292352.MY.GUILD_INTERACTION]: <Chunk481060.VL1 size={"custom"} color={"currentColor"} className={Chunk284851.threadIcon} width={22} height={22} />
  },
  b = e => {
    let {
      header: t,
      description: r,
      icon: i
    } = e;
    return <o.k className={f.row} grow={0}>{<div className={f.iconContainer}>{i}</div>}{<div className={f.rowContent}>{<c.Text variant={"text-sm/bold"}>{t}</c.Text>}{<c.Text variant={"text-xs/medium"}>{r}</c.Text>}</div>}</o.k>
  },
  j = e => {
    let {
      transitionState: t,
      onClose: r
    } = e, o = (0, l.o)(d.intl.string(p.default.q3IRam), d.intl.string(p.default.JNLpDQ)), c = (0, a.Z)(), u = Array.from(h.tx.entries()), f = (0, s.Xi)({
      location: "family_center_tooltip_modal_web"
    });
    return <i.Modal transitionState={t} onClose={r} actions={[]} title={o}>{u.map(e => {
        let [t, r] = e;
        return (0, n.jsx)(b, {
          icon: C[t],
          header: r.tooltipHeader(),
          description: r.tooltipDescription(null != c ? c : true, f)
        }, t)
      })}</i.Modal>
  }