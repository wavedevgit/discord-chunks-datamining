/** Chunk was on 83942 **/
/** chunk id: 743582, original params: n,t,i (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk728345 = require("./728345.js"),
  Chunk313201 = require("./313201.js"),
  Chunk577275 = require("./577275.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk103858 = require("./103858.js");

function p(n) {
  var t, i;
  let {
    transitionState: a,
    application: p,
    onClose: h
  } = n, _ = (0, d.Dt)(), [j, v] = l.useState(null == p || null == (t = p.team) ? true : t.id), {
    teams: C
  } = (0, u.Z)(), b = l.useMemo(() => C.filter(n => n.payout_account_status === x.C.ACTIVE).map(n => ({
    label: n.name,
    value: n.id
  })), [C]), f = (null == p || null == (i = p.team) ? true : i.id) !== j, [w, {
    loading: N,
    error: k
  }] = (0, c.Z)(o.ZP.transferApplication), z = async () => {
    s()(null != p, "no application"), s()(null != j, "no team selected"), null != await w({
      applicationId: p.id,
      teamId: j
    }) && h()
  }, R = (null == p ? true : p.team) != null;
  return <r.Y0X transitionState={a} aria-labelledby={_} parentComponent={"TransferApplicationModal"}>{<r.xBx>{<r.X6q id={_} variant={"heading-md/semibold"}>{R ? g.intl.string(g.t["4TveVl"]) : g.intl.string(g.t.feBUAQ)}</r.X6q>}{<r.olH className={m.closeButton} onClick={h} />}</r.xBx>}{<r.hzk className={m.content}>{R ? <e.Fragment>{<r.R94>{g.intl.string(g.t.c7HS0t)}</r.R94>}{<r.LZC size={8} />}{<r.X6q className={m.warningHeading} variant={"text-sm/semibold"} color={"text-danger"}>{<r.Mgn size={"xs"} color={"currentColor"} className={m.warningIcon} />}{g.intl.string(g.t.Caz8nJ)}</r.X6q>}{<r.LZC size={4} />}{<r.R94 type={r.R94.Types.ERROR}>{g.intl.string(g.t.u4ddHR)}</r.R94>}</e.Fragment> : <r.R94>{g.intl.string(g.t.atZ50N)}</r.R94>}{null != k ? <r.kzN>{k.message}</r.kzN> : null}{<r.LZC size={16} />}{<r.xJW title={R ? g.intl.string(g.t.xZ6ZLy) : g.intl.string(g.t.bfmKdH)} required={true}><r.q4e className={m.__invalid_teamSelect} options={b} placeholder={g.intl.string(g.t.QXf93N)} value={j} isDisabled={0 === b.length} onChange={n => v(n)} aria-label={g.intl.string(g.t.QXf93N)} /></r.xJW>}</r.hzk>}{<r.mzw className={m.__invalid_footer}><div data-button-hoisted-classname-wrapper={true} className={m.__invalid_goBackButton}><r.zxk variant={"critical-primary"} text={g.intl.string(g.t.R3BPHx)} loading={N} disabled={!f} onClick={z} /></div></r.mzw>}</r.Y0X>
}