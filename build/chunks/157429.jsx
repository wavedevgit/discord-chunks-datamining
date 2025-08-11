/** Chunk was on 35282 **/
/** chunk id: 157429, original params: n,i,t (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk313201 = require("./313201.js"),
  Chunk53365 = require("./53365.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk103858 = require("./103858.js");

function _(n) {
  let {
    transitionState: i,
    guild: t,
    onClose: e
  } = n, _ = (0, r.Dt)(), [h, {
    loading: m,
    error: p
  }] = (0, o.Z)(c.oL), g = async () => {
    s()(null != t, "no guild"), null != await h(t.id) && e()
  };
  return <l.Y0X transitionState={i} aria-labelledby={_} parentComponent={"RemoveMonetizationModal"}>{<l.xBx>{<l.X6q id={_} variant={"heading-md/semibold"}>{u.intl.string(u.t.rRpcEx)}</l.X6q>}{<l.olH className={x.closeButton} onClick={e} />}</l.xBx>}{<l.hzk className={x.content}>{null != p ? <a.Fragment>{<l.kzN>{p.message}</l.kzN>}{<l.LZC size={24} />}</a.Fragment> : null}{<l.R94 type={l.R94.Types.ERROR}>{u.intl.format(u.t["Oa5P6+"], {
          guildName: t.name,
          url: d.EYA.DEVELOPER_PORTAL_TEAMS
        })}</l.R94>}{<l.LZC size={16} />}</l.hzk>}{<l.mzw className={x.__invalid_footer}><div data-button-hoisted-classname-wrapper={true} className={x.__invalid_goBackButton}><l.zxk variant={"critical-primary"} text={u.intl.string(u.t.R3BPHx)} loading={m} onClick={g} /></div></l.mzw>}</l.Y0X>
}