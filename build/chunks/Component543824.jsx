/** Chunk was on 21289 **/
/** chunk id: 543824, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk871648 = require("./871648.jsx"),
  Chunk915908 = require("./915908.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    widget: t,
    onSelect: r,
    onClose: s
  } = e, p = (0, c.A)(t), b = (0, l.A)(t.id, "boolean" == typeof t.meta.horizontal && t.meta.horizontal), f = o.useRef(s);
  return o.useEffect(() => {
    f.current = s
  }), o.useEffect(() => () => {
    var e;
    return null == (e = f.current) ? true : e.call(f)
  }, []), (0, n.jsxs)(a.W1t, {
    "data-menu-migration-ready": true,
    navId: "overlay-go-live-widget-context-menu",
    onClose: i.Z_,
    "aria-label": u.intl.string(u.t.tPfVWi),
    onSelect: r,
    children: [b, p]
  })
}