/** Chunk was on 75708 **/
/** chunk id: 249996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk657707 = require("./657707.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk486135 = require("./486135.js");

function c(e) {
  let {
    redactionType: t,
    label: n
  } = e, c = r.useMemo(() => {
    switch (t) {
      case a.Q4.BLUR:
        return s.XBm;
      case a.Q4.BLOCK:
        return s.t6m;
      case a.Q4.SHOW:
        return s.tEF;
      default:
        return null
    }
  }, [t]);
  return <div className={o.rowContainer}>{null != c && <c size={"xs"} color={"currentColor"} />}{<l.Text variant={"text-md/normal"} color={"header-secondary"}>{n}</l.Text>}</div>
}
let d = Chunk73800.memo(function(e) {
  let {
    option: t
  } = e;
  return <c redactionType={t.value} label={t.label} />
})