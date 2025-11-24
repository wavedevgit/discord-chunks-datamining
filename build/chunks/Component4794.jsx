/** Chunk was on 46984 **/
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
  Chunk445642 = require("./445642.js");
let u = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: u,
    useCollapsedSubtitle: d,
    useNotice: f
  } = t, [b, y] = l.useState(false), {
    navTransition: p
  } = (0, i.t)();
  l.useEffect(() => {
    (null == p ? true : p.targetAccordionKey) === t.key && y(true)
  }, [null == p ? true : p.targetAccordionKey, t.key]);
  let v = null == n ? true : n(b),
    j = null == d ? true : d(),
    g = null == f ? true : f();
  return (0, r.jsx)("div", {
    className: s.accordion,
    children: (0, r.jsxs)(a.I, {
      title: v,
      collapsedSubtitle: j,
      isOpen: b,
      setIsOpen: y,
      children: [null != g && (0, r.jsx)("div", {
        className: s.notice,
        children: (0, r.jsx)(c.Z, {
          notice: g
        })
      }), u.map(e => (0, r.jsx)(o.Z, {
        node: e
      }, e.key))]
    })
  })
})