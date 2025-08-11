/** Chunk was on 97951 **/
/** chunk id: 537509, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => l
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk567351 = require("./567351.js");

function l(t) {
  let {
    transitionState: e,
    onConfirm: n,
    onClose: l
  } = t, [d, x] = a.useState(false), h = (0, o.Dt)();
  return <r.Y0X transitionState={e} aria-labelledby={h} size={r.CgR.DYNAMIC} className={c.root} parentComponent={"AcceptRequestConfirmationModal"}>{<r.xBx><r.X6q id={h} variant={"heading-xl/bold"} color={"header-primary"}>{s.intl.string(s.t.eJzSDQ)}</r.X6q></r.xBx>}{<r.hzk className={c.content}><r.Text variant={"text-md/medium"} color={"header-secondary"}>{s.intl.string(s.t.GB4jU1)}</r.Text></r.hzk>}{<r.mzw className={c.footer}>{<r.zxk variant={"primary"} text={s.intl.string(s.t.MMlhsr)} type={"submit"} onClick={() => {
          if (!d) {
            x(true);
            try {
              n()
            } catch (t) {} finally {
              x(false)
            }
            l()
          }
        }} loading={d} />}{<r.zxk variant={"secondary"} text={s.intl.string(s.t["ETE/oK"])} onClick={l} disabled={d} />}</r.mzw>}</r.Y0X>
}