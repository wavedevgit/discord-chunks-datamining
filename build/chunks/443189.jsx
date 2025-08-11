/** Chunk was on 6074 **/
/** chunk id: 443189, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk221488 = require("./221488.js"),
  Chunk963705 = require("./963705.js");

function h(t) {
  let {
    source: e,
    onClose: n,
    transitionState: h
  } = t;
  c.useEffect(() => {
    o.default.track(i.rMx.OPEN_MODAL, {
      type: i.jXE.CONTACT_SYNC_NC_MODAL,
      source: {
        location: e
      }
    })
  }, [e]);
  let u = (0, s.Dt)();
  return <r.Y0X className={d.contactSync} transitionState={h} aria-labelledby={u} parentComponent={"ContactSyncModal"}>{<r.olH onClick={n} className={d.modalCloseButton} />}{<div className={d.inner}>{<r.X6q variant={"heading-xl/extrabold"} color={"header-primary"} className={d.header}>{l.intl.string(l.t.fdR8HR)}</r.X6q>}{<r.Text variant={"text-md/normal"} color={"header-secondary"}>{l.intl.string(l.t.JXyNq6)}</r.Text>}</div>}{<div className={d.container}><img alt={""} src={b} /></div>}</r.Y0X>
}