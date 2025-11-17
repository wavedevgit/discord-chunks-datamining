/** Chunk was on 34684 **/
/** chunk id: 68738, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk249453 = require("./249453.jsx"),
  Chunk991249 = require("./991249.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    widget: e,
    onSelect: r,
    onClose: s
  } = t, p = (0, c.Z)(e), b = (0, l.Z)(e.id, "boolean" == typeof e.meta.horizontal && e.meta.horizontal), f = o.useRef(s);
  return o.useEffect(() => {
    f.current = s
  }), o.useEffect(() => () => {
    var t;
    return null == (t = f.current) ? true : t.call(f)
  }, []), (0, n.jsxs)(i.v2r, {
    navId: "overlay-go-live-widget-context-menu",
    onClose: a.Zy,
    "aria-label": u.intl.string(u.t.tPfVWi),
    onSelect: r,
    children: [b, p]
  })
}