/** Chunk was on 88647 **/
/** chunk id: 233715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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