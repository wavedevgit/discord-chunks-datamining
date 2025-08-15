/** Chunk was on 26775 **/
/** chunk id: 740579, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk167675 = require("./167675.jsx"),
  Chunk249453 = require("./249453.jsx"),
  Chunk991249 = require("./991249.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    onSelect: t,
    onClose: r,
    widget: s
  } = e, b = (0, l.Z)(), p = (0, a.Z)(s), y = o.useRef(r), O = (0, u.Z)(s.id, "boolean" != typeof s.meta.horizontal || s.meta.horizontal);
  return o.useEffect(() => {
    y.current = r
  }), o.useEffect(() => () => y.current(), []), (0, n.jsxs)(i.v2r, {
    navId: "overlay-video-widget-context-menu",
    onClose: c.Zy,
    "aria-label": f.intl.string(f.t.tPfVWl),
    onSelect: t,
    children: [b, O, p]
  })
}