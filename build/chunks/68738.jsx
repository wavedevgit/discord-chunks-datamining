/** Chunk was on 34684 **/
/** chunk id: 68738, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk249453 = require("./249453.js"),
  Chunk991249 = require("./991249.js"),
  Chunk388032 = require("./388032.js");

function s(t) {
  let {
    widget: e,
    onSelect: r,
    onClose: s
  } = t, p = (0, c.Z)(e), f = (0, l.Z)(e.id, "boolean" == typeof e.meta.horizontal && e.meta.horizontal), b = o.useRef(s);
  return o.useEffect(() => {
    b.current = s
  }), o.useEffect(() => () => b.current(), []), <i.v2r navId={"overlay-go-live-widget-context-menu"} onClose={a.Zy} aria-label={u.intl.string(u.t.tPfVWl)} onSelect={r}>{f}{p}</i.v2r>
}