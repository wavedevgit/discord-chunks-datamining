/** Chunk was on 75708 **/
/** chunk id: 878596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk83091 = require("./83091.js");
let a = e => {
  let {
    label: t,
    onClick: n,
    submitting: a
  } = e;
  return <r.P3F onClick={a ? true : n} className={s.button}><div className={s.contentContainer}>{a ? <r.$jN type={r.$jN.Type.PULSING_ELLIPSIS} className={s.__invalid_spinner} /> : <r.Text variant={"text-md/medium"} className={s.label}>{t}</r.Text>}{<r.CJ0 size={"md"} color={"currentColor"} className={s.arrow} />}</div></r.P3F>
}