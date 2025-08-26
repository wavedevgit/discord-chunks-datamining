/** Chunk was on 76210 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk476804 = require("./476804.js");
let o = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: o,
    render: u,
    init: c
  } = t, d = null == n ? true : n();
  return (i.useEffect(() => {
    null == c || c()
  }, [c]), null != u) ? (0, l.jsx)(u, {}) : (0, l.jsx)(r.hjN, {
    tag: r.RB0.H1,
    className: a.category,
    title: d,
    titleClassName: a.categoryTitle,
    children: o.map(e => (0, l.jsx)(s.Z, {
      node: e
    }, e.key))
  })
})