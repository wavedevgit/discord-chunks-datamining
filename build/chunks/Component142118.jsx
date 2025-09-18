/** Chunk was on 47129 **/
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
  return (i.useEffect(() => {
    null == c || c()
  }, [c]), null != u) ? (0, r.jsx)(u, {}) : (0, r.jsx)(l.hjN, {
    tag: l.RB0.H1,
    className: s.category,
    title: d,
    titleClassName: s.categoryTitle,
    children: a.map(e => (0, r.jsx)(o.Z, {
      node: e
    }, e.key))
  })
})