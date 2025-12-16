/** Chunk was on 1272 **/
/** chunk id: 156978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk122611 = require("./122611.jsx"),
  Chunk691356 = require("./691356.js");

function o(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, o = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = o.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, r.jsx)("div", {
    className: a.container,
    ref: o,
    children: (0, r.jsx)(l.Z, {
      guild: t
    })
  })
}