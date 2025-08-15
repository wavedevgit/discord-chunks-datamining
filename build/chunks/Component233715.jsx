/** Chunk was on 73551 **/
/** chunk id: 233715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk422499 = require("./422499.js");

function s(e) {
  let {
    children: t,
    className: n,
    flashKey: l
  } = e, [s, c] = i.useState(false), u = i.useRef(null);
  return i.useEffect(() => (c(true), u.current = window.setTimeout(() => {
    c(false)
  }, 2e3), () => {
    null != u.current && clearTimeout(u.current)
  }), [l]), (0, r.jsx)("div", {
    "data-flash": s,
    className: a()(o.flash, n),
    children: t
  })
}