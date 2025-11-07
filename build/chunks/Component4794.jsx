/** Chunk was on 18729 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk445642 = require("./445642.js");
let s = Chunk647438.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: s,
    useSubtitle: u
  } = t, [d, f] = l.useState(false), {
    navTransition: b
  } = (0, o.t)();
  l.useEffect(() => {
    (null == b ? true : b.targetAccordionKey) === t.key && f(true)
  }, [null == b ? true : b.targetAccordionKey, t.key]);
  let p = null == n ? true : n(d),
    y = null == u ? true : u();
  return (0, r.jsx)("div", {
    className: c.accordion,
    children: (0, r.jsx)(a.I, {
      title: p,
      subtitle: y,
      isOpen: d,
      setIsOpen: f,
      children: s.map(e => (0, r.jsx)(i.Z, {
        node: e
      }, e.key))
    })
  })
})