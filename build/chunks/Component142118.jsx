/** Chunk was on 47129 **/
/** chunk id: 142118, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk966401 = require("./966401.js");
let s = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: s,
    render: u,
    init: c
  } = t, d = null == n ? true : n();
  return (i.useEffect(() => {
    null == c || c()
  }, [c]), null != u) ? (0, r.jsx)(u, {}) : (0, r.jsx)(l.hjN, {
    tag: l.RB0.H1,
    className: a.category,
    title: d,
    titleClassName: a.categoryTitle,
    children: s.map(e => (0, r.jsx)(o.Z, {
      node: e
    }, e.key))
  })
})