/** Chunk was on 81985 **/
/** chunk id: 233715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk675880 = require("./675880.js");

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