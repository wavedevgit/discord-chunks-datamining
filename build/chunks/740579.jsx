/** Chunk was on 26775 **/
/** chunk id: 740579, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk167675 = require("./167675.jsx"),
  Chunk249453 = require("./249453.jsx"),
  Chunk991249 = require("./991249.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    onSelect: e,
    onClose: r,
    widget: p
  } = t, f = (0, c.Z)(), b = (0, l.Z)(p), y = o.useRef(r), d = (0, u.Z)(p.id, "boolean" != typeof p.meta.horizontal || p.meta.horizontal);
  return o.useEffect(() => {
    y.current = r
  }), o.useEffect(() => () => y.current(), []), <i.v2r navId={"overlay-video-widget-context-menu"} onClose={a.Zy} aria-label={s.intl.string(s.t.tPfVWl)} onSelect={e}>{f}{d}{b}</i.v2r>
}