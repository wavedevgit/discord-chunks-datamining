/** Chunk was on 78238 **/
/** chunk id: 440173, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk734337 = require("./734337.jsx"),
  Chunk871648 = require("./871648.jsx"),
  Chunk915908 = require("./915908.jsx"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    onSelect: t,
    onClose: r,
    widget: b
  } = e, f = (0, a.A)(), p = (0, c.A)(b), y = o.useRef(r), O = (0, u.A)(b.id, "boolean" != typeof b.meta.horizontal || b.meta.horizontal);
  return o.useEffect(() => {
    y.current = r
  }), o.useEffect(() => () => {
    var e;
    return null == (e = y.current) ? true : e.call(y)
  }, []), (0, n.jsxs)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "overlay-video-widget-context-menu",
    onClose: l.Z_,
    "aria-label": s.intl.string(s.t.tPfVWi),
    onSelect: t,
    children: [f, O, p]
  })
}