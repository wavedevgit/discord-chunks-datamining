/** Chunk was on 36878 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk476804 = require("./476804.js");
let r = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: r,
    render: u,
    init: c
  } = t, d = null == n ? true : n();
  return (l.useEffect(() => {
    null == c || c()
  }, [c]), null != u) ? (0, i.jsx)(u, {}) : (0, i.jsx)(s.hjN, {
    tag: s.RB0.H1,
    className: a.category,
    title: d,
    titleClassName: a.categoryTitle,
    children: r.map(e => (0, i.jsx)(o.Z, {
      node: e
    }, e.key))
  })
})