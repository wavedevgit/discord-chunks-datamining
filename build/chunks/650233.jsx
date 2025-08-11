/** Chunk was on 95468 **/
/** chunk id: 650233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => x,
  default: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk390885 = require("./390885.js"),
  Chunk495784 = require("./495784.js"),
  Chunk950012 = require("./950012.js"),
  Chunk161836 = require("./161836.jsx"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk778360 = require("./778360.js");

function f(e) {
  let {
    transitionState: t,
    onClose: n,
    isNUXFlow: f
  } = e;
  return l.useEffect(() => {
    o.Z.hideHubUpsell(), f && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION)
  }, [f]), <a.Y0X className={h.modalRoot} transitionState={t} aria-label={m.intl.string(m.t["3khS8P"])} impression={{
      impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP
    }} parentComponent={"HubEmailConnectionModal"}><a.hzk style={{
        overflow: "hidden",
        paddingRight: "0px"
      }} paddingFix={false} className={h.modalContent}><div className={h.container}>{<div className={h.sidebarContainer}><d.Z /></div>}{<div className={h.contentContainer}>{<a.olH onClick={n} className={h.closeButton} />}{<c.Z isNUXFlow={f} onClose={n} />}</div>}</div></a.hzk></a.Y0X>
}
let x = e => {
  let {
    invite: t
  } = e;
  return <div className={h.container}>{<div className={h.sidebarContainer}><d.Z /></div>}{<div className={h.contentContainer}><c.Z invite={t} /></div>}</div>
}