/** Chunk was on 77870 **/
/** chunk id: 721931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk636920 = require("./636920.jsx"),
  Chunk889599 = require("./889599.js"),
  Chunk248789 = require("./248789.js");

function u(e) {
  let {
    hangStatusActivity: t,
    channel: n,
    userId: i,
    setPopoutRef: u
  } = e, d = l.useRef(null);
  return l.useEffect(() => {
    null == u || u(null == d ? true : d.current)
  }, [d, u]), (0, r.jsx)("div", {
    ref: d,
    className: s()(c.popover, o.kL),
    children: (0, r.jsx)(a.Z, {
      hangStatusActivity: t,
      channel: n,
      userId: i,
      analyticsSource: "HangStatusPopout",
      iconClassName: o.Kk,
      textClassName: o.qS
    })
  })
}