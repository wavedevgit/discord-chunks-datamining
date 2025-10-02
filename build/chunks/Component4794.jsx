/** Chunk was on 54573 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk475528 = require("./475528.js");
let c = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: c,
    useSubtitle: u
  } = t, [d, f] = l.useState(false), {
    navTransition: b
  } = (0, o.t)();
  l.useEffect(() => {
    var e;
    (null == b || null == (e = b.targetAccordion) ? true : e.key) === t.key && f(true)
  }, [null == b ? true : b.targetAccordion, t.key]);
  let m = null == n ? true : n(d),
    p = null == u ? true : u();
  return (0, r.jsx)("div", {
    className: s.accordion,
    children: (0, r.jsx)(a.I, {
      title: m,
      subtitle: p,
      isOpen: d,
      setIsOpen: f,
      children: c.map(e => (0, r.jsx)(i.Z, {
        node: e
      }, e.key))
    })
  })
})