/** Chunk was on 88657 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk475528 = require("./475528.js");
let u = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useSubtitle: d,
    useNotice: f
  } = t, [b, p] = l.useState(false), {
    navTransition: y
  } = (0, i.t)();
  l.useEffect(() => {
    (null == y ? true : y.targetAccordionKey) === t.key && p(true)
  }, [null == y ? true : y.targetAccordionKey, t.key]);
  let j = null == n ? true : n(b),
    m = null == d ? true : d(),
    v = null == f ? true : f();
  return (0, r.jsx)("div", {
    className: s.accordion,
    children: (0, r.jsxs)(a.I, {
      title: j,
      subtitle: m,
      isOpen: b,
      setIsOpen: p,
      children: [null != v && (0, r.jsx)("div", {
        className: s.notice,
        children: (0, r.jsx)(c.Z, {
          notice: v
        })
      }), u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })
  })
})