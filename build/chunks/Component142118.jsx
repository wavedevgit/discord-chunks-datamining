/** Chunk was on 13608 **/
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
    init: c
  } = t, u = null == n ? true : n();
  return l.useEffect(() => {
    null == c || c()
  }, [c]), (0, r.jsx)(o.hjN, {
    tag: o.RB0.H1,
    className: a.category,
    title: u,
    titleClassName: a.categoryTitle,
    children: s.map(e => (0, r.jsx)(i.Z, {
      node: e
    }, e.key))
  })
})