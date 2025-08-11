/** Chunk was on 36878 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk355521 = require("./355521.js");
let s = Chunk73800.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: s,
    render: c,
    init: u
  } = t, d = null == n ? true : n();
  return (o.useEffect(() => {
    null == u || u()
  }, [u]), null != c) ? (0, i.jsx)(c, {}) : (0, i.jsx)(l.hjN, {
    tag: l.RB0.H1,
    className: a.category,
    title: d,
    titleClassName: a.categoryTitle,
    children: s.map(e => (0, i.jsx)(r.Z, {
      node: e
    }, e.key))
  })
})