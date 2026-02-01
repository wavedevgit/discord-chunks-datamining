/** Chunk was on 61344 **/
/** chunk id: 245748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk606878 = require("./606878.js");

function o(e) {
  let {
    children: t,
    className: n,
    flashKey: i
  } = e, [o, c] = r.useState(false), u = r.useRef(null);
  return r.useEffect(() => (c(true), u.current = window.setTimeout(() => {
    c(false)
  }, 2e3), () => {
    null != u.current && clearTimeout(u.current)
  }), [i]), (0, l.jsx)("div", {
    "data-flash": o,
    className: a()(s.j, n),
    children: t
  })
}