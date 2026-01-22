/** Chunk was on 21738 **/
/** chunk id: 64084, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk775135 = require("./775135.jsx"),
  Chunk935318 = require("./935318.js");

function s(e) {
  let {
    guild: t,
    setHasSubheader: n
  } = e, s = i.useRef(null);
  return i.useLayoutEffect(() => {
    let e = s.current;
    null != e && n(e.childNodes.length > 0)
  }), (0, r.jsx)("div", {
    className: a.k,
    ref: s,
    children: (0, r.jsx)(l.A, {
      guild: t
    })
  })
}