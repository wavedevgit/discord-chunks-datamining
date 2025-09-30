/** Chunk was on 59739 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk476804 = require("./476804.js");
let s = Chunk647438.memo(function(e) {
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
  }, [u]), null != c) ? (0, r.jsx)(c, {}) : (0, r.jsx)(l.hjN, {
    tag: l.RB0.H1,
    className: a.category,
    title: d,
    titleClassName: a.categoryTitle,
    children: s.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))
  })
})