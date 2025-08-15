/** Chunk was on 36878 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk476804 = require("./476804.js");
let a = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: a,
    render: u,
    init: c
  } = t, d = null == n ? true : n();
  return (l.useEffect(() => {
    null == c || c()
  }, [c]), null != u) ? (0, i.jsx)(u, {}) : (0, i.jsx)(s.hjN, {
    tag: s.RB0.H1,
    className: r.category,
    title: d,
    titleClassName: r.categoryTitle,
    children: a.map(e => (0, i.jsx)(o.Z, {
      node: e
    }, e.key))
  })
})