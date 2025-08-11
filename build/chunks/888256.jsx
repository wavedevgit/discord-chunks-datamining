/** Chunk was on 75708 **/
/** chunk id: 888256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk843120 = require("./843120.js");

function c(e) {
  let {
    className: t,
    currentUser: n,
    disabled: c,
    handleDisableAccount: d,
    handleDeleteAccount: u
  } = e, m = n.isClaimed();
  return <s.F setting={a.s6.ACCOUNT_DISABLE_ACCOUNT}><r.hjN className={t} title={l.intl.string(l.t.ZKsIkp)}>{<r.R94 className={o.description} type={r.R94.Types.DESCRIPTION}>{m ? l.intl.string(l.t.TIh3Ym) : l.intl.string(l.t.czsGAw)}</r.R94>}{<r.hE2 size={"sm"} className={o.buttonContainer}>{m ? <r.zxk variant={"critical-primary"} size={"sm"} text={l.intl.string(l.t.jf5GGR)} disabled={c} onClick={d} /> : null}{<s.F setting={a.s6.ACCOUNT_DELETE_ACCOUNT}><r.zxk variant={"critical-secondary"} size={"sm"} text={l.intl.string(l.t["8lQ2ra"])} disabled={c} onClick={u} /></s.F>}</r.hE2>}</r.hjN></s.F>
}