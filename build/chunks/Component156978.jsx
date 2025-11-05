/** Chunk was on 1272 **/
/** chunk id: 156978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk122611 = require("./122611.jsx"),
  Chunk619224 = require("./619224.js");

function s(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, s = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = s.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, r.jsx)("div", {
    className: a.container,
    ref: s,
    children: (0, r.jsx)(l.Z, {
      guild: t
    })
  })
}