/** Chunk was on 46984 **/
/** chunk id: 4794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk59662 = require("./59662.js"),
  Chunk36361 = require("./36361.jsx"),
  Chunk530171 = require("./530171.jsx"),
  Chunk175993 = require("./175993.jsx"),
  Chunk445642 = require("./445642.js");
let f = Chunk473749.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    layout: i,
    useCollapsedSubtitle: f,
    useNotice: p
  } = t, [b, y] = l.useState(false), {
    navTransition: g
  } = (0, a.t)();
  l.useEffect(() => {
    (null == g ? true : g.targetAccordionKey) === t.key && y(true)
  }, [null == g ? true : g.targetAccordionKey, t.key]);
  let v = null == n ? true : n(b),
    h = null == f ? true : f(),
    m = null == p ? true : p();
  return (0, r.jsx)("div", {
    className: o()({
      [d.open]: b
    }),
    children: (0, r.jsxs)(c.I, {
      title: v,
      collapsedSubtitle: h,
      isOpen: b,
      setIsOpen: y,
      children: [null != m && (0, r.jsx)(u.Z, {
        notice: m
      }), i.map(e => (0, r.jsx)(s.Z, {
        node: e
      }, e.key))]
    })
  })
})